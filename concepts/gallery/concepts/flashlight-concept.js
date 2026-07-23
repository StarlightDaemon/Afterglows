const flashlightStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Searching a dark room: the torch pans its cone across the scene
     and things exist only while the light is on them - a crate, then
     a pair of eyes that blink back once the beam moves off. */
  .fl {
    width: 116px;
    height: 92px;
    position: relative;
    overflow: hidden;
    background: #020602;
  }

  /* The torch body, bottom-left, panning. */
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

  /* The cone: anchored to the torch, sweeping with it. */
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

  /* Dust motes: only visible inside the beam's general reach. */
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

  /* The crate: lit only when the beam pans across center (30-40%). */
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

  /* The eyes: appear high-left when the beam swings low-left (62%),
     then blink once. */
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

  /* Floor line, faintly lit by spill. */
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
`;

class ConceptFlashlight extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${flashlightStyles}</style>
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
    `;
  }
}

if (!customElements.get('concept-flashlight')) {
  customElements.define('concept-flashlight', ConceptFlashlight);
}
