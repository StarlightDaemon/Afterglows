const sproutStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sprout {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
  }

  /* Soil bed. */
  .sprout-soil {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 14px;
    height: 8px;
    border-radius: 4px;
    background: linear-gradient(180deg, #0c2412 0%, #051207 100%);
    border-top: 1px solid rgba(120, 230, 150, 0.35);
  }

  .sprout-soil::before,
  .sprout-soil::after {
    content: '';
    position: absolute;
    top: 3px;
    width: 3px;
    height: 2px;
    border-radius: 50%;
    background: rgba(140, 255, 170, 0.25);
  }

  .sprout-soil::before { left: 16px; }
  .sprout-soil::after { right: 20px; }

  /* Everything below shares one 7s life cycle:
     emerge -> grow -> unfold -> glow -> fade -> repeat. */
  .sprout-stem {
    position: absolute;
    bottom: 21px;
    left: 50%;
    width: 3px;
    height: 44px;
    margin-left: -1.5px;
    border-radius: 2px 2px 0 0;
    background: linear-gradient(180deg, #9dff8a, #2a8a3e);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.35);
    transform-origin: bottom center;
    animation: sprout-stem 7s ease-in-out infinite;
  }

  .sprout-leaf {
    position: absolute;
    bottom: 48px;
    left: 50%;
    width: 26px;
    height: 14px;
    background: linear-gradient(135deg, #b8ffa2, #37a34c);
    box-shadow: 0 0 7px rgba(0, 204, 0, 0.3);
    animation-duration: 7s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  .sprout-leaf.left {
    margin-left: -26px;
    border-radius: 90% 4% 90% 40%;
    transform-origin: right bottom;
    animation-name: sprout-leaf-left;
  }

  .sprout-leaf.right {
    margin-left: 0;
    border-radius: 4% 90% 40% 90%;
    transform-origin: left bottom;
    animation-name: sprout-leaf-right;
  }

  /* Crown bud that brightens once the plant is fully open. */
  .sprout-bud {
    position: absolute;
    bottom: 62px;
    left: 50%;
    width: 7px;
    height: 7px;
    margin-left: -3.5px;
    border-radius: 50% 50% 50% 4%;
    background: #e6ffd2;
    animation: sprout-bud 7s ease-in-out infinite;
  }

  /* Rising motes celebrating the bloom. */
  .sprout-mote {
    position: absolute;
    bottom: 66px;
    left: 50%;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #d8ffbb;
    box-shadow: 0 0 5px rgba(216, 255, 187, 0.7);
    animation: sprout-mote 7s ease-out infinite;
  }

  .sprout-mote.m1 { --mote-x: -12px; }
  .sprout-mote.m2 { --mote-x: 10px; animation-delay: 0.35s; }

  @keyframes sprout-stem {
    0%, 6% { transform: scaleY(0); }
    30% { transform: scaleY(0.55); }
    48% { transform: scaleY(1); }
    88% { transform: scaleY(1); opacity: 1; }
    96%, 100% { transform: scaleY(1); opacity: 0; }
  }

  @keyframes sprout-leaf-left {
    0%, 34% { transform: rotate(60deg) scale(0); opacity: 0; }
    52% { transform: rotate(18deg) scale(0.6); opacity: 1; }
    66% { transform: rotate(-6deg) scale(1); }
    88% { transform: rotate(-2deg) scale(1); opacity: 1; }
    96%, 100% { transform: rotate(-2deg) scale(1); opacity: 0; }
  }

  @keyframes sprout-leaf-right {
    0%, 40% { transform: rotate(-60deg) scale(0); opacity: 0; }
    58% { transform: rotate(-18deg) scale(0.6); opacity: 1; }
    72% { transform: rotate(6deg) scale(1); }
    88% { transform: rotate(2deg) scale(1); opacity: 1; }
    96%, 100% { transform: rotate(2deg) scale(1); opacity: 0; }
  }

  @keyframes sprout-bud {
    0%, 44% { transform: scale(0) rotate(45deg); opacity: 0; box-shadow: 0 0 0 rgba(216, 255, 187, 0); }
    60% { transform: scale(1) rotate(45deg); opacity: 1; box-shadow: 0 0 6px rgba(216, 255, 187, 0.5); }
    74%, 82% { transform: scale(1.15) rotate(45deg); box-shadow: 0 0 12px rgba(216, 255, 187, 0.85); }
    88% { transform: scale(1) rotate(45deg); opacity: 1; }
    96%, 100% { transform: scale(1) rotate(45deg); opacity: 0; }
  }

  @keyframes sprout-mote {
    0%, 72% { opacity: 0; transform: translate(0, 0) scale(1); }
    78% { opacity: 1; }
    94%, 100% { opacity: 0; transform: translate(var(--mote-x, -10px), -22px) scale(0.4); }
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

  /* v2: Botanical life emergence in true organic colors: rich dark loam soil,
     tender sapling stem in fresh green, vibrant spring lime cotyledons,
     luminous golden sunlit floral bud, and shimmering golden pollen motes. */
  .sproutc {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
  }

  /* Rich dark fertile loam soil bed */
  .sproutc-soil {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 14px;
    height: 9px;
    border-radius: 4px;
    background: linear-gradient(180deg, #451a03 0%, #291203 60%, #170902 100%);
    border-top: 1.5px solid #78350f;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
  }

  .sproutc-soil::before,
  .sproutc-soil::after {
    content: '';
    position: absolute;
    top: 3px;
    width: 3px;
    height: 2px;
    border-radius: 50%;
    background: #a16207;
  }

  .sproutc-soil::before { left: 16px; }
  .sproutc-soil::after { right: 20px; }

  /* Tender green hypocotyl stem */
  .sproutc-stem {
    position: absolute;
    bottom: 21px;
    left: 50%;
    width: 3px;
    height: 44px;
    margin-left: -1.5px;
    border-radius: 2px 2px 0 0;
    background: linear-gradient(180deg, #a7f3d0 0%, #10b981 40%, #047857 100%);
    box-shadow: 0 0 6px rgba(16, 185, 129, 0.5);
    transform-origin: bottom center;
    animation: sproutc-stem 7s ease-in-out infinite;
  }

  /* Vibrant spring leaves */
  .sproutc-leaf {
    position: absolute;
    bottom: 48px;
    left: 50%;
    width: 26px;
    height: 14px;
    background: linear-gradient(135deg, #bbf7d0 0%, #4ade80 40%, #15803d 100%);
    box-shadow: 0 0 8px rgba(74, 222, 128, 0.4);
    animation-duration: 7s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  .sproutc-leaf.left {
    margin-left: -26px;
    border-radius: 90% 4% 90% 40%;
    transform-origin: right bottom;
    animation-name: sproutc-leaf-left;
  }

  .sproutc-leaf.right {
    margin-left: 0;
    border-radius: 4% 90% 40% 90%;
    transform-origin: left bottom;
    animation-name: sproutc-leaf-right;
  }

  /* Golden solar floral crown */
  .sproutc-bud {
    position: absolute;
    bottom: 62px;
    left: 50%;
    width: 8px;
    height: 8px;
    margin-left: -4px;
    border-radius: 50% 50% 50% 4%;
    background: radial-gradient(circle at 35% 35%, #ffffff, #fde047 50%, #f59e0b 85%);
    animation: sproutc-bud 7s ease-in-out infinite;
  }

  /* Floating golden pollen sparks */
  .sproutc-mote {
    position: absolute;
    bottom: 66px;
    left: 50%;
    width: 2.5px;
    height: 2.5px;
    border-radius: 50%;
    background: #fde047;
    box-shadow: 0 0 6px rgba(253, 224, 71, 0.9);
    animation: sproutc-mote 7s ease-out infinite;
  }

  .sproutc-mote.m1 { --mote-x: -12px; }
  .sproutc-mote.m2 { --mote-x: 10px; animation-delay: 0.35s; }

  @keyframes sproutc-stem {
    0%, 6% { transform: scaleY(0); }
    30% { transform: scaleY(0.55); }
    48% { transform: scaleY(1); }
    88% { transform: scaleY(1); opacity: 1; }
    96%, 100% { transform: scaleY(1); opacity: 0; }
  }

  @keyframes sproutc-leaf-left {
    0%, 34% { transform: rotate(60deg) scale(0); opacity: 0; }
    52% { transform: rotate(18deg) scale(0.6); opacity: 1; }
    66% { transform: rotate(-6deg) scale(1); }
    88% { transform: rotate(-2deg) scale(1); opacity: 1; }
    96%, 100% { transform: rotate(-2deg) scale(1); opacity: 0; }
  }

  @keyframes sproutc-leaf-right {
    0%, 40% { transform: rotate(-60deg) scale(0); opacity: 0; }
    58% { transform: rotate(-18deg) scale(0.6); opacity: 1; }
    72% { transform: rotate(6deg) scale(1); }
    88% { transform: rotate(2deg) scale(1); opacity: 1; }
    96%, 100% { transform: rotate(2deg) scale(1); opacity: 0; }
  }

  @keyframes sproutc-bud {
    0%, 44% { transform: scale(0) rotate(45deg); opacity: 0; box-shadow: 0 0 0 transparent; }
    60% { transform: scale(1) rotate(45deg); opacity: 1; box-shadow: 0 0 8px rgba(251, 191, 36, 0.6); }
    74%, 82% { transform: scale(1.2) rotate(45deg); box-shadow: 0 0 16px rgba(245, 158, 11, 0.95); }
    88% { transform: scale(1) rotate(45deg); opacity: 1; }
    96%, 100% { transform: scale(1) rotate(45deg); opacity: 0; }
  }

  @keyframes sproutc-mote {
    0%, 72% { opacity: 0; transform: translate(0, 0) scale(1); }
    78% { opacity: 1; }
    94%, 100% { opacity: 0; transform: translate(var(--mote-x, -10px), -22px) scale(0.4); }
  }
  `,
};

const sproutMarkup = {
  v1: `
    <div class="sprout">
      <div class="sprout-stem"></div>
      <div class="sprout-leaf left"></div>
      <div class="sprout-leaf right"></div>
      <div class="sprout-bud"></div>
      <div class="sprout-mote m1"></div>
      <div class="sprout-mote m2"></div>
      <div class="sprout-soil"></div>
    </div>
  `,
  v2: `
    <div class="sproutc">
      <div class="sproutc-stem"></div>
      <div class="sproutc-leaf left"></div>
      <div class="sproutc-leaf right"></div>
      <div class="sproutc-bud"></div>
      <div class="sproutc-mote m1"></div>
      <div class="sproutc-mote m2"></div>
      <div class="sproutc-soil"></div>
    </div>
  `,
};

class ConceptSprout extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${sproutStyles[version] || sproutStyles.v2}</style>${sproutMarkup[version] || sproutMarkup.v2}`;
  }
}

if (!customElements.get('concept-sprout')) {
  customElements.define('concept-sprout', ConceptSprout);
}
