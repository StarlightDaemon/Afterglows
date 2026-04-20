const serverLightsStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .server-rack {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4px;
    width: 80px;
  }

  .sl {
    width: 10px;
    height: 10px;
    background: #333;
    border-radius: 50%;
    animation: blink-light 1s infinite alternate;
  }

  .sl:nth-child(odd) { animation-delay: 0.2s; }
  .sl:nth-child(3n) { animation-delay: 0.5s; }

  @keyframes blink-light {
    to {
      background: var(--accent, #00cc00);
      box-shadow: 0 0 5px var(--accent, #00cc00);
    }
  }
`;

class ConceptServerLights extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${serverLightsStyles}</style>
      <div class="server-rack">
        <div class="sl"></div><div class="sl"></div><div class="sl"></div><div class="sl"></div>
        <div class="sl"></div><div class="sl"></div><div class="sl"></div><div class="sl"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-server-lights')) {
  customElements.define('concept-server-lights', ConceptServerLights);
}
