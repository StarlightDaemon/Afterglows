const sundewStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sdw {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 60%, #031407 0%, #000401 100%);
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Main leaf lamina pad */
  .sdw-leaf {
    position: relative;
    width: 62px;
    height: 62px;
    border-radius: 50%;
    background: radial-gradient(circle at 50% 50%, #00aa22 0%, #004408 70%, #011405 100%);
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 10px rgba(0, 204, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Trapped midge / prey at center */
  .sdw-prey {
    position: absolute;
    width: 6px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff;
    z-index: 6;
    animation: sdw-struggle 0.8s ease-in-out infinite alternate;
  }

  @keyframes sdw-struggle {
    0% { transform: scale(0.85) translate(-2px, -1px); }
    100% { transform: scale(1.15) translate(2px, 1px); }
  }

  /* Glandular tentacles with curling thigmonastic animation */
  .sdw-tentacle {
    position: absolute;
    width: 2.5px;
    height: 24px;
    background: linear-gradient(180deg, #d6ffe0, #008818);
    transform-origin: bottom center;
    border-radius: 1px;
    display: flex;
    justify-content: center;
  }

  /* Glistening mucilage dew droplet head */
  .sdw-dewdrop {
    position: absolute;
    top: -4px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #ffffff 0%, #8cffaa 50%, #00aa22 100%);
    border: 1px solid #ffffff;
    box-shadow: 0 0 8px #ffffff, 0 0 12px #8cffaa;
  }

  /* Radial tentacles around leaf rim bending inward */
  .sdw-tentacle.t1 { top: -14px; left: 30px; animation: sdw-curl-n 2.2s ease-in-out infinite alternate; }
  .sdw-tentacle.t2 { bottom: -14px; left: 30px; transform: rotate(180deg); animation: sdw-curl-s 2.2s ease-in-out infinite alternate; }
  .sdw-tentacle.t3 { left: -14px; top: 19px; transform: rotate(-90deg); animation: sdw-curl-w 2.2s ease-in-out infinite alternate; }
  .sdw-tentacle.t4 { right: -14px; top: 19px; transform: rotate(90deg); animation: sdw-curl-e 2.2s ease-in-out infinite alternate; }

  .sdw-tentacle.t5 { top: -6px; right: -6px; transform: rotate(45deg); animation: sdw-curl-ne 2.2s ease-in-out infinite alternate; }
  .sdw-tentacle.t6 { bottom: -6px; right: -6px; transform: rotate(135deg); animation: sdw-curl-se 2.2s ease-in-out infinite alternate; }
  .sdw-tentacle.t7 { bottom: -6px; left: -6px; transform: rotate(-135deg); animation: sdw-curl-sw 2.2s ease-in-out infinite alternate; }
  .sdw-tentacle.t8 { top: -6px; left: -6px; transform: rotate(-45deg); animation: sdw-curl-nw 2.2s ease-in-out infinite alternate; }

  @keyframes sdw-curl-n {
    0% { transform: rotate(0deg) scaleY(1); }
    100% { transform: rotate(50deg) scaleY(0.6); }
  }
  @keyframes sdw-curl-s {
    0% { transform: rotate(180deg) scaleY(1); }
    100% { transform: rotate(130deg) scaleY(0.6); }
  }
  @keyframes sdw-curl-w {
    0% { transform: rotate(-90deg) scaleY(1); }
    100% { transform: rotate(-40deg) scaleY(0.6); }
  }
  @keyframes sdw-curl-e {
    0% { transform: rotate(90deg) scaleY(1); }
    100% { transform: rotate(40deg) scaleY(0.6); }
  }
  @keyframes sdw-curl-ne {
    0% { transform: rotate(45deg) scaleY(1); }
    100% { transform: rotate(10deg) scaleY(0.55); }
  }
  @keyframes sdw-curl-se {
    0% { transform: rotate(135deg) scaleY(1); }
    100% { transform: rotate(100deg) scaleY(0.55); }
  }
  @keyframes sdw-curl-sw {
    0% { transform: rotate(-135deg) scaleY(1); }
    100% { transform: rotate(-100deg) scaleY(0.55); }
  }
  @keyframes sdw-curl-nw {
    0% { transform: rotate(-45deg) scaleY(1); }
    100% { transform: rotate(-10deg) scaleY(0.55); }
  }

  /* Caption */
  .sdw-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptSundew extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${sundewStyles}</style>
      <div class="sdw">
        <div class="sdw-leaf">
          <div class="sdw-prey"></div>

          <div class="sdw-tentacle t1"><div class="sdw-dewdrop"></div></div>
          <div class="sdw-tentacle t2"><div class="sdw-dewdrop"></div></div>
          <div class="sdw-tentacle t3"><div class="sdw-dewdrop"></div></div>
          <div class="sdw-tentacle t4"><div class="sdw-dewdrop"></div></div>
          <div class="sdw-tentacle t5"><div class="sdw-dewdrop"></div></div>
          <div class="sdw-tentacle t6"><div class="sdw-dewdrop"></div></div>
          <div class="sdw-tentacle t7"><div class="sdw-dewdrop"></div></div>
          <div class="sdw-tentacle t8"><div class="sdw-dewdrop"></div></div>
        </div>

        <div class="sdw-label">DROSERA CAPENSIS</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-sundew')) {
  customElements.define('concept-sundew', ConceptSundew);
}
