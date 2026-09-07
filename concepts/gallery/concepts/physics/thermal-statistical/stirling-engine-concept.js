const stirlingStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .strl {
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

  /* Engine baseplate */
  .strl-base {
    position: absolute;
    bottom: 10px;
    width: 104px;
    height: 10px;
    background: linear-gradient(180deg, #008818, #011906);
    border: 1.5px solid var(--accent, #00cc00);
    border-radius: 3px;
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
  }

  /* Hot glass expansion cylinder at left */
  .strl-hot-cyl {
    position: absolute;
    top: 36px;
    left: 10px;
    width: 38px;
    height: 18px;
    background: rgba(0, 40, 10, 0.3);
    border: 1.5px solid #d6ffe0;
    border-radius: 4px;
    overflow: hidden;
    z-index: 2;
  }

  /* Displacer piston shuttling left/right */
  .strl-displacer {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 22px;
    height: 12px;
    background: linear-gradient(90deg, #d6ffe0, #00aa22);
    border: 1px solid #ffffff;
    border-radius: 2px;
    box-shadow: 0 0 4px #8cffaa;
    animation: strl-displacer-shuttle 1.2s ease-in-out infinite alternate;
  }

  @keyframes strl-displacer-shuttle {
    0% { transform: translateX(0); }
    100% { transform: translateX(12px); }
  }

  /* Alcohol burner flame heating cylinder tip */
  .strl-flame {
    position: absolute;
    top: 56px;
    left: 14px;
    width: 10px;
    height: 16px;
    border-radius: 50% 50% 30% 30%;
    background: radial-gradient(circle at 50% 70%, #ffffff 0%, #8cffaa 50%, transparent 80%);
    box-shadow: 0 0 8px #ffffff, 0 0 14px #8cffaa;
    animation: strl-flame-flicker 0.6s ease-in-out infinite alternate;
  }

  @keyframes strl-flame-flicker {
    0% { transform: scale(0.9) skewX(-4deg); opacity: 0.8; }
    100% { transform: scale(1.1) skewX(4deg); opacity: 1; }
  }

  /* Cooling radiator fins block */
  .strl-radiator {
    position: absolute;
    top: 30px;
    left: 48px;
    width: 16px;
    height: 28px;
    background: repeating-linear-gradient(
      180deg,
      #ffffff 0px,
      #ffffff 2px,
      #011406 2px,
      #011406 6px
    );
    border: 1.5px solid var(--accent, #00cc00);
    border-radius: 2px;
    z-index: 3;
  }

  /* Dual 90-degree connecting rods */
  .strl-rod {
    position: absolute;
    top: 44px;
    left: 58px;
    width: 28px;
    height: 2px;
    background: #ffffff;
    box-shadow: 0 0 4px #8cffaa;
    transform-origin: left center;
    z-index: 4;
    animation: strl-rod-swing 1.2s ease-in-out infinite alternate;
  }

  @keyframes strl-rod-swing {
    0% { transform: rotate(-15deg); }
    100% { transform: rotate(15deg); }
  }

  /* Rotating heavy brass flywheel */
  .strl-flywheel {
    position: absolute;
    right: 8px;
    top: 24px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid var(--accent, #00cc00);
    background: #010c04;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.4);
    animation: strl-flywheel-spin 1.2s linear infinite;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes strl-flywheel-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Flywheel curved spokes */
  .strl-spoke {
    position: absolute;
    width: 44px;
    height: 2px;
    background: #8cffaa;
  }
  .strl-spoke.s2 { transform: rotate(60deg); }
  .strl-spoke.s3 { transform: rotate(120deg); }

  /* Crankpin */
  .strl-crankpin {
    position: absolute;
    top: 6px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff;
  }

  /* Caption */
  .strl-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptStirlingEngine extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${stirlingStyles}</style>
      <div class="strl">
        <div class="strl-base"></div>
        <div class="strl-flame"></div>

        <div class="strl-hot-cyl">
          <div class="strl-displacer"></div>
        </div>

        <div class="strl-radiator"></div>
        <div class="strl-rod"></div>

        <div class="strl-flywheel">
          <div class="strl-spoke s1"></div>
          <div class="strl-spoke s2"></div>
          <div class="strl-spoke s3"></div>
          <div class="strl-crankpin"></div>
        </div>

        <div class="strl-label">STIRLING CLOSED-CYCLE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-stirling-engine')) {
  customElements.define('concept-stirling-engine', ConceptStirlingEngine);
}
