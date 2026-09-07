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
    box-shadow: inset 0 4px 8px rgba(0, 255, 100, 0.2);
    animation: volcano-tremor 0.3s ease-in-out infinite alternate;
  }

  @keyframes volcano-tremor {
    0% { transform: translate(-1px, 0) rotate(-0.5deg); }
    100% { transform: translate(1px, -1px) rotate(0.5deg); }
  }

  .volcano-cone::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background: #00ff66;
  }

  .volcano-glow {
    position: absolute;
    bottom: 58px;
    left: 50%;
    width: 26px;
    height: 10px;
    margin-left: -13px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, #ffffff, #00ff66 70%, transparent);
    filter: blur(1px);
    box-shadow: 0 0 12px #00ff66;
    animation: volcano-glow 0.8s ease-in-out infinite alternate;
  }

  .volcano-bomb {
    position: absolute;
    bottom: 60px;
    left: 50%;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #00ff66;
    animation: volcano-bomb 0.8s cubic-bezier(0.2, 0.8, 0.4, 1) infinite;
  }

  .volcano-bomb.v1 { --arc-x: -24px; --arc-peak: -36px; animation-delay: 0s; }
  .volcano-bomb.v2 { --arc-x: 20px;  --arc-peak: -42px; animation-delay: -0.2s; }
  .volcano-bomb.v3 { --arc-x: -8px;  --arc-peak: -48px; animation-delay: -0.4s; width: 5px; height: 5px; }
  .volcano-bomb.v4 { --arc-x: 12px;  --arc-peak: -32px; animation-delay: -0.6s; width: 5px; height: 5px; }

  .volcano-lava {
    position: absolute;
    bottom: 26px;
    left: 50%;
    width: 5px;
    height: 34px;
    margin-left: -6px;
    border-radius: 0 0 3px 3px;
    background: linear-gradient(180deg, #ffffff, #00ff66 80%);
    box-shadow: 0 0 8px #00ff66;
    transform-origin: top center;
    transform: rotate(14deg);
    animation: volcano-lava 0.8s ease-in-out infinite alternate;
  }

  .volcano-ash {
    position: absolute;
    bottom: 64px;
    left: 50%;
    width: 16px;
    height: 16px;
    margin-left: -8px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 255, 100, 0.6), transparent 70%);
    filter: blur(1.5px);
    animation: volcano-ash 1.0s ease-out infinite;
  }

  .volcano-ground {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 8px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00ff66, transparent);
  }

  @keyframes volcano-glow {
    0% { opacity: 0.5; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1.3); }
  }

  @keyframes volcano-bomb {
    0% { opacity: 1; transform: translate(0, 0) scale(1); }
    50% { transform: translate(calc(var(--arc-x, 20px) * 0.6), var(--arc-peak, -38px)) scale(1.2); opacity: 1; }
    100% { transform: translate(var(--arc-x, 20px), 16px) scale(0.4); opacity: 0; }
  }

  @keyframes volcano-lava {
    0% { transform: rotate(14deg) scaleY(0.4); }
    100% { transform: rotate(14deg) scaleY(1.1); }
  }

  @keyframes volcano-ash {
    0% { opacity: 1; transform: translateY(0) scale(0.6); }
    100% { opacity: 0; transform: translateY(-40px) scale(2.2); }
  }

  /* --- v2: Igneous volcanology & basalt eruption physics --- */
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
    animation: voc-tremor 0.3s ease-in-out infinite alternate;
  }

  @keyframes voc-tremor {
    0% { transform: translate(-1px, 0) rotate(-0.5deg); }
    100% { transform: translate(1px, -1px) rotate(0.5deg); }
  }

  .voc-cone::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background: #ea580c;
    box-shadow: 0 0 6px #ea580c;
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
    filter: blur(1px);
    box-shadow: 0 0 16px #f97316, 0 0 24px #ef4444;
    animation: voc-glow 0.8s ease-in-out infinite alternate;
  }

  @keyframes voc-glow {
    0% { opacity: 0.6; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1.3); }
  }

  /* Molten incandescent pyroclastic bombs */
  .voc-bomb {
    position: absolute;
    bottom: 60px;
    left: 50%;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 10px #f97316, 0 0 16px #ef4444;
    animation: voc-bomb 0.8s cubic-bezier(0.2, 0.8, 0.4, 1) infinite;
  }

  .voc-bomb.v1 { --arc-x: -24px; --arc-peak: -36px; animation-delay: 0s; }
  .voc-bomb.v2 { --arc-x: 20px;  --arc-peak: -42px; animation-delay: -0.2s; }
  .voc-bomb.v3 { --arc-x: -8px;  --arc-peak: -48px; animation-delay: -0.4s; width: 5px; height: 5px; }
  .voc-bomb.v4 { --arc-x: 12px;  --arc-peak: -32px; animation-delay: -0.6s; width: 5px; height: 5px; }

  @keyframes voc-bomb {
    0% { opacity: 1; transform: translate(0, 0) scale(1); }
    50% { transform: translate(calc(var(--arc-x, 20px) * 0.6), var(--arc-peak, -38px)) scale(1.2); opacity: 1; }
    100% { transform: translate(var(--arc-x, 20px), 16px) scale(0.4); opacity: 0; }
  }

  /* Molten lava river */
  .voc-lava {
    position: absolute;
    bottom: 26px;
    left: 50%;
    width: 5px;
    height: 34px;
    margin-left: -6px;
    border-radius: 0 0 3px 3px;
    background: linear-gradient(180deg, #ffffff, #f59e0b 45%, #dc2626);
    box-shadow: 0 0 10px #ea580c;
    transform-origin: top center;
    transform: rotate(14deg);
    animation: voc-lava 0.8s ease-in-out infinite alternate;
  }

  @keyframes voc-lava {
    0% { transform: rotate(14deg) scaleY(0.4); }
    100% { transform: rotate(14deg) scaleY(1.1); }
  }

  /* Volcanic ash and tephra plume */
  .voc-ash {
    position: absolute;
    bottom: 64px;
    left: 50%;
    width: 18px;
    height: 18px;
    margin-left: -9px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(251, 146, 60, 0.7), rgba(87, 83, 78, 0.5) 60%, transparent 75%);
    filter: blur(1.5px);
    animation: voc-ash 1.0s ease-out infinite;
  }

  @keyframes voc-ash {
    0% { opacity: 1; transform: translateY(0) scale(0.6); }
    100% { opacity: 0; transform: translateY(-40px) scale(2.2); }
  }

  .voc-ground {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 8px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #ea580c, transparent);
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
