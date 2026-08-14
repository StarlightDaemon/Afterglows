const flashlightStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: Single-color phosphor flashlight --- */
  .fl {
    width: 116px;
    height: 92px;
    position: relative;
    overflow: hidden;
    background: #020602;
  }

  .fl-torch {
    position: absolute;
    left: 2px;
    bottom: 10px;
    width: 30px;
    height: 12px;
    transform-origin: 10% 50%;
    animation: fl-pan 7s ease-in-out infinite;
  }

  .fl-body {
    position: absolute;
    left: 0;
    top: 1px;
    width: 18px;
    height: 10px;
    border-radius: 3px;
    background: linear-gradient(180deg, rgba(0, 130, 26, 0.9), rgba(0, 60, 12, 0.95));
    border: 1px solid rgba(0, 204, 0, 0.7);
  }

  .fl-bezel {
    position: absolute;
    left: 17px;
    top: 0;
    width: 7px;
    height: 12px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.9);
  }

  .fl-cone {
    position: absolute;
    left: 24px;
    top: -26px;
    width: 96px;
    height: 64px;
    clip-path: polygon(0 44%, 100% 0, 100% 100%, 0 56%);
    background: linear-gradient(90deg,
      rgba(214, 255, 224, 0.5),
      rgba(140, 255, 170, 0.18) 55%,
      rgba(140, 255, 170, 0.05));
    animation: fl-breathe 7s ease-in-out infinite;
  }

  @keyframes fl-pan {
    0%, 8% { transform: rotate(-24deg); }
    30%, 40% { transform: rotate(2deg); }
    58%, 68% { transform: rotate(-38deg); }
    88%, 100% { transform: rotate(-24deg); }
  }

  @keyframes fl-breathe {
    0%, 100% { opacity: 0.85; }
    50% { opacity: 1; }
  }

  .fl-mote {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(214, 255, 224, 0.9);
    animation: fl-mote linear infinite;
  }

  .fl-mote.m1 { left: 48px; top: 34px; animation-duration: 4s; }
  .fl-mote.m2 { left: 70px; top: 22px; animation-duration: 5.2s; animation-delay: -2s; }
  .fl-mote.m3 { left: 60px; top: 48px; animation-duration: 4.6s; animation-delay: -3.1s; }

  @keyframes fl-mote {
    0% { transform: translate(0, 0); opacity: 0; }
    20% { opacity: 0.8; }
    80% { opacity: 0.5; }
    100% { transform: translate(-10px, -8px); opacity: 0; }
  }

  .fl-crate {
    position: absolute;
    right: 14px;
    bottom: 10px;
    width: 26px;
    height: 20px;
    border: 2px solid rgba(140, 255, 170, 0.9);
    background:
      linear-gradient(45deg, transparent 46%, rgba(140, 255, 170, 0.5) 47% 53%, transparent 54%),
      linear-gradient(-45deg, transparent 46%, rgba(140, 255, 170, 0.5) 47% 53%, transparent 54%),
      rgba(0, 70, 14, 0.6);
    opacity: 0;
    animation: fl-crate 7s ease-in-out infinite;
  }

  @keyframes fl-crate {
    0%, 24% { opacity: 0; }
    32%, 40% { opacity: 1; }
    50%, 100% { opacity: 0; }
  }

  .fl-eyes {
    position: absolute;
    left: 34px;
    bottom: 20px;
    width: 18px;
    height: 6px;
    opacity: 0;
    animation: fl-eyes 7s steps(1) infinite;
  }

  .fl-eye {
    position: absolute;
    top: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: radial-gradient(circle, #f2ffdd 30%, #7bd88f 70%);
    box-shadow: 0 0 6px rgba(190, 255, 205, 0.9);
    animation: fl-blink 7s steps(1) infinite;
  }

  .fl-eye.e1 { left: 0; }
  .fl-eye.e2 { right: 0; }

  @keyframes fl-eyes {
    0%, 58% { opacity: 0; }
    62%, 84% { opacity: 1; }
    86%, 100% { opacity: 0; }
  }

  @keyframes fl-blink {
    0%, 70% { transform: scaleY(1); }
    72%, 74% { transform: scaleY(0.1); }
    76%, 100% { transform: scaleY(1); }
  }

  .fl-floor {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 8px;
    height: 1.5px;
    background: linear-gradient(90deg,
      rgba(140, 255, 170, 0.4),
      rgba(0, 204, 0, 0.15) 60%,
      transparent);
  }

  /* --- v2: Warm incandescent torch beam & midnight reveal --- */
  .flc {
    width: 116px;
    height: 92px;
    position: relative;
    overflow: hidden;
    background: #030712;
  }

  .flc-torch {
    position: absolute;
    left: 2px;
    bottom: 10px;
    width: 30px;
    height: 12px;
    transform-origin: 10% 50%;
    animation: flc-pan 7s ease-in-out infinite;
  }

  .flc-body {
    position: absolute;
    left: 0;
    top: 1px;
    width: 18px;
    height: 10px;
    border-radius: 3px;
    background: linear-gradient(180deg, #374151, #111827);
    border: 1px solid #4b5563;
  }

  .flc-bezel {
    position: absolute;
    left: 17px;
    top: 0;
    width: 7px;
    height: 12px;
    border-radius: 2px;
    background: #e2e8f0;
    border: 1px solid #94a3b8;
  }

  .flc-cone {
    position: absolute;
    left: 24px;
    top: -26px;
    width: 96px;
    height: 64px;
    clip-path: polygon(0 44%, 100% 0, 100% 100%, 0 56%);
    background: linear-gradient(90deg,
      rgba(255, 250, 220, 0.75),
      rgba(255, 230, 140, 0.28) 55%,
      rgba(255, 210, 100, 0.05));
    animation: flc-breathe 7s ease-in-out infinite;
  }

  @keyframes flc-pan {
    0%, 8% { transform: rotate(-24deg); }
    30%, 40% { transform: rotate(2deg); }
    58%, 68% { transform: rotate(-38deg); }
    88%, 100% { transform: rotate(-24deg); }
  }

  @keyframes flc-breathe {
    0%, 100% { opacity: 0.85; filter: drop-shadow(0 0 8px rgba(255, 240, 180, 0.4)); }
    50% { opacity: 1; filter: drop-shadow(0 0 14px rgba(255, 240, 180, 0.6)); }
  }

  .flc-mote {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #fef08a;
    box-shadow: 0 0 3px #fef08a;
    animation: flc-mote linear infinite;
  }

  .flc-mote.m1 { left: 48px; top: 34px; animation-duration: 4s; }
  .flc-mote.m2 { left: 70px; top: 22px; animation-duration: 5.2s; animation-delay: -2s; }
  .flc-mote.m3 { left: 60px; top: 48px; animation-duration: 4.6s; animation-delay: -3.1s; }

  @keyframes flc-mote {
    0% { transform: translate(0, 0); opacity: 0; }
    20% { opacity: 0.9; }
    80% { opacity: 0.6; }
    100% { transform: translate(-10px, -8px); opacity: 0; }
  }

  /* Timber crate illuminated by warm light */
  .flc-crate {
    position: absolute;
    right: 14px;
    bottom: 10px;
    width: 26px;
    height: 20px;
    border: 2px solid #b45309;
    border-radius: 2px;
    background:
      linear-gradient(45deg, transparent 46%, #92400e 47% 53%, transparent 54%),
      linear-gradient(-45deg, transparent 46%, #92400e 47% 53%, transparent 54%),
      #78350f;
    box-shadow: 0 0 10px rgba(255, 200, 100, 0.4);
    opacity: 0;
    animation: flc-crate 7s ease-in-out infinite;
  }

  @keyframes flc-crate {
    0%, 24% { opacity: 0; }
    32%, 40% { opacity: 1; }
    50%, 100% { opacity: 0; }
  }

  /* Glowing predatory amber eyes in the darkness */
  .flc-eyes {
    position: absolute;
    left: 34px;
    bottom: 20px;
    width: 18px;
    height: 6px;
    opacity: 0;
    animation: flc-eyes 7s steps(1) infinite;
  }

  .flc-eye {
    position: absolute;
    top: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: radial-gradient(circle, #ffffff 20%, #f59e0b 60%, #b45309 90%);
    box-shadow: 0 0 8px #fbbf24, 0 0 14px rgba(245, 158, 11, 0.8);
    animation: flc-blink 7s steps(1) infinite;
  }

  .flc-eye.e1 { left: 0; }
  .flc-eye.e2 { right: 0; }

  @keyframes flc-eyes {
    0%, 58% { opacity: 0; }
    62%, 84% { opacity: 1; }
    86%, 100% { opacity: 0; }
  }

  @keyframes flc-blink {
    0%, 70% { transform: scaleY(1); }
    72%, 74% { transform: scaleY(0.1); }
    76%, 100% { transform: scaleY(1); }
  }

  .flc-floor {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 8px;
    height: 1.5px;
    background: linear-gradient(90deg,
      rgba(255, 230, 160, 0.5),
      rgba(255, 180, 50, 0.15) 60%,
      transparent);
  }
`;

const flashlightMarkup = {
  v1: `
    <div class="fl">
      <div class="fl-crate"></div>
      <div class="fl-eyes">
        <div class="fl-eye e1"></div>
        <div class="fl-eye e2"></div>
      </div>
      <div class="fl-floor"></div>
      <div class="fl-torch">
        <div class="fl-cone"></div>
        <div class="fl-body"></div>
        <div class="fl-bezel"></div>
      </div>
      <div class="fl-mote m1"></div>
      <div class="fl-mote m2"></div>
      <div class="fl-mote m3"></div>
    </div>
  `,
  v2: `
    <div class="flc">
      <div class="flc-crate"></div>
      <div class="flc-eyes">
        <div class="flc-eye e1"></div>
        <div class="flc-eye e2"></div>
      </div>
      <div class="flc-floor"></div>
      <div class="flc-torch">
        <div class="flc-cone"></div>
        <div class="flc-body"></div>
        <div class="flc-bezel"></div>
      </div>
      <div class="flc-mote m1"></div>
      <div class="flc-mote m2"></div>
      <div class="flc-mote m3"></div>
    </div>
  `,
};

class ConceptFlashlight extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${flashlightStyles}</style>${flashlightMarkup[version] || flashlightMarkup.v2}`;
  }
}

if (!customElements.get('concept-flashlight')) {
  customElements.define('concept-flashlight', ConceptFlashlight);
}
