const prismStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A beam meets the prism and fans into an ordered spread. The
     incident beam pulses; the fan answers a moment later, each ray
     at its own brightness, with a sparkle at the point of entry. */
  .pr {
    width: 116px;
    height: 88px;
    position: relative;
  }

  /* The prism: an equilateral outline with a soft inner glass. */
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

  /* Outline drawn as a second clipped layer. */
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

  /* Incident beam: pulses brighter on the cycle. */
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

  /* Entry sparkle where the beam meets the face. */
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

  /* The fan: five rays diverging from the exit face, phosphor's idea
     of a spectrum - ordered by brightness and width. All pivot from
     the same point. */
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

  /* Wavelength tick labels fading with the fan. */
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

  /* Optical bench line under everything. */
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
`;

class ConceptPrism extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${prismStyles}</style>
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
    `;
  }
}

if (!customElements.get('concept-prism')) {
  customElements.define('concept-prism', ConceptPrism);
}
