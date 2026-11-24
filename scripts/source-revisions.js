// Owner-approved revisions of concept sources whose whole-file hash an earlier
// snapshot pins (LOOP-009). The ledger sits beside each preserved previous source.
// A pin check passes `pinned` (the hash its snapshot recorded) and gets back the
// hash the live file must have: the pinned one, or the ledger's current one when a
// revision is recorded. Changing a revised file again fails until the ledger is updated.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';

const root = new URL('../.raiden/state/SNAPSHOTS/gallery-visual-standard/loop-009/', import.meta.url);
const sha = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const revisions = new Map(JSON.parse(fs.readFileSync(new URL('revisions.json', root), 'utf8')).revisions.map(r => [r.tag, r]));

export function expectedSourceSha(tag, pinned) {
  const revision = revisions.get(tag);
  if (!revision) return pinned;
  assert.equal(revision.previousSha256, pinned, 'Revision ledger does not start from the pinned source: ' + tag);
  assert.equal(sha(fs.readFileSync(new URL(revision.previousSource, root))), revision.previousSha256, 'Preserved previous source changed: ' + tag);
  return revision.currentSha256;
}
