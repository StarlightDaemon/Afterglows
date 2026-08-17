const crepuscularStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .crp {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 20%, #1a1403 0%, #080501 60%, #020100 100%);
    border: 1.5px solid rgba(255, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Hidden sunburst behind cloud deck */
  .crp-sun-origin {
    position: absolute;
    top: 14px;
    left: 50%;
    width: 18px;
    height: 18px;
    margin-left: -9px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 18px #ffea88, 0 0 34px #ffaa00;
  }

  /* Radial fanning perspective god rays with dynamic angular sweep */
  .crp-rays-container {
    position: absolute;
    inset: 0;
    pointer-events: none;
    transform-origin: 50% 18px;
    animation: crp-fan-sweep 3.6s ease-in-out infinite alternate;
  }

  @keyframes crp-fan-sweep {
    0% { transform: rotate(-16deg); }
    100% { transform: rotate(16deg); }
  }

  /* Bright dust mote drifting down through the beam shafts */
  .crp-mote {
    position: absolute;
    top: 30px;
    left: 50%;
    width: 4px;
    height: 4px;
    margin-left: -2px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff, 0 0 14px #ffd600;
    z-index: 4;
    animation: crp-mote-drift 3.6s ease-in infinite;
  }

  @keyframes crp-mote-drift {
    0% { transform: translate(-18px, 0) scale(0.6); opacity: 0; }
    15% { opacity: 1; }
    85% { opacity: 1; }
    100% { transform: translate(22px, 52px) scale(1.2); opacity: 0; }
  }

  .crp-ray-beam {
    position: absolute;
    top: 18px;
    left: 50%;
    width: 120px;
    height: 90px;
    background: linear-gradient(180deg, rgba(255, 255, 200, 0.85) 0%, rgba(255, 170, 0, 0.3) 60%, transparent 100%);
    transform-origin: 0% 0%;
    filter: drop-shadow(0 0 4px #ffd600);
  }

  .rb1 { clip-path: polygon(0 0, 10% 100%, 25% 100%); transform: rotate(-42deg); }
  .rb2 { clip-path: polygon(0 0, 20% 100%, 38% 100%); transform: rotate(-20deg); }
  .rb3 { clip-path: polygon(0 0, 42% 100%, 58% 100%); transform: rotate(0deg); }
  .rb4 { clip-path: polygon(0 0, 62% 100%, 80% 100%); transform: rotate(20deg); }
  .rb5 { clip-path: polygon(0 0, 75% 100%, 90% 100%); transform: rotate(42deg); }

  /* Dark cloud bank drifting across the sun casting dynamic shadow shafts */
  .crp-cloud-bank {
    position: absolute;
    top: 10px;
    width: 104px;
    height: 18px;
    background: #1f1406;
    border: 1px solid #ffaa00;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    z-index: 5;
    animation: crp-cloud-drift 3.6s ease-in-out infinite alternate;
  }

  @keyframes crp-cloud-drift {
    0% { transform: translateX(-8px); }
    100% { transform: translateX(8px); }
  }

  /* Cloud gap apertures letting sunbeams through */
  .crp-gap {
    width: 9px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff, 0 0 14px #ffd600;
  }

  /* Mountain ridge silhouette at bottom */
  .crp-mountains {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 22px;
    background: #0d0801;
    border-top: 1px solid rgba(255, 170, 0, 0.4);
    clip-path: polygon(0 100%, 0 50%, 25% 15%, 50% 60%, 75% 10%, 100% 45%, 100% 100%);
    z-index: 6;
  }

  .crp-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 204, 100, 0.85);
    letter-spacing: 0.5px;
    z-index: 7;
  }
`;

class ConceptCrepuscularRays extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${crepuscularStyles}</style>
      <div class="crp">
        <div class="crp-sun-origin"></div>

        <div class="crp-rays-container">
          <div class="crp-ray-beam rb1"></div>
          <div class="crp-ray-beam rb2"></div>
          <div class="crp-ray-beam rb3"></div>
          <div class="crp-ray-beam rb4"></div>
          <div class="crp-ray-beam rb5"></div>
        </div>

        <div class="crp-mote"></div>

        <div class="crp-cloud-bank">
          <div class="crp-gap"></div>
          <div class="crp-gap"></div>
          <div class="crp-gap"></div>
        </div>

        <div class="crp-mountains"></div>

        <div class="crp-label">CREPUSCULAR GOD RAYS</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-crepuscular-rays')) {
  customElements.define('concept-crepuscular-rays', ConceptCrepuscularRays);
}
