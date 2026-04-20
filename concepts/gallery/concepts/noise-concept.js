const noiseStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .noise {
    width: 100%;
    height: 100%;
    background: repeating-radial-gradient(#00cc00 0 0.0001%, #000 0 0.0002%) 50% 0/2500px 2500px;
    animation: noi .2s infinite;
    opacity: 0.3;
  }

  @keyframes noi {
    to { background-position: 100px 100px }
  }
`;

class ConceptNoise extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `<style>${noiseStyles}</style><div class="noise"></div>`;
  }
}

if (!customElements.get('concept-noise')) {
  customElements.define('concept-noise', ConceptNoise);
}
