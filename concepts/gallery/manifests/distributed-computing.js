import { expansionEntries } from "./expansion-entry.js";

export const CONCEPTS = expansionEntries("computing", "distributed-computing", [
  {
    "id": "raft-consensus",
    "label": "Raft Consensus",
    "aliases": [
      "Raft replicated log"
    ],
    "definition": "Raft elects a term-scoped leader that replicates an ordered log and commits eligible entries after majority replication.",
    "motionThesis": "A new leader copies a current-term entry to a majority, commits it, then communicates that commitment while a slower follower catches up.",
    "distinction": "Elected leadership and ordered replicated logs; followers learn commitment after the leader establishes it, rather than treating an append acknowledgment as commitment.",
    "cycleSeconds": 12,
    "references": [
      "https://raft.github.io/raft.pdf"
    ],
    "facets": [
      "distributed systems"
    ],
    "added": "2026-09-07T10:49:30Z"
  },
  {
    "id": "quorum-read-write-intersection",
    "label": "Quorum Read/Write Intersection",
    "aliases": [
      "read-write quorums",
      "quorum intersection"
    ],
    "definition": "Read and write quorum sizes can ensure each read set overlaps a completed write set so versioned replies expose that write.",
    "motionThesis": "A three-replica write and a three-replica read overlap within five replicas, and the shared replica supplies version two despite two stale read replies.",
    "distinction": "Set intersection with version selection in a fixed-membership fixture without concurrent writes; the inequality alone does not establish general linearizability.",
    "cycleSeconds": 10,
    "references": [
      "https://www.andrew.cmu.edu/course/15-440/assets/READINGS/gifford79.pdf"
    ],
    "facets": [
      "distributed systems"
    ],
    "added": "2026-09-07T10:49:30Z"
  },
  {
    "id": "two-phase-commit",
    "label": "Two-Phase Commit",
    "aliases": [
      "2PC",
      "atomic transaction commit"
    ],
    "definition": "Two-phase commit first collects prepared votes from every transaction participant, then communicates a durable commit or abort decision.",
    "motionThesis": "Both participants lock in prepared state, the coordinator waits for both yes votes and records commit, then sends the decision that releases each participant.",
    "distinction": "Transaction unanimity and prepared locks rather than consensus by majority; a prepared participant cannot decide commit on its own.",
    "cycleSeconds": 12,
    "references": [
      "https://lamport.azurewebsites.net/video/consensus-on-transaction-commit.pdf"
    ],
    "facets": [
      "distributed systems"
    ],
    "added": "2026-09-07T10:49:30Z"
  },
  {
    "id": "vector-clocks",
    "label": "Vector Clocks",
    "aliases": [
      "vector timestamps",
      "causal vector time"
    ],
    "definition": "Vector clocks use per-process logical counters and componentwise comparisons to describe causal order and concurrent events.",
    "motionThesis": "Two incomparable send vectors meet at a third process, whose receive merges and local increments precede a reply that advances the first process.",
    "distinction": "Per-event causal vectors with receive increments, unlike a grow-only counter that merges contributions without incrementing on receipt.",
    "cycleSeconds": 12,
    "references": [
      "https://fileadmin.cs.lth.se/cs/Personal/Amr_Ergawy/dist-algos-papers/4.pdf"
    ],
    "facets": [
      "distributed systems"
    ],
    "added": "2026-09-07T10:49:30Z"
  },
  {
    "id": "grow-only-counter-crdt",
    "label": "Grow-Only Counter CRDT",
    "aliases": [
      "G-Counter",
      "state-based increment-only counter"
    ],
    "definition": "A grow-only counter stores per-replica increments, merges each component by maximum, and returns their sum.",
    "motionThesis": "Three replicas contribute two, one, and three increments, exchange missing components, and converge to six while a duplicate merge adds nothing.",
    "distinction": "Idempotent state merge and a numeric total; received state does not increment a local event clock and the object supports no decrement.",
    "cycleSeconds": 12,
    "references": [
      "https://perso.lip6.fr/Marc.Shapiro/papers/2011/CRDTs_SSS-2011.pdf"
    ],
    "facets": [
      "distributed systems"
    ],
    "added": "2026-09-07T10:49:30Z"
  },
  {
    "id": "consistent-hashing",
    "label": "Consistent Hashing",
    "aliases": [
      "hash-ring partitioning",
      "consistent hash ring"
    ],
    "definition": "Consistent hashing assigns keys to servers in a hash space while limiting reassignment when membership changes.",
    "motionThesis": "Adding a server to a successor hash ring captures two nearby keys while their hash positions and all other owners stay fixed.",
    "distinction": "Membership-driven key ownership with wraparound, rather than address-prefix matching; a small ring is not guaranteed perfectly balanced.",
    "cycleSeconds": 10,
    "references": [
      "https://people.csail.mit.edu/karger/Papers/web.pdf"
    ],
    "facets": [
      "distributed systems"
    ],
    "added": "2026-09-07T10:49:30Z"
  },
  {
    "id": "gossip-dissemination",
    "label": "Gossip Dissemination",
    "aliases": [
      "epidemic dissemination",
      "epidemic update spreading"
    ],
    "definition": "Gossip disseminates updates through repeated local exchanges between selected peers.",
    "motionThesis": "An update spreads across six equal peers over three illustrative rounds, including duplicate contacts that do not create another update.",
    "distinction": "Decentralized peer relays with redundant contacts rather than a broker; this selected contact schedule is not an unconditional delivery guarantee.",
    "cycleSeconds": 11,
    "references": [
      "https://www.cs.cornell.edu/courses/cs614/2004sp/papers/p1-demers.pdf"
    ],
    "facets": [
      "distributed systems"
    ],
    "added": "2026-09-07T10:49:30Z"
  },
  {
    "id": "stream-backpressure",
    "label": "Stream Backpressure",
    "aliases": [
      "Reactive Streams backpressure",
      "demand-driven flow control"
    ],
    "definition": "Demand-based stream backpressure limits upstream element emission to the credit requested by a downstream consumer.",
    "motionThesis": "The consumer requests two elements, pauses emission at zero credit, then requests one and two more to release the remaining three elements.",
    "distinction": "Application demand arrives from the consumer; credit does not refill on a clock and counts elements rather than TCP byte sequence space.",
    "cycleSeconds": 11,
    "references": [
      "https://github.com/reactive-streams/reactive-streams-jvm#1-publisher",
      "https://www.reactive-streams.org/"
    ],
    "facets": [
      "distributed systems"
    ],
    "added": "2026-09-07T10:49:30Z"
  },
  {
    "id": "publish-subscribe",
    "label": "Publish-Subscribe",
    "aliases": [
      "pub/sub",
      "topic-based publish-subscribe"
    ],
    "definition": "Topic-based publish-subscribe delivers publisher events through a broker to matching subscriptions.",
    "motionThesis": "Three MQTT topic events route to exact, single-level wildcard, or multilevel wildcard subscribers, with copies delivered to every matching subscription.",
    "distinction": "Central topic matching and fanout rather than peer gossip or competing-consumer load balancing; the loss-free fixture does not imply exactly-once delivery.",
    "cycleSeconds": 11,
    "references": [
      "https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html"
    ],
    "facets": [
      "distributed systems"
    ],
    "added": "2026-09-07T10:49:30Z"
  }
]);
