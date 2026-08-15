const bioluminescenceStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .bio-lum {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #011206 0%, #000502 100%);
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: inset 0 0 14px rgba(0, 255, 68, 0.15), 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
  }

  /* Deep water column gradient */
  .bio-water {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 30, 10, 0.2) 0%, rgba(0, 15, 5, 0.9) 100%);
  }

  /* Traveling mechanical disturbance wave */
  .bio-wave {
    position: absolute;
    top: -20px;
    left: -40px;
    width: 200px;
    height: 140px;
    border-radius: 40%;
    border: 1px dashed rgba(140, 255, 170, 0.25);
    animation: bio-wave-ripple 4.5s cubic-bezier(0.2, 0.6, 0.4, 1) infinite;
  }

  @keyframes bio-wave-ripple {
    0% { transform: scale(0.2) rotate(0deg); opacity: 0.9; }
    70% { transform: scale(1.1) rotate(45deg); opacity: 0.2; }
    100% { transform: scale(1.3) rotate(60deg); opacity: 0; }
  }

  /* Bioluminescent dinoflagellate clusters */
  .bio-cluster {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .bio-spark {
    position: absolute;
    border-radius: 50%;
    background: #d6ffe0;
    box-shadow: 0 0 8px #8cffaa, 0 0 14px #00ff44;
    animation: bio-sparkle 3s ease-in-out infinite;
  }

  .bio-spark.s1 { top: 22px; left: 30px; width: 4px; height: 4px; animation-delay: 0.2s; }
  .bio-spark.s2 { top: 38px; left: 45px; width: 5px; height: 5px; animation-delay: 0.6s; }
  .bio-spark.s3 { top: 52px; left: 28px; width: 6px; height: 6px; animation-delay: 0.9s; }
  .bio-spark.s4 { top: 68px; left: 60px; width: 4px; height: 4px; animation-delay: 1.4s; }
  .bio-spark.s5 { top: 30px; left: 75px; width: 5px; height: 5px; animation-delay: 1.1s; }
  .bio-spark.s6 { top: 48px; left: 88px; width: 4px; height: 4px; animation-delay: 1.7s; }
  .bio-spark.s7 { top: 75px; left: 82px; width: 6px; height: 6px; animation-delay: 2.1s; }
  .bio-spark.s8 { top: 82px; left: 38px; width: 3px; height: 3px; animation-delay: 2.4s; }

  @keyframes bio-sparkle {
    0%, 100% { opacity: 0.1; transform: scale(0.5); filter: blur(1px); }
    30%, 55% { opacity: 1; transform: scale(1.3); filter: blur(0px); box-shadow: 0 0 12px #ffffff, 0 0 20px #8cffaa; }
    80% { opacity: 0.2; transform: scale(0.7); }
  }

  /* Micro-plankton tendrils floating in current */
  .bio-tendril-svg {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0.75;
    animation: bio-drift 5s ease-in-out infinite alternate;
  }

  @keyframes bio-drift {
    0% { transform: translateY(-3px) translateX(2px); }
    100% { transform: translateY(3px) translateX(-2px); }
  }
`;

class ConceptBioluminescence extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${bioluminescenceStyles}</style>
      <div class="bio-lum">
        <div class="bio-water"></div>
        <div class="bio-wave"></div>
        <svg class="bio-tendril-svg" viewBox="0 0 118 102">
          <!-- Drifting pelagic colonial siphonophore / dinoflagellate trails -->
          <path d="M 20 80 Q 40 50 30 20" stroke="rgba(140, 255, 170, 0.4)" stroke-width="1.2" stroke-dasharray="3,3" fill="none" />
          <path d="M 45 90 Q 65 60 55 30" stroke="rgba(214, 255, 224, 0.5)" stroke-width="1.5" stroke-dasharray="4,2" fill="none" />
          <path d="M 75 85 Q 90 45 80 15" stroke="rgba(140, 255, 170, 0.4)" stroke-width="1.2" stroke-dasharray="3,3" fill="none" />
        </svg>
        <div class="bio-cluster">
          <div class="bio-spark s1"></div>
          <div class="bio-spark s2"></div>
          <div class="bio-spark s3"></div>
          <div class="bio-spark s4"></div>
          <div class="bio-spark s5"></div>
          <div class="bio-spark s6"></div>
          <div class="bio-spark s7"></div>
          <div class="bio-spark s8"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-bioluminescence')) {
  customElements.define('concept-bioluminescence', ConceptBioluminescence);
}
