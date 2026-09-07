import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CONCEPTS } from '../concepts/gallery/manifest.js';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const outputRoot = path.join(projectRoot, 'dist');
const productionOrigin = 'https://afterglows.starlightdaemon.dev';
const errors = [];

function walk(directory) {
    const files = [];
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        const absolute = path.join(directory, entry.name);
        if (entry.isDirectory()) files.push(...walk(absolute));
        if (entry.isFile()) files.push(absolute);
    }
    return files;
}

function attribute(tag, name) {
    const match = tag.match(new RegExp(`\\b${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`, 'i'));
    return match ? (match[1] ?? match[2]) : null;
}

function resolveArtifactPath(rawValue, htmlFile) {
    const value = rawValue.split('#')[0].split('?')[0];
    if (!value) return null;
    if (/^(?:[a-z]+:)?\/\//i.test(value) || /^(?:mailto|tel|data):/i.test(value)) return null;

    const decoded = decodeURIComponent(value);
    const relative = decoded.startsWith('/')
        ? decoded.slice(1)
        : path.posix.join(path.posix.dirname(path.relative(outputRoot, htmlFile).replaceAll('\\', '/')), decoded);
    const normalized = path.posix.normalize(relative);
    if (normalized.startsWith('../')) return '__OUTSIDE_ARTIFACT__';
    if (!normalized || decoded.endsWith('/')) return path.posix.join(normalized, 'index.html');
    return normalized;
}

if (!fs.existsSync(outputRoot)) {
    console.error('Site validation failed: dist/ does not exist. Run npm run build first.');
    process.exit(1);
}

const artifactFiles = walk(outputRoot);
const artifactSet = new Set(artifactFiles.map((file) => path.relative(outputRoot, file).replaceAll('\\', '/')));
const htmlFiles = artifactFiles.filter((file) => file.endsWith('.html'));

for (const concept of CONCEPTS) {
    const modulePath = path.posix.join('concepts/gallery', concept.module.replace(/^\.\//, ''));
    if (!artifactSet.has(modulePath)) errors.push(`missing catalog module ${modulePath} for ${concept.tag}`);
}

for (const htmlFile of htmlFiles) {
    const relative = path.relative(outputRoot, htmlFile).replaceAll('\\', '/');
    const html = fs.readFileSync(htmlFile, 'utf8');
    const tags = html.match(/<(?:a|img|link|script)\b[^>]*>/gi) ?? [];

    for (const tag of tags) {
        const value = attribute(tag, tag.startsWith('<a') || tag.startsWith('<link') ? 'href' : 'src');
        if (!value) continue;
        const target = resolveArtifactPath(value, htmlFile);
        if (target && !artifactSet.has(target)) errors.push(`${relative}: missing internal target ${value} (${target})`);
    }
}

const importantPages = [
    'index.html',
    'concepts/index.html',
    'matrix_code/index.html',
    'retro/crt_demo.html'
];

for (const relative of importantPages) {
    if (!artifactSet.has(relative)) {
        errors.push(`missing important page ${relative}`);
        continue;
    }
    const html = fs.readFileSync(path.join(outputRoot, relative), 'utf8');
    const requiredPatterns = [
        ['title', /<title>[^<]+<\/title>/i],
        ['meta description', /<meta\b[^>]*name=["']description["'][^>]*content=["'][^"']+["'][^>]*>/i],
        ['canonical URL', new RegExp(`<link\\b[^>]*rel=["']canonical["'][^>]*href=["']${productionOrigin.replaceAll('.', '\\.')}`,'i')],
        ['Open Graph image', new RegExp(`<meta\\b[^>]*property=["']og:image["'][^>]*content=["']${productionOrigin.replaceAll('.', '\\.')}/assets/img/afterglows-social-card\\.jpg["']`,'i')],
        ['Twitter card', /<meta\b[^>]*name=["']twitter:card["'][^>]*content=["']summary_large_image["']/i],
        ['favicon', /<link\b[^>]*rel=["']icon["'][^>]*href=["']\/assets\/img\/thinker-logo\.svg["']/i],
        ['language declaration', /<html\b[^>]*lang=["'][a-z][a-z-]*["']/i],
        ['main landmark target', /<main\b[^>]*id=["']main["']/i],
        ['skip link', /<a\b[^>]*class=["'][^"']*skip-link[^"']*["'][^>]*href=["']#main["']/i]
    ];
    for (const [label, pattern] of requiredPatterns) {
        if (!pattern.test(html)) errors.push(`${relative}: missing ${label}`);
    }

    const h1Count = (html.match(/<h1\b/gi) ?? []).length;
    if (h1Count !== 1) errors.push(`${relative}: expected exactly one h1, found ${h1Count}`);
    for (const image of html.match(/<img\b[^>]*>/gi) ?? []) {
        if (attribute(image, 'alt') === null) errors.push(`${relative}: image is missing alt text`);
    }
    if (/tabindex=["']?[1-9]/i.test(html)) errors.push(`${relative}: positive tabindex disrupts keyboard order`);
}

const notFound = fs.readFileSync(path.join(outputRoot, '404.html'), 'utf8');
if (!/<meta\b[^>]*name=["']robots["'][^>]*content=["']noindex["']/i.test(notFound)) errors.push('404.html: missing noindex');
if (!/<a\b[^>]*href=["']\/["']/i.test(notFound)) errors.push('404.html: missing home recovery link');

const sitemap = fs.readFileSync(path.join(outputRoot, 'sitemap.xml'), 'utf8');
const sitemapLocations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
for (const location of sitemapLocations) {
    if (!location.startsWith(`${productionOrigin}/`)) {
        errors.push(`sitemap.xml: non-canonical URL ${location}`);
        continue;
    }
    const target = resolveArtifactPath(location.slice(productionOrigin.length), path.join(outputRoot, 'index.html'));
    if (target && !artifactSet.has(target)) errors.push(`sitemap.xml: missing target ${location} (${target})`);
}
for (const expected of ['/', '/concepts/', '/matrix_code/', '/retro/crt_demo.html']) {
    if (!sitemapLocations.includes(`${productionOrigin}${expected}`)) errors.push(`sitemap.xml: missing ${expected}`);
}

const cname = fs.readFileSync(path.join(outputRoot, 'CNAME'), 'utf8').trim();
if (cname !== 'afterglows.starlightdaemon.dev') errors.push(`CNAME: unexpected hostname ${cname}`);

if (errors.length > 0) {
    console.error(`Site validation failed (${errors.length}):`);
    for (const error of errors) console.error(`  - ${error}`);
    process.exit(1);
}

console.log(`Site validation passed for ${htmlFiles.length} HTML files, ${artifactFiles.length} artifact files, and ${sitemapLocations.length} sitemap URLs.`);
