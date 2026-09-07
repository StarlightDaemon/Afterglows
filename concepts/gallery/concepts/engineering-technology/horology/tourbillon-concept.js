const tourbillonStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .trb {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #031407 0%, #010602 100%);
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Dial skeleton aperture bridge */
  .trb-aperture {
    position: relative;
    width: 78px;
    height: 78px;
    border-radius: 50%;
    border: 2px solid var(--accent, #00cc00);
    background: #010b04;
    box-shadow: inset 0 0 12px rgba(0, 204, 0, 0.3), 0 0 8px rgba(0, 204, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Fixed stationary fourth wheel ring */
  .trb-fixed-wheel {
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    border: 1.5px dashed rgba(140, 255, 170, 0.5);
    pointer-events: none;
  }

  /* Rotating Tourbillon Cage (1 revolution per 12s in demo) */
  .trb-cage {
    position: absolute;
    width: 62px;
    height: 62px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: trb-cage-rotation 10s linear infinite;
  }

  @keyframes trb-cage-rotation {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Three-arm titanium carriage bridge */
  .trb-cage-bridge {
    position: absolute;
    width: 58px;
    height: 2px;
    background: #d6ffe0;
    box-shadow: 0 0 4px #8cffaa;
  }
  .trb-cage-bridge.b2 { transform: rotate(60deg); }
  .trb-cage-bridge.b3 { transform: rotate(120deg); }

  /* Oscillating Balance Wheel inside the rotating cage (3 Hz tick) */
  .trb-balance-rim {
    position: absolute;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid #8cffaa;
    box-shadow: 0 0 6px #8cffaa;
    animation: trb-balance-tick 0.36s ease-in-out infinite alternate;
  }

  @keyframes trb-balance-tick {
    0% { transform: rotate(-55deg); }
    100% { transform: rotate(55deg); }
  }

  /* Balance wheel adjustment screws */
  .trb-screw {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 3px #ffffff;
  }
  .trb-screw.s1 { top: -1px; left: 22px; }
  .trb-screw.s2 { bottom: -1px; left: 22px; }
  .trb-screw.s3 { left: -1px; top: 22px; }
  .trb-screw.s4 { right: -1px; top: 22px; }

  /* Breathing spiral hairspring */
  .trb-hairspring {
    position: absolute;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 1px dotted #ffffff;
    animation: trb-spring-breathe 0.36s ease-in-out infinite alternate;
  }

  @keyframes trb-spring-breathe {
    0% { transform: scale(0.8) rotate(-20deg); }
    100% { transform: scale(1.15) rotate(20deg); }
  }

  /* Center synthetic ruby jewel cap */
  .trb-jewel {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle, #ffffff 0%, #d6ffe0 40%, #008818 90%);
    border: 1.5px solid #ffffff;
    box-shadow: 0 0 6px #ffffff;
    z-index: 5;
  }

  /* Escapement tick soundwave / beat readout */
  .trb-beat-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: rgba(140, 255, 170, 0.75);
    letter-spacing: 0.5px;
  }
`;

class ConceptTourbillon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${tourbillonStyles}</style>
      <div class="trb">
        <div class="trb-aperture">
          <div class="trb-fixed-wheel"></div>
          <div class="trb-cage">
            <div class="trb-cage-bridge b1"></div>
            <div class="trb-cage-bridge b2"></div>
            <div class="trb-cage-bridge b3"></div>

            <div class="trb-balance-rim">
              <div class="trb-screw s1"></div>
              <div class="trb-screw s2"></div>
              <div class="trb-screw s3"></div>
              <div class="trb-screw s4"></div>
            </div>

            <div class="trb-hairspring"></div>
          </div>
          <div class="trb-jewel"></div>
        </div>
        <div class="trb-beat-label">21,600 VPH</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-tourbillon')) {
  customElements.define('concept-tourbillon', ConceptTourbillon);
}
