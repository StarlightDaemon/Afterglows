const beatStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0d121c 0%, #030508 100%);
    overflow: hidden;
  }

  .canvas-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .beat-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Tone 1 (f1 = 440 Hz) */
  .wave-f1 {
    fill: none;
    stroke: #00e5ff;
    stroke-width: 1;
    opacity: 0.7;
  }

  /* Tone 2 (f2 = 444 Hz) */
  .wave-f2 {
    fill: none;
    stroke: #ffaa00;
    stroke-width: 1;
    opacity: 0.7;
  }

  /* Modulated Beat Signal Sum (Envelope) */
  .beat-envelope {
    fill: none;
    stroke: #ff5577;
    stroke-width: 1.5;
    stroke-dasharray: 2 2;
  }

  .sum-signal {
    fill: none;
    stroke: #00ff66;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 3px #00ff66);
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-f1 { fill: #00e5ff; }
  .lbl-f2 { fill: #ffaa00; }
  .lbl-beat { fill: #00ff66; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(0, 255, 102, 0.85);
    z-index: 10;
  }

  /* Motion pass */
  /* Component waves travel; superposition swells at the beat period */
  .wave-f1 { stroke-dasharray: 5 3; animation: beat-run1 1.1s linear infinite; }
  .wave-f2 { stroke-dasharray: 5 3; animation: beat-run2 1.25s linear infinite; }
  .sum-signal { animation: beat-swell 2.4s ease-in-out infinite alternate; }
  .beat-envelope { animation: beat-swell 2.4s ease-in-out infinite alternate; }
  @keyframes beat-run1 { to { stroke-dashoffset: -16; } }
  @keyframes beat-run2 { to { stroke-dashoffset: -16; } }
  @keyframes beat-swell { from { opacity: 0.55; } to { opacity: 1; filter: drop-shadow(0 0 4px currentColor); } }

  /* Signal tracer riding the beat envelope across the superposition trace. */
  .beat-tracer {
    fill: #ffffff;
    filter: drop-shadow(0 0 5px #00ff66);
    animation: beat-ride 2.4s ease-in-out infinite alternate;
  }

  @keyframes beat-ride {
    0%   { transform: translate(12px, 80px); }
    25%  { transform: translate(40px, 71px); }
    50%  { transform: translate(65px, 80px); }
    75%  { transform: translate(90px, 89px); }
    100% { transform: translate(118px, 80px); }
  }

`;

class PhysicsBeatFrequencies extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${beatStyles}</style>
      <div class="canvas-box">
        <svg class="beat-svg" viewBox="0 0 130 130">
          <!-- Component Tone 1 -->
          <text x="12" y="18" class="lbl lbl-f1">f₁ = 440 Hz</text>
          <path d="M 12 24 Q 18 18 24 24 T 36 24 T 48 24 T 60 24 T 72 24 T 84 24 T 96 24 T 108 24 T 120 24" class="wave-f1" />

          <!-- Component Tone 2 -->
          <text x="12" y="38" class="lbl lbl-f2">f₂ = 444 Hz</text>
          <path d="M 12 44 Q 17 38 22 44 T 32 44 T 42 44 T 52 44 T 62 44 T 72 44 T 82 44 T 92 44 T 102 44 T 112 44 T 120 44" class="wave-f2" />

          <!-- Superposition Beat Waveform -->
          <text x="12" y="60" class="lbl lbl-beat">SUPERPOSITION: y₁ + y₂</text>

          <!-- Upper / Lower Modulation Envelopes 2A cos(Δω t / 2) -->
          <path d="M 12 80 Q 40 62 65 80 Q 90 98 118 80" class="beat-envelope" />
          <path d="M 12 80 Q 40 98 65 80 Q 90 62 118 80" class="beat-envelope" />

          <!-- High-frequency carrier oscillation modulated by envelope -->
          <path d="
            M 12 80
            Q 18 70 24 80 T 36 80 T 48 80 T 56 80 T 65 80
            T 74 80 T 82 80 T 94 80 T 106 80 T 118 80
          " class="sum-signal" />

          <!-- Envelope-riding signal tracer -->
          <circle cx="0" cy="0" r="2.6" class="beat-tracer" />

          <!-- Beat Period Indicator -->
          <text x="50" y="104" class="lbl lbl-beat">T_beat = 1/|f₁ - f₂| = 0.25 s</text>
        </svg>

        <div class="hud">
          <span>f_beat = |f₁ - f₂| = 4 Hz</span>
          <span>Acoustic Interference Beat</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-beat-frequencies')) {
  customElements.define('physics-beat-frequencies', PhysicsBeatFrequencies);
}
