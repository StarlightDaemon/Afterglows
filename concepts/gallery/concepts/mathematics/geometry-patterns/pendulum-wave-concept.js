const pendulumWaveStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Nine pendulums whose periods step evenly: they drift out of step
     into travelling waves and snakes, then snap back into unison.
     The classic demonstration, driven purely by duration arithmetic. */
  .pw {
    width: 112px;
    height: 92px;
    position: relative;
  }

  .pw-beam {
    position: absolute;
    left: 4px;
    right: 4px;
    top: 8px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, rgba(0, 204, 0, 0.5), rgba(140, 255, 170, 0.85), rgba(0, 204, 0, 0.5));
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.4);
  }

  /* Mounting bolts. */
  .pw-beam::before,
  .pw-beam::after {
    content: '';
    position: absolute;
    top: -3px;
    width: 3px;
    height: 8px;
    background: rgba(0, 204, 0, 0.6);
  }

  .pw-beam::before { left: 6px; }
  .pw-beam::after { right: 6px; }

  /* Each pendulum: rod + bob, hinged at the beam. Durations step by
     0.075s so the set realigns every few minutes of wall time; the
     visible effect is the endless wave-weave. */
  .pw-pend {
    position: absolute;
    top: 10px;
    width: 2px;
    transform-origin: 50% 0;
    animation: pw-swing var(--dur) ease-in-out infinite alternate;
  }

  .pw-rod {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.7), rgba(0, 204, 0, 0.35));
  }

  .pw-bob {
    position: absolute;
    bottom: -7px;
    left: 50%;
    width: 9px;
    height: 9px;
    margin-left: -4.5px;
    border-radius: 50%;
    background: radial-gradient(circle at 36% 30%, #d6ffe0, #2a8a3e 75%);
    box-shadow: 0 0 7px rgba(0, 204, 0, 0.7);
  }

  .pw-pend.p1 { left: 12px;  height: 62px; --dur: 1.5s; }
  .pw-pend.p2 { left: 23px;  height: 60px; --dur: 1.575s; }
  .pw-pend.p3 { left: 34px;  height: 58px; --dur: 1.65s; }
  .pw-pend.p4 { left: 45px;  height: 56px; --dur: 1.725s; }
  .pw-pend.p5 { left: 56px;  height: 54px; --dur: 1.8s; }
  .pw-pend.p6 { left: 67px;  height: 52px; --dur: 1.875s; }
  .pw-pend.p7 { left: 78px;  height: 50px; --dur: 1.95s; }
  .pw-pend.p8 { left: 89px;  height: 48px; --dur: 2.025s; }
  .pw-pend.p9 { left: 100px; height: 46px; --dur: 2.1s; }

  @keyframes pw-swing {
    from { transform: rotate(16deg); }
    to { transform: rotate(-16deg); }
  }

  /* Faint arc guides under the shortest and longest bobs. */
  .pw-arc {
    position: absolute;
    border: 1px dashed rgba(0, 204, 0, 0.18);
    border-radius: 50%;
    clip-path: inset(62% 0 0 0);
  }

  .pw-arc.a1 { left: -12px;  top: 24px; width: 50px; height: 50px; }
  .pw-arc.a2 { left: 78px; top: 32px; width: 44px; height: 44px; }
`;

class ConceptPendulumWave extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${pendulumWaveStyles}</style>
      <div class="pw">
        <div class="pw-arc a1"></div>
        <div class="pw-arc a2"></div>
        <div class="pw-beam"></div>
        <div class="pw-pend p1"><div class="pw-rod"></div><div class="pw-bob"></div></div>
        <div class="pw-pend p2"><div class="pw-rod"></div><div class="pw-bob"></div></div>
        <div class="pw-pend p3"><div class="pw-rod"></div><div class="pw-bob"></div></div>
        <div class="pw-pend p4"><div class="pw-rod"></div><div class="pw-bob"></div></div>
        <div class="pw-pend p5"><div class="pw-rod"></div><div class="pw-bob"></div></div>
        <div class="pw-pend p6"><div class="pw-rod"></div><div class="pw-bob"></div></div>
        <div class="pw-pend p7"><div class="pw-rod"></div><div class="pw-bob"></div></div>
        <div class="pw-pend p8"><div class="pw-rod"></div><div class="pw-bob"></div></div>
        <div class="pw-pend p9"><div class="pw-rod"></div><div class="pw-bob"></div></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-pendulum-wave')) {
  customElements.define('concept-pendulum-wave', ConceptPendulumWave);
}
