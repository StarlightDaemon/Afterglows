import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

// Runs the real header script against a minimal DOM stub and returns the href it
// gives the Back link (or null when it renders none).
const source = fs.readFileSync(new URL('../assets/js/afterglows-header.js', import.meta.url), 'utf8');

function backHref(pageUrl, dataAgBack) {
  const page = new URL(pageUrl);
  const created = [];
  const element = () => {
    const node = { children: [], attributes: {}, classList: { add() {} } };
    node.appendChild = (child) => { node.children.push(child); return child; };
    node.setAttribute = (name, value) => { node.attributes[name] = value; };
    created.push(node);
    return node;
  };
  const document = {
    readyState: 'complete',
    documentElement: { ...element(), getAttribute: (name) => (name === 'data-ag-back' ? dataAgBack : null) },
    body: element(),
    querySelector: () => null,
    createElement: element,
  };
  const window = { location: { href: page.href, origin: page.origin, pathname: page.pathname } };
  window.self = window.top = window;
  vm.runInNewContext(source, { window, document, URL });
  return created.find((node) => node.className === 'ag-back-link')?.href ?? null;
}

const hub = 'https://afterglows.example/matrix_code/demo_binary.html';

// The three accepted hub paths are used exactly as documented.
assert.equal(backHref(hub, 'index.html'), 'index.html');
assert.equal(backHref(hub, '../index.html'), '../index.html');
assert.equal(backHref(hub, '/index.html'), '/index.html');

// Anything else falls back to the site root; the attribute text is never used.
for (const bad of [
  '/concepts/?q=a#b',
  'index.html?x=1',
  ' index.html',
  'INDEX.HTML',
  'javascript:alert(1)',
  'JaVaScRiPt:alert(1)',
  'data:text/html,<script>alert(1)</script>',
  'vbscript:x',
  'https://evil.example/',
  '//evil.example/',
  'http://afterglows.example/',
  'file:///etc/passwd',
]) {
  assert.equal(backHref(hub, bad), '/index.html', `${bad} must not become the back link`);
}

// Without a declaration: root home has no Back link, other pages go to the root.
assert.equal(backHref('https://afterglows.example/', null), null);
assert.equal(backHref('https://afterglows.example/concepts/', null), '/index.html');

console.log('SUCCESS: the back link only ever points at one of the known hub paths or the site root.');
