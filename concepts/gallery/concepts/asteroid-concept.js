const asteroidStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ast {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(160deg, #010401 0%, #020a03 100%);
  }

  /* Star specks for parallax reference. */
  .ast::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 22% 18%, rgba(210, 255, 215, 0.55) 0 1px, transparent 1.4px),
      radial-gradient(circle at 74% 30%, rgba(210, 255, 215, 0.4) 0 1px, transparent 1.4px),
      radial-gradient(circle at 48% 66%, rgba(210, 255, 215, 0.45) 0 1px, transparent 1.4px),
      radial-gradient(circle at 88% 80%, rgba(210, 255, 215, 0.5) 0 1px, transparent 1.4px),
      radial-gradient(circle at 10% 86%, rgba(210, 255, 215, 0.35) 0 1px, transparent 1.4px);
  }

  /* Each rock: an irregular blob (lumpy border-radius + inner crater
     shading) drifting on its own straight vector while tumbling. */
  .ast-carrier {
    position: absolute;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .ast-rock {
    position: relative;
    background: radial-gradient(circle at 34% 30%, #2f7a44 0%, #123c1e 55%, #0a2411 100%);
    border: 1px solid rgba(140, 255, 170, 0.5);
    box-sizing: border-box;
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.2);
    animation: ast-tumble linear infinite;
  }

  .ast-rock::before,
  .ast-rock::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: rgba(5, 18, 7, 0.85);
    box-shadow: inset 0 1px 1px rgba(140, 255, 170, 0.3);
  }

  /* Big slow rock, upper-left drift to lower-right. */
  .ast-carrier.big {
    top: -30px;
    left: -30px;
    animation-name: ast-drift-big;
    animation-duration: 11s;
  }

  .ast-carrier.big .ast-rock {
    width: 30px;
    height: 26px;
    border-radius: 46% 58% 42% 60% / 54% 44% 62% 46%;
    animation-duration: 9s;
  }

  .ast-carrier.big .ast-rock::before { top: 6px; left: 7px; width: 7px; height: 6px; }
  .ast-carrier.big .ast-rock::after { bottom: 5px; right: 6px; width: 5px; height: 5px; }

  /* Medium rock, right-to-left. */
  .ast-carrier.mid {
    top: 0;
    left: 0;
    animation-name: ast-drift-mid;
    animation-duration: 8s;
    animation-delay: -3s;
  }

  .ast-carrier.mid .ast-rock {
    width: 17px;
    height: 15px;
    border-radius: 60% 42% 56% 44% / 44% 60% 42% 58%;
    animation-duration: 5.5s;
    animation-direction: reverse;
  }

  .ast-carrier.mid .ast-rock::before { top: 3px; left: 4px; width: 4px; height: 4px; }
  .ast-carrier.mid .ast-rock::after { bottom: 2px; right: 3px; width: 3px; height: 3px; }

  /* Small fast rock, bottom-left to top-right. */
  .ast-carrier.small {
    top: 0;
    left: 0;
    animation-name: ast-drift-small;
    animation-duration: 6s;
    animation-delay: -1.5s;
  }

  .ast-carrier.small .ast-rock {
    width: 9px;
    height: 8px;
    border-radius: 52% 48% 60% 40% / 46% 58% 42% 54%;
    animation-duration: 3s;
  }

  .ast-carrier.small .ast-rock::before { top: 2px; left: 2px; width: 2px; height: 2px; }
  .ast-carrier.small .ast-rock::after { display: none; }

  /* A tiny pebble streaking by fastest — nearest layer of parallax. */
  .ast-carrier.pebble {
    top: 0;
    left: 0;
    animation-name: ast-drift-pebble;
    animation-duration: 3.6s;
    animation-delay: -0.9s;
  }

  .ast-carrier.pebble .ast-rock {
    width: 4px;
    height: 4px;
    border-radius: 50% 44% 56% 48%;
    border-width: 0;
    animation: none;
  }

  @keyframes ast-tumble {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes ast-drift-big {
    0% { transform: translate(-6px, -8px); }
    100% { transform: translate(96px, 104px); }
  }

  @keyframes ast-drift-mid {
    0% { transform: translate(116px, 24px); }
    100% { transform: translate(-24px, 58px); }
  }

  @keyframes ast-drift-small {
    0% { transform: translate(-12px, 96px); }
    100% { transform: translate(112px, 22px); }
  }

  @keyframes ast-drift-pebble {
    0% { transform: translate(114px, 78px); }
    100% { transform: translate(-8px, 6px); }
  }
`;

class ConceptAsteroid extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${asteroidStyles}</style>
      <div class="ast">
        <div class="ast-carrier big"><div class="ast-rock"></div></div>
        <div class="ast-carrier mid"><div class="ast-rock"></div></div>
        <div class="ast-carrier small"><div class="ast-rock"></div></div>
        <div class="ast-carrier pebble"><div class="ast-rock"></div></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-asteroid')) {
  customElements.define('concept-asteroid', ConceptAsteroid);
}
