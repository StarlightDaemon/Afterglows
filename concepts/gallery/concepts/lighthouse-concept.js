const lighthouseStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: Single-color phosphor lighthouse --- */
  .lh {
    width: 108px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  .lh-star {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.9);
    animation: lh-star ease-in-out infinite;
  }

  .lh-star.s1 { left: 12px; top: 12px; animation-duration: 3s; }
  .lh-star.s2 { left: 88px; top: 8px; animation-duration: 4s; animation-delay: -1.5s; }
  .lh-star.s3 { left: 72px; top: 26px; animation-duration: 3.5s; animation-delay: -2.2s; }

  @keyframes lh-star {
    0%, 100% { opacity: 0.25; }
    50% { opacity: 0.9; }
  }

  .lh-beam {
    position: absolute;
    left: 50%;
    top: 30px;
    width: 240px;
    height: 240px;
    margin: -120px 0 0 -120px;
    border-radius: 50%;
    background: conic-gradient(
      transparent 0deg,
      rgba(140, 255, 170, 0.28) 8deg,
      transparent 20deg,
      transparent 180deg,
      rgba(140, 255, 170, 0.28) 188deg,
      transparent 200deg);
    animation: lh-beam 6s linear infinite;
  }

  @keyframes lh-beam {
    to { transform: rotate(360deg); }
  }

  .lh-tower {
    position: absolute;
    left: 50%;
    bottom: 14px;
    width: 26px;
    height: 52px;
    margin-left: -13px;
    clip-path: polygon(24% 0, 76% 0, 100% 100%, 0 100%);
    background: repeating-linear-gradient(-18deg,
      rgba(0, 190, 38, 0.75) 0 8px,
      rgba(0, 60, 12, 0.85) 8px 16px);
  }

  .lh-rail {
    position: absolute;
    left: 50%;
    bottom: 64px;
    width: 30px;
    height: 3px;
    margin-left: -15px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.85);
  }

  .lh-lamp {
    position: absolute;
    left: 50%;
    bottom: 67px;
    width: 16px;
    height: 12px;
    margin-left: -8px;
    border: 1px solid rgba(140, 255, 170, 0.9);
    border-radius: 3px 3px 0 0;
    background: rgba(0, 60, 12, 0.6);
    overflow: hidden;
  }

  .lh-lantern {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 8px;
    height: 8px;
    margin: -4px 0 0 -4px;
    border-radius: 50%;
    background: radial-gradient(circle, #f2ffdd, #baffc9 60%);
    animation: lh-lantern 3s ease-in-out infinite;
  }

  @keyframes lh-lantern {
    0%, 100% { box-shadow: 0 0 4px rgba(0, 204, 0, 0.5); opacity: 0.6; }
    50% { box-shadow: 0 0 16px rgba(214, 255, 224, 1), 0 0 30px rgba(0, 204, 0, 0.6); opacity: 1; }
  }

  .lh-cap {
    position: absolute;
    left: 50%;
    bottom: 79px;
    width: 20px;
    height: 8px;
    margin-left: -10px;
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
    background: rgba(0, 190, 38, 0.85);
  }

  .lh-rock {
    position: absolute;
    bottom: 8px;
    border-radius: 40% 50% 30% 45%;
    background: linear-gradient(180deg, rgba(0, 110, 22, 0.7), rgba(0, 40, 8, 0.9));
  }

  .lh-rock.r1 { left: 24px; width: 26px; height: 12px; }
  .lh-rock.r2 { left: 52px; width: 34px; height: 15px; bottom: 6px; }
  .lh-rock.r3 { left: 10px; width: 16px; height: 8px; bottom: 6px; }

  .lh-surf {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 4px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, transparent, rgba(140, 255, 170, 0.65), rgba(140, 255, 170, 0.3), transparent);
    animation: lh-surf 4.4s ease-in-out infinite;
  }

  .lh-surf.f2 { bottom: 0; animation-delay: -2.2s; opacity: 0.7; }

  @keyframes lh-surf {
    0% { transform: translateX(26px) scaleX(0.85); opacity: 0; }
    35% { opacity: 0.9; }
    70% { transform: translateX(-8px) scaleX(1.05); opacity: 0.4; }
    100% { transform: translateX(-20px) scaleX(1.1); opacity: 0; }
  }

  /* --- v2: Maritime color palette ---
     Crimson and white spiral banded masonry tower, dark basalt sea rocks,
     foaming cyan surf, and a warm golden beacon slicing the night mist. */
  .lhc {
    width: 108px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  .lhc-star {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #e2f1ff;
    animation: lhc-star ease-in-out infinite;
  }

  .lhc-star.s1 { left: 12px; top: 12px; animation-duration: 3s; }
  .lhc-star.s2 { left: 88px; top: 8px; animation-duration: 4s; animation-delay: -1.5s; }
  .lhc-star.s3 { left: 72px; top: 26px; animation-duration: 3.5s; animation-delay: -2.2s; }

  @keyframes lhc-star {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; box-shadow: 0 0 4px #e2f1ff; }
  }

  /* Warm luminous golden beacon beam */
  .lhc-beam {
    position: absolute;
    left: 50%;
    top: 30px;
    width: 240px;
    height: 240px;
    margin: -120px 0 0 -120px;
    border-radius: 50%;
    background: conic-gradient(
      transparent 0deg,
      rgba(255, 235, 130, 0.4) 8deg,
      transparent 22deg,
      transparent 180deg,
      rgba(255, 235, 130, 0.4) 188deg,
      transparent 202deg);
    animation: lhc-beam 6s linear infinite;
  }

  @keyframes lhc-beam {
    to { transform: rotate(360deg); }
  }

  /* Red and white banded tower */
  .lhc-tower {
    position: absolute;
    left: 50%;
    bottom: 14px;
    width: 26px;
    height: 52px;
    margin-left: -13px;
    clip-path: polygon(24% 0, 76% 0, 100% 100%, 0 100%);
    background: repeating-linear-gradient(-18deg,
      #d62828 0 8px,
      #f8f9fa 8px 16px);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
  }

  .lhc-rail {
    position: absolute;
    left: 50%;
    bottom: 64px;
    width: 30px;
    height: 3px;
    margin-left: -15px;
    border-radius: 2px;
    background: #2b2d42;
    border: 1px solid #111;
  }

  .lhc-lamp {
    position: absolute;
    left: 50%;
    bottom: 67px;
    width: 16px;
    height: 12px;
    margin-left: -8px;
    border: 1px solid #4a5568;
    border-radius: 3px 3px 0 0;
    background: rgba(10, 15, 25, 0.85);
    overflow: hidden;
  }

  .lhc-lantern {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 8px;
    height: 8px;
    margin: -4px 0 0 -4px;
    border-radius: 50%;
    background: radial-gradient(circle, #ffffff, #ffe066 60%);
    animation: lhc-lantern 3s ease-in-out infinite;
  }

  @keyframes lhc-lantern {
    0%, 100% { box-shadow: 0 0 6px rgba(255, 200, 50, 0.5); opacity: 0.6; }
    50% { box-shadow: 0 0 16px #ffffff, 0 0 28px rgba(255, 220, 80, 0.9); opacity: 1; }
  }

  .lhc-cap {
    position: absolute;
    left: 50%;
    bottom: 79px;
    width: 20px;
    height: 8px;
    margin-left: -10px;
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
    background: #2b2d42;
  }

  /* Dark granite rocks */
  .lhc-rock {
    position: absolute;
    bottom: 8px;
    border-radius: 40% 50% 30% 45%;
    background: linear-gradient(180deg, #374151, #111827);
  }

  .lhc-rock.r1 { left: 24px; width: 26px; height: 12px; }
  .lhc-rock.r2 { left: 52px; width: 34px; height: 15px; bottom: 6px; }
  .lhc-rock.r3 { left: 10px; width: 16px; height: 8px; bottom: 6px; }

  /* Seafoam and breaking surf */
  .lhc-surf {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 4px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, transparent, rgba(200, 245, 255, 0.85), rgba(70, 190, 230, 0.4), transparent);
    animation: lhc-surf 4.4s ease-in-out infinite;
  }

  .lhc-surf.f2 { bottom: 0; animation-delay: -2.2s; opacity: 0.75; }

  @keyframes lhc-surf {
    0% { transform: translateX(26px) scaleX(0.85); opacity: 0; }
    35% { opacity: 0.95; }
    70% { transform: translateX(-8px) scaleX(1.05); opacity: 0.4; }
    100% { transform: translateX(-20px) scaleX(1.1); opacity: 0; }
  }
`;

const lighthouseMarkup = {
  v1: `
    <div class="lh">
      <div class="lh-star s1"></div>
      <div class="lh-star s2"></div>
      <div class="lh-star s3"></div>
      <div class="lh-beam"></div>
      <div class="lh-tower"></div>
      <div class="lh-rail"></div>
      <div class="lh-lamp"><div class="lh-lantern"></div></div>
      <div class="lh-cap"></div>
      <div class="lh-rock r1"></div>
      <div class="lh-rock r2"></div>
      <div class="lh-rock r3"></div>
      <div class="lh-surf"></div>
      <div class="lh-surf f2"></div>
    </div>
  `,
  v2: `
    <div class="lhc">
      <div class="lhc-star s1"></div>
      <div class="lhc-star s2"></div>
      <div class="lhc-star s3"></div>
      <div class="lhc-beam"></div>
      <div class="lhc-tower"></div>
      <div class="lhc-rail"></div>
      <div class="lhc-lamp"><div class="lhc-lantern"></div></div>
      <div class="lhc-cap"></div>
      <div class="lhc-rock r1"></div>
      <div class="lhc-rock r2"></div>
      <div class="lhc-rock r3"></div>
      <div class="lhc-surf"></div>
      <div class="lhc-surf f2"></div>
    </div>
  `,
};

class ConceptLighthouse extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${lighthouseStyles}</style>${lighthouseMarkup[version] || lighthouseMarkup.v2}`;
  }
}

if (!customElements.get('concept-lighthouse')) {
  customElements.define('concept-lighthouse', ConceptLighthouse);
}
