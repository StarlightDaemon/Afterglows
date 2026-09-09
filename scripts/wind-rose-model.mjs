// Fresh meteorological model. Synthetic equal-duration observations, not a station record.
export const observations = [
  [268, 4], [218, 8], [352, 2], [null, 0], [84, 2],
  [232, 4], [303, 8], [171, 2], [285, 2], [43, 4],
  [213, 2], [139, 2], [259, 8], [98, 4], [null, 0],
  [242, 8], [187, 4], [327, 4], [274, 4], [225, 4],
];
export const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
export const colors = ['#e6c987', '#63c5be', '#e98c72'];
export const seconds = 18;
export function classify(bearing, speed) {
  if (!Number.isFinite(speed) || speed < 0) throw new Error('Invalid wind speed');
  if (speed < 1) return { direction: null, speedClass: null };
  if (!Number.isFinite(bearing)) throw new Error('Non-calm wind requires a bearing');
  return {
    direction: Math.floor((((bearing % 360) + 360) % 360 + 22.5) / 45) % 8,
    speedClass: speed < 3 ? 0 : speed < 6 ? 1 : 2,
  };
}
const clamp = v => Math.max(0, Math.min(1, v));
const ease = v => { v = clamp(v); return v * v * (3 - 2 * v); };
export function stateAt(time) {
  const progress = (time - .8) / .6;
  const bins = Array.from({ length: 8 }, () => [0, 0, 0]);
  let calm = 0, complete = 0;
  observations.forEach(([bearing, speed], i) => {
    const weight = ease((progress - i - .45) / .3);
    const { direction, speedClass } = classify(bearing, speed);
    if (direction === null) calm += weight;
    else bins[direction][speedClass] += weight;
    if (progress - i >= .75) complete++;
  });
  const i = Math.floor(progress);
  return { bins, calm, complete, current: i >= 0 && i < 20 ? i : null,
    approach: clamp((progress - i) / .45), fade: 1 - ease((time - 17.3) / .7) };
}
export const point = (bearing, radius) => {
  const a = bearing * Math.PI / 180;
  return [70 + Math.sin(a) * radius, 65 - Math.cos(a) * radius];
};
export function cuePosition(bearing, speed, progress) {
  // Southern records use the empty ring outside their short branch, keeping the
  // lower speed legend clear. Both lanes approach from the measured FROM bearing.
  const south = classify(bearing, speed).direction === 4;
  return point(bearing, south ? 35 - 6 * clamp(progress) : 61 - 4 * clamp(progress));
}
const n = v => Number(v.toFixed(3));
// Radial LENGTH is linear in observation count. Area is deliberately not the scale.
export function sector(direction, innerCount, outerCount) {
  const a = direction * 45 - 18, b = direction * 45 + 18;
  const r0 = innerCount * 8, r1 = outerCount * 8;
  const [p, q, r, s] = [point(a, r0), point(a, r1), point(b, r1), point(b, r0)];
  return `M${p.map(n)}L${q.map(n)}A${n(r1)} ${n(r1)} 0 0 1 ${r.map(n)}L${s.map(n)}A${n(r0)} ${n(r0)} 0 0 0 ${p.map(n)}Z`;
}
