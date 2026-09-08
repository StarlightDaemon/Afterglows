// Phototropic Growth. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptPhototropicGrowth extends HTMLElement {
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
        .stem {
          fill:#2b5434;
          stroke:#95bd83;
          stroke-width:1.5;
          animation:stem 14s linear infinite
        }
        .rays {
          fill:none;
          stroke:#f3c977;
          stroke-width:1.5;
          animation:light 14s linear infinite
        }
        .shoot {
          animation:show 14s linear infinite
        }
        .cross {
          stroke:#a5bf8e;
          stroke-width:1;
          fill:none
        }
        .hormone {
          fill:#ed8eab;
          animation:hormone 14s linear infinite
        }
        @keyframes show {
          0%,100% {
            opacity:0
          }
          5%,95% {
            opacity:1
          }
        }
        @keyframes light {
          0% {
            opacity:.1
          }
          15%,100% {
            opacity:1
          }
        }
        @keyframes hormone {
          0%,15% {
            opacity:0
          }
          30%,100% {
            opacity:1
          }
        }
        @keyframes stem {
          0%,30% {
            d:path('M63.000,120.000L63.000,117.744L63.000,115.479L63.000,113.204L63.000,110.922L63.000,108.634L63.000,106.342L63.000,104.047L63.000,101.750L63.000,99.453L63.000,97.158L63.000,94.866L63.000,92.578L63.000,90.296L63.000,88.021L63.000,85.756L63.000,83.500L63.000,81.256L63.000,79.025L63.000,76.809L63.000,74.609L63.000,72.427L63.000,70.264L63.000,68.121L63.000,66.000L63.000,63.903L63.000,61.830L63.000,59.784L63.000,57.766L63.000,55.777L63.000,53.818L63.000,51.892L63.000,50.000L77.000,50.000L77.000,51.892L77.000,53.818L77.000,55.777L77.000,57.766L77.000,59.784L77.000,61.830L77.000,63.903L77.000,66.000L77.000,68.121L77.000,70.264L77.000,72.427L77.000,74.609L77.000,76.809L77.000,79.025L77.000,81.256L77.000,83.500L77.000,85.756L77.000,88.021L77.000,90.296L77.000,92.578L77.000,94.866L77.000,97.158L77.000,99.453L77.000,101.750L77.000,104.047L77.000,106.342L77.000,108.634L77.000,110.922L77.000,113.204L77.000,115.479L77.000,117.744L77.000,120.000Z')
          }
          80%,100% {
            d:path('M63.000,120.000L63.044,117.129L63.174,114.207L63.389,111.237L63.685,108.223L64.062,105.170L64.517,102.082L65.050,98.963L65.657,95.818L66.339,92.651L67.093,89.467L67.919,86.271L68.815,83.068L69.779,79.863L70.812,76.660L71.910,73.464L73.075,70.281L74.304,67.116L75.596,63.972L76.951,60.857L78.367,57.774L79.844,54.728L81.381,51.725L82.977,48.770L84.632,45.868L86.345,43.023L88.115,40.242L89.943,37.529L91.827,34.888L93.769,32.327L95.767,29.849L97.823,27.460L99.937,25.167L110.063,34.833L108.281,36.768L106.525,38.808L104.799,40.948L103.106,43.182L101.449,45.504L99.829,47.909L98.249,50.392L96.712,52.945L95.219,55.563L93.773,58.240L92.375,60.971L91.027,63.750L89.732,66.570L88.490,69.425L87.304,72.310L86.175,75.219L85.105,78.145L84.094,81.084L83.145,84.027L82.260,86.971L81.438,89.908L80.683,92.833L79.994,95.739L79.374,98.620L78.823,101.470L78.343,104.282L77.935,107.051L77.600,109.769L77.338,112.430L77.150,115.026L77.038,117.552L77.000,120.000Z')
          }
        }
        .r1 {
          animation:r1 14s linear infinite
        }
        @keyframes r1 {
          0%,30% {
            d:path('M63.000,110.922L77.000,110.922')
          }
          80%,100% {
            d:path('M63.685,108.223L77.600,109.769')
          }
        }
        .h1 {
          animation:h1 14s linear infinite,hormone 14s linear infinite
        }
        @keyframes h1 {
          0%,30% {
            transform:translate(66.5px,114.57px)
          }
          80%,100% {
            transform:translate(66.742px,113.267px)
          }
        }
        .r2 {
          animation:r2 14s linear infinite
        }
        @keyframes r2 {
          0%,30% {
            d:path('M63.000,101.750L77.000,101.750')
          }
          80%,100% {
            d:path('M65.657,95.818L79.374,98.620')
          }
        }
        .h2 {
          animation:h2 14s linear infinite,hormone 14s linear infinite
        }
        @keyframes h2 {
          0%,30% {
            transform:translate(66.5px,105.424px)
          }
          80%,100% {
            transform:translate(68.173px,101.419px)
          }
        }
        .r3 {
          animation:r3 14s linear infinite
        }
        @keyframes r3 {
          0%,30% {
            d:path('M63.000,92.578L77.000,92.578')
          }
          80%,100% {
            d:path('M68.815,83.068L82.260,86.971')
          }
        }
        .h3 {
          animation:h3 14s linear infinite,hormone 14s linear infinite
        }
        @keyframes h3 {
          0%,30% {
            transform:translate(66.5px,96.241px)
          }
          80%,100% {
            transform:translate(70.805px,89.059px)
          }
        }
        .r4 {
          animation:r4 14s linear infinite
        }
        @keyframes r4 {
          0%,30% {
            d:path('M63.000,83.500L77.000,83.500')
          }
          80%,100% {
            d:path('M73.075,70.281L86.175,75.219')
          }
        }
        .h4 {
          animation:h4 14s linear infinite,hormone 14s linear infinite
        }
        @keyframes h4 {
          0%,30% {
            transform:translate(66.5px,87.114px)
          }
          80%,100% {
            transform:translate(74.555px,76.512px)
          }
        }
        .r5 {
          animation:r5 14s linear infinite
        }
        @keyframes r5 {
          0%,30% {
            d:path('M63.000,74.609L77.000,74.609')
          }
          80%,100% {
            d:path('M78.367,57.774L91.027,63.750')
          }
        }
        .h5 {
          animation:h5 14s linear infinite,hormone 14s linear infinite
        }
        @keyframes h5 {
          0%,30% {
            transform:translate(66.5px,78.137px)
          }
          80%,100% {
            transform:translate(79.343px,64.112px)
          }
        }
        .r6 {
          animation:r6 14s linear infinite
        }
        @keyframes r6 {
          0%,30% {
            d:path('M63.000,66.000L77.000,66.000')
          }
          80%,100% {
            d:path('M84.632,45.868L96.712,52.945')
          }
        }
        .h6 {
          animation:h6 14s linear infinite,hormone 14s linear infinite
        }
        @keyframes h6 {
          0%,30% {
            transform:translate(66.5px,69.404px)
          }
          80%,100% {
            transform:translate(85.096px,52.194px)
          }
        }
        .r7 {
          animation:r7 14s linear infinite
        }
        @keyframes r7 {
          0%,30% {
            d:path('M63.000,57.766L77.000,57.766')
          }
          80%,100% {
            d:path('M91.827,34.888L103.106,43.182')
          }
        }
        .h7 {
          animation:h7 14s linear infinite,hormone 14s linear infinite
        }
        @keyframes h7 {
          0%,30% {
            transform:translate(66.5px,61.008px)
          }
          80%,100% {
            transform:translate(91.747px,41.096px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Phototropic Growth">
        <path class="soil ink muted" d="M18,121H122"/>
        <circle class="light warm" cx="119" cy="17" r="6"/>
        <path class="rays" d="M110,22L94,32M113,27L106,40M107,17L91,20"/>
        <g class="shoot">
          <path class="stem" d="M63.000,120.000L63.044,117.129L63.174,114.207L63.389,111.237L63.685,108.223L64.062,105.170L64.517,102.082L65.050,98.963L65.657,95.818L66.339,92.651L67.093,89.467L67.919,86.271L68.815,83.068L69.779,79.863L70.812,76.660L71.910,73.464L73.075,70.281L74.304,67.116L75.596,63.972L76.951,60.857L78.367,57.774L79.844,54.728L81.381,51.725L82.977,48.770L84.632,45.868L86.345,43.023L88.115,40.242L89.943,37.529L91.827,34.888L93.769,32.327L95.767,29.849L97.823,27.460L99.937,25.167L110.063,34.833L108.281,36.768L106.525,38.808L104.799,40.948L103.106,43.182L101.449,45.504L99.829,47.909L98.249,50.392L96.712,52.945L95.219,55.563L93.773,58.240L92.375,60.971L91.027,63.750L89.732,66.570L88.490,69.425L87.304,72.310L86.175,75.219L85.105,78.145L84.094,81.084L83.145,84.027L82.260,86.971L81.438,89.908L80.683,92.833L79.994,95.739L79.374,98.620L78.823,101.470L78.343,104.282L77.935,107.051L77.600,109.769L77.338,112.430L77.150,115.026L77.038,117.552L77.000,120.000Z"/>
          <path class="cross r1" d="M63.685,108.223L77.600,109.769"/>
          <circle class="hormone h1" cx="0" cy="0" r="1.7" transform="translate(66.742 113.267)"/>
          <path class="cross r2" d="M65.657,95.818L79.374,98.620"/>
          <circle class="hormone h2" cx="0" cy="0" r="1.7" transform="translate(68.173 101.419)"/>
          <path class="cross r3" d="M68.815,83.068L82.260,86.971"/>
          <circle class="hormone h3" cx="0" cy="0" r="1.7" transform="translate(70.805 89.059)"/>
          <path class="cross r4" d="M73.075,70.281L86.175,75.219"/>
          <circle class="hormone h4" cx="0" cy="0" r="1.7" transform="translate(74.555 76.512)"/>
          <path class="cross r5" d="M78.367,57.774L91.027,63.750"/>
          <circle class="hormone h5" cx="0" cy="0" r="1.7" transform="translate(79.343 64.112)"/>
          <path class="cross r6" d="M84.632,45.868L96.712,52.945"/>
          <circle class="hormone h6" cx="0" cy="0" r="1.7" transform="translate(85.096 52.194)"/>
          <path class="cross r7" d="M91.827,34.888L103.106,43.182"/>
          <circle class="hormone h7" cx="0" cy="0" r="1.7" transform="translate(91.747 41.096)"/>
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

if (!customElements.get("concept-phototropic-growth")) {
  customElements.define("concept-phototropic-growth", ConceptPhototropicGrowth);
}
