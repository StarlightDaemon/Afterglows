const kaleidoscopeStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .kal {
    width: 112px;
    height: 100px;
    position: relative;
  }

  .kal-aperture {
    position: absolute;
    left: 11px;
    top: 5px;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 3px solid var(--accent, #00cc00);
    background: radial-gradient(circle at center, rgba(0, 50, 10, 0.95), rgba(0, 15, 3, 0.98));
    box-shadow: inset 0 0 14px rgba(0, 0, 0, 0.9), 0 0 10px rgba(0, 204, 0, 0.4);
    overflow: hidden;
  }

  .kal-rosette {
    position: absolute;
    inset: 0;
    animation: kal-spin 12s linear infinite;
  }

  @keyframes kal-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .kal-petal {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 38px;
    height: 16px;
    margin-left: -19px;
    margin-top: -8px;
    clip-path: polygon(0 50%, 50% 0, 100% 50%, 50% 100%);
    background: linear-gradient(90deg, rgba(190, 255, 205, 0.9), rgba(0, 160, 35, 0.7));
    border: 1px solid var(--accent, #00cc00);
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.7);
    transform-origin: center center;
    animation: kal-facet-morph 4s ease-in-out infinite alternate;
  }

  .kal-petal.p1 { transform: rotate(0deg) translateX(20px); }
  .kal-petal.p2 { transform: rotate(60deg) translateX(20px); }
  .kal-petal.p3 { transform: rotate(120deg) translateX(20px); }
  .kal-petal.p4 { transform: rotate(180deg) translateX(20px); }
  .kal-petal.p5 { transform: rotate(240deg) translateX(20px); }
  .kal-petal.p6 { transform: rotate(300deg) translateX(20px); }

  @keyframes kal-facet-morph {
    0% { transform: rotate(var(--deg, 0deg)) translateX(16px) scale(0.85); }
    50% { transform: rotate(var(--deg, 0deg)) translateX(24px) scale(1.15) rotate(15deg); }
    100% { transform: rotate(var(--deg, 0deg)) translateX(18px) scale(0.95) rotate(-10deg); }
  }

  .kal-petal.p1 { --deg: 0deg; }
  .kal-petal.p2 { --deg: 60deg; }
  .kal-petal.p3 { --deg: 120deg; }
  .kal-petal.p4 { --deg: 180deg; }
  .kal-petal.p5 { --deg: 240deg; }
  .kal-petal.p6 { --deg: 300deg; }

  .kal-nucleus {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 20px;
    height: 20px;
    margin-left: -10px;
    margin-top: -10px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(190, 255, 205, 1), rgba(0, 204, 0, 0.7) 60%, transparent);
    box-shadow: 0 0 10px rgba(140, 255, 170, 1);
    animation: kal-pulse 2s ease-in-out infinite alternate;
  }

  @keyframes kal-pulse {
    0% { transform: scale(0.8); opacity: 0.7; }
    100% { transform: scale(1.3); opacity: 1; }
  }

  .kal-prism {
    position: absolute;
    inset: 0;
    background:
      repeating-conic-gradient(from 0deg at 50% 50%, rgba(140, 255, 170, 0.2) 0deg 30deg, transparent 30deg 60deg);
    pointer-events: none;
  }
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Polished brass kaleidoscope viewing gemstone stained-glass crystal facets
     (sapphire, ruby, emerald, amethyst, topaz, amber) in 6-fold symmetry */
  .kalc {
    width: 112px;
    height: 100px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  /* Circular brass optical viewing aperture */
  .kalc-aperture {
    position: absolute;
    left: 11px;
    top: 5px;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 3.5px solid #facc15;
    background: radial-gradient(circle at center, #0f172a 0%, #020617 100%);
    box-shadow: inset 0 0 16px rgba(0, 0, 0, 0.95), 0 0 12px rgba(250, 204, 21, 0.5);
    overflow: hidden;
  }

  /* 6-fold rotating mandala rosette carrier */
  .kalc-rosette {
    position: absolute;
    inset: 0;
    animation: kalc-spin 12s linear infinite;
  }

  @keyframes kalc-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* 6 radial gemstone crystal petal facets */
  .kalc-petal {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 38px;
    height: 16px;
    margin-left: -19px;
    margin-top: -8px;
    clip-path: polygon(0 50%, 50% 0, 100% 50%, 50% 100%);
    transform-origin: center center;
    animation: kalc-facet-morph 4s ease-in-out infinite alternate;
  }

  /* Individual gemstone facet colors */
  .kalc-petal.p1 {
    background: linear-gradient(90deg, #93c5fd, #2563eb);
    box-shadow: 0 0 8px rgba(37, 99, 235, 0.8);
    --deg: 0deg;
  }
  .kalc-petal.p2 {
    background: linear-gradient(90deg, #fda4af, #e11d48);
    box-shadow: 0 0 8px rgba(225, 29, 72, 0.8);
    --deg: 60deg;
  }
  .kalc-petal.p3 {
    background: linear-gradient(90deg, #6ee7b7, #059669);
    box-shadow: 0 0 8px rgba(5, 150, 105, 0.8);
    --deg: 120deg;
  }
  .kalc-petal.p4 {
    background: linear-gradient(90deg, #d8b4fe, #9333ea);
    box-shadow: 0 0 8px rgba(147, 51, 234, 0.8);
    --deg: 180deg;
  }
  .kalc-petal.p5 {
    background: linear-gradient(90deg, #fde047, #d97706);
    box-shadow: 0 0 8px rgba(217, 119, 6, 0.8);
    --deg: 240deg;
  }
  .kalc-petal.p6 {
    background: linear-gradient(90deg, #fdba74, #ea580c);
    box-shadow: 0 0 8px rgba(234, 88, 12, 0.8);
    --deg: 300deg;
  }

  @keyframes kalc-facet-morph {
    0% { transform: rotate(var(--deg, 0deg)) translateX(16px) scale(0.85); }
    50% { transform: rotate(var(--deg, 0deg)) translateX(24px) scale(1.15) rotate(15deg); }
    100% { transform: rotate(var(--deg, 0deg)) translateX(18px) scale(0.95) rotate(-10deg); }
  }

  /* Radiant prismatic star nucleus */
  .kalc-nucleus {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 20px;
    height: 20px;
    margin-left: -10px;
    margin-top: -10px;
    border-radius: 50%;
    background: radial-gradient(circle, #ffffff 0%, #fde047 50%, #f97316 100%);
    box-shadow: 0 0 14px #ffffff, 0 0 24px #fde047;
    animation: kalc-pulse 2s ease-in-out infinite alternate;
  }

  @keyframes kalc-pulse {
    0% { transform: scale(0.8); opacity: 0.8; filter: brightness(1); }
    100% { transform: scale(1.3); opacity: 1; filter: brightness(1.3); }
  }

  /* Triangular prism mirror facet lines */
  .kalc-prism {
    position: absolute;
    inset: 0;
    background:
      repeating-conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0.15) 0deg 30deg, transparent 30deg 60deg);
    pointer-events: none;
  }
  `,
};

const kaleidoscopeMarkup = {
  v1: `
      <div class="kal">
        <div class="kal-aperture">
          <div class="kal-prism"></div>
          <div class="kal-rosette">
            <div class="kal-petal p1"></div>
            <div class="kal-petal p2"></div>
            <div class="kal-petal p3"></div>
            <div class="kal-petal p4"></div>
            <div class="kal-petal p5"></div>
            <div class="kal-petal p6"></div>
            <div class="kal-nucleus"></div>
          </div>
        </div>
      </div>
    `,
  v2: `
      <div class="kalc">
        <div class="kalc-aperture">
          <div class="kalc-prism"></div>
          <div class="kalc-rosette">
            <div class="kalc-petal p1"></div>
            <div class="kalc-petal p2"></div>
            <div class="kalc-petal p3"></div>
            <div class="kalc-petal p4"></div>
            <div class="kalc-petal p5"></div>
            <div class="kalc-petal p6"></div>
            <div class="kalc-nucleus"></div>
          </div>
        </div>
      </div>
    `,
};

class ConceptKaleidoscope extends HTMLElement {
  static get observedAttributes() { return ['version']; }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }
  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${kaleidoscopeStyles[version] || kaleidoscopeStyles.v2}</style>${kaleidoscopeMarkup[version] || kaleidoscopeMarkup.v2}`;
  }
}

if (!customElements.get('concept-kaleidoscope')) {
  customElements.define('concept-kaleidoscope', ConceptKaleidoscope);
}
