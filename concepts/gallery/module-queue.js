// Bound concurrent imports; a stale viewport request must never start work.
// Failed imports are evicted so revisiting a tile can retry them.
export class ModuleQueue {
  constructor(load, limit = 4) {
    this.load = load;
    this.limit = limit;
    this.active = 0;
    this.pending = [];
    this.preloads = [];
    this.modules = new Map();
  }

  request(path, wanted, { preload = false } = {}) {
    return new Promise((resolve, reject) => {
      const queue = preload ? this.preloads : this.pending;
      queue.push({ path, wanted, resolve, reject });
      this.drain();
    });
  }

  drain() {
    // Visible requests get the next free slots. In-flight imports are shared
    // even when a study moves from the preload margin into the viewport.
    this.drainQueue(this.pending);
    this.drainQueue(this.preloads);
  }

  drainQueue(queue) {
    // Cached or in-flight requests can attach even when new-import slots are
    // full. Each unique import owns one slot, however many tiles await it.
    for (let index = 0; index < queue.length;) {
      const job = queue[index];
      if (!job.wanted()) {
        queue.splice(index, 1);
        job.resolve(false);
        continue;
      }
      let module = this.modules.get(job.path);
      if (!module && this.active >= this.limit) { index++; continue; }
      queue.splice(index, 1);
      if (!module) {
        this.active++;
        module = Promise.resolve().then(() => this.load(job.path)).then(
          (value) => {
            this.active--;
            this.drain();
            return value;
          },
          (error) => {
            this.modules.delete(job.path);
            this.active--;
            this.drain();
            throw error;
          },
        );
        this.modules.set(job.path, module);
      }
      module.then(() => job.resolve(true), job.reject);
    }
  }
}
