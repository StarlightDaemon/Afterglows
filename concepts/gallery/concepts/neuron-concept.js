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
    background: radial-gradient(circle at 40% 35%, rgba(190, 255, 205, 0.8), rgba(0, 110, 22, 0.85));
    border: 1px solid rgba(140, 255, 170, 0.7);
    animation: nr-soma 3.8s infinite;
  }

  @keyframes nr-soma {
    0%, 18% { box-shadow: 0 0 4px rgba(0, 204, 0, 0.3); }
    24%, 30% { box-shadow: 0 0 16px rgba(0, 204, 0, 1); }
    40%, 100% { box-shadow: 0 0 4px rgba(0, 204, 0, 0.3); }
  }

  .nr-dend {
    position: absolute;
    width: 16px;
    height: 1.5px;
    border-radius: 1px;
    background: rgba(140, 255, 170, 0.6);
    transform-origin: 100% 50%;
    animation: nr-dend 3.8s infinite;
  }

  .nr-dend.d1 { left: 2px; top: 30px; transform: rotate(30deg); animation-delay: 0s; }
  .nr-dend.d2 { left: 0; top: 42px; transform: rotate(0deg); animation-delay: 0.12s; }
  .nr-dend.d3 { left: 2px; top: 54px; transform: rotate(-28deg); animation-delay: 0.24s; }
  .nr-dend.d4 { left: 10px; top: 22px; transform: rotate(58deg); animation-delay: 0.06s; }
  .nr-dend.d5 { left: 10px; top: 62px; transform: rotate(-54deg); animation-delay: 0.18s; }

  @keyframes nr-dend {
    0% { opacity: 0.4; box-shadow: none; }
    8% { opacity: 1; box-shadow: 0 0 5px rgba(0, 204, 0, 0.8); }
    16%, 100% { opacity: 0.4; box-shadow: none; }
  }

  .nr-axon {
    position: absolute;
    left: 38px;
    top: 43px;
    width: 56px;
    height: 3px;
    background: repeating-linear-gradient(90deg,
      rgba(0, 204, 0, 0.55) 0 10px,
      rgba(140, 255, 170, 0.9) 10px 12px);
    border-radius: 2px;
  }

  .nr-spike {
    position: absolute;
    left: 34px;
    top: 40px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: radial-gradient(circle, #f2ffdd, rgba(0, 204, 0, 0.4) 70%);
    box-shadow: 0 0 10px rgba(0, 204, 0, 1);
    opacity: 0;
    animation: nr-spike 3.8s infinite;
  }

  @keyframes nr-spike {
    0%, 24% { transform: translateX(0); opacity: 0; }
    28% { opacity: 1; }
    32% { transform: translateX(14px); }
    34% { transform: translateX(15px); }
    38% { transform: translateX(29px); }
    40% { transform: translateX(30px); }
    44% { transform: translateX(44px); }
    46% { transform: translateX(45px); }
    50% { transform: translateX(56px); opacity: 1; }
    54%, 100% { transform: translateX(56px); opacity: 0; }
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
    background: radial-gradient(circle at 40% 35%, rgba(190, 255, 205, 0.85), rgba(0, 110, 22, 0.9));
    animation: nr-bouton 3.8s infinite;
  }

  .nr-bouton.b1 { left: 0; top: 0; }
  .nr-bouton.b2 { left: 4px; top: 6px; }
  .nr-bouton.b3 { left: 0; top: 12px; }

  @keyframes nr-bouton {
    0%, 48% { box-shadow: none; }
    52%, 58% { box-shadow: 0 0 12px rgba(0, 204, 0, 1); }
    66%, 100% { box-shadow: none; }
  }

  .nr-vesicle {
    position: absolute;
    left: 102px;
    top: 42px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #d6ffe0;
    opacity: 0;
    animation: nr-vesicle 3.8s infinite;
  }

  .nr-vesicle.v2 { top: 38px; animation-delay: 0.1s; }
  .nr-vesicle.v3 { top: 48px; animation-delay: 0.18s; }

  @keyframes nr-vesicle {
    0%, 52% { transform: translateX(0); opacity: 0; }
    56% { opacity: 1; }
    64% { transform: translateX(8px); opacity: 0.9; }
    70%, 100% { transform: translateX(10px); opacity: 0; }
  }

  .nr-target {
    position: absolute;
    right: 0;
    top: 32px;
    width: 6px;
    height: 24px;
    border-radius: 4px 0 0 4px;
    background: rgba(0, 130, 26, 0.6);
    border: 1px solid rgba(0, 204, 0, 0.5);
    animation: nr-target 3.8s infinite;
  }

  @keyframes nr-target {
    0%, 62% { box-shadow: none; }
    68%, 76% { box-shadow: 0 0 10px rgba(0, 204, 0, 0.9); }
    84%, 100% { box-shadow: none; }
  }

  .nr-trace {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 4px;
    height: 14px;
    border-bottom: 1px solid rgba(0, 204, 0, 0.35);
  }

  .nr-blip {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 8px;
    height: 12px;
    clip-path: polygon(0 100%, 30% 100%, 50% 0, 70% 100%, 100% 100%);
    background: rgba(140, 255, 170, 0.9);
    opacity: 0;
    animation: nr-blip 3.8s linear infinite;
  }

  @keyframes nr-blip {
    0%, 24% { transform: translateX(0); opacity: 0; }
    28% { opacity: 1; }
    52% { transform: translateX(84px); opacity: 1; }
    56%, 100% { transform: translateX(92px); opacity: 0; }
  }

  /* --- v2: Neurophysiological action potential signaling ---
     Violet-magenta soma and dendrites, golden myelinated axon sheaths,
     electric cyan saltatory action potential pulse, and glowing neurotransmitter vesicles. */
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
    background: radial-gradient(circle at 40% 35%, #c084fc, #7e22ce 60%, #4c1d95);
    border: 1.5px solid #d8b4fe;
    animation: nrc-soma 3.8s infinite;
  }

  @keyframes nrc-soma {
    0%, 18% { box-shadow: 0 0 6px rgba(168, 85, 247, 0.4); }
    24%, 30% { box-shadow: 0 0 18px #c084fc, 0 0 24px #a855f7; }
    40%, 100% { box-shadow: 0 0 6px rgba(168, 85, 247, 0.4); }
  }

  .nrc-dend {
    position: absolute;
    width: 16px;
    height: 1.5px;
    border-radius: 1px;
    background: #a855f7;
    transform-origin: 100% 50%;
    animation: nrc-dend 3.8s infinite;
  }

  .nrc-dend.d1 { left: 2px; top: 30px; transform: rotate(30deg); animation-delay: 0s; }
  .nrc-dend.d2 { left: 0; top: 42px; transform: rotate(0deg); animation-delay: 0.12s; }
  .nrc-dend.d3 { left: 2px; top: 54px; transform: rotate(-28deg); animation-delay: 0.24s; }
  .nrc-dend.d4 { left: 10px; top: 22px; transform: rotate(58deg); animation-delay: 0.06s; }
  .nrc-dend.d5 { left: 10px; top: 62px; transform: rotate(-54deg); animation-delay: 0.18s; }

  @keyframes nrc-dend {
    0% { opacity: 0.4; box-shadow: none; }
    8% { opacity: 1; box-shadow: 0 0 6px #c084fc; background: #e9d5ff; }
    16%, 100% { opacity: 0.4; box-shadow: none; background: #a855f7; }
  }

  .nrc-axon {
    position: absolute;
    left: 38px;
    top: 43px;
    width: 56px;
    height: 3px;
    background: repeating-linear-gradient(90deg,
      #f59e0b 0 10px,
      #38bdf8 10px 12px);
    border-radius: 2px;
    box-shadow: 0 0 4px rgba(245, 158, 11, 0.4);
  }

  .nrc-spike {
    position: absolute;
    left: 34px;
    top: 40px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: radial-gradient(circle, #ffffff, #00f0ff 60%);
    box-shadow: 0 0 12px #00f0ff, 0 0 20px #0284c7;
    opacity: 0;
    animation: nr-spike 3.8s infinite;
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
    background: radial-gradient(circle at 40% 35%, #c084fc, #6b21a8);
    border: 1px solid #d8b4fe;
    animation: nrc-bouton 3.8s infinite;
  }

  .nrc-bouton.b1 { left: 0; top: 0; }
  .nrc-bouton.b2 { left: 4px; top: 6px; }
  .nrc-bouton.b3 { left: 0; top: 12px; }

  @keyframes nrc-bouton {
    0%, 48% { box-shadow: none; }
    52%, 58% { box-shadow: 0 0 12px #00f0ff; background: #38bdf8; }
    66%, 100% { box-shadow: none; }
  }

  .nrc-vesicle {
    position: absolute;
    left: 102px;
    top: 42px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #38bdf8;
    box-shadow: 0 0 4px #00f0ff;
    opacity: 0;
    animation: nr-vesicle 3.8s infinite;
  }

  .nrc-vesicle.v2 { top: 38px; animation-delay: 0.1s; }
  .nrc-vesicle.v3 { top: 48px; animation-delay: 0.18s; }

  .nrc-target {
    position: absolute;
    right: 0;
    top: 32px;
    width: 6px;
    height: 24px;
    border-radius: 4px 0 0 4px;
    background: #ec4899;
    border: 1px solid #f472b6;
    animation: nrc-target 3.8s infinite;
  }

  @keyframes nrc-target {
    0%, 62% { box-shadow: none; opacity: 0.7; }
    68%, 76% { box-shadow: 0 0 12px #ec4899; opacity: 1; }
    84%, 100% { box-shadow: none; opacity: 0.7; }
  }

  .nrc-trace {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 4px;
    height: 14px;
    border-bottom: 1px solid #334155;
  }

  .nrc-blip {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 8px;
    height: 12px;
    clip-path: polygon(0 100%, 30% 100%, 50% 0, 70% 100%, 100% 100%);
    background: #00f0ff;
    box-shadow: 0 0 6px #00f0ff;
    opacity: 0;
    animation: nr-blip 3.8s linear infinite;
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
