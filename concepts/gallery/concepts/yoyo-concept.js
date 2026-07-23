const yoyoStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Throw, sleep, snap back: the disc drops off the finger spooling
     string, sleeps at the bottom in a spin blur, then climbs home
     with a little hand-bounce on the catch. 4.5s per throw. */
  .yy {
    width: 96px;
    height: 100px;
    position: relative;
  }

  /* The hand: a simple mitt at the top that dips on throw/catch. */
  .yy-hand {
    position: absolute;
    left: 50%;
    top: 2px;
    width: 22px;
    height: 12px;
    margin-left: -11px;
    border-radius: 8px 8px 4px 4px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.85), rgba(0, 120, 24, 0.85));
    animation: yy-hand 4.5s ease-in-out infinite;
  }

  /* Finger the string loops on. */
  .yy-hand::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 5px;
    height: 7px;
    margin-left: -2.5px;
    border-radius: 0 0 3px 3px;
    background: rgba(140, 255, 170, 0.85);
  }

  @keyframes yy-hand {
    0%, 4% { transform: translateY(0); }
    8% { transform: translateY(4px); }
    14% { transform: translateY(0); }
    86% { transform: translateY(0); }
    92% { transform: translateY(3px); }
    96%, 100% { transform: translateY(0); }
  }

  /* The string: scales down from the finger to wherever the disc is. */
  .yy-string {
    position: absolute;
    left: 50%;
    top: 16px;
    width: 1.5px;
    height: 62px;
    margin-left: -0.75px;
    background: rgba(190, 255, 205, 0.75);
    transform-origin: top center;
    animation: yy-string 4.5s infinite;
  }

  /* Drop fast (ease-in), sleep (full length with a tiny breathing
     wobble), snap back (ease-out). */
  @keyframes yy-string {
    0%, 6% { transform: scaleY(0.06); animation-timing-function: ease-in; }
    20% { transform: scaleY(1); }
    30% { transform: scaleY(0.985); }
    40% { transform: scaleY(1); }
    50% { transform: scaleY(0.985); }
    60% { transform: scaleY(1); animation-timing-function: cubic-bezier(0.2, 0.7, 0.4, 1); }
    78% { transform: scaleY(0.06); }
    100% { transform: scaleY(0.06); }
  }

  /* Disc carrier: rides the string end. */
  .yy-carrier {
    position: absolute;
    left: 50%;
    top: 16px;
    width: 0;
    height: 0;
    animation: yy-carrier 4.5s infinite;
  }

  @keyframes yy-carrier {
    0%, 6% { transform: translateY(4px); animation-timing-function: ease-in; }
    20% { transform: translateY(62px); }
    60% { transform: translateY(62px); animation-timing-function: cubic-bezier(0.2, 0.7, 0.4, 1); }
    78% { transform: translateY(4px); }
    /* Catch bounce. */
    82% { transform: translateY(8px); }
    86%, 100% { transform: translateY(4px); }
  }

  /* The disc: striped face reads spin; blur during the sleep. */
  .yy-disc {
    position: absolute;
    left: -14px;
    top: 0;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid var(--accent, #00cc00);
    background:
      repeating-conic-gradient(rgba(190, 255, 205, 0.85) 0 20deg, rgba(0, 90, 18, 0.85) 20deg 45deg);
    box-sizing: border-box;
    box-shadow: 0 0 9px rgba(0, 204, 0, 0.5);
    animation: yy-spin 0.5s linear infinite, yy-blur 4.5s infinite;
  }

  /* Axle cap. */
  .yy-disc::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 8px;
    height: 8px;
    margin: -4px 0 0 -4px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #f2ffdd, #2a8a3e 80%);
  }

  @keyframes yy-spin {
    to { transform: rotate(360deg); }
  }

  @keyframes yy-blur {
    0%, 8% { filter: blur(0); }
    22%, 58% { filter: blur(1.2px); }
    72%, 100% { filter: blur(0); }
  }

  /* Motion streaks beside the sleeping disc. */
  .yy-streak {
    position: absolute;
    top: 72px;
    width: 10px;
    height: 1.5px;
    border-radius: 1px;
    background: rgba(140, 255, 170, 0.6);
    opacity: 0;
    animation: yy-streak 4.5s infinite;
  }

  .yy-streak.s1 { left: 16px; }
  .yy-streak.s2 { right: 16px; animation-delay: 0.15s; }

  @keyframes yy-streak {
    0%, 20% { opacity: 0; transform: translateX(0); }
    26% { opacity: 0.8; }
    34% { opacity: 0; transform: translateX(-5px); }
    40% { opacity: 0.8; transform: translateX(0); }
    48% { opacity: 0; transform: translateX(-5px); }
    54% { opacity: 0.8; transform: translateX(0); }
    60%, 100% { opacity: 0; }
  }

  /* Trick name flashes during the sleep. */
  .yy-trick {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 2px;
    color: rgba(140, 255, 170, 0.8);
    opacity: 0;
    animation: yy-trick 4.5s steps(1) infinite;
  }

  @keyframes yy-trick {
    0%, 24% { opacity: 0; }
    28%, 56% { opacity: 1; }
    60%, 100% { opacity: 0; }
  }
`;

class ConceptYoyo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${yoyoStyles}</style>
      <div class="yy">
        <div class="yy-string"></div>
        <div class="yy-carrier"><div class="yy-disc"></div></div>
        <div class="yy-hand"></div>
        <div class="yy-streak s1"></div>
        <div class="yy-streak s2"></div>
        <div class="yy-trick">SLEEPER</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-yoyo')) {
  customElements.define('concept-yoyo', ConceptYoyo);
}
