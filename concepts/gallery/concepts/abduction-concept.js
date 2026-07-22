const abductionStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .abduction {
    position: relative;
    width: 104px;
    height: 104px;
    overflow: hidden;
    background: linear-gradient(180deg, #000 0%, #010401 75%, #031403 100%);
  }

  .abduction-ship {
    position: absolute;
    top: 6px;
    left: 50%;
    width: 52px;
    height: 14px;
    margin-left: -26px;
    border-radius: 50%;
    background: linear-gradient(180deg, rgba(140, 230, 150, 0.8), rgba(10, 50, 14, 0.98));
    box-shadow: 0 0 10px rgba(0, 204, 0, 0.35);
    animation: abd-ship 4.8s ease-in-out infinite;
  }

  .abduction-ship::before {
    content: '';
    position: absolute;
    top: -7px;
    left: 50%;
    width: 20px;
    height: 10px;
    margin-left: -10px;
    border-radius: 10px 10px 0 0;
    background: rgba(200, 255, 210, 0.4);
  }

  .abduction-beam {
    position: absolute;
    top: 16px;
    left: 50%;
    width: 74px;
    height: 84px;
    margin-left: -37px;
    clip-path: polygon(41% 0, 59% 0, 100% 100%, 0 100%);
    background: linear-gradient(180deg, rgba(120, 255, 150, 0.55) 0%, rgba(60, 220, 90, 0.22) 55%, rgba(0, 204, 0, 0.08) 100%);
    animation: abd-beam 1.1s ease-in-out infinite alternate;
  }

  .abduction-target {
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 14px;
    height: 18px;
    margin-left: -7px;
    animation: abd-rise 5.2s ease-in-out infinite;
  }

  .abduction-target-head {
    position: absolute;
    top: 0;
    left: 50%;
    width: 8px;
    height: 8px;
    margin-left: -4px;
    border-radius: 50%;
    background: rgba(220, 255, 225, 0.9);
  }

  .abduction-target-body {
    position: absolute;
    top: 9px;
    left: 50%;
    width: 10px;
    height: 9px;
    margin-left: -5px;
    border-radius: 3px 3px 5px 5px;
    background: rgba(160, 255, 175, 0.75);
  }

  .abduction-mote {
    position: absolute;
    bottom: 4px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(190, 255, 200, 0.85);
    opacity: 0;
    animation: abd-mote 2.4s linear infinite;
  }

  .abduction-mote.m1 { left: 38px; animation-delay: 0s; }
  .abduction-mote.m2 { left: 52px; animation-delay: -0.8s; }
  .abduction-mote.m3 { left: 63px; animation-delay: -1.6s; }

  .abduction-ground {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 6px;
    background: linear-gradient(0deg, rgba(0, 204, 0, 0.28), transparent);
  }

  @keyframes abd-ship {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(3px); }
  }

  @keyframes abd-beam {
    from { opacity: 0.55; }
    to { opacity: 1; }
  }

  @keyframes abd-rise {
    0% { transform: translateY(0) rotate(0deg); opacity: 0; }
    10% { opacity: 1; }
    80% { transform: translateY(-64px) rotate(180deg); opacity: 1; }
    92% { transform: translateY(-74px) rotate(200deg) scale(0.5); opacity: 0; }
    100% { transform: translateY(0) rotate(0deg); opacity: 0; }
  }

  @keyframes abd-mote {
    0% { opacity: 0; transform: translateY(0); }
    15% { opacity: 0.9; }
    100% { opacity: 0; transform: translateY(-52px); }
  }
`;

class ConceptAbduction extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${abductionStyles}</style>
      <div class="abduction">
        <div class="abduction-beam"></div>
        <div class="abduction-mote m1"></div>
        <div class="abduction-mote m2"></div>
        <div class="abduction-mote m3"></div>
        <div class="abduction-target">
          <div class="abduction-target-head"></div>
          <div class="abduction-target-body"></div>
        </div>
        <div class="abduction-ship"></div>
        <div class="abduction-ground"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-abduction')) {
  customElements.define('concept-abduction', ConceptAbduction);
}
