import {n,range,line,path,circle,rect,arrow,curve,sample,keys,move,morph,opacity,clamp,smooth,dots,emit,saveShard} from './resumed-art.mjs';
const tau=2*Math.PI;
const subjects=[];
function subject(key,id,label,category,definition,motionThesis,distinction,reference,facets=[]){
 const s={key,id,label,section:'earth-sciences',category,definition,motionThesis,distinction,references:[reference],aliases:[],facets,cycleSeconds:16,added:`2026-09-08T20:${String(Number(key.slice(1))-61).padStart(2,'0')}:00Z`};subjects.push(s);return s;
}
const hydro='oceanography-hydrology',climate='climate-systems';
const aquifer='https://www.usgs.gov/water-science-school/science/aquifers-and-groundwater';
{
 const s=subject('S061','ocean-internal-wave','Ocean Internal Wave',hydro,'An ocean internal wave propagates along a density boundary inside stratified water.','A travelling density interface passes through nearly stationary water while tracers above and below execute oppositely directed horizontal oscillations.','A small-amplitude two-layer rigid-lid mode uses linear velocity potentials; no surface storm or parcel riding along the crest is implied.','https://www.whoi.edu/science/aope/people/tduda/isww/text/evans/node1.html',['stratification','internal-gravity-waves']);
 const k=tau/112,A=6,upper=42,lower=42,eta=(x,t)=>70+A*Math.cos(k*(x-14)-tau*t);
 const d=t=>curve(sample(u=>[14+112*u,eta(14+112*u,t)],60))+'L126 112H14Z';
 let scene=rect(14,28,112,84,'rx="3" fill="#122f3c"')+path(d(0),'class="deep" fill="#174d63"')+line(14,28,126,28,'stroke="#a3e5ed" stroke-width="1.5"')+line(14,112,126,112,'stroke="#8c927c" stroke-width="3"');
 let css=morph('deep',d);
 for(let layer=0;layer<2;layer++)for(let j=0;j<4;j++){
  const x=29+27*j,z=layer?18:-18,theta=k*(x-14),H=42;
  // Integrals of the linear two-layer velocity field about each equilibrium point.
  const f=t=>{const p=theta-tau*t; const dx=(layer?1:-1)*A*Math.cosh(k*(H-Math.abs(z)))/Math.sinh(k*H)*Math.sin(p);const dy=A*Math.sinh(k*(H-Math.abs(z)))/Math.sinh(k*H)*Math.cos(p);return[x+dx,70+z+dy];};
  scene+=path(curve(sample(t=>f(t))),`fill="none" stroke="#588793" stroke-width=".6"`)+circle(0,0,2,`class="parcel${layer}${j}" fill="${layer?'#f3c977':'#b9f1ef'}" transform="translate(${f(0).map(n).join(' ')})"`);
  css+=move(`parcel${layer}${j}`,f);
 }
 scene+=arrow(106,17,0,'#77c9ef');emit(s,scene,css);
}
{
 const s=subject('S062','groundwater-cone-of-depression','Groundwater Cone of Depression',hydro,'Pumping lowers groundwater head around a well, forming a cone-shaped drawdown surface.','A screened well extracts water as the surrounding water table falls most strongly near the pump and a nearby observation well follows the local head.','This is an illustrative unconfined cross-section with a prescribed drawdown and recovery, not a hollow underground bowl or a calibrated pumping test.',aquifer,['groundwater','pumping','drawdown']);
 const pumping=t=>smooth(t/.2)*(1-smooth((t-.64)/.28));
 const water=(x,t)=>58+26*pumping(t)*Math.exp(-Math.abs(x-76)/23);
 const d=t=>curve(sample(u=>[10+120*u,water(10+120*u,t)]))+'L130 123H10Z';
 let scene=rect(10,39,120,84,'fill="#322e22"')+path(d(.45),'class="table" fill="#174759"')+dots(11,42,118,80,100)+line(10,39,130,39,'stroke="#8da971" stroke-width="3"')+line(10,58,130,58,'stroke="#86b2bd" stroke-dasharray="3 3" opacity=".5"')+rect(71,31,10,83,'rx="2" fill="#0a151a" stroke="#a5c3bd"')+rect(73,89,6,23,'fill="#26748a"')+range(6,i=>line(71,91+4*i,81,91+4*i,'stroke="#91b9c0"'))+rect(67,25,18,10,'rx="2" fill="#96af9a"')+path('M81 30H111V43','class="ink"')+rect(41,45,5,40,'fill="#10272b" stroke="#90a7a3"');
 let css=morph('table',d)+morph('observed',t=>`M43.5 ${n(water(43.5,t))}V82`);
 scene+=path(`M43.5 ${water(43.5,.45)}V82`,'class="observed" fill="none" stroke="#77c9ef" stroke-width="3"');
 for(let i=0;i<7;i++){
  const start=[i<4?17:125,91+(i%4)*7];
  const f=t=>{let u=clamp((t-.12-i*.035)/.4);if(u<.5)return[start[0]+(76-start[0])*u/.5,start[1]+(98-start[1])*u/.5];if(u<.8)return[76,98-68*(u-.5)/.3];if(u<.95)return[76+35*(u-.8)/.15,30];return[111,30+13*(u-.95)/.05];};
  scene+=circle(0,0,1.8,`class="flow${i}" fill="#94deee" opacity="0"`);css+=move(`flow${i}`,f)+opacity(`flow${i}`,t=>t>.12+i*.035&&t<.52+i*.035?1:0);
 }
 scene+=path('M112 44L110 51M116 46L117 54','class="jet" stroke="#77c9ef" stroke-width="2"');css+=opacity('jet',pumping);
 emit(s,scene,css);
}
{
 const s=subject('S063','artesian-aquifer','Artesian Aquifer',hydro,'An artesian aquifer is a confined permeable layer whose pressure raises water in a penetrating well above the aquifer top.','Recharge on high ground drives confined seepage downslope while water rises in a standpipe to a marked pressure head below its rim.','The nonflowing artesian example distinguishes pressure head from aquifer elevation; porous layers are not open subterranean rivers.',aquifer,['confined-groundwater','hydraulic-head']);
 const top='M12 43C45 63 73 79 130 83',bot='M12 61C45 81 73 97 130 101';
 let scene=path('M10 32Q35 49 58 61T130 69V126H10Z','fill="#38342a"')+dots(12,70,116,52,90)+path(top+'L130 101C73 97 45 81 12 61Z','fill="#286075"')+path(top,'fill="none" stroke="#867a60" stroke-width="5"')+path(bot,'fill="none" stroke="#867a60" stroke-width="5"')+path('M10 32Q35 49 58 61T130 69','fill="none" stroke="#9eae76" stroke-width="3"')+rect(94,39,9,61,'fill="#0b1820" stroke="#b3c6bd"')+line(80,53,118,53,'stroke="#e5c986" stroke-dasharray="3 3"')+path('M98.5 95V53','class="rise" fill="none" stroke="#83dbe7" stroke-width="5"')+range(3,i=>line(94,86+i*3,103,86+i*3,'stroke="#c3c8b0"'))+arrow(21,23,90,'#77c9ef');
 scene=scene.replace('height="61"','height="54"').replace('M98.5 95V53','M98.5 92V53').replace(/M94 98L103 98/g,'M94 86L103 86');
 // Recharge enters the exposed updip end; the down-dip well remains inside the aquifer.
 scene=scene.replace(arrow(21,23,90,'#77c9ef'),arrow(5,52,0,'#77c9ef'));
 let css=morph('rise',t=>`M98.5 92V${n(92-39*smooth(t/.5))}`)+opacity('rise',t=>1-smooth((t-.92)/.08));
 for(let j=0;j<5;j++){const f=t=>{const u=(t+j/5)%1,x=14+113*u;return[x,53+44*(1-Math.exp(-(x-14)/54))];};scene+=circle(0,0,1.6,`class="seep${j}" fill="#a5dce6" transform="translate(${f(0).map(n).join(' ')})"`);css+=move(`seep${j}`,f)+opacity(`seep${j}`,t=>{let u=(t+j/5)%1;return Math.min(1,u*15,(1-u)*15);});}
 emit(s,scene,css);
}
{
 const s=subject('S064','meander-cutoff','Meander Cutoff',hydro,'A meander cutoff creates a shorter river route across a bend and can isolate the abandoned loop as an oxbow lake.','A narrow neck opens into a shortcut before sediment plugs disconnect the old loop, leaving an oxbow beside the through-flowing river.','A staged plan-view neck cutoff separates channel connection, flow diversion and deposition; erosion and geological time are compressed.','https://pubs.usgs.gov/ha/ha730/ch_f/F-text2.html',['fluvial-geomorphology','oxbow-lake']);
 const old='M12 25Q45 22 62 48C78 5 127 24 121 66C117 104 76 93 64 70Q49 99 15 115';
 const shortcut='M12 25Q45 22 62 48L64 70Q49 99 15 115';
 let scene=rect(8,8,124,124,'rx="8" fill="#213c2a"')+dots(12,12,116,116,80)+path(old,'fill="none" stroke="#b9ab73" stroke-width="17"')+path(old,'fill="none" stroke="#35788b" stroke-width="11"')+path('M62 48L64 70','class="cut" fill="none" stroke="#57a3ac" stroke-width="0"')+path('M67 24L84 34M67 88L83 78','class="plugs" fill="none" stroke="#b9ab73" stroke-width="10" opacity="0"')+path(shortcut,'class="newflow" fill="none" stroke="#b8ece7" stroke-width="1.6" stroke-dasharray="3 15" opacity="0"');
 let css=`.cut{animation:cutting 16s linear infinite;}@keyframes cutting{0%,20%{stroke-width:0}40%,92%{stroke-width:11}100%{stroke-width:0}}`+opacity('plugs',t=>smooth((t-.55)/.15)*(1-smooth((t-.92)/.08)))+opacity('newflow',t=>smooth((t-.38)/.1)*(1-smooth((t-.92)/.08)))+`.newflow{animation:newflow 16s linear infinite,flux 2s linear infinite;}@keyframes flux{to{stroke-dashoffset:-36}}`;
 // Pre-cutoff current and retained oxbow remain spatially separate after deposition.
 scene+=path(old,'class="oldflow" fill="none" stroke="#a8dedf" stroke-width="1.3" stroke-dasharray="2 15"');css+=opacity('oldflow',t=>1-smooth((t-.3)/.18))+`.oldflow{animation:oldflow 16s linear infinite,flux 2s linear infinite;} @media(prefers-reduced-motion:reduce){.cut{stroke-width:11}.plugs,.newflow{opacity:1}.oldflow{opacity:0}}`;
 emit(s,scene,css);
}
{
 const s=subject('S065','watershed-divide','Watershed Divide',hydro,'A watershed divide is a topographic boundary separating surface runoff that drains to different outlets.','Rain lands on opposite flanks of a central ridge and follows branching channels into two separate outlet streams.','The divide is fixed topography; the schematic follows surface drainage and does not assert an identical groundwater divide.','https://water.usgs.gov/themes/hydrofabric/drainage-area/',['drainage-basin','surface-runoff']);
 let scene=path('M10 112L70 16 130 112 76 128Z','fill="#203e2d" stroke="#72926f"')+path('M70 16L76 128 10 112Z','fill="#344d31"')+path('M70 16L72 48 68 74 76 128','fill="none" stroke="#dab875" stroke-width="2" stroke-dasharray="3 3"');
 let css='';const routes=[[[53,47],[39,70],[34,93],[21,111]],[[59,77],[41,90],[34,93],[21,111]],[[35,80],[32,89],[34,93],[21,111]],[[84,46],[99,72],[104,91],[120,113]],[[80,78],[94,90],[104,91],[120,113]],[[108,80],[110,87],[104,91],[120,113]]];
 routes.forEach((p,i)=>{scene+=path(curve(p),'fill="none" stroke="#58b5c7" stroke-width="2"');const f=t=>{let u=(t+i*.065)%1;if(u<.22)return[p[0][0],p[0][1]-18+18*u/.22];u=(u-.22)/.78*3;const a=Math.min(2,Math.floor(u)),v=u-a;return[p[a][0]+v*(p[a+1][0]-p[a][0]),p[a][1]+v*(p[a+1][1]-p[a][1])];};scene+=circle(0,0,2.2,`class="basin${i}" fill="#b2eef3" transform="translate(${f(0).map(n).join(' ')})"`);css+=move(`basin${i}`,f)+opacity(`basin${i}`,t=>{const u=(t+i*.065)%1;return Math.min(1,u*20,(1-u)*20);});});
 scene+=arrow(19,122,100,'#77c9ef')+arrow(124,123,70,'#77c9ef');emit(s,scene,css);
}
{
 const s=subject('S066','impervious-runoff','Impervious Runoff',hydro,'Impervious surfaces reduce infiltration and commonly increase rapid surface runoff during rainfall.','Equal rain inputs reach two slopes: five of eight water tokens enter soil on the pervious side, while seven of eight reach the paved-side surface outlet.','Eight equal-volume tokens per side illustrate a chosen budget, not field-calibrated runoff fractions; retained subsurface water remains visible after the storm.','https://www.usgs.gov/water-science-school/science/impervious-surfaces-and-flooding',['stormwater','infiltration','urban-hydrology']);
 let scene=line(70,12,70,129,'stroke="#476b62" stroke-dasharray="2 4"');let css='';
 for(let side=0;side<2;side++){
  const left=8+side*68;scene+=path(`M${left} 67L${left+48} ${67+48*16/52}V123H${left}Z`,'fill="#3b3528"')+dots(left+2,87,44,33,28)+line(left+(side?9:0),67+(side?9*16/52:0),left+48,67+48*16/52,`stroke="${side?'#a1a9a7':'#91b86a'}" stroke-width="${side?5:3}"`)+path(`M${left+48} 84V123H${left+60}V84`,'fill="#183847" stroke="#75a9b9"');
  if(side)scene+=line(left,67,left+8,67+8*16/52,'stroke="#91b86a" stroke-width="3"');
  if(!side)scene+=range(5,j=>path(`M${left+5+j*9} ${68+j*2.7}l-2 -5m2 5 2 -6`,'stroke="#a6c77b" fill="none"'));
  for(let j=0;j<8;j++){
   const x=left+5+j*5.5,ground=67+(x-left)*16/52,infiltrate=side?j===0:j<5;
   const f=t=>{const u=clamp((t-j*.018)/.62);if(u<.34)return[x,25+(ground-(infiltrate?0:5)-25)*u/.34];if(infiltrate)return[x,ground+(19+j%3*5)*smooth((u-.34)/.35)];if(u<.72){const xx=x+(left+54-x)*smooth((u-.34)/.38);return[xx,67+(xx-left)*16/52-5];}return[left+54,78.615+(117-(j-(side?1:5))*4-78.615)*smooth((u-.72)/.28)];};
   scene+=circle(0,0,1.7,`class="rain${side}${j}" fill="#85d6ef" transform="translate(${f(.75).map(n).join(' ')})"`);css+=move(`rain${side}${j}`,f)+opacity(`rain${side}${j}`,t=>smooth(t/.06)*(1-smooth((t-.9)/.1)));
  }
 }
 emit(s,scene,css);
}
{
 const s=subject('S067','ice-albedo-feedback','Ice-Albedo Feedback',climate,'Loss of reflective ice can increase absorbed sunlight and promote further warming and ice loss.','The same incoming solar rays meet a retreating ice edge: more rays terminate as heat in dark water and fewer return upward as reflection.','Six equal incoming energy packets use illustrative ice and water reflection choices; a staged forced retreat explains positive feedback without a climate-rate prediction.','https://nsidc.org/sea-ice-today/analyses/melt-onset-earlier-normal',['sea-ice','reflectivity','positive-feedback']);
 const edge=t=>98-48*smooth((t-.1)/.65),ic=t=>`M12 76H${n(edge(t))}L${n(edge(t)-3)} 87H12Z`;
 let scene=rect(10,76,120,49,'fill="#14394a"')+path(ic(.5),'class="ice" fill="#c9e7df" stroke="#f2f1d3"')+line(10,76,130,76,'stroke="#779ea7"')+circle(118,21,9,'fill="#efd086"')+range(8,i=>{let a=i*tau/8;return line(118+12*Math.cos(a),21+12*Math.sin(a),118+16*Math.cos(a),21+16*Math.sin(a),'stroke="#efd086"');});
 let css=morph('ice',ic)+opacity('episode',t=>1-smooth((t-.93)/.07));
 scene='<g class="episode">'+scene;
 for(let j=0;j<6;j++){
  const x=22+j*18;scene+=line(x,36,x,69,'stroke="#efd086" stroke-width="1.6"')+arrow(x,66,90,'#efd086');
  scene+=path(`M${x} 74L${x-10} 40`, `class="reflect${j}" fill="none" stroke="#d5f2ed" stroke-width="2" opacity="${x<edge(.5)?1:0}"`)+circle(x,94,7,`class="heat${j}" fill="#e99760" opacity="${x<edge(.5)?.06:.8}"`);
  css+=opacity(`reflect${j}`,t=>x<edge(t)?1:0)+opacity(`heat${j}`,t=>x<edge(t)?.06:.8);
 }
 scene+='</g>';emit(s,scene,css);
}
{
 const s=subject('S068','ice-shelf-buttressing','Ice-Shelf Buttressing',climate,'A floating ice shelf can restrain grounded ice flow through lateral contact and other resistive stresses.','A confined shelf loses its margin-contacting front section; upstream ice markers then advance faster past the grounding line into the remaining shelf.','A plan-view pinned-shelf example shows removal of lateral restraint, not direct sea-level rise from melting floating ice or a universal response of every shelf.','https://www.bas.ac.uk/data/our-data/publication/ice-shelf-buttressing-and-the-stability-of-marine-ice-sheets/',['ice-dynamics','grounding-line','lateral-restraint']);
 let scene=rect(9,20,122,106,'fill="#123944"')+path('M9 35L43 41 59 49V93L40 103 9 109Z','fill="#6a7663"')+path('M12 53L58 53V89H12Z','fill="#a0c7c6"')+path('M58 48H94V94H58Z','fill="#cee5dd"')+path('M94 44H119V98H94Z','class="breakaway" fill="#bddde0" stroke="#d6f0e9"')+path('M57 39V82','stroke="#e0b981" stroke-width="1.7" stroke-dasharray="3 3"')+path('M71 29H123V44H85ZM71 112H123V98H85Z','fill="#596f63"')+range(7,i=>line(15+i*10,55,17+i*10,86,'stroke="#82afb3" stroke-width=".7"'))+path('M94 45L96 54 92 62 96 69 93 79 96 90 94 97','class="crack" fill="none" stroke="#315d70" stroke-width="1.3"');
 let css=move('breakaway',t=>[34*smooth((t-.35)/.3),0])+opacity('breakaway',t=>1-smooth((t-.65)/.2))+opacity('crack',t=>smooth((t-.2)/.15)*(1-smooth((t-.4)/.1)));
 const travel=t=>t<.4?35*t:14+90*(t-.4);
 for(let j=0;j<4;j++){const f=t=>[14+(j*20+travel(t))%80,62+(j%2)*17];scene+=path('M-2 -3L2 0 -2 3',`class="iceflow${j}" fill="none" stroke="#325d71" stroke-width="2" transform="translate(${f(.5).map(n).join(' ')})"`);css+=move(`iceflow${j}`,f)+opacity(`iceflow${j}`,t=>{const p=(j*20+travel(t))%80;return Math.min(1,p/4,(80-p)/4);});}
 scene+='<g class="restraint">'+arrow(107,47,90,'#cbb680')+arrow(107,95,-90,'#cbb680')+'</g>';css+=opacity('restraint',t=>1-smooth((t-.35)/.15));css+=`@media(prefers-reduced-motion:reduce){.breakaway{transform:translate(12px,0)}.crack{opacity:0}}`;
 emit(s,scene,css);
}
{
 const s=subject('S069','thermokarst-thaw-slump','Thermokarst Thaw Slump',climate,'Melting ground ice can undermine an ice-rich slope and cause a retreating thaw headwall and downslope sediment movement.','Three turf blocks lose support after their underlying ice lenses thin, then descend onto a muddy apron as the exposed headwall retreats upslope.','A finite thaw episode tracks the same soil blocks and exported meltwater; this differs from a dry landslide and does not conserve soil volume by replacing melted ice.','https://pubs.usgs.gov/of/2013/1161/pdf/ofr20131161.pdf',['permafrost','ground-ice','slope-failure']);
 const support=x=>72.5+.35*x;
 const retreat=t=>[0,1,2].reduce((sum,j)=>sum+16*smooth((t-(.08+j*.22)-.11)/.08),0);
 const terrain=t=>{const wall=65-retreat(t);return `M10 49H${n(wall)}V${n(support(wall))}L130 118V127H10Z`;};
 let scene=path(terrain(.85),'class="ground" fill="#493d2b"')+path('M17 78.45L130 118V127H17Z','fill="#725743"')+dots(12,121,116,5,24)+path('M10 49H17','class="turfEdge" stroke="#99b676" stroke-width="3"');
 let css=morph('ground',terrain)+morph('turfEdge',t=>`M10 49H${n(65-retreat(t))}`);
 for(let j=0;j<3;j++){
  const angle=Math.atan((1+12*.35)/(12-.35)), x=56-j*16,start=.08+j*.22,drop=t=>smooth((t-start-.19)/.19),melt=t=>smooth((t-start)/.13),dest=114-j*24;
  const lens=t=>`M${x-6} 64Q${x} ${n(53+11*melt(t))} ${x+7} 64Q${x} ${n(77-13*melt(t))} ${x-6} 64Z`;
  scene+=path(lens(.9),`class="lens${j}" fill="#b6dfe3"`)+`<g class="turf${j}" transform="translate(${dest} ${n(support(dest)-14)})">`+path('M-7 0H7L6 13-6 14Z','fill="#816b4a" stroke="#40392a"')+path('M-7 0H7','stroke="#a2c37a" stroke-width="3"')+'</g>';
  css+=morph(`lens${j}`,lens)+move(`turf${j}`,t=>[x+(dest-x)*drop(t),49+(support(dest)-13.5*(Math.cos(angle)+.35*Math.sin(angle))-49)*drop(t),angle*180/Math.PI*drop(t)]);
  scene+=path(`M${x+7} 66L${x+9} ${n(support(x+9)-2)}L126 115`,`class="meltwater${j}" fill="none" stroke="#7bc7cf" stroke-width="1.3" stroke-dasharray="3 4" opacity="0"`);
  css+=opacity(`meltwater${j}`,t=>smooth((t-start-.16)/.07)*(1-smooth((t-start-.35)/.08)));
 }
 scene='<g class="thawEpisode">'+scene+'</g>';css+=opacity('thawEpisode',t=>1-smooth((t-.94)/.06));emit(s,scene,css);
}
{
 const s=subject('S070','el-nino-southern-oscillation','El Nino-Southern Oscillation',climate,'ENSO is coupled tropical Pacific variability involving trade winds, ocean temperatures and atmospheric convection.','Westward trades weaken before the eastern thermocline deepens, warm water expands eastward and convection shifts from the western Pacific.','This normal-to-warm-phase explanatory transition exaggerates subsurface depth changes; its repeating presentation is not an ENSO forecast or a regular climate clock.','https://www.pmel.noaa.gov/elnino/what-is-el-nino',['tropical-pacific','ocean-atmosphere-coupling']);
 const event=t=>smooth((t-.22)/.45),depth=(x,t)=>99-(x-12)*.35+event(t)*(x-12)*.27;
 const therm=t=>curve(sample(u=>[12+116*u,depth(12+116*u,t)]))+'L128 52H12Z';
 let scene=rect(10,52,120,75,'fill="#143e59"')+path(therm(.6),'class="warmLayer" fill="#bd7950" opacity=".7"')+line(10,52,130,52,'stroke="#9ccbd3"')+path('M9 42L17 49V126H9ZM131 43L125 52V126H131Z','fill="#698264"')+range(3,i=>arrow(37+35*i,28,180,'#d9c793'))+`<g class="cloud" transform="translate(${n(31+65*event(.6))} 40)">`+range(4,j=>circle(-12+j*8,-(j%2)*3,6,'fill="#d1e0d8"'))+path('M-7 8L-10 15M2 9L0 16M11 8L9 15','stroke="#7dcedd"')+'</g>';
 let css=morph('warmLayer',therm)+move('cloud',t=>[31+65*event(t),40]);
 scene+=path('M18 35H113','class="trades" fill="none" stroke="#eddbad" stroke-width="2" stroke-dasharray="7 10" opacity=".25"');css+=`.trades{animation:trades 16s linear infinite;} `+keys('trades',t=>`stroke-dashoffset:${n(80*t)};opacity:${n(1-.75*smooth(t/.24))};`);
 scene+='<g class="upwell" opacity="'+n(1-.85*event(.6))+'">'+path('M114 104Q120 78 112 64','fill="none" stroke="#6fcbdb" stroke-width="2"')+arrow(112,68,-100,'#6fcbdb')+'</g>';css+=opacity('upwell',t=>1-.85*event(t));
 scene='<g class="ensoEpisode">'+scene+'</g>';css+=opacity('ensoEpisode',t=>1-smooth((t-.94)/.06));emit(s,scene,css);
}
{
 const s=subject('S071','atmospheric-river','Atmospheric River',climate,'An atmospheric river is a long narrow corridor of concentrated water-vapor transport.','A coherent moisture corridor crosses the ocean toward a coastline, where landfall and coastal mountains concentrate precipitation.','An illustrative map separates horizontal vapor transport from landfall rain; the corridor is gaseous moisture, not a liquid channel or a complete storm forecast.','https://www.nesdis.noaa.gov/about/k-12-education/atmosphere/what-atmospheric-river',['integrated-vapor-transport','landfall','precipitation']);
 const coast='M106 8L102 25 110 43 103 59 112 73 107 91 117 113 119 132H132V8Z';
 let scene=rect(8,8,124,124,'fill="#10323f"')+range(4,j=>path(`M12 ${26+j*26}Q42 ${14+j*26} 73 ${28+j*26}`,'fill="none" stroke="#264a54"'))+path(coast,'fill="#4b6547" stroke="#87a076"')+path('M12 109C39 110 46 76 72 69S90 59 109 48','fill="none" stroke="#68bbb8" stroke-width="22" opacity=".2"')+path('M12 109C39 110 46 76 72 69S90 59 109 48','class="vapor" fill="none" stroke="#aadbd0" stroke-width="7" stroke-dasharray="8 6" opacity=".6"')+range(5,j=>path(`M${111+j%2*6} ${22+j*18}l4 -8 5 10Z`,'fill="#9aa78a"'));
 let css='.vapor{animation:transport 16s linear infinite;}@keyframes transport{to{stroke-dashoffset:-112}}';
 for(let j=0;j<7;j++){scene+=line(106+j%3*5,42+j*5,104+j%3*5,47+j*5,`class="landfall${j}" stroke="#98d6ea" stroke-width="1.8"`);css+=move(`landfall${j}`,t=>[0,3*Math.sin(tau*(t*4+j/7))])+opacity(`landfall${j}`,t=>.35+.65*Math.sin(Math.PI*((t*4+j/7)%1)));}
 emit(s,scene,css);
}
{
 const s=subject('S072','orographic-rain-shadow','Orographic Rain Shadow',climate,'A mountain can promote precipitation on its windward side while descending air warms and dries on its lee side.','One moist air parcel rises and expands over a mountain, forms cloud and loses water as rain, then descends smaller and clearer on the lee side.','The parcel radius varies schematically with elevation, and cloud opacity follows condensation then evaporation; lee air retains vapor and need not be universally rainless.','https://www.weather.gov/media/ctp/AdvancedWinterWeatherCourse.pdf',['adiabatic-lifting','condensation','lee-warming']);
 const f=t=>[13+114*t,74-46*Math.sin(Math.PI*t)],r=t=>5+5*Math.sin(Math.PI*t);
 let scene=path('M8 123V98L32 93 70 46 104 102 132 112V123Z','fill="#5d5841" stroke="#aaa37d"')+path('M8 99L32 93 70 46 56 74 40 108 8 115Z','fill="#516b42"')+path('M59 60L70 46 80 65 72 61 66 64Z','fill="#d3d8c4"')+range(4,j=>path(`M${15+j*8} ${104-j*2}v-9m-3 5 3 -7 3 7`,'fill="none" stroke="#88a565"'))+path(curve(sample(f)),'fill="none" stroke="#718c82" stroke-dasharray="2 4"')+circle(0,0,r(.5),'class="parcel" fill="none" stroke="#c6e4dc" transform="translate(70 28)"')+arrow(20,80,-28,'#9dd8d6')+arrow(119,84,25,'#e5ba76');
 let css=move('parcel',f)+`.parcel{animation:parcel 16s linear infinite;} `+keys('parcel',t=>`r:${n(r(t))}px;stroke:${t<.6?'#c6e4dc':'#dda87a'};opacity:${n(Math.min(1,t*18,(1-t)*18))};`);
 scene+=circle(0,0,7,'class="condensate" fill="#c6e4dc" transform="translate(70 28)"');
 css+=move('condensate',f)+opacity('condensate',t=>smooth((t-.2)/.1)*(1-smooth((t-.55)/.12)));
 for(let j=0;j<3;j++){const release=.28+j*.08,p=f(release),yy=p[1]+r(release)+2,endX=p[0]+5,ground=93-(endX-32)*47/38;const fall=t=>{const u=clamp((t-release)/.12);return[p[0]+5*u,yy+(ground-yy)*u];};scene+=circle(0,0,1.5,`class="rainDrop${j}" fill="#8ecfe4" opacity="0"`);css+=move(`rainDrop${j}`,fall)+opacity(`rainDrop${j}`,t=>t>=release&&t<=release+.12?1:0);}

 emit(s,scene,css);
}
{
 const s=subject('S116','frost-heave-ice-lens','Frost Heave by Ice-Lens Growth','geology','Frost heave can result when migrating groundwater freezes into subsurface ice lenses that lift overlying soil.','Water rises through pores into a growing ice lens while the supported turf layer lifts by the added lens thickness and the lower water store falls.','The illustrative frost-susceptible soil is fed by external water migration; heave is not attributed merely to local water expanding on freezing.','https://www.publications.usace.army.mil/Portals/76/Publications/EngineerManuals/EM_1110-1-1905.pdf',['ice-segregation','frost-susceptible-soil','groundwater']);
 const grow=t=>12*smooth((t-.1)/.65),lens=t=>`M20 82H120L116 ${n(82-grow(t))}H24Z`;
 let scene=rect(15,82,110,43,'fill="#423a2a"')+dots(17,87,106,35,65)+path(lens(.65),'class="frostLens" fill="#a6dce2" stroke="#d4eff0"')+`<g class="overburden" transform="translate(0 ${n(-grow(.65))})">`+rect(15,48,110,34,'fill="#65543a"')+dots(17,54,106,25,35)+line(15,48,125,48,'stroke="#a7be7b" stroke-width="4"')+range(7,j=>path(`M${23+j*14} 47l-2 -5m2 5 2 -6`,'fill="none" stroke="#b9ce8a"'))+'</g>'+path(`M15 ${n(109+.8*grow(.65))}H125V125H15Z`,'class="store" fill="#589bac" opacity=".6"')+range(3,j=>path(`M${40+j*30} 17v15m-5 -11 10 8m-10 0 10 -8`,'stroke="#badde0" stroke-width="1"'));
 let css=morph('frostLens',lens)+move('overburden',t=>[0,-grow(t)])+morph('store',t=>`M15 ${n(109+.8*grow(t))}H125V125H15Z`);
 for(let j=0;j<6;j++){const f=t=>{let u=clamp((t-.12-j*.075)/.22);return[30+j*16,114-32*u];};scene+=circle(0,0,1.8,`class="feed${j}" fill="#8ed4e4" opacity="0"`);css+=move(`feed${j}`,f)+opacity(`feed${j}`,t=>t>.12+j*.075&&t<.34+j*.075?1:0);}
 scene='<g class="freezeEpisode">'+scene+'</g>';css+=opacity('freezeEpisode',t=>1-smooth((t-.93)/.07));emit(s,scene,css);
}
saveShard('resumed-earth',subjects);
