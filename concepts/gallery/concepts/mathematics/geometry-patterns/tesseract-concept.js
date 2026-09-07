const tesseractStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A 4-dimensional hypercube (tesseract) projected into 3D space: continuous
     rotation through the 4D XW/YZ planes causes the inner and outer cubic cells
     to dynamically invert and cycle inside-out through each other. */
  .tes {
    width: 114px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  /* Outer 4D rotating isometric perspective rig */
  .tes-rig {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 80px;
    height: 80px;
    margin-left: -40px;
    margin-top: -40px;
    animation: tes-4d-spin 10s linear infinite;
  }

  @keyframes tes-4d-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Outer cubic frame cell */
  .tes-cube-outer {
    position: absolute;
    inset: 4px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 204, 0, 0.4);
    animation: tes-morph-outer 5s ease-in-out infinite alternate;
  }

  @keyframes tes-morph-outer {
    0% { transform: scale(1) rotate(0deg); border-color: var(--accent, #00cc00); }
    100% { transform: scale(0.42) rotate(45deg); border-color: rgba(190, 255, 205, 1); box-shadow: 0 0 12px rgba(140, 255, 170, 0.9); }
  }

  /* Inner cubic frame cell */
  .tes-cube-inner {
    position: absolute;
    inset: 22px;
    border: 2px solid rgba(190, 255, 205, 1);
    border-radius: 3px;
    box-shadow: 0 0 8px rgba(140, 255, 170, 0.8);
    animation: tes-morph-inner 5s ease-in-out infinite alternate;
  }

  @keyframes tes-morph-inner {
    0% { transform: scale(1) rotate(0deg); }
    100% { transform: scale(2.38) rotate(-45deg); border-color: var(--accent, #00cc00); }
  }

  /* 8 4D connecting corner strut lines between inner and outer cubes */
  .tes-strut {
    position: absolute;
    width: 2px;
    background: linear-gradient(180deg, rgba(190, 255, 205, 1), rgba(0, 204, 0, 0.6));
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.8);
    transform-origin: top left;
  }

  .tes-strut.s1 { left: 4px; top: 4px; height: 26px; transform: rotate(-45deg); }
  .tes-strut.s2 { right: 4px; top: 4px; height: 26px; transform: rotate(45deg); }
  .tes-strut.s3 { left: 4px; bottom: 4px; height: 26px; transform: rotate(-135deg); }
  .tes-strut.s4 { right: 4px; bottom: 4px; height: 26px; transform: rotate(135deg); }

  /* 4D vertex node points */
  .tes-node {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 6px rgba(140, 255, 170, 1);
  }

  .tes-node.n1 { left: 1px; top: 1px; }
  .tes-node.n2 { right: 1px; top: 1px; }
  .tes-node.n3 { left: 1px; bottom: 1px; }
  .tes-node.n4 { right: 1px; bottom: 1px; }
`;

class ConceptTesseract extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${tesseractStyles}</style>
      <div class="tes">
        <div class="tes-rig">
          <div class="tes-cube-outer">
            <div class="tes-node n1"></div>
            <div class="tes-node n2"></div>
            <div class="tes-node n3"></div>
            <div class="tes-node n4"></div>
          </div>
          <div class="tes-strut s1"></div>
          <div class="tes-strut s2"></div>
          <div class="tes-strut s3"></div>
          <div class="tes-strut s4"></div>
          <div class="tes-cube-inner">
            <div class="tes-node n1"></div>
            <div class="tes-node n2"></div>
            <div class="tes-node n3"></div>
            <div class="tes-node n4"></div>
          </div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-tesseract')) {
  customElements.define('concept-tesseract', ConceptTesseract);
}
