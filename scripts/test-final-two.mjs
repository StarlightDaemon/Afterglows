import assert from 'node:assert/strict';
import {trammel,chirpPhase,chirpFrequency,chirpValue,recordTime,TAU} from './final-two-models.mjs';
const near=(a,b,tol=1e-8)=>assert.ok(Math.abs(a-b)<tol,`${a} != ${b}`);
const distance=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
for(let i=0;i<=4000;i++){
  const s=trammel(TAU*i/4000);
  near(s.a.y,65);near(s.b.x,70);near(distance(s.a,s.b),26);near(distance(s.a,s.p),20.8);near(distance(s.b,s.p),46.8);
  near(((s.p.x-70)/46.8)**2+((s.p.y-65)/20.8)**2,1);
  assert.ok(s.p.x>12&&s.p.x<128&&s.p.y>18&&s.p.y<112);
}
let crossings=0,previous=chirpValue(0);
for(let i=1;i<=20000;i++){
  const t=i/10000,value=chirpValue(t),h=1e-6;
  assert.ok(Math.abs(value)<=1);
  near((chirpPhase(t+h)-chirpPhase(t-h))/(2*h*TAU),chirpFrequency(t),1e-7);
  if(value*previous<0)crossings++;previous=value;
}
near((chirpPhase(2)-chirpPhase(0))/TAU,9);assert.equal(crossings,18);
near(recordTime(.6),0);near(recordTime(6.6),2);near(recordTime(8),2);
console.log('PASS: 4,001 trammel poses preserve both slots, three rigid lengths and ellipse identity; 20,000 chirp samples match frequency derivative, nine cycles and 18 zero crossings.');
