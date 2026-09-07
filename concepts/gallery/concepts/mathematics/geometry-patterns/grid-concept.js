const gridStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: the original scrolling grid disc --- */
  .grid-globe {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid var(--accent, #00cc00);
    background: repeating-linear-gradient(0deg, transparent 0 9px, rgba(0, 204, 0, 0.5) 10px),
                repeating-linear-gradient(90deg, transparent 0 9px, rgba(0, 204, 0, 0.5) 10px);
    animation: spin-slow 8s linear infinite;
    background-size: 200% 200%;
  }

  @keyframes spin-slow {
    to { background-position: 100% 100%; }
  }

  /* --- v2: an actual grid ---
     Graph-paper plane: minor lines every 8px, major lines every 24px.
     A highlighted row and column hop from gridline to gridline on
     independent periods, and a bright node rides their intersection,
     like a cursor walking a coordinate grid. */
  .gr2 {
    width: 96px;
    height: 96px;
    position: relative;
  }

  .gr2-plane {
    position: absolute;
    inset: 0;
    border: 1px solid rgba(0, 204, 0, 0.6);
    background:
      linear-gradient(rgba(0, 204, 0, 0.45) 1px, transparent 1px) 0 0 / 24px 24px,
      linear-gradient(90deg, rgba(0, 204, 0, 0.45) 1px, transparent 1px) 0 0 / 24px 24px,
      linear-gradient(rgba(0, 204, 0, 0.16) 1px, transparent 1px) 0 0 / 8px 8px,
      linear-gradient(90deg, rgba(0, 204, 0, 0.16) 1px, transparent 1px) 0 0 / 8px 8px;
    animation: gr2-breathe 4s ease-in-out infinite;
  }

  @keyframes gr2-breathe {
    0%, 100% { box-shadow: inset 0 0 12px rgba(0, 204, 0, 0.08); }
    50% { box-shadow: inset 0 0 20px rgba(0, 204, 0, 0.2); }
  }

  /* Highlighted row and column. */
  .gr2-row {
    position: absolute;
    left: 0;
    right: 0;
    top: -1px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(140, 255, 170, 0.85), transparent);
    animation: gr2-hop-y 7s ease-in-out infinite;
  }

  .gr2-col {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -1px;
    width: 2px;
    background: linear-gradient(180deg, transparent, rgba(140, 255, 170, 0.85), transparent);
    animation: gr2-hop-x 5s ease-in-out infinite;
  }

  /* The cursor node at the row/column intersection: it shares the
     exact keyframes of both lines, so it always sits where they cross. */
  .gr2-node {
    position: absolute;
    top: -1px;
    left: -1px;
    width: 6px;
    height: 6px;
    margin: -2px 0 0 -2px;
    border-radius: 50%;
    background: #d6ffe0;
    box-shadow: 0 0 8px rgba(0, 204, 0, 1), 0 0 16px rgba(0, 204, 0, 0.5);
    animation: gr2-hop-y 7s ease-in-out infinite, gr2-hop-x 5s ease-in-out infinite;
  }

  /* Hop between major gridlines, holding on each. */
  @keyframes gr2-hop-y {
    0%, 8% { top: -1px; }
    14%, 22% { top: 23px; }
    28%, 36% { top: 47px; }
    42%, 50% { top: 71px; }
    56%, 64% { top: 95px; }
    70%, 78% { top: 47px; }
    84%, 92% { top: 23px; }
    100% { top: -1px; }
  }

  @keyframes gr2-hop-x {
    0%, 8% { left: -1px; }
    14%, 22% { left: 23px; }
    28%, 36% { left: 47px; }
    42%, 50% { left: 71px; }
    56%, 64% { left: 95px; }
    70%, 78% { left: 47px; }
    84%, 92% { left: 23px; }
    100% { left: -1px; }
  }
`;

const gridMarkup = {
  v1: `<div class="grid-globe"></div>`,
  v2: `
    <div class="gr2">
      <div class="gr2-plane"></div>
      <div class="gr2-row"></div>
      <div class="gr2-col"></div>
      <div class="gr2-node"></div>
    </div>
  `,
};

class ConceptGrid extends HTMLElement {
  static get observedAttributes() {
    return ['version'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
    }
  }

  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${gridStyles}</style>${gridMarkup[version] || gridMarkup.v2}`;
  }
}

if (!customElements.get('concept-grid')) {
  customElements.define('concept-grid', ConceptGrid);
}
