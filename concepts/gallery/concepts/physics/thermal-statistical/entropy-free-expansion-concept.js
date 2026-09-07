const entropyStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #15101a 0%, #040206 100%);
    overflow: hidden;
  }

  .canvas-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .chamber {
    position: absolute;
    width: 104px;
    height: 60px;
    border: 1.5px solid #00e5ff;
    border-radius: 4px;
    background: rgba(10, 15, 25, 0.7);
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.2);
  }

  /* Removable / Punctured Partition Wall */
  .partition {
    position: absolute;
    left: 50px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #ff5577;
    box-shadow: 0 0 4px #ff5577;
  }

  /* Gas molecules diffusing across boundary */
  .molecule {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #00ff66;
    box-shadow: 0 0 3px #00ff66;
  }

  .m1 { top: 12px; left: 18px; animation: diff-1 3s ease-in-out infinite alternate; }
  .m2 { top: 28px; left: 24px; animation: diff-2 3s ease-in-out infinite alternate; }
  .m3 { top: 44px; left: 14px; animation: diff-3 3s ease-in-out infinite alternate; }
  .m4 { top: 18px; left: 36px; animation: diff-4 3s ease-in-out infinite alternate; }
  .m5 { top: 38px; left: 32px; animation: diff-5 3s ease-in-out infinite alternate; }

  .lbl {
    position: absolute;
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-v1 { top: 26px; left: 22px; color: #00e5ff; }
  .lbl-v2 { top: 26px; right: 22px; color: #ffaa00; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(0, 255, 102, 0.85);
    z-index: 10;
  }

  @keyframes diff-1 { 0% { transform: translate(0, 0); } 100% { transform: translate(56px, 12px); } }
  @keyframes diff-2 { 0% { transform: translate(0, 0); } 100% { transform: translate(62px, -8px); } }
  @keyframes diff-3 { 0% { transform: translate(0, 0); } 100% { transform: translate(48px, -18px); } }
  @keyframes diff-4 { 0% { transform: translate(0, 0); } 100% { transform: translate(52px, 20px); } }
  @keyframes diff-5 { 0% { transform: translate(0, 0); } 100% { transform: translate(58px, 4px); } }
`;

class PhysicsEntropyFreeExpansion extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${entropyStyles}</style>
      <div class="canvas-box">
        <div class="chamber">
          <div class="partition"></div>
          <span class="lbl lbl-v1">V₁ (GAS)</span>
          <span class="lbl lbl-v2">VACUUM</span>

          <div class="molecule m1"></div>
          <div class="molecule m2"></div>
          <div class="molecule m3"></div>
          <div class="molecule m4"></div>
          <div class="molecule m5"></div>
        </div>

        <div class="hud">
          <span>ΔS = nR ln(V₂/V₁) &gt; 0</span>
          <span>Irreversible (q=0, w=0)</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-entropy-free-expansion')) {
  customElements.define('physics-entropy-free-expansion', PhysicsEntropyFreeExpansion);
}
