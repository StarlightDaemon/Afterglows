const targetLockStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  /* --- v1: the original pair of spinning rings --- */
  .lock-ring {
    border: 2px dashed var(--accent, #00cc00);
    border-radius: 50%;
    position: absolute;
    animation: spin 4s linear infinite;
  }

  .lr1 {
    width: 80px;
    height: 80px;
    border-width: 1px;
    animation-direction: reverse;
  }

  .lr2 {
    width: 40px;
    height: 40px;
    border-style: solid;
    border-color: transparent var(--accent, #00cc00);
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* --- v2: full HUD acquisition sequence ---
     A drifting target blip is chased by converging corner brackets;
     when they clamp down a confirm ping fires and LOCK flashes. */
  .tl2 {
    width: 104px;
    height: 104px;
    position: relative;
  }

  .tl2-ring-outer {
    position: absolute;
    inset: 6px;
    border: 1px dashed rgba(0, 204, 0, 0.45);
    border-radius: 50%;
    animation: tl2-spin 11s linear infinite reverse;
  }

  /* Tick ring: conic tick marks cut into an annulus by a radial mask. */
  .tl2-ring-ticks {
    position: absolute;
    inset: 17px;
    border-radius: 50%;
    background: repeating-conic-gradient(rgba(140, 255, 170, 0.8) 0 4deg, transparent 4deg 24deg);
    -webkit-mask-image: radial-gradient(circle, transparent 0 58%, black 60% 72%, transparent 74%);
    mask-image: radial-gradient(circle, transparent 0 58%, black 60% 72%, transparent 74%);
    animation: tl2-spin 7s linear infinite;
  }

  @keyframes tl2-spin {
    to { transform: rotate(360deg); }
  }

  /* Corner brackets converge on the blip once it settles. */
  .tl2-corner {
    position: absolute;
    width: 13px;
    height: 13px;
    animation: tl2-converge 4.5s ease-in-out infinite;
  }

  .tl2-corner.c1 { top: 20px;    left: 20px;   border-top: 2px solid var(--accent, #00cc00); border-left: 2px solid var(--accent, #00cc00);  --dx: 7px;  --dy: 7px; }
  .tl2-corner.c2 { top: 20px;    right: 20px;  border-top: 2px solid var(--accent, #00cc00); border-right: 2px solid var(--accent, #00cc00); --dx: -7px; --dy: 7px; }
  .tl2-corner.c3 { bottom: 20px; left: 20px;   border-bottom: 2px solid var(--accent, #00cc00); border-left: 2px solid var(--accent, #00cc00);  --dx: 7px;  --dy: -7px; }
  .tl2-corner.c4 { bottom: 20px; right: 20px;  border-bottom: 2px solid var(--accent, #00cc00); border-right: 2px solid var(--accent, #00cc00); --dx: -7px; --dy: -7px; }

  @keyframes tl2-converge {
    0%, 22% { transform: translate(0, 0); opacity: 0.55; }
    40%, 68% { transform: translate(var(--dx), var(--dy)); opacity: 1; }
    86%, 100% { transform: translate(0, 0); opacity: 0.55; }
  }

  /* Crosshair with a center gap. */
  .tl2-cross {
    position: absolute;
    top: 50%;
    left: 50%;
    background: rgba(140, 255, 170, 0.55);
    animation: tl2-cross 4.5s ease-in-out infinite;
  }

  .tl2-cross.h1 { width: 12px; height: 1px; margin: 0 0 0 -26px; }
  .tl2-cross.h2 { width: 12px; height: 1px; margin: 0 0 0 14px; }
  .tl2-cross.v1 { width: 1px; height: 12px; margin: -26px 0 0 0; }
  .tl2-cross.v2 { width: 1px; height: 12px; margin: 14px 0 0 0; }

  @keyframes tl2-cross {
    0%, 30% { opacity: 0.4; }
    42%, 66% { opacity: 1; }
    82%, 100% { opacity: 0.4; }
  }

  /* The wandering target blip: hunts, then settles dead-center. */
  .tl2-blip {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    margin: -3px 0 0 -3px;
    border-radius: 50%;
    background: #baffc9;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.9);
    animation: tl2-drift 4.5s ease-in-out infinite;
  }

  @keyframes tl2-drift {
    0% { transform: translate(-24px, 12px); opacity: 0.6; }
    16% { transform: translate(14px, -18px); opacity: 0.85; }
    30% { transform: translate(-8px, -6px); }
    40%, 68% { transform: translate(0, 0); opacity: 1; }
    84% { transform: translate(18px, 14px); opacity: 0.7; }
    100% { transform: translate(-24px, 12px); opacity: 0.6; }
  }

  /* Confirm ping: one ring expands from center at the lock moment. */
  .tl2-ping {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 18px;
    height: 18px;
    margin: -9px 0 0 -9px;
    border: 1px solid rgba(160, 255, 185, 0.9);
    border-radius: 50%;
    opacity: 0;
    animation: tl2-ping 4.5s ease-out infinite;
  }

  @keyframes tl2-ping {
    0%, 40% { transform: scale(0.4); opacity: 0; }
    46% { opacity: 0.95; }
    62% { transform: scale(2.6); opacity: 0; }
    100% { opacity: 0; }
  }

  .tl2-label {
    position: absolute;
    bottom: 1px;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Courier New', monospace;
    font-size: 9px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #c8ffd6;
    text-shadow: 0 0 6px rgba(0, 204, 0, 0.9);
    opacity: 0;
    animation: tl2-label 4.5s steps(1) infinite;
  }

  @keyframes tl2-label {
    0%, 44% { opacity: 0; }
    46%, 50% { opacity: 1; }
    52%, 54% { opacity: 0.25; }
    56%, 68% { opacity: 1; }
    70%, 100% { opacity: 0; }
  }
`;

const targetLockMarkup = {
  v1: `
    <div class="lock-ring lr1"></div>
    <div class="lock-ring lr2"></div>
  `,
  v2: `
    <div class="tl2">
      <div class="tl2-ring-outer"></div>
      <div class="tl2-ring-ticks"></div>
      <div class="tl2-corner c1"></div>
      <div class="tl2-corner c2"></div>
      <div class="tl2-corner c3"></div>
      <div class="tl2-corner c4"></div>
      <div class="tl2-cross h1"></div>
      <div class="tl2-cross h2"></div>
      <div class="tl2-cross v1"></div>
      <div class="tl2-cross v2"></div>
      <div class="tl2-blip"></div>
      <div class="tl2-ping"></div>
      <div class="tl2-label">LOCK</div>
    </div>
  `,
};

class ConceptTargetLock extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${targetLockStyles}</style>${targetLockMarkup[version] || targetLockMarkup.v2}`;
  }
}

if (!customElements.get('concept-target-lock')) {
  customElements.define('concept-target-lock', ConceptTargetLock);
}
