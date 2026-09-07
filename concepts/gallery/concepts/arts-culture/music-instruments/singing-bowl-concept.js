const singingBowlStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sng {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #031407 0%, #000401 100%);
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Main resonant brass singing bowl body */
  .sng-bowl {
    position: relative;
    width: 76px;
    height: 76px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, #008818 0%, #011906 65%, #000803 100%);
    border: 2px solid var(--accent, #00cc00);
    box-shadow: inset 0 0 14px rgba(0, 204, 0, 0.4), 0 0 10px rgba(0, 204, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Quadrupole flexural acoustic standing wave rim deformation */
  .sng-rim-wave {
    position: absolute;
    inset: 2px;
    border-radius: 50%;
    border: 1.5px solid #d6ffe0;
    box-shadow: 0 0 8px #8cffaa;
    animation: sng-quadrupole 0.22s ease-in-out infinite alternate;
  }

  @keyframes sng-quadrupole {
    0% { transform: scaleX(0.94) scaleY(1.06); }
    100% { transform: scaleX(1.06) scaleY(0.94); }
  }

  /* Water pool inside bowl with Faraday ripple waves */
  .sng-water-pool {
    position: absolute;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 1px dotted rgba(140, 255, 170, 0.5);
    background: rgba(0, 50, 15, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Atomized jumping water droplet beads */
  .sng-droplet {
    position: absolute;
    width: 2.5px;
    height: 2.5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 4px #ffffff;
    animation: sng-fountain-bead 0.6s ease-out infinite;
  }

  .sng-droplet.d1 { top: 18px; left: 24px; animation-delay: 0.1s; }
  .sng-droplet.d2 { top: 30px; right: 18px; animation-delay: 0.25s; }
  .sng-droplet.d3 { bottom: 20px; left: 28px; animation-delay: 0.4s; }

  @keyframes sng-fountain-bead {
    0% { transform: translate(0, 0) scale(1); opacity: 1; }
    100% { transform: translate(var(--dx, 4px), var(--dy, -8px)) scale(0.3); opacity: 0; }
  }
  .sng-droplet.d1 { --dx: -6px; --dy: -10px; }
  .sng-droplet.d2 { --dx: 8px; --dy: -8px; }
  .sng-droplet.d3 { --dx: 2px; --dy: -12px; }

  /* Wooden puja mallet circling the rim */
  .sng-mallet-orbit {
    position: absolute;
    width: 86px;
    height: 86px;
    animation: sng-mallet-spin 3s linear infinite;
    z-index: 6;
  }

  @keyframes sng-mallet-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .sng-mallet-wand {
    position: absolute;
    top: -6px;
    left: 38px;
    width: 8px;
    height: 18px;
    background: linear-gradient(180deg, #ffffff, #008818);
    border: 1px solid #ffffff;
    border-radius: 4px;
    box-shadow: 0 0 8px #ffffff;
  }

  /* Soundwave acoustic harmonic ring */
  .sng-sound-halo {
    position: absolute;
    width: 96px;
    height: 96px;
    border-radius: 50%;
    border: 1px dashed rgba(214, 255, 224, 0.35);
    animation: sng-sound-expand 2s ease-out infinite;
  }

  @keyframes sng-sound-expand {
    0% { transform: scale(0.7); opacity: 0.8; }
    100% { transform: scale(1.25); opacity: 0; }
  }

  /* Caption */
  .sng-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptSingingBowl extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${singingBowlStyles}</style>
      <div class="sng">
        <div class="sng-sound-halo"></div>

        <div class="sng-bowl">
          <div class="sng-rim-wave"></div>
          <div class="sng-water-pool">
            <div class="sng-droplet d1"></div>
            <div class="sng-droplet d2"></div>
            <div class="sng-droplet d3"></div>
          </div>
        </div>

        <div class="sng-mallet-orbit">
          <div class="sng-mallet-wand"></div>
        </div>

        <div class="sng-label">SINGING BOWL 528 Hz</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-singing-bowl')) {
  customElements.define('concept-singing-bowl', ConceptSingingBowl);
}
