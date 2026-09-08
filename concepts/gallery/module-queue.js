// Bound concurrent imports; a stale viewport request must never start work.
// Failed imports are evicted so revisiting a tile can retry them.
export class ModuleQueue {
  constructor(load, limit = 4) {
    this.load = load;
    this.limit = limit;
    this.active = 0;
    this.pending = [];
    this.modules = new Map();
  }

  request(path, wanted) {
    return new Promise((resolve, reject) => {
      this.pending.push({ path, wanted, resolve, reject });
      this.drain();
    });
  }

  drain() {
    // Cached or in-flight requests can attach even when new-import slots are
    // full. Each unique import owns one slot, however many tiles await it.
    for (let index = 0; index < this.pending.length;) {
      const job = this.pending[index];
      if (!job.wanted()) {
        this.pending.splice(index, 1);
        job.resolve(false);
        continue;
      }
      let module = this.modules.get(job.path);
      if (!module && this.active >= this.limit) { index++; continue; }
      this.pending.splice(index, 1);
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
