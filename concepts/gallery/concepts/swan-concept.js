const swanStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A swan gliding on still water: it drifts across trailing a wake,
     its mirror image rippling below, and midway it dips to preen and
     rises again in a shower of droplets. */
  .sw {
    width: 116px;
    height: 92px;
    position: relative;
    overflow: hidden;
  }

  /* Waterline. */
  .sw-water {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 50%;
    background: linear-gradient(180deg, rgba(0, 90, 18, 0.4), rgba(0, 45, 9, 0.6));
    border-top: 1px solid rgba(140, 255, 170, 0.5);
  }

  /* Gentle water shimmer lines. */
  .sw-shimmer {
    position: absolute;
    left: 0;
    right: 0;
    top: 54%;
    height: 40%;
    background: repeating-linear-gradient(180deg,
      rgba(140, 255, 170, 0.14) 0 1px,
      transparent 1px 7px);
    animation: sw-shimmer 4s ease-in-out infinite;
  }

  @keyframes sw-shimmer {
    0%, 100% { opacity: 0.6; transform: translateX(0); }
    50% { opacity: 1; transform: translateX(3px); }
  }

  /* The swan glides left-to-right. */
  .sw-swan {
    position: absolute;
    left: 0;
    top: 20px;
    width: 46px;
    height: 40px;
    animation: sw-glide 9s ease-in-out infinite;
  }

  @keyframes sw-glide {
    0% { transform: translateX(-8px); }
    100% { transform: translateX(78px); }
  }

  /* Body: broad boat hull sitting on the line. */
  .sw-body {
    position: absolute;
    left: 0;
    top: 24px;
    width: 40px;
    height: 16px;
    border-radius: 60% 40% 50% 50% / 80% 60% 40% 60%;
    background: radial-gradient(ellipse at 40% 30%, rgba(214, 255, 224, 0.9), rgba(140, 255, 170, 0.6) 70%);
    border: 1px solid rgba(0, 204, 0, 0.4);
  }

  /* Raised folded wing. */
  .sw-wing {
    position: absolute;
    left: 6px;
    top: 18px;
    width: 24px;
    height: 14px;
    border-radius: 60% 40% 50% 80%;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.7), rgba(0, 150, 30, 0.4));
  }

  /* Curved neck; dips to preen mid-cycle. */
  .sw-neck {
    position: absolute;
    left: 30px;
    top: 0;
    width: 20px;
    height: 30px;
    transform-origin: 20% 100%;
    animation: sw-preen 9s ease-in-out infinite;
  }

  .sw-neck-curve {
    position: absolute;
    left: 0;
    top: 0;
    width: 16px;
    height: 26px;
    border: 3px solid rgba(214, 255, 224, 0.9);
    border-left: none;
    border-bottom: none;
    border-radius: 0 60% 0 0;
  }

  .sw-head {
    position: absolute;
    left: 12px;
    top: -2px;
    width: 8px;
    height: 7px;
    border-radius: 50%;
    background: rgba(214, 255, 224, 0.95);
  }

  .sw-head::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 2px;
    clip-path: polygon(0 0, 100% 40%, 100% 60%, 0 100%);
    background: rgba(0, 200, 40, 0.9);
  }

  /* Preen: neck sweeps down to the flank, then rises. */
  @keyframes sw-preen {
    0%, 34%, 100% { transform: rotate(0deg); }
    44% { transform: rotate(84deg); }
    56% { transform: rotate(84deg); }
    66% { transform: rotate(0deg); }
  }

  /* Reflection: a mirrored, dimmer, wavering copy below the line. */
  .sw-reflection {
    position: absolute;
    left: 0;
    top: 44px;
    width: 46px;
    height: 24px;
    opacity: 0.3;
    transform: scaleY(-1);
    animation: sw-glide 9s ease-in-out infinite, sw-waver 2s ease-in-out infinite;
  }

  .sw-reflection .sw-body {
    top: 0;
  }

  @keyframes sw-waver {
    0%, 100% { filter: blur(0.6px); transform: scaleY(-1) skewX(0deg); }
    50% { filter: blur(1.2px); transform: scaleY(-1) skewX(4deg); }
  }

  /* Wake trailing behind. */
  .sw-wake {
    position: absolute;
    top: 42px;
    left: 0;
    width: 20px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(190, 255, 205, 0.5));
    animation: sw-glide 9s ease-in-out infinite;
  }

  /* Preen droplets. */
  .sw-drop {
    position: absolute;
    width: 2px;
    height: 3px;
    border-radius: 0 0 50% 50%;
    background: rgba(214, 255, 224, 0.9);
    opacity: 0;
    animation: sw-drop 9s infinite;
  }

  .sw-drop.d1 { left: 44px; top: 34px; }
  .sw-drop.d2 { left: 48px; top: 32px; animation-delay: 0.1s; }

  @keyframes sw-drop {
    0%, 60% { transform: translateY(0); opacity: 0; }
    64% { opacity: 1; }
    72% { transform: translateY(14px); opacity: 0; }
    100% { opacity: 0; }
  }
`;

class ConceptSwan extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${swanStyles}</style>
      <div class="sw">
        <div class="sw-water"></div>
        <div class="sw-shimmer"></div>
        <div class="sw-reflection">
          <div class="sw-body"></div>
        </div>
        <div class="sw-wake"></div>
        <div class="sw-drop d1"></div>
        <div class="sw-drop d2"></div>
        <div class="sw-swan">
          <div class="sw-body"></div>
          <div class="sw-wing"></div>
          <div class="sw-neck">
            <div class="sw-neck-curve"></div>
            <div class="sw-head"></div>
          </div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-swan')) {
  customElements.define('concept-swan', ConceptSwan);
}
