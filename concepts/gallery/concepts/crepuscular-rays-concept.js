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
    width: 16px;
    height: 16px;
    margin-left: -8px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 16px #ffea88, 0 0 32px #ffaa00;
  }

  /* Radial fanning perspective god rays */
  .crp-rays-container {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .crp-ray-beam {
    position: absolute;
    top: 18px;
    left: 50%;
    width: 120px;
    height: 90px;
    background: linear-gradient(180deg, rgba(255, 235, 120, 0.5) 0%, rgba(255, 170, 0, 0.15) 60%, transparent 100%);
    transform-origin: 0% 0%;
    animation: crp-ray-drift 4s ease-in-out infinite alternate;
  }

  .rb1 { clip-path: polygon(0 0, 10% 100%, 25% 100%); transform: rotate(-40deg); }
  .rb2 { clip-path: polygon(0 0, 20% 100%, 38% 100%); transform: rotate(-20deg); animation-delay: 0.8s; }
  .rb3 { clip-path: polygon(0 0, 42% 100%, 58% 100%); transform: rotate(0deg); animation-delay: 1.6s; }
  .rb4 { clip-path: polygon(0 0, 62% 100%, 80% 100%); transform: rotate(20deg); animation-delay: 0.4s; }
  .rb5 { clip-path: polygon(0 0, 75% 100%, 90% 100%); transform: rotate(40deg); animation-delay: 1.2s; }

  @keyframes crp-ray-drift {
    0% { opacity: 0.6; filter: brightness(0.9); }
    100% { opacity: 1; filter: brightness(1.3); }
  }

  /* Dark cloud bank casting ray shadows */
  .crp-cloud-bank {
    position: absolute;
    top: 10px;
    width: 96px;
    height: 18px;
    background: #1f1406;
    border: 1px solid #ffaa00;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    z-index: 5;
  }

  /* Cloud gap apertures letting sunbeams through */
  .crp-gap {
    width: 8px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff;
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
