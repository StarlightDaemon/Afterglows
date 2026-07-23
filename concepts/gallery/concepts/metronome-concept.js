const metronomeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A wind-up metronome at a steady 60 BPM-ish tick: the arm snaps
     between extremes with a tick flash at each end, the sliding
     weight rides the arm, and the escapement lamp blinks per beat. */
  .met {
    width: 96px;
    height: 98px;
    position: relative;
  }

  /* Pyramid body. */
  .met-body {
    position: absolute;
    left: 50%;
    bottom: 6px;
    width: 66px;
    height: 84px;
    margin-left: -33px;
    clip-path: polygon(50% 0, 92% 100%, 8% 100%);
    background: linear-gradient(180deg, rgba(0, 60, 12, 0.55), rgba(0, 25, 5, 0.85));
  }

  /* Body edge lines (clip-path eats borders, draw an inset copy). */
  .met-edge {
    position: absolute;
    left: 50%;
    bottom: 6px;
    width: 66px;
    height: 84px;
    margin-left: -33px;
    clip-path: polygon(50% 0, 92% 100%, 8% 100%, 50% 0, 50% 3.5%, 11.5% 97%, 88.5% 97%, 50% 3.5%);
    background: var(--accent, #00cc00);
    opacity: 0.85;
  }

  /* Face slot the arm swings across. */
  .met-slot {
    position: absolute;
    left: 50%;
    bottom: 22px;
    width: 3px;
    height: 52px;
    margin-left: -1.5px;
    background: rgba(0, 204, 0, 0.25);
  }

  /* Scale marks fanned at the top of the slot. */
  .met-scale {
    position: absolute;
    left: 50%;
    bottom: 66px;
    width: 26px;
    height: 8px;
    margin-left: -13px;
    background: repeating-linear-gradient(90deg,
      rgba(140, 255, 170, 0.6) 0 1px,
      transparent 1px 5px);
  }

  /* The arm: pivots at its base, ticking left-right. The timing curve
     lingers at each extreme then swings through fast, like the real
     escapement. */
  .met-arm {
    position: absolute;
    left: 50%;
    bottom: 24px;
    width: 3px;
    height: 58px;
    margin-left: -1.5px;
    border-radius: 2px;
    background: linear-gradient(180deg, #baffc9, rgba(0, 204, 0, 0.7));
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.6);
    transform-origin: 50% 100%;
    animation: met-tick 2s infinite;
  }

  @keyframes met-tick {
    0% { transform: rotate(-24deg); }
    8% { transform: rotate(-24deg); }
    42% { transform: rotate(23deg); animation-timing-function: ease-out; }
    58% { transform: rotate(24deg); }
    92% { transform: rotate(-23deg); animation-timing-function: ease-out; }
    100% { transform: rotate(-24deg); }
  }

  /* Sliding tempo weight on the arm. */
  .met-weight {
    position: absolute;
    top: 16px;
    left: 50%;
    width: 11px;
    height: 8px;
    margin-left: -5.5px;
    clip-path: polygon(15% 0, 85% 0, 100% 100%, 0 100%);
    background: linear-gradient(180deg, #d6ffe0, rgba(0, 140, 28, 0.9));
  }

  /* Tick flashes at the swing extremes. */
  .met-flash {
    position: absolute;
    bottom: 72px;
    width: 10px;
    height: 3px;
    border-radius: 2px;
    background: #d6ffe0;
    opacity: 0;
  }

  .met-flash.left { left: 2px; transform: rotate(28deg); animation: met-flash-l 2s steps(1) infinite; }
  .met-flash.right { right: 2px; transform: rotate(-28deg); animation: met-flash-r 2s steps(1) infinite; }

  @keyframes met-flash-l {
    0%, 4% { opacity: 1; }
    8% { opacity: 0; }
    92%, 96% { opacity: 1; }
    100% { opacity: 1; }
  }

  @keyframes met-flash-r {
    0%, 42% { opacity: 0; }
    44%, 52% { opacity: 1; }
    56%, 100% { opacity: 0; }
  }

  /* Beat lamp near the base. */
  .met-lamp {
    position: absolute;
    left: 50%;
    bottom: 12px;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    border-radius: 50%;
    background: var(--accent, #00cc00);
    animation: met-lamp 1s steps(1) infinite;
  }

  @keyframes met-lamp {
    0%, 8% { opacity: 1; box-shadow: 0 0 8px rgba(0, 204, 0, 0.9); }
    12%, 100% { opacity: 0.25; box-shadow: none; }
  }

  /* Tempo plate. */
  .met-bpm {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 2px;
    color: rgba(140, 255, 170, 0.75);
  }
`;

class ConceptMetronome extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${metronomeStyles}</style>
      <div class="met">
        <div class="met-body"></div>
        <div class="met-edge"></div>
        <div class="met-slot"></div>
        <div class="met-scale"></div>
        <div class="met-flash left"></div>
        <div class="met-flash right"></div>
        <div class="met-arm"><div class="met-weight"></div></div>
        <div class="met-lamp"></div>
        <div class="met-bpm">60 BPM</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-metronome')) {
  customElements.define('concept-metronome', ConceptMetronome);
}
