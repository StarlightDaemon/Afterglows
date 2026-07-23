const woodpeckerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A woodpecker clinging to a trunk, hammering in bursts: a rapid
     rat-a-tat drives its head into the bark, wood chips fly and the
     hole deepens, then it pauses, cocks its head, and drums again. */
  .wp {
    width: 104px;
    height: 100px;
    position: relative;
  }

  /* Tree trunk on the left. */
  .wp-trunk {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 34px;
    background:
      repeating-linear-gradient(180deg,
        rgba(0, 110, 22, 0.6) 0 8px,
        rgba(0, 70, 14, 0.7) 8px 14px);
    border-right: 2px solid rgba(0, 204, 0, 0.5);
  }

  /* Bark texture lines. */
  .wp-bark {
    position: absolute;
    left: 6px;
    top: 12px;
    width: 1px;
    height: 76px;
    background: rgba(0, 150, 30, 0.4);
    box-shadow: 10px 0 0 rgba(0, 150, 30, 0.3), 20px 0 0 rgba(0, 150, 30, 0.35);
  }

  /* The drilled hole, deepening in bursts. */
  .wp-hole {
    position: absolute;
    left: 24px;
    top: 44px;
    width: 4px;
    height: 8px;
    border-radius: 40% 0 0 40%;
    background: #020602;
    border: 1px solid rgba(0, 90, 18, 0.6);
    animation: wp-hole 6s steps(1) infinite;
  }

  @keyframes wp-hole {
    0% { width: 3px; }
    30% { width: 8px; }
    60% { width: 12px; }
    /* Fresh spot. */
    88% { width: 12px; }
    92% { width: 3px; }
  }

  /* The bird: clings to the trunk; its head hammers. */
  .wp-bird {
    position: absolute;
    left: 24px;
    top: 30px;
    width: 40px;
    height: 44px;
  }

  /* Body angled against the trunk. */
  .wp-body {
    position: absolute;
    left: 8px;
    top: 8px;
    width: 20px;
    height: 30px;
    border-radius: 50% 60% 50% 40%;
    background: radial-gradient(ellipse at 40% 35%,
      rgba(190, 255, 205, 0.6),
      rgba(0, 140, 28, 0.75) 60%,
      rgba(0, 90, 18, 0.85));
    border: 1px solid rgba(0, 204, 0, 0.5);
    transform: rotate(12deg);
  }

  /* Wing barring. */
  .wp-body::after {
    content: '';
    position: absolute;
    left: 3px;
    top: 6px;
    right: 4px;
    bottom: 6px;
    background: repeating-linear-gradient(115deg,
      transparent 0 2px,
      rgba(0, 90, 18, 0.4) 2px 3px);
    border-radius: 50%;
  }

  /* Stiff tail bracing on the trunk. */
  .wp-tail {
    position: absolute;
    left: 4px;
    top: 34px;
    width: 8px;
    height: 12px;
    clip-path: polygon(0 0, 100% 0, 60% 100%, 20% 100%);
    background: rgba(0, 130, 26, 0.8);
    transform: rotate(12deg);
  }

  /* Head + long bill; the whole head-unit hammers in fast bursts. */
  .wp-head {
    position: absolute;
    left: 12px;
    top: 0;
    width: 14px;
    height: 12px;
    transform-origin: 20% 80%;
    animation: wp-hammer 0.1s ease-in-out infinite, wp-burst 6s steps(1) infinite;
  }

  .wp-head-ball {
    position: absolute;
    left: 0;
    top: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, rgba(214, 255, 224, 0.85), rgba(0, 120, 24, 0.9));
  }

  /* Red crest. */
  .wp-crest {
    position: absolute;
    left: 2px;
    top: -4px;
    width: 8px;
    height: 6px;
    clip-path: polygon(0 100%, 40% 0, 60% 40%, 100% 20%, 80% 100%);
    background: rgba(190, 255, 205, 0.9);
  }

  /* Eye. */
  .wp-head-ball::after {
    content: '';
    position: absolute;
    left: 4px;
    top: 3px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #041a0a;
  }

  /* Chisel bill pointing at the bark. */
  .wp-bill {
    position: absolute;
    left: 10px;
    top: 5px;
    width: 12px;
    height: 2px;
    background: rgba(214, 255, 224, 0.95);
    clip-path: polygon(0 0, 100% 40%, 100% 60%, 0 100%);
  }

  /* Hammer: tiny fast oscillation, gated to two drumming bursts. */
  @keyframes wp-hammer {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(-4px) translateY(1px); }
  }

  @keyframes wp-burst {
    0%, 34% { animation-play-state: running; }
    /* Pause between bursts handled by visibility of chips; head holds. */
    36%, 44% { transform: none; }
    58%, 88% { transform: none; }
  }

  /* Wood chips flying on each burst. */
  .wp-chip {
    position: absolute;
    left: 22px;
    top: 46px;
    width: 3px;
    height: 2px;
    background: rgba(214, 255, 224, 0.9);
    opacity: 0;
    animation: wp-chip 0.5s ease-out infinite, wp-chipgate 6s steps(1) infinite;
  }

  .wp-chip.c2 { animation-delay: -0.2s, 0s; --cx: 16px; --cy: -8px; }
  .wp-chip.c3 { animation-delay: -0.35s, 0s; --cx: 20px; --cy: 6px; }
  .wp-chip.c1 { --cx: 14px; --cy: -2px; }

  @keyframes wp-chip {
    0% { transform: translate(0, 0) rotate(0deg); opacity: 0.9; }
    100% { transform: translate(var(--cx, 16px), var(--cy, 0)) rotate(180deg); opacity: 0; }
  }

  @keyframes wp-chipgate {
    0%, 34% { visibility: visible; }
    36%, 57% { visibility: hidden; }
    58%, 88% { visibility: visible; }
    89%, 100% { visibility: hidden; }
  }
`;

class ConceptWoodpecker extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${woodpeckerStyles}</style>
      <div class="wp">
        <div class="wp-trunk"></div>
        <div class="wp-bark"></div>
        <div class="wp-hole"></div>
        <div class="wp-chip c1"></div>
        <div class="wp-chip c2"></div>
        <div class="wp-chip c3"></div>
        <div class="wp-bird">
          <div class="wp-tail"></div>
          <div class="wp-body"></div>
          <div class="wp-head">
            <div class="wp-head-ball"></div>
            <div class="wp-crest"></div>
            <div class="wp-bill"></div>
          </div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-woodpecker')) {
  customElements.define('concept-woodpecker', ConceptWoodpecker);
}
