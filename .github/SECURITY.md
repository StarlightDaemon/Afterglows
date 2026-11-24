# Security policy

Afterglows is a static website: HTML, CSS and JavaScript served from GitHub Pages. It has no accounts, no server-side code and no stored user data.

## Reporting a vulnerability

Please report privately, not in a public issue.

1. Open the repository's **Security** tab.
2. Choose **Report a vulnerability** (GitHub private vulnerability reporting).
3. Describe what you found, the page or file involved, and how to reproduce it.

The project is maintained by one person, so replies are best-effort. Expect an acknowledgement within about a week.

## Scope

In scope: the published site at https://afterglows.starlightdaemon.dev/, the code in this repository, and the GitHub Actions workflows that build and deploy it (for example script injection, an unsafe workflow permission, a leaked secret).

Out of scope: findings that need an unsupported or modified browser, or reports about missing HTTP response headers. GitHub Pages does not let the site set them, so the pages use a `Content-Security-Policy` meta tag instead.

## Supported versions

Only the latest release and the current `main` branch are supported.
