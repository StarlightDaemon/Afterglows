const quipuStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .qk-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e160e 0%, #080503 100%);
    border: 1.5px solid rgba(255, 183, 77, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 183, 77, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .qk-stage {
    position: relative;
    width: 96px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Primary Horizontal Top Master Cord */
  .qk-main-cord {
    position: absolute;
    top: 14px;
    width: 88px;
    height: 3px;
    background: repeating-linear-gradient(90deg, #ffe082 0px 3px, #8d6e63 3px 6px);
    border-radius: 1.5px;
    box-shadow: 0 0 4px #ffd54f;
  }

  /* Pendent colored recording cords hanging vertically with wide swaying */
  .qk-cords-container {
    position: absolute;
    top: 17px;
    width: 84px;
    height: 52px;
    display: flex;
    justify-content: space-around;
  }

  .qk-pendant {
    position: relative;
    width: 12px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform-origin: 50% 0%;
    animation: qk-cord-sway 3.2s ease-in-out infinite alternate;
  }

  .qk-p1 { animation-delay: 0s; }
  .qk-p2 { animation-delay: -0.8s; }
  .qk-p3 { animation-delay: -1.6s; }
  .qk-p4 { animation-delay: -2.4s; }

  @keyframes qk-cord-sway {
    0% { transform: rotate(-14deg) scale(0.94); }
    100% { transform: rotate(14deg) scale(1.06); }
  }

  .qk-string {
    position: absolute;
    width: 1.8px;
    height: 100%;
    background: #ffcc80;
  }

  /* Traveling Quipucamayoc counting reckoning spark */
  .qk-reckon-spark {
    position: absolute;
    top: 35px;
    left: 48px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff, 0 0 12px #ffd54f;
    z-index: 6;
    animation: qk-reckon-travel 2.8s linear infinite;
  }

  @keyframes qk-reckon-travel {
    0% { transform: translate(-30px, -18px) scale(0.6); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translate(30px, 26px) scale(1.3); opacity: 0; }
  }

  /* Decimal knot clusters (Hundreds, Tens, Units) */
  .qk-knot {
    position: absolute;
    width: 6px;
    height: 4.5px;
    border-radius: 50%;
    background: #ffffff;
    border: 1.2px solid #d84315;
    box-shadow: 0 0 4px #ff7043;
  }

  .qk-k-100 { top: 8px; }
  .qk-k-10 { top: 22px; }
  .qk-k-1 { top: 38px; }

  .qk-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 183, 77, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptQuipuKhipu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${quipuStyles}</style>
      <div class="qk-box">
        <div class="qk-stage">
          <div class="qk-main-cord"></div>
          <div class="qk-reckon-spark"></div>

          <div class="qk-cords-container">
            <!-- Cord 1: 342 -->
            <div class="qk-pendant qk-p1">
              <div class="qk-string" style="background: #ef5350;"></div>
              <div class="qk-knot qk-k-100"></div>
              <div class="qk-knot qk-k-10"></div>
              <div class="qk-knot qk-k-1"></div>
            </div>

            <!-- Cord 2: 105 -->
            <div class="qk-pendant qk-p2">
              <div class="qk-string" style="background: #42a5f5;"></div>
              <div class="qk-knot qk-k-100"></div>
              <div class="qk-knot qk-k-1"></div>
            </div>

            <!-- Cord 3: 270 -->
            <div class="qk-pendant qk-p3">
              <div class="qk-string" style="background: #66bb6a;"></div>
              <div class="qk-knot qk-k-100"></div>
              <div class="qk-knot qk-k-10"></div>
            </div>

            <!-- Cord 4: 518 -->
            <div class="qk-pendant qk-p4">
              <div class="qk-string" style="background: #ffd54f;"></div>
              <div class="qk-knot qk-k-100"></div>
              <div class="qk-knot qk-k-10"></div>
              <div class="qk-knot qk-k-1"></div>
            </div>
          </div>
        </div>

        <div class="qk-label">INCAN QUIPU KHIPU</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-quipu-khipu')) {
  customElements.define('concept-quipu-khipu', ConceptQuipuKhipu);
}
