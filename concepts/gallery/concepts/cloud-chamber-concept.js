const cloudChamberStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cld {
    width: 118px;
    height: 102px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Cylindrical chamber outer ring */
  .cld-ring {
    position: absolute;
    width: 92px;
    height: 92px;
    border-radius: 50%;
    border: 2px solid rgba(0, 204, 0, 0.7);
    background: radial-gradient(circle at 50% 50%, #030a04 0%, #010402 70%, #081a0b 100%);
    box-shadow: inset 0 0 16px rgba(0, 255, 68, 0.2), 0 0 10px rgba(0, 204, 0, 0.3);
    overflow: hidden;
  }

  /* Magnetic field indicator poles */
  .cld-pole-n {
    position: absolute;
    left: 4px;
    top: 40px;
    width: 6px;
    height: 14px;
    background: rgba(0, 204, 0, 0.6);
    border-radius: 2px;
    font-size: 8px;
    color: #8cffaa;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: monospace;
  }

  .cld-pole-s {
    position: absolute;
    right: 4px;
    top: 40px;
    width: 6px;
    height: 14px;
    background: rgba(0, 204, 0, 0.6);
    border-radius: 2px;
    font-size: 8px;
    color: #8cffaa;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: monospace;
  }

  /* Alpha particle: thick dense straight track */
  .cld-track-alpha {
    position: absolute;
    left: 48px;
    top: 50px;
    width: 32px;
    height: 3px;
    background: linear-gradient(90deg, #ffffff, rgba(140, 255, 170, 0.9), transparent);
    border-radius: 2px;
    transform-origin: left center;
    transform: rotate(-35deg);
    filter: drop-shadow(0 0 4px #8cffaa);
    animation: cld-alpha-anim 3.2s cubic-bezier(0.1, 0.8, 0.2, 1) infinite;
  }

  @keyframes cld-alpha-anim {
    0% { transform: scaleX(0) rotate(-35deg); opacity: 0; }
    15% { transform: scaleX(1) rotate(-35deg); opacity: 1; filter: drop-shadow(0 0 6px #ffffff); }
    70% { transform: scaleX(1) rotate(-35deg); opacity: 0.7; filter: blur(1.2px) drop-shadow(0 0 2px #8cffaa); }
    100% { transform: scaleX(1) rotate(-35deg); opacity: 0; filter: blur(2.5px); }
  }

  /* Beta particle: fast curving thin track (Lorentz force) */
  .cld-track-beta {
    position: absolute;
    left: 28px;
    top: 24px;
    width: 44px;
    height: 44px;
    border: 1.5px solid transparent;
    border-top-color: #f2ffdd;
    border-right-color: #8cffaa;
    border-radius: 50%;
    transform: rotate(40deg);
    filter: drop-shadow(0 0 3px #8cffaa);
    animation: cld-beta-anim 2.5s ease-out infinite;
    animation-delay: 1.1s;
  }

  @keyframes cld-beta-anim {
    0% { opacity: 0; transform: rotate(0deg) scale(0.6); }
    20% { opacity: 1; transform: rotate(40deg) scale(1); }
    80% { opacity: 0.4; filter: blur(1px); }
    100% { opacity: 0; filter: blur(2px); }
  }

  /* Positron / secondary spiral track */
  .cld-track-spiral {
    position: absolute;
    left: 54px;
    top: 42px;
    width: 22px;
    height: 22px;
    border: 1.5px solid transparent;
    border-bottom-color: #ffffff;
    border-left-color: rgba(140, 255, 170, 0.8);
    border-radius: 50%;
    filter: drop-shadow(0 0 3px #8cffaa);
    animation: cld-spiral-anim 3.8s ease-out infinite;
    animation-delay: 1.8s;
  }

  @keyframes cld-spiral-anim {
    0% { opacity: 0; transform: rotate(0deg) scale(0.2); }
    25% { opacity: 1; transform: rotate(180deg) scale(1); }
    85% { opacity: 0.3; filter: blur(1.5px); }
    100% { opacity: 0; filter: blur(2.5px); }
  }

  /* Vapor fog droplets condensation layer */
  .cld-droplets {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 45% 45%, rgba(140, 255, 170, 0.12) 0%, transparent 60%);
    animation: cld-fog 4s ease-in-out infinite alternate;
  }

  @keyframes cld-fog {
    0% { opacity: 0.3; }
    100% { opacity: 0.8; }
  }

  /* Outer metal casing & illumination bezel */
  .cld-bezel {
    position: absolute;
    width: 98px;
    height: 98px;
    border-radius: 50%;
    border: 1.5px dashed rgba(0, 204, 0, 0.4);
    pointer-events: none;
  }
`;

class ConceptCloudChamber extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${cloudChamberStyles}</style>
      <div class="cld">
        <div class="cld-bezel"></div>
        <div class="cld-pole-n">N</div>
        <div class="cld-pole-s">S</div>
        <div class="cld-ring">
          <div class="cld-droplets"></div>
          <div class="cld-track-alpha"></div>
          <div class="cld-track-beta"></div>
          <div class="cld-track-spiral"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-cloud-chamber')) {
  customElements.define('concept-cloud-chamber', ConceptCloudChamber);
}
