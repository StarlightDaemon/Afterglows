const fireflyStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .firefly {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #010401 0%, #020a03 70%, #041307 100%);
  }

  /* Grass silhouettes along the bottom edge. */
  .firefly-blade {
    position: absolute;
    bottom: 0;
    width: 3px;
    border-radius: 40% 40% 0 0;
    background: linear-gradient(180deg, rgba(30, 110, 50, 0.75), rgba(10, 40, 18, 0.9));
    transform-origin: bottom center;
    animation: firefly-grass 4.5s ease-in-out infinite;
  }

  .firefly-blade.g1 { left: 8px;  height: 18px; transform: rotate(-8deg); }
  .firefly-blade.g2 { left: 20px; height: 26px; transform: rotate(5deg);  animation-delay: -1.1s; }
  .firefly-blade.g3 { left: 34px; height: 15px; transform: rotate(-4deg); animation-delay: -2.3s; }
  .firefly-blade.g4 { left: 55px; height: 22px; transform: rotate(7deg);  animation-delay: -0.6s; }
  .firefly-blade.g5 { left: 72px; height: 17px; transform: rotate(-6deg); animation-delay: -3.2s; }
  .firefly-blade.g6 { left: 88px; height: 24px; transform: rotate(4deg);  animation-delay: -1.8s; }

  /* Each fly wanders its own looping path while its lamp blinks
     on a different rhythm — the two animations run independently. */
  .firefly-bug {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #eaffc9;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  .firefly-bug.b1 {
    top: 24px; left: 18px;
    animation-name: firefly-path1, firefly-blink;
    animation-duration: 9s, 2.3s;
  }

  .firefly-bug.b2 {
    top: 52px; left: 66px;
    animation-name: firefly-path2, firefly-blink;
    animation-duration: 11s, 3.1s;
    animation-delay: -3s, -0.9s;
  }

  .firefly-bug.b3 {
    top: 66px; left: 30px;
    width: 3px; height: 3px;
    animation-name: firefly-path3, firefly-blink;
    animation-duration: 8s, 1.9s;
    animation-delay: -5s, -1.4s;
  }

  .firefly-bug.b4 {
    top: 36px; left: 82px;
    width: 3px; height: 3px;
    animation-name: firefly-path1, firefly-blink;
    animation-duration: 13s, 2.7s;
    animation-delay: -8s, -2s;
  }

  .firefly-bug.b5 {
    top: 14px; left: 52px;
    animation-name: firefly-path2, firefly-blink;
    animation-duration: 10s, 3.6s;
    animation-delay: -6.5s, -0.4s;
  }

  @keyframes firefly-path1 {
    0%   { translate: 0 0; }
    22%  { translate: 18px 10px; }
    45%  { translate: 6px 26px; }
    68%  { translate: -12px 14px; }
    85%  { translate: -18px -2px; }
    100% { translate: 0 0; }
  }

  @keyframes firefly-path2 {
    0%   { translate: 0 0; }
    18%  { translate: -14px -12px; }
    40%  { translate: -24px 6px; }
    62%  { translate: -8px 20px; }
    82%  { translate: 10px 8px; }
    100% { translate: 0 0; }
  }

  @keyframes firefly-path3 {
    0%   { translate: 0 0; }
    30%  { translate: 16px -14px; }
    55%  { translate: 30px -4px; }
    75%  { translate: 14px 8px; }
    100% { translate: 0 0; }
  }

  /* Lamp pulse: mostly dark, brief warm flash. */
  @keyframes firefly-blink {
    0%, 55%, 100% {
      opacity: 0.12;
      box-shadow: 0 0 0 rgba(220, 255, 170, 0);
    }
    66%, 76% {
      opacity: 1;
      box-shadow: 0 0 9px 3px rgba(220, 255, 170, 0.55);
    }
    88% {
      opacity: 0.25;
      box-shadow: 0 0 2px rgba(220, 255, 170, 0.15);
    }
  }

  @keyframes firefly-grass {
    0%, 100% { rotate: -3deg; }
    50% { rotate: 3deg; }
  }
`;

class ConceptFirefly extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${fireflyStyles}</style>
      <div class="firefly">
        <div class="firefly-bug b1"></div>
        <div class="firefly-bug b2"></div>
        <div class="firefly-bug b3"></div>
        <div class="firefly-bug b4"></div>
        <div class="firefly-bug b5"></div>
        <div class="firefly-blade g1"></div>
        <div class="firefly-blade g2"></div>
        <div class="firefly-blade g3"></div>
        <div class="firefly-blade g4"></div>
        <div class="firefly-blade g5"></div>
        <div class="firefly-blade g6"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-firefly')) {
  customElements.define('concept-firefly', ConceptFirefly);
}
