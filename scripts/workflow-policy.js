// GitHub Actions policy. A push to main deploys the site, so the workflow files
// are the most sensitive files in the repository. These rules keep them that way:
//   - every third-party action is pinned to a full commit SHA;
//   - no pull_request_target / workflow_run triggers (they run with write access
//     on untrusted input);
//   - permissions are declared, and a write scope is allowed only where listed;
//   - no secrets and no attacker-controlled expressions (`github.event.*`,
//     `github.head_ref`) are interpolated into a workflow.
// Used by scripts/validate-security.js; exercised by scripts/test-workflow-policy.js.

// Write scopes a workflow may request. Anything else, including contents: write, fails.
export const ALLOWED_WRITE_SCOPES = new Map([
  ['deploy-pages.yml', new Set(['pages', 'id-token'])],
  ['codeql.yml', new Set(['security-events'])],
]);

export function checkWorkflow(name, source) {
  const label = `.github/workflows/${name}`;
  const errors = [];
  const lines = source
    .replace(/\r\n?/g, '\n')
    .split('\n')
    .map((line) => line.replace(/(^|\s)#.*$/, ''));
  const allowedWrites = ALLOWED_WRITE_SCOPES.get(name) ?? new Set();

  if (!lines.some((line) => /^permissions:\s*$/.test(line))) {
    errors.push(`${label}: declare a top-level "permissions:" block (default token must be read-only)`);
  }
  lines.forEach((line, index) => {
    const at = `${label}:${index + 1}`;
    const uses = line.match(/^\s*(?:-\s*)?uses:\s*(\S+)/);
    if (uses && !uses[1].startsWith('./') && !/@[0-9a-f]{40}$/.test(uses[1])) {
      errors.push(`${at}: action "${uses[1]}" must be pinned to a full 40-character commit SHA`);
    }
    if (/\b(pull_request_target|workflow_run)\b/.test(line)) {
      errors.push(`${at}: the pull_request_target and workflow_run triggers are not allowed`);
    }
    if (/\bwrite-all\b/.test(line)) {
      errors.push(`${at}: "write-all" permissions are not allowed`);
    }
    const write = line.match(/^\s+([a-z-]+):\s*write\s*$/);
    if (write && !allowedWrites.has(write[1])) {
      errors.push(`${at}: write permission "${write[1]}" is not allowed in ${name}`);
    }
    if (/\$\{\{\s*(github\.event\.|github\.head_ref|secrets\.)/.test(line)) {
      errors.push(`${at}: do not interpolate secrets or attacker-controlled values into a workflow`);
    }
  });
  return errors;
}
