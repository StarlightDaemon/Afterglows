const glaucusStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .glc {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #03141f 0%, #010408 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 229, 255, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Sea surface water meniscus shimmer */
  .glc-water {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 50%, rgba(0, 229, 255, 0.12), transparent 75%);
  }

  /* Undulating Glaucus body rig with active swimming translation */
  .glc-body-rig {
    position: relative;
    width: 78px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: glc-undulate 3.2s ease-in-out infinite alternate;
  }

  @keyframes glc-undulate {
    0% { transform: translate(-14px, -9px) rotate(-18deg); }
    50% { transform: translate(3px, 4px) rotate(3deg); }
    100% { transform: translate(14px, 9px) rotate(18deg); }
  }

  /* Central dorsal/ventral tapered body */
  .glc-torso {
    position: absolute;
    width: 10px;
    height: 52px;
    background: linear-gradient(180deg, #ffffff 0%, #00e5ff 30%, #0044cc 80%, #001144 100%);
    border-radius: 50% 50% 20% 20%;
    box-shadow: 0 0 10px #00e5ff;
    z-index: 5;
  }

  /* Radiating cerata finger clusters with flapping wing motion */
  .glc-cerata-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    animation: glc-cerata-flap 2.2s ease-in-out infinite alternate;
    transform-origin: center center;
  }

  @keyframes glc-cerata-flap {
    0% { transform: scale(0.85) skewX(-10deg); }
    100% { transform: scale(1.18) skewX(10deg); }
  }

  .glc-finger {
    fill: none;
    stroke: #00e5ff;
    stroke-width: 1.8;
    stroke-linecap: round;
    filter: drop-shadow(0 0 4px #0088ff);
  }

  /* Head rhynchodaeum tentacles */
  .glc-tentacle-l, .glc-tentacle-r {
    position: absolute;
    top: 6px;
    width: 8px;
    height: 10px;
    border-top: 1.5px solid #ffffff;
  }

  .glc-tentacle-l { left: 30px; border-left: 1.5px solid #00e5ff; border-radius: 6px 0 0 0; }
  .glc-tentacle-r { right: 30px; border-right: 1.5px solid #00e5ff; border-radius: 0 6px 0 0; }

  .glc-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptGlaucusNudibranch extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${glaucusStyles}</style>
      <div class="glc">
        <div class="glc-water"></div>

        <div class="glc-body-rig">
          <div class="glc-torso"></div>
          <div class="glc-tentacle-l"></div>
          <div class="glc-tentacle-r"></div>

          <svg class="glc-cerata-svg" viewBox="0 0 78 70">
            <!-- Pair 1: Upper large fan cerata -->
            <path class="glc-finger" d="M 36 22 Q 22 14 10 12" />
            <path class="glc-finger" d="M 36 22 Q 20 22 8 24" />
            <path class="glc-finger" d="M 36 22 Q 22 30 12 36" />

            <path class="glc-finger" d="M 42 22 Q 56 14 68 12" />
            <path class="glc-finger" d="M 42 22 Q 58 22 70 24" />
            <path class="glc-finger" d="M 42 22 Q 56 30 66 36" />

            <!-- Pair 2: Middle cerata cluster -->
            <path class="glc-finger" d="M 37 36 Q 26 36 16 42" />
            <path class="glc-finger" d="M 37 36 Q 28 44 20 50" />

            <path class="glc-finger" d="M 41 36 Q 52 36 62 42" />
            <path class="glc-finger" d="M 41 36 Q 50 44 58 50" />

            <!-- Pair 3: Lower small cerata -->
            <path class="glc-finger" d="M 38 48 Q 30 52 26 60" />
            <path class="glc-finger" d="M 40 48 Q 48 52 52 60" />
          </svg>
        </div>

        <div class="glc-label">GLAUCUS SEA DRAGON</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-glaucus-nudibranch')) {
  customElements.define('concept-glaucus-nudibranch', ConceptGlaucusNudibranch);
}
