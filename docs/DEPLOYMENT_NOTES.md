# Deployment Notes for Afterglows

This repository is the canonical source for **https://afterglows.starlightdaemon.dev/**.

Use this document as a reference for the repository's deployment shape, not as a generic first-time setup guide.

## Target Hosting Model

The accepted deployment boundary is governed by `.raiden/state/DECISIONS.md`
D-003. It is implemented locally but remains pending until the workflow is
committed, pushed, selected as the Pages source, and successfully deployed.

- Repository: `StarlightDaemon/Afterglows`
- Live domain: `afterglows.starlightdaemon.dev`
- Publish target: allowlisted `dist/` artifact built by `.github/workflows/deploy-pages.yml`
- Custom domain intent is mirrored in the artifact's `CNAME`; with an Actions publishing source, the repository's Pages setting remains authoritative
- Public underscored directory: `_templates/`
- Repository-only directories such as `.raiden/`, `.audits/`, `_archive/`, and `scripts/` are excluded from the artifact

The currently deployed site still uses the legacy repository-root boundary.
Treat the transition as incomplete until the production acceptance checks in
the release-readiness report pass.

## GitHub Pages Settings

The GitHub Pages configuration should remain aligned with this repository:

1. Go to the repository **Settings** tab.
2. Open **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Confirm the **Deploy allowlisted Pages site** workflow completes successfully on `main`.
5. Confirm the custom domain is set to `afterglows.starlightdaemon.dev`.
6. Confirm **Enforce HTTPS** is enabled once the certificate is issued.

## Notes

- Run `npm run build` locally to reproduce the exact `dist/` artifact. The build fails if a forbidden repository-only path enters the artifact.
- Run `npm run site:check` after the build to verify internal paths, canonical metadata, social preview and favicon assets, sitemap coverage, and the custom 404 page.
- Run `npm run security:check` after changing a CSP or inline script. Inline Matrix/CRT scripts use CSP hashes, so intentional changes require updating the matching hash.
- Theme fonts are first-party assets under `assets/fonts/`; public CSPs restrict `font-src` to `'self'`. Keep the WOFF2 files and their bundled OFL notices in the Pages artifact.
- The local development server binds only to `127.0.0.1`, disables CORS and directory listings, and refuses dotfiles. Do not weaken those defaults for routine previewing.
- Do not use `your-username.github.io/Afterglows/` placeholders in current Afterglows docs.
- If another repository links to Afterglows, treat that as a consumer, not the deployment owner.
- GitHub UI settings and DNS records are external to this repository and must be maintained separately.
