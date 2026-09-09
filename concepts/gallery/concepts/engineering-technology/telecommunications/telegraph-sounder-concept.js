// BEGIN VISUAL STANDARD v2
// Refined v2 by Codex / Astra / 6; historical markup/styles below remain intact.
const visualStandardV2Styles=".vs2-frame{width:134px;height:128px;box-sizing:border-box}.vs2-frame [class$=\"-stage\"]{width:110px;height:102px}.vs2-frame svg[class$=\"-svg\"]{width:98px;height:94px}.vs2-frame [class$=\"-label\"]{left:4px;right:4px;bottom:4px;font-size:7px;line-height:1.15;text-align:center;letter-spacing:.2px}\n.ts-lever-arm{animation:vs2-sounder 6s steps(1,end) infinite}.ts-sound-ring{animation:vs2-click 6s linear infinite;transform-origin:0 0;filter:none}@keyframes vs2-sounder{0%,20%,70%,100%{transform:rotate(-10deg)}12%,45%{transform:rotate(11deg)}}@keyframes vs2-click{0%,11%,30%,44%,80%,100%{opacity:0;transform:scale(.3)}12%,20%,45%,70%{opacity:.7;transform:scale(.5)}18%,28%,51%,78%{opacity:0;transform:scale(1.5)}}.vs2-coil{animation:vs2-coil-glow 6s steps(1,end) infinite}@keyframes vs2-coil-glow{0%,20%,70%,100%{fill:#852b28}12%,45%{fill:#e36b38}}\n@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important}.ts-lever-arm{transform:rotate(11deg)}.ts-sound-ring{opacity:0}}";
function applyVisualStandardV2(root){
 const style=document.createElement('style');style.textContent=visualStandardV2Styles;root.append(style);
 const frame=root.querySelector('div');frame.classList.add('vs2-frame');frame.setAttribute('role','img');frame.setAttribute('aria-label',"Telegraph Sounder & Resonator. The armature moves down toward the coils; coil glow and click rings follow the dot-and-dash contact sequence.");
 root.querySelectorAll('svg > rect[fill="#b71c1c"]').forEach(e=>e.classList.add('vs2-coil'));
}
// END VISUAL STANDARD v2
const sounderStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ts-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #201a12 0%, #060503 100%);
    border: 1.5px solid rgba(255, 179, 0, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 179, 0, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ts-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ts-svg {
    width: 76px;
    height: 72px;
  }

  /* Rapid Clattering Sounder Lever Armature Action */
  .ts-lever-arm {
    transform-origin: 22px 38px;
    animation: ts-morse-click 1.6s ease-in-out infinite;
  }

  @keyframes ts-morse-click {
    0%, 5% { transform: rotate(0deg); }
    16%, 22% { transform: rotate(-16deg); } /* Dot down */
    33%, 40% { transform: rotate(0deg); }
    51%, 68% { transform: rotate(-16deg); } /* Dash down */
    79%, 100% { transform: rotate(0deg); }
  }

  /* Anvil Click Shockwave Sound Ring */
  .ts-sound-ring {
    stroke: #ffd54f;
    stroke-width: 1.8;
    fill: none;
    filter: drop-shadow(0 0 3px #ffd54f);
    animation: ts-acoustic-wave 0.8s ease-out infinite;
  }

  @keyframes ts-acoustic-wave {
    0% { transform: scale(0.2); opacity: 1; }
    100% { transform: scale(2.8); opacity: 0; }
  }

  .ts-resonator-hood {
    fill: #3e2723;
    stroke: #ffb74d;
    stroke-width: 1.2;
  }

  .ts-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 179, 0, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptTelegraphSounder extends HTMLElement {
// BEGIN VISUAL STANDARD v2
  static get observedAttributes(){return ['version'];}
  attributeChangedCallback(){if(this.isConnected)this.connectedCallback();}
// END VISUAL STANDARD v2
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${sounderStyles}</style>
      <div class="ts-box">
        <div class="ts-stage">
          <svg class="ts-svg" viewBox="0 0 76 72">
            <!-- Wooden Resonator Extension Hood (Acoustic amplifier box behind sounder) -->
            <path class="ts-resonator-hood" d="M 6 12 L 20 6 L 56 6 L 70 12 L 64 64 L 12 64 Z" />
            <path d="M 10 14 L 66 14 L 60 62 L 16 62 Z" fill="#2d1c14" stroke="#8d6e63" stroke-width="0.8" />

            <!-- Sounder Cast Heavy Baseplate inside hood -->
            <rect x="18" y="46" width="40" height="12" rx="1.5" fill="#4e342e" stroke="#ffb74d" stroke-width="0.8" />

            <!-- Dual Electromagnet Coils (Silk-wound copper wire) -->
            <rect x="24" y="32" width="10" height="14" rx="1" fill="#b71c1c" stroke="#ff5252" stroke-width="0.6" />
            <rect x="36" y="32" width="10" height="14" rx="1" fill="#b71c1c" stroke="#ff5252" stroke-width="0.6" />

            <!-- Solid Brass Sounder Anvil Bridge (Stops on Right) -->
            <path d="M 48 20 L 54 20 L 54 46 L 48 46 Z" fill="#ffd700" stroke="#ff8f00" stroke-width="0.8" />
            <!-- Upper and Lower Anvil Limit Screws -->
            <circle cx="51" cy="24" r="1.5" fill="#cfd8dc" />
            <circle cx="51" cy="36" r="1.5" fill="#cfd8dc" />

            <!-- Pivoting Brass Sounder Armature Lever -->
            <g class="ts-lever-arm">
              <!-- Pivot Trunnion Post on Left -->
              <circle cx="22" cy="38" r="3" fill="#ffd700" stroke="#ff8f00" stroke-width="0.8" />
              <!-- Heavy Solid Brass Sounder Arm -->
              <line x1="22" y1="38" x2="52" y2="30" stroke="#ffd700" stroke-width="2.5" stroke-linecap="round" />
              <!-- Soft Iron Cross Armature bar over electromagnets -->
              <rect x="26" y="32" width="18" height="4" rx="0.5" fill="#424242" stroke="#cfd8dc" stroke-width="0.5" />
              <!-- Steel Hammer Head between anvil stops -->
              <polygon points="50,28 54,30 50,32" fill="#cfd8dc" />
            </g>

            <!-- Acoustic Click Sound Waves radiating from anvil -->
            <g transform="translate(51, 30)">
              <circle class="ts-sound-ring" cx="0" cy="0" r="6" />
            </g>

            <!-- Regulation Counterspring at rear -->
            <line x1="20" y1="46" x2="20" y2="38" stroke="#ffab40" stroke-width="1.2" stroke-dasharray="1 1" />
          </svg>
        </div>
        <div class="ts-label">TELEGRAPH SOUNDER</div>
      </div>
    `;
// BEGIN VISUAL STANDARD v2
    if(this.getAttribute('version')!=='v1')applyVisualStandardV2(this.shadowRoot);
// END VISUAL STANDARD v2
  }
}

customElements.define('concept-telegraph-sounder', ConceptTelegraphSounder);
