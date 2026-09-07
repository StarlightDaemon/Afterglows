const atomStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  /* --- v1: the original flat orbits --- */
  .atom-core {
    width: 10px;
    height: 10px;
    background: var(--accent, #00cc00);
    border-radius: 50%;
  }

  .orbit {
    position: absolute;
    width: 80px;
    height: 80px;
    border: 1px solid rgba(0, 204, 0, 0.4);
    border-radius: 50%;
    animation: spin 2s linear infinite;
  }

  .orbit::after {
    content: '';
    width: 6px;
    height: 6px;
    background: var(--accent, #00cc00);
    border-radius: 50%;
    position: absolute;
    top: -3px;
    left: 40%;
  }

  .o2 { transform: rotate(60deg); animation-delay: -0.5s; }
  .o3 { transform: rotate(-60deg); animation-delay: -1s; }

  @keyframes spin { to { transform: rotate(360deg); } }

  /* --- v2: tilted-shell atom --- */
  .a2 {
    width: 104px;
    height: 104px;
    position: relative;
  }

  .a2-ring,
  .a2-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 92px;
    height: 92px;
    margin: -46px 0 0 -46px;
  }

  .a2-ring {
    border: 1px solid rgba(0, 204, 0, 0.4);
    border-radius: 50%;
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.12), inset 0 0 6px rgba(0, 204, 0, 0.12);
  }

  .a2-ring.r1, .a2-spinner.s1 { transform: rotate(0deg) scaleY(0.34); }
  .a2-ring.r2, .a2-spinner.s2 { transform: rotate(60deg) scaleY(0.34); }
  .a2-ring.r3, .a2-spinner.s3 { transform: rotate(-60deg) scaleY(0.34); }

  .a2-arm {
    position: absolute;
    inset: 0;
    animation: a2-orbit linear infinite;
  }

  .a2-spinner.s1 .a2-arm { animation-duration: 2.6s; }
  .a2-spinner.s2 .a2-arm { animation-duration: 3.4s; animation-delay: -1.2s; }
  .a2-spinner.s3 .a2-arm { animation-duration: 4.4s; animation-delay: -2.6s; }

  @keyframes a2-orbit {
    to { transform: rotate(360deg); }
  }

  .a2-electron {
    position: absolute;
    top: 50%;
    left: 100%;
    width: 7px;
    height: 7px;
    margin: -3.5px 0 0 -3.5px;
    border-radius: 50%;
    background: #d6ffe0;
    box-shadow: 0 0 9px rgba(0, 204, 0, 0.95), 0 0 3px rgba(214, 255, 224, 0.9);
  }

  .a2-nucleus {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    animation: a2-breathe 3.2s ease-in-out infinite;
  }

  .a2-nucleon {
    position: absolute;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: radial-gradient(circle at 36% 30%, #d0ffd8, #2a8a3e 72%);
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.6);
  }

  .a2-nucleon.n1 { top: -8px;  left: -4px; }
  .a2-nucleon.n2 { top: -2px;  left: 1px; background: radial-gradient(circle at 36% 30%, #f2ffdd, #4fae4f 72%); }
  .a2-nucleon.n3 { top: -2px;  left: -9px; background: radial-gradient(circle at 36% 30%, #f2ffdd, #4fae4f 72%); }
  .a2-nucleon.n4 { top: 3px;   left: -4px; }

  @keyframes a2-breathe {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.14); }
  }

  .a2-halo {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 30px;
    margin: -15px 0 0 -15px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 204, 0, 0.3), transparent 70%);
    animation: a2-halo 3.2s ease-in-out infinite;
  }

  @keyframes a2-halo {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.35); }
  }

  /* --- v3: Quantum subatomic model ---
     Nucleus with distinct red Protons (p+) and slate Neutrons (n0);
     Strong nuclear force gluon halo;
     Tilted electron shells with glowing electric-cyan Electrons (e-). */
  .a3 {
    width: 104px;
    height: 104px;
    position: relative;
  }

  .a3-ring,
  .a3-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 92px;
    height: 92px;
    margin: -46px 0 0 -46px;
  }

  .a3-ring {
    border: 1px solid rgba(56, 189, 248, 0.35);
    border-radius: 50%;
    box-shadow: 0 0 6px rgba(56, 189, 248, 0.15), inset 0 0 6px rgba(56, 189, 248, 0.15);
  }

  .a3-ring.r1, .a3-spinner.s1 { transform: rotate(0deg) scaleY(0.34); }
  .a3-ring.r2, .a3-spinner.s2 { transform: rotate(60deg) scaleY(0.34); }
  .a3-ring.r3, .a3-spinner.s3 { transform: rotate(-60deg) scaleY(0.34); }

  .a3-arm {
    position: absolute;
    inset: 0;
    animation: a2-orbit linear infinite;
  }

  .a3-spinner.s1 .a3-arm { animation-duration: 2.6s; }
  .a3-spinner.s2 .a3-arm { animation-duration: 3.4s; animation-delay: -1.2s; }
  .a3-spinner.s3 .a3-arm { animation-duration: 4.4s; animation-delay: -2.6s; }

  /* Electric cyan electron */
  .a3-electron {
    position: absolute;
    top: 50%;
    left: 100%;
    width: 7px;
    height: 7px;
    margin: -3.5px 0 0 -3.5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 10px #00f0ff, 0 0 16px #0284c7;
  }

  .a3-nucleus {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    animation: a2-breathe 3.2s ease-in-out infinite;
  }

  /* Protons (crimson red) and Neutrons (slate grey) */
  .a3-nucleon {
    position: absolute;
    width: 9px;
    height: 9px;
    border-radius: 50%;
  }

  .a3-nucleon.p1 { top: -8px; left: -4px; background: radial-gradient(circle at 36% 30%, #fca5a5, #dc2626 72%); box-shadow: 0 0 5px rgba(220, 38, 38, 0.7); }
  .a3-nucleon.n1 { top: -2px; left: 1px;  background: radial-gradient(circle at 36% 30%, #cbd5e1, #475569 72%); box-shadow: 0 0 4px rgba(100, 116, 139, 0.6); }
  .a3-nucleon.p2 { top: -2px; left: -9px; background: radial-gradient(circle at 36% 30%, #fca5a5, #dc2626 72%); box-shadow: 0 0 5px rgba(220, 38, 38, 0.7); }
  .a3-nucleon.n2 { top: 3px;  left: -4px; background: radial-gradient(circle at 36% 30%, #cbd5e1, #475569 72%); box-shadow: 0 0 4px rgba(100, 116, 139, 0.6); }

  /* Gluon binding aura */
  .a3-halo {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 30px;
    margin: -15px 0 0 -15px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.35), transparent 70%);
    animation: a2-halo 3.2s ease-in-out infinite;
  }
`;

const atomMarkup = {
  v1: `
    <div class="atom-core"></div>
    <div class="orbit"></div>
    <div class="orbit o2"></div>
    <div class="orbit o3"></div>
  `,
  v2: `
    <div class="a2">
      <div class="a2-ring r1"></div>
      <div class="a2-ring r2"></div>
      <div class="a2-ring r3"></div>
      <div class="a2-halo"></div>
      <div class="a2-nucleus">
        <div class="a2-nucleon n1"></div>
        <div class="a2-nucleon n2"></div>
        <div class="a2-nucleon n3"></div>
        <div class="a2-nucleon n4"></div>
      </div>
      <div class="a2-spinner s1"><div class="a2-arm"><div class="a2-electron"></div></div></div>
      <div class="a2-spinner s2"><div class="a2-arm"><div class="a2-electron"></div></div></div>
      <div class="a2-spinner s3"><div class="a2-arm"><div class="a2-electron"></div></div></div>
    </div>
  `,
  v3: `
    <div class="a3">
      <div class="a3-ring r1"></div>
      <div class="a3-ring r2"></div>
      <div class="a3-ring r3"></div>
      <div class="a3-halo"></div>
      <div class="a3-nucleus">
        <div class="a3-nucleon p1"></div>
        <div class="a3-nucleon n1"></div>
        <div class="a3-nucleon p2"></div>
        <div class="a3-nucleon n2"></div>
      </div>
      <div class="a3-spinner s1"><div class="a3-arm"><div class="a3-electron"></div></div></div>
      <div class="a3-spinner s2"><div class="a3-arm"><div class="a3-electron"></div></div></div>
      <div class="a3-spinner s3"><div class="a3-arm"><div class="a3-electron"></div></div></div>
    </div>
  `,
};

class ConceptAtom extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${atomStyles}</style>${atomMarkup[version] || atomMarkup.v3}`;
  }
}

if (!customElements.get('concept-atom')) {
  customElements.define('concept-atom', ConceptAtom);
}
