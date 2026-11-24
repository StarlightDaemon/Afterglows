import assert from 'node:assert/strict';
import fs from 'node:fs';
import { checkWorkflow } from './workflow-policy.js';

const SHA = '3d3c42e5aac5ba805825da76410c181273ba90b1';
const good = `name: ok
on:
  pull_request:
permissions:
  contents: read
jobs:
  a:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@${SHA} # v7.0.1
`;

assert.deepEqual(checkWorkflow('ok.yml', good), [], 'A pinned, read-only workflow passes');

const cases = [
  ['unpinned tag', good.replace(`@${SHA}`, '@v7'), /pinned to a full 40-character commit SHA/],
  ['unpinned branch', good.replace(`@${SHA}`, '@main'), /pinned to a full 40-character commit SHA/],
  ['short SHA', good.replace(SHA, SHA.slice(0, 12)), /pinned to a full 40-character commit SHA/],
  ['pull_request_target', good.replace('pull_request:', 'pull_request_target:'), /pull_request_target/],
  ['workflow_run', good.replace('pull_request:', 'workflow_run:'), /workflow_run/],
  ['no permissions block', good.replace(/permissions:\n {2}contents: read\n/, ''), /top-level "permissions:"/],
  ['write-all', good.replace('contents: read', 'write-all'), /write-all/],
  ['contents write', good.replace('contents: read', 'contents: write'), /write permission "contents"/],
  ['pages write outside the deploy workflow', good.replace('contents: read', 'pages: write'), /write permission "pages"/],
  ['event expression', good + '      - run: echo ${{ github.event.pull_request.title }}\n', /attacker-controlled/],
  ['secret interpolation', good + '      - run: echo ${{ secrets.TOKEN }}\n', /secrets or attacker-controlled/],
];
for (const [label, source, expected] of cases) {
  const errors = checkWorkflow('ok.yml', source);
  assert.ok(errors.some((error) => expected.test(error)), `${label}: expected a failure matching ${expected}, got ${JSON.stringify(errors)}`);
}

// Per-file write allowlist: the deploy workflow may write pages and id-token, nothing else.
const deploy = good.replace('contents: read', 'contents: read\n  pages: write\n  id-token: write');
assert.deepEqual(checkWorkflow('deploy-pages.yml', deploy), []);
assert.ok(checkWorkflow('deploy-pages.yml', deploy.replace('pages: write', 'packages: write')).length > 0);

// A trailing comment must not hide or fake a pin.
assert.ok(checkWorkflow('ok.yml', good.replace(`@${SHA} # v7.0.1`, '@v7 # ' + SHA)).length > 0);

// The real workflows must satisfy the policy.
const directory = new URL('../.github/workflows/', import.meta.url);
const files = fs.readdirSync(directory).filter((file) => /\.ya?ml$/.test(file));
assert.ok(files.length >= 4, 'Expected the repository workflows to be present');
for (const file of files) {
  const errors = checkWorkflow(file, fs.readFileSync(new URL(file, directory), 'utf8'));
  assert.deepEqual(errors, [], `${file} violates the workflow policy`);
}

console.log(`SUCCESS: workflow policy rejects ${cases.length} unsafe patterns and accepts all ${files.length} repository workflows.`);
