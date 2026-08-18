const eclipseStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  /* --- v1: Single-color phosphor eclipse --- */
  .eclipse {
    width: 92px;
    height: 92px;
    position: relative;
  }

  .eclipse-corona {
    position: absolute;
    inset: 12px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(190, 255, 160, 0.95) 0 32%, rgba(120, 255, 120, 0.6) 44%, rgba(0, 204, 0, 0.2) 64%, transparent 72%);
    box-shadow: 0 0 16px rgba(0, 255, 100, 0.6);
    transform-origin: 50% 50%;
    animation: eclipse-corona-spin 8s linear infinite, eclipse-corona-pulse 2.4s ease-in-out infinite alternate;
  }

  @keyframes eclipse-corona-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes eclipse-corona-pulse {
    0% { transform: scale(0.92); }
    100% { transform: scale(1.15); }
  }

  .eclipse-shadow {
    position: absolute;
    top: 18px;
    left: 18px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: #010101;
    border: 1px solid rgba(0, 204, 0, 0.4);
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.95);
    animation: eclipse-pass 3.4s ease-in-out infinite alternate;
  }

  @keyframes eclipse-pass {
    0% { transform: translateX(-24px); }
    100% { transform: translateX(24px); }
  }

  /* --- v2: Solar totality & chromatic diamond-ring corona ---
     Fiery golden-white solar corona, crimson chromosphere prominences,
     and obsidian lunar disc with radiant flare burst. */
  .ecc {
    width: 92px;
    height: 92px;
    position: relative;
  }

  .ecc-corona {
    position: absolute;
    inset: 8px;
    border-radius: 50%;
    background: radial-gradient(circle, #ffffff 0 24%, #fef08a 32%, #f59e0b 46%, #ea580c 58%, rgba(239, 68, 68, 0.4) 70%, transparent 78%);
    box-shadow: 0 0 24px rgba(245, 158, 11, 0.9), 0 0 36px rgba(234, 88, 12, 0.7);
    transform-origin: 50% 50%;
    animation: ecc-corona-spin 8s linear infinite, ecc-corona-pulse 2.4s ease-in-out infinite alternate;
  }

  @keyframes ecc-corona-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes ecc-corona-pulse {
    0% { transform: scale(0.92); }
    100% { transform: scale(1.15); }
  }

  /* Solar prominences (crimson chromospheric flares) */
  .ecc-prominence {
    position: absolute;
    inset: 14px;
    border-radius: 50%;
    background:
      radial-gradient(circle at 82% 28%, #ef4444 0 4px, transparent 5px),
      radial-gradient(circle at 22% 76%, #ef4444 0 3.5px, transparent 4.5px),
      radial-gradient(circle at 68% 84%, #f97316 0 4px, transparent 5px);
    transform-origin: 50% 50%;
    animation: ecc-prominence 6s linear infinite reverse;
  }

  @keyframes ecc-prominence {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .ecc-shadow {
    position: absolute;
    top: 18px;
    left: 18px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: #030712;
    border: 1px solid rgba(254, 240, 138, 0.3);
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.95), 0 0 8px rgba(0, 0, 0, 0.9);
    animation: eclipse-pass 3.4s ease-in-out infinite alternate;
  }

  /* Diamond ring flash */
  .ecc-diamond {
    position: absolute;
    top: 42px;
    left: 42px;
    width: 10px;
    height: 10px;
    margin: -5px 0 0 -5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 12px #ffffff, 0 0 22px #fde047;
    animation: ecc-diamond 4.2s linear infinite;
  }

  @keyframes ecc-diamond {
    0% { transform: rotate(0deg) translateX(30px) rotate(0deg) scale(0.6); opacity: 0.4; }
    50% { transform: rotate(180deg) translateX(30px) rotate(-180deg) scale(1.6); opacity: 1; }
    100% { transform: rotate(360deg) translateX(30px) rotate(-360deg) scale(0.6); opacity: 0.4; }
  }
`;

const eclipseMarkup = {
  v1: `
    <div class="eclipse">
      <div class="eclipse-corona"></div>
      <div class="eclipse-shadow"></div>
    </div>
  `,
  v2: `
    <div class="ecc">
      <div class="ecc-corona"></div>
      <div class="ecc-prominence"></div>
      <div class="ecc-diamond"></div>
      <div class="ecc-shadow"></div>
    </div>
  `,
};

class ConceptEclipse extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${eclipseStyles}</style>${eclipseMarkup[version] || eclipseMarkup.v2}`;
  }
}

if (!customElements.get('concept-eclipse')) {
  customElements.define('concept-eclipse', ConceptEclipse);
}
