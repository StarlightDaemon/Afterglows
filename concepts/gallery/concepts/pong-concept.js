const pongStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pong {
    width: 104px;
    height: 104px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pong-court {
    position: relative;
    width: 94px;
    height: 74px;
    border: 1px solid rgba(140, 255, 170, 0.6);
    background: rgba(2, 10, 3, 0.7);
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 204, 0, 0.18);
  }

  .pong-net {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 0;
    border-left: 1px dashed rgba(0, 204, 0, 0.35);
  }

  .pong-score {
    position: absolute;
    top: 4px;
    font-family: monospace;
    font-size: 10px;
    color: rgba(140, 255, 170, 0.75);
  }

  .pong-score.left { left: 30px; }
  .pong-score.right { right: 30px; }

  /* The rally: ball follows a fixed 4s bounce path (3 wall bounces,
     paddle hit at each end); paddles slide to meet it. */
  .pong-ball {
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 5px;
    background: #d8ffbb;
    box-shadow: 0 0 6px rgba(216, 255, 187, 0.8);
    animation: pong-ball 4s linear infinite;
  }

  .pong-paddle {
    position: absolute;
    width: 4px;
    height: 20px;
    background: rgba(160, 255, 185, 0.9);
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.45);
  }

  .pong-paddle.left {
    left: 4px;
    animation: pong-paddle-left 4s ease-in-out infinite;
  }

  .pong-paddle.right {
    right: 4px;
    animation: pong-paddle-right 4s ease-in-out infinite;
  }

  /* Hit flashes when ball meets paddle. */
  .pong-hit {
    position: absolute;
    top: 0;
    width: 10px;
    height: 26px;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgba(216, 255, 187, 0.55), transparent 70%);
    opacity: 0;
    animation: pong-hit 4s linear infinite;
  }

  .pong-hit.left { left: 1px; }
  .pong-hit.right { right: 1px; animation-name: pong-hit-right; animation-delay: -2s; }

  /* Ball path (court 94x74, ball 5px => x 0..85, y 0..69):
     left paddle hit (4,20) -> top wall (30,0) -> right paddle hit (85,42)
     -> bottom wall (60,69) -> back to left paddle (4,20). Straight
     segments, linear timing, constant-ish speed. */
  @keyframes pong-ball {
    0%   { transform: translate(6px, 20px); }
    22%  { transform: translate(32px, 0px); }
    50%  { transform: translate(84px, 40px); }
    76%  { transform: translate(56px, 69px); }
    100% { transform: translate(6px, 20px); }
  }

  /* Paddle centers meet the ball's arrival y (minus half paddle height). */
  @keyframes pong-paddle-left {
    0%   { transform: translateY(13px); }
    30%  { transform: translateY(34px); }
    62%  { transform: translateY(48px); }
    100% { transform: translateY(13px); }
  }

  @keyframes pong-paddle-right {
    0%   { transform: translateY(40px); }
    50%  { transform: translateY(33px); }
    80%  { transform: translateY(12px); }
    100% { transform: translateY(40px); }
  }

  @keyframes pong-hit {
    0%, 1.5% { opacity: 0.9; transform: translateY(12px); }
    8% { opacity: 0; }
    97% { opacity: 0; }
    100% { opacity: 0.9; transform: translateY(12px); }
  }

  @keyframes pong-hit-right {
    0%, 1.5% { opacity: 0.9; transform: translateY(33px); }
    8% { opacity: 0; }
    97% { opacity: 0; }
    100% { opacity: 0.9; transform: translateY(33px); }
  }
`;

class ConceptPong extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${pongStyles}</style>
      <div class="pong">
        <div class="pong-court">
          <div class="pong-net"></div>
          <span class="pong-score left">2</span>
          <span class="pong-score right">1</span>
          <div class="pong-paddle left"></div>
          <div class="pong-paddle right"></div>
          <div class="pong-hit left"></div>
          <div class="pong-hit right"></div>
          <div class="pong-ball"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-pong')) {
  customElements.define('concept-pong', ConceptPong);
}
