const prismStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: Single-color phosphor fan --- */
  .pr {
    width: 116px;
    height: 88px;
    position: relative;
  }

  .pr-glass {
    position: absolute;
    left: 42px;
    top: 20px;
    width: 34px;
    height: 34px;
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.4), rgba(0, 90, 18, 0.6));
    animation: pr-glass 1.6s ease-in-out infinite alternate;
  }

  .pr-edge {
    position: absolute;
    left: 42px;
    top: 20px;
    width: 34px;
    height: 34px;
    clip-path: polygon(50% 0, 100% 100%, 0 100%, 50% 0,
      50% 6.5%, 5.5% 96.5%, 94.5% 96.5%, 50% 6.5%);
    background: #00ff66;
    box-shadow: 0 0 8px #00ff66;
    animation: pr-glass 1.6s ease-in-out infinite alternate;
  }

  @keyframes pr-glass {
    0% { transform: translateY(-3px) rotate(-6deg); }
    100% { transform: translateY(3px) rotate(6deg); }
  }

  .pr-beam {
    position: absolute;
    left: 0;
    top: 38px;
    width: 52px;
    height: 3.5px;
    border-radius: 2px;
    background: linear-gradient(90deg, transparent, #ffffff);
    box-shadow: 0 0 8px #00ff66;
    transform-origin: 0% 50%;
    animation: pr-beam 1.6s ease-in-out infinite alternate;
  }

  @keyframes pr-beam {
    0% { transform: rotate(-10deg); }
    100% { transform: rotate(10deg); }
  }

  .pr-spark {
    position: absolute;
    left: 50px;
    top: 36px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 10px #00ff66;
    animation: pr-spark 1.6s ease-in-out infinite alternate;
  }

  @keyframes pr-spark {
    0% { transform: scale(0.8) translateY(-2px); }
    100% { transform: scale(1.3) translateY(2px); }
  }

  .pr-ray {
    position: absolute;
    left: 66px;
    top: 39px;
    width: 50px;
    height: var(--w);
    border-radius: 2px;
    background: linear-gradient(90deg, #ffffff, rgba(0, 255, 100, 0.8) 50%, transparent);
    box-shadow: 0 0 6px #00ff66;
    transform-origin: 0% 50%;
    animation: pr-ray-sweep 1.6s ease-in-out infinite alternate;
  }

  .pr-ray.y1 { --a: -26deg; --w: 2.5px; --d: 0s; }
  .pr-ray.y2 { --a: -13deg; --w: 3px; --d: -0.1s; }
  .pr-ray.y3 { --a: 0deg; --w: 3.5px; --d: -0.2s; }
  .pr-ray.y4 { --a: 13deg; --w: 3px; --d: -0.3s; }
  .pr-ray.y5 { --a: 26deg; --w: 2.5px; --d: -0.4s; }

  @keyframes pr-ray-sweep {
    0% { transform: rotate(calc(var(--a) - 12deg)) scaleX(0.9); }
    100% { transform: rotate(calc(var(--a) + 12deg)) scaleX(1.1); }
  }

  .pr-tick {
    position: absolute;
    left: 106px;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    font-weight: bold;
    color: #00ff66;
    animation: pr-glass 1.6s ease-in-out infinite alternate;
  }

  .pr-tick.k1 { top: 8px; }
  .pr-tick.k2 { top: 62px; }

  .pr-bench {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 8px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 204, 0, 0.6), transparent);
  }

  .pr-bench::after {
    content: '';
    position: absolute;
    left: 42px;
    top: -4px;
    width: 34px;
    height: 4px;
    background: repeating-linear-gradient(90deg,
      rgba(0, 204, 0, 0.7) 0 2px,
      transparent 2px 8px);
  }

  /* --- v2: Full-spectrum chromatic dispersion --- */
  .prc {
    width: 116px;
    height: 88px;
    position: relative;
  }

  .prc-glass {
    position: absolute;
    left: 42px;
    top: 20px;
    width: 34px;
    height: 34px;
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
    background: linear-gradient(180deg, rgba(200, 240, 255, 0.35), rgba(60, 140, 220, 0.5));
    animation: prc-glass 1.6s ease-in-out infinite alternate;
  }

  .prc-edge {
    position: absolute;
    left: 42px;
    top: 20px;
    width: 34px;
    height: 34px;
    clip-path: polygon(50% 0, 100% 100%, 0 100%, 50% 0,
      50% 6.5%, 5.5% 96.5%, 94.5% 96.5%, 50% 6.5%);
    background: #ffffff;
    box-shadow: 0 0 10px rgba(100, 220, 255, 0.8);
    animation: prc-glass 1.6s ease-in-out infinite alternate;
  }

  @keyframes prc-glass {
    0% { transform: translateY(-3px) rotate(-6deg); }
    100% { transform: translateY(3px) rotate(6deg); }
  }

  /* Incident white light beam */
  .prc-beam {
    position: absolute;
    left: 0;
    top: 38px;
    width: 52px;
    height: 3.5px;
    border-radius: 2px;
    background: linear-gradient(90deg, transparent, #ffffff);
    box-shadow: 0 0 10px #ffffff;
    transform-origin: 0% 50%;
    animation: prc-beam 1.6s ease-in-out infinite alternate;
  }

  @keyframes prc-beam {
    0% { transform: rotate(-10deg); }
    100% { transform: rotate(10deg); }
  }

  .prc-spark {
    position: absolute;
    left: 50px;
    top: 36px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 12px #ffffff, 0 0 18px rgba(120, 200, 255, 0.9);
    animation: prc-spark 1.6s ease-in-out infinite alternate;
  }

  @keyframes prc-spark {
    0% { transform: scale(0.8) translateY(-2px); }
    100% { transform: scale(1.3) translateY(2px); }
  }

  /* Chromatic rays fanning out by real optical wavelength */
  .prc-ray {
    position: absolute;
    left: 66px;
    top: 39px;
    width: 50px;
    height: var(--w);
    border-radius: 2px;
    background: linear-gradient(90deg, #ffffff, var(--col) 40%, transparent);
    box-shadow: 0 0 8px var(--col);
    transform-origin: 0% 50%;
    animation: prc-ray-sweep 1.6s ease-in-out infinite alternate;
  }

  .prc-ray.r-violet { --a: -28deg; --w: 2.2px; --col: #b84dff; animation-delay: 0s; }
  .prc-ray.r-blue   { --a: -19deg; --w: 2.4px; --col: #3877ff; animation-delay: -0.07s; }
  .prc-ray.r-cyan   { --a: -10deg; --w: 2.5px; --col: #00e5ff; animation-delay: -0.14s; }
  .prc-ray.r-green  { --a: 0deg;   --w: 2.8px; --col: #22e655; animation-delay: -0.21s; }
  .prc-ray.r-yellow { --a: 10deg;  --w: 2.5px; --col: #ffd600; animation-delay: -0.28s; }
  .prc-ray.r-orange { --a: 19deg;  --w: 2.4px; --col: #ff7700; animation-delay: -0.35s; }
  .prc-ray.r-red    { --a: 28deg;  --w: 2.2px; --col: #ff2a3a; animation-delay: -0.42s; }

  @keyframes prc-ray-sweep {
    0% { transform: rotate(calc(var(--a) - 12deg)) scaleX(0.9); }
    100% { transform: rotate(calc(var(--a) + 12deg)) scaleX(1.1); }
  }

  .prc-tick {
    position: absolute;
    left: 106px;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    font-weight: bold;
    animation: prc-glass 1.6s ease-in-out infinite alternate;
  }

  .prc-tick.k1 { top: 8px; color: #c86eff; }
  .prc-tick.k2 { top: 62px; color: #ff5566; }

  .prc-bench {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 8px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(140, 180, 220, 0.5), transparent);
  }

  .prc-bench::after {
    content: '';
    position: absolute;
    left: 42px;
    top: -4px;
    width: 34px;
    height: 4px;
    background: repeating-linear-gradient(90deg,
      rgba(140, 180, 220, 0.7) 0 2px,
      transparent 2px 8px);
  }
`;

const prismMarkup = {
  v1: `
    <div class="pr">
      <div class="pr-beam"></div>
      <div class="pr-ray y1"></div>
      <div class="pr-ray y2"></div>
      <div class="pr-ray y3"></div>
      <div class="pr-ray y4"></div>
      <div class="pr-ray y5"></div>
      <div class="pr-glass"></div>
      <div class="pr-edge"></div>
      <div class="pr-spark"></div>
      <div class="pr-tick k1">400nm</div>
      <div class="pr-tick k2">700nm</div>
      <div class="pr-bench"></div>
    </div>
  `,
  v2: `
    <div class="prc">
      <div class="prc-beam"></div>
      <div class="prc-ray r-violet"></div>
      <div class="prc-ray r-blue"></div>
      <div class="prc-ray r-cyan"></div>
      <div class="prc-ray r-green"></div>
      <div class="prc-ray r-yellow"></div>
      <div class="prc-ray r-orange"></div>
      <div class="prc-ray r-red"></div>
      <div class="prc-glass"></div>
      <div class="prc-edge"></div>
      <div class="prc-spark"></div>
      <div class="prc-tick k1">400nm</div>
      <div class="prc-tick k2">700nm</div>
      <div class="prc-bench"></div>
    </div>
  `,
};

class ConceptPrism extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${prismStyles}</style>${prismMarkup[version] || prismMarkup.v2}`;
  }
}

if (!customElements.get('concept-prism')) {
  customElements.define('concept-prism', ConceptPrism);
}
