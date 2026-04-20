const bioStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .bio {
    width: 20px;
    height: 20px;
    background: var(--accent, #00cc00);
    border-radius: 50%;
    animation: beat 1s infinite;
    position: relative;
  }

  .bio::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid var(--accent, #00cc00);
    border-radius: 50%;
    animation: rip 1s infinite;
    top: 0;
    left: 0;
  }

  @keyframes beat { 10% { transform: scale(1.2) } }
  @keyframes rip { 100% { transform: scale(3); opacity: 0 } }
`;

class ConceptBio extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `<style>${bioStyles}</style><div class="bio"></div>`;
  }
}

if (!customElements.get('concept-bio')) {
  customElements.define('concept-bio', ConceptBio);
}
