# Self-hosted fonts

Afterglows serves these WOFF2 files from its own `/assets/fonts/` directory.
No browser request to Google Fonts or another font CDN is required.

The web-optimized files were downloaded from the pinned Fontsource CDN release
`5.3.0`. Each typeface remains under its upstream SIL Open Font License 1.1,
included beside the font files:

| Typeface | Included variants | Upstream | License file |
|---|---|---|---|
| Fira Code | Variable 300–700; Latin, Latin Extended, Greek, symbols | https://github.com/tonsky/FiraCode | `LICENSE-Fira-Code.txt` |
| IBM Plex Mono | 300, 400, 500, 600, 700; Latin and Latin Extended | https://github.com/IBM/plex | `LICENSE-IBM-Plex.txt` |
| JetBrains Mono | Variable 100–800; Latin, Latin Extended, Greek | https://github.com/JetBrains/JetBrainsMono | `LICENSE-JetBrains-Mono.txt` |
| Space Mono | 400, 700, 400 italic; Latin and Latin Extended | https://github.com/googlefonts/spacemono | `LICENSE-Space-Mono.txt` |
| VT323 | 400; Latin and Latin Extended | https://github.com/google/fonts/tree/main/ofl/vt323 | `LICENSE-VT323.txt` |

Runtime declarations live in `/assets/css/afterglows-settings.css`. Keep font
files, `@font-face` declarations, and license notices together when updating or
redistributing the theme.

The family stack always ends in generic `monospace`. IBM Plex Mono, Space Mono,
and VT323 do not include Greek coverage in these web subsets, so scientific
glyphs they do not contain intentionally fall through to the browser's local
monospace face. Fira Code and JetBrains Mono include the vendored Greek subset.
