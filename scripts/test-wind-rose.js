import assert from 'node:assert/strict';
import { observations, classify, stateAt, cuePosition } from './wind-rose-model.mjs';
// Independently specified classification boundaries and conservation invariants.
for(const [bearing,expected] of [[0,0],[360,0],[-1,0],[22.499,0],[22.5,1],[90,2],[180,4],[270,6],[337.5,0]]) {
  assert.equal(classify(bearing,2).direction,expected);
}
assert.deepEqual(classify(null,0),{direction:null,speedClass:null});
assert.equal(classify(null,.999).direction,null);
assert.equal(classify(0,1).speedClass,0);
assert.equal(classify(0,3).speedClass,1);
assert.equal(classify(0,6).speedClass,2);
assert.throws(()=>classify(null,1));
assert.throws(()=>classify(0,-1));
assert.equal(observations.length,20);
const final=stateAt(15);
assert.deepEqual(final.bins,[[1,0,0],[0,1,0],[1,1,0],[1,0,0],[1,1,0],[1,2,2],[1,2,1],[0,1,1]]);
assert.equal(final.calm,2);
assert.equal(final.complete,20);
let previous=Array(25).fill(0);
for(let tick=0;tick<=1800;tick++) {
  const time=tick/100,s=stateAt(time),values=[...s.bins.flat(),s.calm];
  const total=values.reduce((a,b)=>a+b,0);
  assert.ok(total>=0&&total<=20+1e-9);
  assert.ok(total>=s.complete-1e-9&&total<=s.complete+1+1e-9,'At most one incoming observation at a time');
  values.forEach((value,i)=>{assert.ok(value>=previous[i]-1e-9,'No accumulated observation disappears before reset');});
  s.bins.forEach(row=>assert.ok(8*row.reduce((a,b)=>a+b,0)<=40+1e-9));
  previous=values;
}
for(const [bearing,speed] of observations.filter(([,speed])=>speed>=1)) {
  const outer=cuePosition(bearing,speed,0),inner=cuePosition(bearing,speed,1);
  assert.ok(Math.hypot(outer[0]-70,outer[1]-65)>Math.hypot(inner[0]-70,inner[1]-65),'FROM cue travels inward');
  for(let step=0;step<=100;step++) {
    const [x,y]=cuePosition(bearing,speed,step/100),angle=bearing*Math.PI/180;
    for(const [dx,dy] of [[0,-3],[0,3],[-2,1],[2,1]]) {
      const X=x+dx*Math.cos(angle)-dy*Math.sin(angle),Y=y+dx*Math.sin(angle)+dy*Math.cos(angle);
      assert.ok(X>1&&X<139&&Y>1&&Y<124,'Arrow remains inside frame and above speed legend');
      assert.ok(Y<114||X<46||X>94,'Arrow clears the central observation readout');
    }
  }
}
console.log('PASS: Wind Rose bearing/speed boundaries, 20-record conservation, sorted stack totals, 1,801 accumulation states and inward observation cues.');
