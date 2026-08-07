const kaleidoscopeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A brass kaleidoscope optical tube looking into a 6-fold mirror chamber:
     tumbling colored glass crystal shards reflect across triangular prisms,
     blooming into continuously morphing crystalline rosette mandalas. */
  .kal {
    width: 112px;
    height: 100px;
    position: relative;
  }

  /* Circular viewing aperture */
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

  /* 6-fold rotating mandala rosette carrier */
  .kal-rosette {
    position: absolute;
    inset: 0;
    animation: kal-spin 12s linear infinite;
  }

  @keyframes kal-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* 6 radial petal facets */
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

  /* Inner crystal star nucleus */
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

  /* Triangular prism mirror edge lines */
  .kal-prism {
    position: absolute;
    inset: 0;
    background:
      repeating-conic-gradient(from 0deg at 50% 50%, rgba(140, 255, 170, 0.2) 0deg 30deg, transparent 30deg 60deg);
    pointer-events: none;
  }
`;

class ConceptKaleidoscope extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${kaleidoscopeStyles}</style>
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
    `;
  }
}

if (!customElements.get('concept-kaleidoscope')) {
  customElements.define('concept-kaleidoscope', ConceptKaleidoscope);
}
