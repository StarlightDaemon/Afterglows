// v1 below is the archived original; v2 closes the signal's dead gap;
// v3 tightens the presentation; v4 introduces colored lenses in green chrome;
// v5 slows the cycle to 12s; v6 provides a complete municipal traffic signal
// in authentic MUTCD road hardware (matte black housing, galvanized mast,
// faceted LED matrix clusters, and dynamic ground spill).
const trafficLightStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .tl {
    width: 104px;
    height: 100px;
    position: relative;
  }

  .tl-pole {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 4px;
    height: 18px;
    margin-left: -2px;
    background: linear-gradient(180deg, rgba(0, 204, 0, 0.7), rgba(0, 80, 16, 0.6));
  }

  .tl-housing {
    position: absolute;
    left: 50%;
    top: 2px;
    width: 34px;
    height: 82px;
    margin-left: -17px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 8px;
    background: linear-gradient(180deg, rgba(0, 45, 9, 0.6), rgba(0, 20, 4, 0.85));
    box-shadow: inset 0 0 8px rgba(0, 204, 0, 0.15);
  }

  .tl-hood {
    position: absolute;
    left: 3px;
    width: 24px;
    height: 5px;
    border-radius: 3px 3px 0 0;
    background: rgba(0, 204, 0, 0.5);
  }

  .tl-hood.h1 { top: 3px; }
  .tl-hood.h2 { top: 29px; }
  .tl-hood.h3 { top: 55px; }

  .tl-lamp {
    position: absolute;
    left: 50%;
    width: 18px;
    height: 18px;
    margin-left: -9px;
    border-radius: 50%;
    border: 1px solid rgba(140, 255, 170, 0.5);
  }

  .tl-lamp.stop { top: 8px; background: rgba(0, 204, 0, 0.18); animation: tl-stop 8s steps(1) infinite; }
  .tl-lamp.caution { top: 34px; background: rgba(0, 204, 0, 0.18); animation: tl-caution 8s steps(1) infinite; }
  .tl-lamp.go { top: 60px; background: rgba(0, 204, 0, 0.18); animation: tl-go 8s steps(1) infinite; }

  @keyframes tl-go {
    0% {
      background: radial-gradient(circle at 38% 32%, #d6ffe0, #29e029 60%);
      box-shadow: 0 0 16px rgba(0, 204, 0, 0.95), 0 0 30px rgba(0, 204, 0, 0.4);
    }
    42% { background: rgba(0, 204, 0, 0.18); box-shadow: none; }
  }

  @keyframes tl-caution {
    0% { background: rgba(0, 204, 0, 0.18); box-shadow: none; }
    42% {
      background: radial-gradient(circle at 38% 32%, #f2ffdd, #9ade5a 60%);
      box-shadow: 0 0 12px rgba(160, 230, 90, 0.9);
    }
    54% { background: rgba(0, 204, 0, 0.18); box-shadow: none; }
  }

  @keyframes tl-stop {
    0%, 42% { background: rgba(0, 204, 0, 0.18); box-shadow: none; }
    54% {
      background: radial-gradient(circle at 38% 32%, #eaffe6, #57b657 55%, #1d5b2a);
      box-shadow: 0 0 10px rgba(80, 180, 90, 0.8), inset 0 0 5px rgba(230, 255, 230, 0.6);
    }
    92% { background: rgba(0, 204, 0, 0.18); box-shadow: none; }
  }

  .tl-spill {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 60px;
    height: 8px;
    margin-left: -30px;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgba(0, 204, 0, 0.4), transparent 70%);
    animation: tl-spill 8s steps(1) infinite;
  }

  @keyframes tl-spill {
    0% { opacity: 1; }
    42% { opacity: 0.25; }
    54% { opacity: 0.45; }
    92% { opacity: 0.25; }
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

  .tl {
    width: 104px;
    height: 100px;
    position: relative;
  }

  .tl-pole {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 4px;
    height: 18px;
    margin-left: -2px;
    background: linear-gradient(180deg, rgba(0, 204, 0, 0.7), rgba(0, 80, 16, 0.6));
  }

  .tl-housing {
    position: absolute;
    left: 50%;
    top: 2px;
    width: 34px;
    height: 82px;
    margin-left: -19px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 8px;
    background: linear-gradient(180deg, rgba(0, 45, 9, 0.6), rgba(0, 20, 4, 0.85));
    box-shadow: inset 0 0 8px rgba(0, 204, 0, 0.15);
  }

  .tl-hood {
    position: absolute;
    left: 5px;
    width: 24px;
    height: 5px;
    border-radius: 3px 3px 0 0;
    background: rgba(0, 204, 0, 0.5);
  }

  .tl-hood.h1 { top: 3px; }
  .tl-hood.h2 { top: 29px; }
  .tl-hood.h3 { top: 55px; }

  .tl-lamp {
    position: absolute;
    left: 50%;
    width: 18px;
    height: 18px;
    margin-left: -9px;
    border-radius: 50%;
    border: 1px solid rgba(140, 255, 170, 0.5);
  }

  .tl-lamp.stop { top: 8px; background: rgba(0, 204, 0, 0.18); animation: tl-stop 8s steps(1) infinite; }
  .tl-lamp.caution { top: 34px; background: rgba(0, 204, 0, 0.18); animation: tl-caution 8s steps(1) infinite; }
  .tl-lamp.go { top: 60px; background: rgba(0, 204, 0, 0.18); animation: tl-go 8s steps(1) infinite; }

  @keyframes tl-go {
    0% {
      background: radial-gradient(circle at 38% 32%, #d6ffe0, #29e029 60%);
      box-shadow: 0 0 16px rgba(0, 204, 0, 0.95), 0 0 30px rgba(0, 204, 0, 0.4);
    }
    42% { background: rgba(0, 204, 0, 0.18); box-shadow: none; }
  }

  @keyframes tl-caution {
    0% { background: rgba(0, 204, 0, 0.18); box-shadow: none; }
    42% {
      background: radial-gradient(circle at 38% 32%, #f2ffdd, #9ade5a 60%);
      box-shadow: 0 0 12px rgba(160, 230, 90, 0.9);
    }
    54% { background: rgba(0, 204, 0, 0.18); box-shadow: none; }
  }

  @keyframes tl-stop {
    0%, 42% { background: rgba(0, 204, 0, 0.18); box-shadow: none; }
    54%, 100% {
      background: radial-gradient(circle at 38% 32%, #eaffe6, #57b657 55%, #1d5b2a);
      box-shadow: 0 0 10px rgba(80, 180, 90, 0.8), inset 0 0 5px rgba(230, 255, 230, 0.6);
    }
  }

  .tl-spill {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 60px;
    height: 8px;
    margin-left: -30px;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgba(0, 204, 0, 0.4), transparent 70%);
    animation: tl-spill 8s steps(1) infinite;
  }

  @keyframes tl-spill {
    0% { opacity: 1; }
    42% { opacity: 0.25; }
    54%, 100% { opacity: 0.45; }
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

  .tli {
    width: 104px;
    height: 100px;
    position: relative;
  }

  .tli-pole {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 4px;
    height: 21px;
    margin-left: -2px;
    background: linear-gradient(180deg, rgba(0, 204, 0, 0.7), rgba(0, 80, 16, 0.6));
  }

  .tli-housing {
    position: absolute;
    left: 50%;
    top: 1px;
    width: 30px;
    height: 74px;
    margin-left: -17px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 8px;
    background: linear-gradient(180deg, rgba(0, 45, 9, 0.6), rgba(0, 20, 4, 0.85));
    box-shadow: inset 0 0 8px rgba(0, 204, 0, 0.15);
  }

  .tli-hood {
    position: absolute;
    left: 4px;
    width: 22px;
    height: 5px;
    border-radius: 3px 3px 0 0;
    background: rgba(0, 204, 0, 0.5);
  }

  .tli-hood.h1 { top: 3px; }
  .tli-hood.h2 { top: 26px; }
  .tli-hood.h3 { top: 49px; }

  .tli-lamp {
    position: absolute;
    left: 50%;
    width: 16px;
    height: 16px;
    margin-left: -8px;
    border-radius: 50%;
    border: 1px solid rgba(140, 255, 170, 0.5);
  }

  .tli-lamp.stop { top: 8px; background: rgba(0, 204, 0, 0.18); animation: tli-stop 8s steps(1) infinite; }
  .tli-lamp.caution { top: 31px; background: rgba(0, 204, 0, 0.18); animation: tli-caution 8s steps(1) infinite; }
  .tli-lamp.go { top: 54px; background: rgba(0, 204, 0, 0.18); animation: tli-go 8s steps(1) infinite; }

  @keyframes tli-go {
    0% {
      background: radial-gradient(circle at 38% 32%, #d6ffe0, #29e029 60%);
      box-shadow: 0 0 16px rgba(0, 204, 0, 0.95), 0 0 30px rgba(0, 204, 0, 0.4);
    }
    42% { background: rgba(0, 204, 0, 0.18); box-shadow: none; }
  }

  @keyframes tli-caution {
    0% { background: rgba(0, 204, 0, 0.18); box-shadow: none; }
    42% {
      background: radial-gradient(circle at 38% 32%, #f2ffdd, #9ade5a 60%);
      box-shadow: 0 0 12px rgba(160, 230, 90, 0.9);
    }
    54% { background: rgba(0, 204, 0, 0.18); box-shadow: none; }
  }

  @keyframes tli-stop {
    0%, 42% { background: rgba(0, 204, 0, 0.18); box-shadow: none; }
    54%, 100% {
      background: radial-gradient(circle at 38% 32%, #eaffe6, #57b657 55%, #1d5b2a);
      box-shadow: 0 0 10px rgba(80, 180, 90, 0.8), inset 0 0 5px rgba(230, 255, 230, 0.6);
    }
  }

  .tli-spill {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 60px;
    height: 8px;
    margin-left: -30px;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgba(0, 204, 0, 0.4), transparent 70%);
    animation: tli-spill 8s steps(1) infinite;
  }

  @keyframes tli-spill {
    0% { opacity: 1; }
    42% { opacity: 0.25; }
    54%, 100% { opacity: 0.45; }
  }
`,
  v4: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .tlc {
    width: 104px;
    height: 100px;
    position: relative;
  }

  .tlc-halo {
    position: absolute;
    left: 20px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    opacity: 0;
  }

  .tlc-halo.hr {
    top: -9px;
    background: radial-gradient(circle, rgba(255, 65, 54, 0.5), rgba(255, 65, 54, 0.15) 45%, transparent 70%);
    animation: tlc-halo-r 8s steps(1) infinite;
  }

  .tlc-halo.hy {
    top: 20px;
    background: radial-gradient(circle, rgba(255, 183, 0, 0.45), rgba(255, 183, 0, 0.13) 45%, transparent 70%);
    animation: tlc-halo-y 8s steps(1) infinite;
  }

  .tlc-halo.hg {
    top: 49px;
    background: radial-gradient(circle, rgba(46, 204, 64, 0.5), rgba(46, 204, 64, 0.15) 45%, transparent 70%);
    animation: tlc-halo-g 8s steps(1) infinite;
  }

  @keyframes tlc-halo-g {
    0% { opacity: 0.9; }
    42% { opacity: 0; }
  }

  @keyframes tlc-halo-y {
    0% { opacity: 0; }
    42% { opacity: 0.85; }
    54% { opacity: 0; }
  }

  @keyframes tlc-halo-r {
    0%, 42% { opacity: 0; }
    54%, 100% { opacity: 0.9; }
  }

  .tlc-pole {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 4px;
    height: 6px;
    margin-left: -2px;
    background: linear-gradient(180deg, rgba(0, 204, 0, 0.7), rgba(0, 80, 16, 0.6));
  }

  .tlc-housing {
    position: absolute;
    left: 50%;
    top: 2px;
    width: 34px;
    height: 90px;
    margin-left: -19px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 10px;
    background: linear-gradient(180deg, rgba(0, 45, 9, 0.6), rgba(0, 20, 4, 0.85));
    box-shadow: inset 0 0 8px rgba(0, 204, 0, 0.15);
  }

  .tlc-hood {
    position: absolute;
    left: 5px;
    width: 24px;
    height: 5px;
    border-radius: 3px 3px 0 0;
    background: rgba(0, 204, 0, 0.5);
  }

  .tlc-hood.h1 { top: 3px; }
  .tlc-hood.h2 { top: 32px; }
  .tlc-hood.h3 { top: 61px; }

  .tlc-lamp {
    position: absolute;
    left: 50%;
    width: 22px;
    height: 22px;
    margin-left: -11px;
    border-radius: 50%;
  }

  .tlc-lamp.red {
    top: 8px;
    border: 1px solid rgba(255, 140, 130, 0.45);
    background: rgba(255, 65, 54, 0.13);
    animation: tlc-red 8s steps(1) infinite;
  }

  .tlc-lamp.yellow {
    top: 37px;
    border: 1px solid rgba(255, 210, 120, 0.45);
    background: rgba(255, 183, 0, 0.13);
    animation: tlc-yellow 8s steps(1) infinite;
  }

  .tlc-lamp.green {
    top: 66px;
    border: 1px solid rgba(140, 230, 150, 0.45);
    background: rgba(46, 204, 64, 0.13);
    animation: tlc-green 8s steps(1) infinite;
  }

  @keyframes tlc-green {
    0% {
      background: radial-gradient(circle at 38% 32%, #eaffea, #2ecc40 62%);
      box-shadow: 0 0 16px rgba(46, 204, 64, 0.95), 0 0 32px rgba(46, 204, 64, 0.45);
    }
    42% { background: rgba(46, 204, 64, 0.13); box-shadow: none; }
  }

  @keyframes tlc-yellow {
    0% { background: rgba(255, 183, 0, 0.13); box-shadow: none; }
    42% {
      background: radial-gradient(circle at 38% 32%, #fff8dc, #ffb700 62%);
      box-shadow: 0 0 14px rgba(255, 183, 0, 0.95), 0 0 28px rgba(255, 183, 0, 0.4);
    }
    54% { background: rgba(255, 183, 0, 0.13); box-shadow: none; }
  }

  @keyframes tlc-red {
    0%, 42% { background: rgba(255, 65, 54, 0.13); box-shadow: none; }
    54%, 100% {
      background: radial-gradient(circle at 38% 32%, #ffe9e6, #ff4136 62%);
      box-shadow: 0 0 16px rgba(255, 65, 54, 0.95), 0 0 32px rgba(255, 65, 54, 0.45);
    }
  }

  .tlc-spill {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 64px;
    height: 8px;
    margin-left: -32px;
    border-radius: 50%;
    animation: tlc-spill 8s steps(1) infinite;
  }

  @keyframes tlc-spill {
    0% { background: radial-gradient(ellipse, rgba(46, 204, 64, 0.5), transparent 70%); }
    42% { background: radial-gradient(ellipse, rgba(255, 183, 0, 0.45), transparent 70%); }
    54%, 100% { background: radial-gradient(ellipse, rgba(255, 65, 54, 0.5), transparent 70%); }
  }
`,
  v5: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .tlc {
    width: 104px;
    height: 100px;
    position: relative;
  }

  .tlc-halo {
    position: absolute;
    left: 20px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    opacity: 0;
  }

  .tlc-halo.hr {
    top: -9px;
    background: radial-gradient(circle, rgba(255, 65, 54, 0.5), rgba(255, 65, 54, 0.15) 45%, transparent 70%);
    animation: tlc-halo-r 12s steps(1) infinite;
  }

  .tlc-halo.hy {
    top: 20px;
    background: radial-gradient(circle, rgba(255, 183, 0, 0.45), rgba(255, 183, 0, 0.13) 45%, transparent 70%);
    animation: tlc-halo-y 12s steps(1) infinite;
  }

  .tlc-halo.hg {
    top: 49px;
    background: radial-gradient(circle, rgba(46, 204, 64, 0.5), rgba(46, 204, 64, 0.15) 45%, transparent 70%);
    animation: tlc-halo-g 12s steps(1) infinite;
  }

  @keyframes tlc-halo-g {
    0% { opacity: 0.9; }
    50% { opacity: 0; }
  }

  @keyframes tlc-halo-y {
    0% { opacity: 0; }
    50% { opacity: 0.85; }
    62.5% { opacity: 0; }
  }

  @keyframes tlc-halo-r {
    0%, 50% { opacity: 0; }
    62.5%, 100% { opacity: 0.9; }
  }

  .tlc-pole {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 4px;
    height: 6px;
    margin-left: -2px;
    background: linear-gradient(180deg, rgba(0, 204, 0, 0.7), rgba(0, 80, 16, 0.6));
  }

  .tlc-housing {
    position: absolute;
    left: 50%;
    top: 2px;
    width: 34px;
    height: 90px;
    margin-left: -19px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 10px;
    background: linear-gradient(180deg, rgba(0, 45, 9, 0.6), rgba(0, 20, 4, 0.85));
    box-shadow: inset 0 0 8px rgba(0, 204, 0, 0.15);
  }

  .tlc-hood {
    position: absolute;
    left: 5px;
    width: 24px;
    height: 5px;
    border-radius: 3px 3px 0 0;
    background: rgba(0, 204, 0, 0.5);
  }

  .tlc-hood.h1 { top: 3px; }
  .tlc-hood.h2 { top: 32px; }
  .tlc-hood.h3 { top: 61px; }

  .tlc-lamp {
    position: absolute;
    left: 50%;
    width: 22px;
    height: 22px;
    margin-left: -11px;
    border-radius: 50%;
  }

  .tlc-lamp.red {
    top: 8px;
    border: 1px solid rgba(255, 140, 130, 0.45);
    background: rgba(255, 65, 54, 0.13);
    animation: tlc-red 12s steps(1) infinite;
  }

  .tlc-lamp.yellow {
    top: 37px;
    border: 1px solid rgba(255, 210, 120, 0.45);
    background: rgba(255, 183, 0, 0.13);
    animation: tlc-yellow 12s steps(1) infinite;
  }

  .tlc-lamp.green {
    top: 66px;
    border: 1px solid rgba(140, 230, 150, 0.45);
    background: rgba(46, 204, 64, 0.13);
    animation: tlc-green 12s steps(1) infinite;
  }

  @keyframes tlc-green {
    0% {
      background: radial-gradient(circle at 38% 32%, #eaffea, #2ecc40 62%);
      box-shadow: 0 0 16px rgba(46, 204, 64, 0.95), 0 0 32px rgba(46, 204, 64, 0.45);
    }
    50% { background: rgba(46, 204, 64, 0.13); box-shadow: none; }
  }

  @keyframes tlc-yellow {
    0% { background: rgba(255, 183, 0, 0.13); box-shadow: none; }
    50% {
      background: radial-gradient(circle at 38% 32%, #fff8dc, #ffb700 62%);
      box-shadow: 0 0 14px rgba(255, 183, 0, 0.95), 0 0 28px rgba(255, 183, 0, 0.4);
    }
    62.5% { background: rgba(255, 183, 0, 0.13); box-shadow: none; }
  }

  @keyframes tlc-red {
    0%, 50% { background: rgba(255, 65, 54, 0.13); box-shadow: none; }
    62.5%, 100% {
      background: radial-gradient(circle at 38% 32%, #ffe9e6, #ff4136 62%);
      box-shadow: 0 0 16px rgba(255, 65, 54, 0.95), 0 0 32px rgba(255, 65, 54, 0.45);
    }
  }

  .tlc-spill {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 64px;
    height: 8px;
    margin-left: -32px;
    border-radius: 50%;
    animation: tlc-spill 12s steps(1) infinite;
  }

  @keyframes tlc-spill {
    0% { background: radial-gradient(ellipse, rgba(46, 204, 64, 0.5), transparent 70%); }
    50% { background: radial-gradient(ellipse, rgba(255, 183, 0, 0.45), transparent 70%); }
    62.5%, 100% { background: radial-gradient(ellipse, rgba(255, 65, 54, 0.5), transparent 70%); }
  }
`,
  v6: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v6: Complete MUTCD municipal signal installation: matte black housing with
     high-vis yellow retroreflective backplate border, galvanized steel mast, faceted LED
     matrix lenses (Portland Red, Solar Amber, Signal Green), intense colored halos,
     and wet asphalt light reflection. */
  .tl-full {
    width: 104px;
    height: 100px;
    position: relative;
  }

  /* Optical lens halo bursts */
  .tl-full-halo {
    position: absolute;
    left: 20px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    opacity: 0;
  }

  .tl-full-halo.hr {
    top: -9px;
    background: radial-gradient(circle, rgba(255, 32, 32, 0.7), rgba(255, 32, 32, 0.2) 45%, transparent 70%);
    animation: tl-halo-r6 12s steps(1) infinite;
  }

  .tl-full-halo.hy {
    top: 20px;
    background: radial-gradient(circle, rgba(255, 179, 0, 0.65), rgba(255, 179, 0, 0.18) 45%, transparent 70%);
    animation: tl-halo-y6 12s steps(1) infinite;
  }

  .tl-full-halo.hg {
    top: 49px;
    background: radial-gradient(circle, rgba(0, 230, 118, 0.7), rgba(0, 230, 118, 0.2) 45%, transparent 70%);
    animation: tl-halo-g6 12s steps(1) infinite;
  }

  @keyframes tl-halo-g6 {
    0% { opacity: 0.95; }
    50% { opacity: 0; }
  }

  @keyframes tl-halo-y6 {
    0% { opacity: 0; }
    50% { opacity: 0.9; }
    62.5% { opacity: 0; }
  }

  @keyframes tl-halo-r6 {
    0%, 50% { opacity: 0; }
    62.5%, 100% { opacity: 0.95; }
  }

  /* Galvanized steel pole */
  .tl-full-pole {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 6px;
    height: 8px;
    margin-left: -3px;
    background: linear-gradient(90deg, #64748b, #94a3b8 50%, #475569 100%);
    border-radius: 1px;
  }

  /* Matte polycarbonate signal head with yellow backplate */
  .tl-full-housing {
    position: absolute;
    left: 50%;
    top: 2px;
    width: 36px;
    height: 90px;
    margin-left: -20px;
    border: 2px solid #eab308;
    border-radius: 10px;
    background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.8), inset 0 0 6px rgba(0, 0, 0, 0.9);
  }

  /* Tunnel visors */
  .tl-full-hood {
    position: absolute;
    left: 5px;
    width: 26px;
    height: 5px;
    border-radius: 4px 4px 0 0;
    background: #334155;
    border-top: 1px solid #475569;
  }

  .tl-full-hood.h1 { top: 3px; }
  .tl-full-hood.h2 { top: 32px; }
  .tl-full-hood.h3 { top: 61px; }

  /* Faceted LED diode matrix lenses */
  .tl-full-lamp {
    position: absolute;
    left: 50%;
    width: 22px;
    height: 22px;
    margin-left: -11px;
    border-radius: 50%;
  }

  .tl-full-lamp.red {
    top: 8px;
    border: 1px solid rgba(255, 100, 100, 0.5);
    background: rgba(255, 32, 32, 0.15);
    animation: tl-red6 12s steps(1) infinite;
  }

  .tl-full-lamp.yellow {
    top: 37px;
    border: 1px solid rgba(255, 210, 80, 0.5);
    background: rgba(255, 179, 0, 0.15);
    animation: tl-yellow6 12s steps(1) infinite;
  }

  .tl-full-lamp.green {
    top: 66px;
    border: 1px solid rgba(100, 255, 180, 0.5);
    background: rgba(0, 230, 118, 0.15);
    animation: tl-green6 12s steps(1) infinite;
  }

  @keyframes tl-green6 {
    0% {
      background: radial-gradient(circle at 38% 32%, #b9f6ca, #00e676 50%, #00a844 85%);
      box-shadow: 0 0 18px #00e676, 0 0 36px rgba(0, 230, 118, 0.6);
    }
    50% { background: rgba(0, 230, 118, 0.15); box-shadow: none; }
  }

  @keyframes tl-yellow6 {
    0% { background: rgba(255, 179, 0, 0.15); box-shadow: none; }
    50% {
      background: radial-gradient(circle at 38% 32%, #fff9c4, #ffb300 50%, #f57f17 85%);
      box-shadow: 0 0 16px #ffb300, 0 0 32px rgba(255, 179, 0, 0.55);
    }
    62.5% { background: rgba(255, 179, 0, 0.15); box-shadow: none; }
  }

  @keyframes tl-red6 {
    0%, 50% { background: rgba(255, 32, 32, 0.15); box-shadow: none; }
    62.5%, 100% {
      background: radial-gradient(circle at 38% 32%, #ffcdd2, #ff2020 50%, #b71c1c 85%);
      box-shadow: 0 0 18px #ff2020, 0 0 36px rgba(255, 32, 32, 0.6);
    }
  }

  /* Wet pavement ground spill */
  .tl-full-spill {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 68px;
    height: 8px;
    margin-left: -34px;
    border-radius: 50%;
    animation: tl-spill6 12s steps(1) infinite;
  }

  @keyframes tl-spill6 {
    0% { background: radial-gradient(ellipse, rgba(0, 230, 118, 0.55), transparent 70%); }
    50% { background: radial-gradient(ellipse, rgba(255, 179, 0, 0.5), transparent 70%); }
    62.5%, 100% { background: radial-gradient(ellipse, rgba(255, 32, 32, 0.55), transparent 70%); }
  }
  `,
};

const trafficLightMarkup = {
  v1: `
      <div class="tl">
        <div class="tl-spill"></div>
        <div class="tl-pole"></div>
        <div class="tl-housing">
          <div class="tl-hood h1"></div>
          <div class="tl-hood h2"></div>
          <div class="tl-hood h3"></div>
          <div class="tl-lamp stop"></div>
          <div class="tl-lamp caution"></div>
          <div class="tl-lamp go"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="tl">
        <div class="tl-spill"></div>
        <div class="tl-pole"></div>
        <div class="tl-housing">
          <div class="tl-hood h1"></div>
          <div class="tl-hood h2"></div>
          <div class="tl-hood h3"></div>
          <div class="tl-lamp stop"></div>
          <div class="tl-lamp caution"></div>
          <div class="tl-lamp go"></div>
        </div>
      </div>
    `,
  v3: `
      <div class="tli">
        <div class="tli-spill"></div>
        <div class="tli-pole"></div>
        <div class="tli-housing">
          <div class="tli-hood h1"></div>
          <div class="tli-hood h2"></div>
          <div class="tli-hood h3"></div>
          <div class="tli-lamp stop"></div>
          <div class="tli-lamp caution"></div>
          <div class="tli-lamp go"></div>
        </div>
      </div>
    `,
  v4: `
      <div class="tlc">
        <div class="tlc-halo hr"></div>
        <div class="tlc-halo hy"></div>
        <div class="tlc-halo hg"></div>
        <div class="tlc-spill"></div>
        <div class="tlc-pole"></div>
        <div class="tlc-housing">
          <div class="tlc-hood h1"></div>
          <div class="tlc-hood h2"></div>
          <div class="tlc-hood h3"></div>
          <div class="tlc-lamp red"></div>
          <div class="tlc-lamp yellow"></div>
          <div class="tlc-lamp green"></div>
        </div>
      </div>
    `,
  v5: `
      <div class="tlc">
        <div class="tlc-halo hr"></div>
        <div class="tlc-halo hy"></div>
        <div class="tlc-halo hg"></div>
        <div class="tlc-spill"></div>
        <div class="tlc-pole"></div>
        <div class="tlc-housing">
          <div class="tlc-hood h1"></div>
          <div class="tlc-hood h2"></div>
          <div class="tlc-hood h3"></div>
          <div class="tlc-lamp red"></div>
          <div class="tlc-lamp yellow"></div>
          <div class="tlc-lamp green"></div>
        </div>
      </div>
    `,
  v6: `
      <div class="tl-full">
        <div class="tl-full-halo hr"></div>
        <div class="tl-full-halo hy"></div>
        <div class="tl-full-halo hg"></div>
        <div class="tl-full-spill"></div>
        <div class="tl-full-pole"></div>
        <div class="tl-full-housing">
          <div class="tl-full-hood h1"></div>
          <div class="tl-full-hood h2"></div>
          <div class="tl-full-hood h3"></div>
          <div class="tl-full-lamp red"></div>
          <div class="tl-full-lamp yellow"></div>
          <div class="tl-full-lamp green"></div>
        </div>
      </div>
    `,
};

class ConceptTrafficLight extends HTMLElement {
  static get observedAttributes() {
    return ['version'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
    }
  }

  render() {
    const version = this.getAttribute('version') || 'v6';
    this.shadowRoot.innerHTML = `<style>${trafficLightStyles[version] || trafficLightStyles.v6}</style>${trafficLightMarkup[version] || trafficLightMarkup.v6}`;
  }
}

if (!customElements.get('concept-traffic-light')) {
  customElements.define('concept-traffic-light', ConceptTrafficLight);
}
