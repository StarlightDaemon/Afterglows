// Quadrature Encoder. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptQuadratureEncoder extends HTMLElement {
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
        .history-traces {
          animation:encoder-history-fade 10s linear infinite
        }
        @keyframes encoder-history-fade {
          0%,95% {
            opacity:1
          }
          99%,100% {
            opacity:0
          }
        }
        .disk-bg {
          fill:#0e251b;
          stroke:#375b51;
          stroke-width:1
        }
        .track-a {
          fill:#77c9ef
        }
        .track-b {
          fill:#f3c977
        }
        .encoder-disk {
          transform-origin:70px 46px;
          transform:rotate(123.75deg);
          animation:encoder-turn 10s linear infinite
        }
        .sensor {
          stroke:#07120f;
          stroke-width:1.3
        }
        .sensor-a {
          fill:#10251c;
          animation:encoder-a 10s steps(1,end) infinite
        }
        .sensor-b {
          fill:#f3c977;
          animation:encoder-b 10s steps(1,end) infinite
        }
        .encoder-direction {
          transform-origin:110px 46px;
          transform:scaleY(-1);
          animation:encoder-direction 10s steps(1,end) infinite
        }
        .history-a {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1.5
        }
        .history-b {
          fill:none;
          stroke:#f3c977;
          stroke-width:1.5
        }
        .channel-a,.channel-b {
          font:9px monospace
        }
        .channel-a {
          fill:#77c9ef
        }
        .channel-b {
          fill:#f3c977
        }
        .count {
          fill:#a9c0b2;
          text-anchor:middle;
          font:10px monospace
        }
        .encoder-window {
          animation:encoder-history 10s linear infinite
        }
        @keyframes encoder-turn {
          0%,10%,90%,100% {
            transform:rotate(-11.25deg)
          }
          50% {
            transform:rotate(168.75deg)
          }
        }
        @keyframes encoder-direction {
          0% {
            transform:scaleY(1)
          }
          50% {
            transform:scaleY(-1)
          }
        }
        @keyframes encoder-a {
          0% {
            fill:#77c9ef
          }
          12.5% {
            fill:#10251c
          }
          17.5% {
            fill:#10251c
          }
          22.5% {
            fill:#77c9ef
          }
          27.5% {
            fill:#77c9ef
          }
          32.5% {
            fill:#10251c
          }
          37.5% {
            fill:#10251c
          }
          42.5% {
            fill:#77c9ef
          }
          47.5% {
            fill:#77c9ef
          }
          52.5% {
            fill:#77c9ef
          }
          57.5% {
            fill:#10251c
          }
          62.5% {
            fill:#10251c
          }
          67.5% {
            fill:#77c9ef
          }
          72.5% {
            fill:#77c9ef
          }
          77.5% {
            fill:#10251c
          }
          82.5% {
            fill:#10251c
          }
          87.5% {
            fill:#77c9ef
          }
        }
        @keyframes encoder-b {
          0% {
            fill:#10251c
          }
          12.5% {
            fill:#10251c
          }
          17.5% {
            fill:#f3c977
          }
          22.5% {
            fill:#f3c977
          }
          27.5% {
            fill:#10251c
          }
          32.5% {
            fill:#10251c
          }
          37.5% {
            fill:#f3c977
          }
          42.5% {
            fill:#f3c977
          }
          47.5% {
            fill:#10251c
          }
          52.5% {
            fill:#f3c977
          }
          57.5% {
            fill:#f3c977
          }
          62.5% {
            fill:#10251c
          }
          67.5% {
            fill:#10251c
          }
          72.5% {
            fill:#f3c977
          }
          77.5% {
            fill:#f3c977
          }
          82.5% {
            fill:#10251c
          }
          87.5% {
            fill:#10251c
          }
        }
        @keyframes encoder-history {
          0% {
            width:0
          }
          100% {
            width:100px
          }
        }
        .count-0 {
          opacity:0;
          animation:encoder-count-0 10s steps(1,end) infinite
        }
        @keyframes encoder-count-0 {
          0% {
            opacity:1
          }
          12.5% {
            opacity:0
          }
          17.5% {
            opacity:0
          }
          22.5% {
            opacity:0
          }
          27.5% {
            opacity:0
          }
          32.5% {
            opacity:0
          }
          37.5% {
            opacity:0
          }
          42.5% {
            opacity:0
          }
          47.5% {
            opacity:0
          }
          52.5% {
            opacity:0
          }
          57.5% {
            opacity:0
          }
          62.5% {
            opacity:0
          }
          67.5% {
            opacity:0
          }
          72.5% {
            opacity:0
          }
          77.5% {
            opacity:0
          }
          82.5% {
            opacity:0
          }
          87.5% {
            opacity:1
          }
        }
        .count-1 {
          opacity:0;
          animation:encoder-count-1 10s steps(1,end) infinite
        }
        @keyframes encoder-count-1 {
          0% {
            opacity:0
          }
          12.5% {
            opacity:1
          }
          17.5% {
            opacity:0
          }
          22.5% {
            opacity:0
          }
          27.5% {
            opacity:0
          }
          32.5% {
            opacity:0
          }
          37.5% {
            opacity:0
          }
          42.5% {
            opacity:0
          }
          47.5% {
            opacity:0
          }
          52.5% {
            opacity:0
          }
          57.5% {
            opacity:0
          }
          62.5% {
            opacity:0
          }
          67.5% {
            opacity:0
          }
          72.5% {
            opacity:0
          }
          77.5% {
            opacity:0
          }
          82.5% {
            opacity:1
          }
          87.5% {
            opacity:0
          }
        }
        .count-2 {
          opacity:0;
          animation:encoder-count-2 10s steps(1,end) infinite
        }
        @keyframes encoder-count-2 {
          0% {
            opacity:0
          }
          12.5% {
            opacity:0
          }
          17.5% {
            opacity:1
          }
          22.5% {
            opacity:0
          }
          27.5% {
            opacity:0
          }
          32.5% {
            opacity:0
          }
          37.5% {
            opacity:0
          }
          42.5% {
            opacity:0
          }
          47.5% {
            opacity:0
          }
          52.5% {
            opacity:0
          }
          57.5% {
            opacity:0
          }
          62.5% {
            opacity:0
          }
          67.5% {
            opacity:0
          }
          72.5% {
            opacity:0
          }
          77.5% {
            opacity:1
          }
          82.5% {
            opacity:0
          }
          87.5% {
            opacity:0
          }
        }
        .count-3 {
          opacity:0;
          animation:encoder-count-3 10s steps(1,end) infinite
        }
        @keyframes encoder-count-3 {
          0% {
            opacity:0
          }
          12.5% {
            opacity:0
          }
          17.5% {
            opacity:0
          }
          22.5% {
            opacity:1
          }
          27.5% {
            opacity:0
          }
          32.5% {
            opacity:0
          }
          37.5% {
            opacity:0
          }
          42.5% {
            opacity:0
          }
          47.5% {
            opacity:0
          }
          52.5% {
            opacity:0
          }
          57.5% {
            opacity:0
          }
          62.5% {
            opacity:0
          }
          67.5% {
            opacity:0
          }
          72.5% {
            opacity:1
          }
          77.5% {
            opacity:0
          }
          82.5% {
            opacity:0
          }
          87.5% {
            opacity:0
          }
        }
        .count-4 {
          opacity:0;
          animation:encoder-count-4 10s steps(1,end) infinite
        }
        @keyframes encoder-count-4 {
          0% {
            opacity:0
          }
          12.5% {
            opacity:0
          }
          17.5% {
            opacity:0
          }
          22.5% {
            opacity:0
          }
          27.5% {
            opacity:1
          }
          32.5% {
            opacity:0
          }
          37.5% {
            opacity:0
          }
          42.5% {
            opacity:0
          }
          47.5% {
            opacity:0
          }
          52.5% {
            opacity:0
          }
          57.5% {
            opacity:0
          }
          62.5% {
            opacity:0
          }
          67.5% {
            opacity:1
          }
          72.5% {
            opacity:0
          }
          77.5% {
            opacity:0
          }
          82.5% {
            opacity:0
          }
          87.5% {
            opacity:0
          }
        }
        .count-5 {
          opacity:0;
          animation:encoder-count-5 10s steps(1,end) infinite
        }
        @keyframes encoder-count-5 {
          0% {
            opacity:0
          }
          12.5% {
            opacity:0
          }
          17.5% {
            opacity:0
          }
          22.5% {
            opacity:0
          }
          27.5% {
            opacity:0
          }
          32.5% {
            opacity:1
          }
          37.5% {
            opacity:0
          }
          42.5% {
            opacity:0
          }
          47.5% {
            opacity:0
          }
          52.5% {
            opacity:0
          }
          57.5% {
            opacity:0
          }
          62.5% {
            opacity:1
          }
          67.5% {
            opacity:0
          }
          72.5% {
            opacity:0
          }
          77.5% {
            opacity:0
          }
          82.5% {
            opacity:0
          }
          87.5% {
            opacity:0
          }
        }
        .count-6 {
          opacity:1;
          animation:encoder-count-6 10s steps(1,end) infinite
        }
        @keyframes encoder-count-6 {
          0% {
            opacity:0
          }
          12.5% {
            opacity:0
          }
          17.5% {
            opacity:0
          }
          22.5% {
            opacity:0
          }
          27.5% {
            opacity:0
          }
          32.5% {
            opacity:0
          }
          37.5% {
            opacity:1
          }
          42.5% {
            opacity:0
          }
          47.5% {
            opacity:0
          }
          52.5% {
            opacity:0
          }
          57.5% {
            opacity:1
          }
          62.5% {
            opacity:0
          }
          67.5% {
            opacity:0
          }
          72.5% {
            opacity:0
          }
          77.5% {
            opacity:0
          }
          82.5% {
            opacity:0
          }
          87.5% {
            opacity:0
          }
        }
        .count-7 {
          opacity:0;
          animation:encoder-count-7 10s steps(1,end) infinite
        }
        @keyframes encoder-count-7 {
          0% {
            opacity:0
          }
          12.5% {
            opacity:0
          }
          17.5% {
            opacity:0
          }
          22.5% {
            opacity:0
          }
          27.5% {
            opacity:0
          }
          32.5% {
            opacity:0
          }
          37.5% {
            opacity:0
          }
          42.5% {
            opacity:1
          }
          47.5% {
            opacity:0
          }
          52.5% {
            opacity:1
          }
          57.5% {
            opacity:0
          }
          62.5% {
            opacity:0
          }
          67.5% {
            opacity:0
          }
          72.5% {
            opacity:0
          }
          77.5% {
            opacity:0
          }
          82.5% {
            opacity:0
          }
          87.5% {
            opacity:0
          }
        }
        .count-8 {
          opacity:0;
          animation:encoder-count-8 10s steps(1,end) infinite
        }
        @keyframes encoder-count-8 {
          0% {
            opacity:0
          }
          12.5% {
            opacity:0
          }
          17.5% {
            opacity:0
          }
          22.5% {
            opacity:0
          }
          27.5% {
            opacity:0
          }
          32.5% {
            opacity:0
          }
          37.5% {
            opacity:0
          }
          42.5% {
            opacity:0
          }
          47.5% {
            opacity:1
          }
          52.5% {
            opacity:0
          }
          57.5% {
            opacity:0
          }
          62.5% {
            opacity:0
          }
          67.5% {
            opacity:0
          }
          72.5% {
            opacity:0
          }
          77.5% {
            opacity:0
          }
          82.5% {
            opacity:0
          }
          87.5% {
            opacity:0
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Quadrature Encoder">
        <defs>
          <clipPath id="encoder-history">
            <rect class="encoder-window" x="20" y="83" width="60" height="38"/>
          </clipPath>
        </defs>
        <circle class="disk-bg" cx="70" cy="46" r="31"/>
        <g class="encoder-disk">
          <path class="track-a" d="M90,46A20 20 0 0 1 84.142,60.142L79.899,55.899A14 14 0 0 0 84,46Z"/>
          <path class="track-b" d="M97.716,57.481A30 30 0 0 1 81.481,73.716L79.184,68.173A24 24 0 0 0 92.173,55.184Z"/>
          <path class="track-a" d="M70,66A20 20 0 0 1 55.858,60.142L60.101,55.899A14 14 0 0 0 70,60Z"/>
          <path class="track-b" d="M58.519,73.716A30 30 0 0 1 42.284,57.481L47.827,55.184A24 24 0 0 0 60.816,68.173Z"/>
          <path class="track-a" d="M50,46A20 20 0 0 1 55.858,31.858L60.101,36.101A14 14 0 0 0 56,46Z"/>
          <path class="track-b" d="M42.284,34.519A30 30 0 0 1 58.519,18.284L60.816,23.827A24 24 0 0 0 47.827,36.816Z"/>
          <path class="track-a" d="M70,26A20 20 0 0 1 84.142,31.858L79.899,36.101A14 14 0 0 0 70,32Z"/>
          <path class="track-b" d="M81.481,18.284A30 30 0 0 1 97.716,34.519L92.173,36.816A24 24 0 0 0 79.184,23.827Z"/>
          <circle class="ink muted" cx="70" cy="46" r="7"/>
          <path class="ink" d="M70 40V46H75"/>
        </g>
        <circle class="sensor sensor-a" cx="87" cy="46" r="2.6"/>
        <circle class="sensor sensor-b" cx="97" cy="46" r="2.6"/>
        <path class="encoder-direction ink" d="M110 34Q115 45 110 58M108 53L110 58L115 55"/>
        <path class="ink muted" d="M20 96H120M20 118H120"/>
        <g class="history-traces" clip-path="url(#encoder-history)">
          <path class="history-a" d="M20 87H32.5V96H37.5V96H42.5V87H47.5V87H52.5V96H57.5V96H62.5V87H67.5V87H72.5V87H77.5V96H82.5V96H87.5V87H92.5V87H97.5V96H102.5V96H107.5V87H120"/>
          <path class="history-b" d="M20 118H32.5V118H37.5V109H42.5V109H47.5V118H52.5V118H57.5V109H62.5V109H67.5V118H72.5V109H77.5V109H82.5V118H87.5V118H92.5V109H97.5V109H102.5V118H107.5V118H120"/>
        </g>
        <text class="channel-a" x="8" y="94">A</text>
        <text class="channel-b" x="8" y="116">B</text>
        <text class="count count-0" x="70" y="132">0</text>
        <text class="count count-1" x="70" y="132">1</text>
        <text class="count count-2" x="70" y="132">2</text>
        <text class="count count-3" x="70" y="132">3</text>
        <text class="count count-4" x="70" y="132">4</text>
        <text class="count count-5" x="70" y="132">5</text>
        <text class="count count-6" x="70" y="132">6</text>
        <text class="count count-7" x="70" y="132">7</text>
        <text class="count count-8" x="70" y="132">8</text>
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

if (!customElements.get("concept-quadrature-encoder")) {
  customElements.define("concept-quadrature-encoder", ConceptQuadratureEncoder);
}
