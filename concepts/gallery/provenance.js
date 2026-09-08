// Filters describe one real contribution, not a combination of different people.
export function matchesProvenance(contributions, { origins, models, versions }) {
  return contributions.some(({ agent, model, version }) =>
    origins.has(agent) &&
    models.has(model ?? "unspecified") &&
    versions.has(version ?? "unspecified")
  );
}
