const trainCrossingStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: Single-color phosphor train crossing --- */
  .tc {
    width: 116px;
    height: 96px;
    position: relative;
    overflow: hidden;
  }

  .tc-track {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 12px;
    height: 2px;
    background: rgba(0, 204, 0, 0.6);
  }

  .tc-ties {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 8px;
    height: 4px;
    background: repeating-linear-gradient(90deg,
      rgba(0, 204, 0, 0.4) 0 2px,
      transparent 2px 10px);
  }

  .tc-mast {
    position: absolute;
    left: 18px;
    bottom: 14px;
    width: 3px;
    height: 64px;
    background: rgba(0, 204, 0, 0.75);
  }

  .tc-cross {
    position: absolute;
    left: 6px;
    top: 6px;
    width: 27px;
    height: 6px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.85);
  }

  .tc-cross.x1 { transform: rotate(24deg); }
  .tc-cross.x2 { transform: rotate(-24deg); }

  .tc-lamp {
    position: absolute;
    top: 22px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    border: 1px solid rgba(140, 255, 170, 0.7);
    background: rgba(0, 204, 0, 0.15);
  }

  .tc-lamp.l1 { left: 3px; animation: tc-lamp1 10s steps(1) infinite; }
  .tc-lamp.l2 { left: 27px; animation: tc-lamp2 10s steps(1) infinite; }

  @keyframes tc-lamp1 {
    0% { background: rgba(0, 204, 0, 0.15); box-shadow: none; }
    8% { background: #baffc9; box-shadow: 0 0 9px rgba(0, 204, 0, 1); }
    13% { background: rgba(0, 204, 0, 0.15); box-shadow: none; }
    18% { background: #baffc9; box-shadow: 0 0 9px rgba(0, 204, 0, 1); }
    23% { background: rgba(0, 204, 0, 0.15); box-shadow: none; }
    28% { background: #baffc9; box-shadow: 0 0 9px rgba(0, 204, 0, 1); }
    33% { background: rgba(0, 204, 0, 0.15); box-shadow: none; }
    38% { background: #baffc9; box-shadow: 0 0 9px rgba(0, 204, 0, 1); }
    43% { background: rgba(0, 204, 0, 0.15); box-shadow: none; }
    48% { background: #baffc9; box-shadow: 0 0 9px rgba(0, 204, 0, 1); }
    53% { background: rgba(0, 204, 0, 0.15); box-shadow: none; }
    58% { background: #baffc9; box-shadow: 0 0 9px rgba(0, 204, 0, 1); }
    63% { background: rgba(0, 204, 0, 0.15); box-shadow: none; }
    68% { background: #baffc9; box-shadow: 0 0 9px rgba(0, 204, 0, 1); }
    73% { background: rgba(0, 204, 0, 0.15); box-shadow: none; }
    78% { background: rgba(0, 204, 0, 0.15); box-shadow: none; }
  }

  @keyframes tc-lamp2 {
    0%, 8% { background: rgba(0, 204, 0, 0.15); box-shadow: none; }
    13% { background: #baffc9; box-shadow: 0 0 9px rgba(0, 204, 0, 1); }
    18% { background: rgba(0, 204, 0, 0.15); box-shadow: none; }
    23% { background: #baffc9; box-shadow: 0 0 9px rgba(0, 204, 0, 1); }
    28% { background: rgba(0, 204, 0, 0.15); box-shadow: none; }
    33% { background: #baffc9; box-shadow: 0 0 9px rgba(0, 204, 0, 1); }
    38% { background: rgba(0, 204, 0, 0.15); box-shadow: none; }
    43% { background: #baffc9; box-shadow: 0 0 9px rgba(0, 204, 0, 1); }
    48% { background: rgba(0, 204, 0, 0.15); box-shadow: none; }
    53% { background: #baffc9; box-shadow: 0 0 9px rgba(0, 204, 0, 1); }
    58% { background: rgba(0, 204, 0, 0.15); box-shadow: none; }
    63% { background: #baffc9; box-shadow: 0 0 9px rgba(0, 204, 0, 1); }
    68% { background: rgba(0, 204, 0, 0.15); box-shadow: none; }
    73% { background: #baffc9; box-shadow: 0 0 9px rgba(0, 204, 0, 1); }
    78% { background: rgba(0, 204, 0, 0.15); box-shadow: none; }
  }

  .tc-gate {
    position: absolute;
    left: 20px;
    bottom: 44px;
    width: 84px;
    height: 5px;
    border-radius: 2px;
    background: repeating-linear-gradient(90deg,
      rgba(190, 255, 205, 0.95) 0 10px,
      rgba(0, 90, 18, 0.8) 10px 20px);
    transform-origin: 2px 50%;
    transform: rotate(-72deg);
    animation: tc-gate 10s infinite;
  }

  @keyframes tc-gate {
    0%, 10% { transform: rotate(-72deg); }
    20% { transform: rotate(2deg); }
    22% { transform: rotate(-2deg); }
    24%, 66% { transform: rotate(0deg); }
    78%, 100% { transform: rotate(-72deg); }
  }

  .tc-train {
    position: absolute;
    left: 0;
    bottom: 16px;
    width: 200px;
    height: 22px;
    transform: translateX(120px);
    animation: tc-train 10s linear infinite;
  }

  .tc-car {
    position: absolute;
    top: 0;
    width: 42px;
    height: 22px;
    border-radius: 3px;
    background: linear-gradient(180deg, rgba(0, 140, 28, 0.75), rgba(0, 60, 12, 0.85));
    border: 1px solid rgba(140, 255, 170, 0.6);
  }

  .tc-car::before {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    right: 4px;
    height: 7px;
    background: repeating-linear-gradient(90deg,
      rgba(214, 255, 224, 0.85) 0 6px,
      transparent 6px 11px);
  }

  .tc-car.c1 { left: 0; }
  .tc-car.c2 { left: 46px; }
  .tc-car.c3 { left: 92px; }
  .tc-car.c4 { left: 138px; }

  .tc-train::after {
    content: '';
    position: absolute;
    top: 6px;
    left: -34px;
    width: 30px;
    height: 10px;
    background: repeating-linear-gradient(0deg,
      rgba(140, 255, 170, 0.5) 0 2px,
      transparent 2px 5px);
    filter: blur(1px);
  }

  @keyframes tc-train {
    0%, 26% { transform: translateX(130px); }
    64% { transform: translateX(-214px); }
    100% { transform: translateX(-214px); }
  }

  /* --- v2: Authentic railway safety signal palette ---
     Silver-grey mast, white crossbuck, brilliant alternating safety red lamps,
     red/white striped boom gate, and midnight blue streamliner train. */
  .tcc {
    width: 116px;
    height: 96px;
    position: relative;
    overflow: hidden;
  }

  .tcc-track {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 12px;
    height: 2px;
    background: #64748b;
  }

  .tcc-ties {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 8px;
    height: 4px;
    background: repeating-linear-gradient(90deg,
      #3e2723 0 3px,
      transparent 3px 10px);
  }

  .tcc-mast {
    position: absolute;
    left: 18px;
    bottom: 14px;
    width: 3px;
    height: 64px;
    background: #94a3b8;
  }

  .tcc-cross {
    position: absolute;
    left: 6px;
    top: 6px;
    width: 27px;
    height: 6px;
    border-radius: 2px;
    background: #f8fafc;
    border: 1px solid #1e293b;
  }

  .tcc-cross.x1 { transform: rotate(24deg); }
  .tcc-cross.x2 { transform: rotate(-24deg); }

  .tcc-lamp {
    position: absolute;
    top: 22px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    border: 1px solid #334155;
    background: rgba(80, 10, 10, 0.4);
  }

  .tcc-lamp.l1 { left: 3px; animation: tcc-lamp1 10s steps(1) infinite; }
  .tcc-lamp.l2 { left: 27px; animation: tcc-lamp2 10s steps(1) infinite; }

  @keyframes tcc-lamp1 {
    0% { background: rgba(80, 10, 10, 0.4); box-shadow: none; }
    8% { background: #ff2233; box-shadow: 0 0 12px #ff2233, 0 0 20px rgba(255, 34, 51, 0.7); }
    13% { background: rgba(80, 10, 10, 0.4); box-shadow: none; }
    18% { background: #ff2233; box-shadow: 0 0 12px #ff2233, 0 0 20px rgba(255, 34, 51, 0.7); }
    23% { background: rgba(80, 10, 10, 0.4); box-shadow: none; }
    28% { background: #ff2233; box-shadow: 0 0 12px #ff2233, 0 0 20px rgba(255, 34, 51, 0.7); }
    33% { background: rgba(80, 10, 10, 0.4); box-shadow: none; }
    38% { background: #ff2233; box-shadow: 0 0 12px #ff2233, 0 0 20px rgba(255, 34, 51, 0.7); }
    43% { background: rgba(80, 10, 10, 0.4); box-shadow: none; }
    48% { background: #ff2233; box-shadow: 0 0 12px #ff2233, 0 0 20px rgba(255, 34, 51, 0.7); }
    53% { background: rgba(80, 10, 10, 0.4); box-shadow: none; }
    58% { background: #ff2233; box-shadow: 0 0 12px #ff2233, 0 0 20px rgba(255, 34, 51, 0.7); }
    63% { background: rgba(80, 10, 10, 0.4); box-shadow: none; }
    68% { background: #ff2233; box-shadow: 0 0 12px #ff2233, 0 0 20px rgba(255, 34, 51, 0.7); }
    73% { background: rgba(80, 10, 10, 0.4); box-shadow: none; }
    78% { background: rgba(80, 10, 10, 0.4); box-shadow: none; }
  }

  @keyframes tcc-lamp2 {
    0%, 8% { background: rgba(80, 10, 10, 0.4); box-shadow: none; }
    13% { background: #ff2233; box-shadow: 0 0 12px #ff2233, 0 0 20px rgba(255, 34, 51, 0.7); }
    18% { background: rgba(80, 10, 10, 0.4); box-shadow: none; }
    23% { background: #ff2233; box-shadow: 0 0 12px #ff2233, 0 0 20px rgba(255, 34, 51, 0.7); }
    28% { background: rgba(80, 10, 10, 0.4); box-shadow: none; }
    33% { background: #ff2233; box-shadow: 0 0 12px #ff2233, 0 0 20px rgba(255, 34, 51, 0.7); }
    38% { background: rgba(80, 10, 10, 0.4); box-shadow: none; }
    43% { background: #ff2233; box-shadow: 0 0 12px #ff2233, 0 0 20px rgba(255, 34, 51, 0.7); }
    48% { background: rgba(80, 10, 10, 0.4); box-shadow: none; }
    53% { background: #ff2233; box-shadow: 0 0 12px #ff2233, 0 0 20px rgba(255, 34, 51, 0.7); }
    58% { background: rgba(80, 10, 10, 0.4); box-shadow: none; }
    63% { background: #ff2233; box-shadow: 0 0 12px #ff2233, 0 0 20px rgba(255, 34, 51, 0.7); }
    68% { background: rgba(80, 10, 10, 0.4); box-shadow: none; }
    73% { background: #ff2233; box-shadow: 0 0 12px #ff2233, 0 0 20px rgba(255, 34, 51, 0.7); }
    78% { background: rgba(80, 10, 10, 0.4); box-shadow: none; }
  }

  .tcc-gate {
    position: absolute;
    left: 20px;
    bottom: 44px;
    width: 84px;
    height: 5px;
    border-radius: 2px;
    background: repeating-linear-gradient(90deg,
      #ff2233 0 10px,
      #f8fafc 10px 20px);
    border: 1px solid #1e293b;
    transform-origin: 2px 50%;
    transform: rotate(-72deg);
    animation: tcc-gate 10s infinite;
  }

  @keyframes tcc-gate {
    0%, 10% { transform: rotate(-72deg); }
    20% { transform: rotate(2deg); }
    22% { transform: rotate(-2deg); }
    24%, 66% { transform: rotate(0deg); }
    78%, 100% { transform: rotate(-72deg); }
  }

  .tcc-train {
    position: absolute;
    left: 0;
    bottom: 16px;
    width: 200px;
    height: 22px;
    transform: translateX(120px);
    animation: tcc-train 10s linear infinite;
  }

  .tcc-car {
    position: absolute;
    top: 0;
    width: 42px;
    height: 22px;
    border-radius: 3px;
    background: linear-gradient(180deg, #1e3a8a, #0f172a);
    border: 1px solid #3b82f6;
  }

  .tcc-car::before {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    right: 4px;
    height: 7px;
    background: repeating-linear-gradient(90deg,
      #fef08a 0 6px,
      transparent 6px 11px);
    box-shadow: 0 0 4px #fef08a;
  }

  .tcc-car.c1 { left: 0; }
  .tcc-car.c2 { left: 46px; }
  .tcc-car.c3 { left: 92px; }
  .tcc-car.c4 { left: 138px; }

  .tcc-train::after {
    content: '';
    position: absolute;
    top: 6px;
    left: -34px;
    width: 30px;
    height: 10px;
    background: repeating-linear-gradient(0deg,
      rgba(254, 240, 138, 0.4) 0 2px,
      transparent 2px 5px);
    filter: blur(1px);
  }

  @keyframes tcc-train {
    0%, 26% { transform: translateX(130px); }
    64% { transform: translateX(-214px); }
    100% { transform: translateX(-214px); }
  }
`;

const trainCrossingMarkup = {
  v1: `
    <div class="tc">
      <div class="tc-train">
        <div class="tc-car c1"></div>
        <div class="tc-car c2"></div>
        <div class="tc-car c3"></div>
        <div class="tc-car c4"></div>
      </div>
      <div class="tc-ties"></div>
      <div class="tc-track"></div>
      <div class="tc-mast"></div>
      <div class="tc-cross x1"></div>
      <div class="tc-cross x2"></div>
      <div class="tc-lamp l1"></div>
      <div class="tc-lamp l2"></div>
      <div class="tc-gate"></div>
    </div>
  `,
  v2: `
    <div class="tcc">
      <div class="tcc-train">
        <div class="tcc-car c1"></div>
        <div class="tcc-car c2"></div>
        <div class="tcc-car c3"></div>
        <div class="tcc-car c4"></div>
      </div>
      <div class="tcc-ties"></div>
      <div class="tcc-track"></div>
      <div class="tcc-mast"></div>
      <div class="tcc-cross x1"></div>
      <div class="tcc-cross x2"></div>
      <div class="tcc-lamp l1"></div>
      <div class="tcc-lamp l2"></div>
      <div class="tcc-gate"></div>
    </div>
  `,
};

class ConceptTrainCrossing extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${trainCrossingStyles}</style>${trainCrossingMarkup[version] || trainCrossingMarkup.v2}`;
  }
}

if (!customElements.get('concept-train-crossing')) {
  customElements.define('concept-train-crossing', ConceptTrainCrossing);
}
