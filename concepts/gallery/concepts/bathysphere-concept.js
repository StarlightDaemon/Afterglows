const bathysphereStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A heavy cast-iron bathysphere descending into the abyssal deep:
     swaying gently on its taut suspension cable while a porthole spotlight
     cuts downward through the gloom and marine snow shears upward. */
  .bathy {
    width: 110px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  /* Upward shearing marine snow motes indicating descent. */
  .bathy-mote {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(140, 255, 170, 0.75);
    box-shadow: 0 0 3px rgba(140, 255, 170, 0.5);
    animation: bathy-shear 2.2s linear infinite;
  }

  .bathy-mote.m1 { left: 18px; animation-duration: 1.8s; animation-delay: -0.3s; }
  .bathy-mote.m2 { left: 34px; animation-duration: 2.4s; animation-delay: -1.1s; }
  .bathy-mote.m3 { left: 78px; animation-duration: 1.9s; animation-delay: -0.7s; }
  .bathy-mote.m4 { left: 94px; animation-duration: 2.5s; animation-delay: -1.6s; }

  @keyframes bathy-shear {
    0% { top: 102px; opacity: 0; transform: translateX(0); }
    15% { opacity: 0.8; }
    85% { opacity: 0.8; }
    100% { top: -4px; opacity: 0; transform: translateX(-4px); }
  }

  /* Suspension rig & sphere body swinging on cable pivot. */
  .bathy-rig {
    position: absolute;
    left: 50%;
    top: -10px;
    width: 0;
    height: 0;
    animation: bathy-sway 4.5s ease-in-out infinite;
  }

  @keyframes bathy-sway {
    0%, 100% { transform: rotate(-2.5deg); }
    50% { transform: rotate(2.5deg); }
  }

  /* Steel cable extending up into the dark. */
  .bathy-cable {
    position: absolute;
    left: -1px;
    top: 0;
    width: 2px;
    height: 38px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.4), rgba(0, 204, 0, 0.8));
  }

  /* Lifting lug / top bracket. */
  .bathy-lug {
    position: absolute;
    left: -7px;
    top: 34px;
    width: 14px;
    height: 8px;
    border: 2px solid var(--accent, #00cc00);
    border-bottom: none;
    border-radius: 6px 6px 0 0;
    background: rgba(0, 60, 12, 0.9);
  }

  /* Spherical pressure hull with cast rivets. */
  .bathy-hull {
    position: absolute;
    left: -26px;
    top: 40px;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 2px solid var(--accent, #00cc00);
    background: radial-gradient(circle at 35% 35%, rgba(0, 90, 20, 0.8), rgba(0, 30, 6, 0.95));
    box-shadow: 0 0 10px rgba(0, 204, 0, 0.25), inset 0 0 8px rgba(0, 0, 0, 0.8);
  }

  /* Reinforced equator flange with bolt studs. */
  .bathy-seam {
    position: absolute;
    left: -29px;
    top: 64px;
    width: 58px;
    height: 4px;
    border-radius: 2px;
    background: rgba(0, 180, 20, 0.6);
    border: 1px solid var(--accent, #00cc00);
  }

  /* Quartz porthole window. */
  .bathy-port {
    position: absolute;
    left: -11px;
    top: 55px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2px solid rgba(140, 255, 170, 0.9);
    background: radial-gradient(circle at 40% 40%, rgba(190, 255, 205, 0.95), rgba(0, 204, 0, 0.6) 60%, rgba(0, 40, 8, 0.9));
    box-shadow: 0 0 8px rgba(140, 255, 170, 0.6), inset 0 0 4px rgba(0, 255, 0, 0.8);
  }

  /* Downward spotlight projection cone. */
  .bathy-beam {
    position: absolute;
    left: -32px;
    top: 72px;
    width: 64px;
    height: 38px;
    clip-path: polygon(36% 0%, 64% 0%, 100% 100%, 0% 100%);
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.4), rgba(0, 204, 0, 0.08) 70%, transparent);
    pointer-events: none;
    animation: bathy-beam-flicker 3s ease-in-out infinite;
  }

  @keyframes bathy-beam-flicker {
    0%, 100% { opacity: 0.75; transform: scaleX(1); }
    40% { opacity: 0.9; transform: scaleX(1.04); }
    45% { opacity: 0.65; }
    48% { opacity: 0.85; }
    80% { opacity: 0.7; transform: scaleX(0.97); }
  }
`;

class ConceptBathysphere extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${bathysphereStyles}</style>
      <div class="bathy">
        <div class="bathy-mote m1"></div>
        <div class="bathy-mote m2"></div>
        <div class="bathy-mote m3"></div>
        <div class="bathy-mote m4"></div>
        <div class="bathy-rig">
          <div class="bathy-cable"></div>
          <div class="bathy-lug"></div>
          <div class="bathy-hull"></div>
          <div class="bathy-seam"></div>
          <div class="bathy-port"></div>
          <div class="bathy-beam"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-bathysphere')) {
  customElements.define('concept-bathysphere', ConceptBathysphere);
}
