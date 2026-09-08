// Browsers may retain a failed dynamic import in their module map. A later
// user-initiated revisit needs a distinct fetch URL; successful loads remain
// cached by ModuleQueue under their canonical path.
export function createModuleLoader(importModule, baseURL) {
  const failures = new Map();
  const pageToken = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
  return async (path) => {
    const attempt = failures.get(path) || 0;
    let request = path;
    if (attempt) {
      const retry = new URL(path, baseURL);
      retry.searchParams.set("ag-retry", `${pageToken}-${attempt}`);
      request = retry.href;
    }
    try {
      return await importModule(request);
    } catch (error) {
      failures.set(path, attempt + 1);
      throw error;
    }
  };
}
