// Caterpillar inching along a leaf edge with travelling wave of compression.
// v1 and v2 are preserved.
// v3 adds full color: emerald milkweed leaf with lime midrib, monarch yellow/black/white
// striped segments, inquisitive feelers, and munched leaf crumbs.
const caterpillarStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* An inchworm humping along a leaf edge: a travelling wave of
     compression runs down its segments so it bunches and stretches
     forward, munching a notch into the leaf when it arrives. */
  .ct {
    width: 116px;
    height: 76px;
    position: relative;
  }

  /* Leaf it crawls along. */
  .ct-leaf {
    position: absolute;
    left: 6px;
    right: 6px;
    bottom: 16px;
    height: 20px;
    border-radius: 0 60% 30% 100% / 0 100% 40% 100%;
    background: linear-gradient(135deg, rgba(0, 150, 30, 0.4), rgba(0, 80, 16, 0.6));
    border: 1px solid rgba(0, 204, 0, 0.4);
  }

  /* Midrib. */
  .ct-leaf::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 10px;
    right: 10px;
    height: 1px;
    background: rgba(140, 255, 170, 0.4);
    transform: rotate(-4deg);
    transform-origin: 0 50%;
  }

  /* Munched notch at the far end, appearing as it arrives. */
  .ct-notch {
    position: absolute;
    right: 10px;
    bottom: 30px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #030903;
    opacity: 0;
    animation: ct-notch 6s steps(1) infinite;
  }

  @keyframes ct-notch {
    0%, 78% { opacity: 0; }
    84%, 96% { opacity: 0.9; }
    100% { opacity: 0; }
  }

  /* The caterpillar crawls left to right. */
  .ct-worm {
    position: absolute;
    left: 0;
    bottom: 22px;
    width: 56px;
    height: 16px;
    animation: ct-crawl 6s ease-in-out infinite;
  }

  @keyframes ct-crawl {
    0% { transform: translateX(6px); }
    80% { transform: translateX(56px); }
    /* Munch pause, then reset. */
    92% { transform: translateX(56px); }
    100% { transform: translateX(6px); }
  }

  /* Segments: each bobs on a phase-shifted timer so an arch of
     compression travels head-to-tail (the inchworm hump). */
  .ct-seg {
    position: absolute;
    bottom: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, rgba(190, 255, 205, 0.8), rgba(0, 160, 32, 0.8) 60%, rgba(0, 100, 20, 0.9));
    border: 1px solid rgba(0, 204, 0, 0.5);
    animation: ct-hump 0.9s ease-in-out infinite;
  }

  .ct-seg.s1 { left: 0;  animation-delay: 0s; }
  .ct-seg.s2 { left: 8px; animation-delay: -0.15s; }
  .ct-seg.s3 { left: 16px; animation-delay: -0.3s; }
  .ct-seg.s4 { left: 24px; animation-delay: -0.45s; }
  .ct-seg.s5 { left: 32px; animation-delay: -0.6s; }
  .ct-seg.head { left: 42px; width: 13px; height: 13px; animation-delay: -0.75s; background: radial-gradient(circle at 40% 35%, #f2ffdd, #2a8a3e 70%); }

  @keyframes ct-hump {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-5px) scale(1.05, 0.95); }
  }

  /* Eye on the head. */
  .ct-eye {
    position: absolute;
    left: 50px;
    bottom: 10px;
    width: 2.5px;
    height: 2.5px;
    border-radius: 50%;
    background: #041a0a;
    animation: ct-crawl 6s ease-in-out infinite;
    z-index: 2;
  }

  /* Little antennae/feelers on the head. */
  .ct-feeler {
    position: absolute;
    left: 52px;
    bottom: 14px;
    width: 4px;
    height: 4px;
    border-top: 1.5px solid rgba(140, 255, 170, 0.8);
    border-right: 1.5px solid rgba(140, 255, 170, 0.8);
    animation: ct-crawl 6s ease-in-out infinite, ct-feeler 0.5s ease-in-out infinite;
    z-index: 2;
  }

  @keyframes ct-feeler {
    0%, 100% { transform: rotate(-10deg); }
    50% { transform: rotate(10deg); }
  }

  /* Munch crumbs at the notch. */
  .ct-crumb {
    position: absolute;
    right: 8px;
    bottom: 26px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(0, 200, 40, 0.8);
    opacity: 0;
    animation: ct-crumb 6s infinite;
  }

  .ct-crumb.c2 { right: 14px; animation-delay: 0.15s; }

  @keyframes ct-crumb {
    0%, 80% { transform: translate(0, 0); opacity: 0; }
    84% { opacity: 0.9; }
    92% { transform: translate(-4px, 8px); opacity: 0; }
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

  /* An inchworm humping along a leaf edge: a travelling wave of
     compression runs down its segments so it bunches and stretches
     forward, munching a notch into the leaf when it arrives. */
  .ct {
    width: 116px;
    height: 76px;
    position: relative;
  }

  /* Leaf it crawls along. */
  .ct-leaf {
    position: absolute;
    left: 6px;
    right: 6px;
    bottom: 16px;
    height: 20px;
    border-radius: 0 60% 30% 100% / 0 100% 40% 100%;
    background: linear-gradient(135deg, rgba(0, 150, 30, 0.4), rgba(0, 80, 16, 0.6));
    border: 1px solid rgba(0, 204, 0, 0.4);
  }

  /* Midrib. */
  .ct-leaf::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 10px;
    right: 10px;
    height: 1px;
    background: rgba(140, 255, 170, 0.4);
    transform: rotate(-4deg);
    transform-origin: 0 50%;
  }

  /* Munched notch at the far end, appearing as it arrives. */
  .ct-notch {
    position: absolute;
    right: 10px;
    bottom: 30px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #030903;
    opacity: 0;
    animation: ct-notch 6s steps(1) infinite;
  }

  @keyframes ct-notch {
    0%, 78% { opacity: 0; }
    84%, 96% { opacity: 0.9; }
    100% { opacity: 0; }
  }

  /* The caterpillar crawls left to right. */
  .ct-worm {
    position: absolute;
    left: 0;
    bottom: 22px;
    width: 56px;
    height: 16px;
    animation: ct-crawl 6s ease-in-out infinite;
  }

  @keyframes ct-crawl {
    0% { transform: translateX(6px); }
    80% { transform: translateX(56px); }
    /* Munch pause, then reset. */
    92% { transform: translateX(56px); }
    100% { transform: translateX(6px); }
  }

  /* Segments: each bobs on a phase-shifted timer so an arch of
     compression travels head-to-tail (the inchworm hump). */
  .ct-seg {
    position: absolute;
    bottom: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, rgba(190, 255, 205, 0.8), rgba(0, 160, 32, 0.8) 60%, rgba(0, 100, 20, 0.9));
    border: 1px solid rgba(0, 204, 0, 0.5);
    animation: ct-hump 0.9s ease-in-out infinite;
  }

  .ct-seg.s1 { left: 0;  animation-delay: 0s; z-index: 1; }
  .ct-seg.s2 { left: 7px; animation-delay: -0.15s; z-index: 2; }
  .ct-seg.s3 { left: 14px; animation-delay: -0.3s; z-index: 3; }
  .ct-seg.s4 { left: 21px; animation-delay: -0.45s; z-index: 4; }
  .ct-seg.s5 { left: 28px; animation-delay: -0.6s; z-index: 5; }
  .ct-seg.head { left: 36px; width: 13px; height: 13px; animation-delay: -0.75s; background: radial-gradient(circle at 40% 35%, #f2ffdd, #2a8a3e 70%); z-index: 6; }

  @keyframes ct-hump {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-5px) scale(1.05, 0.95); }
  }

  /* Eye and feelers live INSIDE the head segment so they ride its hump
     exactly (they used to run their own copy of the crawl and drifted). */
  .ct-eye {
    position: absolute;
    right: 2.5px;
    top: 4px;
    width: 2.5px;
    height: 2.5px;
    border-radius: 50%;
    background: #041a0a;
  }

  .ct-feeler {
    position: absolute;
    right: -2px;
    top: -4px;
    width: 4px;
    height: 4px;
    border-top: 1.5px solid rgba(140, 255, 170, 0.8);
    border-right: 1.5px solid rgba(140, 255, 170, 0.8);
    transform-origin: 0 100%;
    animation: ct-feeler 0.5s ease-in-out infinite;
  }

  @keyframes ct-feeler {
    0%, 100% { transform: rotate(-10deg); }
    50% { transform: rotate(10deg); }
  }

  /* Munch crumbs at the notch. */
  .ct-crumb {
    position: absolute;
    right: 8px;
    bottom: 26px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(0, 200, 40, 0.8);
    opacity: 0;
    animation: ct-crumb 6s infinite;
  }

  .ct-crumb.c2 { right: 14px; animation-delay: 0.15s; }

  @keyframes ct-crumb {
    0%, 80% { transform: translate(0, 0); opacity: 0; }
    84% { opacity: 0.9; }
    92% { transform: translate(-4px, 8px); opacity: 0; }
    100% { opacity: 0; }
  }
  `,
  v3: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v3: Monarch caterpillar on milkweed leaf with vivid yellow, black,
     and white stripes, lime leaf vein, feelers, and crumbs */
  .ctc {
    width: 116px;
    height: 76px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Fresh Milkweed Leaf */
  .ctc-leaf {
    position: absolute;
    left: 6px;
    right: 6px;
    bottom: 16px;
    height: 20px;
    border-radius: 0 60% 30% 100% / 0 100% 40% 100%;
    background: linear-gradient(135deg, #22c55e 0%, #15803d 70%, #14532d 100%);
    border: 1px solid #4ade80;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
  }

  /* Pale Lime Central Leaf Vein */
  .ctc-leaf::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 10px;
    right: 10px;
    height: 1.5px;
    background: #a3e635;
    box-shadow: 0 0 3px #bef264;
    transform: rotate(-4deg);
    transform-origin: 0 50%;
  }

  /* Munched Notch at Leaf Tip */
  .ctc-notch {
    position: absolute;
    right: 10px;
    bottom: 30px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #020617;
    box-shadow: inset 0 0 3px #000000;
    opacity: 0;
    animation: ctc-notch 6s steps(1) infinite;
  }

  @keyframes ctc-notch {
    0%, 78% { opacity: 0; }
    84%, 96% { opacity: 1; }
    100% { opacity: 0; }
  }

  /* Caterpillar Inching Assembly */
  .ctc-worm {
    position: absolute;
    left: 0;
    bottom: 22px;
    width: 56px;
    height: 16px;
    animation: ctc-crawl 6s ease-in-out infinite;
  }

  @keyframes ctc-crawl {
    0% { transform: translateX(6px); }
    80% { transform: translateX(56px); }
    92% { transform: translateX(56px); }
    100% { transform: translateX(6px); }
  }

  /* Monarch Ring-Banded Segments: Yellow, Black, White */
  .ctc-seg {
    position: absolute;
    bottom: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: repeating-linear-gradient(90deg,
      #0f172a 0 2px,
      #fde047 2px 4px,
      #ffffff 4px 6px);
    border: 1px solid #facc15;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
    animation: ctc-hump 0.9s ease-in-out infinite;
  }

  .ctc-seg.s1 { left: 0;  animation-delay: 0s; z-index: 1; }
  .ctc-seg.s2 { left: 7px; animation-delay: -0.15s; z-index: 2; }
  .ctc-seg.s3 { left: 14px; animation-delay: -0.3s; z-index: 3; }
  .ctc-seg.s4 { left: 21px; animation-delay: -0.45s; z-index: 4; }
  .ctc-seg.s5 { left: 28px; animation-delay: -0.6s; z-index: 5; }
  .ctc-seg.head {
    left: 36px;
    width: 13px;
    height: 13px;
    animation-delay: -0.75s;
    background: radial-gradient(circle at 40% 35%, #fde047 0%, #ca8a04 70%, #0f172a 100%);
    border: 1px solid #fde047;
    z-index: 6;
  }

  @keyframes ctc-hump {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-5px) scale(1.05, 0.95); }
  }

  /* Head Eyes */
  .ctc-eye {
    position: absolute;
    right: 2.5px;
    top: 4px;
    width: 2.5px;
    height: 2.5px;
    border-radius: 50%;
    background: #020617;
  }

  /* Sensory Black Antennae/Feelers */
  .ctc-feeler {
    position: absolute;
    right: -2px;
    top: -4px;
    width: 4px;
    height: 4px;
    border-top: 1.5px solid #0f172a;
    border-right: 1.5px solid #0f172a;
    transform-origin: 0 100%;
    animation: ctc-feeler 0.5s ease-in-out infinite;
  }

  @keyframes ctc-feeler {
    0%, 100% { transform: rotate(-10deg); }
    50% { transform: rotate(10deg); }
  }

  /* Bright Green Munched Leaf Crumbs */
  .ctc-crumb {
    position: absolute;
    right: 8px;
    bottom: 26px;
    width: 2.5px;
    height: 2.5px;
    border-radius: 50%;
    background: #4ade80;
    box-shadow: 0 0 2px #22c55e;
    opacity: 0;
    animation: ctc-crumb 6s infinite;
  }

  .ctc-crumb.c2 { right: 14px; animation-delay: 0.15s; }

  @keyframes ctc-crumb {
    0%, 80% { transform: translate(0, 0); opacity: 0; }
    84% { opacity: 1; }
    92% { transform: translate(-4px, 8px); opacity: 0; }
    100% { opacity: 0; }
  }
  `,
};

const caterpillarMarkup = {
  v1: `
      <div class="ct">
        <div class="ct-leaf"></div>
        <div class="ct-notch"></div>
        <div class="ct-crumb"></div>
        <div class="ct-crumb c2"></div>
        <div class="ct-worm">
          <div class="ct-seg s1"></div>
          <div class="ct-seg s2"></div>
          <div class="ct-seg s3"></div>
          <div class="ct-seg s4"></div>
          <div class="ct-seg s5"></div>
          <div class="ct-seg head"></div>
        </div>
        <div class="ct-eye"></div>
        <div class="ct-feeler"></div>
      </div>
    `,
  v2: `
      <div class="ct">
        <div class="ct-leaf"></div>
        <div class="ct-notch"></div>
        <div class="ct-crumb"></div>
        <div class="ct-crumb c2"></div>
        <div class="ct-worm">
          <div class="ct-seg s1"></div>
          <div class="ct-seg s2"></div>
          <div class="ct-seg s3"></div>
          <div class="ct-seg s4"></div>
          <div class="ct-seg s5"></div>
          <div class="ct-seg head">
            <div class="ct-eye"></div>
            <div class="ct-feeler"></div>
          </div>
        </div>
      </div>
    `,
  v3: `
      <div class="ctc">
        <div class="ctc-leaf"></div>
        <div class="ctc-notch"></div>
        <div class="ctc-crumb"></div>
        <div class="ctc-crumb c2"></div>
        <div class="ctc-worm">
          <div class="ctc-seg s1"></div>
          <div class="ctc-seg s2"></div>
          <div class="ctc-seg s3"></div>
          <div class="ctc-seg s4"></div>
          <div class="ctc-seg s5"></div>
          <div class="ctc-seg head">
            <div class="ctc-eye"></div>
            <div class="ctc-feeler"></div>
          </div>
        </div>
      </div>
    `,
};

class ConceptCaterpillar extends HTMLElement {
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
    const version = this.getAttribute('version') || 'v3';
    const styles = caterpillarStyles[version] || caterpillarStyles.v3;
    const markup = caterpillarMarkup[version] || caterpillarMarkup.v3;
    this.shadowRoot.innerHTML = `<style>${styles}</style>${markup}`;
  }
}

if (!customElements.get('concept-caterpillar')) {
  customElements.define('concept-caterpillar', ConceptCaterpillar);
}
