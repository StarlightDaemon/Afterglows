const polaroidStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pol {
    width: 104px;
    height: 104px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Camera slot the print ejects from. */
  .pol-slot {
    position: absolute;
    top: 10px;
    left: 50%;
    width: 74px;
    height: 6px;
    margin-left: -37px;
    border-radius: 3px;
    background: #010401;
    border: 1px solid rgba(140, 255, 170, 0.5);
    z-index: 3;
  }

  /* The print: ejects from the slot, then the photo develops. */
  .pol-print {
    position: absolute;
    top: 14px;
    left: 50%;
    width: 58px;
    height: 68px;
    margin-left: -29px;
    background: linear-gradient(180deg, #cfe8cf 0%, #b7d6b9 100%);
    border-radius: 2px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.25);
    animation: pol-eject 8s ease-out infinite;
  }

  /* Photo window inside the white border (thick chin at the bottom). */
  .pol-photo {
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    height: 46px;
    background: #0a1f0d;
    overflow: hidden;
  }

  /* The latent image: a tiny moonlit landscape that fades up. */
  .pol-image {
    position: absolute;
    inset: 0;
    opacity: 0;
    animation: pol-develop 8s ease-in-out infinite;
  }

  .pol-moon {
    position: absolute;
    top: 6px;
    right: 8px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #e6ffd2;
    box-shadow: 0 0 8px rgba(216, 255, 187, 0.8);
  }

  .pol-hill {
    position: absolute;
    bottom: -6px;
    width: 40px;
    height: 22px;
    border-radius: 50% 50% 0 0;
    background: #1d5c2e;
  }

  .pol-hill.h1 { left: -8px; }
  .pol-hill.h2 { right: -10px; height: 16px; background: #164722; }

  .pol-star {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(220, 255, 228, 0.9);
  }

  .pol-star.s1 { top: 8px; left: 8px; }
  .pol-star.s2 { top: 16px; left: 20px; }
  .pol-star.s3 { top: 5px; left: 30px; }

  /* Developer sheen that sweeps the window while it develops. */
  .pol-sheen {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 14px;
    background: linear-gradient(90deg, transparent, rgba(200, 255, 210, 0.28), transparent);
    animation: pol-sheen 8s linear infinite;
  }

  /* Chin caption appears once developed. */
  .pol-caption {
    position: absolute;
    bottom: 3px;
    left: 0;
    right: 0;
    text-align: center;
    font-family: monospace;
    font-size: 7px;
    color: rgba(20, 60, 30, 0.9);
    animation: pol-caption 8s linear infinite;
  }

  /* Gentle "shake it" wobble while developing. */
  .pol-wobble {
    position: absolute;
    inset: 0;
    animation: pol-wobble 8s ease-in-out infinite;
  }

  @keyframes pol-eject {
    0% { transform: translateY(-54px); }
    16% { transform: translateY(0); }
    88% { transform: translateY(0); opacity: 1; }
    94%, 97% { transform: translateY(0); opacity: 0; }
    98%, 100% { transform: translateY(-54px); opacity: 1; }
  }

  @keyframes pol-develop {
    0%, 18% { opacity: 0; filter: blur(2px) brightness(0.4); }
    40% { opacity: 0.45; filter: blur(1.2px) brightness(0.6); }
    62% { opacity: 0.8; filter: blur(0.4px) brightness(0.85); }
    72%, 90% { opacity: 1; filter: blur(0) brightness(1); }
    94%, 100% { opacity: 0; filter: blur(2px) brightness(0.4); }
  }

  @keyframes pol-sheen {
    0%, 18% { transform: translateX(-16px); opacity: 0; }
    24% { opacity: 1; }
    38% { transform: translateX(50px); opacity: 1; }
    44%, 100% { transform: translateX(50px); opacity: 0; }
  }

  @keyframes pol-caption {
    0%, 68% { opacity: 0; }
    76%, 90% { opacity: 1; }
    94%, 100% { opacity: 0; }
  }

  @keyframes pol-wobble {
    0%, 16%, 60%, 100% { transform: rotate(0deg); }
    24% { transform: rotate(-2.5deg); }
    32% { transform: rotate(2deg); }
    40% { transform: rotate(-1.5deg); }
    48% { transform: rotate(1deg); }
  }
`;

class ConceptPolaroid extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${polaroidStyles}</style>
      <div class="pol">
        <div class="pol-wobble">
          <div class="pol-print">
            <div class="pol-photo">
              <div class="pol-image">
                <div class="pol-star s1"></div>
                <div class="pol-star s2"></div>
                <div class="pol-star s3"></div>
                <div class="pol-moon"></div>
                <div class="pol-hill h1"></div>
                <div class="pol-hill h2"></div>
              </div>
              <div class="pol-sheen"></div>
            </div>
            <div class="pol-caption">jul '26</div>
          </div>
        </div>
        <div class="pol-slot"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-polaroid')) {
  customElements.define('concept-polaroid', ConceptPolaroid);
}
