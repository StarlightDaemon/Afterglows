# Deployment Notes for Afterglows

This repository is the canonical source for **https://afterglows.starlightdaemon.dev/**.

Use this document as a reference for the repository's deployment shape, not as a generic first-time setup guide.

## Current Hosting Model

- Repository: `StarlightDaemon/Afterglows`
- Live domain: `afterglows.starlightdaemon.dev`
- Publish target: root of the default branch
- Custom domain source file: `CNAME`
- Underscored directories: exposed via `.nojekyll`

## GitHub Pages Settings

The GitHub Pages configuration should remain aligned with this repository:

1. Go to the repository **Settings** tab.
2. Open **Pages**.
3. Under **Build and deployment**, use **Deploy from a branch**.
4. Publish from the default branch and the repository root.
5. Confirm the custom domain is set to `afterglows.starlightdaemon.dev`.
6. Confirm **Enforce HTTPS** is enabled once the certificate is issued.

## Notes

- Do not use `your-username.github.io/Afterglows/` placeholders in current Afterglows docs.
- If another repository links to Afterglows, treat that as a consumer, not the deployment owner.
- GitHub UI settings and DNS records are external to this repository and must be maintained separately.
