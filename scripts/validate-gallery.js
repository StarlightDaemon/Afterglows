import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

import { CATEGORIES, CONCEPTS, SECTIONS, COMPATIBILITY_MODULES } from "../concepts/gallery/manifest.js";

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
  if (["expansion", "curation", "finale"].includes(concept.source)) {
    for (const field of ["definition", "motionThesis", "distinction"]) {
      if (typeof concept[field] !== "string" || !concept[field].trim()) {
        errors.push(`Expansion entry ${concept.tag} requires ${field}`);
      }
    }
    if (!Array.isArray(concept.aliases) || !Array.isArray(concept.facets) ||
        [...(concept.aliases || []), ...(concept.facets || [])].some((value) => typeof value !== "string" || !value.trim())) {
      errors.push(`Invalid aliases/facets on ${concept.tag}`);
    }
    if (!concept.references?.length || concept.references.some((ref) => {
      try { return new URL(ref).protocol !== "https:"; } catch { return true; }
    })) errors.push(`Expansion entry ${concept.tag} requires HTTPS factual references`);
    if (!Number.isFinite(concept.cycleSeconds) || concept.cycleSeconds <= 0 || !concept.medium) {
      errors.push(`Missing animation design metadata on ${concept.tag}`);
    }
    if (!concept.origin?.contributions?.some((contribution) => contribution.agent === "codex" && contribution.model === "astra" && contribution.version === "6")) {
      errors.push(`Missing confirmed Codex/Astra provenance on ${concept.tag}`);
    }
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
  if (["expansion", "curation", "finale"].includes(concept.source)) {
    // Nonzero CSS width/height require units, including SVG geometry rules.
    // Browsers silently discard these declarations and leave misleading poses.
    const styles = code.match(/<style>([\s\S]*?)<\/style>/)?.[1] || "";
    for (const dimension of styles.matchAll(/(?<![-\w])(?:width|height):\s*((?:\d*\.)?\d+)(?=[;\s}])/g)) {
      if (Number(dimension[1]) !== 0) errors.push(`Unitless CSS dimension in ${concept.module}: ${dimension[0]}`);
    }
    // These bare names are consumed as animation-shorthand keywords.
    if (/@keyframes\s+(?:none|normal|reverse|alternate|alternate-reverse|forwards|backwards|both|running|paused|linear|ease|ease-in|ease-out|ease-in-out|step-start|step-end|infinite)\s*\{/.test(styles)) {
      errors.push(`Ambiguous animation-shorthand keyframe name in ${concept.module}`);
    }
    const registrations = [];
    try {
      vm.runInNewContext(code, {
        HTMLElement: class {},
        customElements: {
          get: () => undefined,
          define: (tag, component) => registrations.push({ tag, component }),
        },
      }, { timeout: 1000, filename: file });
      if (registrations.length !== 1 || registrations[0].tag !== concept.tag) {
        errors.push(`Expansion module must register exactly its canonical tag: ${concept.module}`);
      }
    } catch (error) {
      errors.push(`Registration fails in ${concept.module}: ${error.message}`);
    }
    if (/\b(?:import\s|fetch\s*\(|XMLHttpRequest|WebSocket|eval\s*\()/.test(code)) {
      errors.push(`Expansion component is not self-contained: ${concept.module}`);
    }
    if (!/attachShadow\(\{\s*mode:\s*["']open["']/.test(code) || !code.includes("prefers-reduced-motion")) {
      errors.push(`Missing open Shadow DOM or standalone reduced-motion support: ${concept.module}`);
    }
  }
}

const compatibilityFiles = new Set();
for (const alias of COMPATIBILITY_MODULES) {
  const file = path.resolve(galleryRoot, alias.module);
  const target = path.resolve(galleryRoot, alias.target);
  if (!contained(componentRoot, file) || !referencedFiles.has(target.toLowerCase()) || referencedFiles.has(file.toLowerCase())) {
    errors.push(`Invalid compatibility mapping: ${alias.module}`);
    continue;
  }
  const relative = path.relative(path.dirname(file), target).replaceAll('\\', '/');
  const expected = `// Preserved embed URL; canonical Wind Rose now belongs to meteorology.\nimport(${JSON.stringify(relative)});\n`;
  if (!fs.existsSync(file) || fs.readFileSync(file, 'utf8') !== expected) errors.push(`Invalid compatibility shim: ${alias.module}`);
  if (compatibilityFiles.has(file.toLowerCase())) errors.push(`Duplicate compatibility shim: ${alias.module}`);
  compatibilityFiles.add(file.toLowerCase());
}
const canonicalFiles = walk(componentRoot).filter((file) => file.endsWith("-concept.js") && !compatibilityFiles.has(file.toLowerCase()));
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
