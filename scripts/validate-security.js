import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
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

const htmlFiles = [
    path.join(projectRoot, 'index.html'),
    path.join(projectRoot, '404.html'),
    ...walk(path.join(projectRoot, '_templates')).filter((file) => file.endsWith('.html')),
    ...walk(path.join(projectRoot, 'concepts')).filter((file) => file.endsWith('.html')),
    ...walk(path.join(projectRoot, 'matrix_code')).filter((file) => file.endsWith('.html')),
    ...walk(path.join(projectRoot, 'retro')).filter((file) => file.endsWith('.html'))
];

for (const file of htmlFiles) {
    const relative = path.relative(projectRoot, file);
    const html = fs.readFileSync(file, 'utf8').replace(/\r\n?/g, '\n');
    const metaTags = html.match(/<meta\b[^>]*>/gi) ?? [];
    const cspTag = metaTags.find((tag) => attribute(tag, 'http-equiv')?.toLowerCase() === 'content-security-policy');
    const csp = cspTag ? attribute(cspTag, 'content') : null;

    if (!csp) {
        errors.push(`${relative}: missing Content-Security-Policy meta tag`);
        continue;
    }
    if (/script-src[^;]*'unsafe-inline'/i.test(csp)) {
        errors.push(`${relative}: script-src must not allow unsafe-inline`);
    }
    if (/fonts\.(?:googleapis|gstatic)\.com/i.test(html)) {
        errors.push(`${relative}: public HTML must not depend on Google Fonts`);
    }

    const inlineScripts = [...html.matchAll(/<script\b(?![^>]*\bsrc\s*=)[^>]*>([\s\S]*?)<\/script>/gi)];
    for (const match of inlineScripts) {
        if (!match[1].trim()) continue;
        const hash = crypto.createHash('sha256').update(match[1]).digest('base64');
        if (!csp.includes(`'sha256-${hash}'`)) {
            errors.push(`${relative}: inline script is missing CSP hash sha256-${hash}`);
        }
    }

    for (const anchor of html.match(/<a\b[^>]*>/gi) ?? []) {
        if (attribute(anchor, 'target')?.toLowerCase() !== '_blank') continue;
        const rel = new Set((attribute(anchor, 'rel') ?? '').toLowerCase().split(/\s+/).filter(Boolean));
        if (!rel.has('noopener')) {
            errors.push(`${relative}: target=_blank link is missing rel=noopener`);
        }
    }
}

for (const file of walk(path.join(projectRoot, 'assets', 'js')).filter((entry) => entry.endsWith('.js'))) {
    const relative = path.relative(projectRoot, file);
    const source = fs.readFileSync(file, 'utf8');
    if (/fonts\.(?:googleapis|gstatic)\.com/i.test(source)) {
        errors.push(`${relative}: public JavaScript must not inject a Google Fonts dependency`);
    }
    for (const sink of ['innerHTML', 'outerHTML', 'insertAdjacentHTML', 'document.write', 'eval(', 'new Function']) {
        if (source.includes(sink)) errors.push(`${relative}: avoid HTML/code sink ${sink}`);
    }
}

const publicCssRoots = ['assets', 'concepts', 'matrix_code', 'retro'];
const cssFiles = publicCssRoots.flatMap((directory) =>
    walk(path.join(projectRoot, directory)).filter((entry) => entry.endsWith('.css'))
);
for (const file of cssFiles) {
    const relative = path.relative(projectRoot, file);
    const source = fs.readFileSync(file, 'utf8');
    if (/fonts\.(?:googleapis|gstatic)\.com/i.test(source)) {
        errors.push(`${relative}: public CSS must not depend on Google Fonts`);
    }
    if (/@import\s+(?:url\()?['"]?https?:\/\//i.test(source)) {
        errors.push(`${relative}: public CSS must not import a remote stylesheet`);
    }
    if (/src:\s*url\(['"]?https?:\/\//i.test(source)) {
        errors.push(`${relative}: public CSS must not load a remote font asset`);
    }
}

const settingsCssFile = path.join(projectRoot, 'assets', 'css', 'afterglows-settings.css');
const settingsCss = fs.readFileSync(settingsCssFile, 'utf8');
for (const family of ['Fira Code', 'IBM Plex Mono', 'JetBrains Mono', 'Space Mono', 'VT323']) {
    if (!new RegExp(`@font-face[\\s\\S]*?font-family:\\s*['"]${family}['"]`).test(settingsCss)) {
        errors.push(`assets/css/afterglows-settings.css: missing local @font-face for ${family}`);
    }
}
for (const license of [
    'LICENSE-Fira-Code.txt',
    'LICENSE-IBM-Plex.txt',
    'LICENSE-JetBrains-Mono.txt',
    'LICENSE-Space-Mono.txt',
    'LICENSE-VT323.txt'
]) {
    if (!fs.existsSync(path.join(projectRoot, 'assets', 'fonts', license))) {
        errors.push(`assets/fonts: missing required font license ${license}`);
    }
}
for (const match of settingsCss.matchAll(/src:\s*url\(['"]?([^'")]+\.woff2)['"]?\)/g)) {
    const fontFile = path.resolve(path.dirname(settingsCssFile), match[1]);
    if (!fontFile.startsWith(path.join(projectRoot, 'assets', 'fonts') + path.sep)) {
        errors.push(`assets/css/afterglows-settings.css: font URL escapes assets/fonts (${match[1]})`);
    } else if (!fs.existsSync(fontFile)) {
        errors.push(`assets/css/afterglows-settings.css: missing font asset ${match[1]}`);
    } else if (fs.readFileSync(fontFile).subarray(0, 4).toString('ascii') !== 'wOF2') {
        errors.push(`assets/css/afterglows-settings.css: invalid WOFF2 asset ${match[1]}`);
    }
}

const packageJson = JSON.parse(fs.readFileSync(path.join(projectRoot, 'package.json'), 'utf8'));
const devCommand = packageJson.scripts?.dev ?? '';
for (const required of ['http-server dist', '-a 127.0.0.1', '-d false', '--no-dotfiles']) {
    if (!devCommand.includes(required)) errors.push(`package.json: dev command is missing ${required}`);
}
for (const forbidden of ['npx ', '--cors']) {
    if (devCommand.includes(forbidden)) errors.push(`package.json: dev command must not contain ${forbidden.trim()}`);
}

if (errors.length > 0) {
    console.error(`Security validation failed (${errors.length}):`);
    for (const error of errors) console.error(`  - ${error}`);
    process.exit(1);
}

console.log(`Security validation passed for ${htmlFiles.length} public HTML files and shared JavaScript.`);
