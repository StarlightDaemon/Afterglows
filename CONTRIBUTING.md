# Contributing to Afterglows

Thank you for your interest in contributing to **Afterglows**! This project is a living archive of creative web experiments, and we welcome new prototypes, bug fixes, and improvements.

This repository is also the canonical source for the live site at **https://afterglows.starlightdaemon.dev/**. Changes to the root site, shared assets, or top-level documentation here affect the canonical Afterglows deployment.

## What Belongs Here?

This repository welcomes:
- **Prototypes**: Early-stage ideas and proof-of-concepts
- **Scrapped Concepts**: Projects abandoned for practical reasons but technically interesting
- **Visual Effects**: CSS/Canvas animations, terminal effects, retro aesthetics
- **Experiments**: Anything creative using web technologies

## How to Contribute

### Adding a New Prototype

1. Copy `_templates/prototype-template/` to a descriptive folder such as `pixel-rain/`. Keep the HTML, CSS and JavaScript together and document the demo using `_templates/README_TEMPLATE.md`.
2. For a new top-level folder, add its name to `publicDirectories` in `scripts/build-site.js` so it reaches Pages. Include its HTML files in the `htmlFiles` scan in `scripts/validate-security.js` so CI checks their content-security policies.
3. Link the homepage card to the actual entry file, for example `pixel-rain/demo.html`.
4. Run `npm run build`, `npm run security:check` and `npm run site:check`. Run `npm start` and follow the homepage link in the local preview to confirm the published layout works.

For a study in the Concepts gallery, follow the existing collection’s [authoring guide](concepts/README.md).

### Editing Site Copy or Docs

If you touch the root homepage, README, or Pages-related docs, keep the ownership wording accurate:
- `Afterglows` is the source of truth for `https://afterglows.starlightdaemon.dev/`
- Other repos may link to Afterglows, but they do not own or mirror the live site here
- Avoid placeholder Pages examples unless the docs are explicitly marked as historical

### File Structure Convention

```
YourPrototype/
├── README.md          # What it is, how to use it
├── demo.html          # Main entry point
├── styles.css         # (optional)
└── script.js          # (optional)
```

### Code Style

This is a creative laboratory - there's no strict style guide. However:
- **Prefer vanilla CSS/JS** over frameworks when possible
- **Comment complex logic** so others can learn from it
- **Keep file sizes reasonable** (no large binary assets without good reason)
- **Make it self-contained** - avoid external dependencies when feasible

### Submitting Your Work

1. Fork this repository
2. Create a branch (`git checkout -b add-hologram-effect`)
3. Add your prototype following the structure above
4. Commit your changes with a description of the prototype or fix.
5. Push to your fork (`git push origin add-hologram-effect`)
6. Open a Pull Request

## Questions?

Open an issue! This project is experimental by nature - there are no bad questions.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
