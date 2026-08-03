// Woodpecker, rebuilt (2026-08-02): the old grid-slab tree read as a
// building. Now a proper rounded trunk with bark dashes fills the left
// third, and the bird clings in profile — tail braced, crest up — and
// hammers in bursts: rapid strikes drive the beak into the bark, chips
// fly, the hole darkens, then it cocks its head to listen and drums
// again. v1 preserves the original grid-slab scene as an archive.
const woodpeckerStyles = {
  v1: `
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
`,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .wp {
    width: 104px;
    height: 96px;
    position: relative;
    overflow: hidden;
  }

  /* Trunk: rounded column with bark texture. */
  .wp-trunk {
    position: absolute;
    left: 16px;
    top: -4px;
    bottom: -4px;
    width: 26px;
    border-radius: 12px;
    background:
      repeating-linear-gradient(175deg,
        rgba(0, 130, 26, 0.55) 0 5px,
        rgba(0, 80, 16, 0.65) 5px 9px),
      linear-gradient(90deg, rgba(0, 60, 12, 0.9), rgba(0, 120, 24, 0.8) 50%, rgba(0, 50, 10, 0.95));
    border-left: 2px solid rgba(0, 204, 0, 0.5);
    border-right: 2px solid rgba(0, 204, 0, 0.35);
  }

  /* A side branch stub for character. */
  .wp-stub {
    position: absolute;
    left: 36px;
    top: 12px;
    width: 14px;
    height: 6px;
    border-radius: 0 4px 4px 0;
    background: rgba(0, 100, 20, 0.8);
    transform: rotate(-18deg);
  }

  /* The hole being hammered: darkens and grows through the loop. */
  .wp-hole {
    position: absolute;
    left: 38px;
    top: 46px;
    width: 5px;
    height: 7px;
    border-radius: 50%;
    background: #020602;
    box-shadow: inset 0 0 3px rgba(0, 204, 0, 0.4);
    animation: wp-hole 5s steps(1) infinite;
  }

  @keyframes wp-hole {
    0% { opacity: 0.25; transform: scale(0.7); }
    30% { opacity: 0.6; transform: scale(0.85); }
    60% { opacity: 1; transform: scale(1); }
    100% { opacity: 1; transform: scale(1); }
  }

  /* Bird group clinging to the trunk's right flank. */
  .wp-bird {
    position: absolute;
    left: 42px;
    top: 30px;
    width: 52px;
    height: 46px;
  }

  /* Tail braced against the bark below the feet. */
  .wp-tail {
    position: absolute;
    left: 2px;
    top: 30px;
    width: 7px;
    height: 18px;
    clip-path: polygon(20% 0, 80% 0, 100% 100%, 0 85%);
    background: linear-gradient(180deg, rgba(0, 140, 28, 0.9), rgba(0, 90, 18, 0.95));
    transform: rotate(14deg);
  }

  /* Body: upright teardrop leaning into the trunk. */
  .wp-body {
    position: absolute;
    left: 4px;
    top: 12px;
    width: 26px;
    height: 24px;
    border-radius: 40% 60% 55% 45%;
    background: radial-gradient(circle at 42% 36%, rgba(190, 255, 205, 0.85), rgba(0, 130, 26, 0.9) 68%);
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    transform: rotate(-14deg);
  }

  /* Barred wing on the flank. */
  .wp-body::after {
    content: '';
    position: absolute;
    left: 9px;
    top: 8px;
    width: 14px;
    height: 12px;
    border-radius: 40% 60% 70% 40%;
    background: repeating-linear-gradient(120deg,
      rgba(214, 255, 224, 0.85) 0 2.5px,
      rgba(0, 100, 20, 0.85) 2.5px 5.5px);
  }

  /* Feet gripping the bark. */
  .wp-foot {
    position: absolute;
    left: 2px;
    top: 32px;
    width: 6px;
    height: 2px;
    border-radius: 1px;
    background: rgba(214, 255, 224, 0.9);
  }

  /* Head assembly hammers about the neck. The whole strike cycle lives
     on one 5s clock: three bursts of rapid hits, then a listening cock. */
  .wp-headset {
    position: absolute;
    left: -6px;
    top: -6px;
    width: 34px;
    height: 22px;
    transform-origin: 26px 16px;
    animation: wp-hammer 5s infinite;
  }

  /* Each burst = quick rotate jabs toward the trunk (negative = beak
     drives left/down into the bark). */
  @keyframes wp-hammer {
    0%, 2% { transform: rotate(0deg); }
    4% { transform: rotate(-16deg); }
    6% { transform: rotate(2deg); }
    8% { transform: rotate(-16deg); }
    10% { transform: rotate(2deg); }
    12% { transform: rotate(-16deg); }
    14%, 20% { transform: rotate(0deg); }
    22% { transform: rotate(-16deg); }
    24% { transform: rotate(2deg); }
    26% { transform: rotate(-16deg); }
    28% { transform: rotate(2deg); }
    30% { transform: rotate(-16deg); }
    32%, 40% { transform: rotate(0deg); }
    42% { transform: rotate(-16deg); }
    44% { transform: rotate(2deg); }
    46% { transform: rotate(-16deg); }
    48% { transform: rotate(2deg); }
    50% { transform: rotate(-16deg); }
    /* Listening: head cocked back and up. */
    56%, 88% { transform: rotate(11deg); }
    94%, 100% { transform: rotate(0deg); }
  }

  /* Head with crest. */
  .wp-head {
    position: absolute;
    left: 8px;
    top: 2px;
    width: 16px;
    height: 14px;
    border-radius: 55% 45% 50% 50%;
    background: radial-gradient(circle at 45% 40%, rgba(214, 255, 224, 0.95), rgba(0, 150, 30, 0.9) 72%);
    border: 1.5px solid rgba(0, 204, 0, 0.6);
  }

  /* Crest: the woodpecker flash. */
  .wp-crest {
    position: absolute;
    left: 12px;
    top: -4px;
    width: 12px;
    height: 8px;
    clip-path: polygon(0 100%, 35% 20%, 55% 70%, 80% 0, 100% 90%);
    background: #d6ffe0;
  }

  .wp-eye {
    position: absolute;
    left: 12px;
    top: 6px;
    width: 2.5px;
    height: 2.5px;
    border-radius: 50%;
    background: #041a0a;
  }

  /* Chisel beak pointing at the trunk. */
  .wp-beak {
    position: absolute;
    left: -6px;
    top: 7px;
    width: 15px;
    height: 4px;
    clip-path: polygon(0 50%, 100% 0, 100% 100%);
    background: rgba(214, 255, 224, 0.95);
  }

  /* Chips flying during the bursts. */
  .wp-chip {
    position: absolute;
    left: 40px;
    top: 44px;
    width: 3px;
    height: 3px;
    border-radius: 1px;
    background: rgba(190, 255, 205, 0.9);
    opacity: 0;
    animation: wp-chip 5s infinite;
  }

  .wp-chip.c2 { animation-delay: 0.2s; }
  .wp-chip.c3 { animation-delay: 1s; }
  .wp-chip.c4 { animation-delay: 2.1s; }

  @keyframes wp-chip {
    0%, 4% { opacity: 0; transform: translate(0, 0) rotate(0deg); }
    6% { opacity: 1; }
    14% { opacity: 1; transform: translate(-9px, 9px) rotate(80deg); }
    20%, 100% { opacity: 0; transform: translate(-12px, 16px) rotate(120deg); }
  }
`,
};

const woodpeckerMarkup = {
  v1: `
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
    `,
  v2: `
      <div class="wp">
        <div class="wp-trunk"></div>
        <div class="wp-stub"></div>
        <div class="wp-hole"></div>
        <div class="wp-chip c1"></div>
        <div class="wp-chip c2"></div>
        <div class="wp-chip c3"></div>
        <div class="wp-chip c4"></div>
        <div class="wp-bird">
          <div class="wp-tail"></div>
          <div class="wp-foot"></div>
          <div class="wp-body"></div>
          <div class="wp-headset">
            <div class="wp-crest"></div>
            <div class="wp-head"></div>
            <div class="wp-eye"></div>
            <div class="wp-beak"></div>
          </div>
        </div>
      </div>
    `,
};

class ConceptWoodpecker extends HTMLElement {
  static get observedAttributes() { return ['version']; }
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() { this.render(); }
  attributeChangedCallback() { if (this.isConnected) this.render(); }
  render() {
    const version = this.getAttribute('version') || 'v2';
    const styles = woodpeckerStyles[version] || woodpeckerStyles.v2;
    const markup = woodpeckerMarkup[version] || woodpeckerMarkup.v2;
    this.shadowRoot.innerHTML = `<style>${styles}</style>${markup}`;
  }
}

if (!customElements.get('concept-woodpecker')) {
  customElements.define('concept-woodpecker', ConceptWoodpecker);
}
