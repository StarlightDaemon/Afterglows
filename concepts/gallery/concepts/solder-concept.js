// Soldering Iron: v1 and v2 preserved.
// v3 adds authentic electronics workbench colorization:
// green FR-4 solder mask PCB with shiny copper/gold traces and silver solder pads,
// four-band axial resistor component, heated soldering iron tip glowing cherry red,
// cobalt blue iron grip, 60/40 silver solder wire, molten liquid bead solidifying,
// and blue-tinted rosin flux smoke wisp.
const solderStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sol {
    width: 112px;
    height: 92px;
    position: relative;
  }

  .sol-board {
    position: absolute;
    left: 4px;
    right: 4px;
    bottom: 10px;
    height: 14px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 2px;
    background:
      repeating-linear-gradient(90deg, rgba(0, 204, 0, 0.2) 0 2px, transparent 2px 14px),
      rgba(0, 35, 7, 0.7);
  }

  .sol-leg {
    position: absolute;
    bottom: 24px;
    width: 2px;
    height: 10px;
    background: rgba(190, 255, 205, 0.85);
  }

  .sol-leg.p1 { left: 52px; }
  .sol-leg.p2 { left: 62px; }

  .sol-comp {
    position: absolute;
    left: 46px;
    bottom: 33px;
    width: 24px;
    height: 9px;
    border-radius: 2px;
    border: 1px solid rgba(140, 255, 170, 0.8);
    background: rgba(0, 70, 14, 0.8);
  }

  .sol-bead {
    position: absolute;
    left: 49px;
    bottom: 22px;
    width: 8px;
    height: 5px;
    border-radius: 50% 50% 40% 40%;
    background: radial-gradient(circle at 40% 30%, #f2ffdd, rgba(0, 160, 32, 0.95));
    transform: scale(0);
    transform-origin: bottom center;
    animation: sol-bead 6.5s infinite;
  }

  @keyframes sol-bead {
    0%, 20% { transform: scale(0); box-shadow: none; }
    30% { transform: scale(0.5); box-shadow: 0 0 8px rgba(190, 255, 205, 0.9); }
    46% { transform: scale(1.05); box-shadow: 0 0 14px rgba(214, 255, 224, 1); }
    56% { transform: scale(1); box-shadow: 0 0 10px rgba(140, 255, 170, 0.8); }
    72% { transform: scale(1); box-shadow: 0 0 3px rgba(0, 204, 0, 0.5); }
    92% { transform: scale(1); box-shadow: 0 0 2px rgba(0, 204, 0, 0.35); }
    96%, 100% { transform: scale(0); box-shadow: none; }
  }

  .sol-iron {
    position: absolute;
    right: 2px;
    top: 8px;
    width: 62px;
    height: 46px;
    transform-origin: 90% 10%;
    animation: sol-iron 6.5s ease-in-out infinite;
  }

  @keyframes sol-iron {
    0%, 8% { transform: translate(10px, -8px) rotate(4deg); }
    20%, 56% { transform: translate(0, 0) rotate(0deg); }
    70%, 100% { transform: translate(10px, -8px) rotate(4deg); }
  }

  .sol-rod {
    position: absolute;
    right: 2px;
    top: 16px;
    width: 62px;
    height: 10px;
    transform: rotate(-38deg);
    transform-origin: 100% 50%;
  }

  .sol-handle {
    position: absolute;
    right: 0;
    top: 0;
    width: 28px;
    height: 10px;
    border-radius: 5px;
    background: linear-gradient(90deg, rgba(0, 130, 26, 0.9), rgba(0, 60, 12, 0.95));
    border: 1px solid rgba(0, 204, 0, 0.6);
    box-sizing: border-box;
  }

  .sol-shaft {
    position: absolute;
    right: 26px;
    top: 3px;
    width: 26px;
    height: 4px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.85);
  }

  .sol-tip {
    position: absolute;
    right: 50px;
    top: 3.5px;
    width: 10px;
    height: 3px;
    clip-path: polygon(0 50%, 100% 0, 100% 100%);
    background: #d6ffe0;
    animation: sol-tipglow 6.5s infinite;
  }

  @keyframes sol-tipglow {
    0%, 100% { filter: drop-shadow(0 0 2px rgba(0, 204, 0, 0.5)); }
    30%, 56% { filter: drop-shadow(0 0 7px rgba(214, 255, 224, 1)); }
  }

  .sol-wire {
    position: absolute;
    left: -6px;
    top: 36px;
    width: 62px;
    height: 2px;
    border-radius: 1px;
    background: linear-gradient(90deg, rgba(140, 255, 170, 0.4), rgba(214, 255, 224, 0.95));
    transform: rotate(22deg);
    transform-origin: 0% 50%;
    animation: sol-wire 6.5s ease-in-out infinite;
  }

  @keyframes sol-wire {
    0%, 8% { transform: rotate(22deg) translateX(-14px); opacity: 0.4; }
    22%, 50% { transform: rotate(22deg) translateX(0); opacity: 1; }
    56% { transform: rotate(22deg) translateX(-4px); opacity: 1; }
    68%, 100% { transform: rotate(22deg) translateX(-16px); opacity: 0.4; }
  }

  .sol-smoke {
    position: absolute;
    left: 52px;
    bottom: 30px;
    width: 3px;
    height: 18px;
    border-radius: 2px;
    background: linear-gradient(180deg, transparent, rgba(140, 255, 170, 0.5) 60%, transparent);
    filter: blur(1px);
    opacity: 0;
    animation: sol-smoke 6.5s infinite;
  }

  .sol-smoke.s2 { left: 56px; animation-delay: 0.5s; height: 14px; }

  @keyframes sol-smoke {
    0%, 26% { transform: translateY(0) skewX(0deg); opacity: 0; }
    34% { opacity: 0.85; }
    46% { transform: translateY(-12px) skewX(-10deg); opacity: 0.6; }
    58% { transform: translateY(-22px) skewX(8deg); opacity: 0; }
    100% { opacity: 0; }
  }

  .sol-temp {
    position: absolute;
    right: 4px;
    bottom: 0;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 1px;
    color: rgba(140, 255, 170, 0.75);
  }

  .sol-temp::before {
    content: '350\\00B0C';
    animation: sol-temp 6.5s steps(1) infinite;
  }

  @keyframes sol-temp {
    0% { content: '350\\00B0C'; }
    24% { content: '362\\00B0C'; }
    56% { content: '341\\00B0C'; }
    74% { content: 'JOINT \\2713'; }
    94% { content: '350\\00B0C'; }
  }
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sol {
    width: 112px;
    height: 92px;
    position: relative;
  }

  .sol-board {
    position: absolute;
    left: 4px;
    right: 4px;
    bottom: 10px;
    height: 14px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 2px;
    background:
      repeating-linear-gradient(90deg, rgba(0, 204, 0, 0.2) 0 2px, transparent 2px 14px),
      rgba(0, 35, 7, 0.7);
  }

  .sol-leg {
    position: absolute;
    bottom: 24px;
    width: 2px;
    height: 10px;
    background: rgba(190, 255, 205, 0.85);
  }

  .sol-leg.p1 { left: 52px; }
  .sol-leg.p2 { left: 62px; }

  .sol-comp {
    position: absolute;
    left: 46px;
    bottom: 33px;
    width: 24px;
    height: 9px;
    border-radius: 2px;
    border: 1px solid rgba(140, 255, 170, 0.8);
    background: rgba(0, 70, 14, 0.8);
  }

  .sol-bead {
    position: absolute;
    left: 49px;
    bottom: 22px;
    width: 8px;
    height: 5px;
    border-radius: 50% 50% 40% 40%;
    background: radial-gradient(circle at 40% 30%, #f2ffdd, rgba(0, 160, 32, 0.95));
    transform: scale(0);
    transform-origin: bottom center;
    animation: sol-bead 6.5s infinite;
  }

  @keyframes sol-bead {
    0%, 20% { transform: scale(0); box-shadow: none; }
    30% { transform: scale(0.5); box-shadow: 0 0 8px rgba(190, 255, 205, 0.9); }
    46% { transform: scale(1.05); box-shadow: 0 0 14px rgba(214, 255, 224, 1); }
    56% { transform: scale(1); box-shadow: 0 0 10px rgba(140, 255, 170, 0.8); }
    72% { transform: scale(1); box-shadow: 0 0 3px rgba(0, 204, 0, 0.5); }
    92% { transform: scale(1); box-shadow: 0 0 2px rgba(0, 204, 0, 0.35); }
    96%, 100% { transform: scale(0); box-shadow: none; }
  }

  .sol-bead2 {
    position: absolute;
    left: 59px;
    bottom: 22px;
    width: 8px;
    height: 5px;
    border-radius: 50% 50% 40% 40%;
    background: radial-gradient(circle at 40% 30%, rgba(214, 255, 224, 0.75), rgba(0, 120, 24, 0.85));
    box-shadow: 0 0 2px rgba(0, 204, 0, 0.35);
  }

  .sol-iron {
    position: absolute;
    right: 16px;
    top: 9px;
    width: 62px;
    height: 46px;
    transform-origin: 90% 10%;
    animation: sol-iron 6.5s ease-in-out infinite;
  }

  @keyframes sol-iron {
    0%, 8% { transform: translate(10px, -8px) rotate(4deg); }
    20%, 56% { transform: translate(0, 0) rotate(0deg); }
    70%, 100% { transform: translate(10px, -8px) rotate(4deg); }
  }

  .sol-rod {
    position: absolute;
    right: 2px;
    top: 16px;
    width: 62px;
    height: 10px;
    transform: rotate(-38deg);
    transform-origin: 100% 50%;
  }

  .sol-handle {
    position: absolute;
    right: 0;
    top: 0;
    width: 28px;
    height: 10px;
    border-radius: 5px;
    background: linear-gradient(90deg, rgba(0, 130, 26, 0.9), rgba(0, 60, 12, 0.95));
    border: 1px solid rgba(0, 204, 0, 0.6);
    box-sizing: border-box;
  }

  .sol-shaft {
    position: absolute;
    right: 26px;
    top: 3px;
    width: 26px;
    height: 4px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.85);
  }

  .sol-tip {
    position: absolute;
    right: 50px;
    top: 3.5px;
    width: 10px;
    height: 3px;
    clip-path: polygon(0 50%, 100% 0, 100% 100%);
    background: #d6ffe0;
    animation: sol-tipglow 6.5s infinite;
  }

  @keyframes sol-tipglow {
    0%, 100% { filter: drop-shadow(0 0 2px rgba(0, 204, 0, 0.5)); }
    30%, 56% { filter: drop-shadow(0 0 7px rgba(214, 255, 224, 1)); }
  }

  .sol-wire {
    position: absolute;
    left: -6px;
    top: 36px;
    width: 62px;
    height: 2px;
    border-radius: 1px;
    background: linear-gradient(90deg, rgba(140, 255, 170, 0.4), rgba(214, 255, 224, 0.95));
    transform: rotate(22deg);
    transform-origin: 0% 50%;
    animation: sol-wire 6.5s ease-in-out infinite;
  }

  @keyframes sol-wire {
    0%, 8% { transform: rotate(22deg) translateX(-14px); opacity: 0.4; }
    22%, 50% { transform: rotate(22deg) translateX(0); opacity: 1; }
    56% { transform: rotate(22deg) translateX(-4px); opacity: 1; }
    68%, 100% { transform: rotate(22deg) translateX(-16px); opacity: 0.4; }
  }

  .sol-smoke {
    position: absolute;
    left: 52px;
    bottom: 30px;
    width: 3px;
    height: 18px;
    border-radius: 2px;
    background: linear-gradient(180deg, transparent, rgba(140, 255, 170, 0.5) 60%, transparent);
    filter: blur(1px);
    opacity: 0;
    animation: sol-smoke 6.5s infinite;
  }

  .sol-smoke.s2 { left: 56px; animation-delay: 0.5s; height: 14px; }

  @keyframes sol-smoke {
    0%, 26% { transform: translateY(0) skewX(0deg); opacity: 0; }
    34% { opacity: 0.85; }
    46% { transform: translateY(-12px) skewX(-10deg); opacity: 0.6; }
    58% { transform: translateY(-22px) skewX(8deg); opacity: 0; }
    100% { opacity: 0; }
  }

  .sol-temp {
    position: absolute;
    right: 4px;
    bottom: 0;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 1px;
    color: rgba(140, 255, 170, 0.75);
  }

  .sol-temp::before {
    content: '350\\00B0C';
    animation: sol-temp 6.5s steps(1) infinite;
  }

  @keyframes sol-temp {
    0% { content: '350\\00B0C'; }
    24% { content: '362\\00B0C'; }
    56% { content: '341\\00B0C'; }
    74% { content: 'JOINT \\2713'; }
    94% { content: '350\\00B0C'; }
  }
  `,
  v3: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v3: Realistic electronics workbench with deep green FR-4 PCB,
     copper traces, through-hole resistor, heated cherry-red soldering iron tip,
     silvery solder wire, liquid solder fillet, and glowing amber temperature readout. */
  .solc {
    width: 112px;
    height: 92px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #0f172a 0%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* FR-4 Green Solder-mask PCB */
  .solc-board {
    position: absolute;
    left: 4px;
    right: 4px;
    bottom: 10px;
    height: 14px;
    border: 1.5px solid #059669;
    border-radius: 2px;
    background:
      repeating-linear-gradient(90deg, #f59e0b 0 2px, transparent 2px 14px),
      linear-gradient(180deg, #065f46 0%, #064e3b 100%);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  }

  /* Tinned copper component legs */
  .solc-leg {
    position: absolute;
    bottom: 24px;
    width: 2px;
    height: 10px;
    background: #e2e8f0;
    box-shadow: 0 0 2px rgba(226, 232, 240, 0.8);
  }

  .solc-leg.p1 { left: 52px; }
  .solc-leg.p2 { left: 62px; }

  /* Axial resistor component with color bands */
  .solc-comp {
    position: absolute;
    left: 46px;
    bottom: 33px;
    width: 24px;
    height: 9px;
    border-radius: 2px;
    border: 1px solid #d97706;
    background: linear-gradient(90deg, #d97706 0 3px, #b45309 3px 6px, #1e293b 6px 9px, #ef4444 9px 12px, #fbbf24 12px 15px, #d97706 15px 24px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }

  /* Molten to solidified solder joint on pad 1 */
  .solc-bead {
    position: absolute;
    left: 49px;
    bottom: 22px;
    width: 8px;
    height: 5px;
    border-radius: 50% 50% 40% 40%;
    background: radial-gradient(circle at 40% 30%, #ffffff, #94a3b8 70%);
    transform: scale(0);
    transform-origin: bottom center;
    animation: solc-bead 6.5s infinite;
  }

  @keyframes solc-bead {
    0%, 20% { transform: scale(0); box-shadow: none; }
    30% { transform: scale(0.5); background: radial-gradient(circle, #ffedd5, #f97316); box-shadow: 0 0 10px #ffedd5; }
    46% { transform: scale(1.05); background: radial-gradient(circle, #ffffff, #fbbf24 40%, #ea580c 80%); box-shadow: 0 0 16px #fbbf24; }
    56% { transform: scale(1); background: radial-gradient(circle at 40% 30%, #ffffff, #cbd5e1 60%, #64748b 100%); box-shadow: 0 0 10px #e2e8f0; }
    72% { transform: scale(1); background: radial-gradient(circle at 40% 30%, #ffffff, #cbd5e1 60%, #475569 100%); box-shadow: 0 0 4px rgba(255, 255, 255, 0.6); }
    92% { transform: scale(1); box-shadow: 0 0 2px rgba(255, 255, 255, 0.4); }
    96%, 100% { transform: scale(0); box-shadow: none; }
  }

  /* Finished shiny concave solder fillet on pad 2 */
  .solc-bead2 {
    position: absolute;
    left: 59px;
    bottom: 22px;
    width: 8px;
    height: 5px;
    border-radius: 50% 50% 40% 40%;
    background: radial-gradient(circle at 40% 30%, #ffffff 0%, #cbd5e1 55%, #475569 100%);
    box-shadow: 0 0 3px rgba(255, 255, 255, 0.6);
  }

  /* Soldering Iron */
  .solc-iron {
    position: absolute;
    right: 16px;
    top: 9px;
    width: 62px;
    height: 46px;
    transform-origin: 90% 10%;
    animation: solc-iron 6.5s ease-in-out infinite;
  }

  @keyframes solc-iron {
    0%, 8% { transform: translate(10px, -8px) rotate(4deg); }
    20%, 56% { transform: translate(0, 0) rotate(0deg); }
    70%, 100% { transform: translate(10px, -8px) rotate(4deg); }
  }

  .solc-rod {
    position: absolute;
    right: 2px;
    top: 16px;
    width: 62px;
    height: 10px;
    transform: rotate(-38deg);
    transform-origin: 100% 50%;
  }

  /* ESD-safe blue handle */
  .solc-handle {
    position: absolute;
    right: 0;
    top: 0;
    width: 28px;
    height: 10px;
    border-radius: 5px;
    background: linear-gradient(90deg, #1e40af, #1d4ed8);
    border: 1px solid #3b82f6;
    box-sizing: border-box;
    box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.3);
  }

  /* Stainless steel barrel shaft */
  .solc-shaft {
    position: absolute;
    right: 26px;
    top: 3px;
    width: 26px;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(180deg, #f1f5f9 0%, #94a3b8 100%);
  }

  /* Heated copper-plated iron tip */
  .solc-tip {
    position: absolute;
    right: 50px;
    top: 3.5px;
    width: 10px;
    height: 3px;
    clip-path: polygon(0 50%, 100% 0, 100% 100%);
    background: #ff5722;
    animation: solc-tipglow 6.5s infinite;
  }

  @keyframes solc-tipglow {
    0%, 100% { background: #ea580c; filter: drop-shadow(0 0 2px #ea580c); }
    30%, 56% { background: #ffedd5; filter: drop-shadow(0 0 8px #ff6b6b) drop-shadow(0 0 14px #ffedd5); }
  }

  /* Shiny 60/40 rosin-core solder wire */
  .solc-wire {
    position: absolute;
    left: -6px;
    top: 36px;
    width: 62px;
    height: 2px;
    border-radius: 1px;
    background: linear-gradient(90deg, #64748b 0%, #f8fafc 80%, #ffffff 100%);
    box-shadow: 0 0 3px rgba(255, 255, 255, 0.5);
    transform: rotate(22deg);
    transform-origin: 0% 50%;
    animation: solc-wire 6.5s ease-in-out infinite;
  }

  @keyframes solc-wire {
    0%, 8% { transform: rotate(22deg) translateX(-14px); opacity: 0.5; }
    22%, 50% { transform: rotate(22deg) translateX(0); opacity: 1; }
    56% { transform: rotate(22deg) translateX(-4px); opacity: 1; }
    68%, 100% { transform: rotate(22deg) translateX(-16px); opacity: 0.5; }
  }

  /* Rosin flux smoke wisp */
  .solc-smoke {
    position: absolute;
    left: 52px;
    bottom: 30px;
    width: 3px;
    height: 18px;
    border-radius: 2px;
    background: linear-gradient(180deg, transparent, rgba(186, 230, 253, 0.6) 60%, transparent);
    filter: blur(1px);
    opacity: 0;
    animation: solc-smoke 6.5s infinite;
  }

  .solc-smoke.s2 { left: 56px; animation-delay: 0.5s; height: 14px; }

  @keyframes solc-smoke {
    0%, 26% { transform: translateY(0) skewX(0deg); opacity: 0; }
    34% { opacity: 0.9; }
    46% { transform: translateY(-12px) skewX(-10deg); opacity: 0.7; }
    58% { transform: translateY(-22px) skewX(8deg); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Digital solder station temperature LED readout */
  .solc-temp {
    position: absolute;
    right: 4px;
    bottom: 0;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 1px;
    color: #f59e0b;
    text-shadow: 0 0 5px rgba(245, 158, 11, 0.8);
  }

  .solc-temp::before {
    content: '350\\00B0C';
    animation: solc-temp 6.5s steps(1) infinite;
  }

  @keyframes solc-temp {
    0% { content: '350\\00B0C'; }
    24% { content: '362\\00B0C'; }
    56% { content: '341\\00B0C'; }
    74% { content: 'JOINT \\2713'; }
    94% { content: '350\\00B0C'; }
  }
  `,
};

const solderMarkup = {
  v1: `
      <div class="sol">
        <div class="sol-smoke"></div>
        <div class="sol-smoke s2"></div>
        <div class="sol-comp"></div>
        <div class="sol-leg p1"></div>
        <div class="sol-leg p2"></div>
        <div class="sol-bead"></div>
        <div class="sol-board"></div>
        <div class="sol-wire"></div>
        <div class="sol-iron">
          <div class="sol-rod">
            <div class="sol-handle"></div>
            <div class="sol-shaft"></div>
            <div class="sol-tip"></div>
          </div>
        </div>
        <div class="sol-temp"></div>
      </div>
    `,
  v2: `
      <div class="sol">
        <div class="sol-smoke"></div>
        <div class="sol-smoke s2"></div>
        <div class="sol-comp"></div>
        <div class="sol-leg p1"></div>
        <div class="sol-leg p2"></div>
        <div class="sol-bead"></div>
        <div class="sol-bead2"></div>
        <div class="sol-board"></div>
        <div class="sol-wire"></div>
        <div class="sol-iron">
          <div class="sol-rod">
            <div class="sol-handle"></div>
            <div class="sol-shaft"></div>
            <div class="sol-tip"></div>
          </div>
        </div>
        <div class="sol-temp"></div>
      </div>
    `,
  v3: `
      <div class="solc">
        <div class="solc-smoke"></div>
        <div class="solc-smoke s2"></div>
        <div class="solc-comp"></div>
        <div class="solc-leg p1"></div>
        <div class="solc-leg p2"></div>
        <div class="solc-bead"></div>
        <div class="solc-bead2"></div>
        <div class="solc-board"></div>
        <div class="solc-wire"></div>
        <div class="solc-iron">
          <div class="solc-rod">
            <div class="solc-handle"></div>
            <div class="solc-shaft"></div>
            <div class="solc-tip"></div>
          </div>
        </div>
        <div class="solc-temp"></div>
      </div>
    `,
};

class ConceptSolder extends HTMLElement {
  static get observedAttributes() { return ['version']; }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }
  render() {
    const version = this.getAttribute('version') || 'v3';
    this.shadowRoot.innerHTML = `<style>${solderStyles[version] || solderStyles.v3}</style>${solderMarkup[version] || solderMarkup.v3}`;
  }
}

if (!customElements.get('concept-solder')) {
  customElements.define('concept-solder', ConceptSolder);
}
