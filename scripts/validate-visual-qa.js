// Local acceptance evidence: bind each manual tile review to the current source.
// The review pages and screenshots are intentionally excluded from the site build.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { CONCEPTS } from "../concepts/gallery/manifest.js";

const root = fileURLToPath(new URL("../", import.meta.url));
const directories = ["gallery-expansion", "gallery-expansion-resumed"].map((name) => path.join(root, ".raiden/state/SNAPSHOTS", name, "visual-qa"));
const additions = CONCEPTS.filter((concept) => concept.source === "expansion");
const baseline = JSON.parse(fs.readFileSync(path.join(root, ".raiden/state/SNAPSHOTS/gallery-expansion-resumed/baseline.json"), "utf8"));
const baselineTags = new Set(baseline.entries.map(({ concept }) => concept.tag));
const reviews = new Map();
const failures = [];

for (const qa of directories) {
  const ledger = JSON.parse(fs.readFileSync(path.join(qa, "review-ledger.json"), "utf8"));
  for (const review of ledger.entries) {
    if (reviews.has(review.tag)) failures.push(`Duplicate review: ${review.tag}`);
    reviews.set(review.tag, { ...review, qa });
  }
}
for (const concept of additions) {
  const review = reviews.get(concept.tag);
  if (!review) { failures.push(`Unreviewed: ${concept.tag}`); continue; }
  if (review.module !== concept.module) failures.push(`Moved after review: ${concept.tag}`);
  const source = fs.readFileSync(new URL(`../concepts/gallery/${concept.module}`, import.meta.url));
  const digest = crypto.createHash("sha256").update(source).digest("hex");
  if (digest !== review.sha256) failures.push(`Changed after review: ${concept.tag}`);
  if (!review.registered || !review.reducedMotionStylePreview || new Set(review.phases).size < 2) {
    failures.push(`Incomplete review coverage: ${concept.tag}`);
  }
  if (!Number.isFinite(Date.parse(review.reviewedAt))) failures.push(`Invalid review date: ${concept.tag}`);
  for (const screenshot of review.screenshots || []) {
    if (path.basename(screenshot) !== screenshot || !screenshot.endsWith(".png") || !fs.existsSync(path.join(review.qa, screenshot))) {
      failures.push(`Missing or invalid screenshot: ${concept.tag} / ${screenshot}`);
    }
  }
  if ((review.screenshots || []).length < 3) failures.push(`Missing phase/static screenshots: ${concept.tag}`);
  if (!baselineTags.has(concept.tag) && (new Set(review.phases).size < 4 || new Set(review.screenshots || []).size < 5)) {
    failures.push(`Resumed review requires four phases and a static pose: ${concept.tag}`);
  }
}
for (const tag of reviews.keys()) {
  if (!additions.some((concept) => concept.tag === tag)) failures.push(`Orphaned review: ${tag}`);
}
if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Visual review evidence verified for ${additions.length} current expansion sources, with phase and reduced-motion style screenshots.`);
}
