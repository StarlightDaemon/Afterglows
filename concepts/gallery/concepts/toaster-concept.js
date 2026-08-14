const toasterStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .toaster {
    width: 108px;
    height: 92px;
    position: relative;
  }

  .toaster-body {
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 8px;
    height: 46px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 10px 10px 4px 4px;
    background: linear-gradient(180deg, rgba(0, 70, 14, 0.5), rgba(0, 30, 6, 0.7));
    box-shadow: inset 0 0 10px rgba(0, 204, 0, 0.2);
  }

  .toaster-slot {
    position: absolute;
    top: -2px;
    width: 30px;
    height: 4px;
    border-radius: 2px;
    background: var(--accent, #00cc00);
    animation: toaster-coil 4.6s ease-in-out infinite;
  }

  .toaster-slot.s1 { left: 12px; }
  .toaster-slot.s2 { right: 12px; }

  @keyframes toaster-coil {
    0%, 8% { opacity: 0.35; box-shadow: none; }
    30%, 62% { opacity: 1; box-shadow: 0 0 9px rgba(0, 204, 0, 0.9); }
    72%, 100% { opacity: 0.35; box-shadow: none; }
  }

  .toaster-body::before,
  .toaster-body::after {
    content: '';
    position: absolute;
    bottom: -8px;
    width: 10px;
    height: 6px;
    border-radius: 0 0 3px 3px;
    background: rgba(0, 204, 0, 0.5);
  }

  .toaster-body::before { left: 8px; }
  .toaster-body::after { right: 8px; }

  .toaster-lever {
    position: absolute;
    right: 1px;
    top: 40px;
    width: 7px;
    height: 5px;
    border-radius: 2px;
    background: #baffc9;
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.7);
    animation: toaster-lever 4.6s infinite;
  }

  @keyframes toaster-lever {
    0%, 4% { transform: translateY(0); }
    10%, 68% { transform: translateY(22px); }
    72%, 100% { transform: translateY(0); }
  }

  .toaster-toast {
    position: absolute;
    width: 26px;
    height: 30px;
    border: 2px solid rgba(140, 255, 170, 0.9);
    border-radius: 9px 9px 3px 3px;
    background: rgba(0, 80, 16, 0.55);
    animation: toaster-pop 4.6s infinite;
  }

  .toaster-toast.t1 { left: 24px; top: 42px; }
  .toaster-toast.t2 { right: 24px; top: 42px; animation-name: toaster-pop2; }

  @keyframes toaster-pop {
    0%, 68% { transform: translateY(0); opacity: 0; }
    70% { transform: translateY(-26px); opacity: 1; }
    76% { transform: translateY(-34px); }
    82% { transform: translateY(-28px); }
    88%, 96% { transform: translateY(-30px); opacity: 1; }
    100% { transform: translateY(-30px); opacity: 0; }
  }

  @keyframes toaster-pop2 {
    0%, 68% { transform: translateY(0) rotate(0deg); opacity: 0; }
    71% { transform: translateY(-30px) rotate(-4deg); opacity: 1; }
    77% { transform: translateY(-38px) rotate(3deg); }
    83% { transform: translateY(-31px) rotate(-1deg); }
    89%, 96% { transform: translateY(-33px) rotate(0deg); opacity: 1; }
    100% { transform: translateY(-33px) rotate(0deg); opacity: 0; }
  }

  .toaster-crumb {
    position: absolute;
    top: 40px;
    left: 50%;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #d6ffe0;
    opacity: 0;
    animation: toaster-crumb 4.6s infinite;
  }

  .toaster-crumb.c1 { --cx: -26px; --cy: -44px; }
  .toaster-crumb.c2 { --cx: 8px;   --cy: -52px; animation-delay: 0.04s; }
  .toaster-crumb.c3 { --cx: 30px;  --cy: -40px; animation-delay: 0.08s; }

  @keyframes toaster-crumb {
    0%, 69% { transform: translate(0, 0); opacity: 0; }
    72% { opacity: 1; }
    86% { transform: translate(var(--cx), var(--cy)); opacity: 0; }
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

  /* v2: Retro chrome toaster with glowing red-orange heating coils, golden-brown toast, and toasted crumbs */
  .toasterc {
    width: 108px;
    height: 92px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Polished stainless chrome toaster body */
  .toasterc-body {
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 8px;
    height: 46px;
    border: 2px solid #cbd5e1;
    border-radius: 10px 10px 4px 4px;
    background: linear-gradient(180deg, #f8fafc 0%, #cbd5e1 35%, #94a3b8 70%, #64748b 100%);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.9);
  }

  /* Red-hot glowing nichrome heating coils inside slots */
  .toasterc-slot {
    position: absolute;
    top: -2px;
    width: 30px;
    height: 4px;
    border-radius: 2px;
    background: #450a0a;
    animation: toasterc-coil 4.6s ease-in-out infinite;
  }

  .toasterc-slot.s1 { left: 12px; }
  .toasterc-slot.s2 { right: 12px; }

  @keyframes toasterc-coil {
    0%, 8% { background: #450a0a; box-shadow: none; }
    30%, 62% { background: #ef4444; box-shadow: 0 0 10px #f97316, 0 0 18px #ef4444; filter: brightness(1.3); }
    72%, 100% { background: #450a0a; box-shadow: none; }
  }

  /* Black Bakelite feet */
  .toasterc-body::before,
  .toasterc-body::after {
    content: '';
    position: absolute;
    bottom: -8px;
    width: 10px;
    height: 6px;
    border-radius: 0 0 3px 3px;
    background: #09090b;
    border: 0.5px solid #27272a;
  }

  .toasterc-body::before { left: 8px; }
  .toasterc-body::after { right: 8px; }

  /* Bakelite side lever */
  .toasterc-lever {
    position: absolute;
    right: 1px;
    top: 40px;
    width: 7px;
    height: 5px;
    border-radius: 2px;
    background: #18181b;
    border: 1px solid #475569;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
    animation: toasterc-lever 4.6s infinite;
  }

  @keyframes toasterc-lever {
    0%, 4% { transform: translateY(0); }
    10%, 68% { transform: translateY(22px); }
    72%, 100% { transform: translateY(0); }
  }

  /* Golden-brown toasted bread slices */
  .toasterc-toast {
    position: absolute;
    width: 26px;
    height: 30px;
    border: 2px solid #b45309;
    border-radius: 9px 9px 3px 3px;
    background: radial-gradient(circle at 50% 40%, #fde047 0%, #d97706 70%, #92400e 100%);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
    animation: toasterc-pop 4.6s infinite;
  }

  .toasterc-toast.t1 { left: 24px; top: 42px; }
  .toasterc-toast.t2 { right: 24px; top: 42px; animation-name: toasterc-pop2; }

  @keyframes toasterc-pop {
    0%, 68% { transform: translateY(0); opacity: 0; }
    70% { transform: translateY(-26px); opacity: 1; }
    76% { transform: translateY(-34px); }
    82% { transform: translateY(-28px); }
    88%, 96% { transform: translateY(-30px); opacity: 1; }
    100% { transform: translateY(-30px); opacity: 0; }
  }

  @keyframes toasterc-pop2 {
    0%, 68% { transform: translateY(0) rotate(0deg); opacity: 0; }
    71% { transform: translateY(-30px) rotate(-4deg); opacity: 1; }
    77% { transform: translateY(-38px) rotate(3deg); }
    83% { transform: translateY(-31px) rotate(-1deg); }
    89%, 96% { transform: translateY(-33px) rotate(0deg); opacity: 1; }
    100% { transform: translateY(-33px) rotate(0deg); opacity: 0; }
  }

  /* Golden bread crumbs */
  .toasterc-crumb {
    position: absolute;
    top: 40px;
    left: 50%;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #facc15;
    box-shadow: 0 0 2px #d97706;
    opacity: 0;
    animation: toasterc-crumb 4.6s infinite;
  }

  .toasterc-crumb.c1 { --cx: -26px; --cy: -44px; }
  .toasterc-crumb.c2 { --cx: 8px;   --cy: -52px; animation-delay: 0.04s; }
  .toasterc-crumb.c3 { --cx: 30px;  --cy: -40px; animation-delay: 0.08s; }

  @keyframes toasterc-crumb {
    0%, 69% { transform: translate(0, 0); opacity: 0; }
    72% { opacity: 1; }
    86% { transform: translate(var(--cx), var(--cy)); opacity: 0; }
    100% { opacity: 0; }
  }
  `,
};

const toasterMarkup = {
  v1: `
      <div class="toaster">
        <div class="toaster-toast t1"></div>
        <div class="toaster-toast t2"></div>
        <div class="toaster-crumb c1"></div>
        <div class="toaster-crumb c2"></div>
        <div class="toaster-crumb c3"></div>
        <div class="toaster-body">
          <div class="toaster-slot s1"></div>
          <div class="toaster-slot s2"></div>
        </div>
        <div class="toaster-lever"></div>
      </div>
    `,
  v2: `
      <div class="toasterc">
        <div class="toasterc-toast t1"></div>
        <div class="toasterc-toast t2"></div>
        <div class="toasterc-crumb c1"></div>
        <div class="toasterc-crumb c2"></div>
        <div class="toasterc-crumb c3"></div>
        <div class="toasterc-body">
          <div class="toasterc-slot s1"></div>
          <div class="toasterc-slot s2"></div>
        </div>
        <div class="toasterc-lever"></div>
      </div>
    `,
};

class ConceptToaster extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${toasterStyles[version] || toasterStyles.v2}</style>${toasterMarkup[version] || toasterMarkup.v2}`;
  }
}

if (!customElements.get('concept-toaster')) {
  customElements.define('concept-toaster', ConceptToaster);
}
