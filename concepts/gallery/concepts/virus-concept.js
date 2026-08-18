const virusStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: Single-color phosphor virus particle --- */
  .vx {
    width: 104px;
    height: 96px;
    position: relative;
    animation: vx-float 1.6s ease-in-out infinite alternate;
  }

  @keyframes vx-float {
    0% { transform: translate(-8px, -6px) scale(0.88); }
    100% { transform: translate(8px, 6px) scale(1.12); }
  }

  .vx-rot {
    position: absolute;
    inset: 0;
    animation: vx-tumble 2.4s linear infinite;
  }

  @keyframes vx-tumble {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .vx-body {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    margin: -20px 0 0 -20px;
    border-radius: 50%;
    border: 2px solid #00ff66;
    background: radial-gradient(circle at 40% 35%, #ffffff, #00ff66 60%, rgba(0, 70, 14, 0.9) 100%);
    box-shadow: 0 0 12px rgba(0, 255, 100, 0.5), inset 0 0 8px rgba(0, 204, 0, 0.3);
  }

  .vx-core {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 18px;
    height: 16px;
    margin: -8px 0 0 -9px;
    border-radius: 46% 54% 52% 48%;
    background: radial-gradient(circle at 42% 38%, #ffffff, #00ff66 70%);
    box-shadow: 0 0 8px #00ff66;
    animation: vx-core 0.8s ease-in-out infinite alternate;
  }

  @keyframes vx-core {
    0% { transform: scale(0.75) rotate(-15deg); }
    100% { transform: scale(1.25) rotate(15deg); }
  }

  .vx-spoke {
    position: absolute;
    inset: 0;
    transform: rotate(var(--rot));
  }

  .vx-spike {
    position: absolute;
    top: 15px;
    left: 50%;
    width: 2.5px;
    height: 13px;
    margin-left: -1.25px;
    background: linear-gradient(0deg, #ffffff, #00ff66);
    transform-origin: 50% 100%;
    animation: vx-reach 0.8s ease-in-out infinite alternate;
  }

  .vx-spike::after {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    width: 7px;
    height: 7px;
    margin-left: -3.5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #00ff66;
  }

  @keyframes vx-reach {
    0% { transform: scaleY(0.7) translateY(2px); }
    100% { transform: scaleY(1.3) translateY(-4px); }
  }

  .vx-spoke.s0 { --rot: 0deg; }
  .vx-spoke.s1 { --rot: 36deg; }
  .vx-spoke.s2 { --rot: 72deg; }
  .vx-spoke.s3 { --rot: 108deg; }
  .vx-spoke.s4 { --rot: 144deg; }
  .vx-spoke.s5 { --rot: 180deg; }
  .vx-spoke.s6 { --rot: 216deg; }
  .vx-spoke.s7 { --rot: 252deg; }
  .vx-spoke.s8 { --rot: 288deg; }
  .vx-spoke.s9 { --rot: 324deg; }

  .vx-halo {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 74px;
    height: 74px;
    margin: -37px 0 0 -37px;
    border: 1.5px dashed #00ff66;
    box-shadow: 0 0 8px rgba(0, 255, 100, 0.4);
    border-radius: 50%;
    animation: vx-halo 1.6s ease-in-out infinite alternate;
  }

  @keyframes vx-halo {
    0% { transform: scale(0.9); opacity: 0.4; }
    100% { transform: scale(1.2); opacity: 0.95; }
  }

  /* --- v2: Structural virology palette --- */
  .vxc {
    width: 104px;
    height: 96px;
    position: relative;
    animation: vxc-float 1.6s ease-in-out infinite alternate;
  }

  @keyframes vxc-float {
    0% { transform: translate(-8px, -6px) scale(0.88); }
    100% { transform: translate(8px, 6px) scale(1.12); }
  }

  .vxc-rot {
    position: absolute;
    inset: 0;
    animation: vxc-tumble 2.4s linear infinite;
  }

  @keyframes vxc-tumble {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .vxc-body {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    margin: -20px 0 0 -20px;
    border-radius: 50%;
    border: 1.5px solid #a855f7;
    background: radial-gradient(circle at 40% 35%, #c084fc, #7e22ce 60%, #3b0764 100%);
    box-shadow: 0 0 14px rgba(168, 85, 247, 0.6), inset 0 0 8px rgba(0, 0, 0, 0.6);
  }

  /* Glowing cyan viral RNA/DNA nucleocapsid */
  .vxc-core {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 18px;
    height: 16px;
    margin: -8px 0 0 -9px;
    border-radius: 46% 54% 52% 48%;
    background: radial-gradient(circle at 42% 38%, #67e8f9, #0891b2 70%);
    box-shadow: 0 0 10px #06b6d4;
    animation: vxc-core 0.8s ease-in-out infinite alternate;
  }

  @keyframes vxc-core {
    0% { transform: scale(0.75) rotate(-15deg); }
    100% { transform: scale(1.25) rotate(15deg); }
  }

  .vxc-spoke {
    position: absolute;
    inset: 0;
    transform: rotate(var(--rot));
  }

  /* Scarlet glycoprotein spikes (hemagglutinin) */
  .vxc-spike {
    position: absolute;
    top: 15px;
    left: 50%;
    width: 2.5px;
    height: 13px;
    margin-left: -1.25px;
    background: linear-gradient(0deg, #dc2626, #ef4444);
    transform-origin: 50% 100%;
    animation: vxc-reach 0.8s ease-in-out infinite alternate;
  }

  .vxc-spike::after {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    width: 7px;
    height: 7px;
    margin-left: -3.5px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #ffffff, #ef4444 80%);
    box-shadow: 0 0 8px #ef4444;
  }

  @keyframes vxc-reach {
    0% { transform: scaleY(0.7) translateY(2px); }
    100% { transform: scaleY(1.3) translateY(-4px); }
  }

  .vxc-spoke.s0 { --rot: 0deg; }
  .vxc-spoke.s1 { --rot: 36deg; }
  .vxc-spoke.s2 { --rot: 72deg; }
  .vxc-spoke.s3 { --rot: 108deg; }
  .vxc-spoke.s4 { --rot: 144deg; }
  .vxc-spoke.s5 { --rot: 180deg; }
  .vxc-spoke.s6 { --rot: 216deg; }
  .vxc-spoke.s7 { --rot: 252deg; }
  .vxc-spoke.s8 { --rot: 288deg; }
  .vxc-spoke.s9 { --rot: 324deg; }

  .vxc-halo {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 74px;
    height: 74px;
    margin: -37px 0 0 -37px;
    border: 1.5px dashed rgba(239, 68, 68, 0.6);
    box-shadow: 0 0 10px rgba(239, 68, 68, 0.4);
    border-radius: 50%;
    animation: vxc-halo 1.6s ease-in-out infinite alternate;
  }

  @keyframes vxc-halo {
    0% { transform: scale(0.9); opacity: 0.4; }
    100% { transform: scale(1.2); opacity: 0.95; }
  }
`;

const virusMarkup = {
  v1: `
    <div class="vx">
      <div class="vx-halo"></div>
      <div class="vx-rot">
        <div class="vx-spoke s0"><div class="vx-spike"></div></div>
        <div class="vx-spoke s1"><div class="vx-spike"></div></div>
        <div class="vx-spoke s2"><div class="vx-spike"></div></div>
        <div class="vx-spoke s3"><div class="vx-spike"></div></div>
        <div class="vx-spoke s4"><div class="vx-spike"></div></div>
        <div class="vx-spoke s5"><div class="vx-spike"></div></div>
        <div class="vx-spoke s6"><div class="vx-spike"></div></div>
        <div class="vx-spoke s7"><div class="vx-spike"></div></div>
        <div class="vx-spoke s8"><div class="vx-spike"></div></div>
        <div class="vx-spoke s9"><div class="vx-spike"></div></div>
        <div class="vx-body"></div>
        <div class="vx-core"></div>
      </div>
    </div>
  `,
  v2: `
    <div class="vxc">
      <div class="vxc-halo"></div>
      <div class="vxc-rot">
        <div class="vxc-spoke s0"><div class="vxc-spike"></div></div>
        <div class="vxc-spoke s1"><div class="vxc-spike"></div></div>
        <div class="vxc-spoke s2"><div class="vxc-spike"></div></div>
        <div class="vxc-spoke s3"><div class="vxc-spike"></div></div>
        <div class="vxc-spoke s4"><div class="vxc-spike"></div></div>
        <div class="vxc-spoke s5"><div class="vxc-spike"></div></div>
        <div class="vxc-spoke s6"><div class="vxc-spike"></div></div>
        <div class="vxc-spoke s7"><div class="vxc-spike"></div></div>
        <div class="vxc-spoke s8"><div class="vxc-spike"></div></div>
        <div class="vxc-spoke s9"><div class="vxc-spike"></div></div>
        <div class="vxc-body"></div>
        <div class="vxc-core"></div>
      </div>
    </div>
  `,
};

class ConceptVirus extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${virusStyles}</style>${virusMarkup[version] || virusMarkup.v2}`;
  }
}

if (!customElements.get('concept-virus')) {
  customElements.define('concept-virus', ConceptVirus);
}
