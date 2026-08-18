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
    animation: toaster-shake 0.6s ease-in-out infinite alternate;
  }

  @keyframes toaster-shake {
    0% { transform: translateY(0) rotate(-0.5deg); }
    100% { transform: translateY(-1.5px) rotate(0.5deg); }
  }

  .toaster-body {
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 8px;
    height: 46px;
    border: 2px solid #00ff66;
    border-radius: 10px 10px 4px 4px;
    background: linear-gradient(180deg, rgba(0, 70, 14, 0.8), rgba(0, 30, 6, 0.95));
    box-shadow: inset 0 0 10px rgba(0, 255, 100, 0.3), 0 0 10px rgba(0, 255, 100, 0.3);
  }

  .toaster-slot {
    position: absolute;
    top: -2px;
    width: 30px;
    height: 4px;
    border-radius: 2px;
    background: #00ff66;
    box-shadow: 0 0 8px #00ff66;
  }

  .toaster-slot.s1 { left: 12px; }
  .toaster-slot.s2 { right: 12px; }

  .toaster-body::before,
  .toaster-body::after {
    content: '';
    position: absolute;
    bottom: -8px;
    width: 10px;
    height: 6px;
    border-radius: 0 0 3px 3px;
    background: #00ff66;
  }

  .toaster-body::before { left: 8px; }
  .toaster-body::after { right: 8px; }

  .toaster-lever {
    position: absolute;
    right: 1px;
    top: 40px;
    width: 8px;
    height: 6px;
    border-radius: 2px;
    background: #ffffff;
    box-shadow: 0 0 6px #00ff66;
    animation: toaster-lever 1.2s ease-in-out infinite alternate;
  }

  @keyframes toaster-lever {
    0% { transform: translateY(22px); }
    100% { transform: translateY(0); }
  }

  .toaster-toast {
    position: absolute;
    width: 26px;
    height: 30px;
    border: 2px solid #ffffff;
    border-radius: 9px 9px 3px 3px;
    background: linear-gradient(180deg, #ffffff, #00ff66 70%);
    box-shadow: 0 0 10px rgba(0, 255, 100, 0.5);
    animation: toaster-pop 1.2s ease-in-out infinite alternate;
  }

  .toaster-toast.t1 { left: 24px; top: 42px; }
  .toaster-toast.t2 { right: 24px; top: 42px; animation-name: toaster-pop2; animation-delay: -0.3s; }

  @keyframes toaster-pop {
    0% { transform: translateY(0) rotate(-2deg); }
    100% { transform: translateY(-34px) rotate(4deg); }
  }

  @keyframes toaster-pop2 {
    0% { transform: translateY(0) rotate(2deg); }
    100% { transform: translateY(-38px) rotate(-6deg); }
  }

  .toaster-crumb {
    position: absolute;
    top: 36px;
    left: 50%;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 4px #00ff66;
    animation: toaster-crumb 1.2s ease-out infinite;
  }

  .toaster-crumb.c1 { --cx: -26px; --cy: -32px; animation-delay: 0s; }
  .toaster-crumb.c2 { --cx: 8px;   --cy: -40px; animation-delay: -0.4s; }
  .toaster-crumb.c3 { --cx: 30px;  --cy: -28px; animation-delay: -0.8s; }

  @keyframes toaster-crumb {
    0% { transform: translate(0, 0) scale(1); opacity: 1; }
    100% { transform: translate(var(--cx), var(--cy)) scale(0.3); opacity: 0; }
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

  /* v2: Retro chrome toaster */
  .toasterc {
    width: 108px;
    height: 92px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
    animation: toasterc-shake 0.6s ease-in-out infinite alternate;
  }

  @keyframes toasterc-shake {
    0% { transform: translateY(0) rotate(-0.5deg); }
    100% { transform: translateY(-1.5px) rotate(0.5deg); }
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
    background: #ef4444;
    box-shadow: 0 0 10px #f97316, 0 0 18px #ef4444;
  }

  .toasterc-slot.s1 { left: 12px; }
  .toasterc-slot.s2 { right: 12px; }

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
    width: 8px;
    height: 6px;
    border-radius: 2px;
    background: #18181b;
    border: 1px solid #475569;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
    animation: toasterc-lever 1.2s ease-in-out infinite alternate;
  }

  @keyframes toasterc-lever {
    0% { transform: translateY(22px); }
    100% { transform: translateY(0); }
  }

  /* Golden-brown toasted bread slices */
  .toasterc-toast {
    position: absolute;
    width: 26px;
    height: 30px;
    border: 2px solid #b45309;
    border-radius: 9px 9px 3px 3px;
    background: radial-gradient(circle at 50% 40%, #fde047 0%, #d97706 70%, #92400e 100%);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    animation: toasterc-pop 1.2s ease-in-out infinite alternate;
  }

  .toasterc-toast.t1 { left: 24px; top: 42px; }
  .toasterc-toast.t2 { right: 24px; top: 42px; animation-name: toasterc-pop2; animation-delay: -0.3s; }

  @keyframes toasterc-pop {
    0% { transform: translateY(0) rotate(-2deg); }
    100% { transform: translateY(-34px) rotate(4deg); }
  }

  @keyframes toasterc-pop2 {
    0% { transform: translateY(0) rotate(2deg); }
    100% { transform: translateY(-38px) rotate(-6deg); }
  }

  /* Golden bread crumbs */
  .toasterc-crumb {
    position: absolute;
    top: 36px;
    left: 50%;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #facc15;
    box-shadow: 0 0 4px #d97706;
    animation: toasterc-crumb 1.2s ease-out infinite;
  }

  .toasterc-crumb.c1 { --cx: -26px; --cy: -32px; animation-delay: 0s; }
  .toasterc-crumb.c2 { --cx: 8px;   --cy: -40px; animation-delay: -0.4s; }
  .toasterc-crumb.c3 { --cx: 30px;  --cy: -28px; animation-delay: -0.8s; }

  @keyframes toasterc-crumb {
    0% { transform: translate(0, 0) scale(1); opacity: 1; }
    100% { transform: translate(var(--cx), var(--cy)) scale(0.3); opacity: 0; }
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
