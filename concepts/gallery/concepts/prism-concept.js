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
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.28), rgba(0, 90, 18, 0.4));
    animation: pr-glass 4s ease-in-out infinite;
  }

  .pr-edge {
    position: absolute;
    left: 42px;
    top: 20px;
    width: 34px;
    height: 34px;
    clip-path: polygon(50% 0, 100% 100%, 0 100%, 50% 0,
      50% 6.5%, 5.5% 96.5%, 94.5% 96.5%, 50% 6.5%);
    background: rgba(190, 255, 205, 0.95);
  }

  @keyframes pr-glass {
    0%, 100% { filter: drop-shadow(0 0 4px rgba(0, 204, 0, 0.4)); }
    45%, 60% { filter: drop-shadow(0 0 10px rgba(0, 204, 0, 0.8)); }
  }

  .pr-beam {
    position: absolute;
    left: 0;
    top: 38px;
    width: 52px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, transparent, rgba(214, 255, 224, 0.95));
    animation: pr-beam 4s ease-in-out infinite;
  }

  @keyframes pr-beam {
    0%, 25%, 100% { opacity: 0.55; box-shadow: none; }
    40%, 60% { opacity: 1; box-shadow: 0 0 8px rgba(214, 255, 224, 0.8); }
  }

  .pr-spark {
    position: absolute;
    left: 50px;
    top: 36px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #f2ffdd;
    animation: pr-spark 4s ease-in-out infinite;
  }

  @keyframes pr-spark {
    0%, 25%, 100% { transform: scale(0.5); opacity: 0.4; box-shadow: none; }
    45%, 58% { transform: scale(1.1); opacity: 1; box-shadow: 0 0 12px rgba(242, 255, 221, 1); }
  }

  .pr-ray {
    position: absolute;
    left: 66px;
    top: 39px;
    width: 50px;
    height: var(--w);
    border-radius: 2px;
    background: linear-gradient(90deg, rgba(190, 255, 205, 0.95), transparent);
    transform-origin: 0% 50%;
    transform: rotate(var(--a));
    animation: pr-ray 4s ease-in-out infinite var(--d);
    opacity: 0.5;
  }

  .pr-ray.y1 { --a: -26deg; --w: 2px; --d: 0.10s; }
  .pr-ray.y2 { --a: -13deg; --w: 2.5px; --d: 0.16s; }
  .pr-ray.y3 { --a: 0deg; --w: 3px; --d: 0.22s; }
  .pr-ray.y4 { --a: 13deg; --w: 2.5px; --d: 0.28s; }
  .pr-ray.y5 { --a: 26deg; --w: 2px; --d: 0.34s; }

  @keyframes pr-ray {
    0%, 25%, 100% { opacity: 0.35; box-shadow: none; }
    45%, 62% { opacity: 1; box-shadow: 0 0 6px rgba(140, 255, 170, 0.7); }
  }

  .pr-tick {
    position: absolute;
    left: 108px;
    font-family: 'Courier New', monospace;
    font-size: 7px;
    color: rgba(140, 255, 170, 0.7);
    animation: pr-ray 4s ease-in-out infinite 0.4s;
    opacity: 0.4;
  }

  .pr-tick.k1 { top: 12px; }
  .pr-tick.k2 { top: 60px; }

  .pr-bench {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 8px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 204, 0, 0.45), transparent);
  }

  .pr-bench::after {
    content: '';
    position: absolute;
    left: 42px;
    top: -4px;
    width: 34px;
    height: 4px;
    background: repeating-linear-gradient(90deg,
      rgba(0, 204, 0, 0.5) 0 2px,
      transparent 2px 8px);
  }

  /* --- v2: Full-spectrum chromatic dispersion ---
     A collimated white light beam refracts at the flint glass interface,
     dispersing into violet (400nm, highest refraction), blue, cyan,
     green, yellow, orange, and red (700nm, lowest refraction). */
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
    background: linear-gradient(180deg, rgba(200, 240, 255, 0.22), rgba(60, 140, 220, 0.35));
    animation: prc-glass 4s ease-in-out infinite;
  }

  .prc-edge {
    position: absolute;
    left: 42px;
    top: 20px;
    width: 34px;
    height: 34px;
    clip-path: polygon(50% 0, 100% 100%, 0 100%, 50% 0,
      50% 6.5%, 5.5% 96.5%, 94.5% 96.5%, 50% 6.5%);
    background: rgba(220, 245, 255, 0.9);
  }

  @keyframes prc-glass {
    0%, 100% { filter: drop-shadow(0 0 6px rgba(0, 180, 255, 0.35)); }
    45%, 60% { filter: drop-shadow(0 0 12px rgba(100, 220, 255, 0.8)); }
  }

  /* Incident white light beam */
  .prc-beam {
    position: absolute;
    left: 0;
    top: 38px;
    width: 52px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.98));
    animation: prc-beam 4s ease-in-out infinite;
  }

  @keyframes prc-beam {
    0%, 25%, 100% { opacity: 0.55; box-shadow: none; }
    40%, 60% { opacity: 1; box-shadow: 0 0 8px rgba(255, 255, 255, 0.95), 0 0 14px rgba(180, 220, 255, 0.6); }
  }

  .prc-spark {
    position: absolute;
    left: 50px;
    top: 36px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #ffffff;
    animation: prc-spark 4s ease-in-out infinite;
  }

  @keyframes prc-spark {
    0%, 25%, 100% { transform: scale(0.5); opacity: 0.4; box-shadow: none; }
    45%, 58% { transform: scale(1.15); opacity: 1; box-shadow: 0 0 12px #ffffff, 0 0 18px rgba(120, 200, 255, 0.9); }
  }

  /* Chromatic rays fanning out by real optical wavelength */
  .prc-ray {
    position: absolute;
    left: 66px;
    top: 39px;
    width: 50px;
    height: var(--w);
    border-radius: 2px;
    background: linear-gradient(90deg, var(--col), transparent);
    transform-origin: 0% 50%;
    transform: rotate(var(--a));
    animation: prc-ray 4s ease-in-out infinite var(--d);
    opacity: 0.5;
  }

  .prc-ray.r-violet { --a: -28deg; --w: 2px; --d: 0.08s; --col: #b84dff; }
  .prc-ray.r-blue   { --a: -19deg; --w: 2.2px; --d: 0.14s; --col: #3877ff; }
  .prc-ray.r-cyan   { --a: -10deg; --w: 2.2px; --d: 0.20s; --col: #00e5ff; }
  .prc-ray.r-green  { --a: 0deg;   --w: 2.5px; --d: 0.25s; --col: #22e655; }
  .prc-ray.r-yellow { --a: 10deg;  --w: 2.2px; --d: 0.30s; --col: #ffd600; }
  .prc-ray.r-orange { --a: 19deg;  --w: 2.2px; --d: 0.35s; --col: #ff7700; }
  .prc-ray.r-red    { --a: 28deg;  --w: 2px; --d: 0.40s; --col: #ff2a3a; }

  @keyframes prc-ray {
    0%, 25%, 100% { opacity: 0.35; box-shadow: none; }
    45%, 62% { opacity: 1; box-shadow: 0 0 8px var(--col); }
  }

  .prc-tick {
    position: absolute;
    left: 108px;
    font-family: 'Courier New', monospace;
    font-size: 7px;
    font-weight: bold;
    animation: prc-ray 4s ease-in-out infinite 0.4s;
    opacity: 0.5;
  }

  .prc-tick.k1 { top: 8px; color: #c86eff; }
  .prc-tick.k2 { top: 62px; color: #ff5566; }

  .prc-bench {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 8px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(140, 180, 220, 0.45), transparent);
  }

  .prc-bench::after {
    content: '';
    position: absolute;
    left: 42px;
    top: -4px;
    width: 34px;
    height: 4px;
    background: repeating-linear-gradient(90deg,
      rgba(140, 180, 220, 0.6) 0 2px,
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
