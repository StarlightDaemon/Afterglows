const caterpillarStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* An inchworm humping along a leaf edge: a travelling wave of
     compression runs down its segments so it bunches and stretches
     forward, munching a notch into the leaf when it arrives. */
  .ct {
    width: 116px;
    height: 76px;
    position: relative;
  }

  /* Leaf it crawls along. */
  .ct-leaf {
    position: absolute;
    left: 6px;
    right: 6px;
    bottom: 16px;
    height: 20px;
    border-radius: 0 60% 30% 100% / 0 100% 40% 100%;
    background: linear-gradient(135deg, rgba(0, 150, 30, 0.4), rgba(0, 80, 16, 0.6));
    border: 1px solid rgba(0, 204, 0, 0.4);
  }

  /* Midrib. */
  .ct-leaf::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 10px;
    right: 10px;
    height: 1px;
    background: rgba(140, 255, 170, 0.4);
    transform: rotate(-4deg);
    transform-origin: 0 50%;
  }

  /* Munched notch at the far end, appearing as it arrives. */
  .ct-notch {
    position: absolute;
    right: 10px;
    bottom: 30px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #030903;
    opacity: 0;
    animation: ct-notch 6s steps(1) infinite;
  }

  @keyframes ct-notch {
    0%, 78% { opacity: 0; }
    84%, 96% { opacity: 0.9; }
    100% { opacity: 0; }
  }

  /* The caterpillar crawls left to right. */
  .ct-worm {
    position: absolute;
    left: 0;
    bottom: 22px;
    width: 56px;
    height: 16px;
    animation: ct-crawl 6s ease-in-out infinite;
  }

  @keyframes ct-crawl {
    0% { transform: translateX(6px); }
    80% { transform: translateX(56px); }
    /* Munch pause, then reset. */
    92% { transform: translateX(56px); }
    100% { transform: translateX(6px); }
  }

  /* Segments: each bobs on a phase-shifted timer so an arch of
     compression travels head-to-tail (the inchworm hump). */
  .ct-seg {
    position: absolute;
    bottom: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, rgba(190, 255, 205, 0.8), rgba(0, 160, 32, 0.8) 60%, rgba(0, 100, 20, 0.9));
    border: 1px solid rgba(0, 204, 0, 0.5);
    animation: ct-hump 0.9s ease-in-out infinite;
  }

  .ct-seg.s1 { left: 0;  animation-delay: 0s; }
  .ct-seg.s2 { left: 8px; animation-delay: -0.15s; }
  .ct-seg.s3 { left: 16px; animation-delay: -0.3s; }
  .ct-seg.s4 { left: 24px; animation-delay: -0.45s; }
  .ct-seg.s5 { left: 32px; animation-delay: -0.6s; }
  .ct-seg.head { left: 42px; width: 13px; height: 13px; animation-delay: -0.75s; background: radial-gradient(circle at 40% 35%, #f2ffdd, #2a8a3e 70%); }

  @keyframes ct-hump {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-5px) scale(1.05, 0.95); }
  }

  /* Eye on the head. */
  .ct-eye {
    position: absolute;
    left: 50px;
    bottom: 10px;
    width: 2.5px;
    height: 2.5px;
    border-radius: 50%;
    background: #041a0a;
    animation: ct-crawl 6s ease-in-out infinite;
    z-index: 2;
  }

  /* Little antennae/feelers on the head. */
  .ct-feeler {
    position: absolute;
    left: 52px;
    bottom: 14px;
    width: 4px;
    height: 4px;
    border-top: 1.5px solid rgba(140, 255, 170, 0.8);
    border-right: 1.5px solid rgba(140, 255, 170, 0.8);
    animation: ct-crawl 6s ease-in-out infinite, ct-feeler 0.5s ease-in-out infinite;
    z-index: 2;
  }

  @keyframes ct-feeler {
    0%, 100% { transform: rotate(-10deg); }
    50% { transform: rotate(10deg); }
  }

  /* Munch crumbs at the notch. */
  .ct-crumb {
    position: absolute;
    right: 8px;
    bottom: 26px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(0, 200, 40, 0.8);
    opacity: 0;
    animation: ct-crumb 6s infinite;
  }

  .ct-crumb.c2 { right: 14px; animation-delay: 0.15s; }

  @keyframes ct-crumb {
    0%, 80% { transform: translate(0, 0); opacity: 0; }
    84% { opacity: 0.9; }
    92% { transform: translate(-4px, 8px); opacity: 0; }
    100% { opacity: 0; }
  }
`;

class ConceptCaterpillar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${caterpillarStyles}</style>
      <div class="ct">
        <div class="ct-leaf"></div>
        <div class="ct-notch"></div>
        <div class="ct-crumb"></div>
        <div class="ct-crumb c2"></div>
        <div class="ct-worm">
          <div class="ct-seg s1"></div>
          <div class="ct-seg s2"></div>
          <div class="ct-seg s3"></div>
          <div class="ct-seg s4"></div>
          <div class="ct-seg s5"></div>
          <div class="ct-seg head"></div>
        </div>
        <div class="ct-eye"></div>
        <div class="ct-feeler"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-caterpillar')) {
  customElements.define('concept-caterpillar', ConceptCaterpillar);
}
