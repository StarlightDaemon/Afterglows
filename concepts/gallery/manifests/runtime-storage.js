import { expansionEntries } from "./expansion-entry.js";

export const CONCEPTS = expansionEntries("computing", "runtime-storage", [
  {
    "id": "work-stealing-scheduler",
    "label": "Work-Stealing Scheduler",
    "aliases": [
      "work stealing",
      "work-stealing deque"
    ],
    "definition": "A work-stealing scheduler balances parallel execution by letting an idle worker take queued tasks from a busy worker.",
    "motionThesis": "An owner takes the newest task from one end of a deque while an idle worker steals the oldest from the other, then both finish a second task without duplication.",
    "distinction": "A common owner-LIFO and thief-FIFO policy; tasks move only while queued, rather than being stolen during execution.",
    "cycleSeconds": 10,
    "references": [
      "https://www.cs.cornell.edu/courses/cs612/2006sp/papers/blumofe94.pdf",
      "https://citeseerx.ist.psu.edu/document?doi=377177bb82105c35e6e26ebad1698a20688473bd&repid=rep1&type=pdf"
    ],
    "facets": [
      "computer systems"
    ],
    "added": "2026-09-07T11:03:11Z"
  },
  {
    "id": "write-ahead-logging",
    "label": "Write-Ahead Logging",
    "aliases": [
      "WAL",
      "redo logging"
    ],
    "definition": "Write-ahead logging persists records describing changes before writing corresponding changed data pages, enabling recovery by replay.",
    "motionThesis": "A committed after-image reaches the durable log while the data page remains old, then a crash discards memory and replay restores the page to fifteen.",
    "distinction": "A synchronous committed transaction with idempotent SET replay; memory may change before log flush and the fixture makes no general undo claim.",
    "cycleSeconds": 11,
    "references": [
      "https://www.postgresql.org/docs/16/wal-intro.html"
    ],
    "facets": [
      "computer systems"
    ],
    "added": "2026-09-07T11:03:11Z"
  },
  {
    "id": "lsm-tree-compaction",
    "label": "LSM-Tree Compaction",
    "aliases": [
      "LSM compaction",
      "sorted-run compaction"
    ],
    "definition": "LSM-tree compaction merges sorted immutable runs while resolving key versions and reclaiming obsolete records when safe.",
    "motionThesis": "A newer value replaces an older duplicate and a tombstone removes its covered value while surviving keys merge into a fresh sorted run.",
    "distinction": "Version and deletion resolution rather than ordinary merge sorting; tombstone removal assumes bottommost full overlap, no snapshots, and no other older data.",
    "cycleSeconds": 11,
    "references": [
      "https://github.com/facebook/rocksdb/wiki/Compaction",
      "https://github.com/facebook/rocksdb/issues/3842",
      "https://github.com/facebook/rocksdb/wiki/Delete-Stale-Files"
    ],
    "facets": [
      "computer systems"
    ],
    "added": "2026-09-07T11:03:11Z"
  },
  {
    "id": "least-recently-used-cache",
    "label": "Least-Recently-Used Cache",
    "aliases": [
      "LRU cache",
      "LRU replacement"
    ],
    "definition": "An LRU cache refreshes recency on access and evicts the least recently accessed resident entry when a capacity miss requires room.",
    "motionThesis": "Requests A, B, C, A, D, and B reorder a three-entry cache, with the A hit protecting it while later misses evict B then C.",
    "distinction": "Access order rather than insertion order or frequency; the hit visibly changes which record is evicted.",
    "cycleSeconds": 10,
    "references": [
      "https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/LinkedHashMap.html"
    ],
    "facets": [
      "computer systems"
    ],
    "added": "2026-09-07T11:03:11Z"
  },
  {
    "id": "tracing-garbage-collection",
    "label": "Tracing Garbage Collection",
    "aliases": [
      "tracing GC",
      "mark-and-sweep",
      "reachability-based garbage collection"
    ],
    "definition": "Tracing garbage collection finds objects reachable from program roots and reclaims unreachable heap objects.",
    "motionThesis": "Marking follows a rooted chain with a reachable cycle, then a sweep frees a separate unreachable cycle and an isolated object.",
    "distinction": "Memory reclamation after reachability tracing, rather than graph traversal alone; the illustrated mark-and-sweep collector does not compact objects or use reference counts.",
    "cycleSeconds": 11,
    "references": [
      "https://hboehm.info/gc/gcdescr.html"
    ],
    "facets": [
      "computer systems"
    ],
    "added": "2026-09-07T11:03:11Z"
  },
  {
    "id": "pipeline-data-hazard",
    "label": "Pipeline Data Hazard",
    "aliases": [
      "RAW pipeline hazard",
      "load-use hazard"
    ],
    "definition": "A pipeline data hazard occurs when an overlapped instruction requires an earlier instruction result before that result is available.",
    "motionThesis": "A load-use dependency holds an add in decode for one cycle, inserts a bubble, then forwards the loaded seven to execute an addition yielding twelve.",
    "distinction": "A specific five-stage pipeline with forwarding and a one-cycle load-use interlock, rather than a universal stall count for every processor.",
    "cycleSeconds": 11,
    "references": [
      "https://www.cs.cornell.edu/courses/cs3410/2014sp/lecture/10-control-hazards-i-g.pdf"
    ],
    "facets": [
      "computer systems"
    ],
    "added": "2026-09-07T11:03:11Z"
  }
]);
