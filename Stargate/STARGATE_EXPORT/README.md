# Stargate Terminal Widget - Standalone Export

This folder contains a complete, standalone version of the Stargate Terminal dialing animation that was removed from the main portfolio site during v2.0.0 cleanup.

## 📦 Contents

- **stargate.html** - Full-page Stargate terminal interface
- **stargate.css** - Complete standalone styling (extracted from main styles.css)
- **stargate.js** - Dialing animation logic (extracted from main script.js)
- **README.md** - This file

## 🚀 Usage

### Standalone Deployment

This is now a **fully self-contained** widget. To use it independently:

1. Copy this entire folder to your desired location
2. Update `stargate.html` to use local CSS/JS:
   ```html
   <link rel="stylesheet" href="stargate.css">
   <script src="stargate.js"></script>
   ```
3. Open `stargate.html` in a browser

### Integration into Another Project

```html
<!-- In your HTML head -->
<link rel="stylesheet" href="path/to/stargate.css">

<!-- In your HTML body -->
<div class="sg-terminal full-mode">
    <div class="sg-header">
        <span>STARGATE COMMAND</span>
        <span id="sgStatus">IDLE - AWAITING INPUT</span>
    </div>

    <div class="sg-display">
        <div class="stargate">
            <div class="ring outer-ring">
                <div class="chevron c1" id="c1"></div>
                <div class="chevron c2" id="c2"></div>
                <div class="chevron c3" id="c3"></div>
                <div class="chevron c4" id="c4"></div>
                <div class="chevron c5" id="c5"></div>
                <div class="chevron c6" id="c6"></div>
                <div class="chevron c7" id="c7"></div>
            </div>
            <div class="ring inner-ring" id="innerRing"></div>
            <div class="event-horizon" id="horizon"></div>
        </div>
    </div>

    <div class="sg-footer" onclick="dialSequence()">[ INITIATE OFF-WORLD ACTIVATION ]</div>
</div>

<!-- Before closing body tag -->
<script src="path/to/stargate.js"></script>
```

## 🎨 Features

- **Animated Ring Rotation**: Inner ring spins during dialing sequence
- **7 Chevron Lock**: Each chevron lights up sequentially
- **Kawoosh Effect**: Wormhole activation animation
- **Retro LCD Aesthetic**: Classic green terminal styling
- **Auto-Loop Mode**: Continuous dialing when in mini-mode

## 🔧 Customization

### CSS Variables
```css
:root {
    --lcd-green: #00ff41;  /* Main terminal color */
    --lcd-off: #003311;    /* Inactive state */
    --bg-dark: #0a0a0a;    /* Background dark */
}
```

### Size Variants

**Full Mode** (800x600px):
```html
<div class="sg-terminal full-mode">
```

**Mini Mode** (auto-loops):
```html
<div class="sg-terminal mini-mode">
```

## 📝 Original Context

This widget was originally part of the StarlightDaemon portfolio site header as an interactive terminal widget. It was removed during code cleanup (Issue #3 - Code Audit) to reduce bloat on the main site, but preserved here for future use or as a standalone demo.

## 🏷️ Version History

- **v2.0.0** (2026-01-10): Extracted as standalone module
- **v1.0.0** (2025-12-23): Original implementation in portfolio

## 📄 License

Same as parent project. Free to use and modify.

---

**Tip:** This makes a great loading screen or Easter egg for sci-fi themed projects! 🚀
