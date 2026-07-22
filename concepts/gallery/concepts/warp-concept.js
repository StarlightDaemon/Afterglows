const warpStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .warp {
    position: relative;
    width: 104px;
    height: 104px;
    overflow: hidden;
    background: radial-gradient(circle at center, #04140a 0%, #000 65%);
  }

  .warp-streak {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 2px;
    transform-origin: 0 50%;
    transform: rotate(var(--a, 0deg)) translateX(6px);
    animation: warp-shoot 1.4s linear infinite;
  }

  .warp-streak::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(220, 255, 228, 0.95));
    border-radius: 2px;
  }

  .warp-streak.s1 { --a: 8deg; animation-delay: 0s; }
  .warp-streak.s2 { --a: 43deg; animation-delay: -0.5s; }
  .warp-streak.s3 { --a: 74deg; animation-delay: -0.9s; }
  .warp-streak.s4 { --a: 118deg; animation-delay: -0.2s; }
  .warp-streak.s5 { --a: 151deg; animation-delay: -0.7s; }
  .warp-streak.s6 { --a: 187deg; animation-delay: -1.1s; }
  .warp-streak.s7 { --a: 216deg; animation-delay: -0.35s; }
  .warp-streak.s8 { --a: 249deg; animation-delay: -0.85s; }
  .warp-streak.s9 { --a: 288deg; animation-delay: -0.6s; }
  .warp-streak.s10 { --a: 323deg; animation-delay: -1.25s; }
  .warp-streak.s11 { --a: 26deg; animation-delay: -1s; }
  .warp-streak.s12 { --a: 96deg; animation-delay: -1.3s; }
  .warp-streak.s13 { --a: 170deg; animation-delay: -0.45s; }
  .warp-streak.s14 { --a: 268deg; animation-delay: -0.15s; }
  .warp-streak.s15 { --a: 340deg; animation-delay: -0.95s; }

  .warp-core {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 14px;
    height: 14px;
    margin: -7px 0 0 -7px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(240, 255, 244, 0.95) 0 26%, rgba(160, 255, 185, 0.55) 55%, transparent 75%);
    box-shadow: 0 0 16px rgba(180, 255, 195, 0.7);
    animation: warp-core 3.5s ease-in-out infinite;
  }

  .warp-flash {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, rgba(200, 255, 212, 0.5), transparent 60%);
    opacity: 0;
    animation: warp-flash 7s ease-in-out infinite;
  }

  /* Streaks race outward from the vanishing point, stretching as they go.
     The per-streak angle lives in --a so the radial offset stays inside the
     rotated frame. */
  @keyframes warp-shoot {
    0% {
      opacity: 0;
      width: 2px;
      transform: rotate(var(--a, 0deg)) translateX(6px);
    }
    14% { opacity: 1; }
    100% {
      opacity: 0.9;
      width: 44px;
      transform: rotate(var(--a, 0deg)) translateX(58px);
    }
  }

  @keyframes warp-core {
    0%, 100% { transform: scale(0.9); opacity: 0.8; }
    50% { transform: scale(1.2); opacity: 1; }
  }

  @keyframes warp-flash {
    0%, 74%, 100% { opacity: 0; }
    80% { opacity: 1; }
    88% { opacity: 0.2; }
    92% { opacity: 0.55; }
  }
`;

class ConceptWarp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    const streaks = Array.from({ length: 15 }, (_, i) =>
      `<div class="warp-streak s${i + 1}"></div>`
    ).join('');
    this.shadowRoot.innerHTML = `
      <style>${warpStyles}</style>
      <div class="warp">
        ${streaks}
        <div class="warp-core"></div>
        <div class="warp-flash"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-warp')) {
  customElements.define('concept-warp', ConceptWarp);
}
