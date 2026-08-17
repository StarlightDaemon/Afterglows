const phageStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .phg {
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

  /* Host bacterial cell outer membrane at bottom */
  .phg-membrane {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 22px;
    background: linear-gradient(180deg, #008818, #011d06);
    border-top: 2px solid var(--accent, #00cc00);
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.3);
    z-index: 2;
  }

  /* Bacteriophage nano-assembly */
  .phg-body-rig {
    position: absolute;
    top: 4px;
    width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;
  }

  /* Icosahedral capsid head plunging downward on contract */
  .phg-capsid-svg {
    width: 38px;
    height: 38px;
    filter: drop-shadow(0 0 6px #8cffaa);
    animation: phg-capsid-plunge 2.4s ease-in-out infinite alternate;
  }

  @keyframes phg-capsid-plunge {
    0% { transform: translateY(0); }
    100% { transform: translateY(10px); }
  }

  /* Contractile helical tail sheath */
  .phg-sheath {
    width: 8px;
    height: 20px;
    background: repeating-linear-gradient(
      180deg,
      #ffffff 0px,
      #ffffff 2px,
      #008818 2px,
      #008818 5px
    );
    border: 1px solid #d6ffe0;
    border-radius: 2px;
    box-shadow: 0 0 4px #8cffaa;
    transform-origin: bottom center;
    animation: phg-contract 2.4s ease-in-out infinite alternate;
  }

  @keyframes phg-contract {
    0% { transform: scaleY(1); }
    100% { transform: scaleY(0.5); }
  }

  /* Baseplate and tail pins */
  .phg-baseplate {
    width: 16px;
    height: 4px;
    background: #ffffff;
    border: 1px solid var(--accent, #00cc00);
    border-radius: 2px;
    box-shadow: 0 0 4px #ffffff;
  }

  /* Tail fibers flexing under insertion load */
  .phg-fibers-svg {
    position: absolute;
    bottom: -6px;
    width: 70px;
    height: 28px;
    pointer-events: none;
    transform-origin: top center;
    animation: phg-fiber-flex 2.4s ease-in-out infinite alternate;
  }

  @keyframes phg-fiber-flex {
    0% { transform: scaleY(1) scaleX(1); }
    100% { transform: scaleY(0.75) scaleX(1.18); }
  }

  /* Viral DNA genome packets injecting continuously into host */
  .phg-dna-packet {
    position: absolute;
    width: 3.5px;
    height: 14px;
    background: #ffffff;
    border-radius: 2px;
    box-shadow: 0 0 6px #ffffff, 0 0 10px #00ff66;
    z-index: 5;
  }

  .dp1 { animation: phg-inject-packet 2s ease-in infinite; }
  .dp2 { animation: phg-inject-packet 2s ease-in infinite; animation-delay: 1s; }

  @keyframes phg-inject-packet {
    0% { transform: translateY(40px) scale(0.6); opacity: 0; }
    30% { opacity: 1; transform: translateY(55px) scale(1); }
    70% { opacity: 1; }
    100% { transform: translateY(85px) scale(0.8); opacity: 0; }
  }

  /* Caption */
  .phg-label {
    position: absolute;
    top: 6px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptBacteriophage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${phageStyles}</style>
      <div class="phg">
        <div class="phg-label">T4 PHAGE INJECTION</div>

        <div class="phg-body-rig">
          <svg class="phg-capsid-svg" viewBox="0 0 38 38">
            <!-- Icosahedral crystalline facets -->
            <polygon points="19,2 34,10 34,28 19,36 4,28 4,10" fill="url(#phgGrad)" stroke="#ffffff" stroke-width="1.2" />
            <line x1="19" y1="2" x2="19" y2="36" stroke="#d6ffe0" stroke-width="0.8" />
            <line x1="4" y1="10" x2="34" y2="28" stroke="#d6ffe0" stroke-width="0.8" />
            <line x1="4" y1="28" x2="34" y2="10" stroke="#d6ffe0" stroke-width="0.8" />
            <defs>
              <linearGradient id="phgGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#d6ffe0" />
                <stop offset="50%" stop-color="#00aa22" />
                <stop offset="100%" stop-color="#011f07" />
              </linearGradient>
            </defs>
          </svg>

          <div class="phg-sheath"></div>
          <div class="phg-baseplate"></div>

          <svg class="phg-fibers-svg" viewBox="0 0 70 28">
            <!-- Jointed tail fibers -->
            <path d="M 30 2 L 18 12 L 6 24" stroke="#8cffaa" stroke-width="1.5" fill="none" stroke-linecap="round" />
            <path d="M 32 2 L 24 14 L 16 26" stroke="#8cffaa" stroke-width="1.5" fill="none" stroke-linecap="round" />
            <path d="M 40 2 L 52 12 L 64 24" stroke="#8cffaa" stroke-width="1.5" fill="none" stroke-linecap="round" />
            <path d="M 38 2 L 46 14 L 54 26" stroke="#8cffaa" stroke-width="1.5" fill="none" stroke-linecap="round" />
          </svg>
        </div>

        <div class="phg-dna-packet dp1"></div>
        <div class="phg-dna-packet dp2"></div>
        <div class="phg-membrane"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-bacteriophage')) {
  customElements.define('concept-bacteriophage', ConceptBacteriophage);
}
