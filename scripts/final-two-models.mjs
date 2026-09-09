export const TAU=Math.PI*2;
export function trammel(theta){return {a:{x:70+26*Math.cos(theta),y:65},b:{x:70,y:65+26*Math.sin(theta)},p:{x:70+46.8*Math.cos(theta),y:65-20.8*Math.sin(theta)}};}
export const chirpPhase=t=>TAU*(t+1.75*t*t);
export const chirpFrequency=t=>1+3.5*t;
export const chirpValue=t=>Math.cos(chirpPhase(t));
export const recordTime=seconds=>2*Math.max(0,Math.min(1,(seconds-.6)/6));
