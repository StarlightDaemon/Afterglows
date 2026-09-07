// Extracted from Microscope in the 2026-08-01 split: the little view inset's
// focus-blur mechanic, given the full frame it deserved. The reticle stays
// crisp — it lives in the eyepiece optics — while the specimen field beneath
// it hunts from blur to focus, gets knocked soft by a stage bump, and
// recovers. A swimmer crosses the field to keep the culture feeling alive.
const microbesStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: Single-color phosphor microbial field --- */
  .mf {
    width: 100px;
    height: 100px;
    position: relative;
  }

  .mf-field {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid var(--accent, #00cc00);
    background:
      radial-gradient(circle at 46% 42%, rgba(0, 110, 22, 0.55), rgba(0, 46, 9, 0.85) 62%, rgba(0, 18, 4, 0.95) 100%);
    overflow: hidden;
    box-shadow: 0 0 12px rgba(0, 204, 0, 0.3), inset 0 0 16px rgba(0, 0, 0, 0.7);
  }

  .mf-specimen {
    position: absolute;
    inset: 0;
    animation: mf-focus 10s infinite, mf-drift 10s ease-in-out infinite;
  }

  .mf-cell {
    position: absolute;
    border-radius: 46% 54% 52% 48%;
    border: 1px solid rgba(140, 255, 170, 0.8);
    background: radial-gradient(circle at 40% 35%, rgba(190, 255, 205, 0.5), rgba(0, 110, 22, 0.5));
    animation: mf-cell ease-in-out infinite;
  }

  .mf-cell::after {
    content: '';
    position: absolute;
    left: 30%;
    top: 26%;
    width: 40%;
    height: 40%;
    border-radius: 50%;
    background: rgba(0, 160, 32, 0.7);
  }

  .mf-cell.x1 { left: 14px; top: 20px; width: 26px; height: 22px; animation-duration: 7s; }
  .mf-cell.x2 { left: 56px; top: 40px; width: 20px; height: 18px; animation-duration: 8.6s; animation-delay: -3s; }
  .mf-cell.x3 { left: 32px; top: 62px; width: 16px; height: 14px; animation-duration: 7.8s; animation-delay: -5s; }
  .mf-cell.x4 { left: 62px; top: 14px; width: 13px; height: 12px; animation-duration: 6.6s; animation-delay: -1.8s; }
  .mf-cell.x5 { left: 12px; top: 52px; width: 11px; height: 10px; animation-duration: 9s; animation-delay: -6.4s; }

  @keyframes mf-cell {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    33% { transform: translate(5px, -4px) rotate(7deg); }
    66% { transform: translate(-4px, 4px) rotate(-5deg); }
  }

  .mf-mote {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.55);
    animation: mf-mote 12s linear infinite;
  }

  .mf-mote.m1 { left: 44px; top: 30px; }
  .mf-mote.m2 { left: 24px; top: 76px; animation-delay: -4s; }
  .mf-mote.m3 { left: 74px; top: 62px; animation-delay: -8s; }

  @keyframes mf-mote {
    0%, 100% { transform: translate(0, 0); opacity: 0.35; }
    25% { transform: translate(6px, -5px); opacity: 0.7; }
    50% { transform: translate(2px, -10px); opacity: 0.45; }
    75% { transform: translate(-5px, -4px); opacity: 0.65; }
  }

  .mf-swimmer {
    position: absolute;
    left: -18px;
    top: 58px;
    width: 15px;
    height: 7px;
    border-radius: 50% 62% 58% 50%;
    border: 1px solid rgba(160, 255, 185, 0.85);
    background: radial-gradient(circle at 35% 40%, rgba(210, 255, 220, 0.6), rgba(0, 130, 26, 0.55));
    animation: mf-swim 10s linear infinite;
  }

  @keyframes mf-swim {
    0% { transform: translate(0, 0) rotate(8deg); }
    20% { transform: translate(28px, -8px) rotate(-6deg); }
    40% { transform: translate(58px, -4px) rotate(10deg); }
    60% { transform: translate(86px, -14px) rotate(-4deg); }
    80% { transform: translate(112px, -10px) rotate(8deg); }
    100% { transform: translate(136px, -18px) rotate(-4deg); }
  }

  @keyframes mf-focus {
    0% { filter: blur(2.4px); }
    12% { filter: blur(1.4px); }
    26% { filter: blur(2.8px); }
    38% { filter: blur(0.9px); }
    46%, 64% { filter: blur(0); }
    68% { filter: blur(1.8px); }
    76%, 100% { filter: blur(0.2px); }
  }

  @keyframes mf-drift {
    0%, 62% { transform: translate(0, 0); }
    68% { transform: translate(3px, -1px); }
    100% { transform: translate(2px, -1px); }
  }

  .mf-reticle {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    pointer-events: none;
    background:
      linear-gradient(0deg, transparent 49.5%, rgba(140, 255, 170, 0.22) 50%, transparent 50.5%),
      linear-gradient(90deg, transparent 49.5%, rgba(140, 255, 170, 0.22) 50%, transparent 50.5%);
  }

  .mf-reticle::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 30px;
    border: 1px solid rgba(140, 255, 170, 0.28);
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  .mf-mag {
    position: absolute;
    right: 12px;
    bottom: 10px;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 1px;
    color: rgba(140, 255, 170, 0.75);
  }

  /* --- v2: Phase-contrast fluorescence microscopy ---
     Midnight blue illuminated field, cyan/teal protozoa with magenta nuclei,
     fast electric-cyan flagellate swimmer, and silver eyepiece graticule. */
  .mfc {
    width: 100px;
    height: 100px;
    position: relative;
  }

  .mfc-field {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid #38bdf8;
    background:
      radial-gradient(circle at 46% 42%, #0c4a6e 0%, #082f49 55%, #020617 100%);
    overflow: hidden;
    box-shadow: 0 0 16px rgba(56, 189, 248, 0.4), inset 0 0 16px rgba(0, 0, 0, 0.9);
  }

  .mfc-specimen {
    position: absolute;
    inset: 0;
    animation: mf-focus 10s infinite, mf-drift 10s ease-in-out infinite;
  }

  .mfc-cell {
    position: absolute;
    border-radius: 46% 54% 52% 48%;
    border: 1px solid #38bdf8;
    background: radial-gradient(circle at 40% 35%, rgba(56, 189, 248, 0.6), rgba(14, 116, 144, 0.6));
    box-shadow: 0 0 6px rgba(56, 189, 248, 0.4);
    animation: mf-cell ease-in-out infinite;
  }

  .mfc-cell::after {
    content: '';
    position: absolute;
    left: 30%;
    top: 26%;
    width: 40%;
    height: 40%;
    border-radius: 50%;
    background: radial-gradient(circle, #f43f5e, #be123c);
    box-shadow: 0 0 4px #fb7185;
  }

  .mfc-cell.x1 { left: 14px; top: 20px; width: 26px; height: 22px; animation-duration: 7s; }
  .mfc-cell.x2 { left: 56px; top: 40px; width: 20px; height: 18px; animation-duration: 8.6s; animation-delay: -3s; }
  .mfc-cell.x3 { left: 32px; top: 62px; width: 16px; height: 14px; animation-duration: 7.8s; animation-delay: -5s; }
  .mfc-cell.x4 { left: 62px; top: 14px; width: 13px; height: 12px; animation-duration: 6.6s; animation-delay: -1.8s; }
  .mfc-cell.x5 { left: 12px; top: 52px; width: 11px; height: 10px; animation-duration: 9s; animation-delay: -6.4s; }

  /* Debris motes */
  .mfc-mote {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #fbbf24;
    box-shadow: 0 0 3px #f59e0b;
    animation: mf-mote 12s linear infinite;
  }

  .mfc-mote.m1 { left: 44px; top: 30px; }
  .mfc-mote.m2 { left: 24px; top: 76px; animation-delay: -4s; }
  .mfc-mote.m3 { left: 74px; top: 62px; animation-delay: -8s; }

  /* Rapid electric-cyan flagellate */
  .mfc-swimmer {
    position: absolute;
    left: -18px;
    top: 58px;
    width: 15px;
    height: 7px;
    border-radius: 50% 62% 58% 50%;
    border: 1px solid #67e8f9;
    background: radial-gradient(circle at 35% 40%, #ffffff, #00f0ff 60%, #0284c7);
    box-shadow: 0 0 8px #00f0ff;
    animation: mf-swim 10s linear infinite;
  }

  /* Etched reticle */
  .mfc-reticle {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    pointer-events: none;
    background:
      linear-gradient(0deg, transparent 49.5%, rgba(255, 255, 255, 0.3) 50%, transparent 50.5%),
      linear-gradient(90deg, transparent 49.5%, rgba(255, 255, 255, 0.3) 50%, transparent 50.5%);
  }

  .mfc-reticle::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 30px;
    border: 1px solid rgba(255, 255, 255, 0.35);
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  .mfc-mag {
    position: absolute;
    right: 12px;
    bottom: 10px;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #38bdf8;
    text-shadow: 0 0 5px rgba(56, 189, 248, 0.8);
  }
`;

const microbesMarkup = {
  v1: `
    <div class="mf">
      <div class="mf-field">
        <div class="mf-specimen">
          <div class="mf-cell x1"></div>
          <div class="mf-cell x2"></div>
          <div class="mf-cell x3"></div>
          <div class="mf-cell x4"></div>
          <div class="mf-cell x5"></div>
          <div class="mf-mote m1"></div>
          <div class="mf-mote m2"></div>
          <div class="mf-mote m3"></div>
          <div class="mf-swimmer"></div>
        </div>
        <div class="mf-reticle"></div>
      </div>
      <div class="mf-mag">&#215;400</div>
    </div>
  `,
  v2: `
    <div class="mfc">
      <div class="mfc-field">
        <div class="mfc-specimen">
          <div class="mfc-cell x1"></div>
          <div class="mfc-cell x2"></div>
          <div class="mfc-cell x3"></div>
          <div class="mfc-cell x4"></div>
          <div class="mfc-cell x5"></div>
          <div class="mfc-mote m1"></div>
          <div class="mfc-mote m2"></div>
          <div class="mfc-mote m3"></div>
          <div class="mfc-swimmer"></div>
        </div>
        <div class="mfc-reticle"></div>
      </div>
      <div class="mfc-mag">&#215;400</div>
    </div>
  `,
};

class ConceptMicrobes extends HTMLElement {
  static get observedAttributes() {
    return ['version'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
    }
  }

  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${microbesStyles}</style>${microbesMarkup[version] || microbesMarkup.v2}`;
  }
}

if (!customElements.get('concept-microbes')) {
  customElements.define('concept-microbes', ConceptMicrobes);
}
