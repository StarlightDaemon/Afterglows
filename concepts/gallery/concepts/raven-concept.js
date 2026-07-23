const ravenStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .raven {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
  }

  /* Gnarled branch. */
  .raven-branch {
    position: absolute;
    bottom: 24px;
    left: 6px;
    right: 10px;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(90deg, rgba(20, 70, 35, 0.9), rgba(60, 140, 80, 0.7) 55%, rgba(20, 70, 35, 0.8));
    transform: rotate(-4deg);
  }

  .raven-branch::after {
    content: '';
    position: absolute;
    right: 16px;
    top: -6px;
    width: 14px;
    height: 3px;
    border-radius: 2px;
    background: rgba(30, 100, 50, 0.7);
    transform: rotate(-28deg);
  }

  /* Bird body: subtle breathing; head turns; occasional ruffle. */
  .raven-bird {
    position: absolute;
    bottom: 26px;
    left: 34px;
    width: 34px;
    height: 40px;
    transform-origin: bottom center;
    animation: raven-breathe 3.4s ease-in-out infinite, raven-ruffle 9s linear infinite;
  }

  /* Long wedge tail - the raven giveaway. */
  .raven-tail {
    position: absolute;
    bottom: -4px;
    right: -18px;
    width: 26px;
    height: 10px;
    clip-path: polygon(0 0, 82% 12%, 100% 50%, 82% 88%, 0 100%);
    background: linear-gradient(90deg, #0c2c14, rgba(60, 160, 90, 0.5) 96%, #071c0c);
    transform: rotate(14deg);
    transform-origin: left center;
    animation: raven-tail 9s linear infinite;
  }

  .raven-body {
    position: absolute;
    bottom: 0;
    left: 4px;
    width: 26px;
    height: 30px;
    border-radius: 55% 45% 48% 52% / 60% 55% 45% 40%;
    background: radial-gradient(circle at 36% 28%, #1d5c2e 0%, #0c2c14 55%, #061607 100%);
    border: 1px solid rgba(140, 255, 170, 0.4);
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
  }

  /* Wing crease on the body. */
  .raven-wing {
    position: absolute;
    bottom: 4px;
    left: 8px;
    width: 16px;
    height: 20px;
    border-radius: 60% 40% 50% 50% / 70% 50% 50% 30%;
    background: linear-gradient(160deg, rgba(30, 110, 55, 0.5), transparent 70%);
    border-left: 1px solid rgba(140, 255, 170, 0.25);
  }

  /* Head: its own pivot for the look-around beat. */
  .raven-head {
    position: absolute;
    top: 0;
    left: 0;
    width: 18px;
    height: 16px;
    transform-origin: 60% 90%;
    animation: raven-look 9s ease-in-out infinite;
  }

  .raven-skull {
    position: absolute;
    inset: 0;
    border-radius: 55% 45% 50% 50% / 60% 60% 42% 42%;
    background: radial-gradient(circle at 38% 32%, #1d5c2e 0%, #0a2411 65%);
    border: 1px solid rgba(140, 255, 170, 0.4);
  }

  /* Heavy, deep bill with a curved culmen - not a songbird's pin. */
  .raven-beak {
    position: absolute;
    top: 6px;
    left: -10px;
    width: 12px;
    height: 7px;
    clip-path: polygon(0 55%, 30% 10%, 100% 0, 100% 90%, 35% 100%);
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.55), #16482a 35%, #0a2411);
    animation: raven-caw 9s linear infinite;
    transform-origin: right center;
  }

  /* Shaggy throat hackles under the bill. */
  .raven-hackle {
    position: absolute;
    top: 13px;
    left: 1px;
    width: 12px;
    height: 9px;
    clip-path: polygon(0 0, 100% 0, 88% 45%, 68% 100%, 50% 40%, 32% 88%, 12% 35%);
    background: linear-gradient(180deg, #123c1e, #0a2411);
  }

  .raven-eye {
    position: absolute;
    top: 5px;
    left: 4px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #eaffd9;
    box-shadow: 0 0 5px rgba(234, 255, 217, 0.8);
    animation: raven-blink 4.5s linear infinite;
  }

  /* A dropped feather drifting down, occasionally. */
  .raven-feather {
    position: absolute;
    top: 40px;
    left: 74px;
    width: 7px;
    height: 3px;
    border-radius: 50%;
    background: rgba(30, 110, 55, 0.8);
    opacity: 0;
    animation: raven-feather 9s ease-in infinite;
  }

  /* Moon behind. */
  .raven-moon {
    position: absolute;
    top: 8px;
    right: 12px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #e6ffd2, #9bd88a 80%);
    box-shadow: 0 0 14px rgba(216, 255, 187, 0.4);
    animation: raven-moon 6s ease-in-out infinite;
  }

  @keyframes raven-breathe {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(1.03); }
  }

  /* Look sequence: ahead -> left -> ahead -> sharp right -> ahead. */
  @keyframes raven-look {
    0%, 18% { transform: rotate(0deg); }
    24%, 34% { transform: rotate(-14deg); }
    40%, 58% { transform: rotate(0deg); }
    63%, 74% { transform: rotate(17deg) translateX(2px); }
    80%, 100% { transform: rotate(0deg); }
  }

  @keyframes raven-blink {
    0%, 40%, 100% { transform: scaleY(1); }
    43% { transform: scaleY(0.1); }
    46% { transform: scaleY(1); }
  }

  /* Beak opens briefly mid-loop: the silent caw. */
  @keyframes raven-caw {
    0%, 48% { transform: scaleY(1); }
    51%, 54% { transform: scaleY(1.9); }
    57%, 100% { transform: scaleY(1); }
  }

  /* Feathers shiver once per loop. */
  @keyframes raven-ruffle {
    0%, 84% { filter: none; }
    86% { transform: scaleY(1.05) rotate(-2deg); }
    88% { transform: scaleY(0.97) rotate(2deg); }
    90% { transform: scaleY(1.02) rotate(-1deg); }
    92%, 100% { transform: none; }
  }

  @keyframes raven-tail {
    0%, 84% { transform: rotate(14deg); }
    87% { transform: rotate(26deg); }
    90% { transform: rotate(8deg); }
    93%, 100% { transform: rotate(14deg); }
  }

  @keyframes raven-feather {
    0%, 85% { opacity: 0; transform: translate(0, 0) rotate(0deg); }
    88% { opacity: 0.9; }
    100% { opacity: 0; transform: translate(-8px, 34px) rotate(140deg); }
  }

  @keyframes raven-moon {
    0%, 100% { opacity: 0.75; }
    50% { opacity: 1; }
  }
`;

class ConceptRaven extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${ravenStyles}</style>
      <div class="raven">
        <div class="raven-moon"></div>
        <div class="raven-branch"></div>
        <div class="raven-bird">
          <div class="raven-tail"></div>
          <div class="raven-body"></div>
          <div class="raven-wing"></div>
          <div class="raven-head">
            <div class="raven-skull"></div>
            <div class="raven-beak"></div>
            <div class="raven-hackle"></div>
            <div class="raven-eye"></div>
          </div>
        </div>
        <div class="raven-feather"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-raven')) {
  customElements.define('concept-raven', ConceptRaven);
}
