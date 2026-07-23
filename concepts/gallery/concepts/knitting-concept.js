const knittingStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Two needles working a row: the right needle dips into a loop,
     wraps the working yarn, and draws a new stitch through - the knit
     fabric growing row by row while the yarn ball slowly unwinds. */
  .kn {
    width: 116px;
    height: 92px;
    position: relative;
  }

  /* The knitted fabric: a lattice of V-stitches that scrolls down as
     rows are added. */
  .kn-fabric {
    position: absolute;
    left: 30px;
    top: 8px;
    width: 56px;
    height: 40px;
    background:
      repeating-linear-gradient(60deg, rgba(140, 255, 170, 0.55) 0 1.5px, transparent 1.5px 7px),
      repeating-linear-gradient(-60deg, rgba(140, 255, 170, 0.55) 0 1.5px, transparent 1.5px 7px),
      linear-gradient(180deg, rgba(0, 120, 24, 0.4), rgba(0, 70, 14, 0.5));
    border: 1px solid rgba(0, 204, 0, 0.4);
    animation: kn-grow 3s linear infinite;
  }

  @keyframes kn-grow {
    to { background-position: 0 8px, 0 8px, 0 0; }
  }

  /* Live-stitch bumps along the bottom edge (on the needles). */
  .kn-livestitch {
    position: absolute;
    left: 30px;
    top: 46px;
    width: 56px;
    height: 6px;
    background:
      radial-gradient(circle 3px at 50% 0, rgba(190, 255, 205, 0.8) 60%, transparent) 0 0 / 8px 6px;
  }

  /* Left needle: holds the stitches, angled up-left. */
  .kn-needle-l {
    position: absolute;
    left: 8px;
    top: 40px;
    width: 44px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, rgba(140, 255, 170, 0.9), rgba(0, 130, 26, 0.8));
    transform: rotate(-8deg);
    transform-origin: 100% 50%;
  }

  .kn-needle-l::before {
    content: '';
    position: absolute;
    left: -4px;
    top: -1px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.9);
  }

  /* Right needle: dips and draws the new stitch. */
  .kn-needle-r {
    position: absolute;
    right: 6px;
    top: 40px;
    width: 44px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, rgba(0, 130, 26, 0.8), rgba(140, 255, 170, 0.9));
    transform-origin: 0% 50%;
    animation: kn-work 3s ease-in-out infinite;
  }

  .kn-needle-r::after {
    content: '';
    position: absolute;
    right: -4px;
    top: -1px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.9);
  }

  /* The working motion: dip into the loop, wrap, draw through. */
  @keyframes kn-work {
    0% { transform: rotate(8deg) translateX(0); }
    20% { transform: rotate(2deg) translate(-6px, 3px); }
    40% { transform: rotate(10deg) translate(-2px, -2px); }
    60% { transform: rotate(4deg) translate(-8px, 1px); }
    80% { transform: rotate(8deg) translateX(0); }
    100% { transform: rotate(8deg) translateX(0); }
  }

  /* Working yarn: a strand from the ball up to the right needle tip. */
  .kn-yarn {
    position: absolute;
    left: 18px;
    bottom: 14px;
    width: 60px;
    height: 30px;
    border-bottom: 2px solid rgba(190, 255, 205, 0.7);
    border-right: 2px solid rgba(190, 255, 205, 0.7);
    border-radius: 0 0 40% 0;
    animation: kn-tug 3s ease-in-out infinite;
  }

  @keyframes kn-tug {
    0%, 100% { transform: scaleX(1); }
    50% { transform: scaleX(0.96); }
  }

  /* Yarn ball, slowly rotating as it feeds. */
  .kn-ball {
    position: absolute;
    left: 8px;
    bottom: 6px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background:
      repeating-conic-gradient(from 0deg,
        rgba(190, 255, 205, 0.7) 0 12deg,
        rgba(0, 130, 26, 0.7) 12deg 24deg);
    border: 1px solid rgba(0, 204, 0, 0.5);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
    animation: kn-ball 6s linear infinite;
  }

  @keyframes kn-ball {
    to { transform: rotate(360deg); }
  }

  /* A dropped loop dangling from the ball, wiggling. */
  .kn-tail {
    position: absolute;
    left: 20px;
    bottom: 4px;
    width: 8px;
    height: 8px;
    border: 1.5px solid rgba(140, 255, 170, 0.6);
    border-radius: 50%;
    border-top-color: transparent;
    animation: kn-tail 2s ease-in-out infinite;
  }

  @keyframes kn-tail {
    0%, 100% { transform: rotate(-6deg); }
    50% { transform: rotate(8deg); }
  }
`;

class ConceptKnitting extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${knittingStyles}</style>
      <div class="kn">
        <div class="kn-fabric"></div>
        <div class="kn-livestitch"></div>
        <div class="kn-yarn"></div>
        <div class="kn-needle-l"></div>
        <div class="kn-needle-r"></div>
        <div class="kn-ball"></div>
        <div class="kn-tail"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-knitting')) {
  customElements.define('concept-knitting', ConceptKnitting);
}
