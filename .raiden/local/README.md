# Local Overlay

Repo-specific rules, prompts, context, and exceptions live here.

## Locations

Paths are relative to this repository's root, so they hold wherever the
workspace is mounted. Do not record drive letters or home directories here.

- Afterglows repository root (`<afterglows-root>`): `.`
- Central framework repo (`<raiden-root>`): `../Citadel/Raiden/`
- Stargate standalone repo: `../Citadel/Stargate/`

Prompts under `prompts/` use the `<afterglows-root>` and `<raiden-root>`
placeholders; resolve them from this table before running a command.
