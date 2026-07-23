const zipperStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A zipper doing up and down: the slider climbs, meshing the two
     rows of teeth into a single closed track behind it, reaches the
     top, then runs back down and the teeth split apart again. */
  .zp {
    width: 72px;
    height: 100px;
    position: relative;
  }

  /* Fabric tapes on each side. */
  .zp-tape {
    position: absolute;
    top: 6px;
    bottom: 6px;
    width: 20px;
    background: linear-gradient(180deg, rgba(0, 110, 22, 0.4), rgba(0, 70, 14, 0.5));
    border: 1px solid rgba(0, 204, 0, 0.4);
  }

  .zp-tape.left { left: 8px; border-radius: 4px 0 0 4px; }
  .zp-tape.right { right: 8px; border-radius: 0 4px 4px 0; }

  /* Open teeth (splayed) shown on each tape; a closed meshed column
     is drawn down the center. Their relative visibility is animated
     by the slider position via masks approximated with opacity. */
  .zp-open-l,
  .zp-open-r {
    position: absolute;
    top: 8px;
    width: 8px;
    bottom: 8px;
    background: repeating-linear-gradient(180deg,
      rgba(190, 255, 205, 0.85) 0 3px,
      transparent 3px 7px);
  }

  .zp-open-l { left: 20px; }
  .zp-open-r { right: 20px; }

  /* The closed (meshed) zipped track: a single interlocked column.
     It is revealed below the slider on the way up and hidden on the
     way down, using a clip that follows the slider. */
  .zp-closed {
    position: absolute;
    left: 50%;
    top: 8px;
    width: 10px;
    bottom: 8px;
    margin-left: -5px;
    background:
      repeating-linear-gradient(180deg,
        rgba(214, 255, 224, 0.95) 0 2px,
        rgba(0, 120, 24, 0.85) 2px 4px);
    border-radius: 2px;
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.4);
    animation: zp-closed 5s ease-in-out infinite;
  }

  /* Below the slider = zipped; the clip inset from the bottom shrinks
     as the slider rises (more track visible), grows as it descends. */
  @keyframes zp-closed {
    0% { clip-path: inset(88% 0 0 0); }
    40% { clip-path: inset(0 0 0 0); }
    55% { clip-path: inset(0 0 0 0); }
    95%, 100% { clip-path: inset(88% 0 0 0); }
  }

  /* Above the slider the teeth are open; mask them below the slider
     by fading with the same timing (open track only shows up high). */
  .zp-open-l, .zp-open-r {
    animation: zp-open 5s ease-in-out infinite;
  }

  @keyframes zp-open {
    0% { clip-path: inset(0 0 12% 0); }
    40% { clip-path: inset(0 0 100% 0); }
    55% { clip-path: inset(0 0 100% 0); }
    95%, 100% { clip-path: inset(0 0 12% 0); }
  }

  /* The slider: rides up and down the track. */
  .zp-slider {
    position: absolute;
    left: 50%;
    width: 20px;
    height: 16px;
    margin-left: -10px;
    border-radius: 3px 3px 5px 5px;
    background: linear-gradient(180deg, rgba(214, 255, 224, 0.95), rgba(0, 130, 26, 0.9));
    border: 1px solid rgba(0, 204, 0, 0.6);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.5);
    animation: zp-slide 5s ease-in-out infinite;
    z-index: 3;
  }

  @keyframes zp-slide {
    0% { top: 76px; }
    40% { top: 6px; }
    55% { top: 6px; }
    95%, 100% { top: 76px; }
  }

  /* Pull tab hanging off the slider. */
  .zp-pull {
    position: absolute;
    left: 50%;
    width: 4px;
    height: 12px;
    margin-left: -2px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.85);
    animation: zp-pull 5s ease-in-out infinite;
    z-index: 3;
  }

  @keyframes zp-pull {
    0% { top: 90px; }
    40% { top: 20px; }
    55% { top: 20px; }
    95%, 100% { top: 90px; }
    /* Tab swings a little with the motion. */
    20% { top: 42px; transform: rotate(6deg); }
    70% { top: 42px; transform: rotate(-6deg); }
  }

  .zp-pull::after {
    content: '';
    position: absolute;
    left: -2px;
    bottom: -3px;
    width: 8px;
    height: 5px;
    border-radius: 2px;
    background: rgba(190, 255, 205, 0.8);
  }
`;

class ConceptZipper extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${zipperStyles}</style>
      <div class="zp">
        <div class="zp-tape left"></div>
        <div class="zp-tape right"></div>
        <div class="zp-open-l"></div>
        <div class="zp-open-r"></div>
        <div class="zp-closed"></div>
        <div class="zp-slider"></div>
        <div class="zp-pull"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-zipper')) {
  customElements.define('concept-zipper', ConceptZipper);
}
