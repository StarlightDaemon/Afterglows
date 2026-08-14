const volcanoStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: Single-color phosphor volcano --- */
  .volcano {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
  }

  .volcano-cone {
    position: absolute;
    bottom: 10px;
    left: 50%;
    width: 76px;
    height: 52px;
    margin-left: -38px;
    clip-path: polygon(50% 0%, 62% 4%, 100% 100%, 0% 100%, 38% 4%);
    background: linear-gradient(180deg, #123c1e 0%, #0a2411 55%, #051206 100%);
    box-shadow: inset 0 4px 8px rgba(140, 255, 165, 0.12);
  }

  .volcano-cone::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background: rgba(0, 204, 0, 0.4);
  }

  .volcano-glow {
    position: absolute;
    bottom: 58px;
    left: 50%;
    width: 26px;
    height: 10px;
    margin-left: -13px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(190, 255, 160, 0.9), rgba(0, 204, 0, 0.25) 70%, transparent);
    filter: blur(1px);
    animation: volcano-glow 4.8s ease-in-out infinite;
  }

  .volcano-bomb {
    position: absolute;
    bottom: 60px;
    left: 50%;
    width: 4px;
    height: 4px;
    margin-left: -2px;
    border-radius: 50%;
    background: #d8ffbb;
    box-shadow: 0 0 7px rgba(200, 255, 170, 0.8);
    opacity: 0;
    animation: volcano-bomb 4.8s cubic-bezier(0.25, 0.6, 0.6, 1) infinite;
  }

  .volcano-bomb.v1 { --arc-x: -26px; --arc-peak: -34px; }
  .volcano-bomb.v2 { --arc-x: 22px;  --arc-peak: -40px; animation-delay: 0.12s; }
  .volcano-bomb.v3 { --arc-x: -9px;  --arc-peak: -46px; animation-delay: 0.22s; width: 3px; height: 3px; }
  .volcano-bomb.v4 { --arc-x: 13px;  --arc-peak: -30px; animation-delay: 0.3s;  width: 3px; height: 3px; }

  .volcano-lava {
    position: absolute;
    bottom: 26px;
    left: 50%;
    width: 4px;
    height: 34px;
    margin-left: -6px;
    border-radius: 0 0 3px 3px;
    background: linear-gradient(180deg, rgba(216, 255, 187, 0.95), rgba(120, 230, 110, 0.55));
    box-shadow: 0 0 6px rgba(160, 255, 130, 0.5);
    transform-origin: top center;
    transform: rotate(14deg);
    animation: volcano-lava 4.8s ease-out infinite;
  }

  .volcano-ash {
    position: absolute;
    bottom: 64px;
    left: 50%;
    width: 14px;
    height: 14px;
    margin-left: -7px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(120, 200, 140, 0.4), transparent 70%);
    filter: blur(1.5px);
    animation: volcano-ash 4.8s ease-out infinite;
  }

  .volcano-ground {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 8px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 204, 0, 0.45), transparent);
  }

  @keyframes volcano-glow {
    0%, 4% { opacity: 0.25; transform: scale(0.8); }
    10% { opacity: 1; transform: scale(1.25); }
    14% { opacity: 0.9; }
    38% { opacity: 0.55; transform: scale(1); }
    70%, 100% { opacity: 0.25; transform: scale(0.8); }
  }

  @keyframes volcano-bomb {
    0%, 10% { opacity: 0; transform: translate(0, 0) scale(1); }
    13% { opacity: 1; }
    24% { transform: translate(calc(var(--arc-x, 20px) * 0.6), var(--arc-peak, -38px)) scale(1); opacity: 1; }
    38% { transform: translate(var(--arc-x, 20px), 12px) scale(0.5); opacity: 0; }
    100% { opacity: 0; transform: translate(var(--arc-x, 20px), 12px) scale(0.5); }
  }

  @keyframes volcano-lava {
    0%, 14% { transform: rotate(14deg) scaleY(0); opacity: 0; }
    22% { opacity: 1; }
    42% { transform: rotate(14deg) scaleY(1); opacity: 0.95; }
    62% { opacity: 0.55; }
    78%, 100% { transform: rotate(14deg) scaleY(1); opacity: 0; }
  }

  @keyframes volcano-ash {
    0%, 50% { opacity: 0; transform: translateY(0) scale(0.6); }
    60% { opacity: 0.85; }
    92%, 100% { opacity: 0; transform: translateY(-34px) scale(1.7); }
  }

  /* --- v2: Igneous volcanology & basalt eruption physics ---
     Dark obsidian/basalt stratocone mountain, incandescent golden/orange magma glow,
     blazing molten lava bombs, and billowing volcanic ash plume. */
  .voc {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
  }

  .voc-cone {
    position: absolute;
    bottom: 10px;
    left: 50%;
    width: 76px;
    height: 52px;
    margin-left: -38px;
    clip-path: polygon(50% 0%, 62% 4%, 100% 100%, 0% 100%, 38% 4%);
    background: linear-gradient(180deg, #44403c 0%, #292524 55%, #1c1917 100%);
    box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.7);
  }

  .voc-cone::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background: #57534e;
  }

  /* Incandescent magma caldera glow */
  .voc-glow {
    position: absolute;
    bottom: 58px;
    left: 50%;
    width: 26px;
    height: 10px;
    margin-left: -13px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, #ffffff 0%, #fef08a 25%, #f59e0b 60%, #ea580c 85%, transparent);
    filter: blur(1.5px);
    box-shadow: 0 0 16px #f97316, 0 0 24px #ef4444;
    animation: volcano-glow 4.8s ease-in-out infinite;
  }

  /* Molten incandescent pyroclastic bombs */
  .voc-bomb {
    position: absolute;
    bottom: 60px;
    left: 50%;
    width: 4px;
    height: 4px;
    margin-left: -2px;
    border-radius: 50%;
    background: #fef08a;
    box-shadow: 0 0 8px #f97316, 0 0 12px #ef4444;
    opacity: 0;
    animation: volcano-bomb 4.8s cubic-bezier(0.25, 0.6, 0.6, 1) infinite;
  }

  .voc-bomb.v1 { --arc-x: -26px; --arc-peak: -34px; }
  .voc-bomb.v2 { --arc-x: 22px;  --arc-peak: -40px; animation-delay: 0.12s; }
  .voc-bomb.v3 { --arc-x: -9px;  --arc-peak: -46px; animation-delay: 0.22s; width: 3px; height: 3px; }
  .voc-bomb.v4 { --arc-x: 13px;  --arc-peak: -30px; animation-delay: 0.3s;  width: 3px; height: 3px; }

  /* Molten lava river */
  .voc-lava {
    position: absolute;
    bottom: 26px;
    left: 50%;
    width: 4px;
    height: 34px;
    margin-left: -6px;
    border-radius: 0 0 3px 3px;
    background: linear-gradient(180deg, #fef08a, #f59e0b 45%, #dc2626);
    box-shadow: 0 0 8px #ea580c;
    transform-origin: top center;
    transform: rotate(14deg);
    animation: volcano-lava 4.8s ease-out infinite;
  }

  /* Volcanic ash and tephra plume */
  .voc-ash {
    position: absolute;
    bottom: 64px;
    left: 50%;
    width: 16px;
    height: 16px;
    margin-left: -8px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(168, 162, 158, 0.6), rgba(87, 83, 78, 0.4) 60%, transparent 75%);
    filter: blur(1.5px);
    animation: volcano-ash 4.8s ease-out infinite;
  }

  .voc-ground {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 8px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #44403c, transparent);
  }
`;

const volcanoMarkup = {
  v1: `
    <div class="volcano">
      <div class="volcano-ash"></div>
      <div class="volcano-bomb v1"></div>
      <div class="volcano-bomb v2"></div>
      <div class="volcano-bomb v3"></div>
      <div class="volcano-bomb v4"></div>
      <div class="volcano-lava"></div>
      <div class="volcano-cone"></div>
      <div class="volcano-glow"></div>
      <div class="volcano-ground"></div>
    </div>
  `,
  v2: `
    <div class="voc">
      <div class="voc-ash"></div>
      <div class="voc-bomb v1"></div>
      <div class="voc-bomb v2"></div>
      <div class="voc-bomb v3"></div>
      <div class="voc-bomb v4"></div>
      <div class="voc-lava"></div>
      <div class="voc-cone"></div>
      <div class="voc-glow"></div>
      <div class="voc-ground"></div>
    </div>
  `,
};

class ConceptVolcano extends HTMLElement {
  static get observedAttributes() {
    return ['version'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
    }
  }

  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${volcanoStyles}</style>${volcanoMarkup[version] || volcanoMarkup.v2}`;
  }
}

if (!customElements.get('concept-volcano')) {
  customElements.define('concept-volcano', ConceptVolcano);
}
