const triangleMeshStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .triangle-mesh {
    width: 104px;
    height: 104px;
    background:
      repeating-linear-gradient(60deg, transparent 0 10px, rgba(0, 204, 0, 0.42) 10px 11px),
      repeating-linear-gradient(-60deg, transparent 0 10px, rgba(0, 204, 0, 0.42) 10px 11px),
      repeating-linear-gradient(0deg, transparent 0 10px, rgba(0, 204, 0, 0.22) 10px 11px);
    background-size: 24px 24px;
    animation: mesh-shift 4.5s linear infinite;
    clip-path: polygon(50% 0%, 94% 25%, 94% 75%, 50% 100%, 6% 75%, 6% 25%);
  }

  @keyframes mesh-shift {
    0% { transform: rotate(0deg); background-position: 0 0, 0 0, 0 0; }
    100% { transform: rotate(360deg); background-position: 24px 0, -24px 0, 0 24px; }
  }
`;

class ConceptTriangleMesh extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `<style>${triangleMeshStyles}</style><div class="triangle-mesh"></div>`;
  }
}

if (!customElements.get('concept-triangle-mesh')) {
  customElements.define('concept-triangle-mesh', ConceptTriangleMesh);
}
