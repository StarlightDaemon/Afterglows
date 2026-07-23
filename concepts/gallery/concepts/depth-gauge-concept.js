const depthGaugeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A dive profile on one 8s loop: the needle winds around the dial
     as the boat descends, holds at depth while the pressure lamp
     complains, then eases back up. The digital readout tracks the
     same profile. */
  .dg {
    width: 104px;
    height: 96px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  .dg-face {
    position: absolute;
    left: 50%;
    top: 4px;
    width: 72px;
    height: 72px;
    margin-left: -36px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 50%;
    background: radial-gradient(circle at 50% 42%, rgba(0, 60, 12, 0.5), rgba(0, 20, 4, 0.8));
    box-shadow: inset 0 0 10px rgba(0, 204, 0, 0.25);
  }

  /* Dial ticks: ring of marks cut by a radial mask. */
  .dg-ticks {
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    background: repeating-conic-gradient(rgba(140, 255, 170, 0.8) 0 2deg, transparent 2deg 30deg);
    -webkit-mask-image: radial-gradient(circle, transparent 0 74%, black 76% 96%, transparent 98%);
    mask-image: radial-gradient(circle, transparent 0 74%, black 76% 96%, transparent 98%);
  }

  /* Fine ticks between the majors. */
  .dg-ticks.minor {
    background: repeating-conic-gradient(rgba(0, 204, 0, 0.4) 0 1deg, transparent 1deg 10deg);
    -webkit-mask-image: radial-gradient(circle, transparent 0 82%, black 84% 96%, transparent 98%);
    mask-image: radial-gradient(circle, transparent 0 82%, black 84% 96%, transparent 98%);
  }

  /* Red-zone arc at the deep end of the dial (drawn phosphor-bright). */
  .dg-zone {
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    background: conic-gradient(from 118deg, rgba(190, 255, 205, 0.55) 0 42deg, transparent 42deg);
    -webkit-mask-image: radial-gradient(circle, transparent 0 76%, black 78% 92%, transparent 94%);
    mask-image: radial-gradient(circle, transparent 0 76%, black 78% 92%, transparent 94%);
  }

  .dg-needle {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 3px;
    height: 30px;
    margin: -30px 0 0 -1.5px;
    border-radius: 2px 2px 0 0;
    background: linear-gradient(180deg, #d6ffe0, rgba(0, 204, 0, 0.7));
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.7);
    transform-origin: 50% 100%;
    animation: dg-needle 8s ease-in-out infinite;
  }

  /* 0 m points up-left (-120deg); full scale sweeps 240deg. */
  @keyframes dg-needle {
    0%, 6% { transform: rotate(-120deg); }
    30% { transform: rotate(52deg); }
    38% { transform: rotate(96deg); }
    44% { transform: rotate(90deg); }
    58% { transform: rotate(94deg); }
    68% { transform: rotate(40deg); }
    88%, 100% { transform: rotate(-120deg); }
  }

  .dg-hub {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 8px;
    height: 8px;
    margin: -4px 0 0 -4px;
    border-radius: 50%;
    background: #baffc9;
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.8);
  }

  /* Pressure lamp: blinks while the needle sits in the deep zone. */
  .dg-lamp {
    position: absolute;
    right: 4px;
    top: 10px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--accent, #00cc00);
    animation: dg-lamp 8s steps(1) infinite;
  }

  @keyframes dg-lamp {
    0%, 36% { opacity: 0.2; box-shadow: none; }
    38%, 42% { opacity: 1; box-shadow: 0 0 8px rgba(0, 204, 0, 0.9); }
    44%, 47% { opacity: 0.25; }
    49%, 53% { opacity: 1; box-shadow: 0 0 8px rgba(0, 204, 0, 0.9); }
    55%, 58% { opacity: 0.25; }
    60%, 63% { opacity: 1; box-shadow: 0 0 8px rgba(0, 204, 0, 0.9); }
    65%, 100% { opacity: 0.2; box-shadow: none; }
  }

  /* Digital depth readout under the dial. */
  .dg-read {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2px;
    text-align: center;
    font-size: 10px;
    letter-spacing: 1px;
    color: #c8ffd6;
    text-shadow: 0 0 5px rgba(0, 204, 0, 0.75);
  }

  .dg-read::before {
    content: '000 m';
    animation: dg-read 8s steps(1) infinite;
  }

  @keyframes dg-read {
    0% { content: '000 m'; }
    8% { content: '045 m'; }
    14% { content: '112 m'; }
    20% { content: '190 m'; }
    26% { content: '248 m'; }
    32% { content: '297 m'; }
    38% { content: '330 m'; }
    44% { content: '325 m'; }
    58% { content: '328 m'; }
    66% { content: '260 m'; }
    74% { content: '148 m'; }
    82% { content: '051 m'; }
    88% { content: '000 m'; }
  }

  /* Tiny bubbles escaping the case at depth. */
  .dg-leak {
    position: absolute;
    left: 18px;
    top: 46px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    border: 1px solid rgba(190, 255, 205, 0.8);
    opacity: 0;
    animation: dg-leak 8s infinite;
  }

  .dg-leak.k2 { left: 14px; animation-delay: 0.5s; }

  @keyframes dg-leak {
    0%, 38% { transform: translateY(0); opacity: 0; }
    42% { opacity: 0.9; }
    58% { transform: translateY(-26px); opacity: 0; }
    100% { opacity: 0; }
  }
`;

class ConceptDepthGauge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${depthGaugeStyles}</style>
      <div class="dg">
        <div class="dg-face">
          <div class="dg-ticks"></div>
          <div class="dg-ticks minor"></div>
          <div class="dg-zone"></div>
          <div class="dg-needle"></div>
          <div class="dg-hub"></div>
          <div class="dg-lamp"></div>
        </div>
        <div class="dg-leak"></div>
        <div class="dg-leak k2"></div>
        <div class="dg-read"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-depth-gauge')) {
  customElements.define('concept-depth-gauge', ConceptDepthGauge);
}
