const projectorStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Movie night: reels turn, the shutter flickers the cone, frames
     jump on the little screen, and midway through the film slips a
     sprocket - the image jitters, then steadies. */
  .prj {
    width: 116px;
    height: 92px;
    position: relative;
  }

  /* Projector body, left side. */
  .prj-body {
    position: absolute;
    left: 2px;
    bottom: 18px;
    width: 40px;
    height: 22px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 4px 8px 4px 4px;
    background: linear-gradient(180deg, rgba(0, 60, 12, 0.6), rgba(0, 25, 5, 0.85));
  }

  /* Lens snout. */
  .prj-lens {
    position: absolute;
    left: 42px;
    bottom: 24px;
    width: 8px;
    height: 10px;
    border-radius: 0 3px 3px 0;
    background: rgba(140, 255, 170, 0.9);
    animation: prj-lens 0.18s steps(2) infinite;
  }

  @keyframes prj-lens {
    0% { box-shadow: 0 0 8px rgba(214, 255, 224, 0.9); }
    100% { box-shadow: 0 0 3px rgba(214, 255, 224, 0.4); }
  }

  /* Reels: spoked discs turning at film speed. */
  .prj-reel {
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid rgba(140, 255, 170, 0.85);
    background:
      repeating-conic-gradient(rgba(140, 255, 170, 0.75) 0 14deg, transparent 14deg 60deg),
      radial-gradient(circle, rgba(0, 90, 18, 0.9) 0 26%, rgba(0, 35, 7, 0.85) 30%);
    box-sizing: border-box;
    animation: prj-reel 1.6s linear infinite;
  }

  .prj-reel.r1 { left: 4px; bottom: 42px; }
  .prj-reel.r2 { left: 26px; bottom: 46px; width: 18px; height: 18px; animation-duration: 1.1s; }

  @keyframes prj-reel {
    to { transform: rotate(360deg); }
  }

  /* Film path between the reels and the body. */
  .prj-film {
    position: absolute;
    left: 14px;
    bottom: 42px;
    width: 22px;
    height: 8px;
    border-top: 1.5px solid rgba(190, 255, 205, 0.7);
    animation: prj-film 5.5s steps(1) infinite;
  }

  /* The mid-reel slip: the loop sags for a beat. */
  @keyframes prj-film {
    0%, 44% { transform: translateY(0); border-top-style: solid; }
    46%, 54% { transform: translateY(2px); border-top-style: dashed; }
    56%, 100% { transform: translateY(0); border-top-style: solid; }
  }

  /* Light cone: flickers at shutter rate, dies briefly at the slip. */
  .prj-cone {
    position: absolute;
    left: 50px;
    bottom: 16px;
    width: 44px;
    height: 40px;
    clip-path: polygon(0 42%, 100% 0, 100% 100%, 0 58%);
    background: linear-gradient(90deg,
      rgba(214, 255, 224, 0.45),
      rgba(140, 255, 170, 0.12));
    animation: prj-shutter 0.18s steps(2) infinite, prj-conegate 5.5s steps(1) infinite;
  }

  @keyframes prj-shutter {
    0% { opacity: 1; }
    100% { opacity: 0.75; }
  }

  @keyframes prj-conegate {
    0%, 44% { visibility: visible; }
    46%, 53% { visibility: hidden; }
    54%, 100% { visibility: visible; }
  }

  /* The screen, right side. */
  .prj-screen {
    position: absolute;
    right: 0;
    top: 8px;
    width: 26px;
    height: 60px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 2px;
    background: rgba(0, 30, 6, 0.8);
    overflow: hidden;
  }

  /* The picture: brightness/gradient jumps read as cuts between
     frames; jitters during the slip. */
  .prj-picture {
    position: absolute;
    inset: 2px;
    animation: prj-cuts 5.5s steps(1) infinite, prj-jitter 5.5s infinite;
  }

  @keyframes prj-cuts {
    0% { background: linear-gradient(180deg, rgba(140, 255, 170, 0.55) 0 42%, rgba(0, 110, 22, 0.5) 42% 100%); }
    16% { background: linear-gradient(180deg, rgba(0, 110, 22, 0.45) 0 28%, rgba(190, 255, 205, 0.6) 28% 62%, rgba(0, 80, 16, 0.5) 62%); }
    30% { background: radial-gradient(circle at 50% 40%, rgba(214, 255, 224, 0.75) 0 22%, rgba(0, 90, 18, 0.5) 45%); }
    46% { background: rgba(0, 60, 12, 0.35); }
    56% { background: linear-gradient(135deg, rgba(140, 255, 170, 0.5) 0 40%, rgba(0, 90, 18, 0.55) 40%); }
    72% { background: linear-gradient(180deg, rgba(190, 255, 205, 0.65) 0 30%, rgba(0, 110, 22, 0.5) 30%); }
    88% { background: radial-gradient(circle at 40% 60%, rgba(214, 255, 224, 0.7) 0 18%, rgba(0, 80, 16, 0.5) 42%); }
  }

  @keyframes prj-jitter {
    0%, 44% { transform: translateY(0); }
    46% { transform: translateY(-2px); }
    48% { transform: translateY(2px); }
    50% { transform: translateY(-1px); }
    52% { transform: translateY(1px); }
    54%, 100% { transform: translateY(0); }
  }

  /* Scanline texture over the picture. */
  .prj-scan {
    position: absolute;
    inset: 2px;
    background: repeating-linear-gradient(0deg,
      rgba(0, 0, 0, 0.3) 0 1px,
      transparent 1px 3px);
    pointer-events: none;
  }

  /* Dust drifting through the cone. */
  .prj-dust {
    position: absolute;
    width: 1.5px;
    height: 1.5px;
    border-radius: 50%;
    background: rgba(214, 255, 224, 0.85);
    animation: prj-dust linear infinite;
  }

  .prj-dust.d1 { left: 58px; top: 36px; animation-duration: 3.4s; }
  .prj-dust.d2 { left: 70px; top: 44px; animation-duration: 4.2s; animation-delay: -1.8s; }
  .prj-dust.d3 { left: 64px; top: 52px; animation-duration: 3.8s; animation-delay: -2.6s; }

  @keyframes prj-dust {
    0% { transform: translate(0, 0); opacity: 0; }
    18% { opacity: 0.9; }
    82% { opacity: 0.6; }
    100% { transform: translate(14px, -8px); opacity: 0; }
  }

  /* Table line. */
  .prj-table {
    position: absolute;
    left: 0;
    width: 52px;
    bottom: 14px;
    height: 2px;
    background: rgba(0, 204, 0, 0.5);
  }
`;

class ConceptProjector extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${projectorStyles}</style>
      <div class="prj">
        <div class="prj-cone"></div>
        <div class="prj-dust d1"></div>
        <div class="prj-dust d2"></div>
        <div class="prj-dust d3"></div>
        <div class="prj-reel r1"></div>
        <div class="prj-reel r2"></div>
        <div class="prj-film"></div>
        <div class="prj-body"></div>
        <div class="prj-lens"></div>
        <div class="prj-table"></div>
        <div class="prj-screen">
          <div class="prj-picture"></div>
          <div class="prj-scan"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-projector')) {
  customElements.define('concept-projector', ConceptProjector);
}
