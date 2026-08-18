const neuronStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: Single-color phosphor neuron --- */
  .nr {
    width: 116px;
    height: 88px;
    position: relative;
  }

  .nr-soma {
    position: absolute;
    left: 16px;
    top: 34px;
    width: 22px;
    height: 20px;
    border-radius: 46% 54% 52% 48%;
    background: radial-gradient(circle at 40% 35%, #ffffff, rgba(0, 110, 22, 0.95));
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 10px rgba(0, 255, 100, 0.6);
    transform-origin: 50% 50%;
    animation: nr-soma 1.2s ease-in-out infinite alternate;
  }

  @keyframes nr-soma {
    0% { transform: scale(0.85); box-shadow: 0 0 6px rgba(0, 204, 0, 0.4); }
    100% { transform: scale(1.25); box-shadow: 0 0 16px rgba(0, 255, 100, 1); }
  }

  .nr-dend {
    position: absolute;
    width: 16px;
    height: 2px;
    border-radius: 1px;
    background: rgba(140, 255, 170, 0.9);
    transform-origin: 100% 50%;
    animation: nr-dend 1.2s ease-in-out infinite alternate;
  }

  .nr-dend.d1 { left: 2px; top: 30px; transform: rotate(30deg); animation-delay: 0s; }
  .nr-dend.d2 { left: 0; top: 42px; transform: rotate(0deg); animation-delay: -0.2s; }
  .nr-dend.d3 { left: 2px; top: 54px; transform: rotate(-28deg); animation-delay: -0.4s; }
  .nr-dend.d4 { left: 10px; top: 22px; transform: rotate(58deg); animation-delay: -0.6s; }
  .nr-dend.d5 { left: 10px; top: 62px; transform: rotate(-54deg); animation-delay: -0.8s; }

  @keyframes nr-dend {
    0% { opacity: 0.5; transform: scaleX(0.8); }
    100% { opacity: 1; transform: scaleX(1.2); }
  }

  .nr-axon {
    position: absolute;
    left: 38px;
    top: 43px;
    width: 56px;
    height: 3.5px;
    background: repeating-linear-gradient(90deg,
      rgba(0, 204, 0, 0.7) 0 10px,
      rgba(140, 255, 170, 0.95) 10px 12px);
    border-radius: 2px;
  }

  .nr-spike {
    position: absolute;
    left: 34px;
    top: 39px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: radial-gradient(circle, #ffffff, #00ff66 70%);
    box-shadow: 0 0 12px #00ff66;
    animation: nr-spike 1.0s linear infinite;
  }

  @keyframes nr-spike {
    0% { transform: translateX(0); opacity: 1; }
    100% { transform: translateX(58px); opacity: 1; }
  }

  .nr-term {
    position: absolute;
    left: 92px;
    top: 36px;
    width: 12px;
    height: 17px;
  }

  .nr-bouton {
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #ffffff, rgba(0, 110, 22, 0.9));
    animation: nr-bouton 1.0s ease-in-out infinite alternate;
  }

  .nr-bouton.b1 { left: 0; top: 0; }
  .nr-bouton.b2 { left: 4px; top: 6px; }
  .nr-bouton.b3 { left: 0; top: 12px; }

  @keyframes nr-bouton {
    0% { transform: scale(0.8); box-shadow: none; }
    100% { transform: scale(1.3); box-shadow: 0 0 10px #00ff66; }
  }

  .nr-vesicle {
    position: absolute;
    left: 102px;
    top: 42px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #00ff66;
    animation: nr-vesicle 1.0s linear infinite;
  }

  .nr-vesicle.v2 { top: 38px; animation-delay: -0.33s; }
  .nr-vesicle.v3 { top: 48px; animation-delay: -0.66s; }

  @keyframes nr-vesicle {
    0% { transform: translateX(0); opacity: 1; }
    100% { transform: translateX(10px); opacity: 0; }
  }

  .nr-target {
    position: absolute;
    right: 0;
    top: 32px;
    width: 6px;
    height: 24px;
    border-radius: 4px 0 0 4px;
    background: rgba(0, 130, 26, 0.8);
    border: 1px solid #00ff66;
    animation: nr-target 1.0s ease-in-out infinite alternate;
  }

  @keyframes nr-target {
    0% { transform: scaleY(0.9); box-shadow: none; }
    100% { transform: scaleY(1.15); box-shadow: 0 0 12px #00ff66; }
  }

  .nr-trace {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 4px;
    height: 14px;
    border-bottom: 1.5px solid rgba(0, 204, 0, 0.5);
  }

  .nr-blip {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 8px;
    height: 12px;
    clip-path: polygon(0 100%, 30% 100%, 50% 0, 70% 100%, 100% 100%);
    background: #00ff66;
    box-shadow: 0 0 8px #00ff66;
    animation: nr-blip 1.0s linear infinite;
  }

  @keyframes nr-blip {
    0% { transform: translateX(0); opacity: 1; }
    100% { transform: translateX(92px); opacity: 1; }
  }

  /* --- v2: Neurophysiological action potential signaling --- */
  .nrc {
    width: 116px;
    height: 88px;
    position: relative;
  }

  .nrc-soma {
    position: absolute;
    left: 16px;
    top: 34px;
    width: 22px;
    height: 20px;
    border-radius: 46% 54% 52% 48%;
    background: radial-gradient(circle at 40% 35%, #ffffff, #7e22ce 60%, #4c1d95);
    border: 1.5px solid #d8b4fe;
    transform-origin: 50% 50%;
    animation: nrc-soma 1.2s ease-in-out infinite alternate;
  }

  @keyframes nrc-soma {
    0% { transform: scale(0.85); box-shadow: 0 0 6px rgba(168, 85, 247, 0.4); }
    100% { transform: scale(1.25); box-shadow: 0 0 18px #c084fc, 0 0 24px #a855f7; }
  }

  .nrc-dend {
    position: absolute;
    width: 16px;
    height: 2px;
    border-radius: 1px;
    background: #c084fc;
    transform-origin: 100% 50%;
    animation: nrc-dend 1.2s ease-in-out infinite alternate;
  }

  .nrc-dend.d1 { left: 2px; top: 30px; transform: rotate(30deg); animation-delay: 0s; }
  .nrc-dend.d2 { left: 0; top: 42px; transform: rotate(0deg); animation-delay: -0.2s; }
  .nrc-dend.d3 { left: 2px; top: 54px; transform: rotate(-28deg); animation-delay: -0.4s; }
  .nrc-dend.d4 { left: 10px; top: 22px; transform: rotate(58deg); animation-delay: -0.6s; }
  .nrc-dend.d5 { left: 10px; top: 62px; transform: rotate(-54deg); animation-delay: -0.8s; }

  @keyframes nrc-dend {
    0% { opacity: 0.5; transform: scaleX(0.8); }
    100% { opacity: 1; transform: scaleX(1.2); }
  }

  .nrc-axon {
    position: absolute;
    left: 38px;
    top: 43px;
    width: 56px;
    height: 3.5px;
    background: repeating-linear-gradient(90deg,
      #f59e0b 0 10px,
      #38bdf8 10px 12px);
    border-radius: 2px;
    box-shadow: 0 0 6px rgba(245, 158, 11, 0.6);
  }

  .nrc-spike {
    position: absolute;
    left: 34px;
    top: 39px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: radial-gradient(circle, #ffffff, #00f0ff 60%);
    box-shadow: 0 0 14px #00f0ff, 0 0 24px #0284c7;
    animation: nr-spike 1.0s linear infinite;
  }

  .nrc-term {
    position: absolute;
    left: 92px;
    top: 36px;
    width: 12px;
    height: 17px;
  }

  .nrc-bouton {
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #ffffff, #6b21a8);
    border: 1px solid #d8b4fe;
    animation: nrc-bouton 1.0s ease-in-out infinite alternate;
  }

  .nrc-bouton.b1 { left: 0; top: 0; }
  .nrc-bouton.b2 { left: 4px; top: 6px; }
  .nrc-bouton.b3 { left: 0; top: 12px; }

  @keyframes nrc-bouton {
    0% { transform: scale(0.8); box-shadow: none; }
    100% { transform: scale(1.3); box-shadow: 0 0 12px #00f0ff; background: #38bdf8; }
  }

  .nrc-vesicle {
    position: absolute;
    left: 102px;
    top: 42px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #38bdf8;
    box-shadow: 0 0 6px #00f0ff;
    animation: nr-vesicle 1.0s linear infinite;
  }

  .nrc-vesicle.v2 { top: 38px; animation-delay: -0.33s; }
  .nrc-vesicle.v3 { top: 48px; animation-delay: -0.66s; }

  .nrc-target {
    position: absolute;
    right: 0;
    top: 32px;
    width: 6px;
    height: 24px;
    border-radius: 4px 0 0 4px;
    background: #ec4899;
    border: 1.5px solid #f472b6;
    animation: nrc-target 1.0s ease-in-out infinite alternate;
  }

  @keyframes nrc-target {
    0% { transform: scaleY(0.9); box-shadow: none; opacity: 0.7; }
    100% { transform: scaleY(1.15); box-shadow: 0 0 14px #ec4899; opacity: 1; }
  }

  .nrc-trace {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 4px;
    height: 14px;
    border-bottom: 1.5px solid #64748b;
  }

  .nrc-blip {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 8px;
    height: 12px;
    clip-path: polygon(0 100%, 30% 100%, 50% 0, 70% 100%, 100% 100%);
    background: #00f0ff;
    box-shadow: 0 0 8px #00f0ff;
    animation: nr-blip 1.0s linear infinite;
  }
`;

const neuronMarkup = {
  v1: `
    <div class="nr">
      <div class="nr-dend d1"></div>
      <div class="nr-dend d2"></div>
      <div class="nr-dend d3"></div>
      <div class="nr-dend d4"></div>
      <div class="nr-dend d5"></div>
      <div class="nr-soma"></div>
      <div class="nr-axon"></div>
      <div class="nr-spike"></div>
      <div class="nr-term">
        <div class="nr-bouton b1"></div>
        <div class="nr-bouton b2"></div>
        <div class="nr-bouton b3"></div>
      </div>
      <div class="nr-vesicle"></div>
      <div class="nr-vesicle v2"></div>
      <div class="nr-vesicle v3"></div>
      <div class="nr-target"></div>
      <div class="nr-trace"><div class="nr-blip"></div></div>
    </div>
  `,
  v2: `
    <div class="nrc">
      <div class="nrc-dend d1"></div>
      <div class="nrc-dend d2"></div>
      <div class="nrc-dend d3"></div>
      <div class="nrc-dend d4"></div>
      <div class="nrc-dend d5"></div>
      <div class="nrc-soma"></div>
      <div class="nrc-axon"></div>
      <div class="nrc-spike"></div>
      <div class="nrc-term">
        <div class="nrc-bouton b1"></div>
        <div class="nrc-bouton b2"></div>
        <div class="nrc-bouton b3"></div>
      </div>
      <div class="nrc-vesicle"></div>
      <div class="nrc-vesicle v2"></div>
      <div class="nrc-vesicle v3"></div>
      <div class="nrc-target"></div>
      <div class="nrc-trace"><div class="nrc-blip"></div></div>
    </div>
  `,
};

class ConceptNeuron extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${neuronStyles}</style>${neuronMarkup[version] || neuronMarkup.v2}`;
  }
}

if (!customElements.get('concept-neuron')) {
  customElements.define('concept-neuron', ConceptNeuron);
}
