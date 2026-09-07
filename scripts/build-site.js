import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const outputRoot = path.join(projectRoot, 'dist');

// The live site is an explicit product, not a mirror of the working copy.
const publicDirectories = [
    '_templates',
    'assets',
    'concepts',
    'docs',
    'matrix_code',
    'retro'
];

const publicRootFiles = [
    '.nojekyll',
    '404.html',
    'CHANGELOG.md',
    'CNAME',
    'CONTRIBUTING.md',
    'LICENSE',
    'README.md',
    'index.html',
    'robots.txt',
    'sitemap.xml'
];

const forbiddenArtifactEntries = new Set([
    '.audits',
    '.git',
    '.github',
    '.raiden',
    'AGENTS.md',
    '_archive',
    'node_modules',
    'package-lock.json',
    'package.json',
    'scripts'
]);

function assertOutputBoundary() {
    if (path.dirname(outputRoot) !== path.resolve(projectRoot) || path.basename(outputRoot) !== 'dist') {
        throw new Error(`Refusing to clean unexpected build path: ${outputRoot}`);
    }
}

function copyTree(source, destination) {
    if (path.basename(source).startsWith('.') && path.resolve(source) !== path.join(projectRoot, '.nojekyll')) {
        throw new Error(`Refusing to include hidden entry in Pages artifact: ${source}`);
    }
    const stat = fs.lstatSync(source);
    if (stat.isSymbolicLink()) {
        throw new Error(`Refusing to include symbolic link in Pages artifact: ${source}`);
    }
    if (stat.isDirectory()) {
        fs.mkdirSync(destination, { recursive: true });
        for (const entry of fs.readdirSync(source).sort()) {
            copyTree(path.join(source, entry), path.join(destination, entry));
        }
        return;
    }
    if (!stat.isFile()) {
        throw new Error(`Unsupported artifact entry: ${source}`);
    }
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.copyFileSync(source, destination);
}

function walk(directory, prefix = '') {
    const files = [];
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        const relative = path.posix.join(prefix, entry.name);
        const absolute = path.join(directory, entry.name);
        if (entry.isSymbolicLink()) {
            throw new Error(`Pages artifact contains a symbolic link: ${relative}`);
        }
        if (entry.isDirectory()) {
            files.push(...walk(absolute, relative));
        } else if (entry.isFile()) {
            files.push(relative);
        }
    }
    return files;
}

assertOutputBoundary();
fs.rmSync(outputRoot, { recursive: true, force: true });
fs.mkdirSync(outputRoot, { recursive: true });

for (const directory of publicDirectories) {
    copyTree(path.join(projectRoot, directory), path.join(outputRoot, directory));
}
for (const file of publicRootFiles) {
    copyTree(path.join(projectRoot, file), path.join(outputRoot, file));
}

const artifactFiles = walk(outputRoot);
const leakedEntries = artifactFiles.filter((file) => forbiddenArtifactEntries.has(file.split('/')[0]));
if (leakedEntries.length > 0) {
    throw new Error(`Forbidden files entered the Pages artifact: ${leakedEntries.join(', ')}`);
}

for (const required of ['.nojekyll', '404.html', 'CNAME', 'concepts/index.html', 'index.html', 'robots.txt', 'sitemap.xml']) {
    if (!artifactFiles.includes(required)) {
        throw new Error(`Pages artifact is missing required file: ${required}`);
    }
}

console.log(`Built allowlisted Pages artifact: ${artifactFiles.length} files in ${outputRoot}`);
