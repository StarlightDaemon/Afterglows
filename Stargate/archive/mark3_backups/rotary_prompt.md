# Prompt: Implement Stargate Mark III "Rotary UI" Control Panel

**Role:** Expert Frontend Engineer & UI Designer (Specializing in Retro-Futuristic/Sci-Fi Interfaces)

**Objective:**
Design and implement the **"Rotary UI" (Layout A2-2)** for the Stargate Mark III right-side control panel. This is a complete replacement for the current right-hand sidebar. The goal is a "Clean & Segmented" technical readout aesthetic with a signature **Digital Rotary Control** for mode selection.

## 1. Design & Aesthetic
- **Theme:** High-end military/scientific interface. Retro-futuristic (Alien/Prometheus style) meets 80s CRT.
- **Color Palette:**
  - Primary: `#00ff41` (Phosphor Green)
  - Dim: `#00aa33` (Inactive segments)
  - Background: Deep black `#000` or very dark terminal gray `#080808`.
- **Typography:** Monospace technical fonts (e.g., Courier New, Roboto Mono). All uppercase.
- **Visual Language:** Thin, sharp 1px borders. Segmented boxes for data isolation.

## 2. Layout Specification
The panel takes up the **right 40%** of the screen (60/40 gate/controls split).
**Vertical Split:**
- **Top 40%: Utility Area (Status & Settings)**
- **Bottom 60%: Input Area (Keyboard & Actions)**

### A. Utility Area (Top 40%)
Must be divided into distinct green-outlined segments (boxes):

1.  **Mode Select (Top Segment)**
    - **Component:** A **Digital Rotary Knob**.
    - **Visual:** A circular dial graphic (SVG or CSS radial) with a notch/indicator.
    - **Behavior:** The knob rotates to point at the selected mode.
    - **Labels:** Three distinct positions arranged in an arc or top-row:
        - `7 [INTRA]` (Left/CCW)
        - `8 [INTER]` (Center)
        - `9 [DESTINY]` (Right/CW)
    - **Interaction:** Clicking a label or the knob snaps the rotation to that setting.

2.  **Address Buffer (Middle Segment)**
    - **Layout:** 8 distinct square slots in a row.
    - **Logic:** Show "X" in slots 7/8 when in Mode 7. Slots unlock as mode increases.

3.  **Signal Analysis (Bottom Segment)**
    - **Visual:** A technical readout showing "Signal Strength".
    - **Components:** Bar graph and text data (e.g., "PEAK: 98.4%", "AVG: 05.2%").

### B. Input Area (Bottom 60%)
1.  **Glyph Keyboard**
    - **Layout:** A dense grid of 38 keys (e.g., 6 columns).
    - **Keys:** Square buttons, thin borders. Content is the Glyph Icon.

2.  **Action Zone (Footer)**
    - **Engage Button:** A large, prominent, full-width button at the very bottom.
    - **Abort/Reset:** Integrated discrete buttons.

## 3. Technical Implementation Plan
**Tech Stack:** Vanilla HTML5, CSS3 (Flexbox/Grid), JavaScript (ES6+).

1.  **CSS Animation Logic:**
    ```css
    .rotary-knob {
        transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
    }
    .mode-7 .rotary-knob { transform: rotate(-45deg); }
    .mode-8 .rotary-knob { transform: rotate(0deg); }
    .mode-9 .rotary-knob { transform: rotate(45deg); }
    ```

2.  **State Integration:**
    Trigger `gate.setMode()` and update visual state of buffer slots based on mode.


This implementation delivers the **Stargate Mark III "Rotary UI"** using a clean, modular approach. I've focused on the "Phosphor Green" CRT aesthetic with high-contrast segmentation and the requested digital rotary logic.

### 1. The HTML Structure

We use a semantic layout with a dedicated container for the `utility-area` and the `input-area`.

```html
<div id="stargate-control-panel" class="stargate-ui">
    <section class="utility-area">
        <div class="segment mode-select">
            <div class="label-arc">
                <span class="mode-label" onclick="setMode(7)">7 [INTRA]</span>
                <span class="mode-label" onclick="setMode(8)">8 [INTER]</span>
                <span class="mode-label" onclick="setMode(9)">9 [DESTINY]</span>
            </div>
            <div class="rotary-container">
                <div id="knob" class="rotary-knob mode-8">
                    <div class="knob-indicator"></div>
                </div>
            </div>
            <div class="segment-title">MODE SELECTION</div>
        </div>

        <div class="segment address-buffer">
            <div id="buffer-slots" class="buffer-grid">
                </div>
            <div class="segment-title">ADDRESS BUFFER</div>
        </div>

        <div class="segment signal-analysis">
            <div class="readout">
                <div class="signal-bar-container">
                    <div class="signal-bar" style="height: 98%;"></div>
                    <div class="signal-bar" style="height: 40%;"></div>
                    <div class="signal-bar" style="height: 75%;"></div>
                </div>
                <div class="stats">
                    <span>PEAK: 98.4%</span>
                    <span>AVG: 05.2%</span>
                </div>
            </div>
            <div class="segment-title">SIGNAL ANALYSIS</div>
        </div>
    </section>

    <section class="input-area">
        <div id="glyph-keyboard" class="glyph-grid">
            </div>
        
        <div class="action-zone">
            <div class="secondary-actions">
                <button class="btn-abort" onclick="resetBuffer()">ABORT</button>
                <button class="btn-reset" onclick="resetBuffer()">RESET</button>
            </div>
            <button class="btn-engage" onclick="engageGate()">ENGAGE</button>
        </div>
    </section>
</div>

```

### 2. The CSS (Phosphor Aesthetic)

This styling handles the "CRT glow" and the rotation logic for the knob.

```css
:root {
    --primary-green: #00ff41;
    --dim-green: #00aa33;
    --bg-black: #080808;
    --font-tech: 'Roboto Mono', 'Courier New', monospace;
}

.stargate-ui {
    width: 40vw;
    height: 100vh;
    background: var(--bg-black);
    color: var(--primary-green);
    font-family: var(--font-tech);
    border-left: 1px solid var(--primary-green);
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-sizing: border-box;
    text-transform: uppercase;
}

/* Segments */
.segment {
    border: 1px solid var(--dim-green);
    margin-bottom: 10px;
    padding: 15px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.segment-title {
    position: absolute;
    bottom: -8px;
    right: 10px;
    background: var(--bg-black);
    padding: 0 5px;
    font-size: 10px;
    color: var(--dim-green);
}

/* Rotary Knob */
.rotary-container {
    width: 80px;
    height: 80px;
    border: 2px solid var(--primary-green);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}

.rotary-knob {
    width: 60px;
    height: 60px;
    background: radial-gradient(circle, #111 0%, #000 100%);
    border: 1px solid var(--primary-green);
    border-radius: 50%;
    position: relative;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.knob-indicator {
    width: 4px;
    height: 15px;
    background: var(--primary-green);
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 8px var(--primary-green);
}

.mode-7 { transform: rotate(-45deg); }
.mode-8 { transform: rotate(0deg); }
.mode-9 { transform: rotate(45deg); }

/* Address Buffer */
.buffer-grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 5px;
    width: 100%;
}

.slot {
    aspect-ratio: 1/1;
    border: 1px solid var(--dim-green);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
}

.slot.locked { color: #330000; border-color: #330000; background: #110000; }

/* Keyboard */
.glyph-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 4px;
    flex-grow: 1;
    padding: 10px 0;
}

.glyph-key {
    background: transparent;
    border: 1px solid var(--dim-green);
    color: var(--primary-green);
    cursor: pointer;
    transition: all 0.1s;
}

.glyph-key:hover { background: rgba(0, 255, 65, 0.1); }
.glyph-key:active { background: var(--primary-green); color: black; }

/* Action Zone */
.btn-engage {
    width: 100%;
    height: 60px;
    background: transparent;
    border: 1px solid var(--primary-green);
    color: var(--primary-green);
    font-weight: bold;
    font-size: 1.5rem;
    cursor: pointer;
    margin-top: 10px;
    box-shadow: inset 0 0 10px rgba(0, 255, 65, 0.2);
}

```

### 3. Logic & State Management

This script handles the mode switching, slot locking, and buffer updates.

```javascript
let currentMode = 8;
const buffer = [];

function init() {
    renderBuffer();
    renderKeyboard();
    updateSignal();
}

function setMode(mode) {
    currentMode = mode;
    const knob = document.getElementById('knob');
    
    // Update visuals
    knob.className = `rotary-knob mode-${mode}`;
    
    // Update slots
    renderBuffer();
}

function renderBuffer() {
    const container = document.getElementById('buffer-slots');
    container.innerHTML = '';
    
    for (let i = 1; i <= 8; i++) {
        const slot = document.createElement('div');
        slot.className = 'slot';
        
        // Mode Logic: Slot 8 is locked in Mode 7. 
        if (currentMode === 7 && i >= 8) {
            slot.classList.add('locked');
            slot.innerText = 'X';
        } else if (currentMode === 8 && i > 8) {
            // Standard 8-chevron logic
        } else {
            slot.innerText = buffer[i-1] || '';
        }
        
        container.appendChild(slot);
    }
}

function renderKeyboard() {
    const kb = document.getElementById('glyph-keyboard');
    for (let i = 1; i <= 38; i++) {
        const key = document.createElement('button');
        key.className = 'glyph-key';
        key.innerText = `G${i}`; // Placeholder for Glyph Icons
        key.onclick = () => addToBuffer(`G${i}`);
        kb.appendChild(key);
    }
}

function addToBuffer(glyph) {
    const max = currentMode === 7 ? 7 : 8; // Destiny/Mode 9 could allow more
    if (buffer.length < max) {
        buffer.push(glyph);
        renderBuffer();
    }
}

function resetBuffer() {
    buffer.length = 0;
    renderBuffer();
}

function engageGate() {
    console.log(`Establishing wormhole in Mode ${currentMode}...`);
    document.querySelector('.btn-engage').style.background = 'var(--primary-green)';
    setTimeout(() => {
        document.querySelector('.btn-engage').style.background = 'transparent';
    }, 500);
}

// Simple signal flicker simulation
function updateSignal() {
    const bars = document.querySelectorAll('.signal-bar');
    bars.forEach(bar => {
        bar.style.height = Math.random() * 100 + '%';
    });
    setTimeout(updateSignal, 200);
}

init();

```

---

### Key Features of this Layout:

* **Mechanical Feedback:** The rotary knob uses a `cubic-bezier` transition to mimic the physics of a heavy industrial switch snapping into place.
* **Dynamic Constraint:** The `Address Buffer` automatically grays out and "X" marks slots 8 (and potentially 9) depending on the mode selection, preventing user error.
* **High-Density Input:** The 38-key grid is optimized for a 40% sidebar width, ensuring keys remain large enough for interaction while maintaining the technical readout look.

**Would you like me to refine the Glyph icons using an SVG sprite map or implement the "Destiny" (9-chevron) specific buffer animation?**


Engineering Specification and Design Analysis: Stargate Mark III "Rotary UI" Control Panel (Layout A2-2)1. Introduction and Operational ContextThe Stargate Command (SGC) dialing interface has undergone numerous iterations since the program's inception in the 1990s. From the initial "MacGyvered" dialing computer developed by Captain Carter and Dr. Langford—which bypassed the absence of a DHD (Dial Home Device) via brute-force signal injection—to the more refined digital interfaces used during the height of the Goa'uld conflict, the system has prioritized function over form.1 However, the increasing complexity of the gate network operations, now encompassing the eight-chevron intergalactic protocols of the Pegasus galaxy and the experimental nine-chevron extragalactic addresses required for the Destiny link, necessitates a fundamental redesign of the operator interface.1This document details the specifications for the Stargate Mark III "Rotary UI" (Layout A2-2). This new paradigm replaces the legacy linear input methods with a segmented, retro-futuristic control panel centered around a Digital Rotary Control. The design objective is to reduce operator cognitive load during high-stress combat dialing sequences while providing unambiguous state feedback regarding the gate's power consumption and connection range.The shift to Layout A2-2 is not merely aesthetic; it is a response to the specific ergonomic failures observed in previous purely digital systems. In the heat of battle—such as an off-world activation (OWA) or a foothold situation—touchscreens and flat buttons lack the tactile certainty required for rapid mode switching. By simulating the mechanical resistance and definitive "click" of a rotary switch, the Mark III interface restores a layer of physical confirmation that has been lost in modern UI trends, drawing inspiration from the industrial reliability of the USCSS Nostromo and the holographic precision of the Prometheus class vessels.4This report serves as the definitive implementation guide for the Engineering Corps. It covers the aesthetic theory, visual architecture, component-level engineering, and the JavaScript state management logic required to bring the Mark III online. The system is designed to run on the SGC's secure internal network, utilizing a lightweight, vanilla HTML5/CSS3/JS stack to ensure compatibility with the varying generations of hardware found in the control room.22. Theoretical Framework and Design Philosophy2.1 The "Functional Retro-Futurism" AestheticThe governing visual language for the Mark III is "Functional Retro-Futurism." This aesthetic posits that advanced technology, when pushed to its operational limits, inevitably returns to a utilitarian form. The interface rejects the "clean" white minimalism often associated with civilian consumer electronics (e.g., the "Apple" aesthetic) in favor of a "Clean & Segmented" military readout style. This looks back to the 1980s era of computing—the golden age of the CRT—while utilizing modern vector rendering to ensure infinite scalability.7The visual reference points are specific and deliberate. We draw heavily from the semiotic standards established by Ron Cobb for the Alien franchise, where interfaces were dominated by heavy type, stark contrasts, and enclosed data blocks.9 In the Nostromo self-destruct sequence, the interface required deliberate, almost laborious interaction steps to prevent accidental activation.11 Similarly, the Stargate dialing computer must prevent accidental intergalactic dialing (Mode 8), which could drain a Zero Point Module (ZPM) or overload the capacitors, by requiring a deliberate rotational action.1Furthermore, the design incorporates the "holographic wireframe" aesthetic seen in the Prometheus and The Expanse interfaces.4 These systems prioritize data density and transparency. However, unlike Prometheus, which utilized blue as a primary hue to signify scientific exploration, the SGC Mark III retains the "Phosphor Green" (#00ff41) heritage. This continuity is vital for maintaining the muscle memory and color-coding reflexes of current SGC personnel who have trained on green-screen terminals for decades.132.2 Chromatic Strategy and Phosphor PersistenceThe color palette is strictly regimented to maximize contrast in the low-light environment of the Embarkation Room. The core concept is "Phosphor Persistence"—the illusion that the interface is generated by an electron beam exciting a phosphor coating on a glass screen.Primary Active (#00ff41): This specific hex code approximates the wavelength of P1 phosphor used in vintage radar displays. It is used for active data, the "Engage" command, and the selected mode indicator. It represents "System Normal" and "Ready" states.Dim/Inactive (#00aa33): Used for the structural framework (borders), grid lines, and unlit segments of the address buffer. This creates a visual hierarchy where the structure recedes, allowing the data to float in the foreground.Background (#000000 / #080808): The background is not merely "black"; it is the "void." We utilize #080808 (a very dark gray) for the panel background to differentiate the UI surface from the physical bezel of the monitor, while strictly black backgrounds are reserved for the negative space within data graphs to maximize contrast.To simulate the physical properties of a CRT, the CSS implementation will utilize text-shadow and box-shadow properties to create "bloom." When a real electron beam hits a screen, the light scatters within the glass, creating a soft glow around the sharp pixel edge. Modern flat panels are too sharp; we must artificially reintroduce this softness to make the interface feel "alive".72.3 Typography: The Machine LanguageThe typography of the Mark III interface is non-negotiable. It must be monospaced. In a military/scientific context, proportional fonts (like Arial) introduce ambiguity in tabular data. When tracking signal drift percentages or coordinate integers, the digits must align vertically to allow for rapid scanning.15We selected Roboto Mono or Courier New (in uppercase) as the primary typefaces. These fonts possess the "typewriter" quality that suggests the text is being generated in real-time by a system, rather than pre-rendered by a graphic designer. They are also readily available and web-safe, ensuring no font loading delays (FOUT) could impede the interface startup during an emergency.15For the Stargate glyphs themselves, we do not rely on standard Unicode characters. We utilize a custom SVG-based icon set or a specialized web font (e.g., Stargate SG-1 Address Glyphs). This allows us to apply CSS effects—such as color changes, glowing shadows, and opacity transitions—directly to the glyphs as if they were text characters. This is a significant improvement over the static image sprites used in the Mark I and II interfaces.163. Structural Layout Architecture (CSS Grid)The Mark III panel layout (A2-2) is defined by a rigid 60/40 split. The panel occupies the right 40% of the screen, while the left 60% is reserved for the live gate diagnostics and the iris control viewport (not covered in this document). The structural integrity of the layout is maintained using CSS Grid Level 2, which allows for two-dimensional alignment that Flexbox cannot easily achieve.183.1 The Macro GridThe root container, .control-panel, establishes the coordinate system for the entire interface. It is fixed to the right side of the viewport to simulate a physical rack-mounted unit.CSS.control-panel {
    position: absolute;
    right: 0;
    top: 0;
    width: 40vw; /* Exact 40% width */
    height: 100vh; /* Full height */
    background-color: #080808;
    border-left: 2px solid #00ff41; /* Physical separation from Gate View */
    display: grid;
    grid-template-rows: 40% 60%; /* The Utility/Input Split */
    grid-template-areas:
        "utility"
        "input";
    font-family: 'Roboto Mono', monospace;
    color: #00ff41;
    box-sizing: border-box;
    overflow: hidden; /* Prevents scrollbars from breaking immersion */
    z-index: 100;
}
This grid definition ensures that no matter the screen resolution—from a laptop in a Puddle Jumper to the main wall screen in the SGC control room—the proportions remain mathematically constant. The use of vh and vw units makes the interface intrinsically responsive.203.2 The Utility Area Sub-GridThe top 40% of the panel, designated the Utility Area, contains the high-level system controls. It requires further subdivision into three segments: Mode Select, Address Buffer, and Signal Analysis. To achieve the "distinct green-outlined segments" requirement, we utilize a technique involving gap and background colors.Instead of defining borders on each element (which can lead to double-borders or misalignment), we set the background color of the grid container to the border color (#00ff41) and the gap size to 1px. The child elements are then given a black background. The result is perfect, razor-sharp 1px lines separating the content.8CSS.utility-area {
    grid-area: utility;
    display: grid;
    /* Rows: Mode (1fr), Buffer (0.8fr), Signal (1fr) */
    grid-template-rows: 1fr 0.8fr 1fr;
    gap: 1px; /* This gap reveals the green background */
    background-color: #00ff41; 
    border-bottom: 2px solid #00ff41;
}

.segment {
    background-color: #080808; /* Content background */
    position: relative;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
This architectural decision enforces the "Segmented Box" visual language. The operator perceives three distinct, hardware-isolated modules, reducing the risk of mode confusion. The buffer is physically walled off from the signal analysis, implying that they are independent subsystems.214. Component Analysis: The Digital Rotary ControlThe centerpiece of the Mark III design is the Digital Rotary Control. This component replaces the standard "Radio Button" group used in previous web-based simulations.4.1 Functional Requirements and Lore JustificationThe Stargate network operates on three distinct power tiers, which the UI must represent:Mode 7: Standard Intra-galactic travel within the Milky Way. This uses 7 chevrons (6 spatial coordinates + 1 point of origin). This is the default state for 99% of SGC operations.1Mode 8: Inter-galactic travel (e.g., to the Pegasus Galaxy/Atlantis or Othala/Asgard homeworld). This adds a designated "distance calculation" glyph as the 8th chevron. This mode increases power draw exponentially and often requires a ZPM or a portable Mk II Naquadah generator.1Mode 9: A theoretical and highly experimental mode requiring 9 chevrons. This connects to specific Ancient seed ships or the Destiny itself. It requires planetary-scale power (e.g., Icarus Base core tap) and is notoriously unstable.3The Rotary Control forces the operator to physically acknowledge these escalations. Unlike a click, a rotation implies "tuning" or "engaging" a heavier mechanism.4.2 Visual Engineering (SVG & CSS)The knob is constructed using Scalable Vector Graphics (SVG). This allows us to draw the concentric circles and tick marks with mathematical precision that CSS borders cannot achieve.SVG Geometry:The knob consists of:The Chassis: An outer static ring (the "bezel").The Rotor: An inner rotating group containing the indicator notch.The Indicator: A prominent line or triangle pointing to the selected mode.HTML<div class="segment mode-select" id="mode-segment">
    <div class="mode-labels">
        <span class="label mode-7" data-mode="7">7</span>
        <span class="label mode-8" data-mode="8">8</span>
        <span class="label mode-9" data-mode="9">9</span>
    </div>
    
    <div class="rotary-container">
        <svg class="rotary-knob" id="knob" viewBox="0 0 100 100">
            <defs>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            
            <circle cx="50" cy="50" r="45" stroke="#00aa33" stroke-width="1" fill="transparent" />
            
            <g class="knob-rotor">
                <circle cx="50" cy="50" r="40" fill="#080808" stroke="#00ff41" stroke-width="2" />
                <line x1="50" y1="50" x2="50" y2="15" stroke="#00ff41" stroke-width="4" stroke-linecap="round" filter="url(#glow)" />
                <line x1="20" y1="50" x2="25" y2="50" stroke="#00aa33" stroke-width="2" transform="rotate(45 50 50)" />
                <line x1="80" y1="50" x2="75" y2="50" stroke="#00aa33" stroke-width="2" transform="rotate(45 50 50)" />
            </g>
        </svg>
    </div>
</div>
4.3 Animation PhysicsThe rotation is animated using CSS Transitions. The critical requirement is the easing function. A linear transition feels robotic and weightless. A standard ease-in-out is too smooth. We require a "mechanical snap."We utilize a custom cubic-bezier curve: cubic-bezier(0.4, 0.0, 0.2, 1).0.4, 0.0: The start of the movement is somewhat resistant (overcoming static friction).0.2, 1: The end of the movement snaps quickly into place.For an even more tactile feel, we can introduce "overshoot"—where the knob rotates slightly past the target and bounces back, simulating the momentum of a heavy physical dial. The bezier for this would be cubic-bezier(0.34, 1.56, 0.64, 1).CSS.knob-rotor {
    transform-origin: 50px 50px; /* Center of SVG */
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* State-Based Rotations */
[data-mode="7"].knob-rotor { transform: rotate(-45deg); }
[data-mode="8"].knob-rotor { transform: rotate(0deg); }
[data-mode="9"].knob-rotor { transform: rotate(45deg); }
The rotation angles (-45°, 0°, +45°) are chosen to align with the ergonomic sweep of a human hand turning a wrist, mapping logically to "Left (Low)", "Center (Medium)", "Right (High)".255. Component Analysis: The Adaptive Address BufferThe Address Buffer is the visual memory of the dialing computer. It sits directly below the mode selector, reinforcing the cause-and-effect relationship: "You selected Mode 7, therefore you have 7 slots."5.1 Dynamic Slot LogicThe layout requires 8 visual slots in a row. However, the logic is complex due to the varying address lengths.Mode 7 (Intra): User needs 7 glyphs. Slots 1-6 are destination, Slot 7 is Point of Origin. Slots 8 (and implicit 9) must be locked.Mode 8 (Inter): User needs 8 glyphs. Slots 1-6 destination, Slot 7 is distance calculation, Slot 8 is Point of Origin.Mode 9 (Destiny): User needs 9 glyphs. This breaks the 8-slot visual row.Solution: The "8 distinct square slots" requirement in the prompt suggests a fixed physical display (like an LED bank). For Mode 9, we can either:Resize the slots to fit 9 (breaking the "fixed" aesthetic).Use a scrolling buffer (undesirable for quick reading).The Overdrive Solution: We implement the 9th slot as a "pop-out" or "overdrive" indicator that only appears or lights up when Mode 9 is engaged, possibly utilizing the space typically reserved for the "Buffer Status" text.For the purpose of this specification, we will adhere to the "8 distinct slots" for the main row, and handle the 9th chevron as a special "Core" indicator that overrides the Point of Origin slot or appears adjacent. However, to strictly follow the prompt's layout of "8 slots," we will assume the 9th slot is a virtual overlay or handled by the "Signal Analysis" panel in extreme cases. Correction: The prompt asks for 8 slots. We will stick to 8 physical slots. If Mode 9 is selected, we might repurpose the UI or compress the margins. A better approach for a rigid UI is that the 9th chevron is the "Engage" button itself, or the 8 slots re-render as 9 narrower slots via CSS Grid.Let's implement the Re-rendering Grid strategy.5.2 Implementation DetailsWe use a Flexbox container for the slots. This allows the slots to expand/contract based on available space, or we can use CSS Grid to force exact sizing.HTML<div class="segment address-buffer" id="buffer-segment">
    <div class="buffer-label">
        <span class="label-text">ADDRESS BUFFER</span>
        <span class="buffer-status" id="buffer-status">READY</span>
    </div>
    <div class="slots-container" id="slots-container">
        <div class="slot empty"></div>
        <div class="slot empty"></div>
        <div class="slot locked">✕</div>
    </div>
</div>
CSS.slots-container {
    display: grid;
    /* Default to 8 columns */
    grid-template-columns: repeat(8, 1fr); 
    gap: 4px;
    width: 100%;
    height: 50px;
    margin-top: 5px;
}

/* Modifier for Mode 9 density */
.slots-container.mode-9 {
    grid-template-columns: repeat(9, 1fr);
}

.slot {
    border: 1px solid #00aa33;
    background: rgba(0, 255, 65, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: #00ff41;
    text-shadow: 0 0 5px #00ff41;
    transition: all 0.2s ease;
}

.slot.locked {
    background: repeating-linear-gradient(
        45deg,
        #080808,
        #080808 5px,
        #111 5px,
        #111 10px
    );
    border-color: #333;
    color: #333;
    text-shadow: none;
    cursor: not-allowed;
}

.slot.active-glyph {
    background: rgba(0, 255, 65, 0.3);
    border-color: #00ff41;
    box-shadow: inset 0 0 10px rgba(0, 255, 65, 0.2);
}
The "Locked" state uses a repeating-linear-gradient to create a "hazard stripe" pattern. This is a common industrial UI pattern indicating that an area is safe but inaccessible. It visually differentiates a "Locked" slot from an "Empty" slot.86. Component Analysis: Signal Analysis ModuleThe Signal Analysis module serves a critical role in the dialing sequence: verifying that a stable wormhole can be established. In the Stargate universe, "stellar drift" causes gate addresses to shift over millennia. The dialing computer must calculate the new coordinates. This module visualizes that calculation.16.1 Visualization StrategyWe avoid heavy charting libraries (like Chart.js) to keep the "retro" feel and maintain high performance. Instead, we build a CSS-only Bar Graph. This mimics the LED bar graphs found on 1980s stereo equipment and military hardware.HTML Structure:HTML<div class="segment signal-analysis">
    <div class="readout-header">
        <span>SUBSPACE TELEMETRY</span>
        <span class="blink-indicator">SCANNING...</span>
    </div>
    <div class="equalizer-graph">
        <div class="bar" style="--h: 40%; --d: 0.1s"></div>
        <div class="bar" style="--h: 70%; --d: 0.3s"></div>
        <div class="bar" style="--h: 20%; --d: 0.5s"></div>
        <div class="bar" style="--h: 85%; --d: 0.2s"></div>
        </div>
    <div class="numeric-data">
        <div class="data-point">
            <span class="label">DRIFT:</span>
            <span class="value" id="val-drift">0.04%</span>
        </div>
        <div class="data-point">
            <span class="label">PEAK:</span>
            <span class="value" id="val-peak">98.2%</span>
        </div>
        <div class="data-point">
            <span class="label">AVG:</span>
            <span class="value" id="val-avg">05.2%</span>
        </div>
    </div>
</div>
6.2 CSS Animation LogicThe bars animate using keyframes that adjust their height. By using CSS Variables (--h for base height and --d for delay), we can create a complex, pseudo-random wave pattern with a single keyframe definition.CSS.equalizer-graph {
    display: flex;
    align-items: flex-end; /* Bars grow from bottom */
    gap: 2px;
    height: 60px;
    width: 100%;
    padding: 5px 0;
    border-bottom: 1px solid #00aa33;
}

.bar {
    flex: 1;
    background-color: #00ff41;
    opacity: 0.7;
    animation: signal-pulse 1.2s infinite alternate ease-in-out;
    animation-delay: var(--d);
    height: var(--h);
}

@keyframes signal-pulse {
    0% { height: 10%; opacity: 0.4; }
    50% { height: var(--h); opacity: 0.8; }
    100% { height: 100%; opacity: 1; box-shadow: 0 0 8px #00ff41; }
}
This implementation creates a "living" display that reacts to the CSS variable changes. If the signal is lost, JavaScript can simply swap the class on the container to .critical-failure, which changes the --primary-color variable to Red, instantly updating the entire graph without complex canvas redraws.267. Component Analysis: The Glyph Input MatrixThe bottom 60% of the screen is the Input Area. This contains the keyboard used to enter the address.7.1 The 38-Key Grid ChallengeThe Milky Way Stargate has 39 glyphs. 38 are constellations, and 1 is the Point of Origin (unique to each gate). The prompt asks for a "Glyph Keyboard" with 38 keys. This implies the Point of Origin (PoO) is handled automatically or via the "Engage" button (the "Big Red Button" on a DHD typically acts as the activator, but the PoO must be entered as the final symbol in the sequence).1Design Decision: We will implement a 38-key grid for the constellation inputs. The Point of Origin (e.g., the Earth "At" symbol) will be automatically appended by the GateControl logic when the user hits "Engage," or it can be the 39th hidden key. For the layout, a 38-key grid is mathematically awkward.6 columns x 6 rows = 36 keys (Too few)6 columns x 7 rows = 42 keys (4 empty)We will use a 6-column grid. The final row will have 2 keys plus empty space, or we can center the last row.7.2 Grid ImplementationWe use display: grid with repeat(6, 1fr) to create perfectly responsive square keys.CSS.input-area {
    grid-area: input;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    background-color: #080808;
}

.glyph-keyboard {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 8px;
    overflow-y: auto; /* Scroll if height is constrained */
    padding-bottom: 10px;
    /* Custom scrollbar styling for Webkit */
    scrollbar-width: thin;
    scrollbar-color: #00ff41 #080808;
}

.glyph-key {
    aspect-ratio: 1; /* Force square shape */
    border: 1px solid #00aa33;
    background: rgba(0, 20, 0, 0.5);
    color: #00ff41;
    font-family: 'Stargate Glyphs', sans-serif;
    font-size: 1.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.1s ease;
    user-select: none;
}

/* Interaction States */
.glyph-key:hover {
    background: rgba(0, 255, 65, 0.2);
    box-shadow: 0 0 10px #00ff41;
    transform: scale(1.05);
    z-index: 2;
}

.glyph-key:active {
    transform: scale(0.95);
    background: #00ff41;
    color: #000;
}

.glyph-key.selected {
    background: #00ff41;
    color: #000;
    box-shadow: 0 0 15px #00ff41;
}
7.3 The "Action Zone" FooterAt the bottom of the Input Area lies the "Action Zone." This area must be distinct and prevent accidental clicks.ENGAGE (Big Button): This is the "Enter" key. It spans the full width or large center.ABORT: A discrete button, colored red (or orange to stay within palette but indicate caution), placed to the side or top of the engage button.HTML<div class="action-zone">
    <button class="btn-action abort" onclick="gate.abort()">
        <span>// ABORT</span>
    </button>
    <button class="btn-action engage" onclick="gate.engage()">
        <span>ENGAGE SEQUENCE</span>
    </button>
</div>
The buttons use the ::before pseudo-element to create a "scanline sweep" effect on hover, reinforcing the CRT aesthetic.8. Technical Implementation Plan and State ManagementThe core requirement is to use Vanilla HTML5, CSS3, and JavaScript. This decision aligns with the SGC's need for stability and security. Frameworks like React or Vue introduce build steps and dependencies that might not be compatible with the legacy mainframes interfacing with the gate's superconducting control crystals.28.1 The GateControl Class (The "Brain")We implement a dedicated class to manage the state of the interface. This separates the logic from the DOM manipulation.JavaScriptclass GateControl {
    constructor() {
        // The Single Source of Truth
        this.state = {
            mode: 7,            // 7 (Intra), 8 (Inter), 9 (Destiny)
            buffer:,         // Array of selected glyph IDs
            isDialing: false,   // Lock input during dialing
            isConnected: false, // Wormhole active
            powerLevel: 100,    // Simulated power
        };
        
        this.MAX_SLOTS = { 7: 7, 8: 8, 9: 9 };
        this.subscribers =; // Pub/Sub array
    }

    // --- Actions ---

    setMode(newMode) {
        if (this.state.isDialing |

| this.state.isConnected) return; // Safety Lock
        
        const modeInt = parseInt(newMode);
        this.state.mode = modeInt;
        
        // Truncate buffer if switching to a lower mode
        const limit = this.MAX_SLOTS[modeInt];
        if (this.state.buffer.length > limit) {
            this.state.buffer = this.state.buffer.slice(0, limit);
        }
        
        this.notify();
    }

    addGlyph(glyphId) {
        if (this.state.isDialing |

| this.state.isConnected) return;
        
        const limit = this.MAX_SLOTS[this.state.mode];
        
        // Check for duplicates (unless valid in specific protocols)
        if (this.state.buffer.includes(glyphId)) {
            this.triggerError("DUPLICATE GLYPH");
            return;
        }

        if (this.state.buffer.length < limit) {
            this.state.buffer.push(glyphId);
            this.notify();
            this.playSound('chevron_encode');
        } else {
            this.triggerError("BUFFER FULL");
        }
    }

    engage() {
        const required = this.MAX_SLOTS[this.state.mode];
        if (this.state.buffer.length === required) {
            this.state.isDialing = true;
            this.notify();
            this.runDialingSequence();
        } else {
            this.triggerError("INCOMPLETE ADDRESS");
        }
    }

    // --- System Internals ---

    subscribe(callback) {
        this.subscribers.push(callback);
    }

    notify() {
        this.subscribers.forEach(cb => cb(this.state));
    }

    triggerError(msg) {
        console.warn(`: ${msg}`);
        // Dispatch custom event for UI shake/flash
        document.dispatchEvent(new CustomEvent('gate-error', { detail: msg }));
    }
}
8.2 Wiring the UI to the StateThe connection is bidirectional. User actions update the state; state changes update the UI.1. Rotary Interaction Logic:We must map the click on the label and the visual rotation to the setMode method.JavaScript// Initialize System
const gate = new GateControl();

// Rotary Label Clicks
document.querySelectorAll('.label').forEach(label => {
    label.addEventListener('click', (e) => {
        const mode = e.target.getAttribute('data-mode');
        gate.setMode(mode);
    });
});

// Knob Click (Simple toggle for now, could be drag)
document.querySelector('.rotary-knob').addEventListener('click', () => {
    // Cycle modes 7 -> 8 -> 9 -> 7
    let nextMode = gate.state.mode + 1;
    if (nextMode > 9) nextMode = 7;
    gate.setMode(nextMode);
});
2. Reactive UI Updates (The Subscriber):This function runs every time the state changes, ensuring the UI is always in sync.JavaScriptgate.subscribe(state => {
    // 1. Update Knob Rotation
    const knob = document.querySelector('.segment.mode-select');
    knob.setAttribute('data-mode', state.mode); // CSS handles the rotation via attribute selector

    // 2. Update Labels
    document.querySelectorAll('.label').forEach(l => {
        const isActive = parseInt(l.getAttribute('data-mode')) === state.mode;
        l.classList.toggle('active', isActive);
    });

    // 3. Update Buffer Slots
    updateBufferVisuals(state);
});

function updateBufferVisuals(state) {
    const container = document.getElementById('slots-container');
    const totalSlots = state.mode; // 7, 8, or 9
    
    // Clear and rebuild (or diff) slots
    container.innerHTML = '';
    
    // Set grid columns dynamic CSS
    container.style.gridTemplateColumns = `repeat(${totalSlots}, 1fr)`;

    for (let i = 0; i < totalSlots; i++) {
        const slot = document.createElement('div');
        slot.className = 'slot';
        
        if (state.buffer[i]) {
            slot.classList.add('active-glyph');
            slot.innerText = state.buffer[i]; // Insert Icon character here
        } else {
            slot.classList.add('empty');
        }
        
        container.appendChild(slot);
    }
    
    // If Mode 7, we might want to show the 8th slot as "Locked" for visual continuity
    // Logic can be adjusted based on strict "8 distinct slots" requirement vs dynamic resizing.
}
9. Integration of Research and Lore Implications9.1 The "Destiny" AnomalyThe inclusion of Mode 9 in the requirements draws directly from the events of Stargate Universe. The dialing of the 9-chevron address requires exponentially more power than standard operations. In the UI, this is represented by the "Signal Analysis" bars turning from Green to Orange/Red when Mode 9 is selected, indicating the strain on the capacitors.3 This subtle visual cue alerts the operator that they are entering a dangerous operational threshold.9.2 The "Nostromo" LegacyThe requirement for "thin, sharp 1px borders" and "segmented boxes" is a direct homage to the Alien (Nostromo) interface patterns analyzed in the research.5 By boxing every data point, we reduce the "bleed" of information. In a chaotic situation, the eye knows exactly where the "Signal Strength" box ends and the "Buffer" begins. This is superior to modern "whitespace" separation in high-stress/low-light environments.9.3 CSS CRT OverlayTo finalize the aesthetic, a global overlay is applied. This is not just a texture; it uses CSS gradients to simulate the RGB sub-pixels of a CRT monitor.CSS.control-panel::after {
    content: " ";
    display: block;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), 
                linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    z-index: 999;
    background-size: 100% 2px, 3px 100%; /* Scanlines and Phosphor Grid */
    pointer-events: none; /* Allows clicks to pass through */
}
This overlay serves a dual purpose: aesthetic cohesion and brightness regulation. It darkens the blacks (improving contrast) and unifies the distinct HTML elements (SVG, Divs, Buttons) under a single "screen" texture.2810. ConclusionThe Stargate Mark III "Rotary UI" represents the culmination of thirty years of Earth's gate operations experience. It synthesizes the mechanical reliability of the past with the digital flexibility of the future. By implementing the Digital Rotary Control, we provide operators with unambiguous state control. By utilizing a CSS Grid-based segmented layout, we ensure data legibility under combat conditions. The Vanilla JS implementation ensures the system is lightweight, robust, and free of the vulnerabilities associated with complex external frameworks.This specification provides the SGC engineering team with a complete roadmap for deployment. The resulting interface will be familiar to veterans of the program while offering the advanced capabilities required for the next generation of intergalactic exploration.End of Report