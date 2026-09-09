// Reaction-Wheel Attitude Control. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptReactionWheelAttitudeControl extends HTMLElement {
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
        .bus {
          animation:bus 16s linear infinite;
        }
        .wheel {
          animation:wheel 16s linear infinite;
        }
        @keyframes bus {
          0% {
            transform:translate(70px,70px) rotate(0deg);
          }
          2.083% {
            transform:translate(70px,70px) rotate(-0.182deg);
          }
          4.167% {
            transform:translate(70px,70px) rotate(-0.708deg);
          }
          6.25% {
            transform:translate(70px,70px) rotate(-1.547deg);
          }
          8.333% {
            transform:translate(70px,70px) rotate(-2.667deg);
          }
          10.417% {
            transform:translate(70px,70px) rotate(-4.036deg);
          }
          12.5% {
            transform:translate(70px,70px) rotate(-5.625deg);
          }
          14.583% {
            transform:translate(70px,70px) rotate(-7.401deg);
          }
          16.667% {
            transform:translate(70px,70px) rotate(-9.333deg);
          }
          18.75% {
            transform:translate(70px,70px) rotate(-11.391deg);
          }
          20.833% {
            transform:translate(70px,70px) rotate(-13.542deg);
          }
          22.917% {
            transform:translate(70px,70px) rotate(-15.755deg);
          }
          25% {
            transform:translate(70px,70px) rotate(-18deg);
          }
          27.083% {
            transform:translate(70px,70px) rotate(-20.245deg);
          }
          29.167% {
            transform:translate(70px,70px) rotate(-22.458deg);
          }
          31.25% {
            transform:translate(70px,70px) rotate(-24.609deg);
          }
          33.333% {
            transform:translate(70px,70px) rotate(-26.667deg);
          }
          35.417% {
            transform:translate(70px,70px) rotate(-28.599deg);
          }
          37.5% {
            transform:translate(70px,70px) rotate(-30.375deg);
          }
          39.583% {
            transform:translate(70px,70px) rotate(-31.964deg);
          }
          41.667% {
            transform:translate(70px,70px) rotate(-33.333deg);
          }
          43.75% {
            transform:translate(70px,70px) rotate(-34.453deg);
          }
          45.833% {
            transform:translate(70px,70px) rotate(-35.292deg);
          }
          47.917% {
            transform:translate(70px,70px) rotate(-35.818deg);
          }
          50% {
            transform:translate(70px,70px) rotate(-36deg);
          }
          52.083% {
            transform:translate(70px,70px) rotate(-35.818deg);
          }
          54.167% {
            transform:translate(70px,70px) rotate(-35.292deg);
          }
          56.25% {
            transform:translate(70px,70px) rotate(-34.453deg);
          }
          58.333% {
            transform:translate(70px,70px) rotate(-33.333deg);
          }
          60.417% {
            transform:translate(70px,70px) rotate(-31.964deg);
          }
          62.5% {
            transform:translate(70px,70px) rotate(-30.375deg);
          }
          64.583% {
            transform:translate(70px,70px) rotate(-28.599deg);
          }
          66.667% {
            transform:translate(70px,70px) rotate(-26.667deg);
          }
          68.75% {
            transform:translate(70px,70px) rotate(-24.609deg);
          }
          70.833% {
            transform:translate(70px,70px) rotate(-22.458deg);
          }
          72.917% {
            transform:translate(70px,70px) rotate(-20.245deg);
          }
          75% {
            transform:translate(70px,70px) rotate(-18deg);
          }
          77.083% {
            transform:translate(70px,70px) rotate(-15.755deg);
          }
          79.167% {
            transform:translate(70px,70px) rotate(-13.542deg);
          }
          81.25% {
            transform:translate(70px,70px) rotate(-11.391deg);
          }
          83.333% {
            transform:translate(70px,70px) rotate(-9.333deg);
          }
          85.417% {
            transform:translate(70px,70px) rotate(-7.401deg);
          }
          87.5% {
            transform:translate(70px,70px) rotate(-5.625deg);
          }
          89.583% {
            transform:translate(70px,70px) rotate(-4.036deg);
          }
          91.667% {
            transform:translate(70px,70px) rotate(-2.667deg);
          }
          93.75% {
            transform:translate(70px,70px) rotate(-1.547deg);
          }
          95.833% {
            transform:translate(70px,70px) rotate(-0.708deg);
          }
          97.917% {
            transform:translate(70px,70px) rotate(-0.182deg);
          }
          100% {
            transform:translate(70px,70px) rotate(0deg);
          }
        }
        @keyframes wheel {
          0% {
            transform:translate(0px,0px) rotate(0deg);
          }
          2.083% {
            transform:translate(0px,0px) rotate(1.823deg);
          }
          4.167% {
            transform:translate(0px,0px) rotate(7.083deg);
          }
          6.25% {
            transform:translate(0px,0px) rotate(15.469deg);
          }
          8.333% {
            transform:translate(0px,0px) rotate(26.667deg);
          }
          10.417% {
            transform:translate(0px,0px) rotate(40.365deg);
          }
          12.5% {
            transform:translate(0px,0px) rotate(56.25deg);
          }
          14.583% {
            transform:translate(0px,0px) rotate(74.01deg);
          }
          16.667% {
            transform:translate(0px,0px) rotate(93.333deg);
          }
          18.75% {
            transform:translate(0px,0px) rotate(113.906deg);
          }
          20.833% {
            transform:translate(0px,0px) rotate(135.417deg);
          }
          22.917% {
            transform:translate(0px,0px) rotate(157.552deg);
          }
          25% {
            transform:translate(0px,0px) rotate(180deg);
          }
          27.083% {
            transform:translate(0px,0px) rotate(202.448deg);
          }
          29.167% {
            transform:translate(0px,0px) rotate(224.583deg);
          }
          31.25% {
            transform:translate(0px,0px) rotate(246.094deg);
          }
          33.333% {
            transform:translate(0px,0px) rotate(266.667deg);
          }
          35.417% {
            transform:translate(0px,0px) rotate(285.99deg);
          }
          37.5% {
            transform:translate(0px,0px) rotate(303.75deg);
          }
          39.583% {
            transform:translate(0px,0px) rotate(319.635deg);
          }
          41.667% {
            transform:translate(0px,0px) rotate(333.333deg);
          }
          43.75% {
            transform:translate(0px,0px) rotate(344.531deg);
          }
          45.833% {
            transform:translate(0px,0px) rotate(352.917deg);
          }
          47.917% {
            transform:translate(0px,0px) rotate(358.177deg);
          }
          50% {
            transform:translate(0px,0px) rotate(360deg);
          }
          52.083% {
            transform:translate(0px,0px) rotate(358.177deg);
          }
          54.167% {
            transform:translate(0px,0px) rotate(352.917deg);
          }
          56.25% {
            transform:translate(0px,0px) rotate(344.531deg);
          }
          58.333% {
            transform:translate(0px,0px) rotate(333.333deg);
          }
          60.417% {
            transform:translate(0px,0px) rotate(319.635deg);
          }
          62.5% {
            transform:translate(0px,0px) rotate(303.75deg);
          }
          64.583% {
            transform:translate(0px,0px) rotate(285.99deg);
          }
          66.667% {
            transform:translate(0px,0px) rotate(266.667deg);
          }
          68.75% {
            transform:translate(0px,0px) rotate(246.094deg);
          }
          70.833% {
            transform:translate(0px,0px) rotate(224.583deg);
          }
          72.917% {
            transform:translate(0px,0px) rotate(202.448deg);
          }
          75% {
            transform:translate(0px,0px) rotate(180deg);
          }
          77.083% {
            transform:translate(0px,0px) rotate(157.552deg);
          }
          79.167% {
            transform:translate(0px,0px) rotate(135.417deg);
          }
          81.25% {
            transform:translate(0px,0px) rotate(113.906deg);
          }
          83.333% {
            transform:translate(0px,0px) rotate(93.333deg);
          }
          85.417% {
            transform:translate(0px,0px) rotate(74.01deg);
          }
          87.5% {
            transform:translate(0px,0px) rotate(56.25deg);
          }
          89.583% {
            transform:translate(0px,0px) rotate(40.365deg);
          }
          91.667% {
            transform:translate(0px,0px) rotate(26.667deg);
          }
          93.75% {
            transform:translate(0px,0px) rotate(15.469deg);
          }
          95.833% {
            transform:translate(0px,0px) rotate(7.083deg);
          }
          97.917% {
            transform:translate(0px,0px) rotate(1.823deg);
          }
          100% {
            transform:translate(0px,0px) rotate(0deg);
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .bus {
            transform:translate(70px,70px) rotate(-18deg);
          }
          .wheel {
            transform:translate(0px,0px) rotate(180deg);
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Reaction-Wheel Attitude Control">
        <circle cx="9" cy="8" r="1" fill="#789697" opacity=".5"/>
        <circle cx="56" cy="75" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="103" cy="19" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="29" cy="86" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="76" cy="30" r="1" fill="#789697" opacity=".5"/>
        <circle cx="123" cy="97" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="49" cy="41" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="96" cy="108" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="22" cy="52" r="1" fill="#789697" opacity=".5"/>
        <circle cx="69" cy="119" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="116" cy="63" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="42" cy="130" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="89" cy="74" r="1" fill="#789697" opacity=".5"/>
        <circle cx="15" cy="18" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="62" cy="85" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="109" cy="29" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="35" cy="96" r="1" fill="#789697" opacity=".5"/>
        <circle cx="82" cy="40" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="129" cy="107" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="70" cy="70" r="54" fill="none" stroke="#365754" stroke-dasharray="2 5"/>
        <g class="bus">
          <rect x="-17" y="-24" width="34" height="48" rx="4" fill="#425c53" stroke="#c2cbb0"/>
          <rect x="-52" y="-16" width="31" height="32" fill="#254f65" stroke="#75aebf"/>
          <rect x="21" y="-16" width="31" height="32" fill="#254f65" stroke="#75aebf"/>
          <path d="M-48 -15L-48 15" stroke="#598c9d"/>
          <path d="M25 -15L25 15" stroke="#598c9d"/>
          <path d="M-41 -15L-41 15" stroke="#598c9d"/>
          <path d="M32 -15L32 15" stroke="#598c9d"/>
          <path d="M-34 -15L-34 15" stroke="#598c9d"/>
          <path d="M39 -15L39 15" stroke="#598c9d"/>
          <path d="M-27 -15L-27 15" stroke="#598c9d"/>
          <path d="M46 -15L46 15" stroke="#598c9d"/>
          <path d="M-52 0L52 0" stroke="#698c84"/>
          <path d="M0 -24V-37L4 -32M0 -37L-4 -32" stroke="#eac780" fill="none"/>
          <circle cx="0" cy="0" r="12" fill="#1a302b" stroke="#c7b77e"/>
          <g class="wheel">
            <path d="M-10 0H10M0 -10V10" stroke="#e0c58b" stroke-width="2"/>
            <circle cx="7" cy="0" r="2" fill="#f2d891"/>
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

if (!customElements.get("concept-reaction-wheel-attitude-control")) {
  customElements.define("concept-reaction-wheel-attitude-control", ConceptReactionWheelAttitudeControl);
}
