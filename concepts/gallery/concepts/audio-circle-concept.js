const audioCircleStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
  }

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
`;

class ConceptAudioCircle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `<style>${audioCircleStyles}</style><div class="audio-c"></div>`;
  }
}

if (!customElements.get('concept-audio-circle')) {
  customElements.define('concept-audio-circle', ConceptAudioCircle);
}
