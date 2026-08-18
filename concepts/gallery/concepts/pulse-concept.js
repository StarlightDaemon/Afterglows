const pulseStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .pulse-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 100%;
    height: 100%;
    padding: 12px 10px;
    position: relative;
    animation: pulse-stream 1.2s linear infinite;
  }

  @keyframes pulse-stream {
    0% { transform: translateX(0); }
    100% { transform: translateX(-24px); }
  }

  .pulse-bar {
    width: 7px;
    height: 38px;
    border-radius: 4px;
    background: linear-gradient(180deg, #ffffff, #00ff66 60%, #006622);
    border: 1px solid #00ff66;
    box-shadow: 0 0 10px rgba(0, 255, 100, 0.6);
    animation: pulse-wave 1.0s ease-in-out infinite alternate;
  }

  @keyframes pulse-wave {
    0% { transform: translateY(-16px) scaleY(0.7); }
    100% { transform: translateY(16px) scaleY(1.3); }
  }

  .pulse-basic-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: 60px;
    width: 100%;
    position: relative;
    animation: pulse-stream 1.2s linear infinite;
  }

  .pulse-basic-bar {
    width: 10px;
    height: 42px;
    border-radius: 5px;
    background: linear-gradient(180deg, #ffffff, #00ff66);
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 12px rgba(0, 255, 100, 0.6);
    animation: pulse-wave 1.0s ease-in-out infinite alternate;
  }
`;

const pulseMarkup = {
  v1: `
    <div class="pulse-basic-wrap">
      <div class="pulse-basic-bar" style="animation-delay:0s"></div>
      <div class="pulse-basic-bar" style="animation-delay:-0.2s"></div>
      <div class="pulse-basic-bar" style="animation-delay:-0.4s"></div>
      <div class="pulse-basic-bar" style="animation-delay:-0.6s"></div>
      <div class="pulse-basic-bar" style="animation-delay:-0.8s"></div>
    </div>
  `,
  v2: `
    <div class="pulse-wrap">
      <div class="pulse-bar" style="animation-delay:0s"></div>
      <div class="pulse-bar" style="animation-delay:-0.12s"></div>
      <div class="pulse-bar" style="animation-delay:-0.24s"></div>
      <div class="pulse-bar" style="animation-delay:-0.36s"></div>
      <div class="pulse-bar" style="animation-delay:-0.48s"></div>
      <div class="pulse-bar" style="animation-delay:-0.60s"></div>
      <div class="pulse-bar" style="animation-delay:-0.72s"></div>
      <div class="pulse-bar" style="animation-delay:-0.84s"></div>
      <div class="pulse-bar" style="animation-delay:-0.96s"></div>
      <div class="pulse-bar" style="animation-delay:-1.08s"></div>
    </div>
  `,
};

class ConceptPulse extends HTMLElement {
  static get observedAttributes() { return ['version']; }
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() { this.render(); }
  attributeChangedCallback() { if (this.isConnected) this.render(); }
  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${pulseStyles}</style>${pulseMarkup[version] || pulseMarkup.v2}`;
  }
}

if (!customElements.get('concept-pulse')) {
  customElements.define('concept-pulse', ConceptPulse);
}
