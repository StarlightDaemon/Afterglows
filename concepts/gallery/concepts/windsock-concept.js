const windsockStyles = `
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
`;

class ConceptWindsock extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${windsockStyles}</style>
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
    `;
  }
}

if (!customElements.get('concept-windsock')) {
  customElements.define('concept-windsock', ConceptWindsock);
}
