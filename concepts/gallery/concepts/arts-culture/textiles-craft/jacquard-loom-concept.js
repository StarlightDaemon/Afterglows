const jacquardStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .jqd {
    width: 118px;
    height: 102px;
    position: relative;
    background: #020904;
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Upper Jacquard head mechanism frame */
  .jqd-head-frame {
    position: absolute;
    top: 8px;
    left: 12px;
    right: 12px;
    height: 24px;
    background: #011406;
    border: 1.5px solid var(--accent, #00cc00);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 4px;
    box-sizing: border-box;
    z-index: 3;
  }

  /* Advancing chain of punched cards */
  .jqd-card-chain {
    position: absolute;
    top: 12px;
    width: 52px;
    height: 16px;
    background: linear-gradient(180deg, #d6ffe0, #008818);
    border: 1px solid #ffffff;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    animation: jqd-card-advance 2.4s steps(4, end) infinite;
  }

  @keyframes jqd-card-advance {
    0% { transform: translateX(0); }
    100% { transform: translateX(-16px); }
  }

  .jqd-punch-hole {
    width: 3px;
    height: 6px;
    background: #010803;
    border-radius: 1px;
  }

  /* Vertical needle harness cords lifting warp threads */
  .jqd-harness-rig {
    position: absolute;
    top: 32px;
    left: 20px;
    right: 20px;
    height: 40px;
    display: flex;
    justify-content: space-evenly;
  }

  .jqd-thread {
    width: 1.5px;
    background: linear-gradient(180deg, #ffffff, #8cffaa 50%, #008818 100%);
    box-shadow: 0 0 3px #8cffaa;
  }

  .jqd-thread.t1 { animation: jqd-lift-1 1.2s ease-in-out infinite alternate; }
  .jqd-thread.t2 { animation: jqd-lift-2 1.2s ease-in-out infinite alternate; }
  .jqd-thread.t3 { animation: jqd-lift-1 1.2s ease-in-out infinite alternate; animation-delay: 0.3s; }
  .jqd-thread.t4 { animation: jqd-lift-2 1.2s ease-in-out infinite alternate; animation-delay: 0.3s; }
  .jqd-thread.t5 { animation: jqd-lift-1 1.2s ease-in-out infinite alternate; animation-delay: 0.6s; }
  .jqd-thread.t6 { animation: jqd-lift-2 1.2s ease-in-out infinite alternate; animation-delay: 0.6s; }

  @keyframes jqd-lift-1 {
    0% { transform: translateY(0); height: 38px; }
    100% { transform: translateY(-8px); height: 30px; }
  }
  @keyframes jqd-lift-2 {
    0% { transform: translateY(-8px); height: 30px; }
    100% { transform: translateY(0); height: 38px; }
  }

  /* Flying weft shuttle crossing the shed */
  .jqd-shuttle {
    position: absolute;
    top: 56px;
    width: 18px;
    height: 5px;
    background: #ffffff;
    border: 1px solid #00aa22;
    border-radius: 3px;
    box-shadow: 0 0 6px #ffffff;
    z-index: 5;
    animation: jqd-shuttle-fly 1.2s ease-in-out infinite alternate;
  }

  @keyframes jqd-shuttle-fly {
    0% { left: 16px; }
    100% { left: 84px; }
  }

  /* Woven textile brocade fabric at bottom */
  .jqd-fabric {
    position: absolute;
    bottom: 6px;
    left: 16px;
    right: 16px;
    height: 22px;
    background: repeating-linear-gradient(
      45deg,
      #011e08 0px,
      #011e08 3px,
      #008818 3px,
      #008818 6px
    );
    border: 1.5px solid var(--accent, #00cc00);
    border-radius: 2px;
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
  }

  /* Binary punchcard readout */
  .jqd-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
    z-index: 6;
  }
`;

class ConceptJacquardLoom extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${jacquardStyles}</style>
      <div class="jqd">
        <div class="jqd-head-frame">
          <div class="jqd-card-chain">
            <div class="jqd-punch-hole"></div>
            <div class="jqd-punch-hole"></div>
            <div class="jqd-punch-hole"></div>
            <div class="jqd-punch-hole"></div>
            <div class="jqd-punch-hole"></div>
          </div>
        </div>

        <div class="jqd-harness-rig">
          <div class="jqd-thread t1"></div>
          <div class="jqd-thread t2"></div>
          <div class="jqd-thread t3"></div>
          <div class="jqd-thread t4"></div>
          <div class="jqd-thread t5"></div>
          <div class="jqd-thread t6"></div>
        </div>

        <div class="jqd-shuttle"></div>
        <div class="jqd-fabric"></div>

        <div class="jqd-label">PUNCH-CARD 1804</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-jacquard-loom')) {
  customElements.define('concept-jacquard-loom', ConceptJacquardLoom);
}
