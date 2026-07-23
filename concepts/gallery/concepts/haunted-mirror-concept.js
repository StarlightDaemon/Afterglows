const hauntedMirrorStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .hm {
    width: 104px;
    height: 104px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Ornate frame. */
  .hm-frame {
    position: relative;
    width: 58px;
    height: 82px;
    border-radius: 28px 28px 6px 6px;
    border: 4px solid rgba(140, 255, 170, 0.55);
    background: linear-gradient(160deg, #04120a 0%, #071c10 45%, #030b06 100%);
    box-shadow: 0 0 12px rgba(0, 204, 0, 0.25), inset 0 0 10px rgba(0, 204, 0, 0.15);
    overflow: hidden;
  }

  .hm-topper {
    position: absolute;
    top: 2px;
    left: 50%;
    width: 8px;
    height: 8px;
    margin-left: -4px;
    transform: rotate(45deg);
    background: rgba(140, 255, 170, 0.55);
  }

  /* Glass sheen sweeping now and then. */
  .hm-sheen {
    position: absolute;
    top: -10px;
    bottom: -10px;
    left: 0;
    width: 14px;
    transform: skewX(-18deg);
    background: linear-gradient(90deg, transparent, rgba(200, 255, 210, 0.22), transparent);
    animation: hm-sheen 9s linear infinite;
  }

  /* The figure in the glass: fades in, holds, vanishes. */
  .hm-figure {
    position: absolute;
    bottom: 8px;
    left: 50%;
    width: 30px;
    height: 44px;
    margin-left: -15px;
    opacity: 0;
    animation: hm-figure 9s ease-in-out infinite;
  }

  .hm-head {
    position: absolute;
    top: 0;
    left: 50%;
    width: 16px;
    height: 18px;
    margin-left: -8px;
    border-radius: 50% 50% 42% 42%;
    background: radial-gradient(circle at 42% 34%, rgba(190, 255, 205, 0.55), rgba(60, 160, 90, 0.25) 70%);
    filter: blur(0.6px);
  }

  .hm-shroud {
    position: absolute;
    top: 15px;
    left: 0;
    width: 30px;
    height: 30px;
    border-radius: 50% 50% 0 0;
    background: linear-gradient(180deg, rgba(120, 230, 150, 0.35), transparent 85%);
    filter: blur(1px);
  }

  /* Hollow eyes that light AFTER the figure resolves. */
  .hm-eye {
    position: absolute;
    top: 7px;
    width: 3px;
    height: 4px;
    border-radius: 50%;
    background: #eaffd9;
    opacity: 0;
    animation: hm-eyes 9s linear infinite;
  }

  .hm-eye.left { left: 10px; }
  .hm-eye.right { right: 10px; }

  /* Crack that flickers across the glass as the figure vanishes. */
  .hm-crack {
    position: absolute;
    top: 26px;
    left: 8px;
    width: 40px;
    height: 26px;
    opacity: 0;
    background:
      linear-gradient(64deg, transparent 47%, rgba(220, 255, 228, 0.8) 48%, transparent 50%),
      linear-gradient(-38deg, transparent 55%, rgba(220, 255, 228, 0.6) 56%, transparent 58%),
      linear-gradient(12deg, transparent 44%, rgba(220, 255, 228, 0.5) 45%, transparent 47%);
    animation: hm-crack 9s linear infinite;
  }

  /* Candlelight flicker across the whole glass. */
  .hm-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 78%, rgba(0, 204, 0, 0.14), transparent 65%);
    animation: hm-glow 2.3s ease-in-out infinite;
  }

  @keyframes hm-figure {
    0%, 18% { opacity: 0; transform: translateY(8px) scale(0.94); }
    34% { opacity: 0.45; transform: translateY(3px) scale(0.97); }
    46%, 66% { opacity: 0.95; transform: translateY(0) scale(1); }
    74%, 76% { opacity: 0.35; transform: translateY(0) scale(1.01); }
    78% { opacity: 0.8; }
    82%, 100% { opacity: 0; transform: translateY(6px) scale(0.96); }
  }

  @keyframes hm-eyes {
    0%, 44% { opacity: 0; }
    50%, 70% { opacity: 1; box-shadow: 0 0 6px rgba(234, 255, 217, 0.9); }
    76%, 100% { opacity: 0; }
  }

  @keyframes hm-crack {
    0%, 73% { opacity: 0; }
    75%, 77% { opacity: 1; }
    79% { opacity: 0.25; }
    81%, 83% { opacity: 0.9; }
    86%, 100% { opacity: 0; }
  }

  @keyframes hm-sheen {
    0%, 55% { transform: translateX(-16px) skewX(-18deg); opacity: 0; }
    60% { opacity: 1; }
    72% { transform: translateX(60px) skewX(-18deg); opacity: 0.8; }
    74%, 100% { transform: translateX(60px) skewX(-18deg); opacity: 0; }
  }

  @keyframes hm-glow {
    0%, 100% { opacity: 0.55; }
    38% { opacity: 1; }
    62% { opacity: 0.7; }
  }
`;

class ConceptHauntedMirror extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${hauntedMirrorStyles}</style>
      <div class="hm">
        <div class="hm-frame">
          <div class="hm-glow"></div>
          <div class="hm-figure">
            <div class="hm-shroud"></div>
            <div class="hm-head"></div>
            <div class="hm-eye left"></div>
            <div class="hm-eye right"></div>
          </div>
          <div class="hm-crack"></div>
          <div class="hm-sheen"></div>
        </div>
        <div class="hm-topper"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-haunted-mirror')) {
  customElements.define('concept-haunted-mirror', ConceptHauntedMirror);
}
