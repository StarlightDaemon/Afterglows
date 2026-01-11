# Stargate Dialing Computer

A modular, canon-accurate Stargate dialing terminal built with vanilla HTML/CSS/JS.

## 🚀 Live Demo

**[View Main Demo →](index.html)**

## Features

- **Canon-Accurate Chevron Positions** - 9 chevrons mapped to clock positions per SG-1 lore
- **Criss-Cross Dialing Pattern** - The authentic "Z-pattern" sequence (1→8→2→7→3→6→9)
- **3 Dial Modes:**
  - **7-CHV**: Intra-galactic (same galaxy)
  - **8-CHV**: Inter-galactic (Pegasus/Asgard)
  - **9-CHV**: Destiny Protocol
- **Top Chevron Always Last** - The "Master Breaker" at 12:00 locks last
- **Abort Functionality** - Cancel mid-dial
- **Fully Responsive** - Scales with CSS variables

## Architecture

The terminal is built with a modular layer system:

1. **Layer 0**: Page Foundation
2. **Layer 1**: Terminal Container (border frame + scanlines)
3. **Layer 2**: UI Header (mode selector, status)
4. **Layer 3**: LCD Screen Area
5. **Layer 4**: Stargate Container
6. **Layer 5**: Gate Rings (outer + inner)
7. **Layer 6**: Chevrons (9 positions with counter-rotation)
8. **Layer 7**: Event Horizon (kawoosh + shimmer)
9. **Layer 8**: Status Display Panel
10. **Layer 9**: Footer Controls

## Files

| File | Description |
|------|-------------|
| `index.html` | **Main Demo** - Mark II Dialing Computer |
| `mark3/` | **🚧 Mark III** - State-Driven Simulator (in development) |
| `afterglow_lcd_retro_v1.html` | Legacy Mark I version (archived) |
| `STARGATE_RESEARCH_NOTES.md` | Canon research & technical notes |
| `G3P_STARGATE_RESEARCH.md` | Gemini 3 Pro research for Mark III |
| `G3P_DEEP_RESEARCH_STARGATE.md` | Deep research analysis |

## Afterglows (Legacy Versions)

### afterglow_lcd_retro_v1.html
The original LCD retro terminal. Simple dialing animation with phosphor green aesthetic. Preserved for reference.

## Research

See [STARGATE_RESEARCH_NOTES.md](STARGATE_RESEARCH_NOTES.md) for detailed canon information about:
- Chevron count and clock mapping
- Dialing sequences for 7/8/9 chevron addresses
- The "Z-pattern" criss-cross lighting order
- Destiny protocol specifics

## Usage

```bash
# From project root
npx http-server . -p 3000 -c-1 --cors

# Then visit
http://127.0.0.1:3000/Stargate/
```

## Customization

All sizing is controlled via CSS variables in `:root`:

```css
:root {
    --stargate-size: min(550px, 75vw);  /* Adjust gate size */
    --lcd-green: #00ff41;                /* Primary color */
    --chevron-locked: #ff6600;           /* Locked chevron color */
    --wormhole-blue: #4488ff;            /* Event horizon color */
}
```
