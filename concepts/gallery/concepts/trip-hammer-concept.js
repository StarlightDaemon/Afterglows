const tripHammerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .tph {
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

  /* Timber forge framing & anvil base */
  .tph-base {
    position: absolute;
    bottom: 8px;
    width: 106px;
    height: 10px;
    background: linear-gradient(180deg, #008818, #011405);
    border: 1.5px solid var(--accent, #00cc00);
    border-radius: 3px;
    z-index: 2;
  }

  /* Anvil block at left */
  .tph-anvil {
    position: absolute;
    bottom: 18px;
    left: 14px;
    width: 24px;
    height: 22px;
    background: #011907;
    border: 1.5px solid #d6ffe0;
    border-radius: 3px 3px 0 0;
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.4);
    z-index: 3;
  }

  /* Red-hot forging iron billet on anvil */
  .tph-billet {
    position: absolute;
    top: -4px;
    left: 4px;
    width: 16px;
    height: 5px;
    background: #ffffff;
    border-radius: 1px;
    box-shadow: 0 0 8px #ffffff, 0 0 14px #8cffaa;
  }

  /* Central fulcrum trunnion post */
  .tph-fulcrum {
    position: absolute;
    bottom: 18px;
    left: 56px;
    width: 12px;
    height: 32px;
    background: linear-gradient(90deg, #004408, #8cffaa, #004408);
    border: 1.5px solid var(--accent, #00cc00);
    border-radius: 2px;
    z-index: 3;
  }

  /* Pivoting heavy wooden helve lever with iron hammer head */
  .tph-helve-rig {
    position: absolute;
    top: 36px;
    left: 16px;
    width: 86px;
    height: 18px;
    transform-origin: 46px 12px; /* Fulcrum point */
    z-index: 4;
    animation: tph-strike-cycle 1.4s cubic-bezier(0.6, 0, 0.2, 1) infinite;
  }

  @keyframes tph-strike-cycle {
    0%, 20% { transform: rotate(0deg); }   /* Resting strike on anvil */
    45% { transform: rotate(-24deg); }     /* Cam raises hammer head high */
    65% { transform: rotate(-24deg); }     /* Cam release */
    75% { transform: rotate(0deg); }       /* Slamming down with full momentum! */
    82% { transform: rotate(-4deg); }      /* Anvil bounce */
    90%, 100% { transform: rotate(0deg); }
  }

  /* Wooden helve beam */
  .tph-beam {
    position: absolute;
    top: 8px;
    left: 0;
    width: 86px;
    height: 7px;
    background: linear-gradient(180deg, #d6ffe0, #008818 60%, #011405 100%);
    border: 1px solid #ffffff;
    border-radius: 3px;
  }

  /* Heavy iron hammer head at front */
  .tph-head {
    position: absolute;
    top: 4px;
    left: 2px;
    width: 18px;
    height: 20px;
    background: #011206;
    border: 2px solid #ffffff;
    border-radius: 2px;
    box-shadow: 0 0 8px #8cffaa;
  }

  /* Rotating camshaft with cam lobe wipers at right */
  .tph-cam-wheel {
    position: absolute;
    bottom: 24px;
    right: 8px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 1.5px dashed #ffffff;
    background: #011406;
    box-shadow: 0 0 6px #8cffaa;
    animation: tph-cam-spin 1.4s linear infinite;
    z-index: 2;
  }

  @keyframes tph-cam-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Cam lobe tooth */
  .tph-cam-tooth {
    position: absolute;
    top: -4px;
    left: 9px;
    width: 8px;
    height: 8px;
    background: #ffffff;
    border-radius: 2px;
  }

  /* Flying hot sparks ejected upon hammer strike */
  .tph-spark {
    position: absolute;
    width: 2.5px;
    height: 2.5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff;
    animation: tph-spark-fly 1.4s ease-out infinite;
  }

  .tph-spark.s1 { left: 22px; bottom: 36px; animation-delay: 1.05s; }
  .tph-spark.s2 { left: 28px; bottom: 38px; animation-delay: 1.05s; }
  .tph-spark.s3 { left: 18px; bottom: 34px; animation-delay: 1.05s; }

  @keyframes tph-spark-fly {
    0% { transform: translate(0, 0); opacity: 1; }
    100% { transform: translate(var(--tx, 14px), var(--ty, -18px)); opacity: 0; }
  }
  .tph-spark.s1 { --tx: 18px; --ty: -16px; }
  .tph-spark.s2 { --tx: -14px; --ty: -14px; }
  .tph-spark.s3 { --tx: -18px; --ty: -8px; }

  /* Caption */
  .tph-label {
    position: absolute;
    top: 6px;
    left: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptTripHammer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${tripHammerStyles}</style>
      <div class="tph">
        <div class="tph-label">CAM TRIP HAMMER</div>

        <div class="tph-base"></div>
        <div class="tph-anvil">
          <div class="tph-billet"></div>
        </div>
        <div class="tph-fulcrum"></div>

        <div class="tph-cam-wheel">
          <div class="tph-cam-tooth"></div>
        </div>

        <div class="tph-helve-rig">
          <div class="tph-beam"></div>
          <div class="tph-head"></div>
        </div>

        <div class="tph-spark s1"></div>
        <div class="tph-spark s2"></div>
        <div class="tph-spark s3"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-trip-hammer')) {
  customElements.define('concept-trip-hammer', ConceptTripHammer);
}
