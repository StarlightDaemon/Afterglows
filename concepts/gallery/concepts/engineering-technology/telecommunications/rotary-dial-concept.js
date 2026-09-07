const rotaryDialStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .rotary {
    width: 104px;
    height: 104px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rotary-plate {
    position: relative;
    width: 88px;
    height: 88px;
    border-radius: 50%;
    background: radial-gradient(circle at 42% 34%, #123c1e 0%, #0a2411 55%, #061607 100%);
    border: 2px solid rgba(140, 255, 170, 0.6);
    box-sizing: border-box;
    box-shadow: 0 0 12px rgba(0, 204, 0, 0.25);
  }

  .rotary-dial {
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    border: 1px solid rgba(140, 255, 170, 0.35);
    animation: rotary-dial 7.5s ease-in-out infinite;
  }

  .rotary-hole {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 11px;
    height: 11px;
    margin: -5.5px 0 0 -5.5px;
    border-radius: 50%;
    background: #010401;
    border: 1px solid rgba(160, 255, 185, 0.65);
    transform: rotate(var(--hole-angle)) translateY(-28px);
  }

  .rotary-hole.h1 { --hole-angle: 0deg; }
  .rotary-hole.h2 { --hole-angle: 33deg; }
  .rotary-hole.h3 { --hole-angle: 66deg; }
  .rotary-hole.h4 { --hole-angle: 99deg; }
  .rotary-hole.h5 { --hole-angle: 132deg; }
  .rotary-hole.h6 { --hole-angle: 165deg; }
  .rotary-hole.h7 { --hole-angle: 198deg; }
  .rotary-hole.h8 { --hole-angle: 231deg; }
  .rotary-hole.h9 { --hole-angle: 264deg; }
  .rotary-hole.h0 { --hole-angle: 297deg; }

  .rotary-stop {
    position: absolute;
    bottom: 12px;
    right: 10px;
    width: 5px;
    height: 14px;
    border-radius: 3px;
    background: #d8ffbb;
    box-shadow: 0 0 6px rgba(216, 255, 187, 0.6);
    transform: rotate(-38deg);
    z-index: 3;
  }

  .rotary-cap {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 26px;
    height: 26px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: #051206;
    border: 1px solid rgba(190, 255, 205, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: monospace;
    font-size: 11px;
    color: rgba(200, 255, 210, 0.9);
    z-index: 2;
  }

  .rotary-digit {
    position: absolute;
    opacity: 0;
    animation: rotary-digit 7.5s linear infinite;
  }

  .rotary-digit.d2 { animation-delay: 2.5s; }
  .rotary-digit.d3 { animation-delay: 5s; }

  .rotary-cord {
    position: absolute;
    bottom: 2px;
    left: 50%;
    width: 30px;
    height: 8px;
    margin-left: -15px;
    border-bottom: 2px dotted rgba(0, 204, 0, 0.45);
  }

  @keyframes rotary-dial {
    0%, 3% { transform: rotate(0deg); }
    12% { transform: rotate(118deg); }
    14% { transform: rotate(118deg); }
    20% { transform: rotate(-7deg); }
    23%, 33% { transform: rotate(0deg); }
    43% { transform: rotate(196deg); }
    45% { transform: rotate(196deg); }
    53% { transform: rotate(-8deg); }
    56%, 66% { transform: rotate(0deg); }
    75% { transform: rotate(83deg); }
    77% { transform: rotate(83deg); }
    82% { transform: rotate(-5deg); }
    85%, 100% { transform: rotate(0deg); }
  }

  @keyframes rotary-digit {
    0%, 20% { opacity: 0; }
    24%, 30% { opacity: 1; text-shadow: 0 0 6px rgba(200, 255, 210, 0.8); }
    33%, 100% { opacity: 0; }
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

  /* v2: Vintage black bakelite rotary dial phone with brass stop hook,
     ivory numerals, and glowing green center readout */
  .rotaryc {
    width: 104px;
    height: 104px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
  }

  /* Black bakelite casing */
  .rotaryc-plate {
    position: relative;
    width: 88px;
    height: 88px;
    border-radius: 50%;
    background: radial-gradient(circle at 42% 34%, #334155 0%, #1e293b 50%, #09090b 100%);
    border: 2.5px solid #64748b;
    box-sizing: border-box;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.9), inset 0 2px 4px rgba(255, 255, 255, 0.3);
  }

  /* Rotating dial wheel */
  .rotaryc-dial {
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.3);
    animation: rotaryc-dial 7.5s ease-in-out infinite;
  }

  /* Finger hole apertures */
  .rotaryc-hole {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 11px;
    height: 11px;
    margin: -5.5px 0 0 -5.5px;
    border-radius: 50%;
    background: #020617;
    border: 1.5px solid #ffffff;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.8), 0 0 3px rgba(255, 255, 255, 0.6);
    transform: rotate(var(--hole-angle)) translateY(-28px);
  }

  .rotaryc-hole.h1 { --hole-angle: 0deg; }
  .rotaryc-hole.h2 { --hole-angle: 33deg; }
  .rotaryc-hole.h3 { --hole-angle: 66deg; }
  .rotaryc-hole.h4 { --hole-angle: 99deg; }
  .rotaryc-hole.h5 { --hole-angle: 132deg; }
  .rotaryc-hole.h6 { --hole-angle: 165deg; }
  .rotaryc-hole.h7 { --hole-angle: 198deg; }
  .rotaryc-hole.h8 { --hole-angle: 231deg; }
  .rotaryc-hole.h9 { --hole-angle: 264deg; }
  .rotaryc-hole.h0 { --hole-angle: 297deg; }

  /* Polished brass finger stop hook */
  .rotaryc-stop {
    position: absolute;
    bottom: 12px;
    right: 10px;
    width: 5px;
    height: 14px;
    border-radius: 3px;
    background: linear-gradient(180deg, #fef08a, #ca8a04);
    box-shadow: 0 0 6px #eab308;
    transform: rotate(-38deg);
    z-index: 3;
  }

  /* Center medallion */
  .rotaryc-cap {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 26px;
    height: 26px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: #09090b;
    border: 2px solid #ca8a04;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: monospace;
    font-size: 11px;
    font-weight: bold;
    color: #4ade80;
    z-index: 2;
  }

  .rotaryc-digit {
    position: absolute;
    opacity: 0;
    animation: rotaryc-digit 7.5s linear infinite;
  }

  .rotaryc-digit.d2 { animation-delay: 2.5s; }
  .rotaryc-digit.d3 { animation-delay: 5s; }

  /* Cord stub */
  .rotaryc-cord {
    position: absolute;
    bottom: 2px;
    left: 50%;
    width: 30px;
    height: 8px;
    margin-left: -15px;
    border-bottom: 2px dotted #38bdf8;
  }

  @keyframes rotaryc-dial {
    0%, 3% { transform: rotate(0deg); }
    12% { transform: rotate(118deg); }
    14% { transform: rotate(118deg); }
    20% { transform: rotate(-7deg); }
    23%, 33% { transform: rotate(0deg); }
    43% { transform: rotate(196deg); }
    45% { transform: rotate(196deg); }
    53% { transform: rotate(-8deg); }
    56%, 66% { transform: rotate(0deg); }
    75% { transform: rotate(83deg); }
    77% { transform: rotate(83deg); }
    82% { transform: rotate(-5deg); }
    85%, 100% { transform: rotate(0deg); }
  }

  @keyframes rotaryc-digit {
    0%, 20% { opacity: 0; }
    24%, 30% { opacity: 1; text-shadow: 0 0 8px #22c55e; }
    33%, 100% { opacity: 0; }
  }
  `,
};

const rotaryDialMarkup = {
  v1: (holes) => `
      <div class="rotary">
        <div class="rotary-plate">
          <div class="rotary-dial">${holes}</div>
          <div class="rotary-stop"></div>
          <div class="rotary-cap">
            <span class="rotary-digit">3</span>
            <span class="rotary-digit d2">5</span>
            <span class="rotary-digit d3">2</span>
          </div>
          <div class="rotary-cord"></div>
        </div>
      </div>
    `,
  v2: (holes) => `
      <div class="rotaryc">
        <div class="rotaryc-plate">
          <div class="rotaryc-dial">${holes}</div>
          <div class="rotaryc-stop"></div>
          <div class="rotaryc-cap">
            <span class="rotaryc-digit">3</span>
            <span class="rotaryc-digit d2">5</span>
            <span class="rotaryc-digit d3">2</span>
          </div>
          <div class="rotaryc-cord"></div>
        </div>
      </div>
    `,
};

class ConceptRotaryDial extends HTMLElement {
  static get observedAttributes() { return ['version']; }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }
  render() {
    const version = this.getAttribute('version') || 'v2';
    const holeCls = version === 'v2' ? 'rotaryc-hole' : 'rotary-hole';
    const holes = ['h1','h2','h3','h4','h5','h6','h7','h8','h9','h0']
      .map((h) => `<div class="${holeCls} ${h}"></div>`)
      .join('');
    this.shadowRoot.innerHTML = `<style>${rotaryDialStyles[version] || rotaryDialStyles.v2}</style>${(rotaryDialMarkup[version] || rotaryDialMarkup.v2)(holes)}`;
  }
}

if (!customElements.get('concept-rotary-dial')) {
  customElements.define('concept-rotary-dial', ConceptRotaryDial);
}
