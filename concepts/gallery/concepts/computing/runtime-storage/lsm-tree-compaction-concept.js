// LSM-Tree Compaction. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptLsmTreeCompaction extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    if (!this.shadowRoot.firstChild) this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          height: 100%;
          overflow: hidden;
          color: #70edb1;
          background: #07120f;
        }
        svg {
          display: block;
          width: 100%;
          height: 100%;
        }
        .ink {
          fill: none;
          stroke: currentColor;
          stroke-width: 1.7;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .muted {
          stroke: #375b51;
        }
        .paper {
          fill: #07120f;
        }
        .solid {
          fill: currentColor;
        }
        .warm {
          fill: #f3c977;
        }
        .cool {
          fill: #77c9ef;
        }
        .rose {
          fill: #ed8eab;
        }
        text {
          fill:#b6d4c6;
          font:9px monospace;
          text-anchor:middle
        }
        .value {
          fill:#07120f;
          font-size:10px
        }
        .input {
          opacity:.15
        }
        .transfer {
          opacity:0
        }
        .input rect {
          fill:#77c9ef
        }
        .discard {
          stroke:#ed8eab;
          stroke-width:1.5;
          opacity:.7
        }
        .output rect {
          fill:#70edb1
        }
        .i0 {
          animation:i0 11s infinite
        }
        .t0 {
          animation:t0 11s linear infinite
        }
        .o0 {
          animation:o0 11s infinite
        }
        @keyframes i0 {
          0%,14.9% {
            opacity:1
          }
          15%,100% {
            opacity:.15
          }
        }
        @keyframes t0 {
          0%,14.9% {
            opacity:0;
            transform:translate(0,0)
          }
          15% {
            opacity:1;
            transform:translate(0,0)
          }
          28% {
            opacity:1;
            transform:translate(-2px,90px)
          }
          28.1%,100% {
            opacity:0
          }
        }
        @keyframes o0 {
          0%,27.9% {
            opacity:.1
          }
          28%,100% {
            opacity:1
          }
        }
        .i1 {
          animation:i1 11s infinite
        }
        .t1 {
          animation:t1 11s linear infinite
        }
        .o1 {
          animation:o1 11s infinite
        }
        @keyframes i1 {
          0%,29.9% {
            opacity:1
          }
          30%,100% {
            opacity:.15
          }
        }
        @keyframes t1 {
          0%,29.9% {
            opacity:0;
            transform:translate(0,0)
          }
          30% {
            opacity:1;
            transform:translate(0,0)
          }
          43% {
            opacity:1;
            transform:translate(71px,58px)
          }
          43.1%,100% {
            opacity:0
          }
        }
        @keyframes o1 {
          0%,42.9% {
            opacity:.1
          }
          43%,100% {
            opacity:1
          }
        }
        .i2 {
          animation:i2 11s infinite
        }
        .t2 {
          animation:t2 11s linear infinite
        }
        .o2 {
          animation:o2 11s infinite
        }
        @keyframes i2 {
          0%,65.9% {
            opacity:1
          }
          66%,100% {
            opacity:.15
          }
        }
        @keyframes t2 {
          0%,65.9% {
            opacity:0;
            transform:translate(0,0)
          }
          66% {
            opacity:1;
            transform:translate(0,0)
          }
          74% {
            opacity:1;
            transform:translate(22px,90px)
          }
          74.1%,100% {
            opacity:0
          }
        }
        @keyframes o2 {
          0%,73.9% {
            opacity:.1
          }
          74%,100% {
            opacity:1
          }
        }
        .i3 {
          animation:i3 11s infinite
        }
        .t3 {
          animation:t3 11s linear infinite
        }
        .o3 {
          animation:o3 11s infinite
        }
        @keyframes i3 {
          0%,19.9% {
            opacity:1
          }
          20%,100% {
            opacity:.15
          }
        }
        @keyframes t3 {
          0%,19.9% {
            opacity:0;
            transform:translate(0,0)
          }
          20% {
            opacity:1;
            transform:translate(0,0)
          }
          28% {
            opacity:1;
            transform:translate(95px,27px)
          }
          28.1%,100% {
            opacity:0
          }
        }
        @keyframes o3 {
          0%,27.9% {
            opacity:.1
          }
          28%,100% {
            opacity:1
          }
        }
        .i4 {
          animation:i4 11s infinite
        }
        .t4 {
          animation:t4 11s linear infinite
        }
        .o4 {
          animation:o4 11s infinite
        }
        @keyframes i4 {
          0%,29.9% {
            opacity:1
          }
          30%,100% {
            opacity:.15
          }
        }
        @keyframes t4 {
          0%,29.9% {
            opacity:0;
            transform:translate(0,0)
          }
          30% {
            opacity:1;
            transform:translate(0,0)
          }
          43% {
            opacity:1;
            transform:translate(71px,27px)
          }
          43.1%,100% {
            opacity:0
          }
        }
        @keyframes o4 {
          0%,42.9% {
            opacity:.1
          }
          43%,100% {
            opacity:1
          }
        }
        .i5 {
          animation:i5 11s infinite
        }
        .t5 {
          animation:t5 11s linear infinite
        }
        .o5 {
          animation:o5 11s infinite
        }
        @keyframes i5 {
          0%,45.9% {
            opacity:1
          }
          46%,100% {
            opacity:.15
          }
        }
        @keyframes t5 {
          0%,45.9% {
            opacity:0;
            transform:translate(0,0)
          }
          46% {
            opacity:1;
            transform:translate(0,0)
          }
          54% {
            opacity:1;
            transform:translate(-26px,59px)
          }
          54.1%,100% {
            opacity:0
          }
        }
        @keyframes o5 {
          0%,53.9% {
            opacity:.1
          }
          54%,100% {
            opacity:1
          }
        }
        .i6 {
          animation:i6 11s infinite
        }
        .t6 {
          animation:t6 11s linear infinite
        }
        .o6 {
          animation:o6 11s infinite
        }
        @keyframes i6 {
          0%,55.9% {
            opacity:1
          }
          56%,100% {
            opacity:.15
          }
        }
        @keyframes t6 {
          0%,55.9% {
            opacity:0;
            transform:translate(0,0)
          }
          56% {
            opacity:1;
            transform:translate(0,0)
          }
          64% {
            opacity:1;
            transform:translate(-26px,59px)
          }
          64.1%,100% {
            opacity:0
          }
        }
        @keyframes o6 {
          0%,63.9% {
            opacity:.1
          }
          64%,100% {
            opacity:1
          }
        }
        :host(:not([data-active])) *, :host(:not([data-active])) *::before, :host(:not([data-active])) *::after {
          animation-play-state: paused !important;
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      </style>
      <svg viewBox="0 0 140 140" role="img" aria-label="LSM-Tree Compaction">
        <text x="54" y="13">newer run</text>
        <text x="55" y="44">older run</text>
        <path class="ink muted" d="M114 76V97H132V76M117 78H129"/>
        <text x="123" y="91">×</text>
        <path class="ink muted" d="M15 103H124M120 100L124 103L120 106"/>
        <text x="70" y="136">new sorted run</text>
        <g class="input i0">
          <rect x="17" y="22" width="19" height="14" rx="2"/>
          <text class="value" x="26.5" y="33">a2</text>
        </g>
        <g class="transfer t0">
          <rect fill="#70edb1" x="17" y="22" width="19" height="14" rx="2"/>
          <text class="value" x="26.5" y="33">a2</text>
        </g>
        <g class="output o0">
          <rect x="15" y="112" width="19" height="14" rx="2"/>
          <text class="value" x="24.5" y="123">a2</text>
        </g>
        <g class="input i1">
          <rect x="41" y="22" width="19" height="14" rx="2"/>
          <text class="value" x="50.5" y="33">b†</text>
        </g>
        <g class="transfer t1">
          <rect fill="#ed8eab" x="41" y="22" width="19" height="14" rx="2"/>
          <text class="value" x="50.5" y="33">b†</text>
        </g>
        <g class="input i2">
          <rect x="65" y="22" width="19" height="14" rx="2"/>
          <text class="value" x="74.5" y="33">e1</text>
        </g>
        <g class="transfer t2">
          <rect fill="#70edb1" x="65" y="22" width="19" height="14" rx="2"/>
          <text class="value" x="74.5" y="33">e1</text>
        </g>
        <g class="output o2">
          <rect x="87" y="112" width="19" height="14" rx="2"/>
          <text class="value" x="96.5" y="123">e1</text>
        </g>
        <g class="input i3">
          <rect x="17" y="53" width="19" height="14" rx="2"/>
          <text class="value" x="26.5" y="64">a1</text>
        </g>
        <g class="transfer t3">
          <rect fill="#ed8eab" x="17" y="53" width="19" height="14" rx="2"/>
          <text class="value" x="26.5" y="64">a1</text>
        </g>
        <g class="input i4">
          <rect x="41" y="53" width="19" height="14" rx="2"/>
          <text class="value" x="50.5" y="64">b1</text>
        </g>
        <g class="transfer t4">
          <rect fill="#ed8eab" x="41" y="53" width="19" height="14" rx="2"/>
          <text class="value" x="50.5" y="64">b1</text>
        </g>
        <g class="input i5">
          <rect x="65" y="53" width="19" height="14" rx="2"/>
          <text class="value" x="74.5" y="64">c1</text>
        </g>
        <g class="transfer t5">
          <rect fill="#70edb1" x="65" y="53" width="19" height="14" rx="2"/>
          <text class="value" x="74.5" y="64">c1</text>
        </g>
        <g class="output o5">
          <rect x="39" y="112" width="19" height="14" rx="2"/>
          <text class="value" x="48.5" y="123">c1</text>
        </g>
        <g class="input i6">
          <rect x="89" y="53" width="19" height="14" rx="2"/>
          <text class="value" x="98.5" y="64">d1</text>
        </g>
        <g class="transfer t6">
          <rect fill="#70edb1" x="89" y="53" width="19" height="14" rx="2"/>
          <text class="value" x="98.5" y="64">d1</text>
        </g>
        <g class="output o6">
          <rect x="63" y="112" width="19" height="14" rx="2"/>
          <text class="value" x="72.5" y="123">d1</text>
        </g>
        <path class="discard" d="M117 84L129 96M129 84L117 96"/>
      </svg>
    `;
    this._visibility?.disconnect();
    this._visibility = new IntersectionObserver(([entry]) => {
      this.toggleAttribute("data-active", entry.isIntersecting);
    });
    this._visibility.observe(this);
  }

  disconnectedCallback() {
    this._visibility?.disconnect();
    this._visibility = null;
    this.removeAttribute("data-active");
  }
}

if (!customElements.get("concept-lsm-tree-compaction")) {
  customElements.define("concept-lsm-tree-compaction", ConceptLsmTreeCompaction);
}
