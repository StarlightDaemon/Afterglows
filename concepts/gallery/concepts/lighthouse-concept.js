const lighthouseStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Night watch: the lamp room's twin beam sweeps the horizon, the
     lantern flares each time a beam faces out, and surf rolls at the
     rock line under a few slow stars. */
  .lh {
    width: 108px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  /* Stars. */
  .lh-star {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.9);
    animation: lh-star ease-in-out infinite;
  }

  .lh-star.s1 { left: 12px; top: 12px; animation-duration: 3s; }
  .lh-star.s2 { left: 88px; top: 8px; animation-duration: 4s; animation-delay: -1.5s; }
  .lh-star.s3 { left: 72px; top: 26px; animation-duration: 3.5s; animation-delay: -2.2s; }

  @keyframes lh-star {
    0%, 100% { opacity: 0.25; }
    50% { opacity: 0.9; }
  }

  /* The rotating beam: a conic gradient with two opposed lobes,
     centred on the lamp room. */
  .lh-beam {
    position: absolute;
    left: 50%;
    top: 30px;
    width: 240px;
    height: 240px;
    margin: -120px 0 0 -120px;
    border-radius: 50%;
    background: conic-gradient(
      transparent 0deg,
      rgba(140, 255, 170, 0.28) 8deg,
      transparent 20deg,
      transparent 180deg,
      rgba(140, 255, 170, 0.28) 188deg,
      transparent 200deg);
    animation: lh-beam 6s linear infinite;
  }

  @keyframes lh-beam {
    to { transform: rotate(360deg); }
  }

  /* Tower: tapered with candy bands. */
  .lh-tower {
    position: absolute;
    left: 50%;
    bottom: 14px;
    width: 26px;
    height: 52px;
    margin-left: -13px;
    clip-path: polygon(24% 0, 76% 0, 100% 100%, 0 100%);
    background: repeating-linear-gradient(-18deg,
      rgba(0, 190, 38, 0.75) 0 8px,
      rgba(0, 60, 12, 0.85) 8px 16px);
  }

  /* Gallery rail under the lamp room. */
  .lh-rail {
    position: absolute;
    left: 50%;
    bottom: 64px;
    width: 30px;
    height: 3px;
    margin-left: -15px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.85);
  }

  /* Lamp room. */
  .lh-lamp {
    position: absolute;
    left: 50%;
    bottom: 67px;
    width: 16px;
    height: 12px;
    margin-left: -8px;
    border: 1px solid rgba(140, 255, 170, 0.9);
    border-radius: 3px 3px 0 0;
    background: rgba(0, 60, 12, 0.6);
    overflow: hidden;
  }

  /* The lantern inside: flares twice per beam revolution, when a
     lobe points at the viewer. */
  .lh-lantern {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 8px;
    height: 8px;
    margin: -4px 0 0 -4px;
    border-radius: 50%;
    background: radial-gradient(circle, #f2ffdd, #baffc9 60%);
    animation: lh-lantern 3s ease-in-out infinite;
  }

  @keyframes lh-lantern {
    0%, 100% { box-shadow: 0 0 4px rgba(0, 204, 0, 0.5); opacity: 0.6; }
    50% { box-shadow: 0 0 16px rgba(214, 255, 224, 1), 0 0 30px rgba(0, 204, 0, 0.6); opacity: 1; }
  }

  /* Roof cap. */
  .lh-cap {
    position: absolute;
    left: 50%;
    bottom: 79px;
    width: 20px;
    height: 8px;
    margin-left: -10px;
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
    background: rgba(0, 190, 38, 0.85);
  }

  /* Rocks. */
  .lh-rock {
    position: absolute;
    bottom: 8px;
    border-radius: 40% 50% 30% 45%;
    background: linear-gradient(180deg, rgba(0, 110, 22, 0.7), rgba(0, 40, 8, 0.9));
  }

  .lh-rock.r1 { left: 24px; width: 26px; height: 12px; }
  .lh-rock.r2 { left: 52px; width: 34px; height: 15px; bottom: 6px; }
  .lh-rock.r3 { left: 10px; width: 16px; height: 8px; bottom: 6px; }

  /* Surf: two foam lines rolling in and dissolving. */
  .lh-surf {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 4px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, transparent, rgba(140, 255, 170, 0.65), rgba(140, 255, 170, 0.3), transparent);
    animation: lh-surf 4.4s ease-in-out infinite;
  }

  .lh-surf.f2 { bottom: 0; animation-delay: -2.2s; opacity: 0.7; }

  @keyframes lh-surf {
    0% { transform: translateX(26px) scaleX(0.85); opacity: 0; }
    35% { opacity: 0.9; }
    70% { transform: translateX(-8px) scaleX(1.05); opacity: 0.4; }
    100% { transform: translateX(-20px) scaleX(1.1); opacity: 0; }
  }
`;

class ConceptLighthouse extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${lighthouseStyles}</style>
      <div class="lh">
        <div class="lh-star s1"></div>
        <div class="lh-star s2"></div>
        <div class="lh-star s3"></div>
        <div class="lh-beam"></div>
        <div class="lh-tower"></div>
        <div class="lh-rail"></div>
        <div class="lh-lamp"><div class="lh-lantern"></div></div>
        <div class="lh-cap"></div>
        <div class="lh-rock r1"></div>
        <div class="lh-rock r2"></div>
        <div class="lh-rock r3"></div>
        <div class="lh-surf"></div>
        <div class="lh-surf f2"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-lighthouse')) {
  customElements.define('concept-lighthouse', ConceptLighthouse);
}
