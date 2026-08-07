// v1 below is the archived original; v2 closes the signal's dead gap (the
// stop phase ended at 92%, leaving 0.64s of all-three-dark before green)
// and re-centers the housing and hoods on the pole (both sat 2px off).
// v3 tightens the presentation: a compact housing with refit hoods and
// lamps, the pole planted to the tile's base, and the ground spill
// tracking the active lamp. Same 8s cycle and monochrome luminance
// semantics.
// v4 breaks the gallery's monochrome per operator request: the lamps run
// standard US colors - red, yellow, green - each with a colored halo
// flare and ground spill, while the housing keeps the gallery's green
// chrome so the tile still belongs. Unlit lenses stay faintly tinted,
// the way real dark lenses hold their color. Same 8s cycle.
// v5 slows the cycle to 12s and re-proportions it per operator request:
// green holds longest (50%), red takes the middle share (37.5%), and
// yellow stays a brief intermediate (12.5%). Visuals carried from v4.
const trafficLightStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* One 8s signal cycle with real proportions: a long go, a short
     caution, a long stop. Each lamp throws its own halo, and the
     housing carries a hood over every lens. */
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

  /* Lens hoods. */
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

  /* Phosphor palette: stop is drawn dim and hollow, caution mid,
     go bright - read by luminance, like a monochrome monitor would. */
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

  /* Light spill on the ground, synced to the go phase. */
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

  /* One 8s signal cycle with real proportions: a long go, a short
     caution, a long stop that hands straight back to go. */
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

  /* Lens hoods, centered over their lamps. */
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

  /* Phosphor palette: stop is drawn dim and hollow, caution mid,
     go bright - read by luminance, like a monochrome monitor would. */
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

  /* Stop holds to the wrap so red hands directly to green - no
     all-dark gap at the end of the cycle. */
  @keyframes tl-stop {
    0%, 42% { background: rgba(0, 204, 0, 0.18); box-shadow: none; }
    54%, 100% {
      background: radial-gradient(circle at 38% 32%, #eaffe6, #57b657 55%, #1d5b2a);
      box-shadow: 0 0 10px rgba(80, 180, 90, 0.8), inset 0 0 5px rgba(230, 255, 230, 0.6);
    }
  }

  /* Light spill on the ground, tracking the active lamp. */
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

  /* The signal tightened up: a compact housing with refit hoods and
     lamps on one 8s cycle - a long go, a short caution, a long stop
     handing straight back to go. Lamps keep the monochrome luminance
     semantics: stop dim and hollow, caution mid, go bright. */
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

  /* Lens hoods, centered over their lamps. */
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

  /* Light spill on the ground, tracking the active lamp. */
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

  /* The signal alone, in true color: red, yellow, green on the
     standard US cycle - the one splash of color in a monochrome
     gallery. Each lamp throws a colored halo flare and tints the
     ground spill; unlit lenses stay faintly tinted the way real
     dark lenses hold their color. The housing keeps the gallery's
     green chrome so the tile still belongs. 8s cycle: a long go,
     a short caution, a long stop handing straight back to go. */
  .tlc {
    width: 104px;
    height: 100px;
    position: relative;
  }

  /* Halo flares, one per lamp, behind the housing. */
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

  /* Lens hoods, centered over their lamps. */
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

  /* Standard US colors, top to bottom: red, yellow, green. */
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

  /* Red holds to the wrap so it hands directly to green. */
  @keyframes tlc-red {
    0%, 42% { background: rgba(255, 65, 54, 0.13); box-shadow: none; }
    54%, 100% {
      background: radial-gradient(circle at 38% 32%, #ffe9e6, #ff4136 62%);
      box-shadow: 0 0 16px rgba(255, 65, 54, 0.95), 0 0 32px rgba(255, 65, 54, 0.45);
    }
  }

  /* Ground spill tinted by whichever lamp is lit. */
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

  /* v4's colored signal on a slower, re-proportioned 12s cycle: green
     holds longest (50%, 6s), red takes the middle share (37.5%, 4.5s),
     and yellow stays a brief intermediate (12.5%, 1.5s), handing red
     straight back to green at the wrap. */
  .tlc {
    width: 104px;
    height: 100px;
    position: relative;
  }

  /* Halo flares, one per lamp, behind the housing. */
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

  /* Lens hoods, centered over their lamps. */
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

  /* Standard US colors, top to bottom: red, yellow, green. */
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

  /* Red holds to the wrap so it hands directly to green. */
  @keyframes tlc-red {
    0%, 50% { background: rgba(255, 65, 54, 0.13); box-shadow: none; }
    62.5%, 100% {
      background: radial-gradient(circle at 38% 32%, #ffe9e6, #ff4136 62%);
      box-shadow: 0 0 16px rgba(255, 65, 54, 0.95), 0 0 32px rgba(255, 65, 54, 0.45);
    }
  }

  /* Ground spill tinted by whichever lamp is lit. */
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
};

class ConceptTrafficLight extends HTMLElement {
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
    const version = this.getAttribute('version') || 'v5';
    this.shadowRoot.innerHTML = `<style>${trafficLightStyles[version] || trafficLightStyles.v5}</style>${trafficLightMarkup[version] || trafficLightMarkup.v5}`;
  }
}

if (!customElements.get('concept-traffic-light')) {
  customElements.define('concept-traffic-light', ConceptTrafficLight);
}
