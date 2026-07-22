const ghostStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ghost-scene {
    position: relative;
    width: 104px;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ghost {
    position: relative;
    width: 46px;
    height: 58px;
    animation: ghost-float 4.2s ease-in-out infinite, ghost-phase 8.4s ease-in-out infinite;
  }

  .ghost-body {
    position: absolute;
    inset: 0;
    border-radius: 23px 23px 0 0;
    background: linear-gradient(180deg, rgba(210, 255, 220, 0.55) 0%, rgba(140, 255, 170, 0.3) 70%, rgba(120, 255, 150, 0.12) 100%);
    box-shadow: inset 0 0 12px rgba(220, 255, 228, 0.35), 0 0 16px rgba(0, 204, 0, 0.2);
    filter: blur(0.4px);
  }

  /* Scalloped hem: three tapering tails that sway independently. */
  .ghost-tail {
    position: absolute;
    bottom: -9px;
    width: 15px;
    height: 14px;
    border-radius: 0 0 50% 50%;
    background: rgba(140, 255, 170, 0.22);
    transform-origin: top center;
    animation: ghost-tail 2.6s ease-in-out infinite;
  }

  .ghost-tail.t1 { left: 0; animation-delay: 0s; }
  .ghost-tail.t2 { left: 15px; animation-delay: -0.9s; height: 17px; }
  .ghost-tail.t3 { left: 31px; animation-delay: -1.7s; }

  .ghost-eye {
    position: absolute;
    top: 20px;
    width: 7px;
    height: 10px;
    border-radius: 50%;
    background: #020a04;
    box-shadow: inset 0 0 3px rgba(0, 204, 0, 0.6);
    animation: ghost-eyes 8.4s ease-in-out infinite;
  }

  .ghost-eye.left { left: 11px; }
  .ghost-eye.right { right: 11px; }

  .ghost-mouth {
    position: absolute;
    top: 36px;
    left: 50%;
    width: 6px;
    height: 8px;
    margin-left: -3px;
    border-radius: 50%;
    background: #020a04;
    animation: ghost-mouth 4.2s ease-in-out infinite;
  }

  .ghost-wisp {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.7);
    filter: blur(0.5px);
    opacity: 0;
    animation: ghost-wisp 3.4s ease-out infinite;
  }

  .ghost-wisp.w1 { left: 22px; bottom: 30px; animation-delay: 0s; }
  .ghost-wisp.w2 { left: 74px; bottom: 40px; animation-delay: -1.2s; }
  .ghost-wisp.w3 { left: 50px; bottom: 22px; animation-delay: -2.3s; }

  @keyframes ghost-float {
    0%, 100% { transform: translateY(0) rotate(-2deg); }
    50% { transform: translateY(-9px) rotate(2.5deg); }
  }

  /* Slow corporeality cycle — the ghost thins out and re-forms. */
  @keyframes ghost-phase {
    0%, 34%, 100% { opacity: 1; }
    46% { opacity: 0.25; }
    52% { opacity: 0.55; }
    58% { opacity: 0.2; }
    72% { opacity: 1; }
  }

  @keyframes ghost-tail {
    0%, 100% { transform: skewX(-8deg) scaleY(1); }
    50% { transform: skewX(9deg) scaleY(1.18); }
  }

  @keyframes ghost-eyes {
    0%, 40%, 100% { transform: translateX(0); }
    12% { transform: translateX(-2.5px); }
    26% { transform: translateX(2.5px); }
    46% { transform: scaleY(0.1); }
    49% { transform: scaleY(1); }
  }

  @keyframes ghost-mouth {
    0%, 100% { transform: scaleY(0.55); }
    50% { transform: scaleY(1.25); }
  }

  @keyframes ghost-wisp {
    0% { opacity: 0; transform: translate(0, 0) scale(1); }
    18% { opacity: 0.85; }
    100% { opacity: 0; transform: translate(4px, -26px) scale(0.4); }
  }
`;

class ConceptGhost extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${ghostStyles}</style>
      <div class="ghost-scene">
        <div class="ghost">
          <div class="ghost-body"></div>
          <div class="ghost-tail t1"></div>
          <div class="ghost-tail t2"></div>
          <div class="ghost-tail t3"></div>
          <div class="ghost-eye left"></div>
          <div class="ghost-eye right"></div>
          <div class="ghost-mouth"></div>
        </div>
        <div class="ghost-wisp w1"></div>
        <div class="ghost-wisp w2"></div>
        <div class="ghost-wisp w3"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-ghost')) {
  customElements.define('concept-ghost', ConceptGhost);
}
