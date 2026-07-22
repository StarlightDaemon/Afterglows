const poltergeistStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .polt {
    position: relative;
    width: 104px;
    height: 104px;
    overflow: hidden;
    background: linear-gradient(180deg, #010401 0%, #020a03 100%);
  }

  .polt-shelf {
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 16px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 204, 0, 0.4), transparent);
  }

  .polt-item {
    position: absolute;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.25);
  }

  /* A cup */
  .polt-item.cup {
    left: 20px;
    bottom: 20px;
    width: 14px;
    height: 12px;
    border-radius: 2px 2px 5px 5px;
    background: linear-gradient(180deg, #10301a, #0a2010);
    border: 1px solid rgba(140, 255, 170, 0.4);
    animation: polt-lift1 6.5s ease-in-out infinite;
  }

  .polt-item.cup::after {
    content: '';
    position: absolute;
    top: 2px;
    right: -5px;
    width: 5px;
    height: 6px;
    border: 1px solid rgba(140, 255, 170, 0.4);
    border-left: none;
    border-radius: 0 4px 4px 0;
  }

  /* A book */
  .polt-item.book {
    left: 46px;
    bottom: 20px;
    width: 20px;
    height: 14px;
    border-radius: 2px;
    background: linear-gradient(90deg, #143a1e 0 4px, #0c2412 4px);
    border: 1px solid rgba(140, 255, 170, 0.35);
    animation: polt-lift2 6.5s ease-in-out infinite;
  }

  .polt-item.book::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 7px;
    right: 3px;
    height: 6px;
    background: repeating-linear-gradient(180deg, rgba(160, 255, 185, 0.35) 0 1px, transparent 1px 3px);
  }

  /* A picture frame */
  .polt-item.frame {
    left: 76px;
    bottom: 20px;
    width: 13px;
    height: 16px;
    border: 2px solid rgba(140, 255, 170, 0.5);
    border-radius: 1px;
    background: #061206;
    animation: polt-lift3 6.5s ease-in-out infinite;
  }

  .polt-item.frame::after {
    content: '';
    position: absolute;
    inset: 2px;
    background: radial-gradient(circle at 50% 40%, rgba(160, 255, 185, 0.4) 0 25%, transparent 60%);
  }

  .polt-presence {
    position: absolute;
    top: 12px;
    left: 50%;
    width: 70px;
    height: 34px;
    margin-left: -35px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(120, 255, 150, 0.14), transparent 68%);
    filter: blur(2px);
    animation: polt-presence 6.5s ease-in-out infinite;
  }

  .polt-crack {
    position: absolute;
    top: 6px;
    right: 14px;
    color: rgba(200, 255, 210, 0.0);
    font-family: monospace;
    font-size: 9px;
    animation: polt-crack 6.5s linear infinite;
  }

  @keyframes polt-lift1 {
    0%, 12% { transform: translateY(0) rotate(0deg); }
    26% { transform: translateY(-34px) rotate(-10deg); }
    40% { transform: translateY(-28px) rotate(8deg); }
    54% { transform: translateY(-36px) rotate(-6deg); }
    68% { transform: translateY(-30px) rotate(4deg); }
    82% { transform: translateY(0) rotate(0deg); }
    100% { transform: translateY(0) rotate(0deg); }
  }

  @keyframes polt-lift2 {
    0%, 18% { transform: translateY(0) rotate(0deg); }
    32% { transform: translateY(-46px) rotate(12deg); }
    46% { transform: translateY(-40px) rotate(-9deg); }
    60% { transform: translateY(-48px) rotate(7deg); }
    74% { transform: translateY(-42px) rotate(-5deg); }
    88%, 100% { transform: translateY(0) rotate(0deg); }
  }

  @keyframes polt-lift3 {
    0%, 8% { transform: translateY(0) rotate(0deg); }
    22% { transform: translateY(-22px) rotate(14deg); }
    36% { transform: translateY(-18px) rotate(-12deg); }
    50% { transform: translateY(-26px) rotate(10deg); }
    62% { transform: translateY(-2px) rotate(-3deg); }
    66% { transform: translateY(-14px) rotate(6deg); }
    78%, 100% { transform: translateY(0) rotate(0deg); }
  }

  @keyframes polt-presence {
    0%, 10% { opacity: 0.2; transform: translateX(-6px); }
    40% { opacity: 1; transform: translateX(8px); }
    70% { opacity: 0.7; transform: translateX(-4px); }
    90%, 100% { opacity: 0.2; transform: translateX(-6px); }
  }

  @keyframes polt-crack {
    0%, 60%, 100% { color: rgba(200, 255, 210, 0); }
    64%, 68% { color: rgba(200, 255, 210, 0.9); }
  }
`;

class ConceptPoltergeist extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${poltergeistStyles}</style>
      <div class="polt">
        <div class="polt-presence"></div>
        <span class="polt-crack">*tap*</span>
        <div class="polt-item cup"></div>
        <div class="polt-item book"></div>
        <div class="polt-item frame"></div>
        <div class="polt-shelf"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-poltergeist')) {
  customElements.define('concept-poltergeist', ConceptPoltergeist);
}
