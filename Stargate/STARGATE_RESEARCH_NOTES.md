# Stargate Research Notes

## Overview
This document is for collecting research, references, and technical notes about Stargate mechanics, addressing systems, and visual design.

---

## Stargate Mechanics

### Address System
- **Chevrons**: 9 total on the gate, 7 used for standard dialing
- **Point of Origin**: The 7th symbol (unique to each gate)
- **8th Chevron**: Used for inter-galactic travel (requires more power)
- **9th Chevron**: Reserved for special connections (e.g., Destiny)

### Dialing Sequence
1. Inner ring rotates to align symbols
2. Each chevron locks with a mechanical "clunk"
3. After 7 chevrons lock, the event horizon forms (kawoosh effect)
4. Wormhole stabilizes for travel

---

## Visual Design References

### Gate Appearance
- **Outer Ring**: Stationary, contains chevrons
- **Inner Ring**: Rotates, contains 39 glyphs/symbols
- **Chevrons**: V-shaped markers that light up when locked
- **Event Horizon**: Rippling vertical pool of water-like energy

### Color Palette
- **Gate Material**: Dark metallic gray/bronze
- **Locked Chevrons**: Bright orange/red glow
- **Event Horizon**: Blue-white shimmering liquid
- **LCD/Monitor Version**: Phosphor green monochrome

---

## Technical Implementation Notes

### Current Features
- Responsive CSS variables for scalability
- Modular layer architecture (7 distinct layers)
- Ring rotation with alternating directions
- Sequential chevron locking animation
- Kawoosh effect with shimmer

### Planned Enhancements
- [ ] Add symbol glyphs to inner ring
- [ ] Improve chevron locking sound/visual
- [ ] Add unstable wormhole collapse sequence
- [ ] Implement 8th chevron variation
- [ ] Add dialing computer interface

---

## Research Resources

### Canon References
- SG-1 TV Series (original gate design)
- Stargate Atlantis (Pegasus gate variation)
- Stargate Universe (Ancient seed ship gate)

### Fan Resources
- (Add links here)

---

## Technical Research

### Physics (Canon)
- Wormholes create a one-way tunnel through space
- Maximum connection time: 38 minutes
- Incoming/outgoing wormholes cannot coexist on same gate

### Visual Effects
- Kawoosh: Initial energy burst when gate opens
- Event horizon: Maintains as stable liquid-like surface
- Deactivation: Wormhole collapses inward

---

## Paste Your Research Below

*(Use this space to add notes, links, or technical details)*



In the *Stargate SG-1*, *Stargate Atlantis*, and *Stargate Universe* television franchise, the "address" system is fundamental to how the gate functions. Here is the breakdown of how the chevrons work, their count, and the specific dialing requirements for different distances.

### Chevron Count and Layout

A standard Stargate has **9 chevrons** spaced equally around its outer ring. While all nine are physically present on the gate, not all of them are used for every "phone call."

### The Order of Lighting

When a Stargate is dialed (specifically the Milky Way version), the chevrons typically light up in a specific sequence:

1. **Chevrons 1 through 6:** These engage in a clockwise or alternating fashion (depending on the specific gate type and dialing method) to lock in the "coordinates" of the destination in 3D space.
2. **The Final Chevron:** This is always the **bottom-center chevron** (the 7th, 8th, or 9th depending on the distance). This chevron represents the **Point of Origin**.

---

### How Many Chevrons for Which Distance?

The number of chevrons used determines the "reach" of the wormhole:

| Chevrons | Destination | Context |
| --- | --- | --- |
| **7 Chevrons** | **Within the same Galaxy** | This is the standard "local" call. 6 chevrons define the destination coordinates, and the 7th is the Point of Origin. |
| **8 Chevrons** | **To another Galaxy** | The 8th chevron acts like an "area code" or a distance multiplier. This requires significantly more power (usually a ZPM). This was first used by O'Neill to reach the Asgard in Othala. |
| **9 Chevrons** | **To the *Destiny*** | This is a specific code rather than a coordinate-based address. It is used exclusively to dial the Ancient ship *Destiny*, regardless of its location in the universe. It requires a massive amount of power (typically drawing from a planet's core). |

---

### Interesting Lore Facts

* **The Point of Origin:** Every planet has a unique symbol that represents it. For Earth, it is the famous "At" symbol (a pyramid with a sun over it: 𑁍). To go anywhere, you must always end your sequence with your own planet's symbol to "complete the circuit."
* **The "Locking" Sound:** In the show, the iconic phrase is "Chevron [Number] encoded... Chevron [Number] locked!" This happens as the inner ring aligns the symbol with the corresponding chevron.
* **Atlantis (Pegasus) Gates:** These gates are digital and do not have a spinning inner ring like the Milky Way gates; instead, the symbols flash and move digitally until they "lock" into the chevrons.

To mathematically map the Stargate's dialing sequence using a 12-hour clock face, we first need to project the **9 physical chevrons** onto the **12 clock positions**.

On a Milky Way Stargate, the chevrons are spaced equally around the ring. If we place the top-most chevron at the **12 o'clock** position, the layout looks like this:

### The Mathematical Layout (Clock Mapping)

Since there are 9 chevrons and 12 hours, each chevron is spaced  hours apart (or  degrees).

| Chevron Number | Clock Position (Approx.) | Location Description |
| --- | --- | --- |
| **Chevron 1** | 1:20 | Upper Right |
| **Chevron 2** | 2:40 | Right |
| **Chevron 3** | 4:00 | Lower Right |
| **Chevron 4** | 5:20 | Bottom Right |
| **Chevron 5** | 6:40 | Bottom Left |
| **Chevron 6** | 8:00 | Lower Left |
| **Chevron 7** | 9:20 | Left |
| **Chevron 8** | 10:40 | Upper Left |
| **Chevron 9** | 12:00 | **Top Center** |

---

### The Dialing Order: The "Standard" 7-Chevron Sequence

In the show, the chevrons do not light up in a simple circle (1, 2, 3...). Instead, they follow a "criss-cross" pattern to balance the "locking" process. Mathematically, the sequence for a standard Earth-to-Abydos (7-chevron) dial follows this order based on the clock positions above:

1. **Chevron 1 (1:20)**: "Chevron 1 encoded!"
2. **Chevron 8 (10:40)**: "Chevron 2 locked!" (Moves to the opposite side)
3. **Chevron 2 (2:40)**: "Chevron 3 locked!"
4. **Chevron 7 (9:20)**: "Chevron 4 locked!"
5. **Chevron 3 (4:00)**: "Chevron 5 locked!"
6. **Chevron 6 (8:00)**: "Chevron 6 locked!"
7. **Chevron 9 (12:00)**: **The "Big One" at the Top.** This is the Point of Origin.

> **Note on the "Bottom" Chevron:** You mentioned in your previous prompt that the 7th chevron is at the bottom. In the *SG-1* show's visual effects, while the 7th lock is often called the "bottom" chevron, the **physical** chevron that performs the final "lock" (engaging the inner ring) is almost always the **top-center** (12 o'clock) chevron. The "bottom" chevrons (5:20 and 6:40) are usually used as part of the 8th and 9th chevron sequences.

### Distance Logic Equations

If we denote the number of chevrons as  and the destination distance as :

* **If :** . (6 spatial coordinates + 1 origin).
* **If :** . (6 spatial + 1 distance calculation + 1 origin).
* **If :** . The 9th chevron acts as a "Fixed Signature" rather than a coordinate, used for moving targets like the *Destiny*.

---

### Summary of the "Clock" Sequence

If you were to watch the gate dial a standard 7-symbol address, your eyes would follow this "Z" pattern:
**Top-Right**  **Top-Left**  **Mid-Right**  **Mid-Left**  **Bottom-Right**  **Bottom-Left**  **Final Lock (TOP)**.

Would you like to see the specific 8th and 9th chevron positions used for the Atlantis or Destiny addresses?

When we move beyond the standard 7-chevron "local" call, the Stargate engages the chevrons at the bottom of the ring that are usually idle.

Using our **12-hour clock face** analogy (where **Chevron 9** is at **12:00**), here is how the sequence expands for intergalactic travel and the *Destiny*.

---

### The 8-Chevron Sequence (Intergalactic)

Used for dialing the **Pegasus Galaxy (Atlantis)** or **Othala (Asgard)**. The 8th chevron acts as a "distance calculation" or area code.

**The Order of Activation:**

1. **Chevrons 1 through 6:** Dialed in the usual "criss-cross" pattern (**1:20, 10:40, 2:40, 9:20, 4:00, 8:00**).
2. **Chevron 7 (5:20 - Bottom Right):** This chevron, which is normally dormant, locks in to provide the extra power/calculation for the distance jump.
3. **Chevron 8 (12:00 - Top Center):** In this specific configuration, the **Top** chevron becomes the 8th lock (the Point of Origin) to complete the sequence.

> **Mathematically:** 

---

### The 9-Chevron Sequence (Destiny)

This is a unique "Master Code" used in *Stargate Universe*. It doesn't matter where in the universe you are; this specific combination always connects to the ship *Destiny*.

**The Order of Activation:**

1. **Chevrons 1 through 6:** Standard criss-cross coordinate sequence.
2. **Chevron 7 (5:20 - Bottom Right):** Locks in.
3. **Chevron 8 (6:40 - Bottom Left):** This is the only time this chevron is ever seen "locking" in the series. It completes the full power draw requirement.
4. **Chevron 9 (12:00 - Top Center):** The final lock. Even in a 9-digit code, the **Top Center** chevron always acts as the "Enter" key to engage the wormhole.

---

### Mathematical Sequence Summary

If we map the activation order to the clock positions, the sequences look like this:

| Call Type | Clock Sequence (Order of Lighting) |
| --- | --- |
| **7-Chevron (Local)** | 1:20  10:40  2:40  9:20  4:00  8:00  **12:00** |
| **8-Chevron (Galaxy)** | 1:20  10:40  2:40  9:20  4:00  8:00  **5:20**  **12:00** |
| **9-Chevron (Destiny)** | 1:20  10:40  2:40  9:20  4:00  8:00  **5:20**  **6:40**  **12:00** |

### Why the Top (12:00) is Always Last

Mathematically and engineering-wise, the Stargate is designed like a circular circuit. The 12 o'clock position (Chevron 9) is the **Master Breaker**. No matter how many variables you add (7, 8, or 9), the "handshake" to open the wormhole only occurs when the Top Chevron is engaged last.

**Fun Fact:** In the *Stargate Universe* pilot, they had to use a "Naquadria-core" planet just to get enough power to successfully lock that 8th and 9th chevron (the 5:20 and 6:40 positions), as the power requirements increase exponentially for each extra chevron.
