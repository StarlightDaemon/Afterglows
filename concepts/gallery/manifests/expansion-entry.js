// Mechanical defaults only. Subject facts and placement belong to each shard.
// Model identity is the confirmed gpt-6-astra identifier; no patch version is inferred.
export function expansionEntries(section, category, subjects) {
  return subjects.map(({ id, ...subject }) => ({
    ...subject,
    tag: `concept-${id}`,
    source: "expansion",
    section,
    category,
    module: `./concepts/${section}/${category}/${id}-concept.js`,
    origin: { contributions: [{ agent: "codex", model: "astra", version: "6" }] },
    added: subject.added || "2026-09-07T08:50:01Z",
    updated: subject.updated || subject.added || "2026-09-07T08:50:01Z",
    versioned: false,
    badge: "New v1",
    badgeCls: "meta-status-new",
    default: null,
    versions: [],
    aliases: subject.aliases || [],
    facets: subject.facets || [],
    medium: "SVG and CSS",
  }));
}
