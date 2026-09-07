const mantaStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A giant manta ray gliding through open water: broad pectoral wings
     ripple in a continuous traveling wave from core to wingtips, while
     cephalic horn fins curl and a slender whip tail sways in the wake. */
  .man {
    width: 116px;
    height: 96px;
    position: relative;
  }

  /* Manta ray gliding carrier with subtle yaw and pitch drift */
  .man-glide {
    position: absolute;
    left: 8px;
    top: 16px;
    width: 100px;
    height: 64px;
    animation: man-hover 6s ease-in-out infinite;
  }

  @keyframes man-hover {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-6px) rotate(-1.5deg); }
  }

  /* Central body disc */
  .man-core {
    position: absolute;
    left: 36px;
    top: 14px;
    width: 28px;
    height: 36px;
    border-radius: 45% 45% 50% 50%;
    background: radial-gradient(circle at 50% 30%, rgba(0, 140, 30, 0.8), rgba(0, 45, 10, 0.95));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.3);
    z-index: 2;
  }

  /* Cephalic horn fins flanking the mouth */
  .man-horn {
    position: absolute;
    top: 6px;
    width: 6px;
    height: 12px;
    border-radius: 4px 4px 0 0;
    background: rgba(140, 255, 170, 0.85);
    border: 1px solid var(--accent, #00cc00);
    transform-origin: bottom center;
    z-index: 3;
    animation: man-horn-curl 3.6s ease-in-out infinite;
  }

  .man-horn.l { left: 40px; transform: rotate(-15deg); }
  .man-horn.r { right: 40px; transform: rotate(15deg); animation-delay: -0.4s; }

  @keyframes man-horn-curl {
    0%, 100% { transform: rotate(-15deg) scaleY(1); }
    50% { transform: rotate(-25deg) scaleY(1.15); }
  }

  /* Left wing segments running traveling wave */
  .man-wing-l {
    position: absolute;
    left: 2px;
    top: 12px;
    width: 36px;
    height: 40px;
    transform-origin: right center;
    animation: man-wave-l 3.6s ease-in-out infinite;
  }

  .man-wing-l-inner {
    position: absolute;
    right: 0;
    top: 4px;
    width: 20px;
    height: 32px;
    clip-path: polygon(100% 0, 0 45%, 0 75%, 100% 100%);
    background: linear-gradient(270deg, rgba(0, 140, 30, 0.7), rgba(0, 90, 18, 0.5));
    border-top: 1px solid var(--accent, #00cc00);
    border-bottom: 1px solid var(--accent, #00cc00);
  }

  .man-wing-l-tip {
    position: absolute;
    left: 0;
    top: 8px;
    width: 18px;
    height: 24px;
    clip-path: polygon(100% 20%, 0 50%, 100% 80%);
    background: linear-gradient(270deg, rgba(0, 90, 18, 0.6), rgba(140, 255, 170, 0.6));
    border-left: 1px solid rgba(140, 255, 170, 0.9);
    transform-origin: right center;
    animation: man-tip-l 3.6s ease-in-out infinite;
    animation-delay: 0.5s;
  }

  /* Right wing segments running traveling wave */
  .man-wing-r {
    position: absolute;
    right: 2px;
    top: 12px;
    width: 36px;
    height: 40px;
    transform-origin: left center;
    animation: man-wave-r 3.6s ease-in-out infinite;
  }

  .man-wing-r-inner {
    position: absolute;
    left: 0;
    top: 4px;
    width: 20px;
    height: 32px;
    clip-path: polygon(0 0, 100% 45%, 100% 75%, 0 100%);
    background: linear-gradient(90deg, rgba(0, 140, 30, 0.7), rgba(0, 90, 18, 0.5));
    border-top: 1px solid var(--accent, #00cc00);
    border-bottom: 1px solid var(--accent, #00cc00);
  }

  .man-wing-r-tip {
    position: absolute;
    right: 0;
    top: 8px;
    width: 18px;
    height: 24px;
    clip-path: polygon(0 20%, 100% 50%, 0 80%);
    background: linear-gradient(90deg, rgba(0, 90, 18, 0.6), rgba(140, 255, 170, 0.6));
    border-right: 1px solid rgba(140, 255, 170, 0.9);
    transform-origin: left center;
    animation: man-tip-r 3.6s ease-in-out infinite;
    animation-delay: 0.5s;
  }

  @keyframes man-wave-l {
    0%, 100% { transform: rotate(12deg) skewY(-6deg); }
    50% { transform: rotate(-14deg) skewY(8deg); }
  }

  @keyframes man-tip-l {
    0%, 100% { transform: rotate(18deg) scaleY(0.9); }
    50% { transform: rotate(-22deg) scaleY(1.15); }
  }

  @keyframes man-wave-r {
    0%, 100% { transform: rotate(-12deg) skewY(6deg); }
    50% { transform: rotate(14deg) skewY(-8deg); }
  }

  @keyframes man-tip-r {
    0%, 100% { transform: rotate(-18deg) scaleY(0.9); }
    50% { transform: rotate(22deg) scaleY(1.15); }
  }

  /* Slender whip tail trailing behind */
  .man-tail {
    position: absolute;
    left: 49px;
    top: 48px;
    width: 2px;
    height: 38px;
    background: linear-gradient(180deg, var(--accent, #00cc00), rgba(140, 255, 170, 0.2));
    transform-origin: top center;
    animation: man-tail-sway 3.6s ease-in-out infinite;
  }

  @keyframes man-tail-sway {
    0%, 100% { transform: rotate(-8deg); }
    50% { transform: rotate(8deg); }
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

  /* v2: Giant oceanic manta ray with midnight-slate dorsal mantle,
     pure ivory cephalic horns, undulating cyan-accented pectoral wings,
     and deep ocean current backdrop. */
  .manc {
    width: 116px;
    height: 96px;
    position: relative;
    background: radial-gradient(circle at 50% 30%, #032038 0%, #021020 60%, #01060e 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  .manc-glide {
    position: absolute;
    left: 8px;
    top: 16px;
    width: 100px;
    height: 64px;
    animation: manc-hover 6s ease-in-out infinite;
  }

  @keyframes manc-hover {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-6px) rotate(-1.5deg); }
  }

  /* Central body disc: deep slate-charcoal with bright cyan glow highlights */
  .manc-core {
    position: absolute;
    left: 36px;
    top: 14px;
    width: 28px;
    height: 36px;
    border-radius: 45% 45% 50% 50%;
    background: radial-gradient(circle at 50% 30%, #334155 0%, #0f172a 70%, #020617 100%);
    border: 1.5px solid #38bdf8;
    box-shadow: 0 0 10px rgba(56, 189, 248, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.3);
    z-index: 2;
  }

  /* Ivory-white cephalic horn fins */
  .manc-horn {
    position: absolute;
    top: 6px;
    width: 6px;
    height: 12px;
    border-radius: 4px 4px 0 0;
    background: linear-gradient(180deg, #f8fafc 0%, #cbd5e1 100%);
    border: 1px solid #38bdf8;
    box-shadow: 0 0 4px rgba(56, 189, 248, 0.5);
    transform-origin: bottom center;
    z-index: 3;
    animation: manc-horn-curl 3.6s ease-in-out infinite;
  }

  .manc-horn.l { left: 40px; transform: rotate(-15deg); }
  .manc-horn.r { right: 40px; transform: rotate(15deg); animation-delay: -0.4s; }

  @keyframes manc-horn-curl {
    0%, 100% { transform: rotate(-15deg) scaleY(1); }
    50% { transform: rotate(-25deg) scaleY(1.15); }
  }

  /* Left pectoral wing */
  .manc-wing-l {
    position: absolute;
    left: 2px;
    top: 12px;
    width: 36px;
    height: 40px;
    transform-origin: right center;
    animation: manc-wave-l 3.6s ease-in-out infinite;
  }

  .manc-wing-l-inner {
    position: absolute;
    right: 0;
    top: 4px;
    width: 20px;
    height: 32px;
    clip-path: polygon(100% 0, 0 45%, 0 75%, 100% 100%);
    background: linear-gradient(270deg, #1e293b 0%, #0369a1 100%);
    border-top: 1px solid #38bdf8;
    border-bottom: 1px solid #38bdf8;
  }

  .manc-wing-l-tip {
    position: absolute;
    left: 0;
    top: 8px;
    width: 18px;
    height: 24px;
    clip-path: polygon(100% 20%, 0 50%, 100% 80%);
    background: linear-gradient(270deg, #0284c7 0%, #38bdf8 100%);
    border-left: 1.5px solid #e0f2fe;
    box-shadow: 0 0 6px rgba(56, 189, 248, 0.6);
    transform-origin: right center;
    animation: manc-tip-l 3.6s ease-in-out infinite;
    animation-delay: 0.5s;
  }

  /* Right pectoral wing */
  .manc-wing-r {
    position: absolute;
    right: 2px;
    top: 12px;
    width: 36px;
    height: 40px;
    transform-origin: left center;
    animation: manc-wave-r 3.6s ease-in-out infinite;
  }

  .manc-wing-r-inner {
    position: absolute;
    left: 0;
    top: 4px;
    width: 20px;
    height: 32px;
    clip-path: polygon(0 0, 100% 45%, 100% 75%, 0 100%);
    background: linear-gradient(90deg, #1e293b 0%, #0369a1 100%);
    border-top: 1px solid #38bdf8;
    border-bottom: 1px solid #38bdf8;
  }

  .manc-wing-r-tip {
    position: absolute;
    right: 0;
    top: 8px;
    width: 18px;
    height: 24px;
    clip-path: polygon(0 20%, 100% 50%, 0 80%);
    background: linear-gradient(90deg, #0284c7 0%, #38bdf8 100%);
    border-right: 1.5px solid #e0f2fe;
    box-shadow: 0 0 6px rgba(56, 189, 248, 0.6);
    transform-origin: left center;
    animation: manc-tip-r 3.6s ease-in-out infinite;
    animation-delay: 0.5s;
  }

  @keyframes manc-wave-l {
    0%, 100% { transform: rotate(12deg) skewY(-6deg); }
    50% { transform: rotate(-14deg) skewY(8deg); }
  }

  @keyframes manc-tip-l {
    0%, 100% { transform: rotate(18deg) scaleY(0.9); }
    50% { transform: rotate(-22deg) scaleY(1.15); }
  }

  @keyframes manc-wave-r {
    0%, 100% { transform: rotate(-12deg) skewY(6deg); }
    50% { transform: rotate(14deg) skewY(-8deg); }
  }

  @keyframes manc-tip-r {
    0%, 100% { transform: rotate(-18deg) scaleY(0.9); }
    50% { transform: rotate(22deg) scaleY(1.15); }
  }

  /* Cyan whip tail */
  .manc-tail {
    position: absolute;
    left: 49px;
    top: 48px;
    width: 2px;
    height: 38px;
    background: linear-gradient(180deg, #38bdf8 0%, rgba(56, 189, 248, 0.2) 100%);
    box-shadow: 0 0 4px rgba(56, 189, 248, 0.5);
    transform-origin: top center;
    animation: manc-tail-sway 3.6s ease-in-out infinite;
  }

  @keyframes manc-tail-sway {
    0%, 100% { transform: rotate(-8deg); }
    50% { transform: rotate(8deg); }
  }
  `,
};

const mantaMarkup = {
  v1: `
      <div class="man">
        <div class="man-glide">
          <div class="man-horn l"></div>
          <div class="man-horn r"></div>
          <div class="man-core"></div>
          <div class="man-wing-l">
            <div class="man-wing-l-inner"></div>
            <div class="man-wing-l-tip"></div>
          </div>
          <div class="man-wing-r">
            <div class="man-wing-r-inner"></div>
            <div class="man-wing-r-tip"></div>
          </div>
          <div class="man-tail"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="manc">
        <div class="manc-glide">
          <div class="manc-horn l"></div>
          <div class="manc-horn r"></div>
          <div class="manc-core"></div>
          <div class="manc-wing-l">
            <div class="manc-wing-l-inner"></div>
            <div class="manc-wing-l-tip"></div>
          </div>
          <div class="manc-wing-r">
            <div class="manc-wing-r-inner"></div>
            <div class="manc-wing-r-tip"></div>
          </div>
          <div class="manc-tail"></div>
        </div>
      </div>
    `,
};

class ConceptManta extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${mantaStyles[version] || mantaStyles.v2}</style>${mantaMarkup[version] || mantaMarkup.v2}`;
  }
}

if (!customElements.get('concept-manta')) {
  customElements.define('concept-manta', ConceptManta);
}
