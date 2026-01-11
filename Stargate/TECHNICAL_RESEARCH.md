# Technical Research: Stargate Implementation

## 1. Rendering Approaches

We explored three distinct methods for rendering the Stargate animation, each with pros and cons.

### A. CSS Grid & DOM (The "State Machine" Approach)
*   **File**: `stargate_state_machine.html`, `stargate_lcd_retro.html`
*   **Method**: Uses standard HTML `<div>` elements for the ring, chevrons, and event horizon. CSS `transform: rotate()` handles the movement.
*   **Pros**: 
    *   Harnesses the browser's GPU acceleration.
    *   Easy to style responsively (media queries).
    *   Familiar accessibility paradigm.
*   **Cons**: 
    *   Can get DOM-heavy if dialed up to hundreds of chevrons.
    *   "True" pixel styling is harder; browsers try to anti-alias rotation.

### B. HTML5 Canvas (The "Bit-Bang" Approach)
*   **File**: `stargate_canvas_retro.html`
*   **Method**: Uses a JavaScript render loop (`requestAnimationFrame`) to draw pixels directly to a `<canvas>` element.
*   **Pros**:
    *   **Absolute Pixel Control**: We can force a 64x64 resolution and scale it up for a perfect "crisp" pixel look.
    *   Performant for complex particle effects (like the event horizon).
*   **Cons**:
    *   Black box to screen readers.
    *   Harder to tweak visually (must change JS math vs CSS colors).

### C. CSS Steps() Animation
*   **File**: `pixel_dialing_gallery.html` (Virtual Boy variant)
*   **Method**: Uses CSS animations but with `animation-timing-function: steps(8)`.
*   **Pros**:
    *   Gives that "choppy" low-frame-rate console feel without JavaScript overhead.
*   **Cons**:
    *   Limited control over complex logic (like locking chevrons at specific dynamic times).

## 2. Visual Effects Implementation

### Chromatic Aberration
To simulate the misalignment of electron guns in old CRT monitors:
```css
text-shadow: 2px 0 rgba(255,0,0,0.5), -2px 0 rgba(0,0,255,0.5);
```
This splits the Red and Blue channels slightly to the left and right.

### Scanlines
A repeating gradient overlay that ignores mouse clicks:
```css
.overlay::after {
    content: " ";
    background: repeating-linear-gradient(rgba(0,0,0,0) 0, rgba(0,0,0,0.3) 2px);
    pointer-events: none;
}
```

### The "Kawoosh" (Event Horizon Burst)
A CSS keyframe animation manipulating `scale` and `opacity`:
1.  **Explode**: Scale from 0 to 1.3 immediately (white flash).
2.  **Settle**: Scale back down to 1.0 (blue ripples).
3.  **Loop**: Gentle opacity pulse to simulate water-like instability.

## 3. Logical State Machine (Dialing Sequence)

For the functional prototypes, we encapsulated the dialing logic in an async JavaScript function:

1.  **State Reset**: Clear all locks, hide horizon.
2.  **Loop (1 to 7)**:
    *   Calculate random rotation target.
    *   Apply CSS transform.
    *   `await` animation completion time.
    *   Add `.locked` class to specific chevron.
3.  **Activate**: Show event horizon div.

This decoupling allows the visual layer (Canvas or DOM) to be swapped out while keeping the same logic.
