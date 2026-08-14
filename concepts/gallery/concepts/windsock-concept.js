// v1 is the archived original from before the rebuild, preserved verbatim.
const windsockStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* An airfield windsock reading the breeze: banded cone stiffens
     and lifts on a gust, its striped tail rippling, then droops as
     the wind falls off. A pennant on the mast top shows direction. */
  .ws {
    width: 112px;
    height: 88px;
    position: relative;
  }

  /* Mast. */
  .ws-mast {
    position: absolute;
    left: 12px;
    bottom: 8px;
    width: 4px;
    height: 64px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.7), rgba(0, 90, 18, 0.7));
  }

  .ws-mast::before {
    content: '';
    position: absolute;
    left: -6px;
    bottom: -2px;
    width: 16px;
    height: 3px;
    border-radius: 2px;
    background: rgba(0, 204, 0, 0.55);
  }

  /* Ring the sock hangs from. */
  .ws-ring {
    position: absolute;
    left: 14px;
    top: 16px;
    width: 10px;
    height: 14px;
    border: 2px solid rgba(140, 255, 170, 0.8);
    border-radius: 50%;
  }

  /* The sock: a chain of banded segments hinged at the ring, each
     lagging the one before so a gust ripples down its length. */
  .ws-seg {
    position: absolute;
    top: 17px;
    height: 12px;
    transform-origin: 0% 50%;
    animation: ws-lift var(--dur, 4s) ease-in-out infinite var(--ph);
  }

  .ws-band {
    position: absolute;
    inset: 0;
    border: 1px solid rgba(0, 204, 0, 0.55);
  }

  .ws-band.bright { background: rgba(140, 255, 170, 0.7); }
  .ws-band.dark { background: rgba(0, 90, 18, 0.7); }

  .ws-seg.s1 { left: 24px; width: 20px; --ph: 0s; }
  .ws-seg.s2 { left: 44px; width: 18px; --ph: -0.25s; }
  .ws-seg.s3 { left: 62px; width: 16px; --ph: -0.5s; }
  .ws-seg.s4 { left: 78px; width: 13px; --ph: -0.75s; }
  .ws-seg.s5 { left: 91px; width: 11px; --ph: -1s; }

  .ws-seg.s1 .ws-band { border-radius: 2px 0 0 2px; }

  /* Lift: droops (down-angled, narrowed) at rest, snaps out
     horizontal and full on the gust. Segments taper via scaleY. */
  @keyframes ws-lift {
    0%, 100% { transform: rotate(42deg) scaleY(0.72); }
    30% { transform: rotate(2deg) scaleY(1); }
    50% { transform: rotate(-4deg) scaleY(1); }
    64% { transform: rotate(4deg) scaleY(0.95); }
  }

  /* Direction pennant at the mast top. */
  .ws-pennant {
    position: absolute;
    left: 16px;
    top: 6px;
    width: 16px;
    height: 8px;
    clip-path: polygon(0 0, 100% 30%, 55% 50%, 100% 70%, 0 100%);
    background: rgba(190, 255, 205, 0.85);
    transform-origin: 0% 50%;
    animation: ws-pennant 2.2s ease-in-out infinite;
  }

  @keyframes ws-pennant {
    0%, 100% { transform: rotate(-4deg) scaleX(0.9); }
    50% { transform: rotate(6deg) scaleX(1.05); }
  }

  /* Gust streaks. */
  .ws-gust {
    position: absolute;
    height: 1.5px;
    border-radius: 1px;
    background: linear-gradient(90deg, transparent, rgba(140, 255, 170, 0.6), transparent);
    opacity: 0;
    animation: ws-gust 4s ease-in infinite;
  }

  .ws-gust.g1 { top: 14px; left: 20px; width: 30px; }
  .ws-gust.g2 { top: 34px; left: 30px; width: 40px; animation-delay: -1.5s; }
  .ws-gust.g3 { top: 24px; left: 24px; width: 26px; animation-delay: -0.7s; }

  @keyframes ws-gust {
    0%, 14% { transform: translateX(0); opacity: 0; }
    24% { opacity: 0.85; }
    30% { opacity: 0.85; }
    50% { transform: translateX(70px); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Wind-speed knots readout. */
  .ws-read {
    position: absolute;
    right: 4px;
    bottom: 2px;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 1px;
    color: rgba(140, 255, 170, 0.8);
  }

  .ws-read::before {
    content: '05 kt';
    animation: ws-read 4s steps(1) infinite;
  }

  @keyframes ws-read {
    0% { content: '05 kt'; }
    30% { content: '18 kt'; }
    50% { content: '22 kt'; }
    64% { content: '15 kt'; }
    85% { content: '05 kt'; }
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

  /* An airfield windsock reading the breeze: banded cone stiffens
     and lifts on a gust, its striped tail rippling, then droops as
     the wind falls off. A pennant on the mast top shows direction. */
  .ws {
    width: 112px;
    height: 88px;
    position: relative;
  }

  /* Mast. */
  .ws-mast {
    position: absolute;
    left: 12px;
    bottom: 8px;
    width: 4px;
    height: 64px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.7), rgba(0, 90, 18, 0.7));
  }

  .ws-mast::before {
    content: '';
    position: absolute;
    left: -6px;
    bottom: -2px;
    width: 16px;
    height: 3px;
    border-radius: 2px;
    background: rgba(0, 204, 0, 0.55);
  }

  /* Ring the sock hangs from. */
  .ws-ring {
    position: absolute;
    left: 14px;
    top: 16px;
    width: 10px;
    height: 14px;
    border: 2px solid rgba(140, 255, 170, 0.8);
    border-radius: 50%;
  }

  /* The sock: a NESTED chain of banded segments — each one hinges at
     the tail of the one before it, so the whole cone droops and lifts
     as connected fabric instead of separating into chevrons. */
  .ws-seg {
    position: absolute;
    transform-origin: 0% 50%;
    border: 1px solid rgba(0, 204, 0, 0.55);
    animation: ws-lift 4s ease-in-out infinite var(--ph, 0s);
  }

  .ws-seg.bright { background: rgba(140, 255, 170, 0.7); }
  .ws-seg.dark { background: rgba(0, 90, 18, 0.7); }

  /* Root segment hangs off the ring; children chain from each tail,
     tapering and centring on the parent's cross-axis. */
  .ws-seg.s1 { left: 24px; top: 17px; width: 20px; height: 13px; border-radius: 3px 0 0 3px; --rest: 38deg; --gust: 1deg; }
  .ws-seg .ws-seg { left: calc(100% - 1px); }
  .ws-seg.s2 { top: 0.5px; width: 18px; height: 11.5px; --rest: 9deg; --gust: -1.5deg; --ph: -0.12s; }
  .ws-seg.s3 { top: 0.5px; width: 16px; height: 10px; --rest: 10deg; --gust: -1deg; --ph: -0.24s; }
  .ws-seg.s4 { top: 0.5px; width: 13px; height: 8.5px; --rest: 11deg; --gust: 2deg; --ph: -0.36s; }
  .ws-seg.s5 { top: 0.5px; width: 11px; height: 7px; border-radius: 0 2px 2px 0; --rest: 12deg; --gust: 3deg; --ph: -0.48s; }

  /* Droop at rest, stream on the gust; the per-segment lag makes the
     lift ripple down the fabric. */
  @keyframes ws-lift {
    0%, 100% { transform: rotate(var(--rest)); }
    30% { transform: rotate(var(--gust)); }
    50% { transform: rotate(calc(var(--gust) - 3deg)); }
    64% { transform: rotate(calc(var(--gust) + 3deg)); }
  }

  /* Direction pennant at the mast top. */
  .ws-pennant {
    position: absolute;
    left: 16px;
    top: 6px;
    width: 16px;
    height: 8px;
    clip-path: polygon(0 0, 100% 30%, 55% 50%, 100% 70%, 0 100%);
    background: rgba(190, 255, 205, 0.85);
    transform-origin: 0% 50%;
    animation: ws-pennant 2.2s ease-in-out infinite;
  }

  @keyframes ws-pennant {
    0%, 100% { transform: rotate(-4deg) scaleX(0.9); }
    50% { transform: rotate(6deg) scaleX(1.05); }
  }

  /* Gust streaks. */
  .ws-gust {
    position: absolute;
    height: 1.5px;
    border-radius: 1px;
    background: linear-gradient(90deg, transparent, rgba(140, 255, 170, 0.6), transparent);
    opacity: 0;
    animation: ws-gust 4s ease-in infinite;
  }

  .ws-gust.g1 { top: 14px; left: 20px; width: 30px; }
  .ws-gust.g2 { top: 34px; left: 30px; width: 40px; animation-delay: -1.5s; }
  .ws-gust.g3 { top: 24px; left: 24px; width: 26px; animation-delay: -0.7s; }

  @keyframes ws-gust {
    0%, 14% { transform: translateX(0); opacity: 0; }
    24% { opacity: 0.85; }
    30% { opacity: 0.85; }
    50% { transform: translateX(70px); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Wind-speed knots readout. */
  .ws-read {
    position: absolute;
    right: 4px;
    bottom: 2px;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 1px;
    color: rgba(140, 255, 170, 0.8);
  }

  .ws-read::before {
    content: '05 kt';
    animation: ws-read 4s steps(1) infinite;
  }

  @keyframes ws-read {
    0% { content: '05 kt'; }
    30% { content: '18 kt'; }
    50% { content: '22 kt'; }
    64% { content: '15 kt'; }
    85% { content: '05 kt'; }
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

  /* v3: FAA/ICAO standard airfield colors: high-visibility International Orange
     and Aviation White stripes, brushed stainless steel swivel mast, brass mounting ring,
     and translucent wind velocity vectors. */
  .wsc {
    width: 112px;
    height: 88px;
    position: relative;
  }

  /* Stainless steel mast with cast mounting flange */
  .wsc-mast {
    position: absolute;
    left: 12px;
    bottom: 8px;
    width: 4px;
    height: 64px;
    background: linear-gradient(90deg, #94a3b8, #f1f5f9 45%, #64748b 100%);
    border-radius: 1px;
  }

  .wsc-mast::before {
    content: '';
    position: absolute;
    left: -6px;
    bottom: -2px;
    width: 16px;
    height: 3px;
    border-radius: 2px;
    background: #475569;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  }

  /* Gold-anodized brass throat hoop */
  .wsc-ring {
    position: absolute;
    left: 14px;
    top: 16px;
    width: 10px;
    height: 14px;
    border: 2px solid #ffd700;
    border-radius: 50%;
    box-shadow: 0 0 6px rgba(255, 215, 0, 0.4);
  }

  /* The sock: FAA 5-band high-vis international orange and pure white */
  .wsc-seg {
    position: absolute;
    transform-origin: 0% 50%;
    animation: wsc-lift 4s ease-in-out infinite var(--ph, 0s);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.35);
  }

  .wsc-seg.orange {
    background: linear-gradient(180deg, #ff6b1a 0%, #e64a00 65%, #bf360c 100%);
    border: 1px solid rgba(255, 138, 101, 0.8);
  }

  .wsc-seg.white {
    background: linear-gradient(180deg, #ffffff 0%, #e2e8f0 70%, #cbd5e1 100%);
    border: 1px solid rgba(255, 255, 255, 0.9);
  }

  .wsc-seg.s1 { left: 24px; top: 17px; width: 20px; height: 13px; border-radius: 3px 0 0 3px; --rest: 38deg; --gust: 1deg; }
  .wsc-seg .wsc-seg { left: calc(100% - 1px); }
  .wsc-seg.s2 { top: 0.5px; width: 18px; height: 11.5px; --rest: 9deg; --gust: -1.5deg; --ph: -0.12s; }
  .wsc-seg.s3 { top: 0.5px; width: 16px; height: 10px; --rest: 10deg; --gust: -1deg; --ph: -0.24s; }
  .wsc-seg.s4 { top: 0.5px; width: 13px; height: 8.5px; --rest: 11deg; --gust: 2deg; --ph: -0.36s; }
  .wsc-seg.s5 { top: 0.5px; width: 11px; height: 7px; border-radius: 0 2px 2px 0; --rest: 12deg; --gust: 3deg; --ph: -0.48s; }

  @keyframes wsc-lift {
    0%, 100% { transform: rotate(var(--rest)); }
    30% { transform: rotate(var(--gust)); }
    50% { transform: rotate(calc(var(--gust) - 3deg)); }
    64% { transform: rotate(calc(var(--gust) + 3deg)); }
  }

  /* Directional masthead wind vane pennant */
  .wsc-pennant {
    position: absolute;
    left: 16px;
    top: 6px;
    width: 16px;
    height: 8px;
    clip-path: polygon(0 0, 100% 30%, 55% 50%, 100% 70%, 0 100%);
    background: linear-gradient(90deg, #ff3d00, #ff9100);
    box-shadow: 0 0 6px rgba(255, 61, 0, 0.6);
    transform-origin: 0% 50%;
    animation: wsc-pennant 2.2s ease-in-out infinite;
  }

  @keyframes wsc-pennant {
    0%, 100% { transform: rotate(-4deg) scaleX(0.9); }
    50% { transform: rotate(6deg) scaleX(1.05); }
  }

  /* Airflow velocity streamlines */
  .wsc-gust {
    position: absolute;
    height: 1.5px;
    border-radius: 1px;
    background: linear-gradient(90deg, transparent, rgba(200, 235, 255, 0.8), transparent);
    opacity: 0;
    animation: wsc-gust 4s ease-in infinite;
  }

  .wsc-gust.g1 { top: 14px; left: 20px; width: 30px; }
  .wsc-gust.g2 { top: 34px; left: 30px; width: 40px; animation-delay: -1.5s; }
  .wsc-gust.g3 { top: 24px; left: 24px; width: 26px; animation-delay: -0.7s; }

  @keyframes wsc-gust {
    0%, 14% { transform: translateX(0); opacity: 0; }
    24% { opacity: 0.9; }
    30% { opacity: 0.9; }
    50% { transform: translateX(70px); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Anemometer airspeed gauge */
  .wsc-read {
    position: absolute;
    right: 4px;
    bottom: 2px;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #e0f2fe;
    text-shadow: 0 0 6px rgba(56, 189, 248, 0.8);
  }

  .wsc-read::before {
    content: '05 kt';
    animation: wsc-read 4s steps(1) infinite;
  }

  @keyframes wsc-read {
    0% { content: '05 kt'; }
    30% { content: '18 kt'; }
    50% { content: '22 kt'; }
    64% { content: '15 kt'; }
    85% { content: '05 kt'; }
  }
`,
};

const windsockMarkup = {
  v1: `
      <div class="ws">
        <div class="ws-gust g1"></div>
        <div class="ws-gust g2"></div>
        <div class="ws-gust g3"></div>
        <div class="ws-mast"></div>
        <div class="ws-pennant"></div>
        <div class="ws-ring"></div>
        <div class="ws-seg s1"><div class="ws-band bright"></div></div>
        <div class="ws-seg s2"><div class="ws-band dark"></div></div>
        <div class="ws-seg s3"><div class="ws-band bright"></div></div>
        <div class="ws-seg s4"><div class="ws-band dark"></div></div>
        <div class="ws-seg s5"><div class="ws-band bright"></div></div>
        <div class="ws-read"></div>
      </div>
    `,
  v2: `
      <div class="ws">
        <div class="ws-gust g1"></div>
        <div class="ws-gust g2"></div>
        <div class="ws-gust g3"></div>
        <div class="ws-mast"></div>
        <div class="ws-pennant"></div>
        <div class="ws-ring"></div>
        <div class="ws-seg s1 bright">
          <div class="ws-seg s2 dark">
            <div class="ws-seg s3 bright">
              <div class="ws-seg s4 dark">
                <div class="ws-seg s5 bright"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="ws-read"></div>
      </div>
    `,
  v3: `
      <div class="wsc">
        <div class="wsc-gust g1"></div>
        <div class="wsc-gust g2"></div>
        <div class="wsc-gust g3"></div>
        <div class="wsc-mast"></div>
        <div class="wsc-pennant"></div>
        <div class="wsc-ring"></div>
        <div class="wsc-seg s1 orange">
          <div class="wsc-seg s2 white">
            <div class="wsc-seg s3 orange">
              <div class="wsc-seg s4 white">
                <div class="wsc-seg s5 orange"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="wsc-read"></div>
      </div>
    `,
};

class ConceptWindsock extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${windsockStyles[version] || windsockStyles.v3}</style>${windsockMarkup[version] || windsockMarkup.v3}`;
  }
}

if (!customElements.get('concept-windsock')) {
  customElements.define('concept-windsock', ConceptWindsock);
}
