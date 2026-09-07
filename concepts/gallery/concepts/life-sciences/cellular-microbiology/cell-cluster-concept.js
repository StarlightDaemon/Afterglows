// Cell Cluster, rebuilt (2026-08-02): three interchangeable orbs read as
// thin and static. Now one cell in the cluster actively divides — the
// nucleus stretches, the membrane pinches at the equator, and it splits
// into two daughter cells that drift apart, while its neighbors carry
// visible internal organelles so the cluster reads as living tissue
// rather than soap bubbles.
// v1 is the archived original render, kept verbatim for the gallery.
// v3 adds histological fluorescent cytological staining:
// Azure/teal lipid bilayer cytoplasm with golden mitochondrial granules,
// and hematoxylin violet chromatin dividing during mitotic anaphase/telophase.
const cellClusterStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cell-cluster {
    width: 96px;
    height: 96px;
    position: relative;
  }

  .cell-orb {
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(130, 255, 130, 0.55);
    background: radial-gradient(circle at 35% 35%, rgba(170, 255, 170, 0.32), rgba(0, 204, 0, 0.08) 70%);
    box-shadow: inset 0 0 12px rgba(0, 204, 0, 0.08), 0 0 10px rgba(0, 204, 0, 0.12);
    animation: cell-float 3.4s ease-in-out infinite;
  }

  .cell-orb::before {
    content: '';
    position: absolute;
    top: 35%;
    left: 35%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(170, 255, 170, 0.35);
  }

  .co1 { width: 34px; height: 34px; top: 22px; left: 18px; animation: cell-drift-1 3.2s ease-in-out infinite alternate; }
  .co2 { width: 28px; height: 28px; top: 16px; left: 48px; animation: cell-drift-2 3.6s ease-in-out infinite alternate; }
  .co3 { width: 40px; height: 40px; top: 44px; left: 42px; animation: cell-drift-3 4s ease-in-out infinite alternate; }

  @keyframes cell-drift-1 {
    0% { transform: translate(-10px, -6px) scale(0.92); }
    100% { transform: translate(12px, 8px) scale(1.12); }
  }

  @keyframes cell-drift-2 {
    0% { transform: translate(10px, 8px) scale(1.1); }
    100% { transform: translate(-12px, -8px) scale(0.9); }
  }

  @keyframes cell-drift-3 {
    0% { transform: translate(-8px, 10px) scale(1.05); }
    100% { transform: translate(10px, -10px) scale(0.92); }
  }
`,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cell-cluster {
    width: 104px;
    height: 96px;
    position: relative;
  }

  .cell-orb {
    position: absolute;
    border-radius: 46% 54% 52% 48%;
    border: 1.5px solid rgba(140, 255, 170, 0.6);
    background: radial-gradient(circle at 38% 32%, rgba(190, 255, 205, 0.35), rgba(0, 130, 26, 0.15) 70%);
    box-shadow: inset 0 0 10px rgba(0, 204, 0, 0.12), 0 0 8px rgba(0, 204, 0, 0.12);
  }

  .cell-orb::before {
    content: '';
    position: absolute;
    top: 32%;
    left: 32%;
    width: 34%;
    height: 34%;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, rgba(200, 255, 215, 0.6), rgba(0, 150, 30, 0.4));
  }

  .cell-orb::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background:
      radial-gradient(circle at 72% 28%, rgba(180, 255, 195, 0.5) 0 2px, transparent 3px),
      radial-gradient(circle at 22% 68%, rgba(180, 255, 195, 0.4) 0 1.5px, transparent 2.5px),
      radial-gradient(circle at 68% 74%, rgba(180, 255, 195, 0.35) 0 1.5px, transparent 2.5px);
  }

  .co1 { width: 32px; height: 32px; top: 8px; left: 6px; animation: cell-drift-1 3.2s ease-in-out infinite alternate; }
  .co3 { width: 38px; height: 38px; top: 46px; left: 40px; animation: cell-drift-3 4s ease-in-out infinite alternate; }

  .cell-mitotic {
    position: absolute;
    top: 4px;
    left: 46px;
    width: 46px;
    height: 46px;
  }

  .cell-membrane {
    position: absolute;
    inset: 0;
    border: 1.5px solid rgba(160, 255, 185, 0.75);
    background: radial-gradient(circle at 38% 32%, rgba(190, 255, 205, 0.4), rgba(0, 140, 28, 0.18) 70%);
    box-shadow: inset 0 0 12px rgba(0, 204, 0, 0.15), 0 0 10px rgba(0, 204, 0, 0.18);
    animation: mitosis-shape 3.6s ease-in-out infinite;
  }

  @keyframes mitosis-shape {
    0%, 20% {
      border-radius: 48% 52% 50% 50%;
      clip-path: inset(0);
      opacity: 1;
      transform: scale(1);
    }
    45% {
      border-radius: 50%;
      clip-path: polygon(0 0, 100% 0, 100% 42%, 66% 50%, 100% 58%, 100% 100%, 0 100%, 0 58%, 34% 50%, 0 42%);
      opacity: 1;
      transform: scale(1.1);
    }
    55%, 100% {
      opacity: 0;
      transform: scale(1.2);
    }
  }

  .cell-nucleus {
    position: absolute;
    top: 32%;
    left: 50%;
    width: 40%;
    height: 22%;
    margin-left: -20%;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, rgba(210, 255, 220, 0.75), rgba(0, 160, 32, 0.5));
    animation: mitosis-nucleus 3.6s ease-in-out infinite;
  }

  @keyframes mitosis-nucleus {
    0%, 15% { transform: scaleX(1) translateY(30%); opacity: 1; }
    40% { transform: scaleX(2.2) translateY(30%); opacity: 1; }
    50%, 100% { opacity: 0; }
  }

  .cell-daughter {
    position: absolute;
    top: 6px;
    width: 26px;
    height: 26px;
    border-radius: 48% 52% 50% 50%;
    border: 1.5px solid rgba(160, 255, 185, 0.75);
    background: radial-gradient(circle at 38% 32%, rgba(190, 255, 205, 0.4), rgba(0, 140, 28, 0.18) 70%);
    box-shadow: inset 0 0 8px rgba(0, 204, 0, 0.15), 0 0 8px rgba(0, 204, 0, 0.15);
    opacity: 0;
  }

  .cell-daughter::after {
    content: '';
    position: absolute;
    top: 30%;
    left: 30%;
    width: 34%;
    height: 34%;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, rgba(200, 255, 215, 0.6), rgba(0, 150, 30, 0.4));
  }

  .cell-daughter.left { left: 2px; animation: daughter-left 3.6s ease-in-out infinite; }
  .cell-daughter.right { left: 18px; animation: daughter-right 3.6s ease-in-out infinite; }

  @keyframes daughter-left {
    0%, 40% { opacity: 0; transform: translate(0, 0) scale(0.7); }
    48% { opacity: 1; transform: translate(0, 0) scale(0.85); }
    85%, 100% { opacity: 1; transform: translate(-20px, 8px) scale(1.08); }
  }

  @keyframes daughter-right {
    0%, 40% { opacity: 0; transform: translate(0, 0) scale(0.7); }
    48% { opacity: 1; transform: translate(0, 0) scale(0.85); }
    85%, 100% { opacity: 1; transform: translate(20px, -8px) scale(1.08); }
  }
`,
  v3: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cellc-cluster {
    width: 104px;
    height: 96px;
    position: relative;
  }

  /* Azure/teal cytoplasm with violet nucleus */
  .cellc-orb {
    position: absolute;
    border-radius: 46% 54% 52% 48%;
    border: 1.5px solid #22d3ee;
    background: radial-gradient(circle at 38% 32%, rgba(56, 189, 248, 0.35), rgba(14, 116, 144, 0.2) 70%);
    box-shadow: inset 0 0 10px rgba(6, 182, 212, 0.25), 0 0 10px rgba(6, 182, 212, 0.3);
    animation: cell-float 3.8s ease-in-out infinite;
  }

  .cellc-orb::before {
    content: '';
    position: absolute;
    top: 32%;
    left: 32%;
    width: 34%;
    height: 34%;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #c084fc, #6b21a8);
    box-shadow: 0 0 6px rgba(168, 85, 247, 0.6);
  }

  /* Mitochondria and cytoplasmic granules */
  .cellc-orb::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background:
      radial-gradient(circle at 72% 28%, #fbbf24 0 2px, transparent 3px),
      radial-gradient(circle at 22% 68%, #f43f5e 0 1.5px, transparent 2.5px),
      radial-gradient(circle at 68% 74%, #fbbf24 0 1.5px, transparent 2.5px);
  }

  .co1 { width: 32px; height: 32px; top: 8px; left: 6px; animation: cell-drift-1 3.2s ease-in-out infinite alternate; }
  .co3 { width: 38px; height: 38px; top: 46px; left: 40px; animation: cell-drift-3 4s ease-in-out infinite alternate; }

  .cellc-mitotic {
    position: absolute;
    top: 4px;
    left: 46px;
    width: 46px;
    height: 46px;
  }

  .cellc-membrane {
    position: absolute;
    inset: 0;
    border: 1.5px solid #38bdf8;
    background: radial-gradient(circle at 38% 32%, rgba(56, 189, 248, 0.4), rgba(3, 105, 161, 0.25) 70%);
    box-shadow: inset 0 0 12px rgba(14, 165, 233, 0.3), 0 0 12px rgba(14, 165, 233, 0.35);
    animation: mitosisc-shape 3.6s ease-in-out infinite;
  }

  /* Dividing purple chromatin */
  .cellc-nucleus {
    position: absolute;
    top: 32%;
    left: 50%;
    width: 40%;
    height: 22%;
    margin-left: -20%;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #d8b4fe, #7e22ce);
    box-shadow: 0 0 8px rgba(168, 85, 247, 0.8);
    animation: mitosisc-nucleus 3.6s ease-in-out infinite;
  }

  .cellc-daughter {
    position: absolute;
    top: 6px;
    width: 26px;
    height: 26px;
    border-radius: 48% 52% 50% 50%;
    border: 1.5px solid #22d3ee;
    background: radial-gradient(circle at 38% 32%, rgba(56, 189, 248, 0.4), rgba(14, 116, 144, 0.25) 70%);
    box-shadow: inset 0 0 8px rgba(6, 182, 212, 0.3), 0 0 8px rgba(6, 182, 212, 0.3);
    opacity: 0;
  }

  .cellc-daughter::after {
    content: '';
    position: absolute;
    top: 30%;
    left: 30%;
    width: 34%;
    height: 34%;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #c084fc, #6b21a8);
    box-shadow: 0 0 6px rgba(168, 85, 247, 0.6);
  }

  .cellc-daughter.left { left: 2px; animation: daughterc-left 3.6s ease-in-out infinite; }
  .cellc-daughter.right { left: 18px; animation: daughterc-right 3.6s ease-in-out infinite; }

  @keyframes mitosisc-shape {
    0%, 20% {
      border-radius: 48% 52% 50% 50%;
      clip-path: inset(0);
      opacity: 1;
      transform: scale(1);
    }
    45% {
      border-radius: 50%;
      clip-path: polygon(0 0, 100% 0, 100% 42%, 66% 50%, 100% 58%, 100% 100%, 0 100%, 0 58%, 34% 50%, 0 42%);
      opacity: 1;
      transform: scale(1.1);
    }
    55%, 100% {
      opacity: 0;
      transform: scale(1.2);
    }
  }

  @keyframes mitosisc-nucleus {
    0%, 15% { transform: scaleX(1) translateY(30%); opacity: 1; }
    40% { transform: scaleX(2.2) translateY(30%); opacity: 1; }
    50%, 100% { opacity: 0; }
  }

  @keyframes daughterc-left {
    0%, 40% { opacity: 0; transform: translate(0, 0) scale(0.7); }
    48% { opacity: 1; transform: translate(0, 0) scale(0.85); }
    85%, 100% { opacity: 1; transform: translate(-20px, 8px) scale(1.08); }
  }

  @keyframes daughterc-right {
    0%, 40% { opacity: 0; transform: translate(0, 0) scale(0.7); }
    48% { opacity: 1; transform: translate(0, 0) scale(0.85); }
    85%, 100% { opacity: 1; transform: translate(20px, -8px) scale(1.08); }
  }
`,
};

const cellClusterMarkup = {
  v1: `
    <div class="cell-cluster">
      <div class="cell-orb co1"></div>
      <div class="cell-orb co2"></div>
      <div class="cell-orb co3"></div>
    </div>
  `,
  v2: `
    <div class="cell-cluster">
      <div class="cell-orb co1"></div>
      <div class="cell-orb co3"></div>
      <div class="cell-mitotic">
        <div class="cell-daughter left"></div>
        <div class="cell-daughter right"></div>
        <div class="cell-membrane"></div>
        <div class="cell-nucleus"></div>
      </div>
    </div>
  `,
  v3: `
    <div class="cellc-cluster">
      <div class="cellc-orb co1"></div>
      <div class="cellc-orb co3"></div>
      <div class="cellc-mitotic">
        <div class="cellc-daughter left"></div>
        <div class="cellc-daughter right"></div>
        <div class="cellc-membrane"></div>
        <div class="cellc-nucleus"></div>
      </div>
    </div>
  `,
};

class ConceptCellCluster extends HTMLElement {
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
    const version = this.getAttribute('version') || 'v3';
    const styles = cellClusterStyles[version] || cellClusterStyles.v3;
    const markup = cellClusterMarkup[version] || cellClusterMarkup.v3;
    this.shadowRoot.innerHTML = `<style>${styles}</style>${markup}`;
  }
}

if (!customElements.get('concept-cell-cluster')) {
  customElements.define('concept-cell-cluster', ConceptCellCluster);
}
