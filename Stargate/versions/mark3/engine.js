/**
 * STARGATE MARK III - State Machine Engine
 * Finite State Machine for gate operations
 */

// ============================================
// CONSTANTS
// ============================================
const GATE_STATES = {
    IDLE: 'idle',
    DIALING: 'dialing',
    CHEVRON_LOCK: 'chevron_lock',
    VALIDATING: 'validating',
    ACTIVE_OUTBOUND: 'active_outbound',
    ACTIVE_INCOMING: 'active_incoming',
    IRIS_CHECK: 'iris_check',
    SHUTDOWN: 'shutdown',
    ABORTED: 'aborted'
};

const DIAL_MODES = {
    LOCAL: 7,
    INTERGALACTIC: 8,
    DESTINY: 9
};

// Canon criss-cross dialing order (chevron positions)
const DIAL_SEQUENCES = {
    7: [1, 8, 2, 7, 3, 6, 9],
    8: [1, 8, 2, 7, 3, 6, 4, 9],
    9: [1, 8, 2, 7, 3, 6, 4, 5, 9]
};

// ============================================
// STATE MACHINE CLASS
// ============================================
class GateStateMachine {
    constructor() {
        this.state = GATE_STATES.IDLE;
        this.mode = DIAL_MODES.LOCAL;
        this.addressBuffer = [];
        this.lockedChevrons = [];
        this.currentChevronIndex = 0;
        this.destination = null;
        this.listeners = new Map();
    }

    // Event system
    on(event, callback) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, []);
        }
        this.listeners.get(event).push(callback);
    }

    emit(event, data) {
        if (this.listeners.has(event)) {
            this.listeners.get(event).forEach(cb => cb(data));
        }
    }

    // State transitions
    transition(newState, data = {}) {
        const oldState = this.state;
        this.state = newState;
        console.log(`[State] ${oldState} → ${newState}`, data);
        this.emit('stateChange', { from: oldState, to: newState, data });
    }

    // Actions
    setMode(mode) {
        if (this.state !== GATE_STATES.IDLE) return false;
        this.mode = mode;
        this.emit('modeChange', mode);
        return true;
    }

    addGlyph(glyphId) {
        if (this.state !== GATE_STATES.IDLE && this.state !== GATE_STATES.DIALING) {
            return false;
        }

        // Check for duplicates (canon rule)
        if (this.addressBuffer.includes(glyphId)) {
            this.emit('error', { type: 'duplicate_glyph', glyphId });
            return false;
        }

        // Check buffer limit
        const maxGlyphs = this.mode - 1; // 6 for 7-chevron, etc.
        if (this.addressBuffer.length >= maxGlyphs) {
            this.emit('error', { type: 'buffer_full' });
            return false;
        }

        this.addressBuffer.push(glyphId);

        if (this.state === GATE_STATES.IDLE) {
            this.transition(GATE_STATES.DIALING);
        }

        this.emit('glyphAdded', { glyphId, buffer: [...this.addressBuffer] });
        return true;
    }

    lockChevron(chevronNum) {
        this.lockedChevrons.push(chevronNum);
        this.emit('chevronLocked', { chevronNum, total: this.lockedChevrons.length });
    }

    async initiateDialSequence() {
        if (this.state !== GATE_STATES.DIALING) return false;

        const sequence = DIAL_SEQUENCES[this.mode];

        for (let i = 0; i < sequence.length; i++) {
            if (this.state === GATE_STATES.ABORTED) break;

            this.currentChevronIndex = i;
            const chevronNum = sequence[i];
            const isLast = i === sequence.length - 1;

            // Emit encoding start
            this.emit('chevronEncoding', {
                chevronNum,
                index: i,
                isLast,
                glyphId: isLast ? 0 : this.addressBuffer[i] // 0 = Earth PoO
            });

            // Wait for ring physics (external controller handles timing)
            await this.waitForRing();

            // Lock chevron
            this.transition(GATE_STATES.CHEVRON_LOCK, { chevronNum, isLast });
            this.lockChevron(chevronNum);

            // Brief pause
            await this.sleep(300);

            if (!isLast) {
                this.transition(GATE_STATES.DIALING);
            }
        }

        // All chevrons locked - validate
        if (this.state !== GATE_STATES.ABORTED) {
            this.transition(GATE_STATES.VALIDATING);
            await this.validateAddress();
        }
    }

    async validateAddress() {
        // Check against canon whitelist first
        const destination = await this.checkWhitelist();

        if (destination) {
            this.destination = destination;
            this.transition(GATE_STATES.ACTIVE_OUTBOUND, { destination });
            this.emit('wormholeEstablished', destination);
        } else {
            // Try procedural hash (5% chance)
            const hash = this.hashAddress(this.addressBuffer);
            if (hash % 100 < 5) {
                const proceduralDest = {
                    name: `P${hash % 9}X-${String(hash % 999).padStart(3, '0')}`,
                    type: 'unknown',
                    description: 'Unexplored world'
                };
                this.destination = proceduralDest;
                this.transition(GATE_STATES.ACTIVE_OUTBOUND, { destination: proceduralDest });
                this.emit('wormholeEstablished', proceduralDest);
            } else {
                this.transition(GATE_STATES.ABORTED, { reason: 'invalid_address' });
                this.emit('dialFailed', { reason: 'No connection - address unknown' });
            }
        }
    }

    async checkWhitelist() {
        // This would normally fetch from addresses.json
        // For now, emit event for external handler
        return new Promise(resolve => {
            this.emit('validateAddress', {
                buffer: [...this.addressBuffer],
                resolve
            });
        });
    }

    hashAddress(buffer) {
        // Simple djb2 hash
        let hash = 5381;
        buffer.forEach(id => {
            hash = ((hash << 5) + hash) + id;
        });
        return Math.abs(hash);
    }

    abort() {
        const wasActive = this.state === GATE_STATES.ACTIVE_OUTBOUND ||
            this.state === GATE_STATES.ACTIVE_INCOMING;

        this.transition(GATE_STATES.ABORTED);
        this.emit('aborted', { wasActive });

        // Reset after delay
        setTimeout(() => this.reset(), 1500);
    }

    shutdown() {
        this.transition(GATE_STATES.SHUTDOWN);
        this.emit('shutdown');

        setTimeout(() => this.reset(), 2000);
    }

    reset() {
        this.state = GATE_STATES.IDLE;
        this.addressBuffer = [];
        this.lockedChevrons = [];
        this.currentChevronIndex = 0;
        this.destination = null;
        this.emit('reset');
    }

    // Helpers
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    waitForRing() {
        return new Promise(resolve => {
            this.emit('waitForRing', resolve);
        });
    }

    // Getters
    getState() { return this.state; }
    getMode() { return this.mode; }
    getBuffer() { return [...this.addressBuffer]; }
    getLockedChevrons() { return [...this.lockedChevrons]; }
}

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GateStateMachine, GATE_STATES, DIAL_MODES, DIAL_SEQUENCES };
}
