const sawStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A 6s cut: the handsaw strokes diagonally, the kerf creeps across
     the plank with sawdust falling on the push strokes, and at the
     end the offcut tips and drops. Then the plank heals and the saw
     starts over. */
  .saw {
    width: 112px;
    height: 92px;
    position: relative;
  }

  /* Plank held on two trestles. */
  .saw-plank {
    position: absolute;
    left: 6px;
    top: 44px;
    width: 74px;
    height: 12px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 2px;
    background:
      repeating-linear-gradient(90deg, rgba(0, 204, 0, 0.14) 0 10px, transparent 10px 22px),
      rgba(0, 40, 8, 0.6);
  }

  /* The offcut: overlaps the plank end; tips off at the end of the
     cut. */
  .saw-offcut {
    position: absolute;
    left: 80px;
    top: 44px;
    width: 26px;
    height: 12px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 2px;
    background: rgba(0, 40, 8, 0.6);
    transform-origin: 0% 100%;
    animation: saw-offcut 6s infinite;
  }

  @keyframes saw-offcut {
    0%, 78% { transform: rotate(0deg) translateY(0); opacity: 1; }
    84% { transform: rotate(24deg) translateY(4px); opacity: 1; }
    92% { transform: rotate(38deg) translateY(26px); opacity: 0; }
    96%, 100% { transform: rotate(0deg) translateY(0); opacity: 0; }
  }

  /* Kerf: the cut line deepening at the offcut boundary. */
  .saw-kerf {
    position: absolute;
    left: 79px;
    top: 44px;
    width: 2px;
    height: 0;
    background: #030903;
    border-left: 1px solid rgba(0, 204, 0, 0.5);
    animation: saw-kerf 6s steps(6) infinite;
  }

  @keyframes saw-kerf {
    0% { height: 0; }
    78% { height: 12px; }
    95% { height: 12px; }
    96%, 100% { height: 0; }
  }

  /* Trestle legs. */
  .saw-trestle {
    position: absolute;
    top: 56px;
    width: 22px;
    height: 22px;
  }

  .saw-trestle::before,
  .saw-trestle::after {
    content: '';
    position: absolute;
    top: 0;
    width: 3px;
    height: 100%;
    background: rgba(0, 204, 0, 0.55);
  }

  .saw-trestle::before { left: 2px; transform: skewX(-16deg); }
  .saw-trestle::after { right: 2px; transform: skewX(16deg); }

  .saw-trestle.t1 { left: 12px; }
  .saw-trestle.t2 { left: 48px; }

  /* The saw: blade + handle stroking along its own axis. */
  .saw-tool {
    position: absolute;
    left: 58px;
    top: -2px;
    width: 58px;
    height: 46px;
    transform: rotate(38deg);
    transform-origin: 20% 90%;
    animation: saw-stroke 1.5s ease-in-out infinite, saw-gate 6s steps(1) infinite;
  }

  /* Strokes ride a translate along the blade axis (post-rotation X). */
  @keyframes saw-stroke {
    0%, 100% { translate: -7px -7px; }
    50% { translate: 8px 8px; }
  }

  /* Saw lifts away while the offcut falls. */
  @keyframes saw-gate {
    0%, 78% { opacity: 1; }
    80%, 92% { opacity: 0; }
    96% { opacity: 1; }
  }

  .saw-blade {
    position: absolute;
    left: 0;
    bottom: 8px;
    width: 44px;
    height: 9px;
    clip-path: polygon(0 0, 100% 0, 100% 55%,
      94% 100%, 88% 55%, 82% 100%, 76% 55%, 70% 100%, 64% 55%,
      58% 100%, 52% 55%, 46% 100%, 40% 55%, 34% 100%, 28% 55%,
      22% 100%, 16% 55%, 10% 100%, 4% 55%, 0 100%);
    background: linear-gradient(180deg, #baffc9, rgba(0, 160, 32, 0.9));
  }

  .saw-grip {
    position: absolute;
    right: 0;
    bottom: 2px;
    width: 16px;
    height: 20px;
    border: 3px solid rgba(140, 255, 170, 0.9);
    border-radius: 5px 8px 6px 4px;
    box-sizing: border-box;
    background: rgba(0, 60, 12, 0.7);
  }

  /* Sawdust: falls just under the kerf on each push. */
  .saw-dust {
    position: absolute;
    left: 78px;
    top: 58px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(214, 255, 224, 0.9);
    opacity: 0;
    animation: saw-dust 1.5s infinite, saw-gate 6s steps(1) infinite;
  }

  .saw-dust.d2 { animation-delay: 0.12s, 0s; left: 82px; }
  .saw-dust.d3 { animation-delay: 0.24s, 0s; left: 76px; }

  @keyframes saw-dust {
    0%, 45% { transform: translate(0, 0); opacity: 0; }
    52% { opacity: 0.95; }
    88% { transform: translate(var(--dx, 3px), 16px); opacity: 0; }
    100% { opacity: 0; }
  }

  .saw-dust.d2 { --dx: -3px; }
  .saw-dust.d3 { --dx: 1px; }

  /* Dust pile growing through the cycle. */
  .saw-pile {
    position: absolute;
    left: 72px;
    top: 76px;
    width: 16px;
    height: 5px;
    border-radius: 50% 50% 0 0;
    background: rgba(140, 255, 170, 0.5);
    transform-origin: bottom center;
    animation: saw-pile 6s infinite;
  }

  @keyframes saw-pile {
    0% { transform: scale(0.2, 0.2); }
    78% { transform: scale(1, 1); }
    95% { transform: scale(1, 1); }
    96%, 100% { transform: scale(0.2, 0.2); }
  }
`;

class ConceptSaw extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${sawStyles}</style>
      <div class="saw">
        <div class="saw-trestle t1"></div>
        <div class="saw-trestle t2"></div>
        <div class="saw-offcut"></div>
        <div class="saw-plank"></div>
        <div class="saw-kerf"></div>
        <div class="saw-dust"></div>
        <div class="saw-dust d2"></div>
        <div class="saw-dust d3"></div>
        <div class="saw-pile"></div>
        <div class="saw-tool">
          <div class="saw-blade"></div>
          <div class="saw-grip"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-saw')) {
  customElements.define('concept-saw', ConceptSaw);
}
