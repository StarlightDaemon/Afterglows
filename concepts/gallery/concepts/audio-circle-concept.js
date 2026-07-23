const audioCircleStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  /* --- v1: the original pulsing circle --- */
  .audio-c {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 204, 0, 0.3) 0%, transparent 70%);
    border: 2px solid var(--accent, #00cc00);
    box-shadow: 0 0 10px var(--accent, #00cc00), inset 0 0 10px rgba(0, 204, 0, 0.2);
    animation: audio-pulse 1s ease-in-out infinite;
    position: relative;
  }

  .audio-c::before,
  .audio-c::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid var(--accent, #00cc00);
    border-radius: 50%;
    animation: audio-ring 1s ease-out infinite;
  }

  .audio-c::before { width: 70px; height: 70px; }
  .audio-c::after { width: 90px; height: 90px; animation-delay: 0.3s; }

  @keyframes audio-pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  @keyframes audio-ring {
    0% { opacity: 0.8; transform: translate(-50%, -50%) scale(0.8); }
    100% { opacity: 0; transform: translate(-50%, -50%) scale(1.2); }
  }

  /* --- v2: circular spectrum analyser ---
     Sixteen radial bars dance around a beating speaker hub. Bars sit
     on a dashed guide ring; each has its own phase and rate so the
     ring shimmers like a live spectrum, and a soft ripple leaves the
     hub on every beat. */
  .ac2 {
    width: 104px;
    height: 104px;
    position: relative;
  }

  .ac2-guide {
    position: absolute;
    inset: 24px;
    border: 1px dashed rgba(0, 204, 0, 0.3);
    border-radius: 50%;
  }

  .ac2-spoke {
    position: absolute;
    inset: 0;
    transform: rotate(var(--rot));
  }

  /* Each bar grows outward from the guide ring. transform-origin at
     the bottom keeps the inner end planted. */
  .ac2-bar {
    position: absolute;
    top: 6px;
    left: 50%;
    width: 3px;
    height: 22px;
    margin-left: -1.5px;
    border-radius: 1.5px;
    background: linear-gradient(0deg, rgba(0, 204, 0, 0.9), rgba(190, 255, 205, 0.95));
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.55);
    transform-origin: 50% 100%;
    transform: scaleY(0.3);
    animation: ac2-dance var(--dur, 1.3s) ease-in-out infinite var(--ph, 0s);
  }

  @keyframes ac2-dance {
    0%, 100% { transform: scaleY(0.22); opacity: 0.55; }
    35% { transform: scaleY(1); opacity: 1; }
    55% { transform: scaleY(0.45); opacity: 0.8; }
    75% { transform: scaleY(0.85); opacity: 1; }
  }

  .ac2-spoke.k0  { --rot: 0deg;     } .ac2-spoke.k0  .ac2-bar { --dur: 1.15s; --ph: -0.2s; }
  .ac2-spoke.k1  { --rot: 22.5deg;  } .ac2-spoke.k1  .ac2-bar { --dur: 1.4s;  --ph: -0.9s; }
  .ac2-spoke.k2  { --rot: 45deg;    } .ac2-spoke.k2  .ac2-bar { --dur: 1.2s;  --ph: -0.5s; }
  .ac2-spoke.k3  { --rot: 67.5deg;  } .ac2-spoke.k3  .ac2-bar { --dur: 1.55s; --ph: -1.2s; }
  .ac2-spoke.k4  { --rot: 90deg;    } .ac2-spoke.k4  .ac2-bar { --dur: 1.1s;  --ph: -0.7s; }
  .ac2-spoke.k5  { --rot: 112.5deg; } .ac2-spoke.k5  .ac2-bar { --dur: 1.45s; --ph: -0.15s; }
  .ac2-spoke.k6  { --rot: 135deg;   } .ac2-spoke.k6  .ac2-bar { --dur: 1.25s; --ph: -1.0s; }
  .ac2-spoke.k7  { --rot: 157.5deg; } .ac2-spoke.k7  .ac2-bar { --dur: 1.5s;  --ph: -0.4s; }
  .ac2-spoke.k8  { --rot: 180deg;   } .ac2-spoke.k8  .ac2-bar { --dur: 1.18s; --ph: -0.85s; }
  .ac2-spoke.k9  { --rot: 202.5deg; } .ac2-spoke.k9  .ac2-bar { --dur: 1.38s; --ph: -0.3s; }
  .ac2-spoke.k10 { --rot: 225deg;   } .ac2-spoke.k10 .ac2-bar { --dur: 1.28s; --ph: -1.15s; }
  .ac2-spoke.k11 { --rot: 247.5deg; } .ac2-spoke.k11 .ac2-bar { --dur: 1.48s; --ph: -0.6s; }
  .ac2-spoke.k12 { --rot: 270deg;   } .ac2-spoke.k12 .ac2-bar { --dur: 1.12s; --ph: -0.05s; }
  .ac2-spoke.k13 { --rot: 292.5deg; } .ac2-spoke.k13 .ac2-bar { --dur: 1.42s; --ph: -0.95s; }
  .ac2-spoke.k14 { --rot: 315deg;   } .ac2-spoke.k14 .ac2-bar { --dur: 1.22s; --ph: -0.45s; }
  .ac2-spoke.k15 { --rot: 337.5deg; } .ac2-spoke.k15 .ac2-bar { --dur: 1.52s; --ph: -1.25s; }

  /* Speaker hub: cone dot beating, ripple ring on each beat. */
  .ac2-hub {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 22px;
    height: 22px;
    margin: -11px 0 0 -11px;
    border-radius: 50%;
    border: 2px solid var(--accent, #00cc00);
    background: radial-gradient(circle at 42% 36%, rgba(190, 255, 205, 0.7), rgba(0, 90, 18, 0.8) 70%);
    box-shadow: 0 0 9px rgba(0, 204, 0, 0.6);
    animation: ac2-beat 1.3s ease-in-out infinite;
  }

  @keyframes ac2-beat {
    0%, 100% { transform: scale(1); }
    18% { transform: scale(1.22); }
    36% { transform: scale(0.96); }
  }

  .ac2-ripple {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 26px;
    height: 26px;
    margin: -13px 0 0 -13px;
    border: 1px solid rgba(140, 255, 170, 0.8);
    border-radius: 50%;
    opacity: 0;
    animation: ac2-ripple 1.3s ease-out infinite;
  }

  .ac2-ripple.r2 { animation-delay: 0.65s; }

  @keyframes ac2-ripple {
    0% { transform: scale(0.7); opacity: 0.9; }
    100% { transform: scale(2.4); opacity: 0; }
  }
`;

const audioCircleMarkup = {
  v1: `<div class="audio-c"></div>`,
  v2: `
    <div class="ac2">
      <div class="ac2-guide"></div>
      <div class="ac2-spoke k0"><div class="ac2-bar"></div></div>
      <div class="ac2-spoke k1"><div class="ac2-bar"></div></div>
      <div class="ac2-spoke k2"><div class="ac2-bar"></div></div>
      <div class="ac2-spoke k3"><div class="ac2-bar"></div></div>
      <div class="ac2-spoke k4"><div class="ac2-bar"></div></div>
      <div class="ac2-spoke k5"><div class="ac2-bar"></div></div>
      <div class="ac2-spoke k6"><div class="ac2-bar"></div></div>
      <div class="ac2-spoke k7"><div class="ac2-bar"></div></div>
      <div class="ac2-spoke k8"><div class="ac2-bar"></div></div>
      <div class="ac2-spoke k9"><div class="ac2-bar"></div></div>
      <div class="ac2-spoke k10"><div class="ac2-bar"></div></div>
      <div class="ac2-spoke k11"><div class="ac2-bar"></div></div>
      <div class="ac2-spoke k12"><div class="ac2-bar"></div></div>
      <div class="ac2-spoke k13"><div class="ac2-bar"></div></div>
      <div class="ac2-spoke k14"><div class="ac2-bar"></div></div>
      <div class="ac2-spoke k15"><div class="ac2-bar"></div></div>
      <div class="ac2-ripple"></div>
      <div class="ac2-ripple r2"></div>
      <div class="ac2-hub"></div>
    </div>
  `,
};

class ConceptAudioCircle extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${audioCircleStyles}</style>${audioCircleMarkup[version] || audioCircleMarkup.v2}`;
  }
}

if (!customElements.get('concept-audio-circle')) {
  customElements.define('concept-audio-circle', ConceptAudioCircle);
}
