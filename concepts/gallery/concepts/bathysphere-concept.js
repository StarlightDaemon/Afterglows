const bathysphereStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .bathy {
    width: 110px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

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

  .bathy-cable {
    position: absolute;
    left: -1px;
    top: 0;
    width: 2px;
    height: 38px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.4), rgba(0, 204, 0, 0.8));
  }

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
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Deep-sea canary yellow exploration bathysphere with steel suspension cable,
     warm quartz porthole, penetrating halogen floodlight beam, and bioluminescent marine snow */
  .bathyc {
    width: 110px;
    height: 100px;
    position: relative;
    overflow: hidden;
    background: radial-gradient(circle at 50% 50%, #0369a1 0%, #0c4a6e 40%, #020617 100%);
    border-radius: 6px;
  }

  /* Upward shearing bioluminescent marine snow motes */
  .bathyc-mote {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #38bdf8;
    box-shadow: 0 0 4px #00f0ff;
    animation: bathyc-shear 2.2s linear infinite;
  }

  .bathyc-mote.m1 { left: 18px; animation-duration: 1.8s; animation-delay: -0.3s; }
  .bathyc-mote.m2 { left: 34px; animation-duration: 2.4s; animation-delay: -1.1s; background: #86efac; }
  .bathyc-mote.m3 { left: 78px; animation-duration: 1.9s; animation-delay: -0.7s; }
  .bathyc-mote.m4 { left: 94px; animation-duration: 2.5s; animation-delay: -1.6s; background: #c084fc; }

  @keyframes bathyc-shear {
    0% { top: 102px; opacity: 0; transform: translateX(0); }
    15% { opacity: 0.9; }
    85% { opacity: 0.9; }
    100% { top: -4px; opacity: 0; transform: translateX(-4px); }
  }

  /* Suspension rig swaying */
  .bathyc-rig {
    position: absolute;
    left: 50%;
    top: -10px;
    width: 0;
    height: 0;
    animation: bathyc-sway 4.5s ease-in-out infinite;
  }

  @keyframes bathyc-sway {
    0%, 100% { transform: rotate(-2.5deg); }
    50% { transform: rotate(2.5deg); }
  }

  /* High-tensile steel cable */
  .bathyc-cable {
    position: absolute;
    left: -1px;
    top: 0;
    width: 2px;
    height: 38px;
    background: linear-gradient(180deg, #94a3b8 0%, #475569 100%);
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
  }

  /* Cast steel lifting eye lug */
  .bathyc-lug {
    position: absolute;
    left: -7px;
    top: 34px;
    width: 14px;
    height: 8px;
    border: 2px solid #ca8a04;
    border-bottom: none;
    border-radius: 6px 6px 0 0;
    background: #854d0e;
  }

  /* Canary yellow spherical steel hull */
  .bathyc-hull {
    position: absolute;
    left: -26px;
    top: 40px;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 2px solid #eab308;
    background: radial-gradient(circle at 35% 35%, #fef08a 0%, #facc15 45%, #ca8a04 80%, #713f12 100%);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.9), inset 0 2px 4px #ffffff;
  }

  /* Equator flange ring with bolts */
  .bathyc-seam {
    position: absolute;
    left: -29px;
    top: 64px;
    width: 58px;
    height: 4px;
    border-radius: 2px;
    background: #a16207;
    border: 1px solid #eab308;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  }

  /* Illuminated thick quartz porthole window */
  .bathyc-port {
    position: absolute;
    left: -11px;
    top: 55px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2.5px solid #475569;
    background: radial-gradient(circle at 40% 40%, #ffffff 0%, #fde047 30%, #38bdf8 70%, #0369a1 100%);
    box-shadow: 0 0 10px #facc15, inset 0 0 6px #00f0ff;
  }

  /* Penetrating halogen floodlight cone */
  .bathyc-beam {
    position: absolute;
    left: -32px;
    top: 72px;
    width: 64px;
    height: 38px;
    clip-path: polygon(36% 0%, 64% 0%, 100% 100%, 0% 100%);
    background: linear-gradient(180deg, rgba(254, 240, 138, 0.7) 0%, rgba(56, 189, 248, 0.25) 60%, transparent 100%);
    pointer-events: none;
    animation: bathyc-beam-flicker 3s ease-in-out infinite;
  }

  @keyframes bathyc-beam-flicker {
    0%, 100% { opacity: 0.75; transform: scaleX(1); }
    40% { opacity: 0.95; transform: scaleX(1.04); }
    45% { opacity: 0.65; }
    48% { opacity: 0.9; }
    80% { opacity: 0.7; transform: scaleX(0.97); }
  }
  `,
};

const bathysphereMarkup = {
  v1: `
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
    `,
  v2: `
      <div class="bathyc">
        <div class="bathyc-mote m1"></div>
        <div class="bathyc-mote m2"></div>
        <div class="bathyc-mote m3"></div>
        <div class="bathyc-mote m4"></div>
        <div class="bathyc-rig">
          <div class="bathyc-cable"></div>
          <div class="bathyc-lug"></div>
          <div class="bathyc-hull"></div>
          <div class="bathyc-seam"></div>
          <div class="bathyc-port"></div>
          <div class="bathyc-beam"></div>
        </div>
      </div>
    `,
};

class ConceptBathysphere extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${bathysphereStyles[version] || bathysphereStyles.v2}</style>${bathysphereMarkup[version] || bathysphereMarkup.v2}`;
  }
}

if (!customElements.get('concept-bathysphere')) {
  customElements.define('concept-bathysphere', ConceptBathysphere);
}
