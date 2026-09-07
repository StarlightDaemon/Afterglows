import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

import { CATEGORIES, CONCEPTS, SECTIONS } from "../concepts/gallery/manifest.js";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const galleryRoot = path.join(projectRoot, "concepts", "gallery");
const componentRoot = path.join(galleryRoot, "concepts");
const errors = [];
const warnings = [];

function walk(directory) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, entry.name);
    if (entry.isSymbolicLink()) {
      errors.push(`Symlink is not allowed in the component tree: ${absolute}`);
    } else if (entry.isDirectory()) {
      files.push(...walk(absolute));
    } else if (entry.isFile()) {
      files.push(absolute);
    }
  }
  return files;
}

function contained(root, target) {
  const relative = path.relative(root, target);
  return relative && !relative.startsWith("..") && !path.isAbsolute(relative);
}

function unique(values, label) {
  const seen = new Set();
  for (const value of values) {
    const normalized = String(value).toLowerCase();
    if (seen.has(normalized)) errors.push(`Duplicate ${label}: ${value}`);
    seen.add(normalized);
  }
}

console.log("=== Unified Animation Concepts Validator ===");
console.log(`${CONCEPTS.length} concepts in ${CATEGORIES.length} categories and ${SECTIONS.length} sections`);

unique(SECTIONS.map((section) => section.id), "section id");
unique(CATEGORIES.map((category) => category.id), "category id");
unique(CONCEPTS.map((concept) => concept.tag), "custom-element tag");
unique(CONCEPTS.map((concept) => concept.label), "concept label");
unique(CONCEPTS.map((concept) => concept.module), "module path");

const sectionIds = new Set(SECTIONS.map((section) => section.id));
const categories = new Map(CATEGORIES.map((category) => [category.id, category]));
const referencedFiles = new Set();

for (const category of CATEGORIES) {
  if (!sectionIds.has(category.section)) {
    errors.push(`Unknown section ${category.section} on category ${category.id}`);
  }
  const actualCount = CONCEPTS.filter((concept) => concept.category === category.id).length;
  if (actualCount !== category.expectedCount) {
    errors.push(`${category.id}: expected ${category.expectedCount} concepts, found ${actualCount}`);
  }
}

for (const concept of CONCEPTS) {
  const category = categories.get(concept.category);
  if (!category) {
    errors.push(`Unknown category ${concept.category} on ${concept.tag}`);
    continue;
  }
  if (concept.section !== category.section) {
    errors.push(`Section/category mismatch on ${concept.tag}: ${concept.section}/${concept.category}`);
  }
  if (!concept.origin?.contributions?.length) {
    errors.push(`Invalid or missing origin.contributions on ${concept.tag}`);
  }
  for (const field of ["added", "updated"]) {
    if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(concept[field] || "")) {
      errors.push(`Invalid ${field} timestamp on ${concept.tag}: ${concept[field]}`);
    }
  }
  if (concept.versioned && (!concept.versions?.length || !concept.versions.some((version) => version.v === concept.default))) {
    errors.push(`Invalid version history/default on ${concept.tag}`);
  }

  if (!/^\.\/concepts\/[a-z0-9-]+\/[a-z0-9-]+\/[a-z0-9-]+-concept\.js$/.test(concept.module)) {
    errors.push(`Unsafe or noncanonical module path on ${concept.tag}: ${concept.module}`);
    continue;
  }
  const expectedPrefix = `./concepts/${concept.section}/${concept.category}/`;
  if (!concept.module.startsWith(expectedPrefix)) {
    errors.push(`Module folder does not match taxonomy on ${concept.tag}: ${concept.module}`);
  }

  const file = path.resolve(galleryRoot, concept.module);
  if (!contained(componentRoot, file)) {
    errors.push(`Module escapes component root on ${concept.tag}: ${concept.module}`);
    continue;
  }
  referencedFiles.add(file.toLowerCase());
  if (!fs.existsSync(file)) {
    errors.push(`Missing module for ${concept.tag}: ${concept.module}`);
    continue;
  }

  const code = fs.readFileSync(file, "utf8");
  try {
    new vm.Script(code, { filename: file });
  } catch (error) {
    errors.push(`Syntax error in ${concept.module}: ${error.message}`);
  }
  const definition = code.match(/customElements\.define\s*\(\s*["']([^"']+)["']/);
  if (!definition) errors.push(`Missing customElements.define in ${concept.module}`);
  else if (definition[1] !== concept.tag) {
    errors.push(`Tag mismatch in ${concept.module}: defines ${definition[1]}, manifest has ${concept.tag}`);
  }
  if (!code.includes("attachShadow")) warnings.push(`No attachShadow found in ${concept.module}`);
}

const canonicalFiles = walk(componentRoot).filter((file) => file.endsWith("-concept.js"));
for (const file of canonicalFiles) {
  if (!referencedFiles.has(file.toLowerCase())) {
    errors.push(`Orphan component module: ${path.relative(projectRoot, file)}`);
  }
}
if (canonicalFiles.length !== CONCEPTS.length) {
  errors.push(`Canonical module count ${canonicalFiles.length} does not match catalog count ${CONCEPTS.length}`);
}

if (warnings.length) {
  console.log(`Warnings (${warnings.length}):`);
  for (const warning of warnings) console.log(`  - ${warning}`);
}
if (errors.length) {
  console.error(`Gallery validation failed (${errors.length}):`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(`SUCCESS: all ${CONCEPTS.length} concepts are uniquely mapped and structurally valid.`);
