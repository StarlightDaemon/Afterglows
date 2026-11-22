import { matchesProvenance } from "./provenance.js";

export const RECENT_LIMIT = 36;

export function statusOf(concept) {
  if (/\bmeta-status-color\b/.test(concept.badgeCls || "")) return "color";
  if (/\bmeta-status-refined\b/.test(concept.badgeCls || "")) return "refined";
  if (/\bmeta-status-new\b/.test(concept.badgeCls || "")) return "new";
  return "original";
}

export function newestConcepts(concepts, limit = RECENT_LIMIT) {
  return concepts.slice().sort(compareDate("added")).slice(0, limit);
}

export function compareDate(field) {
  return (a, b) => {
    const dateOrder = (b[field] || "").localeCompare(a[field] || "");
    if (dateOrder) return dateOrder;
    return (a.label || a.tag || "").localeCompare(b.label || b.tag || "");
  };
}

function allOrSelected(options, values) {
  return options.size ? options : new Set(values);
}

function selectedProvenance(selections, available) {
  const { origins, models, versions } = selections;
  if (!origins.size && !models.size && !versions.size) return null;
  return {
    origins: allOrSelected(origins, available.origins),
    models: allOrSelected(models, available.models),
    versions: allOrSelected(versions, available.versions),
  };
}

export function matchesSelectedProvenance(contributions, selections, available) {
  const selected = selectedProvenance(selections, available);
  return !selected || matchesProvenance(contributions, selected);
}

export function queryConcepts(concepts, state, searchText, available) {
  const query = state.query.trim().toLowerCase();
  const recent = state.view === "recent";
  const candidates = recent ? newestConcepts(concepts) : concepts;
  const selected = selectedProvenance(state, available);
  const visible = candidates.filter((concept) => {
    if (state.section && concept.section !== state.section) return false;
    if (state.category && concept.category !== state.category) return false;
    if (state.statuses.size && !state.statuses.has(statusOf(concept))) return false;
    if (selected && !matchesProvenance(concept.origin?.contributions || [], selected)) return false;
    return !query || (searchText.get(concept.tag) || "").includes(query);
  });

  if (!recent && (state.order === "added" || state.order === "updated")) {
    visible.sort(compareDate(state.order));
  }
  return visible;
}
