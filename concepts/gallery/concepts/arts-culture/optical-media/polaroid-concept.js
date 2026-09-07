const polaroidStyles = {
  v1: `
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

  .pol-slot {
    position: absolute;
    top: 10px;
    left: 50%;
    width: 74px;
    height: 6px;
    margin-left: -37px;
    border-radius: 3px;
    background: #010401;
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 6px #00ff66;
    z-index: 3;
  }

  .pol-print {
    position: absolute;
    top: 14px;
    left: 50%;
    width: 58px;
    height: 68px;
    margin-left: -29px;
    background: linear-gradient(180deg, #ffffff 0%, #b7d6b9 100%);
    border: 1px solid #00ff66;
    border-radius: 2px;
    box-shadow: 0 0 12px rgba(0, 255, 100, 0.4);
    animation: pol-eject 1.6s ease-in-out infinite alternate;
  }

  .pol-photo {
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    height: 46px;
    background: #0a1f0d;
    overflow: hidden;
  }

  .pol-image {
    position: absolute;
    inset: 0;
    opacity: 1;
  }

  .pol-moon {
    position: absolute;
    top: 6px;
    right: 8px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #00ff66;
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
    background: #ffffff;
  }

  .pol-star.s1 { top: 8px; left: 8px; }
  .pol-star.s2 { top: 16px; left: 20px; }
  .pol-star.s3 { top: 5px; left: 30px; }

  .pol-sheen {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 18px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
    animation: pol-sheen 1.2s linear infinite;
  }

  .pol-caption {
    position: absolute;
    bottom: 3px;
    left: 0;
    right: 0;
    text-align: center;
    font-family: monospace;
    font-size: 8px;
    font-weight: bold;
    color: #041a0a;
  }

  .pol-wobble {
    position: absolute;
    inset: 0;
    animation: pol-wobble 1.2s ease-in-out infinite alternate;
  }

  @keyframes pol-eject {
    0% { transform: translateY(-40px) scale(0.92); }
    100% { transform: translateY(14px) scale(1.04); }
  }

  @keyframes pol-sheen {
    0% { transform: translateX(-16px); }
    100% { transform: translateX(60px); }
  }

  @keyframes pol-wobble {
    0% { transform: rotate(-8deg); }
    100% { transform: rotate(8deg); }
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

  /* v2: Vintage Instant Photo camera slot with developing full-color print:
     ivory-white frame, emerging midnight starry sky with golden moon and emerald green hills. */
  .polc {
    width: 104px;
    height: 104px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  /* Vintage camera slot with retro rainbow accent stripe */
  .polc-slot {
    position: absolute;
    top: 10px;
    left: 50%;
    width: 74px;
    height: 6px;
    margin-left: -37px;
    border-radius: 3px;
    background: #09090b;
    border: 1.5px solid #38bdf8;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.8), 0 0 8px rgba(56, 189, 248, 0.6);
    z-index: 3;
  }

  /* The developing Polaroid print */
  .polc-print {
    position: absolute;
    top: 14px;
    left: 50%;
    width: 58px;
    height: 68px;
    margin-left: -29px;
    background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
    border-radius: 2px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.7);
    animation: polc-eject 1.6s ease-in-out infinite alternate;
  }

  /* Dark camera film window */
  .polc-photo {
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    height: 46px;
    background: #020617;
    border-radius: 1px;
    overflow: hidden;
  }

  /* Chemical development: vibrant landscape fading into view */
  .polc-image {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, #0f172a 0%, #1e1b4b 60%, #064e3b 100%);
    opacity: 1;
  }

  /* Radiant golden moon */
  .polc-moon {
    position: absolute;
    top: 6px;
    right: 8px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #ffffff, #fde047 70%);
    box-shadow: 0 0 10px rgba(253, 224, 71, 0.9);
  }

  /* Lush emerald rolling hills */
  .polc-hill {
    position: absolute;
    bottom: -6px;
    width: 40px;
    height: 22px;
    border-radius: 50% 50% 0 0;
    background: linear-gradient(180deg, #22c55e, #15803d);
    box-shadow: 0 -1px 3px rgba(34, 197, 94, 0.4);
  }

  .polc-hill.h1 { left: -8px; }
  .polc-hill.h2 { right: -10px; height: 16px; background: linear-gradient(180deg, #16a34a, #14532d); }

  /* Twinkling diamond stars */
  .polc-star {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 3px #ffffff;
  }

  .polc-star.s1 { top: 8px; left: 8px; }
  .polc-star.s2 { top: 16px; left: 20px; }
  .polc-star.s3 { top: 5px; left: 30px; }

  /* Developer chemical sheen sweep */
  .polc-sheen {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 18px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.55), transparent);
    animation: polc-sheen 1.2s linear infinite;
  }

  /* Chin nostalgic handwriting date stamp */
  .polc-caption {
    position: absolute;
    bottom: 3px;
    left: 0;
    right: 0;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    font-weight: bold;
    color: #334155;
    letter-spacing: 0.5px;
  }

  .polc-wobble {
    position: absolute;
    inset: 0;
    animation: polc-wobble 1.2s ease-in-out infinite alternate;
  }

  @keyframes polc-eject {
    0% { transform: translateY(-40px) scale(0.92); }
    100% { transform: translateY(14px) scale(1.04); }
  }

  @keyframes polc-sheen {
    0% { transform: translateX(-16px); }
    100% { transform: translateX(60px); }
  }

  @keyframes polc-wobble {
    0% { transform: rotate(-8deg); }
    100% { transform: rotate(8deg); }
  }
  `,
};

const polaroidMarkup = {
  v1: `
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
    `,
  v2: `
      <div class="polc">
        <div class="polc-wobble">
          <div class="polc-print">
            <div class="polc-photo">
              <div class="polc-image">
                <div class="polc-star s1"></div>
                <div class="polc-star s2"></div>
                <div class="polc-star s3"></div>
                <div class="polc-moon"></div>
                <div class="polc-hill h1"></div>
                <div class="polc-hill h2"></div>
              </div>
              <div class="polc-sheen"></div>
            </div>
            <div class="polc-caption">aug '26</div>
          </div>
        </div>
        <div class="polc-slot"></div>
      </div>
    `,
};

class ConceptPolaroid extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${polaroidStyles[version] || polaroidStyles.v2}</style>${polaroidMarkup[version] || polaroidMarkup.v2}`;
  }
}

if (!customElements.get('concept-polaroid')) {
  customElements.define('concept-polaroid', ConceptPolaroid);
}
