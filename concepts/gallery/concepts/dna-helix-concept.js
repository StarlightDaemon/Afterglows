const dnaStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: Original basic bar animation --- */
  .dna-basic-wrap {
    display: flex;
    gap: 5px;
    align-items: center;
    height: 80px;
  }

  .dna-basic-bar {
    width: 4px;
    height: 40px;
    background: var(--accent, #00cc00);
    animation: dna-basic 1.5s ease-in-out infinite;
    border-radius: 2px;
  }

  @keyframes dna-basic {
    0%, 100% { height: 20px; opacity: 0.3; }
    50% { height: 60px; opacity: 1; }
  }

  /* --- v2: Phosphor double helix --- */
  .dna-wrap {
    width: 92px;
    height: 98px;
    position: relative;
  }

  .dna-step {
    position: absolute;
    left: 50%;
    width: 74px;
    height: 12px;
    transform: translateX(-50%);
  }

  .dna-step.s1 { top: 6px; }
  .dna-step.s2 { top: 22px; }
  .dna-step.s3 { top: 38px; }
  .dna-step.s4 { top: 54px; }
  .dna-step.s5 { top: 70px; }
  .dna-step.s6 { top: 86px; }

  .dna-node {
    position: absolute;
    top: 50%;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    transform: translateY(-50%);
    box-shadow: 0 0 7px rgba(0, 204, 0, 0.45);
  }

  .dna-node.left {
    left: 8px;
    background: #84ff77;
    animation: dna-left 2.8s ease-in-out infinite;
  }

  .dna-node.right {
    right: 8px;
    background: #d0ff9b;
    animation: dna-right 2.8s ease-in-out infinite;
  }

  .dna-rung {
    position: absolute;
    top: 50%;
    left: 18px;
    right: 18px;
    height: 2px;
    transform: translateY(-50%);
    transform-origin: center center;
    background: linear-gradient(90deg, rgba(0, 204, 0, 0.25), rgba(170, 255, 170, 0.95), rgba(0, 204, 0, 0.25));
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.28);
    animation: dna-rung 2.8s ease-in-out infinite;
  }

  .dna-step:nth-child(1) .dna-node, .dna-step:nth-child(1) .dna-rung { animation-delay: 0s; }
  .dna-step:nth-child(2) .dna-node, .dna-step:nth-child(2) .dna-rung { animation-delay: -0.47s; }
  .dna-step:nth-child(3) .dna-node, .dna-step:nth-child(3) .dna-rung { animation-delay: -0.94s; }
  .dna-step:nth-child(4) .dna-node, .dna-step:nth-child(4) .dna-rung { animation-delay: -1.41s; }
  .dna-step:nth-child(5) .dna-node, .dna-step:nth-child(5) .dna-rung { animation-delay: -1.88s; }
  .dna-step:nth-child(6) .dna-node, .dna-step:nth-child(6) .dna-rung { animation-delay: -2.35s; }

  @keyframes dna-left {
    0%, 100% { left: 8px; transform: translateY(-50%) scale(0.78); opacity: 0.45; }
    50% { left: 54px; transform: translateY(-50%) scale(1); opacity: 1; }
  }

  @keyframes dna-right {
    0%, 100% { right: 54px; transform: translateY(-50%) scale(1); opacity: 1; }
    50% { right: 8px; transform: translateY(-50%) scale(0.78); opacity: 0.45; }
  }

  @keyframes dna-rung {
    0%, 100% { left: 18px; right: 18px; opacity: 0.5; }
    50% { left: 24px; right: 24px; opacity: 0.95; }
  }

  /* --- v3: Watson-Crick base-pair nitrogenous color convention ---
     Adenine (Red) pairs with Thymine (Cyan);
     Guanine (Amber) pairs with Cytosine (Emerald);
     Sugar-phosphate hydrogen rungs with glowing central junction. */
  .dnac-wrap {
    width: 92px;
    height: 98px;
    position: relative;
  }

  .dnac-step {
    position: absolute;
    left: 50%;
    width: 74px;
    height: 12px;
    transform: translateX(-50%);
  }

  .dnac-step.s1 { top: 6px; }
  .dnac-step.s2 { top: 22px; }
  .dnac-step.s3 { top: 38px; }
  .dnac-step.s4 { top: 54px; }
  .dnac-step.s5 { top: 70px; }
  .dnac-step.s6 { top: 86px; }

  .dnac-node {
    position: absolute;
    top: 50%;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    transform: translateY(-50%);
    box-shadow: 0 0 8px var(--base-glow);
  }

  .dnac-node.left {
    left: 8px;
    background: var(--base-col);
    animation: dna-left 2.8s ease-in-out infinite;
  }

  .dnac-node.right {
    right: 8px;
    background: var(--pair-col);
    box-shadow: 0 0 8px var(--pair-glow);
    animation: dna-right 2.8s ease-in-out infinite;
  }

  /* Base-pair bindings */
  .dnac-step.s1 { --base-col: #ef4444; --base-glow: rgba(239, 68, 68, 0.7); --pair-col: #06b6d4; --pair-glow: rgba(6, 182, 212, 0.7); } /* A - T */
  .dnac-step.s2 { --base-col: #f59e0b; --base-glow: rgba(245, 158, 11, 0.7); --pair-col: #10b981; --pair-glow: rgba(16, 185, 129, 0.7); } /* G - C */
  .dnac-step.s3 { --base-col: #06b6d4; --base-glow: rgba(6, 182, 212, 0.7); --pair-col: #ef4444; --pair-glow: rgba(239, 68, 68, 0.7); } /* T - A */
  .dnac-step.s4 { --base-col: #10b981; --base-glow: rgba(16, 185, 129, 0.7); --pair-col: #f59e0b; --pair-glow: rgba(245, 158, 11, 0.7); } /* C - G */
  .dnac-step.s5 { --base-col: #ef4444; --base-glow: rgba(239, 68, 68, 0.7); --pair-col: #06b6d4; --pair-glow: rgba(6, 182, 212, 0.7); } /* A - T */
  .dnac-step.s6 { --base-col: #f59e0b; --base-glow: rgba(245, 158, 11, 0.7); --pair-col: #10b981; --pair-glow: rgba(16, 185, 129, 0.7); } /* G - C */

  .dnac-rung {
    position: absolute;
    top: 50%;
    left: 18px;
    right: 18px;
    height: 2px;
    transform: translateY(-50%);
    transform-origin: center center;
    background: linear-gradient(90deg, var(--base-col), #ffffff 50%, var(--pair-col));
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.6);
    animation: dna-rung 2.8s ease-in-out infinite;
  }

  .dnac-step:nth-child(1) .dnac-node, .dnac-step:nth-child(1) .dnac-rung { animation-delay: 0s; }
  .dnac-step:nth-child(2) .dnac-node, .dnac-step:nth-child(2) .dnac-rung { animation-delay: -0.47s; }
  .dnac-step:nth-child(3) .dnac-node, .dnac-step:nth-child(3) .dnac-rung { animation-delay: -0.94s; }
  .dnac-step:nth-child(4) .dnac-node, .dnac-step:nth-child(4) .dnac-rung { animation-delay: -1.41s; }
  .dnac-step:nth-child(5) .dnac-node, .dnac-step:nth-child(5) .dnac-rung { animation-delay: -1.88s; }
  .dnac-step:nth-child(6) .dnac-node, .dnac-step:nth-child(6) .dnac-rung { animation-delay: -2.35s; }
`;

const dnaMarkup = {
  v1: `
    <div class="dna-basic-wrap">
      <div class="dna-basic-bar" style="animation-delay:0s"></div>
      <div class="dna-basic-bar" style="animation-delay:0.2s"></div>
      <div class="dna-basic-bar" style="animation-delay:0.4s"></div>
      <div class="dna-basic-bar" style="animation-delay:0.6s"></div>
    </div>
  `,
  v2: `
    <div class="dna-wrap">
      <div class="dna-step s1"><div class="dna-node left"></div><div class="dna-rung"></div><div class="dna-node right"></div></div>
      <div class="dna-step s2"><div class="dna-node left"></div><div class="dna-rung"></div><div class="dna-node right"></div></div>
      <div class="dna-step s3"><div class="dna-node left"></div><div class="dna-rung"></div><div class="dna-node right"></div></div>
      <div class="dna-step s4"><div class="dna-node left"></div><div class="dna-rung"></div><div class="dna-node right"></div></div>
      <div class="dna-step s5"><div class="dna-node left"></div><div class="dna-rung"></div><div class="dna-node right"></div></div>
      <div class="dna-step s6"><div class="dna-node left"></div><div class="dna-rung"></div><div class="dna-node right"></div></div>
    </div>
  `,
  v3: `
    <div class="dnac-wrap">
      <div class="dnac-step s1"><div class="dnac-node left"></div><div class="dnac-rung"></div><div class="dnac-node right"></div></div>
      <div class="dnac-step s2"><div class="dnac-node left"></div><div class="dnac-rung"></div><div class="dnac-node right"></div></div>
      <div class="dnac-step s3"><div class="dnac-node left"></div><div class="dnac-rung"></div><div class="dnac-node right"></div></div>
      <div class="dnac-step s4"><div class="dnac-node left"></div><div class="dnac-rung"></div><div class="dnac-node right"></div></div>
      <div class="dnac-step s5"><div class="dnac-node left"></div><div class="dnac-rung"></div><div class="dnac-node right"></div></div>
      <div class="dnac-step s6"><div class="dnac-node left"></div><div class="dnac-rung"></div><div class="dnac-node right"></div></div>
    </div>
  `,
};

class ConceptDNAHelix extends HTMLElement {
  static get observedAttributes() { return ['version']; }
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() { this.render(); }
  attributeChangedCallback() { if (this.isConnected) this.render(); }
  render() {
    const version = this.getAttribute('version') || 'v3';
    this.shadowRoot.innerHTML = `<style>${dnaStyles}</style>${dnaMarkup[version] || dnaMarkup.v3}`;
  }
}

if (!customElements.get('concept-dna-helix')) {
  customElements.define('concept-dna-helix', ConceptDNAHelix);
}
