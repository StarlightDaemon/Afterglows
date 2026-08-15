const heronsStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .hrn {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #041416 0%, #010608 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 229, 255, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Upper basin (Open fountain bowl) */
  .hrn-basin {
    position: absolute;
    top: 14px;
    width: 44px;
    height: 12px;
    background: #042429;
    border: 1.5px solid #00e5ff;
    border-radius: 0 0 10px 10px;
    box-shadow: inset 0 0 6px rgba(0, 229, 255, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Vertical fountain water jet spraying upward */
  .hrn-jet {
    position: absolute;
    bottom: 8px;
    width: 2px;
    height: 18px;
    background: linear-gradient(180deg, #ffffff 0%, #00e5ff 60%, rgba(0, 229, 255, 0.2) 100%);
    border-radius: 1px;
    box-shadow: 0 0 6px #00e5ff;
    animation: hrn-jet-pulse 1.2s ease-in-out infinite alternate;
  }

  @keyframes hrn-jet-pulse {
    0% { height: 14px; opacity: 0.85; }
    100% { height: 22px; opacity: 1; filter: drop-shadow(0 0 4px #ffffff); }
  }

  /* Droplets cascading back down into basin */
  .hrn-spray {
    position: absolute;
    top: -4px;
    width: 16px;
    height: 6px;
    border-top: 1.5px dotted #ffffff;
    border-radius: 50% 50% 0 0;
    animation: hrn-spray-anim 0.8s linear infinite;
  }

  @keyframes hrn-spray-anim {
    0% { transform: scale(0.6); opacity: 0.3; }
    50% { opacity: 1; }
    100% { transform: scale(1.4); opacity: 0.1; }
  }

  /* Middle airtight water chamber */
  .hrn-chamber-mid {
    position: absolute;
    top: 36px;
    width: 32px;
    height: 18px;
    background: #021a1f;
    border: 1.2px solid #00e5ff;
    border-radius: 4px;
    overflow: hidden;
  }

  .hrn-water-mid {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 12px;
    background: rgba(0, 229, 255, 0.4);
    border-top: 1px solid #8cffff;
  }

  /* Lower airtight air/water chamber */
  .hrn-chamber-bot {
    position: absolute;
    bottom: 12px;
    width: 32px;
    height: 18px;
    background: #021a1f;
    border: 1.2px solid #00e5ff;
    border-radius: 4px;
    overflow: hidden;
  }

  .hrn-water-bot {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 8px;
    background: rgba(0, 229, 255, 0.4);
    border-top: 1px solid #8cffff;
  }

  /* Connecting pneumatic and hydrostatic tubes */
  .hrn-pipes-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .hrn-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptHeronsFountain extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${heronsStyles}</style>
      <div class="hrn">
        <div class="hrn-basin">
          <div class="hrn-jet"></div>
          <div class="hrn-spray"></div>
        </div>

        <div class="hrn-chamber-mid">
          <div class="hrn-water-mid"></div>
        </div>

        <div class="hrn-chamber-bot">
          <div class="hrn-water-bot"></div>
        </div>

        <svg class="hrn-pipes-svg" viewBox="0 0 118 102">
          <!-- Pipe 1: Drain from basin (50, 26) down to bottom chamber (50, 78) -->
          <path d="M 48 26 L 48 78" fill="none" stroke="#00e5ff" stroke-width="1.2" stroke-dasharray="3 1.5" />
          <!-- Pipe 2: Air pressure from top of bottom chamber (64, 73) up to top of middle chamber (64, 38) -->
          <path d="M 64 73 L 64 38" fill="none" stroke="#ffffff" stroke-width="1.2" stroke-dasharray="2 2" />
          <!-- Pipe 3: Water jet from bottom of middle chamber (59, 52) up through basin to jet nozzle (59, 24) -->
          <path d="M 59 52 L 59 24" fill="none" stroke="#00e5ff" stroke-width="1.5" />
        </svg>

        <div class="hrn-label">HERON'S PNEUMATIC FOUNTAIN</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-herons-fountain')) {
  customElements.define('concept-herons-fountain', ConceptHeronsFountain);
}
