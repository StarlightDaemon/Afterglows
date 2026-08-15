const rotaryPhoneStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .rtp {
    width: 118px;
    height: 102px;
    position: relative;
    background: #020904;
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Bakelite desktop telephone body */
  .rtp-body {
    position: relative;
    width: 82px;
    height: 68px;
    background: #011406;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 12px 12px 6px 6px;
    box-shadow: inset 0 0 10px rgba(0, 204, 0, 0.3), 0 0 8px rgba(0, 204, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Handset resting on top cradle */
  .rtp-cradle {
    position: absolute;
    top: -8px;
    width: 88px;
    height: 12px;
    background: linear-gradient(180deg, #d6ffe0, #008818);
    border: 1.5px solid #ffffff;
    border-radius: 6px;
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.4);
    z-index: 5;
  }

  /* Rotary Dial Assembly */
  .rtp-dial-housing {
    position: relative;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: #000803;
    border: 1.5px solid #d6ffe0;
    box-shadow: inset 0 0 8px rgba(0, 204, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Rotating transparent finger wheel */
  .rtp-finger-wheel {
    position: absolute;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    animation: rtp-dial-spin 4s ease-in-out infinite;
  }

  @keyframes rtp-dial-spin {
    0%, 20% { transform: rotate(0deg); }
    45% { transform: rotate(180deg); } /* Dialing clockwise */
    70%, 100% { transform: rotate(0deg); } /* Spring-return ratchet pulse */
  }

  /* 10 Finger holes arranged radially */
  .rtp-hole {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #011406;
    border: 1px solid #8cffaa;
    box-shadow: inset 0 0 3px #8cffaa;
  }

  .rtp-hole.h1 { top: 4px; left: 20px; }
  .rtp-hole.h2 { top: 8px; right: 10px; }
  .rtp-hole.h3 { top: 20px; right: 4px; }
  .rtp-hole.h4 { bottom: 8px; right: 10px; }
  .rtp-hole.h5 { bottom: 4px; left: 20px; }
  .rtp-hole.h6 { bottom: 8px; left: 10px; }
  .rtp-hole.h7 { top: 20px; left: 4px; }
  .rtp-hole.h8 { top: 8px; left: 10px; }

  /* Metal finger stop bracket */
  .rtp-finger-stop {
    position: absolute;
    bottom: 6px;
    right: 4px;
    width: 8px;
    height: 10px;
    background: #ffffff;
    border: 1px solid #00aa22;
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    box-shadow: 0 0 4px #8cffaa;
    z-index: 6;
  }

  /* Center number card medallion */
  .rtp-center-card {
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #ffffff;
    border: 1.5px solid #008818;
    box-shadow: 0 0 6px #ffffff;
    z-index: 4;
  }

  /* Pulse signaling readout */
  .rtp-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptRotaryPhone extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${rotaryPhoneStyles}</style>
      <div class="rtp">
        <div class="rtp-body">
          <div class="rtp-cradle"></div>

          <div class="rtp-dial-housing">
            <div class="rtp-finger-wheel">
              <div class="rtp-hole h1"></div>
              <div class="rtp-hole h2"></div>
              <div class="rtp-hole h3"></div>
              <div class="rtp-hole h4"></div>
              <div class="rtp-hole h5"></div>
              <div class="rtp-hole h6"></div>
              <div class="rtp-hole h7"></div>
              <div class="rtp-hole h8"></div>
            </div>
            <div class="rtp-finger-stop"></div>
            <div class="rtp-center-card"></div>
          </div>
        </div>

        <div class="rtp-label">PULSE DIAL: 867-5309</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-rotary-phone')) {
  customElements.define('concept-rotary-phone', ConceptRotaryPhone);
}
