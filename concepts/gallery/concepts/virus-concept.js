// A pathogen in slow tumble: ten spike proteins ride the capsid rim, each
// reaching and retracting on its own clock so the receptor fringe undulates;
// the nucleocapsid squirms inside the membrane while a faint corona pulses.
// (Distinct from Cell Cluster's smooth orbs and Petri Dish's colonies —
// this is one spiked particle, not a culture.)
const virusStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .vx {
    width: 104px;
    height: 96px;
    position: relative;
    animation: vx-float 9s ease-in-out infinite;
  }

  @keyframes vx-float {
    0%, 100% { transform: translate(0, 0); }
    30% { transform: translate(2px, -3px); }
    65% { transform: translate(-2px, 2px); }
  }

  /* The whole particle tumbles slowly; spikes are laid out on spokes so
     they rotate with it. */
  .vx-rot {
    position: absolute;
    inset: 0;
    animation: vx-tumble 26s linear infinite;
  }

  @keyframes vx-tumble {
    to { transform: rotate(360deg); }
  }

  /* Membrane envelope. */
  .vx-body {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    margin: -20px 0 0 -20px;
    border-radius: 50%;
    border: 2px solid rgba(140, 255, 170, 0.85);
    background: radial-gradient(circle at 40% 35%, rgba(120, 235, 150, 0.5), rgba(0, 70, 14, 0.85) 72%);
    box-shadow: 0 0 12px rgba(0, 204, 0, 0.4), inset 0 0 8px rgba(0, 204, 0, 0.25);
  }

  /* Nucleocapsid: an inner blob that never stops squirming. */
  .vx-core {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 18px;
    height: 16px;
    margin: -8px 0 0 -9px;
    border-radius: 46% 54% 52% 48%;
    background: radial-gradient(circle at 42% 38%, rgba(200, 255, 210, 0.75), rgba(0, 130, 26, 0.7));
    animation: vx-core 5s ease-in-out infinite;
  }

  @keyframes vx-core {
    0%, 100% { border-radius: 46% 54% 52% 48%; transform: rotate(0deg) scale(1); }
    33% { border-radius: 55% 45% 48% 52%; transform: rotate(10deg) scale(1.08); }
    66% { border-radius: 48% 52% 56% 44%; transform: rotate(-8deg) scale(0.94); }
  }

  /* Spike proteins: a stem with a knobbed receptor tip, planted on the
     membrane, reaching outward from it. */
  .vx-spoke {
    position: absolute;
    inset: 0;
    transform: rotate(var(--rot));
  }

  .vx-spike {
    position: absolute;
    top: 15px;
    left: 50%;
    width: 2px;
    height: 13px;
    margin-left: -1px;
    background: linear-gradient(0deg, rgba(140, 255, 170, 0.9), rgba(190, 255, 205, 0.7));
    transform-origin: 50% 100%;
    animation: vx-reach var(--dur, 2.6s) ease-in-out infinite var(--ph, 0s);
  }

  .vx-spike::after {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #d8ffbb, rgba(0, 150, 30, 0.9));
    box-shadow: 0 0 5px rgba(190, 255, 205, 0.6);
  }

  /* Receptors undulate: each spike stretches and eases back on its own
     duration and phase, never in unison. */
  @keyframes vx-reach {
    0%, 100% { transform: scaleY(0.82); }
    50% { transform: scaleY(1.12); }
  }

  .vx-spoke.s0 { --rot: 0deg; }   .vx-spoke.s0 .vx-spike { --dur: 2.3s; --ph: -0.4s; }
  .vx-spoke.s1 { --rot: 36deg; }  .vx-spoke.s1 .vx-spike { --dur: 2.9s; --ph: -1.6s; }
  .vx-spoke.s2 { --rot: 72deg; }  .vx-spoke.s2 .vx-spike { --dur: 2.5s; --ph: -0.9s; }
  .vx-spoke.s3 { --rot: 108deg; } .vx-spoke.s3 .vx-spike { --dur: 3.1s; --ph: -2.2s; }
  .vx-spoke.s4 { --rot: 144deg; } .vx-spoke.s4 .vx-spike { --dur: 2.4s; --ph: -1.2s; }
  .vx-spoke.s5 { --rot: 180deg; } .vx-spoke.s5 .vx-spike { --dur: 2.8s; --ph: -0.2s; }
  .vx-spoke.s6 { --rot: 216deg; } .vx-spoke.s6 .vx-spike { --dur: 2.6s; --ph: -1.9s; }
  .vx-spoke.s7 { --rot: 252deg; } .vx-spoke.s7 .vx-spike { --dur: 3s;   --ph: -0.7s; }
  .vx-spoke.s8 { --rot: 288deg; } .vx-spoke.s8 .vx-spike { --dur: 2.35s; --ph: -1.4s; }
  .vx-spoke.s9 { --rot: 324deg; } .vx-spoke.s9 .vx-spike { --dur: 2.75s; --ph: -2.5s; }

  /* Corona: a soft halo breathing just past the receptor tips. */
  .vx-halo {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 74px;
    height: 74px;
    margin: -37px 0 0 -37px;
    border: 1px dashed rgba(0, 204, 0, 0.22);
    border-radius: 50%;
    animation: vx-halo 4.5s ease-in-out infinite;
  }

  @keyframes vx-halo {
    0%, 100% { transform: scale(0.96); opacity: 0.4; }
    50% { transform: scale(1.03); opacity: 0.85; }
  }
`;

class ConceptVirus extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${virusStyles}</style>
      <div class="vx">
        <div class="vx-halo"></div>
        <div class="vx-rot">
          <div class="vx-spoke s0"><div class="vx-spike"></div></div>
          <div class="vx-spoke s1"><div class="vx-spike"></div></div>
          <div class="vx-spoke s2"><div class="vx-spike"></div></div>
          <div class="vx-spoke s3"><div class="vx-spike"></div></div>
          <div class="vx-spoke s4"><div class="vx-spike"></div></div>
          <div class="vx-spoke s5"><div class="vx-spike"></div></div>
          <div class="vx-spoke s6"><div class="vx-spike"></div></div>
          <div class="vx-spoke s7"><div class="vx-spike"></div></div>
          <div class="vx-spoke s8"><div class="vx-spike"></div></div>
          <div class="vx-spoke s9"><div class="vx-spike"></div></div>
          <div class="vx-body"></div>
          <div class="vx-core"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-virus')) {
  customElements.define('concept-virus', ConceptVirus);
}
