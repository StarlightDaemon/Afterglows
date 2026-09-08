// Swallowing Airway Protection. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptSwallowingAirwayProtection extends HTMLElement {
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
        .tissue {
          fill:#583b44;
          stroke:#c58b8c;
          stroke-width:1.5
        }
        .cavity {
          fill:#101e19;
          stroke:#997a7e;
          stroke-width:1.3
        }
        .tongue {
          fill:#a8616c;
          animation:tongue 9s infinite
        }
        .trachea {
          fill:none;
          stroke:#97b1a7;
          stroke-width:3
        }
        .throat {
          fill:#13251d;
          stroke:#97b1a7;
          stroke-width:2
        }
        .larynx {
          animation:larynx 9s infinite
        }
        .glottis {
          stroke:#dca983;
          stroke-width:2;
          animation:glottis 9s infinite
        }
        .epiglottis {
          fill:#c38384;
          stroke:#e9b1a6;
          stroke-width:1.2;
          animation:epiglottis 9s infinite
        }
        .bolus {
          fill:#e5c16f;
          animation:bolus 9s linear infinite
        }
        .airflow {
          stroke:#8abdaf;
          opacity:.5;
          animation:airflow 9s infinite
        }
        @keyframes tongue {
          0%,5%,100% {
            d:path("M12 54Q39 44 65 53L76 57H12Z")
          }
          20%,30% {
            d:path("M12 54Q60 35 80 48L84 57H12Z")
          }
          80% {
            d:path("M12 54Q39 44 65 53L76 57H12Z")
          }
        }
        @keyframes larynx {
          0%,18%,100% {
            transform:translateY(0)
          }
          25%,75% {
            transform:translateY(-6px)
          }
          85% {
            transform:translateY(0)
          }
        }
        @keyframes glottis {
          0%,18%,100% {
            d:path("M76 90L78 99M95 90L93 99")
          }
          25%,75% {
            d:path("M76 90L85 94M95 90L85 94")
          }
          85% {
            d:path("M76 90L78 99M95 90L93 99")
          }
        }
        @keyframes epiglottis {
          0%,18%,100% {
            d:path("M80 78Q81 53 88 49Q97 53 87 79Z")
          }
          25%,75% {
            d:path("M80 72Q95 60 108 69Q105 80 84 78Z")
          }
          85% {
            d:path("M80 78Q81 53 88 49Q97 53 87 79Z")
          }
        }
        @keyframes bolus {
          0%,5% {
            transform:translate(-81px,-71px)
          }
          25% {
            transform:translate(-31px,-71px)
          }
          32% {
            transform:translate(-12px,-72px);
          }
          38% {
            transform:translate(-2px,-59px)
          }
          52% {
            transform:translate(0,-31px)
          }
          70%,100% {
            transform:translate(0,0)
          }
        }
        @keyframes airflow {
          0%,18% {
            opacity:.5
          }
          25%,80% {
            opacity:0
          }
          85%,100% {
            opacity:.5
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Swallowing Airway Protection">
        <path class="tissue" d="M12 26H70Q122 17 129 45V130H109V79Q110 64 102 59L73 64H12Z"/>
        <path class="cavity" d="M12 35H75Q118 26 125 47V130H110V79Q112 60 99 53L74 57H12"/>
        <path class="tongue" d="M12 54Q39 44 65 53L76 57H12Z"/>
        <path class="trachea" d="M74 95V130M96 95V130M74 105H96M74 116H96M74 127H96"/>
        <g class="larynx">
          <path class="throat" d="M73 80Q84 74 97 80V99H73Z"/>
          <path class="ink glottis" d="M76 90L78 99M95 90L93 99"/>
        </g>
        <path class="epiglottis" d="M80 78Q81 53 88 49Q97 53 87 79Z"/>
        <circle class="bolus" cx="118" cy="115" r="6"/>
        <path class="airflow ink" d="M84 108V124M80 119L84 124L88 119"/>
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

if (!customElements.get("concept-swallowing-airway-protection")) {
  customElements.define("concept-swallowing-airway-protection", ConceptSwallowingAirwayProtection);
}
