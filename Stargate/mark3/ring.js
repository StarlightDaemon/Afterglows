/**
 * STARGATE MARK III - Ring Physics Controller
 * requestAnimationFrame-based physics simulation
 */

class RingController {
    constructor(ringElement) {
        this.ring = ringElement;

        // Physics state
        this.angle = 0;
        this.targetAngle = 0;
        this.velocity = 0;
        this.acceleration = 0;

        // Physics constants
        this.maxVelocity = 180;      // degrees per second
        this.accelerationRate = 300; // degrees per second^2
        this.friction = 0.95;        // velocity multiplier per frame
        this.lockThreshold = 0.5;    // degrees from target to start locking

        // Overshoot mechanics
        this.isOvershooting = false;
        this.overshootTime = 0;
        this.overshootAmplitude = 0.8;  // degrees
        this.overshootDecay = 5;        // decay rate

        // State
        this.isSpinning = false;
        this.onArrival = null;

        // Animation
        this.lastTime = 0;
        this.animationId = null;

        // Glyph config
        this.totalGlyphs = 39;
        this.degreesPerGlyph = 360 / this.totalGlyphs;
    }

    /**
     * Rotate to a specific glyph index
     * @param {number} glyphIndex - 0 to 38
     * @param {boolean} clockwise - Direction
     * @returns {Promise} Resolves when ring arrives
     */
    rotateToGlyph(glyphIndex, clockwise = null) {
        return new Promise(resolve => {
            // Calculate target angle
            const targetGlyphAngle = -(glyphIndex * this.degreesPerGlyph);

            // Determine shortest path if direction not specified
            if (clockwise === null) {
                const diff = targetGlyphAngle - this.angle;
                const normalizedDiff = ((diff % 360) + 540) % 360 - 180;

                // Add extra rotation for visual effect (at least 90 degrees)
                if (Math.abs(normalizedDiff) < 90) {
                    this.targetAngle = this.angle + (normalizedDiff > 0 ? 360 : -360) + normalizedDiff;
                } else {
                    this.targetAngle = this.angle + normalizedDiff;
                }
            } else {
                // Force direction with extra rotation
                const rotation = clockwise ? -360 : 360;
                this.targetAngle = targetGlyphAngle + rotation;
            }

            this.isSpinning = true;
            this.isOvershooting = false;
            this.onArrival = resolve;

            // Start animation if not running
            if (!this.animationId) {
                this.lastTime = performance.now();
                this.animate();
            }

            // Update visual class
            this.ring.classList.add('spinning');
        });
    }

    /**
     * Main animation loop
     */
    animate(currentTime = performance.now()) {
        const deltaTime = (currentTime - this.lastTime) / 1000; // Convert to seconds
        this.lastTime = currentTime;

        if (this.isSpinning) {
            this.updatePhysics(deltaTime);
        }

        // Apply rotation to DOM
        this.ring.style.setProperty('--ring-rotation', `${this.angle}deg`);

        // Continue animation
        this.animationId = requestAnimationFrame(t => this.animate(t));
    }

    /**
     * Physics update
     */
    updatePhysics(dt) {
        const distance = this.targetAngle - this.angle;
        const direction = Math.sign(distance);

        if (this.isOvershooting) {
            // Damped harmonic oscillator for overshoot
            this.overshootTime += dt;
            const decay = Math.exp(-this.overshootDecay * this.overshootTime);
            const oscillation = Math.cos(2 * Math.PI * 3 * this.overshootTime); // 3Hz oscillation

            this.angle = this.targetAngle + (this.overshootAmplitude * decay * oscillation);

            // Stop when oscillation is negligible
            if (decay < 0.01) {
                this.angle = this.targetAngle;
                this.arrive();
            }
        } else {
            // Normal acceleration phase
            if (Math.abs(distance) > this.lockThreshold) {
                // Accelerate toward target
                const accel = this.accelerationRate * direction;
                this.velocity += accel * dt;

                // Clamp velocity
                this.velocity = Math.max(-this.maxVelocity, Math.min(this.maxVelocity, this.velocity));

                // Apply friction when approaching target
                if (Math.abs(distance) < 45) {
                    this.velocity *= this.friction;
                }

                // Update angle
                this.angle += this.velocity * dt;

                // Check for overshoot start
                const newDistance = this.targetAngle - this.angle;
                if (Math.sign(newDistance) !== direction && Math.abs(this.velocity) > 10) {
                    this.isOvershooting = true;
                    this.overshootTime = 0;
                    this.overshootAmplitude = Math.abs(this.velocity) * 0.02; // Proportional to velocity
                }
            } else {
                // Close enough, trigger overshoot
                this.isOvershooting = true;
                this.overshootTime = 0;
            }
        }
    }

    /**
     * Called when ring arrives at target
     */
    arrive() {
        this.isSpinning = false;
        this.velocity = 0;
        this.ring.classList.remove('spinning');

        // Normalize angle
        this.angle = this.targetAngle % 360;

        if (this.onArrival) {
            const callback = this.onArrival;
            this.onArrival = null;
            callback();
        }
    }

    /**
     * Emergency stop
     */
    stop() {
        this.isSpinning = false;
        this.velocity = 0;
        this.ring.classList.remove('spinning');

        if (this.onArrival) {
            this.onArrival();
            this.onArrival = null;
        }
    }

    /**
     * Reset to starting position
     */
    reset() {
        this.angle = 0;
        this.targetAngle = 0;
        this.velocity = 0;
        this.isSpinning = false;
        this.isOvershooting = false;
        this.ring.style.setProperty('--ring-rotation', '0deg');
        this.ring.classList.remove('spinning');
    }

    /**
     * Get current glyph index at top position
     */
    getCurrentGlyphIndex() {
        const normalizedAngle = ((this.angle % 360) + 360) % 360;
        return Math.round(normalizedAngle / this.degreesPerGlyph) % this.totalGlyphs;
    }

    /**
     * Destroy controller
     */
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }
}

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { RingController };
}
