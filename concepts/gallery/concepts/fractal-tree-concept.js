const fractalTreeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A binary tree grows level by level - trunk, then each branch pair
     scaling out of its parent's tip - holds while the whole canopy
     sways as one jointed structure, then withers and regrows. */
  .ft {
    width: 104px;
    height: 96px;
    position: relative;
  }

  .ft-ground {
    position: absolute;
    left: 16px;
    right: 16px;
    bottom: 6px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 204, 0, 0.5), transparent);
  }

  /* Every segment grows from its base; children live at the tip so
     they inherit the parent's growth and sway. */
  .ft-seg {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: var(--w);
    height: var(--h);
    margin-left: calc(var(--w) / -2);
    transform-origin: 50% 100%;
    animation: ft-grow 8s infinite;
  }

  .ft-bar {
    position: absolute;
    inset: 0;
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.85), rgba(0, 130, 26, 0.7));
    box-shadow: 0 0 4px rgba(0, 204, 0, 0.35);
  }

  /* Trunk. */
  .ft-seg.root {
    bottom: 8px;
    --w: 4px;
    --h: 30px;
    --lean: 0deg;
    --delay: 0s;
  }

  /* Level 1: hangs off the trunk tip. */
  .ft-seg.l1 {
    bottom: 100%;
    --w: 3px;
    --h: 22px;
    --delay: 0.7s;
  }

  /* Level 2. */
  .ft-seg.l2 {
    bottom: 100%;
    --w: 2px;
    --h: 15px;
    --delay: 1.4s;
  }

  /* Level 3: twigs with leaf tips. */
  .ft-seg.l3 {
    bottom: 100%;
    --w: 1.5px;
    --h: 10px;
    --delay: 2.1s;
  }

  .ft-seg.left { --lean: -32deg; }
  .ft-seg.right { --lean: 30deg; }

  /* Grow from nothing at --delay, hold, sway, wither at cycle end.
     The sway rides inside the same keyframes (72-88%) so the whole
     tree bends as one linkage. */
  @keyframes ft-grow {
    0% { transform: rotate(var(--lean, 0deg)) scaleY(0); }
    8.75% { transform: rotate(var(--lean, 0deg)) scaleY(0); }
    17.5% { transform: rotate(var(--lean, 0deg)) scaleY(1.06); }
    20% { transform: rotate(var(--lean, 0deg)) scaleY(1); }
    62% { transform: rotate(calc(var(--lean, 0deg) + 2.5deg)) scaleY(1); }
    74% { transform: rotate(calc(var(--lean, 0deg) - 2.5deg)) scaleY(1); }
    86% { transform: rotate(var(--lean, 0deg)) scaleY(1); }
    94%, 100% { transform: rotate(var(--lean, 0deg)) scaleY(0); }
  }

  /* Stagger via animation-delay so each level starts after its
     parent; the withering runs bottom-up too, which reads fine. */
  .ft-seg { animation-delay: var(--delay); }

  /* Leaf glow at every twig tip. */
  .ft-leaf {
    position: absolute;
    top: -3px;
    left: 50%;
    width: 5px;
    height: 5px;
    margin-left: -2.5px;
    border-radius: 50% 20% 50% 50%;
    background: radial-gradient(circle at 40% 35%, #d6ffe0, rgba(0, 180, 36, 0.9));
    animation: ft-leaf 8s infinite;
    animation-delay: var(--delay);
  }

  @keyframes ft-leaf {
    0%, 26% { opacity: 0; box-shadow: none; }
    34% { opacity: 1; box-shadow: 0 0 7px rgba(0, 204, 0, 0.9); }
    58% { opacity: 1; box-shadow: 0 0 4px rgba(0, 204, 0, 0.5); }
    72% { opacity: 1; box-shadow: 0 0 8px rgba(0, 204, 0, 0.95); }
    90%, 100% { opacity: 0; box-shadow: none; }
  }

  /* Spores drifting off the canopy during full leaf-out. */
  .ft-spore {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.8);
    opacity: 0;
    animation: ft-spore 8s infinite;
  }

  .ft-spore.s1 { left: 30px; top: 30px; --sx: -12px; --sy: -14px; animation-delay: 0.2s; }
  .ft-spore.s2 { left: 72px; top: 24px; --sx: 10px;  --sy: -16px; animation-delay: 0.9s; }
  .ft-spore.s3 { left: 52px; top: 16px; --sx: 4px;   --sy: -12px; animation-delay: 1.6s; }

  @keyframes ft-spore {
    0%, 40% { transform: translate(0, 0); opacity: 0; }
    48% { opacity: 0.9; }
    72% { transform: translate(var(--sx), var(--sy)); opacity: 0; }
    100% { opacity: 0; }
  }
`;

// The tree is a fixed 3-level binary structure; building the nested
// markup in code keeps the HTML honest about its recursion.
function branch(level, side) {
  if (level > 3) return '';
  const cls = level === 0 ? 'root' : `l${level} ${side}`;
  const leaf = level === 3 ? '<div class="ft-leaf"></div>' : '';
  return (
    `<div class="ft-seg ${cls}">` +
      `<div class="ft-bar"></div>` +
      leaf +
      branch(level + 1, 'left') +
      branch(level + 1, 'right') +
    `</div>`
  );
}

class ConceptFractalTree extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${fractalTreeStyles}</style>
      <div class="ft">
        ${branch(0, '')}
        <div class="ft-spore s1"></div>
        <div class="ft-spore s2"></div>
        <div class="ft-spore s3"></div>
        <div class="ft-ground"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-fractal-tree')) {
  customElements.define('concept-fractal-tree', ConceptFractalTree);
}
