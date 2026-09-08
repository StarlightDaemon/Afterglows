import { expansionEntries } from "./expansion-entry.js";

const added = "2026-09-07T10:30:20Z";
export const CONCEPTS = expansionEntries("computing", "network-systems", [
  {
    id: "tcp-three-way-handshake", label: "TCP Three-Way Handshake", aliases: ["TCP connection establishment", "SYN–SYN/ACK–ACK"], added,
    definition: "TCP's three-way handshake synchronizes initial sequence numbers and establishes a connection through SYN, SYN plus ACK, and ACK segments.",
    motionThesis: "Three ordered exchanges acknowledge each peer's initial sequence number, with the server becoming established only after the final acknowledgment arrives.",
    distinction: "Connection establishment and sequence synchronization; the other TCP tiles show data transfer rather than repeating this setup ladder.",
    facets: ["networks", "TCP", "connection establishment"], cycleSeconds: 11,
    references: ["https://www.rfc-editor.org/rfc/rfc9293.html#section-3.5"],
  },
  {
    id: "tcp-sliding-window", label: "TCP Sliding Window", aliases: ["TCP receive-window flow control", "sliding send window"], added,
    definition: "TCP receive-window flow control bounds outstanding byte sequence space using receiver-advertised credit and cumulative acknowledgments.",
    motionThesis: "A fixed four-cell credit bracket advances only after cumulative acknowledgments arrive, releasing room while older unacknowledged cells remain in flight.",
    distinction: "Receiver byte credit moves across a fixed sequence rail; it does not show the network-congestion limit.",
    facets: ["networks", "TCP", "flow control"], cycleSeconds: 10,
    references: ["https://www.rfc-editor.org/rfc/rfc9293.html#section-3.8.6"],
  },
  {
    id: "tcp-congestion-avoidance", label: "TCP Congestion Avoidance", aliases: ["TCP Reno congestion avoidance", "additive increase/multiplicative decrease", "AIMD"], added,
    definition: "Classic TCP Reno increases its congestion window during acknowledged avoidance rounds and reduces its sending limit following congestion.",
    motionThesis: "A window grows from four to eight segments, enters fast recovery at seven after three duplicate acknowledgments, deflates to four on recovery acknowledgment, then grows again.",
    distinction: "An explicit Reno congestion-avoidance fixture, including its temporary fast-recovery window; this is not a claim about every TCP variant.",
    facets: ["networks", "TCP", "congestion control", "Reno"], cycleSeconds: 11,
    references: ["https://www.rfc-editor.org/rfc/rfc5681.html#section-3.1", "https://www.rfc-editor.org/rfc/rfc5681.html#section-3.2"],
  },
  {
    id: "tcp-selective-acknowledgment", label: "TCP Selective Acknowledgment", aliases: ["TCP SACK", "selective acknowledgment options"], added,
    definition: "TCP selective acknowledgments report noncontiguous received byte ranges in addition to the cumulative acknowledgment.",
    motionThesis: "Two received islands leave holes in a byte buffer, and retransmitting only those holes lets the cumulative acknowledgment jump across retained data.",
    distinction: "Sparse receive ranges and targeted hole repair, rather than a moving credit bracket; SACK information itself does not detect loss.",
    facets: ["networks", "TCP", "reliable delivery"], cycleSeconds: 12,
    references: ["https://www.rfc-editor.org/rfc/rfc2018.html#section-3", "https://www.rfc-editor.org/rfc/rfc2018.html#section-4"],
  },
  {
    "id": "recursive-dns-resolution",
    "label": "Recursive DNS Resolution",
    "aliases": [
      "recursive resolver lookup",
      "DNS referrals"
    ],
    "definition": "A recursive DNS resolver obtains a final answer for its client by using cached data or querying name servers and following referrals.",
    "motionThesis": "A resolver follows root and top-level referrals, receives an authoritative answer, and caches it that satisfies a second request locally.",
    "distinction": "Resolver-centered referral traversal and a cache shortcut, rather than endpoint connection establishment.",
    "facets": [
      "networks",
      "DNS",
      "caching"
    ],
    "cycleSeconds": 12,
    "references": [
      "https://www.rfc-editor.org/rfc/rfc1034",
      "https://www.rfc-editor.org/rfc/rfc9499.html"
    ],
    "added": "2026-09-07T10:36:24Z"
  },
  {
    "id": "dhcp-address-lease",
    "label": "DHCP Address Lease",
    "aliases": [
      "DHCPv4 lease",
      "dynamic host configuration"
    ],
    "definition": "DHCP assigns network configuration for a finite lease period and supports renewal before that lease expires.",
    "motionThesis": "A discover, offer, request, and acknowledgment establish an eight-hour lease whose four-hour renewal extends its expiry to twelve hours from the initial request.",
    "distinction": "Address assignment and a renewed validity interval; ARP instead discovers a link-layer address for an already known IP address.",
    "facets": [
      "networks",
      "IPv4",
      "configuration"
    ],
    "cycleSeconds": 12,
    "references": [
      "https://www.rfc-editor.org/rfc/rfc2131.html#section-3.1",
      "https://www.rfc-editor.org/rfc/rfc2131.html#section-4.4.5"
    ],
    "added": "2026-09-07T10:36:24Z"
  },
  {
    "id": "arp-address-resolution",
    "label": "ARP Address Resolution",
    "aliases": [
      "Address Resolution Protocol",
      "IPv4-to-MAC resolution"
    ],
    "definition": "ARP resolves an on-link protocol address to a link-layer address so an IPv4 packet can be encapsulated for local delivery.",
    "motionThesis": "A broadcast asks all local peers for a known IP address, the matching peer replies, and a cached mapping guides a later unicast frame.",
    "distinction": "Local broadcast discovery followed by link-layer unicast; no address assignment or router traversal.",
    "facets": [
      "networks",
      "Ethernet",
      "IPv4"
    ],
    "cycleSeconds": 10,
    "references": [
      "https://www.rfc-editor.org/rfc/rfc826.html"
    ],
    "added": "2026-09-07T10:36:24Z"
  },
  {
    "id": "longest-prefix-routing",
    "label": "Longest-Prefix Routing",
    "aliases": [
      "longest prefix match",
      "LPM",
      "CIDR forwarding lookup"
    ],
    "definition": "IP forwarding selects the most specific prefix among eligible routes matching a packet destination.",
    "motionThesis": "A destination matches several nested network prefixes, rejects a different equally long prefix, and leaves through the longest matching route.",
    "distinction": "A forwarding decision among overlapping route prefixes rather than insertion or word lookup in a trie.",
    "facets": [
      "networks",
      "IP",
      "routing"
    ],
    "cycleSeconds": 10,
    "references": [
      "https://www.rfc-editor.org/rfc/rfc1812.html#section-5.2.4.3"
    ],
    "added": "2026-09-07T10:36:24Z"
  },
  {
    "id": "network-address-port-translation",
    "label": "Network Address Port Translation",
    "aliases": [
      "NAPT",
      "PAT",
      "port address translation"
    ],
    "definition": "A translator maps private address and transport-port tuples to a shared public address with distinct ports, then reverses the mapping for replies.",
    "motionThesis": "Two UDP clients using the same source port acquire different external ports, and replies follow those table entries back to their original clients.",
    "distinction": "Transport-port demultiplexing between address realms, rather than link-layer discovery or encryption.",
    "cycleSeconds": 10,
    "references": [
      "https://www.rfc-editor.org/rfc/rfc3022.html"
    ],
    "facets": [
      "networks"
    ],
    "added": "2026-09-07T10:40:58Z"
  },
  {
    "id": "ipv4-fragmentation",
    "label": "IPv4 Fragmentation",
    "aliases": [
      "IP fragmentation and reassembly"
    ],
    "definition": "IPv4 fragmentation divides a datagram into separately headed pieces whose offsets support reassembly at the destination.",
    "motionThesis": "A 1,500-byte payload splits into 600, 600, and 300 bytes for a 620-byte MTU and reassembles from out-of-order fragments at offsets 0, 75, and 150.",
    "distinction": "Packet size adaptation preserving all payload bytes; the fixture uses 20-byte headers, DF zero, eight-byte offset units, and destination reassembly.",
    "cycleSeconds": 11,
    "references": [
      "https://www.rfc-editor.org/rfc/rfc791.html"
    ],
    "facets": [
      "networks"
    ],
    "added": "2026-09-07T10:40:58Z"
  },
  {
    "id": "token-bucket-rate-limiting",
    "label": "Token-Bucket Rate Limiting",
    "aliases": [
      "token-bucket policer",
      "burst-aware rate limiting"
    ],
    "definition": "A token bucket admits packets against credit that replenishes at a bounded rate up to a fixed capacity.",
    "motionThesis": "A four-token bucket admits four of five burst packets, refills two credits, then admits two of the next three packets while excess packets drop.",
    "distinction": "A single-bucket packet policer with clock-based refill, rather than consumer-demand feedback or a waiting queue.",
    "cycleSeconds": 10,
    "references": [
      "https://www.rfc-editor.org/rfc/rfc3290.html#appendix-A"
    ],
    "facets": [
      "networks"
    ],
    "added": "2026-09-07T10:40:58Z"
  },
  {
    "id": "weighted-fair-queueing",
    "label": "Weighted Fair Queueing",
    "aliases": [
      "WFQ",
      "packet-by-packet GPS"
    ],
    "definition": "Weighted fair queueing approximates weighted byte-service shares by scheduling packets in virtual finish-time order.",
    "motionThesis": "Two queues with weights one and two compete by finish tags, with a double-length packet occupying twice the output width and transmission time.",
    "distinction": "Finish-tag scheduling with variable packet lengths, rather than round-robin packet counts or token admission policing.",
    "cycleSeconds": 12,
    "references": [
      "https://www.cs.utexas.edu/~lam/396m/papers/PG1993.pdf",
      "https://research.ibm.com/publications/a-generalized-processor-sharing-approach-to-flow-control-in-integrated-services-networks-the-single-node-case"
    ],
    "facets": [
      "networks"
    ],
    "added": "2026-09-07T10:40:58Z"
  },
  {
    "id": "de-jitter-buffer",
    "label": "De-Jitter Buffer",
    "aliases": [
      "jitter buffer",
      "playout buffer"
    ],
    "definition": "A de-jitter buffer delays arriving media packets to absorb bounded arrival variation and provide regularly timed playout.",
    "motionThesis": "Uneven and briefly out-of-order arrivals wait in timestamp slots before leaving at uniform twenty-millisecond intervals.",
    "distinction": "Contrasts variable network arrival times with regular media playout; finite buffering cannot repair arbitrarily late arrivals.",
    "cycleSeconds": 11,
    "references": [
      "https://www.rfc-editor.org/rfc/rfc7005.html#section-3.1"
    ],
    "facets": [
      "networks"
    ],
    "added": "2026-09-07T10:40:58Z"
  },
  {
    "id": "ethernet-collision-backoff",
    "label": "Ethernet Collision Backoff",
    "aliases": [
      "CSMA/CD",
      "truncated binary exponential backoff"
    ],
    "definition": "Legacy shared half-duplex Ethernet aborts detected collisions and retries after random slot delays drawn from an expanding range.",
    "motionThesis": "Two transmitters collide, choose the same one-slot retry and collide again, then choose zero and three slots and succeed after carrier sensing.",
    "distinction": "A contention-and-retry fixture for shared half-duplex Ethernet, not modern switched full-duplex links; random choice ranges expand but actual delays need not double.",
    "cycleSeconds": 11,
    "references": [
      "https://www.cisco.com/c/en/us/support/docs/interfaces-modules/port-adapters/12768-eth-collisions.html"
    ],
    "facets": [
      "networks"
    ],
    "added": "2026-09-07T10:40:58Z"
  },
  {
    "id": "spanning-tree-protocol",
    "label": "Spanning Tree Protocol",
    "aliases": [
      "STP",
      "loop-free Ethernet bridging"
    ],
    "definition": "Spanning Tree Protocol elects a root bridge and forwarding port roles while blocking redundant paths to prevent Layer 2 loops.",
    "motionThesis": "A triangle blocks the redundant port at one endpoint, then a link failure changes the root path and enables that port after convergence.",
    "distinction": "Distributed root and port-role selection with a failure transition, rather than global minimum-spanning-tree edge sorting; convergence timing is schematic.",
    "cycleSeconds": 12,
    "references": [
      "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/stp/stp-configuration-guide/m-stp.html",
      "https://www.cisco.com/c/en/us/support/docs/lan-switching/spanning-tree-protocol/24062-146.html"
    ],
    "facets": [
      "networks"
    ],
    "added": "2026-09-07T10:40:58Z"
  },
]);
