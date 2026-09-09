import assert from 'node:assert/strict';
import {rotaryState,boardState,letterPoints,boardStops,pulseStart,returnEnd,dialAngle,selectedBearing} from './curation-models.mjs';
// A selected 5 begins at its fixed digit bearing and reaches the fixed 60-degree stop.
assert.equal(selectedBearing+rotaryState(2.3).angle,60);
assert.equal(rotaryState(0).angle,rotaryState(10).angle);
let edges=0,previous=false;
for(let i=0;i<=10000;i++){
  const t=i/1000,s=rotaryState(t);
  assert.ok(s.angle>=0&&s.angle<=dialAngle);
  if(s.breaking&&!previous)edges++;
  if(s.breaking)assert.ok(t>=pulseStart&&t<returnEnd,'No pulses during winding or final rest');
  previous=s.breaking;
}
assert.equal(edges,5);
for(let i=0;i<5;i++){
  assert.equal(rotaryState(pulseStart+.01+i*.8).count,i+1);
  assert.equal(rotaryState(pulseStart+.01+i*.8).breaking,true);
  assert.equal(rotaryState(pulseStart+.6+i*.8).breaking,false);
}
assert.equal(rotaryState(9).count,5);
for(const [time,letter,word] of [[4,'H','H'],[5.8,'E','HE'],[7.8,'L','HEL'],[9.25,'L','HELL'],[11.4,'O','HELLO']]){
  const state=boardState(time);
  assert.equal(state.x,letterPoints[letter].x);
  assert.equal(state.y,letterPoints[letter].y);
  assert.equal(state.word,word,'Message advances only upon arrival');
}
assert.deepEqual(boardState(0),boardState(16));
for(let i=0;i<=16000;i++){
  const s=boardState(i/1000);
  // Bounding circle for the full planchette, conservatively including rotation.
  assert.ok(s.x-21>=0&&s.x+21<=140&&s.y-21>=0&&s.y+21<=140,'Pointer stays within the tile');
}
assert.ok(boardStops[5].p.x!==boardStops[4].p.x,'Repeated L has an explicit excursion');
console.log('PASS: 10,001 rotary states, five return-only pulse edges, fixed-stop alignment; 16,001 board states, aperture/glyph registration, repeat-L excursion and closed loops.');
