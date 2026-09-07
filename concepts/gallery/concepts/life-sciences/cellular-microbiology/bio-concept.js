const bioStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  /* --- v1: the original beating dot with ripple --- */
  .bio-v1 {
    width: 20px;
    height: 20px;
    background: var(--accent, #00cc00);
    border-radius: 50%;
    animation: beat 1s infinite;
    position: relative;
  }

  .bio-v1::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid var(--accent, #00cc00);
    border-radius: 50%;
    animation: rip 1s infinite;
    top: 0;
    left: 0;
  }

  @keyframes beat { 10% { transform: scale(1.2) } }
  @keyframes rip { 100% { transform: scale(3); opacity: 0 } }

  /* --- v2: a proper biorhythm chart — three cycles and a today-line --- */
  .bio {
    position: relative;
    width: 104px;
    height: 104px;
    overflow: hidden;
    background: #000;
    border: 1px solid rgba(0, 204, 0, 0.25);
    box-sizing: border-box;
  }

  .bio-grid {
    position: absolute;
    inset: 0;
    background:
      repeating-linear-gradient(0deg, rgba(0, 204, 0, 0.08) 0 1px, transparent 1px 17px),
      repeating-linear-gradient(90deg, rgba(0, 204, 0, 0.08) 0 1px, transparent 1px 17px);
  }

  .bio-baseline {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 1px;
    background: rgba(0, 204, 0, 0.35);
  }

  /* Each cycle is an SVG sine path twice the frame width, scrolled leftward. */
  .bio-wave {
    position: absolute;
    top: 0;
    left: 0;
    width: 208px;
    height: 104px;
    animation: bio-scroll linear infinite;
  }

  .bio-wave.physical { animation-duration: 7s; }
  .bio-wave.emotional { animation-duration: 9.5s; }
  .bio-wave.mental { animation-duration: 12.5s; }

  .bio-wave svg {
    width: 100%;
    height: 100%;
  }

  .bio-wave path {
    fill: none;
    stroke-width: 1.6;
    stroke-linecap: round;
  }

  .bio-wave.physical path {
    stroke: rgba(120, 255, 150, 0.85);
    filter: drop-shadow(0 0 3px rgba(120, 255, 150, 0.5));
  }

  .bio-wave.emotional path {
    stroke: rgba(200, 255, 212, 0.6);
    stroke-dasharray: 5 4;
  }

  .bio-wave.mental path {
    stroke: rgba(0, 204, 0, 0.45);
    stroke-dasharray: 1.5 4;
  }

  /* The "today" cursor line with a glowing sample dot. */
  .bio-today {
    position: absolute;
    top: 6px;
    bottom: 6px;
    left: 50%;
    width: 1px;
    background: linear-gradient(180deg, transparent, rgba(160, 255, 185, 0.7), transparent);
  }

  .bio-dot {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 6px;
    height: 6px;
    margin: -3px 0 0 -3px;
    border-radius: 50%;
    background: #d8ffd0;
    box-shadow: 0 0 8px rgba(200, 255, 212, 0.9);
    animation: bio-ride 7s ease-in-out infinite;
  }

  .bio-tag {
    position: absolute;
    right: 5px;
    top: 4px;
    color: rgba(140, 230, 155, 0.75);
    font-family: monospace;
    font-size: 7px;
    letter-spacing: 0.5px;
  }

  @keyframes bio-scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-104px); }
  }

  /* Rides the physical wave's height at the centerline (approximation). */
  @keyframes bio-ride {
    0%, 100% { transform: translateY(0); }
    12% { transform: translateY(-18px); }
    25% { transform: translateY(-27px); }
    38% { transform: translateY(-14px); }
    50% { transform: translateY(2px); }
    62% { transform: translateY(18px); }
    75% { transform: translateY(26px); }
    88% { transform: translateY(12px); }
  }
`;

const bioMarkup = {
  v1: `<div class="bio-v1"></div>`,
  v2: `
    <div class="bio">
      <div class="bio-grid"></div>
      <div class="bio-baseline"></div>
      <div class="bio-wave physical">
        <svg viewBox="0 0 208 104" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 52 C 13 24, 26 24, 39 52 S 65 80, 78 52 S 104 24, 117 52 S 143 80, 156 52 S 182 24, 195 52 S 221 80, 234 52"></path>
        </svg>
      </div>
      <div class="bio-wave emotional">
        <svg viewBox="0 0 208 104" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 52 C 17 84, 35 84, 52 52 S 87 20, 104 52 S 139 84, 156 52 S 191 20, 208 52 S 243 84, 260 52"></path>
        </svg>
      </div>
      <div class="bio-wave mental">
        <svg viewBox="0 0 208 104" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 52 C 23 32, 46 32, 69 52 S 115 72, 138 52 S 184 32, 207 52 S 253 72, 276 52"></path>
        </svg>
      </div>
      <div class="bio-today"></div>
      <div class="bio-dot"></div>
      <span class="bio-tag">P·E·M</span>
    </div>
  `,
};

class ConceptBio extends HTMLElement {
  static get observedAttributes() {
    return ['version'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
    }
  }

  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${bioStyles}</style>${bioMarkup[version] || bioMarkup.v2}`;
  }
}

if (!customElements.get('concept-bio')) {
  customElements.define('concept-bio', ConceptBio);
}
