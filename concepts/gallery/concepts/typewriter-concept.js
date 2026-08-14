// Typewriter tapping out a line with typebars, platen, bell, and carriage return.
// v1 and v2 are preserved.
// v3 adds full color: vintage 1950s seafoam green enamel casing, chrome typebars,
// ivory paper, dual red/black ribbon, round ivory keys, and brass bell.
const typewriterStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A typewriter tapping out a line: typebars flick up to strike, the
     paper's text grows letter by letter, the carriage creeps left,
     then the return lever throws it back with a bell ding. */
  .tw {
    width: 116px;
    height: 88px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  /* Paper rolled around the platen, carriage riding right-to-left. */
  .tw-carriage {
    position: absolute;
    left: 0;
    top: 4px;
    width: 64px;
    height: 34px;
    animation: tw-carriage 6s steps(1) infinite;
  }

  @keyframes tw-carriage {
    0% { transform: translateX(38px); }
    12% { transform: translateX(32px); }
    24% { transform: translateX(26px); }
    36% { transform: translateX(20px); }
    48% { transform: translateX(14px); }
    60% { transform: translateX(8px); }
    72% { transform: translateX(2px); }
    /* Carriage return. */
    82% { transform: translateX(38px); }
    100% { transform: translateX(38px); }
  }

  .tw-platen {
    position: absolute;
    left: 0;
    top: 20px;
    width: 64px;
    height: 6px;
    border-radius: 3px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.7), rgba(0, 90, 18, 0.8));
  }

  .tw-paper {
    position: absolute;
    left: 8px;
    top: 0;
    width: 48px;
    height: 26px;
    border: 1px solid rgba(140, 255, 170, 0.7);
    background: rgba(0, 30, 6, 0.55);
  }

  /* The typed line grows via steps. */
  .tw-text {
    position: absolute;
    left: 4px;
    top: 12px;
    font-size: 8px;
    letter-spacing: 1px;
    color: #d6ffe0;
    text-shadow: 0 0 3px rgba(0, 204, 0, 0.7);
    white-space: nowrap;
  }

  .tw-text::before {
    content: '';
    animation: tw-text 6s steps(1) infinite;
  }

  @keyframes tw-text {
    0% { content: ''; }
    12% { content: 'H'; }
    24% { content: 'HE'; }
    36% { content: 'HEL'; }
    48% { content: 'HELL'; }
    60% { content: 'HELLO'; }
    72% { content: 'HELLO_'; }
    82% { content: ''; }
  }

  /* Bell ding mark near the margin. */
  .tw-bell {
    position: absolute;
    right: 4px;
    top: 2px;
    width: 6px;
    height: 6px;
    border-radius: 50% 50% 0 0;
    background: rgba(190, 255, 205, 0.8);
    animation: tw-bell 6s steps(1) infinite;
  }

  @keyframes tw-bell {
    0%, 72% { opacity: 0.3; box-shadow: none; }
    74%, 80% { opacity: 1; box-shadow: 0 0 8px rgba(0, 204, 0, 0.9); }
    84%, 100% { opacity: 0.3; box-shadow: none; }
  }

  /* Body / keyboard deck. */
  .tw-body {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 8px;
    height: 34px;
    border-radius: 6px 6px 10px 10px;
    background: linear-gradient(180deg, rgba(0, 90, 18, 0.75), rgba(0, 40, 8, 0.9));
    border: 2px solid var(--accent, #00cc00);
  }

  /* Key rows. */
  .tw-keys {
    position: absolute;
    left: 18px;
    right: 18px;
    bottom: 12px;
    height: 16px;
    background:
      radial-gradient(circle 2.5px, rgba(140, 255, 170, 0.8) 92%, transparent) 0 0 / 9px 8px;
  }

  /* Three typebars fanning up to the strike point in sequence. */
  .tw-bar {
    position: absolute;
    left: 50%;
    bottom: 40px;
    width: 2px;
    height: 22px;
    margin-left: -1px;
    background: linear-gradient(180deg, #d6ffe0, rgba(0, 204, 0, 0.6));
    transform-origin: 50% 100%;
    animation: tw-strike 0.5s ease-in-out infinite;
  }

  .tw-bar.b1 { animation-delay: 0s; }
  .tw-bar.b2 { animation-delay: -0.17s; }
  .tw-bar.b3 { animation-delay: -0.33s; }

  @keyframes tw-strike {
    0%, 100% { transform: rotate(38deg); opacity: 0.35; }
    50% { transform: rotate(0deg); opacity: 1; }
  }

  /* Strike flash at the platen. */
  .tw-flash {
    position: absolute;
    left: 50%;
    bottom: 58px;
    width: 8px;
    height: 8px;
    margin-left: -4px;
    border-radius: 50%;
    background: radial-gradient(circle, #f2ffdd, transparent 70%);
    animation: tw-flash 0.5s steps(1) infinite;
  }

  @keyframes tw-flash {
    0%, 40% { opacity: 0; }
    48% { opacity: 1; }
    60%, 100% { opacity: 0; }
  }

  /* Return lever on the left of the carriage. */
  .tw-lever {
    position: absolute;
    left: 0;
    top: 2px;
    width: 12px;
    height: 3px;
    border-radius: 2px;
    background: rgba(190, 255, 205, 0.85);
    transform-origin: 100% 50%;
    animation: tw-lever 6s steps(1) infinite;
  }

  @keyframes tw-lever {
    0%, 72% { transform: rotate(0deg); }
    76%, 82% { transform: rotate(-40deg); }
    86%, 100% { transform: rotate(0deg); }
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

  .tw {
    width: 116px;
    height: 88px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  /* Paper rolled around the platen, carriage riding right-to-left. */
  .tw-carriage {
    position: absolute;
    left: 0;
    top: 4px;
    width: 64px;
    height: 34px;
    animation: tw-carriage 6s steps(1) infinite;
  }

  @keyframes tw-carriage {
    0% { transform: translateX(38px); }
    12% { transform: translateX(32px); }
    24% { transform: translateX(26px); }
    36% { transform: translateX(20px); }
    48% { transform: translateX(14px); }
    60% { transform: translateX(8px); }
    72% { transform: translateX(2px); }
    /* Carriage return. */
    82% { transform: translateX(38px); }
    100% { transform: translateX(38px); }
  }

  .tw-platen {
    position: absolute;
    left: 0;
    top: 20px;
    width: 64px;
    height: 6px;
    border-radius: 3px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.7), rgba(0, 90, 18, 0.8));
  }

  .tw-paper {
    position: absolute;
    left: 8px;
    top: 0;
    width: 48px;
    height: 26px;
    border: 1px solid rgba(140, 255, 170, 0.7);
    background: rgba(0, 30, 6, 0.55);
  }

  /* The typed line grows via steps. */
  .tw-text {
    position: absolute;
    left: 4px;
    top: 12px;
    font-size: 8px;
    letter-spacing: 1px;
    color: #d6ffe0;
    text-shadow: 0 0 3px rgba(0, 204, 0, 0.7);
    white-space: nowrap;
  }

  .tw-text::before {
    content: '';
    animation: tw-text 6s steps(1) infinite;
  }

  @keyframes tw-text {
    0% { content: ''; }
    12% { content: 'H'; }
    24% { content: 'HE'; }
    36% { content: 'HEL'; }
    48% { content: 'HELL'; }
    60% { content: 'HELLO'; }
    72% { content: 'HELLO_'; }
    82% { content: ''; }
  }

  /* Bell ding mark near the margin. */
  .tw-bell {
    position: absolute;
    right: 4px;
    top: 2px;
    width: 6px;
    height: 6px;
    border-radius: 50% 50% 0 0;
    background: rgba(190, 255, 205, 0.8);
    animation: tw-bell 6s steps(1) infinite;
  }

  @keyframes tw-bell {
    0%, 72% { opacity: 0.3; box-shadow: none; }
    74%, 80% { opacity: 1; box-shadow: 0 0 8px rgba(0, 204, 0, 0.9); }
    84%, 100% { opacity: 0.3; box-shadow: none; }
  }

  /* Body / keyboard deck. */
  .tw-body {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 8px;
    height: 34px;
    border-radius: 6px 6px 10px 10px;
    background: linear-gradient(180deg, rgba(0, 90, 18, 0.75), rgba(0, 40, 8, 0.9));
    border: 2px solid var(--accent, #00cc00);
  }

  /* Key rows. */
  .tw-keys {
    position: absolute;
    left: 18px;
    right: 18px;
    bottom: 12px;
    height: 16px;
    background:
      radial-gradient(circle 2.5px, rgba(140, 255, 170, 0.8) 92%, transparent) 0 0 / 9px 8px;
  }

  /* Frame connecting the keyboard deck up to the carriage. */
  .tw-frame {
    position: absolute;
    left: 10px;
    bottom: 40px;
    width: 2px;
    height: 6px;
    background: rgba(0, 150, 30, 0.7);
  }

  .tw-frame.right { left: auto; right: 10px; }

  /* Three typebars fanning up to the strike point in sequence. */
  .tw-bar {
    position: absolute;
    left: 50%;
    bottom: 40px;
    width: 2px;
    height: 22px;
    margin-left: -1px;
    background: linear-gradient(180deg, #d6ffe0, rgba(0, 204, 0, 0.6));
    transform-origin: 50% 100%;
    animation: tw-strike 0.5s ease-in-out infinite;
  }

  .tw-bar.b1 { animation-delay: 0s; }
  .tw-bar.b2 { animation-delay: -0.17s; }
  .tw-bar.b3 { animation-delay: -0.33s; }

  @keyframes tw-strike {
    0%, 100% { transform: rotate(38deg); opacity: 0.35; }
    50% { transform: rotate(0deg); opacity: 1; }
  }

  /* Strike flash at the platen. */
  .tw-flash {
    position: absolute;
    left: 50%;
    bottom: 58px;
    width: 8px;
    height: 8px;
    margin-left: -4px;
    border-radius: 50%;
    background: radial-gradient(circle, #f2ffdd, transparent 70%);
    animation: tw-flash 0.5s steps(1) infinite;
  }

  @keyframes tw-flash {
    0%, 40% { opacity: 0; }
    48% { opacity: 1; }
    60%, 100% { opacity: 0; }
  }

  /* Return lever on the left of the carriage. */
  .tw-lever {
    position: absolute;
    left: 0;
    top: 2px;
    width: 12px;
    height: 3px;
    border-radius: 2px;
    background: rgba(190, 255, 205, 0.85);
    transform-origin: 100% 50%;
    animation: tw-lever 6s steps(1) infinite;
  }

  @keyframes tw-lever {
    0%, 72% { transform: rotate(0deg); }
    76%, 82% { transform: rotate(-40deg); }
    86%, 100% { transform: rotate(0deg); }
  }
  `,
  v3: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v3: Vintage 1950s Seafoam Green mechanical typewriter with
     chrome typebars, ivory paper, round keys, and golden margin bell */
  .twc {
    width: 116px;
    height: 88px;
    position: relative;
    font-family: 'Courier New', monospace;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Moving Carriage */
  .twc-carriage {
    position: absolute;
    left: 0;
    top: 4px;
    width: 64px;
    height: 34px;
    animation: twc-carriage 6s steps(1) infinite;
  }

  @keyframes twc-carriage {
    0% { transform: translateX(38px); }
    12% { transform: translateX(32px); }
    24% { transform: translateX(26px); }
    36% { transform: translateX(20px); }
    48% { transform: translateX(14px); }
    60% { transform: translateX(8px); }
    72% { transform: translateX(2px); }
    82% { transform: translateX(38px); }
    100% { transform: translateX(38px); }
  }

  /* Black Rubber Platen Cylinder */
  .twc-platen {
    position: absolute;
    left: 0;
    top: 20px;
    width: 64px;
    height: 6px;
    border-radius: 3px;
    background: linear-gradient(180deg, #334155 0%, #0f172a 70%, #020617 100%);
    border: 0.5px solid #64748b;
  }

  /* Crisp Ivory Document Paper */
  .twc-paper {
    position: absolute;
    left: 8px;
    top: 0;
    width: 48px;
    height: 26px;
    border: 1px solid #cbd5e1;
    background: linear-gradient(180deg, #ffffff 0%, #fefce8 80%, #fef08a 100%);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  }

  /* Crisp Black Typed Lettering */
  .twc-text {
    position: absolute;
    left: 4px;
    top: 12px;
    font-size: 8px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #0f172a;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.4);
    white-space: nowrap;
  }

  .twc-text::before {
    content: '';
    animation: twc-text 6s steps(1) infinite;
  }

  @keyframes twc-text {
    0% { content: ''; }
    12% { content: 'H'; }
    24% { content: 'HE'; }
    36% { content: 'HEL'; }
    48% { content: 'HELL'; }
    60% { content: 'HELLO'; }
    72% { content: 'HELLO_'; }
    82% { content: ''; }
  }

  /* Golden Brass Margin Bell */
  .twc-bell {
    position: absolute;
    right: 4px;
    top: 2px;
    width: 6px;
    height: 6px;
    border-radius: 50% 50% 0 0;
    background: #facc15;
    box-shadow: 0 0 2px #eab308;
    animation: twc-bell 6s steps(1) infinite;
  }

  @keyframes twc-bell {
    0%, 72% { opacity: 0.4; box-shadow: none; }
    74%, 80% { opacity: 1; box-shadow: 0 0 10px #facc15; }
    84%, 100% { opacity: 0.4; box-shadow: none; }
  }

  /* Seafoam Green Enameled Body */
  .twc-body {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 8px;
    height: 34px;
    border-radius: 6px 6px 10px 10px;
    background: linear-gradient(180deg, #14b8a6 0%, #0d9488 60%, #115e59 100%);
    border: 2px solid #2dd4bf;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
  }

  /* Round Ivory Typewriter Keys with Chrome Bezel Rings */
  .twc-keys {
    position: absolute;
    left: 18px;
    right: 18px;
    bottom: 12px;
    height: 16px;
    background:
      radial-gradient(circle 2.5px, #fefce8 0 2px, #0f172a 2.5px 3px, transparent 3.5px) 0 0 / 9px 8px;
  }

  /* Chrome Chassis Frame */
  .twc-frame {
    position: absolute;
    left: 10px;
    bottom: 40px;
    width: 2px;
    height: 6px;
    background: #94a3b8;
  }

  .twc-frame.right { left: auto; right: 10px; }

  /* Polished Chrome Typebars */
  .twc-bar {
    position: absolute;
    left: 50%;
    bottom: 40px;
    width: 2px;
    height: 22px;
    margin-left: -1px;
    background: linear-gradient(180deg, #ffffff, #94a3b8);
    transform-origin: 50% 100%;
    animation: twc-strike 0.5s ease-in-out infinite;
  }

  .twc-bar.b1 { animation-delay: 0s; }
  .twc-bar.b2 { animation-delay: -0.17s; }
  .twc-bar.b3 { animation-delay: -0.33s; }

  @keyframes twc-strike {
    0%, 100% { transform: rotate(38deg); opacity: 0.35; }
    50% { transform: rotate(0deg); opacity: 1; }
  }

  /* Ink Strike Flare */
  .twc-flash {
    position: absolute;
    left: 50%;
    bottom: 58px;
    width: 8px;
    height: 8px;
    margin-left: -4px;
    border-radius: 50%;
    background: radial-gradient(circle, #fde047 0%, transparent 70%);
    animation: twc-flash 0.5s steps(1) infinite;
  }

  @keyframes twc-flash {
    0%, 40% { opacity: 0; }
    48% { opacity: 1; }
    60%, 100% { opacity: 0; }
  }

  /* Chrome Carriage Return Lever */
  .twc-lever {
    position: absolute;
    left: 0;
    top: 2px;
    width: 12px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, #f1f5f9, #94a3b8);
    box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);
    transform-origin: 100% 50%;
    animation: twc-lever 6s steps(1) infinite;
  }

  @keyframes twc-lever {
    0%, 72% { transform: rotate(0deg); }
    76%, 82% { transform: rotate(-40deg); }
    86%, 100% { transform: rotate(0deg); }
  }
  `,
};

const typewriterMarkup = {
  v1: `
      <div class="tw">
        <div class="tw-bar b1"></div>
        <div class="tw-bar b2"></div>
        <div class="tw-bar b3"></div>
        <div class="tw-flash"></div>
        <div class="tw-carriage">
          <div class="tw-lever"></div>
          <div class="tw-paper"><span class="tw-text"></span></div>
          <div class="tw-bell"></div>
          <div class="tw-platen"></div>
        </div>
        <div class="tw-body"></div>
        <div class="tw-keys"></div>
      </div>
    `,
  v2: `
      <div class="tw">
        <div class="tw-frame"></div>
        <div class="tw-frame right"></div>
        <div class="tw-bar b1"></div>
        <div class="tw-bar b2"></div>
        <div class="tw-bar b3"></div>
        <div class="tw-flash"></div>
        <div class="tw-carriage">
          <div class="tw-lever"></div>
          <div class="tw-paper"><span class="tw-text"></span></div>
          <div class="tw-bell"></div>
          <div class="tw-platen"></div>
        </div>
        <div class="tw-body"></div>
        <div class="tw-keys"></div>
      </div>
    `,
  v3: `
      <div class="twc">
        <div class="twc-frame"></div>
        <div class="twc-frame right"></div>
        <div class="twc-bar b1"></div>
        <div class="twc-bar b2"></div>
        <div class="twc-bar b3"></div>
        <div class="twc-flash"></div>
        <div class="twc-carriage">
          <div class="twc-lever"></div>
          <div class="twc-paper"><span class="twc-text"></span></div>
          <div class="twc-bell"></div>
          <div class="twc-platen"></div>
        </div>
        <div class="twc-body"></div>
        <div class="twc-keys"></div>
      </div>
    `,
};

class ConceptTypewriter extends HTMLElement {
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
    const version = this.getAttribute('version') || 'v3';
    const styles = typewriterStyles[version] || typewriterStyles.v3;
    const markup = typewriterMarkup[version] || typewriterMarkup.v3;
    this.shadowRoot.innerHTML = `<style>${styles}</style>${markup}`;
  }
}

if (!customElements.get('concept-typewriter')) {
  customElements.define('concept-typewriter', ConceptTypewriter);
}
