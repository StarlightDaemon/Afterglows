// Fresh geometric and timing models; no prior scenes are inputs.
export const rotaryDuration=10;
export const returnStart=2.6,pulseStart=4.36,returnEnd=8.36,pulsePeriod=.8;
export const dialAngle=194.4,selectedBearing=-134.4;
export const ease=t=>t*t*(3-2*t);
const clamp=t=>Math.max(0,Math.min(1,t));
export function rotaryState(t){
  const angle=t<.6?0:t<2.2?dialAngle*ease((t-.6)/1.6):t<returnStart?dialAngle:t<returnEnd?dialAngle*(1-(t-returnStart)/5.76):0;
  const progress=clamp((t-pulseStart)/4);
  const index=Math.min(4,Math.floor((t-pulseStart)/pulsePeriod+1e-8));
  const breaking=t>=pulseStart&&t<returnEnd&&(t-pulseStart-index*pulsePeriod)<pulsePeriod*2/3-1e-8;
  const count=t<pulseStart?0:Math.min(5,Math.floor((t-pulseStart)/pulsePeriod+1e-8)+1);
  return {angle,progress,breaking,count,finger:t>=.45&&t<2.5};
}
export const letterPoints=Object.fromEntries([..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((letter,i)=>{const j=i%13;return [letter,{x:15+j*110/12,y:(i<13?54:76)-8*Math.sin(Math.PI*j/12)}];}));
const P=(x,y,r=0)=>({x,y,r});
export const boardStops=[
  {at:0,hold:1,p:P(70,91),word:''},
  {at:2,hold:2.8,p:P(33,28,-8),word:''},
  {at:4,hold:4.8,p:{...letterPoints.H,r:7},word:'H'},
  {at:5.8,hold:6.6,p:{...letterPoints.E,r:-8},word:'HE'},
  {at:7.8,hold:8.5,p:{...letterPoints.L,r:8},word:'HEL'},
  {at:8.85,hold:8.9,p:P(letterPoints.L.x-6,letterPoints.L.y+5,2),word:'HEL'},
  {at:9.25,hold:10,p:{...letterPoints.L,r:8},word:'HELL'},
  {at:11.4,hold:12.2,p:{...letterPoints.O,r:-6},word:'HELLO'},
  {at:13.5,hold:14.4,p:P(70,104,0),word:'HELLO'},
  {at:15.4,hold:16,p:P(70,91),word:'HELLO'},
];
export function boardState(t){
  let i=0;while(i+1<boardStops.length&&t>=boardStops[i+1].at)i++;
  const a=boardStops[i],b=boardStops[i+1];
  const f=b?ease(clamp((t-a.hold)/(b.at-a.hold))):0;
  return {x:a.p.x+(b?b.p.x-a.p.x:0)*f,y:a.p.y+(b?b.p.y-a.p.y:0)*f,r:a.p.r+(b?b.p.r-a.p.r:0)*f,word:t>=15.8?'':a.word};
}
