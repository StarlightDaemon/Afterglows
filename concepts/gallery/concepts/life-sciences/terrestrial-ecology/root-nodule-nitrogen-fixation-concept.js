// Root-Nodule Nitrogen Fixation. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptRootNoduleNitrogenFixation extends HTMLElement {
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
        .root {
          fill:#59492d;
          stroke:#b7a273;
          stroke-width:1.5
        }
        .attachment {
          fill:#4a422b;
          stroke:#8f8c60;
          stroke-width:1
        }
        .nodule {
          fill:#273d2a;
          stroke:#8ca97c;
          stroke-width:1.5
        }
        .infected {
          fill:#294a36;
          stroke:#507a58;
          stroke-width:1.1
        }
        .symbiosome {
          fill:#163a32;
          stroke:#8aaf8c;
          stroke-width:1.2
        }
        .bacteroid {
          fill:#394e62;
          stroke:#a0b8c2;
          stroke-width:1.2
        }
        .bond {
          opacity:0;
          fill:none;
          stroke:#8ed4ef;
          stroke-width:1;
          animation:bond 14s linear infinite
        }
        .incoming {
          animation:incoming 14s linear infinite
        }
        .nitrogen {
          fill:#8ed4ef
        }
        .hydrogen {
          fill:#e7eee3;
          opacity:1;
          animation:hydrogen 14s linear infinite
        }
        .carbon {
          fill:#e9bd72;
          opacity:0;
          animation:carbon 14s linear infinite
        }
        @keyframes incoming {
          0%,10% {
            transform:translateY(-51px);
            opacity:1
          }
          30%,100% {
            transform:translateY(0);
            opacity:1
          }
        }
        @keyframes bond {
          0%,35% {
            opacity:1
          }
          44%,100% {
            opacity:0
          }
        }
        @keyframes hydrogen {
          0%,44% {
            opacity:0
          }
          55%,100% {
            opacity:1
          }
        }
        @keyframes carbon {
          0%,7% {
            opacity:0;
            transform:translate(34px,51px)
          }
          10% {
            opacity:1;
            transform:translate(34px,51px)
          }
          17% {
            opacity:1;
            transform:translate(34px,70px)
          }
          23% {
            opacity:1;
            transform:translate(57px,70px)
          }
          27%,32% {
            opacity:1;
            transform:translate(80px,72px)
          }
          38%,100% {
            opacity:0;
            transform:translate(80px,72px)
          }
        }
        .n0 {
          transform:translate(34px,76px);
          animation:n0 14s linear infinite
        }
        @keyframes n0 {
          0%,10% {
            opacity:1;
            transform:translate(85px,24px)
          }
          30%,35% {
            opacity:1;
            transform:translate(85px,75px)
          }
          45%,55% {
            opacity:1;
            transform:translate(81px,75px)
          }
          65% {
            opacity:1;
            transform:translate(57px,70px)
          }
          68% {
            opacity:1;
            transform:translate(34px,70px)
          }
          70%,93% {
            opacity:1;
            transform:translate(34px,76px)
          }
          98%,100% {
            opacity:0;
            transform:translate(34px,76px)
          }
        }
        .n1 {
          transform:translate(34px,86px);
          animation:n1 14s linear infinite
        }
        @keyframes n1 {
          0%,10% {
            opacity:1;
            transform:translate(91px,24px)
          }
          30%,35% {
            opacity:1;
            transform:translate(91px,75px)
          }
          45%,70% {
            opacity:1;
            transform:translate(95px,75px)
          }
          80% {
            opacity:1;
            transform:translate(57px,70px)
          }
          83% {
            opacity:1;
            transform:translate(34px,70px)
          }
          85%,93% {
            opacity:1;
            transform:translate(34px,86px)
          }
          98%,100% {
            opacity:0;
            transform:translate(34px,86px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Root-Nodule Nitrogen Fixation">
        <path class="root" d="M26,16H40V124H26Z"/>
        <path class="attachment" d="M39,65H60V76H39Z"/>
        <ellipse class="nodule" cx="88" cy="75" rx="34" ry="36"/>
        <ellipse class="infected" cx="88" cy="75" rx="27" ry="28"/>
        <ellipse class="symbiosome" cx="88" cy="75" rx="20" ry="13"/>
        <rect class="bacteroid" x="73" y="67" width="30" height="16" rx="8"/>
        <path class="ink muted" d="M79,76Q85,69 92,76Q96,81 97,74"/>
        <g class="incoming">
          <path class="bond" d="M85,75H91M85,72H91M85,78H91"/>
        </g>
        <g class="carbon">
          <path d="M-3,-3H3V3H-3Z"/>
        </g>
        <g class="ammonia n0">
          <circle class="nitrogen" r="2.5"/>
          <g class="hydrogen">
            <circle cx="0" cy="-4" r="1.2"/>
            <circle cx="3.5" cy="2" r="1.2"/>
            <circle cx="-3.5" cy="2" r="1.2"/>
          </g>
        </g>
        <g class="ammonia n1">
          <circle class="nitrogen" r="2.5"/>
          <g class="hydrogen">
            <circle cx="0" cy="-4" r="1.2"/>
            <circle cx="3.5" cy="2" r="1.2"/>
            <circle cx="-3.5" cy="2" r="1.2"/>
          </g>
        </g>
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

if (!customElements.get("concept-root-nodule-nitrogen-fixation")) {
  customElements.define("concept-root-nodule-nitrogen-fixation", ConceptRootNoduleNitrogenFixation);
}
