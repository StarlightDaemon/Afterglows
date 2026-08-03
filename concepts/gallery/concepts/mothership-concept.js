// Mothership, complete new build (the original was cut in the 2026-08-03
// library trim; this replaces it rather than refining it). The subject is
// the Independence Day archetype: a hull so wide the frame can't contain
// it, looming over a city skyline. Low clouds slide beneath the rim for
// scale, hull rings and a chasing rim-light strip give the underside
// detail, and the center aperture runs the signature cycle — a slow
// charge-up, then the beam column drops onto the city and the windows
// flare before it all goes quiet again.
const mothershipStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ms {
    width: 104px;
    height: 96px;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(0, 204, 0, 0.25);
    box-sizing: border-box;
    background: linear-gradient(180deg, #010b04, #04180a 70%, #062310);
  }

  /* The hull: wider than the frame on purpose — only the underside bulge
     is visible, which is what sells the scale. */
  .ms-ship {
    position: absolute;
    top: -18px;
    left: 50%;
    width: 150px;
    height: 52px;
    margin-left: -75px;
    border-radius: 50%;
    overflow: hidden;
    background: linear-gradient(180deg, #04180a 30%, rgba(0, 90, 20, 0.85) 60%, rgba(0, 190, 45, 0.5) 88%, rgba(150, 255, 180, 0.55));
    box-shadow: 0 4px 14px rgba(0, 204, 0, 0.25);
    animation: ms-loom 9s ease-in-out infinite;
  }

  @keyframes ms-loom {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(1.5px); }
  }

  /* Concentric hull rings on the underside. */
  .ms-ring {
    position: absolute;
    left: 50%;
    border: 1px solid rgba(0, 204, 0, 0.35);
    border-radius: 50%;
  }

  .ms-ring.r1 {
    width: 112px;
    height: 34px;
    margin-left: -56px;
    bottom: -12px;
  }

  .ms-ring.r2 {
    width: 72px;
    height: 22px;
    margin-left: -36px;
    bottom: -7px;
  }

  /* Rim lights chasing along the lower hull. */
  .ms-rim {
    position: absolute;
    bottom: 6px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #b8ffc6;
    animation: ms-rimlight 1.5s linear infinite;
  }

  .ms-rim.l1 { left: 15%; animation-delay: 0s; }
  .ms-rim.l2 { left: 32%; bottom: 3px; animation-delay: -0.3s; }
  .ms-rim.l3 { left: 49%; bottom: 2px; animation-delay: -0.6s; }
  .ms-rim.l4 { left: 66%; bottom: 3px; animation-delay: -0.9s; }
  .ms-rim.l5 { left: 83%; animation-delay: -1.2s; }

  @keyframes ms-rimlight {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 1; }
  }

  /* The center aperture: charges through the cycle, peaks as the beam
     fires. */
  .ms-core {
    position: absolute;
    left: 50%;
    bottom: -5px;
    width: 14px;
    height: 12px;
    margin-left: -7px;
    border-radius: 50%;
    background: radial-gradient(circle at 50% 60%, #d6ffe0, rgba(0, 204, 0, 0.9) 55%, rgba(0, 204, 0, 0) 75%);
    animation: ms-charge 8s linear infinite;
  }

  @keyframes ms-charge {
    0% { opacity: 0.35; }
    30% { opacity: 0.5; }
    55% { opacity: 0.8; }
    62%, 80% { opacity: 1; }
    88% { opacity: 0.4; }
    100% { opacity: 0.35; }
  }

  /* The beam column: drops from the aperture onto the skyline, flickers
     while it burns, retracts. */
  .ms-beam {
    position: absolute;
    left: 50%;
    top: 32px;
    width: 10px;
    height: 50px;
    margin-left: -5px;
    background: linear-gradient(180deg, rgba(214, 255, 224, 0.95), rgba(0, 204, 0, 0.2));
    transform-origin: top center;
    transform: scaleY(0);
    opacity: 0;
    z-index: 1;
    animation: ms-beam 8s linear infinite;
  }

  @keyframes ms-beam {
    0%, 62% { transform: scaleY(0); opacity: 0; }
    64% { transform: scaleY(1); opacity: 1; }
    68% { transform: scaleY(1); opacity: 0.75; }
    72% { transform: scaleY(1); opacity: 1; }
    76% { transform: scaleY(1); opacity: 0.8; }
    80% { transform: scaleY(1); opacity: 1; }
    84%, 100% { transform: scaleY(0); opacity: 0; }
  }

  /* Rooftop bloom where the beam lands. */
  .ms-impact {
    position: absolute;
    left: 50%;
    bottom: 12px;
    width: 34px;
    height: 8px;
    margin-left: -17px;
    border-radius: 50%;
    background: radial-gradient(closest-side, rgba(214, 255, 224, 0.85), rgba(0, 204, 0, 0) 80%);
    opacity: 0;
    z-index: 3;
    animation: ms-impact 8s linear infinite;
  }

  @keyframes ms-impact {
    0%, 62% { opacity: 0; transform: scale(0.5); }
    66% { opacity: 0.9; transform: scale(1); }
    74% { opacity: 0.65; }
    80% { opacity: 0.9; }
    84%, 100% { opacity: 0; transform: scale(1.3); }
  }

  /* City skyline: silhouettes with faint window rows; the windows flare
     while the beam is down. */
  .ms-city {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 18px;
    z-index: 2;
    animation: ms-cityflash 8s linear infinite;
  }

  .ms-city span {
    position: absolute;
    bottom: 0;
    background:
      repeating-linear-gradient(0deg, rgba(140, 255, 170, 0.3) 0 1px, transparent 1px 4px),
      #052a10;
  }

  .ms-city .b1 { left: 2px; width: 12px; height: 13px; }
  .ms-city .b2 { left: 17px; width: 9px; height: 9px; }
  .ms-city .b3 { left: 29px; width: 14px; height: 16px; }
  .ms-city .b4 { left: 47px; width: 10px; height: 8px; }
  .ms-city .b5 { left: 60px; width: 13px; height: 12px; }
  .ms-city .b6 { left: 77px; width: 11px; height: 15px; }
  .ms-city .b7 { left: 91px; width: 9px; height: 10px; }

  @keyframes ms-cityflash {
    0%, 63% { filter: brightness(1); }
    66% { filter: brightness(1.8); }
    70% { filter: brightness(1.3); }
    74% { filter: brightness(1.9); }
    80% { filter: brightness(1.5); }
    85%, 100% { filter: brightness(1); }
  }

  /* Low clouds sliding under the rim — in front of the hull for depth. */
  .ms-cloud {
    position: absolute;
    height: 4px;
    border-radius: 3px;
    background: rgba(160, 255, 180, 0.22);
    z-index: 4;
    opacity: 0;
  }

  .ms-cloud.c1 {
    top: 36px;
    width: 30px;
    animation: ms-cloud 14s linear infinite;
  }

  .ms-cloud.c2 {
    top: 43px;
    width: 20px;
    height: 3px;
    animation: ms-cloud 19s linear infinite;
    animation-delay: -7s;
  }

  @keyframes ms-cloud {
    0% { transform: translateX(-32px); opacity: 0; }
    10% { opacity: 0.8; }
    90% { opacity: 0.8; }
    100% { transform: translateX(122px); opacity: 0; }
  }
`;

class ConceptMothership extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${mothershipStyles}</style>
      <div class="ms">
        <div class="ms-ship">
          <div class="ms-ring r1"></div>
          <div class="ms-ring r2"></div>
          <span class="ms-rim l1"></span>
          <span class="ms-rim l2"></span>
          <span class="ms-rim l3"></span>
          <span class="ms-rim l4"></span>
          <span class="ms-rim l5"></span>
          <div class="ms-core"></div>
        </div>
        <div class="ms-beam"></div>
        <div class="ms-impact"></div>
        <div class="ms-city">
          <span class="b1"></span>
          <span class="b2"></span>
          <span class="b3"></span>
          <span class="b4"></span>
          <span class="b5"></span>
          <span class="b6"></span>
          <span class="b7"></span>
        </div>
        <div class="ms-cloud c1"></div>
        <div class="ms-cloud c2"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-mothership')) {
  customElements.define('concept-mothership', ConceptMothership);
}
