const ladybugStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A ladybug walks a leaf edge, antennae bobbing and legs shuffling;
     at the tip it pauses, splits its shell, and buzzes its flight
     wings for a beat before folding them and ambling back. */
  .lb {
    width: 112px;
    height: 84px;
    position: relative;
  }

  /* The leaf it walks along. */
  .lb-leaf {
    position: absolute;
    left: 8px;
    bottom: 16px;
    width: 96px;
    height: 30px;
    border-radius: 0 100% 40% 100% / 0 100% 40% 100%;
    background: linear-gradient(135deg, rgba(0, 150, 30, 0.5), rgba(0, 80, 16, 0.7));
    border: 1px solid rgba(0, 204, 0, 0.5);
  }

  /* Midrib. */
  .lb-leaf::after {
    content: '';
    position: absolute;
    left: 6px;
    bottom: 6px;
    width: 84px;
    height: 1px;
    background: rgba(140, 255, 170, 0.4);
    transform: rotate(-8deg);
    transform-origin: 0 50%;
  }

  /* The bug: walks right, pauses at tip, walks back. */
  .lb-bug {
    position: absolute;
    left: 0;
    bottom: 30px;
    width: 26px;
    height: 20px;
    animation: lb-walk 8s ease-in-out infinite;
  }

  @keyframes lb-walk {
    0% { transform: translateX(12px) scaleX(1); }
    34% { transform: translateX(66px) scaleX(1); }
    /* Pause + takeoff wobble. */
    40%, 62% { transform: translateX(70px) scaleX(1); }
    66% { transform: translateX(66px) scaleX(-1); }
    96% { transform: translateX(12px) scaleX(-1); }
    100% { transform: translateX(12px) scaleX(1); }
  }

  /* Body bob for the walking gait. */
  .lb-bob {
    position: absolute;
    inset: 0;
    animation: lb-bob 0.4s ease-in-out infinite;
  }

  @keyframes lb-bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-1.5px); }
  }

  /* Shell halves (elytra). */
  .lb-shell {
    position: absolute;
    left: 4px;
    top: 4px;
    width: 18px;
    height: 16px;
  }

  .lb-half {
    position: absolute;
    top: 0;
    width: 9px;
    height: 16px;
    background: radial-gradient(circle at 40% 30%, rgba(190, 255, 205, 0.85), rgba(0, 150, 30, 0.85) 60%, rgba(0, 90, 18, 0.9));
    border: 1px solid rgba(0, 204, 0, 0.6);
  }

  /* Spots. */
  .lb-half::before,
  .lb-half::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(0, 50, 10, 0.9);
  }

  .lb-half::before { top: 4px; left: 2px; }
  .lb-half::after { top: 9px; left: 4px; }

  .lb-half.l { left: 0; border-radius: 60% 20% 40% 80%; transform-origin: 100% 20%; animation: lb-open-l 8s infinite; }
  .lb-half.r { right: 0; border-radius: 20% 60% 80% 40%; transform-origin: 0% 20%; animation: lb-open-r 8s infinite; }

  @keyframes lb-open-l {
    0%, 40% { transform: rotate(0deg); }
    46%, 60% { transform: rotate(-46deg); }
    66%, 100% { transform: rotate(0deg); }
  }

  @keyframes lb-open-r {
    0%, 40% { transform: rotate(0deg); }
    46%, 60% { transform: rotate(46deg); }
    66%, 100% { transform: rotate(0deg); }
  }

  /* Flight wings, revealed and buzzing during the split. */
  .lb-flight {
    position: absolute;
    left: 5px;
    top: 5px;
    width: 16px;
    height: 14px;
    border-radius: 50% 50% 60% 60%;
    background: rgba(214, 255, 224, 0.4);
    border: 1px solid rgba(140, 255, 170, 0.5);
    opacity: 0;
    animation: lb-flight 8s steps(1) infinite, lb-buzz 0.07s steps(2) infinite;
  }

  @keyframes lb-flight {
    0%, 45% { opacity: 0; }
    47%, 60% { opacity: 0.8; }
    64%, 100% { opacity: 0; }
  }

  @keyframes lb-buzz {
    0% { transform: scaleY(1); }
    100% { transform: scaleY(0.85); }
  }

  /* Head. */
  .lb-head {
    position: absolute;
    left: 8px;
    top: -2px;
    width: 10px;
    height: 7px;
    border-radius: 50% 50% 40% 40%;
    background: rgba(0, 60, 12, 0.95);
    z-index: 2;
  }

  .lb-head::before,
  .lb-head::after {
    content: '';
    position: absolute;
    top: 2px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #d6ffe0;
  }

  .lb-head::before { left: 2px; }
  .lb-head::after { right: 2px; }

  /* Antennae. */
  .lb-ant {
    position: absolute;
    top: -3px;
    width: 5px;
    height: 5px;
    border: 1px solid rgba(140, 255, 170, 0.8);
    border-radius: 50%;
    border-bottom: none;
    border-right: none;
    animation: lb-ant 0.5s ease-in-out infinite;
  }

  .lb-ant.a1 { left: 6px; }
  .lb-ant.a2 { left: 14px; transform: scaleX(-1); }

  @keyframes lb-ant {
    0%, 100% { transform: rotate(-8deg); }
    50% { transform: rotate(8deg); }
  }

  .lb-ant.a2 {
    animation-name: lb-ant2;
  }

  @keyframes lb-ant2 {
    0%, 100% { transform: scaleX(-1) rotate(-8deg); }
    50% { transform: scaleX(-1) rotate(8deg); }
  }

  /* Legs shuffling. */
  .lb-leg {
    position: absolute;
    top: 15px;
    width: 5px;
    height: 5px;
    border-left: 1.5px solid rgba(0, 90, 18, 0.9);
    transform-origin: top center;
    animation: lb-step 0.4s ease-in-out infinite;
  }

  .lb-leg.g1 { left: 5px; animation-delay: 0s; }
  .lb-leg.g2 { left: 11px; animation-delay: -0.13s; }
  .lb-leg.g3 { left: 17px; animation-delay: -0.26s; }

  @keyframes lb-step {
    0%, 100% { transform: rotate(-14deg); }
    50% { transform: rotate(14deg); }
  }
`;

class ConceptLadybug extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${ladybugStyles}</style>
      <div class="lb">
        <div class="lb-leaf"></div>
        <div class="lb-bug">
          <div class="lb-bob">
            <div class="lb-leg g1"></div>
            <div class="lb-leg g2"></div>
            <div class="lb-leg g3"></div>
            <div class="lb-flight"></div>
            <div class="lb-shell">
              <div class="lb-half l"></div>
              <div class="lb-half r"></div>
            </div>
            <div class="lb-head"></div>
            <div class="lb-ant a1"></div>
            <div class="lb-ant a2"></div>
          </div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-ladybug')) {
  customElements.define('concept-ladybug', ConceptLadybug);
}
