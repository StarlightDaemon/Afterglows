const origamiStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .org {
    width: 118px;
    height: 102px;
    position: relative;
    background: #020904;
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Paper texture background */
  .org-bg {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 50%, rgba(0, 35, 10, 0.4), #010803 90%);
  }

  /* Flying origami crane rig */
  .org-crane-rig {
    position: relative;
    width: 84px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: org-flight-glide 3.6s ease-in-out infinite alternate;
  }

  @keyframes org-flight-glide {
    0% { transform: translateY(-4px) rotate(-3deg); }
    100% { transform: translateY(4px) rotate(3deg); }
  }

  /* Origami crane SVG faceted body & animated wings */
  .org-crane-svg {
    width: 84px;
    height: 70px;
    filter: drop-shadow(0 0 4px #8cffaa);
  }

  /* Wing flap dynamic perspective animation */
  .org-left-wing {
    transform-origin: 42px 35px;
    animation: org-wing-flap-l 1.8s ease-in-out infinite alternate;
  }

  .org-right-wing {
    transform-origin: 42px 35px;
    animation: org-wing-flap-r 1.8s ease-in-out infinite alternate;
  }

  @keyframes org-wing-flap-l {
    0% { transform: scaleY(0.7) skewY(8deg); }
    100% { transform: scaleY(1.15) skewY(-8deg); }
  }

  @keyframes org-wing-flap-r {
    0% { transform: scaleY(0.7) skewY(-8deg); }
    100% { transform: scaleY(1.15) skewY(8deg); }
  }

  /* Fold crease glint particles */
  .org-crease-glint {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff;
    animation: org-glint 2s ease-in-out infinite alternate;
  }

  .org-crease-glint.g1 { top: 18px; left: 24px; animation-delay: 0.2s; }
  .org-crease-glint.g2 { top: 22px; right: 24px; animation-delay: 0.8s; }

  @keyframes org-glint {
    0% { opacity: 0.2; transform: scale(0.6); }
    100% { opacity: 1; transform: scale(1.2); }
  }

  /* Cultural caption */
  .org-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptOrigamiCrane extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${origamiStyles}</style>
      <div class="org">
        <div class="org-bg"></div>

        <div class="org-crane-rig">
          <svg class="org-crane-svg" viewBox="0 0 84 70">
            <defs>
              <linearGradient id="orgBodyGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#ffffff" />
                <stop offset="40%" stop-color="#8cffaa" />
                <stop offset="100%" stop-color="#006611" />
              </linearGradient>
              <linearGradient id="orgWingGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#d6ffe0" />
                <stop offset="60%" stop-color="#00aa22" />
                <stop offset="100%" stop-color="#012409" />
              </linearGradient>
            </defs>

            <!-- Left Wing facet -->
            <g class="org-left-wing">
              <polygon points="42,35 6,12 28,40" fill="url(#orgWingGrad)" stroke="#ffffff" stroke-width="1" />
              <!-- Crease lines -->
              <line x1="42" y1="35" x2="17" y2="26" stroke="#d6ffe0" stroke-width="0.8" stroke-dasharray="1.5,1.5" />
            </g>

            <!-- Right Wing facet -->
            <g class="org-right-wing">
              <polygon points="42,35 78,12 56,40" fill="url(#orgWingGrad)" stroke="#ffffff" stroke-width="1" />
              <!-- Crease lines -->
              <line x1="42" y1="35" x2="67" y2="26" stroke="#d6ffe0" stroke-width="0.8" stroke-dasharray="1.5,1.5" />
            </g>

            <!-- Main origami body diamond & facets -->
            <polygon points="42,20 49,38 42,56 35,38" fill="url(#orgBodyGrad)" stroke="#d6ffe0" stroke-width="1.2" />

            <!-- Slender neck and head -->
            <polygon points="42,50 38,62 34,60 40,48" fill="#d6ffe0" stroke="#00aa22" stroke-width="1" />
            <!-- Head beak fold -->
            <polygon points="34,60 30,59 33,63" fill="#ffffff" />

            <!-- Tail facet -->
            <polygon points="42,24 40,6 44,14" fill="#8cffaa" stroke="#00aa22" stroke-width="1" />
          </svg>

          <div class="org-crease-glint g1"></div>
          <div class="org-crease-glint g2"></div>
        </div>

        <div class="org-label">ORIZURU 折鶴</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-origami-crane')) {
  customElements.define('concept-origami-crane', ConceptOrigamiCrane);
}
