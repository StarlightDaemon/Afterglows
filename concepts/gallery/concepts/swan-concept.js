// Swan, rebuilt from scratch (2026-08-02): the old render was illegible.
// Now the silhouette carries it — a bright hull on still water with a
// proper S-curved neck (a quarter-arc stroke rising from the breast and
// curving forward to a head with a dark beak wedge). It glides slowly,
// its faint mirror image below, ripples pealing off the breast; midway
// it dips the neck to the water and rises again.
// v1 is the archived original from before the rebuild, preserved verbatim.
const swanStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A swan gliding on still water: it drifts across trailing a wake,
     its mirror image rippling below, and midway it dips to preen and
     rises again in a shower of droplets. */
  .sw {
    width: 116px;
    height: 92px;
    position: relative;
    overflow: hidden;
  }

  /* Waterline. */
  .sw-water {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 50%;
    background: linear-gradient(180deg, rgba(0, 90, 18, 0.4), rgba(0, 45, 9, 0.6));
    border-top: 1px solid rgba(140, 255, 170, 0.5);
  }

  /* Gentle water shimmer lines. */
  .sw-shimmer {
    position: absolute;
    left: 0;
    right: 0;
    top: 54%;
    height: 40%;
    background: repeating-linear-gradient(180deg,
      rgba(140, 255, 170, 0.14) 0 1px,
      transparent 1px 7px);
    animation: sw-shimmer 4s ease-in-out infinite;
  }

  @keyframes sw-shimmer {
    0%, 100% { opacity: 0.6; transform: translateX(0); }
    50% { opacity: 1; transform: translateX(3px); }
  }

  /* The swan glides left-to-right. */
  .sw-swan {
    position: absolute;
    left: 0;
    top: 20px;
    width: 46px;
    height: 40px;
    animation: sw-glide 9s ease-in-out infinite;
  }

  @keyframes sw-glide {
    0% { transform: translateX(-8px); }
    100% { transform: translateX(78px); }
  }

  /* Body: broad boat hull sitting on the line. */
  .sw-body {
    position: absolute;
    left: 0;
    top: 24px;
    width: 40px;
    height: 16px;
    border-radius: 60% 40% 50% 50% / 80% 60% 40% 60%;
    background: radial-gradient(ellipse at 40% 30%, rgba(214, 255, 224, 0.9), rgba(140, 255, 170, 0.6) 70%);
    border: 1px solid rgba(0, 204, 0, 0.4);
  }

  /* Raised folded wing. */
  .sw-wing {
    position: absolute;
    left: 6px;
    top: 18px;
    width: 24px;
    height: 14px;
    border-radius: 60% 40% 50% 80%;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.7), rgba(0, 150, 30, 0.4));
  }

  /* Curved neck; dips to preen mid-cycle. */
  .sw-neck {
    position: absolute;
    left: 30px;
    top: 0;
    width: 20px;
    height: 30px;
    transform-origin: 20% 100%;
    animation: sw-preen 9s ease-in-out infinite;
  }

  .sw-neck-curve {
    position: absolute;
    left: 0;
    top: 0;
    width: 16px;
    height: 26px;
    border: 3px solid rgba(214, 255, 224, 0.9);
    border-left: none;
    border-bottom: none;
    border-radius: 0 60% 0 0;
  }

  .sw-head {
    position: absolute;
    left: 12px;
    top: -2px;
    width: 8px;
    height: 7px;
    border-radius: 50%;
    background: rgba(214, 255, 224, 0.95);
  }

  .sw-head::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 2px;
    clip-path: polygon(0 0, 100% 40%, 100% 60%, 0 100%);
    background: rgba(0, 200, 40, 0.9);
  }

  /* Preen: neck sweeps down to the flank, then rises. */
  @keyframes sw-preen {
    0%, 34%, 100% { transform: rotate(0deg); }
    44% { transform: rotate(84deg); }
    56% { transform: rotate(84deg); }
    66% { transform: rotate(0deg); }
  }

  /* Reflection: a mirrored, dimmer, wavering copy below the line. */
  .sw-reflection {
    position: absolute;
    left: 0;
    top: 44px;
    width: 46px;
    height: 24px;
    opacity: 0.3;
    transform: scaleY(-1);
    animation: sw-glide 9s ease-in-out infinite, sw-waver 2s ease-in-out infinite;
  }

  .sw-reflection .sw-body {
    top: 0;
  }

  @keyframes sw-waver {
    0%, 100% { filter: blur(0.6px); transform: scaleY(-1) skewX(0deg); }
    50% { filter: blur(1.2px); transform: scaleY(-1) skewX(4deg); }
  }

  /* Wake trailing behind. */
  .sw-wake {
    position: absolute;
    top: 42px;
    left: 0;
    width: 20px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(190, 255, 205, 0.5));
    animation: sw-glide 9s ease-in-out infinite;
  }

  /* Preen droplets. */
  .sw-drop {
    position: absolute;
    width: 2px;
    height: 3px;
    border-radius: 0 0 50% 50%;
    background: rgba(214, 255, 224, 0.9);
    opacity: 0;
    animation: sw-drop 9s infinite;
  }

  .sw-drop.d1 { left: 44px; top: 34px; }
  .sw-drop.d2 { left: 48px; top: 32px; animation-delay: 0.1s; }

  @keyframes sw-drop {
    0%, 60% { transform: translateY(0); opacity: 0; }
    64% { opacity: 1; }
    72% { transform: translateY(14px); opacity: 0; }
    100% { opacity: 0; }
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

  .sw {
    width: 112px;
    height: 92px;
    position: relative;
    overflow: hidden;
  }

  /* Still water: a surface line and depth gradient. */
  .sw-water {
    position: absolute;
    left: 0;
    right: 0;
    top: 58px;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 204, 0, 0.22), rgba(0, 40, 8, 0.35) 60%, transparent);
    border-top: 1px solid rgba(140, 255, 170, 0.5);
  }

  /* The swan glides gently right and back, bobbing on the water. */
  .sw-bird {
    position: absolute;
    left: 30px;
    top: 20px;
    width: 52px;
    height: 40px;
    animation: sw-glide 9s ease-in-out infinite;
  }

  @keyframes sw-glide {
    0%, 100% { transform: translate(-8px, 0); }
    45% { transform: translate(8px, -1px); }
    70% { transform: translate(2px, 0.5px); }
  }

  /* Hull: bright body sitting ON the waterline, tail kicked up aft. */
  .sw-hull {
    position: absolute;
    left: 4px;
    top: 24px;
    width: 42px;
    height: 16px;
    border-radius: 55% 40% 45% 60% / 80% 55% 45% 60%;
    background: linear-gradient(180deg, #eaffea, rgba(160, 255, 185, 0.9) 55%, rgba(0, 150, 30, 0.7));
    border: 1.5px solid rgba(190, 255, 205, 0.9);
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.35);
  }

  /* Tail tip. */
  .sw-tail {
    position: absolute;
    left: -1px;
    top: 20px;
    width: 10px;
    height: 8px;
    clip-path: polygon(0 20%, 100% 55%, 55% 100%);
    background: #d6ffe0;
  }

  /* Folded wing hint on the hull. */
  .sw-wing {
    position: absolute;
    left: 14px;
    top: 26px;
    width: 24px;
    height: 10px;
    border-radius: 60% 40% 30% 60%;
    background: linear-gradient(180deg, rgba(214, 255, 224, 0.9), rgba(140, 255, 170, 0.5));
    opacity: 0.9;
  }

  /* Neck group: pivots at the breast for the dip-and-preen beat. */
  .sw-neckset {
    position: absolute;
    left: 36px;
    top: 0;
    width: 26px;
    height: 30px;
    transform-origin: 6px 28px;
    animation: sw-dip 9s ease-in-out infinite;
  }

  @keyframes sw-dip {
    0%, 46%, 100% { transform: rotate(0deg); }
    /* Neck reaches down to the water and lingers. */
    54%, 62% { transform: rotate(52deg); }
    70% { transform: rotate(-4deg); }
    76% { transform: rotate(0deg); }
  }

  /* The S: a quarter-arc stroke rising from the breast, curving
     forward at the top. */
  .sw-neck {
    position: absolute;
    left: 2px;
    top: 4px;
    width: 18px;
    height: 26px;
    border-left: 4.5px solid #eaffea;
    border-top: 4.5px solid #eaffea;
    border-radius: 100% 0 0 0;
    filter: drop-shadow(0 0 3px rgba(0, 204, 0, 0.4));
  }

  /* Head at the arc's forward end, beak angled down. */
  .sw-head {
    position: absolute;
    left: 14px;
    top: 1px;
    width: 12px;
    height: 8px;
    border-radius: 60% 50% 50% 40%;
    background: #eaffea;
  }

  .sw-eye {
    position: absolute;
    left: 6px;
    top: 2.5px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #041a0a;
  }

  .sw-beak {
    position: absolute;
    left: 24px;
    top: 4px;
    width: 8px;
    height: 4px;
    clip-path: polygon(0 0, 100% 45%, 0 100%);
    background: rgba(0, 110, 22, 0.95);
  }

  /* Mirror image: the hull and neck reflected under the waterline,
     faint and softly wobbling. */
  .sw-reflection {
    position: absolute;
    left: 30px;
    top: 60px;
    width: 52px;
    height: 26px;
    transform: scaleY(-1);
    opacity: 0.22;
    filter: blur(1px);
    animation: sw-glide 9s ease-in-out infinite, sw-shimmer 2.2s ease-in-out infinite;
  }

  @keyframes sw-shimmer {
    0%, 100% { opacity: 0.22; }
    50% { opacity: 0.13; }
  }

  .sw-reflection .sw-hull {
    top: 8px;
    box-shadow: none;
  }

  .sw-reflection .sw-neck {
    position: absolute;
    left: 38px;
    top: 8px;
    height: 18px;
  }

  /* Ripples pealing off the breast as it glides. */
  .sw-ripple {
    position: absolute;
    top: 56px;
    width: 18px;
    height: 5px;
    border-radius: 50%;
    border: 1px solid rgba(140, 255, 170, 0.6);
    border-top-color: transparent;
    opacity: 0;
    animation: sw-ripple 3s linear infinite;
  }

  .sw-ripple.r1 { left: 60px; }
  .sw-ripple.r2 { left: 40px; animation-delay: -1.5s; }

  @keyframes sw-ripple {
    0% { transform: scale(0.4); opacity: 0.8; }
    100% { transform: scale(1.9); opacity: 0; }
  }

  /* Droplet sparkle when the neck lifts back out of the water. */
  .sw-drop {
    position: absolute;
    left: 74px;
    top: 48px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #eaffea;
    box-shadow: 0 0 4px rgba(190, 255, 205, 0.9);
    opacity: 0;
    animation: sw-drop 9s infinite;
  }

  @keyframes sw-drop {
    0%, 66% { opacity: 0; transform: translateY(0); }
    69% { opacity: 1; transform: translateY(-6px); }
    74%, 100% { opacity: 0; transform: translateY(6px); }
  }
`,
};

const swanMarkup = {
  v1: `
      <div class="sw">
        <div class="sw-water"></div>
        <div class="sw-shimmer"></div>
        <div class="sw-reflection">
          <div class="sw-body"></div>
        </div>
        <div class="sw-wake"></div>
        <div class="sw-drop d1"></div>
        <div class="sw-drop d2"></div>
        <div class="sw-swan">
          <div class="sw-body"></div>
          <div class="sw-wing"></div>
          <div class="sw-neck">
            <div class="sw-neck-curve"></div>
            <div class="sw-head"></div>
          </div>
        </div>
      </div>
    `,
  v2: `
      <div class="sw">
        <div class="sw-water"></div>
        <div class="sw-reflection">
          <div class="sw-hull"></div>
          <div class="sw-neck"></div>
        </div>
        <div class="sw-ripple r1"></div>
        <div class="sw-ripple r2"></div>
        <div class="sw-drop"></div>
        <div class="sw-bird">
          <div class="sw-tail"></div>
          <div class="sw-hull"></div>
          <div class="sw-wing"></div>
          <div class="sw-neckset">
            <div class="sw-neck"></div>
            <div class="sw-head">
              <div class="sw-eye"></div>
            </div>
            <div class="sw-beak"></div>
          </div>
        </div>
      </div>
    `,
};

class ConceptSwan extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${swanStyles[version] || swanStyles.v2}</style>${swanMarkup[version] || swanMarkup.v2}`;
  }
}

if (!customElements.get('concept-swan')) {
  customElements.define('concept-swan', ConceptSwan);
}
