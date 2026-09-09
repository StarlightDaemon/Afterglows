// Frost Heave by Ice-Lens Growth. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptFrostHeaveIceLens extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    if (!this.shadowRoot.firstChild) this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          height: 100%;
          overflow: hidden;
          color: #70edb1;
          background: #07120f;
        }
        svg {
          display: block;
          width: 100%;
          height: 100%;
        }
        .ink {
          fill: none;
          stroke: currentColor;
          stroke-width: 1.7;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .muted {
          stroke: #375b51;
        }
        .paper {
          fill: #07120f;
        }
        .solid {
          fill: currentColor;
        }
        .warm {
          fill: #f3c977;
        }
        .cool {
          fill: #77c9ef;
        }
        .rose {
          fill: #ed8eab;
        }
        .frostLens {
          animation:frostLens 16s linear infinite;
        }
        .overburden {
          animation:overburden 16s linear infinite;
        }
        .store {
          animation:store 16s linear infinite;
        }
        .feed0 {
          animation:feed0 16s linear infinite;
        }
        .feed0 {
          animation:feed0 16s linear infinite;
        }
        .feed1 {
          animation:feed1 16s linear infinite;
        }
        .feed1 {
          animation:feed1 16s linear infinite;
        }
        .feed2 {
          animation:feed2 16s linear infinite;
        }
        .feed2 {
          animation:feed2 16s linear infinite;
        }
        .feed3 {
          animation:feed3 16s linear infinite;
        }
        .feed3 {
          animation:feed3 16s linear infinite;
        }
        .feed4 {
          animation:feed4 16s linear infinite;
        }
        .feed4 {
          animation:feed4 16s linear infinite;
        }
        .feed5 {
          animation:feed5 16s linear infinite;
        }
        .feed5 {
          animation:feed5 16s linear infinite;
        }
        .freezeEpisode {
          animation:freezeEpisode 16s linear infinite;
        }
        @keyframes frostLens {
          0% {
            d:path('M20 82H120L116 82H24Z');
          }
          2.083% {
            d:path('M20 82H120L116 82H24Z');
          }
          4.167% {
            d:path('M20 82H120L116 82H24Z');
          }
          6.25% {
            d:path('M20 82H120L116 82H24Z');
          }
          8.333% {
            d:path('M20 82H120L116 82H24Z');
          }
          10.417% {
            d:path('M20 82H120L116 81.999H24Z');
          }
          12.5% {
            d:path('M20 82H120L116 81.948H24Z');
          }
          14.583% {
            d:path('M20 82H120L116 81.829H24Z');
          }
          16.667% {
            d:path('M20 82H120L116 81.647H24Z');
          }
          18.75% {
            d:path('M20 82H120L116 81.406H24Z');
          }
          20.833% {
            d:path('M20 82H120L116 81.111H24Z');
          }
          22.917% {
            d:path('M20 82H120L116 80.767H24Z');
          }
          25% {
            d:path('M20 82H120L116 80.378H24Z');
          }
          27.083% {
            d:path('M20 82H120L116 79.949H24Z');
          }
          29.167% {
            d:path('M20 82H120L116 79.485H24Z');
          }
          31.25% {
            d:path('M20 82H120L116 78.991H24Z');
          }
          33.333% {
            d:path('M20 82H120L116 78.471H24Z');
          }
          35.417% {
            d:path('M20 82H120L116 77.93H24Z');
          }
          37.5% {
            d:path('M20 82H120L116 77.374H24Z');
          }
          39.583% {
            d:path('M20 82H120L116 76.806H24Z');
          }
          41.667% {
            d:path('M20 82H120L116 76.231H24Z');
          }
          43.75% {
            d:path('M20 82H120L116 75.654H24Z');
          }
          45.833% {
            d:path('M20 82H120L116 75.08H24Z');
          }
          47.917% {
            d:path('M20 82H120L116 74.514H24Z');
          }
          50% {
            d:path('M20 82H120L116 73.96H24Z');
          }
          52.083% {
            d:path('M20 82H120L116 73.423H24Z');
          }
          54.167% {
            d:path('M20 82H120L116 72.908H24Z');
          }
          56.25% {
            d:path('M20 82H120L116 72.419H24Z');
          }
          58.333% {
            d:path('M20 82H120L116 71.962H24Z');
          }
          60.417% {
            d:path('M20 82H120L116 71.541H24Z');
          }
          62.5% {
            d:path('M20 82H120L116 71.161H24Z');
          }
          64.583% {
            d:path('M20 82H120L116 70.826H24Z');
          }
          66.667% {
            d:path('M20 82H120L116 70.541H24Z');
          }
          68.75% {
            d:path('M20 82H120L116 70.312H24Z');
          }
          70.833% {
            d:path('M20 82H120L116 70.142H24Z');
          }
          72.917% {
            d:path('M20 82H120L116 70.036H24Z');
          }
          75% {
            d:path('M20 82H120L116 70H24Z');
          }
          77.083% {
            d:path('M20 82H120L116 70H24Z');
          }
          79.167% {
            d:path('M20 82H120L116 70H24Z');
          }
          81.25% {
            d:path('M20 82H120L116 70H24Z');
          }
          83.333% {
            d:path('M20 82H120L116 70H24Z');
          }
          85.417% {
            d:path('M20 82H120L116 70H24Z');
          }
          87.5% {
            d:path('M20 82H120L116 70H24Z');
          }
          89.583% {
            d:path('M20 82H120L116 70H24Z');
          }
          91.667% {
            d:path('M20 82H120L116 70H24Z');
          }
          93.75% {
            d:path('M20 82H120L116 70H24Z');
          }
          95.833% {
            d:path('M20 82H120L116 70H24Z');
          }
          97.917% {
            d:path('M20 82H120L116 70H24Z');
          }
          100% {
            d:path('M20 82H120L116 70H24Z');
          }
        }
        @keyframes overburden {
          0% {
            transform:translate(0px,0px);
          }
          2.083% {
            transform:translate(0px,0px);
          }
          4.167% {
            transform:translate(0px,0px);
          }
          6.25% {
            transform:translate(0px,0px);
          }
          8.333% {
            transform:translate(0px,0px);
          }
          10.417% {
            transform:translate(0px,-0.001px);
          }
          12.5% {
            transform:translate(0px,-0.052px);
          }
          14.583% {
            transform:translate(0px,-0.171px);
          }
          16.667% {
            transform:translate(0px,-0.353px);
          }
          18.75% {
            transform:translate(0px,-0.594px);
          }
          20.833% {
            transform:translate(0px,-0.889px);
          }
          22.917% {
            transform:translate(0px,-1.233px);
          }
          25% {
            transform:translate(0px,-1.622px);
          }
          27.083% {
            transform:translate(0px,-2.051px);
          }
          29.167% {
            transform:translate(0px,-2.515px);
          }
          31.25% {
            transform:translate(0px,-3.009px);
          }
          33.333% {
            transform:translate(0px,-3.529px);
          }
          35.417% {
            transform:translate(0px,-4.07px);
          }
          37.5% {
            transform:translate(0px,-4.626px);
          }
          39.583% {
            transform:translate(0px,-5.194px);
          }
          41.667% {
            transform:translate(0px,-5.769px);
          }
          43.75% {
            transform:translate(0px,-6.346px);
          }
          45.833% {
            transform:translate(0px,-6.92px);
          }
          47.917% {
            transform:translate(0px,-7.486px);
          }
          50% {
            transform:translate(0px,-8.04px);
          }
          52.083% {
            transform:translate(0px,-8.577px);
          }
          54.167% {
            transform:translate(0px,-9.092px);
          }
          56.25% {
            transform:translate(0px,-9.581px);
          }
          58.333% {
            transform:translate(0px,-10.038px);
          }
          60.417% {
            transform:translate(0px,-10.459px);
          }
          62.5% {
            transform:translate(0px,-10.839px);
          }
          64.583% {
            transform:translate(0px,-11.174px);
          }
          66.667% {
            transform:translate(0px,-11.459px);
          }
          68.75% {
            transform:translate(0px,-11.688px);
          }
          70.833% {
            transform:translate(0px,-11.858px);
          }
          72.917% {
            transform:translate(0px,-11.964px);
          }
          75% {
            transform:translate(0px,-12px);
          }
          77.083% {
            transform:translate(0px,-12px);
          }
          79.167% {
            transform:translate(0px,-12px);
          }
          81.25% {
            transform:translate(0px,-12px);
          }
          83.333% {
            transform:translate(0px,-12px);
          }
          85.417% {
            transform:translate(0px,-12px);
          }
          87.5% {
            transform:translate(0px,-12px);
          }
          89.583% {
            transform:translate(0px,-12px);
          }
          91.667% {
            transform:translate(0px,-12px);
          }
          93.75% {
            transform:translate(0px,-12px);
          }
          95.833% {
            transform:translate(0px,-12px);
          }
          97.917% {
            transform:translate(0px,-12px);
          }
          100% {
            transform:translate(0px,-12px);
          }
        }
        @keyframes store {
          0% {
            d:path('M15 109H125V125H15Z');
          }
          2.083% {
            d:path('M15 109H125V125H15Z');
          }
          4.167% {
            d:path('M15 109H125V125H15Z');
          }
          6.25% {
            d:path('M15 109H125V125H15Z');
          }
          8.333% {
            d:path('M15 109H125V125H15Z');
          }
          10.417% {
            d:path('M15 109.001H125V125H15Z');
          }
          12.5% {
            d:path('M15 109.042H125V125H15Z');
          }
          14.583% {
            d:path('M15 109.136H125V125H15Z');
          }
          16.667% {
            d:path('M15 109.282H125V125H15Z');
          }
          18.75% {
            d:path('M15 109.475H125V125H15Z');
          }
          20.833% {
            d:path('M15 109.711H125V125H15Z');
          }
          22.917% {
            d:path('M15 109.987H125V125H15Z');
          }
          25% {
            d:path('M15 110.298H125V125H15Z');
          }
          27.083% {
            d:path('M15 110.641H125V125H15Z');
          }
          29.167% {
            d:path('M15 111.012H125V125H15Z');
          }
          31.25% {
            d:path('M15 111.407H125V125H15Z');
          }
          33.333% {
            d:path('M15 111.823H125V125H15Z');
          }
          35.417% {
            d:path('M15 112.256H125V125H15Z');
          }
          37.5% {
            d:path('M15 112.701H125V125H15Z');
          }
          39.583% {
            d:path('M15 113.156H125V125H15Z');
          }
          41.667% {
            d:path('M15 113.615H125V125H15Z');
          }
          43.75% {
            d:path('M15 114.077H125V125H15Z');
          }
          45.833% {
            d:path('M15 114.536H125V125H15Z');
          }
          47.917% {
            d:path('M15 114.989H125V125H15Z');
          }
          50% {
            d:path('M15 115.432H125V125H15Z');
          }
          52.083% {
            d:path('M15 115.862H125V125H15Z');
          }
          54.167% {
            d:path('M15 116.274H125V125H15Z');
          }
          56.25% {
            d:path('M15 116.664H125V125H15Z');
          }
          58.333% {
            d:path('M15 117.03H125V125H15Z');
          }
          60.417% {
            d:path('M15 117.367H125V125H15Z');
          }
          62.5% {
            d:path('M15 117.671H125V125H15Z');
          }
          64.583% {
            d:path('M15 117.939H125V125H15Z');
          }
          66.667% {
            d:path('M15 118.167H125V125H15Z');
          }
          68.75% {
            d:path('M15 118.351H125V125H15Z');
          }
          70.833% {
            d:path('M15 118.487H125V125H15Z');
          }
          72.917% {
            d:path('M15 118.571H125V125H15Z');
          }
          75% {
            d:path('M15 118.6H125V125H15Z');
          }
          77.083% {
            d:path('M15 118.6H125V125H15Z');
          }
          79.167% {
            d:path('M15 118.6H125V125H15Z');
          }
          81.25% {
            d:path('M15 118.6H125V125H15Z');
          }
          83.333% {
            d:path('M15 118.6H125V125H15Z');
          }
          85.417% {
            d:path('M15 118.6H125V125H15Z');
          }
          87.5% {
            d:path('M15 118.6H125V125H15Z');
          }
          89.583% {
            d:path('M15 118.6H125V125H15Z');
          }
          91.667% {
            d:path('M15 118.6H125V125H15Z');
          }
          93.75% {
            d:path('M15 118.6H125V125H15Z');
          }
          95.833% {
            d:path('M15 118.6H125V125H15Z');
          }
          97.917% {
            d:path('M15 118.6H125V125H15Z');
          }
          100% {
            d:path('M15 118.6H125V125H15Z');
          }
        }
        @keyframes feed0 {
          0% {
            transform:translate(30px,114px);
            opacity:0;
          }
          2.083% {
            transform:translate(30px,114px);
            opacity:0;
          }
          4.167% {
            transform:translate(30px,114px);
            opacity:0;
          }
          6.25% {
            transform:translate(30px,114px);
            opacity:0;
          }
          8.333% {
            transform:translate(30px,114px);
            opacity:0;
          }
          10.417% {
            transform:translate(30px,114px);
            opacity:0;
          }
          12.5% {
            transform:translate(30px,113.273px);
            opacity:1;
          }
          14.583% {
            transform:translate(30px,110.242px);
            opacity:1;
          }
          16.667% {
            transform:translate(30px,107.212px);
            opacity:1;
          }
          18.75% {
            transform:translate(30px,104.182px);
            opacity:1;
          }
          20.833% {
            transform:translate(30px,101.152px);
            opacity:1;
          }
          22.917% {
            transform:translate(30px,98.121px);
            opacity:1;
          }
          25% {
            transform:translate(30px,95.091px);
            opacity:1;
          }
          27.083% {
            transform:translate(30px,92.061px);
            opacity:1;
          }
          29.167% {
            transform:translate(30px,89.03px);
            opacity:1;
          }
          31.25% {
            transform:translate(30px,86px);
            opacity:1;
          }
          33.333% {
            transform:translate(30px,82.97px);
            opacity:1;
          }
          35.417% {
            transform:translate(30px,82px);
            opacity:0;
          }
          37.5% {
            transform:translate(30px,82px);
            opacity:0;
          }
          39.583% {
            transform:translate(30px,82px);
            opacity:0;
          }
          41.667% {
            transform:translate(30px,82px);
            opacity:0;
          }
          43.75% {
            transform:translate(30px,82px);
            opacity:0;
          }
          45.833% {
            transform:translate(30px,82px);
            opacity:0;
          }
          47.917% {
            transform:translate(30px,82px);
            opacity:0;
          }
          50% {
            transform:translate(30px,82px);
            opacity:0;
          }
          52.083% {
            transform:translate(30px,82px);
            opacity:0;
          }
          54.167% {
            transform:translate(30px,82px);
            opacity:0;
          }
          56.25% {
            transform:translate(30px,82px);
            opacity:0;
          }
          58.333% {
            transform:translate(30px,82px);
            opacity:0;
          }
          60.417% {
            transform:translate(30px,82px);
            opacity:0;
          }
          62.5% {
            transform:translate(30px,82px);
            opacity:0;
          }
          64.583% {
            transform:translate(30px,82px);
            opacity:0;
          }
          66.667% {
            transform:translate(30px,82px);
            opacity:0;
          }
          68.75% {
            transform:translate(30px,82px);
            opacity:0;
          }
          70.833% {
            transform:translate(30px,82px);
            opacity:0;
          }
          72.917% {
            transform:translate(30px,82px);
            opacity:0;
          }
          75% {
            transform:translate(30px,82px);
            opacity:0;
          }
          77.083% {
            transform:translate(30px,82px);
            opacity:0;
          }
          79.167% {
            transform:translate(30px,82px);
            opacity:0;
          }
          81.25% {
            transform:translate(30px,82px);
            opacity:0;
          }
          83.333% {
            transform:translate(30px,82px);
            opacity:0;
          }
          85.417% {
            transform:translate(30px,82px);
            opacity:0;
          }
          87.5% {
            transform:translate(30px,82px);
            opacity:0;
          }
          89.583% {
            transform:translate(30px,82px);
            opacity:0;
          }
          91.667% {
            transform:translate(30px,82px);
            opacity:0;
          }
          93.75% {
            transform:translate(30px,82px);
            opacity:0;
          }
          95.833% {
            transform:translate(30px,82px);
            opacity:0;
          }
          97.917% {
            transform:translate(30px,82px);
            opacity:0;
          }
          100% {
            transform:translate(30px,82px);
            opacity:0;
          }
        }
        @keyframes feed1 {
          0% {
            transform:translate(46px,114px);
            opacity:0;
          }
          2.083% {
            transform:translate(46px,114px);
            opacity:0;
          }
          4.167% {
            transform:translate(46px,114px);
            opacity:0;
          }
          6.25% {
            transform:translate(46px,114px);
            opacity:0;
          }
          8.333% {
            transform:translate(46px,114px);
            opacity:0;
          }
          10.417% {
            transform:translate(46px,114px);
            opacity:0;
          }
          12.5% {
            transform:translate(46px,114px);
            opacity:0;
          }
          14.583% {
            transform:translate(46px,114px);
            opacity:0;
          }
          16.667% {
            transform:translate(46px,114px);
            opacity:0;
          }
          18.75% {
            transform:translate(46px,114px);
            opacity:0;
          }
          20.833% {
            transform:translate(46px,112.061px);
            opacity:1;
          }
          22.917% {
            transform:translate(46px,109.03px);
            opacity:1;
          }
          25% {
            transform:translate(46px,106px);
            opacity:1;
          }
          27.083% {
            transform:translate(46px,102.97px);
            opacity:1;
          }
          29.167% {
            transform:translate(46px,99.939px);
            opacity:1;
          }
          31.25% {
            transform:translate(46px,96.909px);
            opacity:1;
          }
          33.333% {
            transform:translate(46px,93.879px);
            opacity:1;
          }
          35.417% {
            transform:translate(46px,90.848px);
            opacity:1;
          }
          37.5% {
            transform:translate(46px,87.818px);
            opacity:1;
          }
          39.583% {
            transform:translate(46px,84.788px);
            opacity:1;
          }
          41.667% {
            transform:translate(46px,82px);
            opacity:0;
          }
          43.75% {
            transform:translate(46px,82px);
            opacity:0;
          }
          45.833% {
            transform:translate(46px,82px);
            opacity:0;
          }
          47.917% {
            transform:translate(46px,82px);
            opacity:0;
          }
          50% {
            transform:translate(46px,82px);
            opacity:0;
          }
          52.083% {
            transform:translate(46px,82px);
            opacity:0;
          }
          54.167% {
            transform:translate(46px,82px);
            opacity:0;
          }
          56.25% {
            transform:translate(46px,82px);
            opacity:0;
          }
          58.333% {
            transform:translate(46px,82px);
            opacity:0;
          }
          60.417% {
            transform:translate(46px,82px);
            opacity:0;
          }
          62.5% {
            transform:translate(46px,82px);
            opacity:0;
          }
          64.583% {
            transform:translate(46px,82px);
            opacity:0;
          }
          66.667% {
            transform:translate(46px,82px);
            opacity:0;
          }
          68.75% {
            transform:translate(46px,82px);
            opacity:0;
          }
          70.833% {
            transform:translate(46px,82px);
            opacity:0;
          }
          72.917% {
            transform:translate(46px,82px);
            opacity:0;
          }
          75% {
            transform:translate(46px,82px);
            opacity:0;
          }
          77.083% {
            transform:translate(46px,82px);
            opacity:0;
          }
          79.167% {
            transform:translate(46px,82px);
            opacity:0;
          }
          81.25% {
            transform:translate(46px,82px);
            opacity:0;
          }
          83.333% {
            transform:translate(46px,82px);
            opacity:0;
          }
          85.417% {
            transform:translate(46px,82px);
            opacity:0;
          }
          87.5% {
            transform:translate(46px,82px);
            opacity:0;
          }
          89.583% {
            transform:translate(46px,82px);
            opacity:0;
          }
          91.667% {
            transform:translate(46px,82px);
            opacity:0;
          }
          93.75% {
            transform:translate(46px,82px);
            opacity:0;
          }
          95.833% {
            transform:translate(46px,82px);
            opacity:0;
          }
          97.917% {
            transform:translate(46px,82px);
            opacity:0;
          }
          100% {
            transform:translate(46px,82px);
            opacity:0;
          }
        }
        @keyframes feed2 {
          0% {
            transform:translate(62px,114px);
            opacity:0;
          }
          2.083% {
            transform:translate(62px,114px);
            opacity:0;
          }
          4.167% {
            transform:translate(62px,114px);
            opacity:0;
          }
          6.25% {
            transform:translate(62px,114px);
            opacity:0;
          }
          8.333% {
            transform:translate(62px,114px);
            opacity:0;
          }
          10.417% {
            transform:translate(62px,114px);
            opacity:0;
          }
          12.5% {
            transform:translate(62px,114px);
            opacity:0;
          }
          14.583% {
            transform:translate(62px,114px);
            opacity:0;
          }
          16.667% {
            transform:translate(62px,114px);
            opacity:0;
          }
          18.75% {
            transform:translate(62px,114px);
            opacity:0;
          }
          20.833% {
            transform:translate(62px,114px);
            opacity:0;
          }
          22.917% {
            transform:translate(62px,114px);
            opacity:0;
          }
          25% {
            transform:translate(62px,114px);
            opacity:0;
          }
          27.083% {
            transform:translate(62px,113.879px);
            opacity:1;
          }
          29.167% {
            transform:translate(62px,110.848px);
            opacity:1;
          }
          31.25% {
            transform:translate(62px,107.818px);
            opacity:1;
          }
          33.333% {
            transform:translate(62px,104.788px);
            opacity:1;
          }
          35.417% {
            transform:translate(62px,101.758px);
            opacity:1;
          }
          37.5% {
            transform:translate(62px,98.727px);
            opacity:1;
          }
          39.583% {
            transform:translate(62px,95.697px);
            opacity:1;
          }
          41.667% {
            transform:translate(62px,92.667px);
            opacity:1;
          }
          43.75% {
            transform:translate(62px,89.636px);
            opacity:1;
          }
          45.833% {
            transform:translate(62px,86.606px);
            opacity:1;
          }
          47.917% {
            transform:translate(62px,83.576px);
            opacity:1;
          }
          50% {
            transform:translate(62px,82px);
            opacity:0;
          }
          52.083% {
            transform:translate(62px,82px);
            opacity:0;
          }
          54.167% {
            transform:translate(62px,82px);
            opacity:0;
          }
          56.25% {
            transform:translate(62px,82px);
            opacity:0;
          }
          58.333% {
            transform:translate(62px,82px);
            opacity:0;
          }
          60.417% {
            transform:translate(62px,82px);
            opacity:0;
          }
          62.5% {
            transform:translate(62px,82px);
            opacity:0;
          }
          64.583% {
            transform:translate(62px,82px);
            opacity:0;
          }
          66.667% {
            transform:translate(62px,82px);
            opacity:0;
          }
          68.75% {
            transform:translate(62px,82px);
            opacity:0;
          }
          70.833% {
            transform:translate(62px,82px);
            opacity:0;
          }
          72.917% {
            transform:translate(62px,82px);
            opacity:0;
          }
          75% {
            transform:translate(62px,82px);
            opacity:0;
          }
          77.083% {
            transform:translate(62px,82px);
            opacity:0;
          }
          79.167% {
            transform:translate(62px,82px);
            opacity:0;
          }
          81.25% {
            transform:translate(62px,82px);
            opacity:0;
          }
          83.333% {
            transform:translate(62px,82px);
            opacity:0;
          }
          85.417% {
            transform:translate(62px,82px);
            opacity:0;
          }
          87.5% {
            transform:translate(62px,82px);
            opacity:0;
          }
          89.583% {
            transform:translate(62px,82px);
            opacity:0;
          }
          91.667% {
            transform:translate(62px,82px);
            opacity:0;
          }
          93.75% {
            transform:translate(62px,82px);
            opacity:0;
          }
          95.833% {
            transform:translate(62px,82px);
            opacity:0;
          }
          97.917% {
            transform:translate(62px,82px);
            opacity:0;
          }
          100% {
            transform:translate(62px,82px);
            opacity:0;
          }
        }
        @keyframes feed3 {
          0% {
            transform:translate(78px,114px);
            opacity:0;
          }
          2.083% {
            transform:translate(78px,114px);
            opacity:0;
          }
          4.167% {
            transform:translate(78px,114px);
            opacity:0;
          }
          6.25% {
            transform:translate(78px,114px);
            opacity:0;
          }
          8.333% {
            transform:translate(78px,114px);
            opacity:0;
          }
          10.417% {
            transform:translate(78px,114px);
            opacity:0;
          }
          12.5% {
            transform:translate(78px,114px);
            opacity:0;
          }
          14.583% {
            transform:translate(78px,114px);
            opacity:0;
          }
          16.667% {
            transform:translate(78px,114px);
            opacity:0;
          }
          18.75% {
            transform:translate(78px,114px);
            opacity:0;
          }
          20.833% {
            transform:translate(78px,114px);
            opacity:0;
          }
          22.917% {
            transform:translate(78px,114px);
            opacity:0;
          }
          25% {
            transform:translate(78px,114px);
            opacity:0;
          }
          27.083% {
            transform:translate(78px,114px);
            opacity:0;
          }
          29.167% {
            transform:translate(78px,114px);
            opacity:0;
          }
          31.25% {
            transform:translate(78px,114px);
            opacity:0;
          }
          33.333% {
            transform:translate(78px,114px);
            opacity:0;
          }
          35.417% {
            transform:translate(78px,112.667px);
            opacity:1;
          }
          37.5% {
            transform:translate(78px,109.636px);
            opacity:1;
          }
          39.583% {
            transform:translate(78px,106.606px);
            opacity:1;
          }
          41.667% {
            transform:translate(78px,103.576px);
            opacity:1;
          }
          43.75% {
            transform:translate(78px,100.545px);
            opacity:1;
          }
          45.833% {
            transform:translate(78px,97.515px);
            opacity:1;
          }
          47.917% {
            transform:translate(78px,94.485px);
            opacity:1;
          }
          50% {
            transform:translate(78px,91.455px);
            opacity:1;
          }
          52.083% {
            transform:translate(78px,88.424px);
            opacity:1;
          }
          54.167% {
            transform:translate(78px,85.394px);
            opacity:1;
          }
          56.25% {
            transform:translate(78px,82.364px);
            opacity:1;
          }
          58.333% {
            transform:translate(78px,82px);
            opacity:0;
          }
          60.417% {
            transform:translate(78px,82px);
            opacity:0;
          }
          62.5% {
            transform:translate(78px,82px);
            opacity:0;
          }
          64.583% {
            transform:translate(78px,82px);
            opacity:0;
          }
          66.667% {
            transform:translate(78px,82px);
            opacity:0;
          }
          68.75% {
            transform:translate(78px,82px);
            opacity:0;
          }
          70.833% {
            transform:translate(78px,82px);
            opacity:0;
          }
          72.917% {
            transform:translate(78px,82px);
            opacity:0;
          }
          75% {
            transform:translate(78px,82px);
            opacity:0;
          }
          77.083% {
            transform:translate(78px,82px);
            opacity:0;
          }
          79.167% {
            transform:translate(78px,82px);
            opacity:0;
          }
          81.25% {
            transform:translate(78px,82px);
            opacity:0;
          }
          83.333% {
            transform:translate(78px,82px);
            opacity:0;
          }
          85.417% {
            transform:translate(78px,82px);
            opacity:0;
          }
          87.5% {
            transform:translate(78px,82px);
            opacity:0;
          }
          89.583% {
            transform:translate(78px,82px);
            opacity:0;
          }
          91.667% {
            transform:translate(78px,82px);
            opacity:0;
          }
          93.75% {
            transform:translate(78px,82px);
            opacity:0;
          }
          95.833% {
            transform:translate(78px,82px);
            opacity:0;
          }
          97.917% {
            transform:translate(78px,82px);
            opacity:0;
          }
          100% {
            transform:translate(78px,82px);
            opacity:0;
          }
        }
        @keyframes feed4 {
          0% {
            transform:translate(94px,114px);
            opacity:0;
          }
          2.083% {
            transform:translate(94px,114px);
            opacity:0;
          }
          4.167% {
            transform:translate(94px,114px);
            opacity:0;
          }
          6.25% {
            transform:translate(94px,114px);
            opacity:0;
          }
          8.333% {
            transform:translate(94px,114px);
            opacity:0;
          }
          10.417% {
            transform:translate(94px,114px);
            opacity:0;
          }
          12.5% {
            transform:translate(94px,114px);
            opacity:0;
          }
          14.583% {
            transform:translate(94px,114px);
            opacity:0;
          }
          16.667% {
            transform:translate(94px,114px);
            opacity:0;
          }
          18.75% {
            transform:translate(94px,114px);
            opacity:0;
          }
          20.833% {
            transform:translate(94px,114px);
            opacity:0;
          }
          22.917% {
            transform:translate(94px,114px);
            opacity:0;
          }
          25% {
            transform:translate(94px,114px);
            opacity:0;
          }
          27.083% {
            transform:translate(94px,114px);
            opacity:0;
          }
          29.167% {
            transform:translate(94px,114px);
            opacity:0;
          }
          31.25% {
            transform:translate(94px,114px);
            opacity:0;
          }
          33.333% {
            transform:translate(94px,114px);
            opacity:0;
          }
          35.417% {
            transform:translate(94px,114px);
            opacity:0;
          }
          37.5% {
            transform:translate(94px,114px);
            opacity:0;
          }
          39.583% {
            transform:translate(94px,114px);
            opacity:0;
          }
          41.667% {
            transform:translate(94px,114px);
            opacity:0;
          }
          43.75% {
            transform:translate(94px,111.455px);
            opacity:1;
          }
          45.833% {
            transform:translate(94px,108.424px);
            opacity:1;
          }
          47.917% {
            transform:translate(94px,105.394px);
            opacity:1;
          }
          50% {
            transform:translate(94px,102.364px);
            opacity:1;
          }
          52.083% {
            transform:translate(94px,99.333px);
            opacity:1;
          }
          54.167% {
            transform:translate(94px,96.303px);
            opacity:1;
          }
          56.25% {
            transform:translate(94px,93.273px);
            opacity:1;
          }
          58.333% {
            transform:translate(94px,90.242px);
            opacity:1;
          }
          60.417% {
            transform:translate(94px,87.212px);
            opacity:1;
          }
          62.5% {
            transform:translate(94px,84.182px);
            opacity:1;
          }
          64.583% {
            transform:translate(94px,82px);
            opacity:0;
          }
          66.667% {
            transform:translate(94px,82px);
            opacity:0;
          }
          68.75% {
            transform:translate(94px,82px);
            opacity:0;
          }
          70.833% {
            transform:translate(94px,82px);
            opacity:0;
          }
          72.917% {
            transform:translate(94px,82px);
            opacity:0;
          }
          75% {
            transform:translate(94px,82px);
            opacity:0;
          }
          77.083% {
            transform:translate(94px,82px);
            opacity:0;
          }
          79.167% {
            transform:translate(94px,82px);
            opacity:0;
          }
          81.25% {
            transform:translate(94px,82px);
            opacity:0;
          }
          83.333% {
            transform:translate(94px,82px);
            opacity:0;
          }
          85.417% {
            transform:translate(94px,82px);
            opacity:0;
          }
          87.5% {
            transform:translate(94px,82px);
            opacity:0;
          }
          89.583% {
            transform:translate(94px,82px);
            opacity:0;
          }
          91.667% {
            transform:translate(94px,82px);
            opacity:0;
          }
          93.75% {
            transform:translate(94px,82px);
            opacity:0;
          }
          95.833% {
            transform:translate(94px,82px);
            opacity:0;
          }
          97.917% {
            transform:translate(94px,82px);
            opacity:0;
          }
          100% {
            transform:translate(94px,82px);
            opacity:0;
          }
        }
        @keyframes feed5 {
          0% {
            transform:translate(110px,114px);
            opacity:0;
          }
          2.083% {
            transform:translate(110px,114px);
            opacity:0;
          }
          4.167% {
            transform:translate(110px,114px);
            opacity:0;
          }
          6.25% {
            transform:translate(110px,114px);
            opacity:0;
          }
          8.333% {
            transform:translate(110px,114px);
            opacity:0;
          }
          10.417% {
            transform:translate(110px,114px);
            opacity:0;
          }
          12.5% {
            transform:translate(110px,114px);
            opacity:0;
          }
          14.583% {
            transform:translate(110px,114px);
            opacity:0;
          }
          16.667% {
            transform:translate(110px,114px);
            opacity:0;
          }
          18.75% {
            transform:translate(110px,114px);
            opacity:0;
          }
          20.833% {
            transform:translate(110px,114px);
            opacity:0;
          }
          22.917% {
            transform:translate(110px,114px);
            opacity:0;
          }
          25% {
            transform:translate(110px,114px);
            opacity:0;
          }
          27.083% {
            transform:translate(110px,114px);
            opacity:0;
          }
          29.167% {
            transform:translate(110px,114px);
            opacity:0;
          }
          31.25% {
            transform:translate(110px,114px);
            opacity:0;
          }
          33.333% {
            transform:translate(110px,114px);
            opacity:0;
          }
          35.417% {
            transform:translate(110px,114px);
            opacity:0;
          }
          37.5% {
            transform:translate(110px,114px);
            opacity:0;
          }
          39.583% {
            transform:translate(110px,114px);
            opacity:0;
          }
          41.667% {
            transform:translate(110px,114px);
            opacity:0;
          }
          43.75% {
            transform:translate(110px,114px);
            opacity:0;
          }
          45.833% {
            transform:translate(110px,114px);
            opacity:0;
          }
          47.917% {
            transform:translate(110px,114px);
            opacity:0;
          }
          50% {
            transform:translate(110px,113.273px);
            opacity:1;
          }
          52.083% {
            transform:translate(110px,110.242px);
            opacity:1;
          }
          54.167% {
            transform:translate(110px,107.212px);
            opacity:1;
          }
          56.25% {
            transform:translate(110px,104.182px);
            opacity:1;
          }
          58.333% {
            transform:translate(110px,101.152px);
            opacity:1;
          }
          60.417% {
            transform:translate(110px,98.121px);
            opacity:1;
          }
          62.5% {
            transform:translate(110px,95.091px);
            opacity:1;
          }
          64.583% {
            transform:translate(110px,92.061px);
            opacity:1;
          }
          66.667% {
            transform:translate(110px,89.03px);
            opacity:1;
          }
          68.75% {
            transform:translate(110px,86px);
            opacity:1;
          }
          70.833% {
            transform:translate(110px,82.97px);
            opacity:1;
          }
          72.917% {
            transform:translate(110px,82px);
            opacity:0;
          }
          75% {
            transform:translate(110px,82px);
            opacity:0;
          }
          77.083% {
            transform:translate(110px,82px);
            opacity:0;
          }
          79.167% {
            transform:translate(110px,82px);
            opacity:0;
          }
          81.25% {
            transform:translate(110px,82px);
            opacity:0;
          }
          83.333% {
            transform:translate(110px,82px);
            opacity:0;
          }
          85.417% {
            transform:translate(110px,82px);
            opacity:0;
          }
          87.5% {
            transform:translate(110px,82px);
            opacity:0;
          }
          89.583% {
            transform:translate(110px,82px);
            opacity:0;
          }
          91.667% {
            transform:translate(110px,82px);
            opacity:0;
          }
          93.75% {
            transform:translate(110px,82px);
            opacity:0;
          }
          95.833% {
            transform:translate(110px,82px);
            opacity:0;
          }
          97.917% {
            transform:translate(110px,82px);
            opacity:0;
          }
          100% {
            transform:translate(110px,82px);
            opacity:0;
          }
        }
        @keyframes freezeEpisode {
          0% {
            opacity:1;
          }
          2.083% {
            opacity:1;
          }
          4.167% {
            opacity:1;
          }
          6.25% {
            opacity:1;
          }
          8.333% {
            opacity:1;
          }
          10.417% {
            opacity:1;
          }
          12.5% {
            opacity:1;
          }
          14.583% {
            opacity:1;
          }
          16.667% {
            opacity:1;
          }
          18.75% {
            opacity:1;
          }
          20.833% {
            opacity:1;
          }
          22.917% {
            opacity:1;
          }
          25% {
            opacity:1;
          }
          27.083% {
            opacity:1;
          }
          29.167% {
            opacity:1;
          }
          31.25% {
            opacity:1;
          }
          33.333% {
            opacity:1;
          }
          35.417% {
            opacity:1;
          }
          37.5% {
            opacity:1;
          }
          39.583% {
            opacity:1;
          }
          41.667% {
            opacity:1;
          }
          43.75% {
            opacity:1;
          }
          45.833% {
            opacity:1;
          }
          47.917% {
            opacity:1;
          }
          50% {
            opacity:1;
          }
          52.083% {
            opacity:1;
          }
          54.167% {
            opacity:1;
          }
          56.25% {
            opacity:1;
          }
          58.333% {
            opacity:1;
          }
          60.417% {
            opacity:1;
          }
          62.5% {
            opacity:1;
          }
          64.583% {
            opacity:1;
          }
          66.667% {
            opacity:1;
          }
          68.75% {
            opacity:1;
          }
          70.833% {
            opacity:1;
          }
          72.917% {
            opacity:1;
          }
          75% {
            opacity:1;
          }
          77.083% {
            opacity:1;
          }
          79.167% {
            opacity:1;
          }
          81.25% {
            opacity:1;
          }
          83.333% {
            opacity:1;
          }
          85.417% {
            opacity:1;
          }
          87.5% {
            opacity:1;
          }
          89.583% {
            opacity:1;
          }
          91.667% {
            opacity:1;
          }
          93.75% {
            opacity:0.968;
          }
          95.833% {
            opacity:0.641;
          }
          97.917% {
            opacity:0.213;
          }
          100% {
            opacity:0;
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .frostLens {
            d:path('M20 82H120L116 70H24Z');
          }
          .overburden {
            transform:translate(0px,-12px);
          }
          .store {
            d:path('M15 118.6H125V125H15Z');
          }
          .feed0 {
            transform:translate(30px,82px);
            opacity:0;
          }
          .feed1 {
            transform:translate(46px,82px);
            opacity:0;
          }
          .feed2 {
            transform:translate(62px,82px);
            opacity:0;
          }
          .feed3 {
            transform:translate(78px,82px);
            opacity:0;
          }
          .feed4 {
            transform:translate(94px,82px);
            opacity:0;
          }
          .feed5 {
            transform:translate(110px,82px);
            opacity:0;
          }
          .freezeEpisode {
            opacity:1;
          }
        }
        :host(:not([data-active])) *, :host(:not([data-active])) *::before, :host(:not([data-active])) *::after {
          animation-play-state: paused !important;
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      </style>
      <svg viewBox="0 0 140 140" role="img" aria-label="Frost Heave by Ice-Lens Growth">
        <g class="freezeEpisode">
          <rect x="15" y="82" width="110" height="43" fill="#423a2a"/>
          <circle cx="17" cy="87" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="55.832" cy="109.01" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="94.663" cy="96.021" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="27.495" cy="118.031" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="66.327" cy="105.041" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="105.158" cy="92.052" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="37.99" cy="114.062" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="76.822" cy="101.072" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="115.653" cy="88.082" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="48.485" cy="110.093" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="87.317" cy="97.103" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="20.149" cy="119.113" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="58.98" cy="106.124" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="97.812" cy="93.134" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="30.644" cy="115.144" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="69.475" cy="102.155" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="108.307" cy="89.165" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="41.139" cy="111.175" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="79.97" cy="98.186" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="118.802" cy="120.196" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="51.634" cy="107.206" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="90.465" cy="94.216" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="23.297" cy="116.227" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="62.129" cy="103.237" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="100.96" cy="90.247" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="33.792" cy="112.258" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="72.624" cy="99.268" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="111.455" cy="121.278" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="44.287" cy="108.289" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="83.119" cy="95.299" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="121.95" cy="117.309" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="54.782" cy="104.32" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="93.614" cy="91.33" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="26.446" cy="113.34" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="65.277" cy="100.351" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="104.109" cy="87.361" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="36.941" cy="109.371" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="75.772" cy="96.381" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="114.604" cy="118.392" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="47.436" cy="105.402" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="86.267" cy="92.412" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="19.099" cy="114.423" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="57.931" cy="101.433" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="96.762" cy="88.443" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="29.594" cy="110.454" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="68.426" cy="97.464" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="107.257" cy="119.474" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="40.089" cy="106.485" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="78.921" cy="93.495" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="117.752" cy="115.505" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="50.584" cy="102.515" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="89.416" cy="89.526" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="22.248" cy="111.536" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="61.079" cy="98.546" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="99.911" cy="120.557" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="32.743" cy="107.567" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="71.574" cy="94.577" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="110.406" cy="116.588" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="43.238" cy="103.598" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="82.069" cy="90.608" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="120.901" cy="112.619" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="53.733" cy="99.629" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="92.564" cy="121.639" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="25.396" cy="108.649" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="64.228" cy="95.66" r="0.6" fill="#bba37a" opacity=".25"/>
          <path d="M20 82H120L116 70.765H24Z" class="frostLens" fill="#a6dce2" stroke="#d4eff0"/>
          <g class="overburden" transform="translate(0 -11.235)">
            <rect x="15" y="48" width="110" height="34" fill="#65543a"/>
            <circle cx="17" cy="54" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="55.832" cy="69.722" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="94.663" cy="60.443" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="27.495" cy="76.165" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="66.327" cy="66.887" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="105.158" cy="57.608" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="37.99" cy="73.33" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="76.822" cy="64.052" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="115.653" cy="54.773" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="48.485" cy="70.495" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="87.317" cy="61.216" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="20.149" cy="76.938" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="58.98" cy="67.66" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="97.812" cy="58.381" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="30.644" cy="74.103" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="69.475" cy="64.825" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="108.307" cy="55.546" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="41.139" cy="71.268" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="79.97" cy="61.99" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="118.802" cy="77.711" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="51.634" cy="68.433" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="90.465" cy="59.155" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="23.297" cy="74.876" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="62.129" cy="65.598" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="100.96" cy="56.32" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="33.792" cy="72.041" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="72.624" cy="62.763" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="111.455" cy="78.485" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="44.287" cy="69.206" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="83.119" cy="59.928" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="121.95" cy="75.649" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="54.782" cy="66.371" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="93.614" cy="57.093" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="26.446" cy="72.814" r="0.6" fill="#bba37a" opacity=".25"/>
            <circle cx="65.277" cy="63.536" r="0.6" fill="#bba37a" opacity=".25"/>
            <path d="M15 48L125 48" stroke="#a7be7b" stroke-width="4"/>
            <path d="M23 47l-2 -5m2 5 2 -6" fill="none" stroke="#b9ce8a"/>
            <path d="M37 47l-2 -5m2 5 2 -6" fill="none" stroke="#b9ce8a"/>
            <path d="M51 47l-2 -5m2 5 2 -6" fill="none" stroke="#b9ce8a"/>
            <path d="M65 47l-2 -5m2 5 2 -6" fill="none" stroke="#b9ce8a"/>
            <path d="M79 47l-2 -5m2 5 2 -6" fill="none" stroke="#b9ce8a"/>
            <path d="M93 47l-2 -5m2 5 2 -6" fill="none" stroke="#b9ce8a"/>
            <path d="M107 47l-2 -5m2 5 2 -6" fill="none" stroke="#b9ce8a"/>
          </g>
          <path d="M15 117.988H125V125H15Z" class="store" fill="#589bac" opacity=".6"/>
          <path d="M40 17v15m-5 -11 10 8m-10 0 10 -8" stroke="#badde0" stroke-width="1"/>
          <path d="M70 17v15m-5 -11 10 8m-10 0 10 -8" stroke="#badde0" stroke-width="1"/>
          <path d="M100 17v15m-5 -11 10 8m-10 0 10 -8" stroke="#badde0" stroke-width="1"/>
          <circle cx="0" cy="0" r="1.8" class="feed0" fill="#8ed4e4" opacity="0"/>
          <circle cx="0" cy="0" r="1.8" class="feed1" fill="#8ed4e4" opacity="0"/>
          <circle cx="0" cy="0" r="1.8" class="feed2" fill="#8ed4e4" opacity="0"/>
          <circle cx="0" cy="0" r="1.8" class="feed3" fill="#8ed4e4" opacity="0"/>
          <circle cx="0" cy="0" r="1.8" class="feed4" fill="#8ed4e4" opacity="0"/>
          <circle cx="0" cy="0" r="1.8" class="feed5" fill="#8ed4e4" opacity="0"/>
        </g>
      </svg>
    `;
    this._visibility?.disconnect();
    this._visibility = new IntersectionObserver(([entry]) => {
      this.toggleAttribute("data-active", entry.isIntersecting);
    });
    this._visibility.observe(this);
  }

  disconnectedCallback() {
    this._visibility?.disconnect();
    this._visibility = null;
    this.removeAttribute("data-active");
  }
}

if (!customElements.get("concept-frost-heave-ice-lens")) {
  customElements.define("concept-frost-heave-ice-lens", ConceptFrostHeaveIceLens);
}
