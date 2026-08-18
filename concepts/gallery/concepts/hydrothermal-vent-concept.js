const hydrothermalVentStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .vent {
    width: 112px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  .vent-bed {
    position: absolute;
    left: 6px;
    bottom: 4px;
    width: 100px;
    height: 14px;
    border-radius: 4px;
    background: linear-gradient(180deg, rgba(0, 90, 18, 0.85), rgba(0, 30, 6, 0.95));
    border-top: 1.5px solid var(--accent, #00cc00);
  }

  .vent-chimney {
    position: absolute;
    left: 42px;
    bottom: 16px;
    width: 28px;
    height: 48px;
    clip-path: polygon(18% 0%, 82% 0%, 94% 28%, 84% 54%, 100% 100%, 0% 100%, 14% 58%, 6% 24%);
    background: linear-gradient(180deg, rgba(0, 150, 30, 0.95), rgba(0, 60, 12, 0.98));
    border: 1px solid var(--accent, #00cc00);
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 255, 100, 0.3);
    transform-origin: bottom center;
    animation: vent-chimney-quake 0.4s ease-in-out infinite alternate;
  }

  @keyframes vent-chimney-quake {
    0% { transform: rotate(-1.5deg) translateY(0); }
    100% { transform: rotate(1.5deg) translateY(-2px); }
  }

  .vent-throat {
    position: absolute;
    left: 45px;
    top: 34px;
    width: 22px;
    height: 6px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, #ffffff, rgba(0, 255, 100, 0.9) 60%, transparent);
    box-shadow: 0 0 12px #00ff66;
    z-index: 3;
    animation: vent-glow 1.2s ease-in-out infinite alternate;
  }

  @keyframes vent-glow {
    0% { opacity: 0.8; transform: scale(0.9); }
    100% { opacity: 1; transform: scale(1.25); filter: drop-shadow(0 0 8px #00ff66); }
  }

  .vent-puff {
    position: absolute;
    left: 48px;
    top: 34px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(214, 255, 224, 0.95), rgba(0, 204, 0, 0.75) 45%, rgba(0, 40, 8, 0.9) 75%, transparent);
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 10px #00ff66;
    animation: vent-billow 1.6s cubic-bezier(0.2, 0.8, 0.3, 1) infinite;
  }

  .vent-puff.p1 { width: 14px; height: 14px; animation-delay: 0s; }
  .vent-puff.p2 { width: 18px; height: 18px; animation-delay: -0.4s; }
  .vent-puff.p3 { width: 22px; height: 22px; animation-delay: -0.8s; }
  .vent-puff.p4 { width: 26px; height: 26px; animation-delay: -1.2s; }

  @keyframes vent-billow {
    0% {
      opacity: 1;
      transform: translate(0, 0) scale(0.6);
    }
    50% {
      opacity: 0.85;
      transform: translate(calc(-10px + var(--shift, 4px)), -26px) scale(1.6);
    }
    100% {
      opacity: 0;
      transform: translate(calc(-18px + var(--shift, 8px)), -50px) scale(2.8);
    }
  }

  .vent-puff.p1 { --shift: 6px; }
  .vent-puff.p2 { --shift: -8px; }
  .vent-puff.p3 { --shift: 10px; }
  .vent-puff.p4 { --shift: -6px; }

  .vent-shrimp {
    position: absolute;
    width: 10px;
    height: 5px;
    border-radius: 3px 6px 6px 2px;
    background: rgba(214, 255, 224, 1);
    box-shadow: 0 0 8px rgba(0, 255, 100, 0.9);
    z-index: 4;
  }

  .vent-shrimp.s1 {
    left: 28px;
    bottom: 22px;
    animation: vent-scuttle-1 2.4s ease-in-out infinite;
  }

  .vent-shrimp.s2 {
    left: 76px;
    bottom: 18px;
    animation: vent-scuttle-2 2.8s ease-in-out infinite;
  }

  @keyframes vent-scuttle-1 {
    0%, 100% { transform: translate(0, 0) scaleX(1); }
    25% { transform: translate(14px, -8px) scaleX(1); }
    50% { transform: translate(22px, -4px) scaleX(-1); }
    75% { transform: translate(6px, 0) scaleX(-1); }
  }

  @keyframes vent-scuttle-2 {
    0%, 100% { transform: translate(0, 0) scaleX(-1); }
    30% { transform: translate(-16px, -6px) scaleX(-1); }
    60% { transform: translate(-8px, 4px) scaleX(1); }
    85% { transform: translate(10px, 0) scaleX(1); }
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

  /* v2: Abyssal black smoker hydrothermal vent with dark basalt chimney,
     incandescent geothermal throat glow, billowing mineral plume, and pale vent shrimp */
  .ventc {
    width: 112px;
    height: 100px;
    position: relative;
    overflow: hidden;
    background: radial-gradient(circle at 50% 50%, #0369a1 0%, #0f172a 60%, #020617 100%);
    border-radius: 6px;
  }

  /* Abyssal seafloor mineral substrate */
  .ventc-bed {
    position: absolute;
    left: 6px;
    bottom: 4px;
    width: 100px;
    height: 14px;
    border-radius: 4px;
    background: linear-gradient(180deg, #334155 0%, #1e293b 50%, #09090b 100%);
    border-top: 1.5px solid #64748b;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
  }

  /* Basalt sulfide chimney tower */
  .ventc-chimney {
    position: absolute;
    left: 42px;
    bottom: 16px;
    width: 28px;
    height: 48px;
    clip-path: polygon(18% 0%, 82% 0%, 94% 28%, 84% 54%, 100% 100%, 0% 100%, 14% 58%, 6% 24%);
    background: linear-gradient(180deg, #78350f 0%, #451a03 40%, #18181b 100%);
    border: 1px solid #a16207;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.9), 0 0 10px rgba(234, 88, 12, 0.4);
    transform-origin: bottom center;
    animation: ventc-chimney-quake 0.4s ease-in-out infinite alternate;
  }

  @keyframes ventc-chimney-quake {
    0% { transform: rotate(-1.5deg) translateY(0); }
    100% { transform: rotate(1.5deg) translateY(-2px); }
  }

  /* Superheated geothermal magma throat orifice */
  .ventc-throat {
    position: absolute;
    left: 45px;
    top: 34px;
    width: 22px;
    height: 6px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, #ffffff 0%, #facc15 30%, #ea580c 70%, transparent 100%);
    box-shadow: 0 0 14px #ea580c, 0 0 20px #facc15;
    z-index: 3;
    animation: ventc-glow 1.2s ease-in-out infinite alternate;
  }

  @keyframes ventc-glow {
    0% { opacity: 0.85; transform: scale(0.9); }
    100% { opacity: 1; transform: scale(1.25); filter: drop-shadow(0 0 10px #f97316); }
  }

  /* Billowing dark sulfide & mineral smoke plume */
  .ventc-puff {
    position: absolute;
    left: 48px;
    top: 34px;
    border-radius: 50%;
    background: radial-gradient(circle, #f97316 0%, #ea580c 25%, #334155 55%, #09090b 80%, transparent 100%);
    border: 1px solid rgba(249, 115, 22, 0.6);
    box-shadow: 0 0 10px rgba(234, 88, 12, 0.6);
    animation: ventc-billow 1.6s cubic-bezier(0.2, 0.8, 0.3, 1) infinite;
  }

  .ventc-puff.p1 { width: 14px; height: 14px; animation-delay: 0s; }
  .ventc-puff.p2 { width: 18px; height: 18px; animation-delay: -0.4s; }
  .ventc-puff.p3 { width: 22px; height: 22px; animation-delay: -0.8s; }
  .ventc-puff.p4 { width: 26px; height: 26px; animation-delay: -1.2s; }

  @keyframes ventc-billow {
    0% {
      opacity: 1;
      transform: translate(0, 0) scale(0.6);
    }
    50% {
      opacity: 0.85;
      transform: translate(calc(-10px + var(--shift, 4px)), -26px) scale(1.6);
    }
    100% {
      opacity: 0;
      transform: translate(calc(-18px + var(--shift, 8px)), -50px) scale(2.8);
    }
  }

  .ventc-puff.p1 { --shift: 6px; }
  .ventc-puff.p2 { --shift: -8px; }
  .ventc-puff.p3 { --shift: 10px; }
  .ventc-puff.p4 { --shift: -6px; }

  /* Pale bioluminescent hydrothermal shrimp */
  .ventc-shrimp {
    position: absolute;
    width: 10px;
    height: 5px;
    border-radius: 3px 6px 6px 2px;
    background: #ffffff;
    box-shadow: 0 0 8px #fdba74, 0 0 12px #f97316;
    z-index: 4;
  }

  .ventc-shrimp.s1 {
    left: 28px;
    bottom: 22px;
    animation: ventc-scuttle-1 2.4s ease-in-out infinite;
  }

  .ventc-shrimp.s2 {
    left: 76px;
    bottom: 18px;
    animation: ventc-scuttle-2 2.8s ease-in-out infinite;
  }

  @keyframes ventc-scuttle-1 {
    0%, 100% { transform: translate(0, 0) scaleX(1); }
    25% { transform: translate(14px, -8px) scaleX(1); }
    50% { transform: translate(22px, -4px) scaleX(-1); }
    75% { transform: translate(6px, 0) scaleX(-1); }
  }

  @keyframes ventc-scuttle-2 {
    0%, 100% { transform: translate(0, 0) scaleX(-1); }
    30% { transform: translate(-16px, -6px) scaleX(-1); }
    60% { transform: translate(-8px, 4px) scaleX(1); }
    85% { transform: translate(10px, 0) scaleX(1); }
  }
  `,
};

const hydrothermalVentMarkup = {
  v1: `
      <div class="vent">
        <div class="vent-puff p4"></div>
        <div class="vent-puff p3"></div>
        <div class="vent-puff p2"></div>
        <div class="vent-puff p1"></div>
        <div class="vent-throat"></div>
        <div class="vent-chimney"></div>
        <div class="vent-bed"></div>
        <div class="vent-shrimp s1"></div>
        <div class="vent-shrimp s2"></div>
      </div>
    `,
  v2: `
      <div class="ventc">
        <div class="ventc-puff p4"></div>
        <div class="ventc-puff p3"></div>
        <div class="ventc-puff p2"></div>
        <div class="ventc-puff p1"></div>
        <div class="ventc-throat"></div>
        <div class="ventc-chimney"></div>
        <div class="ventc-bed"></div>
        <div class="ventc-shrimp s1"></div>
        <div class="ventc-shrimp s2"></div>
      </div>
    `,
};

class ConceptHydrothermalVent extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${hydrothermalVentStyles[version] || hydrothermalVentStyles.v2}</style>${hydrothermalVentMarkup[version] || hydrothermalVentMarkup.v2}`;
  }
}

if (!customElements.get('concept-hydrothermal-vent')) {
  customElements.define('concept-hydrothermal-vent', ConceptHydrothermalVent);
}
