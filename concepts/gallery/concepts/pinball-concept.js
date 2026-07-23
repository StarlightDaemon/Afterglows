const pinballStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Table view: the ball ricochets between three pop bumpers (each
     flashing on its hit), drains toward the flippers, gets slapped
     back up, and the score ticks with every touch. One 6s rally. */
  .pb {
    width: 96px;
    height: 100px;
    position: relative;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 10px 10px 4px 4px;
    background: linear-gradient(180deg, rgba(0, 40, 8, 0.4), rgba(0, 15, 3, 0.7));
    overflow: hidden;
  }

  /* Arch lanes at the top. */
  .pb-arch {
    position: absolute;
    left: 8px;
    right: 8px;
    top: 4px;
    height: 16px;
    border: 1px solid rgba(0, 204, 0, 0.35);
    border-bottom: none;
    border-radius: 40px 40px 0 0;
  }

  /* Pop bumpers. */
  .pb-bumper {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid rgba(140, 255, 170, 0.8);
    background: radial-gradient(circle at 40% 32%, rgba(190, 255, 205, 0.6), rgba(0, 90, 18, 0.9));
    box-sizing: border-box;
  }

  .pb-bumper.b1 { left: 14px; top: 26px; animation: pb-hit 6s steps(1) infinite; }
  .pb-bumper.b2 { left: 62px; top: 22px; animation: pb-hit 6s steps(1) infinite; animation-delay: -4.9s; }
  .pb-bumper.b3 { left: 40px; top: 46px; animation: pb-hit 6s steps(1) infinite; animation-delay: -3.6s; }

  /* Each bumper flashes when the ball timeline reaches it (delays
     line the flashes up with the ball's waypoints). */
  @keyframes pb-hit {
    0%, 16% { box-shadow: none; }
    18%, 22% { box-shadow: 0 0 14px rgba(0, 204, 0, 1), inset 0 0 8px rgba(190, 255, 205, 0.9); }
    24%, 100% { box-shadow: none; }
  }

  /* Slingshot posts near the flippers. */
  .pb-post {
    position: absolute;
    width: 4px;
    height: 12px;
    border-radius: 2px;
    background: rgba(0, 204, 0, 0.6);
  }

  .pb-post.p1 { left: 16px; bottom: 26px; transform: rotate(28deg); }
  .pb-post.p2 { right: 16px; bottom: 26px; transform: rotate(-28deg); }

  /* Flippers: rest angled down-in, flick up when the ball arrives. */
  .pb-flipper {
    position: absolute;
    bottom: 12px;
    width: 24px;
    height: 5px;
    border-radius: 3px;
    background: linear-gradient(90deg, #baffc9, rgba(0, 140, 28, 0.9));
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.6);
  }

  .pb-flipper.left {
    left: 18px;
    transform-origin: 0% 50%;
    transform: rotate(24deg);
    animation: pb-flip-l 6s infinite;
  }

  .pb-flipper.right {
    right: 18px;
    transform-origin: 100% 50%;
    transform: rotate(-24deg);
    animation: pb-flip-r 6s infinite;
  }

  @keyframes pb-flip-l {
    0%, 60% { transform: rotate(24deg); }
    63%, 65% { transform: rotate(-22deg); }
    68%, 100% { transform: rotate(24deg); }
  }

  @keyframes pb-flip-r {
    0%, 30% { transform: rotate(-24deg); }
    33%, 35% { transform: rotate(22deg); }
    38%, 100% { transform: rotate(-24deg); }
  }

  /* Drain gap indicator. */
  .pb-drain {
    position: absolute;
    left: 50%;
    bottom: 2px;
    width: 20px;
    height: 3px;
    margin-left: -10px;
    border-radius: 2px;
    background: rgba(0, 204, 0, 0.3);
  }

  /* The ball: a scripted rally around the bumpers and flippers. */
  .pb-ball {
    position: absolute;
    left: 0;
    top: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle at 36% 30%, #f2ffdd, #baffc9 70%);
    box-shadow: 0 0 7px rgba(0, 204, 0, 0.95);
    animation: pb-ball 6s linear infinite;
  }

  @keyframes pb-ball {
    /* Launch up the right lane. */
    0% { transform: translate(84px, 92px); }
    8% { transform: translate(86px, 30px); animation-timing-function: ease-out; }
    12% { transform: translate(74px, 12px); animation-timing-function: ease-in; }
    /* Bumper 2 hit (18%). */
    18% { transform: translate(68px, 26px); animation-timing-function: ease-out; }
    /* Ricochet to bumper 3 (24 -> hits at 2.4s = 40%? bumper3 delay -3.6 => flash at 18-3.6/6...). */
    28% { transform: translate(50px, 44px); }
    /* To the right flipper. */
    33% { transform: translate(62px, 80px); animation-timing-function: ease-out; }
    /* Slapped up-left across the field to bumper 1. */
    40% { transform: translate(38px, 34px); }
    46% { transform: translate(22px, 28px); animation-timing-function: ease-in; }
    /* Bounce down the left side. */
    54% { transform: translate(16px, 58px); }
    /* Left flipper save (63%). */
    60% { transform: translate(28px, 82px); animation-timing-function: ease-out; }
    66% { transform: translate(46px, 40px); }
    /* Center bumper touch and drift down the middle. */
    74% { transform: translate(48px, 52px); animation-timing-function: ease-in; }
    84% { transform: translate(58px, 78px); }
    /* Out the side lane to relaunch. */
    92% { transform: translate(84px, 92px); }
    100% { transform: translate(84px, 92px); }
  }

  /* Score ticker. */
  .pb-score {
    position: absolute;
    left: 0;
    right: 0;
    top: 6px;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 1px;
    color: #c8ffd6;
    text-shadow: 0 0 5px rgba(0, 204, 0, 0.8);
  }

  .pb-score::before {
    content: '001200';
    animation: pb-score 6s steps(1) infinite;
  }

  @keyframes pb-score {
    0% { content: '001200'; }
    19% { content: '003700'; }
    29% { content: '005200'; }
    41% { content: '007900'; }
    61% { content: '008400'; }
    75% { content: '009900'; }
    93% { content: '011500'; }
  }
`;

class ConceptPinball extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${pinballStyles}</style>
      <div class="pb">
        <div class="pb-arch"></div>
        <div class="pb-score"></div>
        <div class="pb-bumper b1"></div>
        <div class="pb-bumper b2"></div>
        <div class="pb-bumper b3"></div>
        <div class="pb-post p1"></div>
        <div class="pb-post p2"></div>
        <div class="pb-flipper left"></div>
        <div class="pb-flipper right"></div>
        <div class="pb-drain"></div>
        <div class="pb-ball"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-pinball')) {
  customElements.define('concept-pinball', ConceptPinball);
}
