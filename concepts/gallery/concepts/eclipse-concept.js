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
    background: radial-gradient(circle, rgba(190, 255, 160, 0.92) 0 32%, rgba(120, 255, 120, 0.45) 44%, rgba(0, 204, 0, 0.08) 64%, transparent 70%);
    filter: blur(1px);
  }

  .eclipse-shadow {
    position: absolute;
    top: 18px;
    left: 8px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: #010101;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
    animation: eclipse-pass 4.6s ease-in-out infinite;
  }

  @keyframes eclipse-pass {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(18px); }
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
    background: radial-gradient(circle, #ffffff 0 24%, #fef08a 32%, #f59e0b 46%, #ea580c 58%, rgba(239, 68, 68, 0.2) 70%, transparent 78%);
    filter: blur(1.5px);
    box-shadow: 0 0 24px rgba(245, 158, 11, 0.8), 0 0 36px rgba(234, 88, 12, 0.5);
  }

  /* Solar prominences (crimson chromospheric flares) */
  .ecc-prominence {
    position: absolute;
    inset: 14px;
    border-radius: 50%;
    background:
      radial-gradient(circle at 82% 28%, #ef4444 0 3px, transparent 4px),
      radial-gradient(circle at 22% 76%, #ef4444 0 2.5px, transparent 3.5px),
      radial-gradient(circle at 68% 84%, #f97316 0 3px, transparent 4px);
    filter: blur(0.5px);
  }

  .ecc-shadow {
    position: absolute;
    top: 18px;
    left: 8px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: #030712;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.95), 0 0 6px rgba(0, 0, 0, 0.9);
    animation: eclipse-pass 4.6s ease-in-out infinite;
  }

  /* Diamond ring flash */
  .ecc-diamond {
    position: absolute;
    top: 16px;
    right: 18px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 10px #ffffff, 0 0 18px #fde047;
    animation: ecc-diamond 4.6s ease-in-out infinite;
  }

  @keyframes ecc-diamond {
    0%, 100% { opacity: 0; transform: scale(0.4); }
    48%, 52% { opacity: 1; transform: scale(1.2); }
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
