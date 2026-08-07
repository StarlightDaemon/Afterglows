const octopusStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* An octopus perched on seabed rock: chromatophore patches shift and crossfade
     across its mantle to match the substrate, while eight arms flex and curl
     with independent, asynchronous reach and grip cycles. */
  .oct {
    width: 114px;
    height: 96px;
    position: relative;
  }

  /* Seabed rock perch */
  .oct-rock {
    position: absolute;
    left: 12px;
    bottom: 6px;
    width: 90px;
    height: 22px;
    border-radius: 40% 60% 30% 70% / 60% 40% 60% 40%;
    background: linear-gradient(180deg, rgba(0, 80, 16, 0.9), rgba(0, 25, 5, 0.98));
    border-top: 1.5px solid var(--accent, #00cc00);
  }

  /* Mantle head with chromatophore color-shifting texture */
  .oct-mantle {
    position: absolute;
    left: 42px;
    top: 12px;
    width: 30px;
    height: 38px;
    border-radius: 50% 50% 45% 45% / 60% 60% 40% 40%;
    border: 1.5px solid var(--accent, #00cc00);
    background: radial-gradient(circle at 40% 35%, rgba(0, 160, 35, 0.9), rgba(0, 40, 8, 0.95));
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.3);
    overflow: hidden;
    z-index: 4;
  }

  /* Chromatophore patches: each patch cycles opacity/size on its own
     independent timeline, not as one layer moving together — real skin
     doesn't flash uniformly, individual chromatophore clusters expand and
     contract out of phase with each other. */
  .oct-chroma-patch {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }

  .oct-chroma-patch.p1 {
    left: 3px; top: 4px; width: 9px; height: 9px;
    background: radial-gradient(circle, rgba(190, 255, 205, 0.85) 45%, transparent 65%);
    animation: oct-chroma-cycle 4.6s ease-in-out infinite;
  }

  .oct-chroma-patch.p2 {
    left: 13px; top: 15px; width: 13px; height: 13px;
    background: radial-gradient(circle, rgba(140, 255, 170, 0.75) 40%, transparent 60%);
    animation: oct-chroma-cycle 5.8s ease-in-out infinite;
    animation-delay: -2.1s;
  }

  .oct-chroma-patch.p3 {
    left: 5px; top: 24px; width: 10px; height: 10px;
    background: radial-gradient(circle, rgba(0, 230, 40, 0.75) 40%, transparent 60%);
    animation: oct-chroma-cycle 3.9s ease-in-out infinite;
    animation-delay: -0.8s;
  }

  @keyframes oct-chroma-cycle {
    0%, 100% { opacity: 0.25; transform: scale(0.8); }
    50% { opacity: 0.95; transform: scale(1.25); }
  }

  /* Large intelligent eye */
  .oct-eye {
    position: absolute;
    left: 49px;
    top: 36px;
    width: 8px;
    height: 6px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 5px rgba(140, 255, 170, 0.9);
    z-index: 5;
  }

  .oct-eye::after {
    content: '';
    position: absolute;
    left: 2px;
    top: 2px;
    width: 4px;
    height: 2px;
    background: rgba(0, 30, 6, 0.95);
    border-radius: 1px;
  }

  /* Arms cluster radiating from mantle base */
  .oct-arms {
    position: absolute;
    left: 10px;
    top: 36px;
    width: 94px;
    height: 50px;
    z-index: 3;
  }

  .oct-arm {
    position: absolute;
    border: 1.5px solid var(--accent, #00cc00);
    border-radius: 10px;
    background: linear-gradient(180deg, rgba(0, 130, 26, 0.8), rgba(0, 50, 10, 0.9));
  }

  /* 8 distinct arms with individual curl targets and timings */
  .oct-arm.a1 {
    left: 40px; top: 8px; width: 8px; height: 32px;
    transform-origin: top center;
    animation: oct-curl-1 3.8s ease-in-out infinite;
  }
  .oct-arm.a2 {
    left: 50px; top: 10px; width: 8px; height: 34px;
    transform-origin: top center;
    animation: oct-curl-2 4.4s ease-in-out infinite;
  }
  .oct-arm.a3 {
    left: 30px; top: 8px; width: 22px; height: 8px;
    border-radius: 8px 0 0 8px;
    transform-origin: right center;
    animation: oct-curl-3 3.4s ease-in-out infinite;
  }
  .oct-arm.a4 {
    left: 60px; top: 8px; width: 24px; height: 8px;
    border-radius: 0 8px 8px 0;
    transform-origin: left center;
    animation: oct-curl-4 4.0s ease-in-out infinite;
  }
  .oct-arm.a5 {
    left: 14px; top: 12px; width: 26px; height: 7px;
    border-radius: 10px 0 0 10px;
    transform-origin: right bottom;
    animation: oct-curl-5 4.8s ease-in-out infinite;
  }
  .oct-arm.a6 {
    left: 68px; top: 12px; width: 24px; height: 7px;
    border-radius: 0 10px 10px 0;
    transform-origin: left bottom;
    animation: oct-curl-6 3.6s ease-in-out infinite;
  }
  .oct-arm.a7 {
    left: 36px; top: 16px; width: 10px; height: 26px;
    transform-origin: top left;
    animation: oct-curl-7 4.2s ease-in-out infinite;
  }
  .oct-arm.a8 {
    left: 54px; top: 16px; width: 10px; height: 26px;
    transform-origin: top right;
    animation: oct-curl-8 4.6s ease-in-out infinite;
  }

  @keyframes oct-curl-1 {
    0%, 100% { transform: rotate(-10deg) skewX(4deg); }
    50% { transform: rotate(14deg) skewX(-6deg); }
  }
  @keyframes oct-curl-2 {
    0%, 100% { transform: rotate(12deg) skewX(-4deg); }
    50% { transform: rotate(-16deg) skewX(8deg); }
  }
  @keyframes oct-curl-3 {
    0%, 100% { transform: rotate(-8deg) scaleX(0.9); }
    50% { transform: rotate(12deg) scaleX(1.15); }
  }
  @keyframes oct-curl-4 {
    0%, 100% { transform: rotate(10deg) scaleX(1.1); }
    50% { transform: rotate(-14deg) scaleX(0.85); }
  }
  @keyframes oct-curl-5 {
    0%, 100% { transform: rotate(-15deg); }
    50% { transform: rotate(10deg) scaleY(1.2); }
  }
  @keyframes oct-curl-6 {
    0%, 100% { transform: rotate(18deg); }
    50% { transform: rotate(-8deg) scaleY(1.2); }
  }
  @keyframes oct-curl-7 {
    0%, 100% { transform: rotate(8deg); }
    50% { transform: rotate(-12deg); }
  }
  @keyframes oct-curl-8 {
    0%, 100% { transform: rotate(-10deg); }
    50% { transform: rotate(14deg); }
  }
`;

class ConceptOctopus extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${octopusStyles}</style>
      <div class="oct">
        <div class="oct-rock"></div>
        <div class="oct-arms">
          <div class="oct-arm a1"></div>
          <div class="oct-arm a2"></div>
          <div class="oct-arm a3"></div>
          <div class="oct-arm a4"></div>
          <div class="oct-arm a5"></div>
          <div class="oct-arm a6"></div>
          <div class="oct-arm a7"></div>
          <div class="oct-arm a8"></div>
        </div>
        <div class="oct-mantle">
          <div class="oct-chroma-patch p1"></div>
          <div class="oct-chroma-patch p2"></div>
          <div class="oct-chroma-patch p3"></div>
        </div>
        <div class="oct-eye"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-octopus')) {
  customElements.define('concept-octopus', ConceptOctopus);
}
