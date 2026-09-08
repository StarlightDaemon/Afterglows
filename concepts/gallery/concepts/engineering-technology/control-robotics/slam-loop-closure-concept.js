// SLAM Loop Closure. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptSlamLoopClosure extends HTMLElement {
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
        .cycle {
          animation:cycle 12s linear infinite
        }
        @keyframes cycle {
          0%,91.6667% {
            opacity:1
          }
          95%,97% {
            opacity:0
          }
          100% {
            opacity:1
          }
        }
        .edge1 {
          animation:edge1 12s linear infinite
        }
        @keyframes edge1 {
          0% {
            d:path("M32,103L72,109");
            opacity:0
          }
          0.8333% {
            d:path("M32,103L72,109");
            opacity:0
          }
          1.6667% {
            d:path("M32,103L72,109");
            opacity:0
          }
          2.5% {
            d:path("M32,103L72,109");
            opacity:0
          }
          3.3333% {
            d:path("M32,103L72,109");
            opacity:0
          }
          4.1667% {
            d:path("M32,103L72,109");
            opacity:0
          }
          5% {
            d:path("M32,103L72,109");
            opacity:0
          }
          5.8333% {
            d:path("M32,103L72,109");
            opacity:0
          }
          6.6667% {
            d:path("M32,103L72,109");
            opacity:0
          }
          7.5% {
            d:path("M32,103L72,109");
            opacity:1
          }
          8.3333% {
            d:path("M32,103L72,109");
            opacity:1
          }
          9.1667% {
            d:path("M32,103L72,109");
            opacity:1
          }
          10% {
            d:path("M32,103L72,109");
            opacity:1
          }
          10.8333% {
            d:path("M32,103L72,109");
            opacity:1
          }
          11.6667% {
            d:path("M32,103L72,109");
            opacity:1
          }
          12.5% {
            d:path("M32,103L72,109");
            opacity:1
          }
          13.3333% {
            d:path("M32,103L72,109");
            opacity:1
          }
          14.1667% {
            d:path("M32,103L72,109");
            opacity:1
          }
          15% {
            d:path("M32,103L72,109");
            opacity:1
          }
          15.8333% {
            d:path("M32,103L72,109");
            opacity:1
          }
          16.6667% {
            d:path("M32,103L72,109");
            opacity:1
          }
          17.5% {
            d:path("M32,103L72,109");
            opacity:1
          }
          18.3333% {
            d:path("M32,103L72,109");
            opacity:1
          }
          19.1667% {
            d:path("M32,103L72,109");
            opacity:1
          }
          20% {
            d:path("M32,103L72,109");
            opacity:1
          }
          20.8333% {
            d:path("M32,103L72,109");
            opacity:1
          }
          21.6667% {
            d:path("M32,103L72,109");
            opacity:1
          }
          22.5% {
            d:path("M32,103L72,109");
            opacity:1
          }
          23.3333% {
            d:path("M32,103L72,109");
            opacity:1
          }
          24.1667% {
            d:path("M32,103L72,109");
            opacity:1
          }
          25% {
            d:path("M32,103L72,109");
            opacity:1
          }
          25.8333% {
            d:path("M32,103L72,109");
            opacity:1
          }
          26.6667% {
            d:path("M32,103L72,109");
            opacity:1
          }
          27.5% {
            d:path("M32,103L72,109");
            opacity:1
          }
          28.3333% {
            d:path("M32,103L72,109");
            opacity:1
          }
          29.1667% {
            d:path("M32,103L72,109");
            opacity:1
          }
          30% {
            d:path("M32,103L72,109");
            opacity:1
          }
          30.8333% {
            d:path("M32,103L72,109");
            opacity:1
          }
          31.6667% {
            d:path("M32,103L72,109");
            opacity:1
          }
          32.5% {
            d:path("M32,103L72,109");
            opacity:1
          }
          33.3333% {
            d:path("M32,103L72,109");
            opacity:1
          }
          34.1667% {
            d:path("M32,103L72,109");
            opacity:1
          }
          35% {
            d:path("M32,103L72,109");
            opacity:1
          }
          35.8333% {
            d:path("M32,103L72,109");
            opacity:1
          }
          36.6667% {
            d:path("M32,103L72,109");
            opacity:1
          }
          37.5% {
            d:path("M32,103L72,109");
            opacity:1
          }
          38.3333% {
            d:path("M32,103L72,109");
            opacity:1
          }
          39.1667% {
            d:path("M32,103L72,109");
            opacity:1
          }
          40% {
            d:path("M32,103L72,109");
            opacity:1
          }
          40.8333% {
            d:path("M32,103L72,109");
            opacity:1
          }
          41.6667% {
            d:path("M32,103L72,109");
            opacity:1
          }
          42.5% {
            d:path("M32,103L72,109");
            opacity:1
          }
          43.3333% {
            d:path("M32,103L72,109");
            opacity:1
          }
          44.1667% {
            d:path("M32,103L72,109");
            opacity:1
          }
          45% {
            d:path("M32,103L72,109");
            opacity:1
          }
          45.8333% {
            d:path("M32,103L72,109");
            opacity:1
          }
          46.6667% {
            d:path("M32,103L72,109");
            opacity:1
          }
          47.5% {
            d:path("M32,103L72,109");
            opacity:1
          }
          48.3333% {
            d:path("M32,103L72,109");
            opacity:1
          }
          49.1667% {
            d:path("M32,103L72,109");
            opacity:1
          }
          50% {
            d:path("M32,103L72,109");
            opacity:1
          }
          50.8333% {
            d:path("M32,103L72,109");
            opacity:1
          }
          51.6667% {
            d:path("M32,103L72,109");
            opacity:1
          }
          52.5% {
            d:path("M32,103L72,109");
            opacity:1
          }
          53.3333% {
            d:path("M32,103L72,109");
            opacity:1
          }
          54.1667% {
            d:path("M32,103L72,109");
            opacity:1
          }
          55% {
            d:path("M32,103L72,109");
            opacity:1
          }
          55.8333% {
            d:path("M32,103L72,109");
            opacity:1
          }
          56.6667% {
            d:path("M32,103L72,109");
            opacity:1
          }
          57.5% {
            d:path("M32,103L72,109");
            opacity:1
          }
          58.3333% {
            d:path("M32,103L72,109");
            opacity:1
          }
          59.1667% {
            d:path("M32,103L71.9857,109.0178");
            opacity:1
          }
          60% {
            d:path("M32,103L71.9449,109.0689");
            opacity:1
          }
          60.8333% {
            d:path("M32,103L71.8805,109.1494");
            opacity:1
          }
          61.6667% {
            d:path("M32,103L71.7954,109.2557");
            opacity:1
          }
          62.5% {
            d:path("M32,103L71.6926,109.3842");
            opacity:1
          }
          63.3333% {
            d:path("M32,103L71.5751,109.5311");
            opacity:1
          }
          64.1667% {
            d:path("M32,103L71.4457,109.6928");
            opacity:1
          }
          65% {
            d:path("M32,103L71.3075,109.8656");
            opacity:1
          }
          65.8333% {
            d:path("M32,103L71.1634,110.0457");
            opacity:1
          }
          66.6667% {
            d:path("M32,103L71.0164,110.2295");
            opacity:1
          }
          67.5% {
            d:path("M32,103L70.8693,110.4133");
            opacity:1
          }
          68.3333% {
            d:path("M32,103L70.7252,110.5934");
            opacity:1
          }
          69.1667% {
            d:path("M32,103L70.587,110.7662");
            opacity:1
          }
          70% {
            d:path("M32,103L70.4577,110.9279");
            opacity:1
          }
          70.8333% {
            d:path("M32,103L70.3402,111.0748");
            opacity:1
          }
          71.6667% {
            d:path("M32,103L70.2374,111.2033");
            opacity:1
          }
          72.5% {
            d:path("M32,103L70.1523,111.3096");
            opacity:1
          }
          73.3333% {
            d:path("M32,103L70.0879,111.3902");
            opacity:1
          }
          74.1667% {
            d:path("M32,103L70.047,111.4412");
            opacity:1
          }
          75% {
            d:path("M32,103L70.0328,111.459");
            opacity:1
          }
          75.8333% {
            d:path("M32,103L70.0328,111.459");
            opacity:1
          }
          76.6667% {
            d:path("M32,103L70.0328,111.459");
            opacity:1
          }
          77.5% {
            d:path("M32,103L70.0328,111.459");
            opacity:1
          }
          78.3333% {
            d:path("M32,103L70.0328,111.459");
            opacity:1
          }
          79.1667% {
            d:path("M32,103L70.0328,111.459");
            opacity:1
          }
          80% {
            d:path("M32,103L70.0328,111.459");
            opacity:1
          }
          80.8333% {
            d:path("M32,103L70.0328,111.459");
            opacity:1
          }
          81.6667% {
            d:path("M32,103L70.0328,111.459");
            opacity:1
          }
          82.5% {
            d:path("M32,103L70.0328,111.459");
            opacity:1
          }
          83.3333% {
            d:path("M32,103L70.0328,111.459");
            opacity:1
          }
          84.1667% {
            d:path("M32,103L70.0328,111.459");
            opacity:1
          }
          85% {
            d:path("M32,103L70.0328,111.459");
            opacity:1
          }
          85.8333% {
            d:path("M32,103L70.0328,111.459");
            opacity:1
          }
          86.6667% {
            d:path("M32,103L70.0328,111.459");
            opacity:1
          }
          87.5% {
            d:path("M32,103L70.0328,111.459");
            opacity:1
          }
          88.3333% {
            d:path("M32,103L70.0328,111.459");
            opacity:1
          }
          89.1667% {
            d:path("M32,103L70.0328,111.459");
            opacity:1
          }
          90% {
            d:path("M32,103L70.0328,111.459");
            opacity:1
          }
          90.8333% {
            d:path("M32,103L70.0328,111.459");
            opacity:1
          }
          91.6667% {
            d:path("M32,103L70.0328,111.459");
            opacity:1
          }
          95% {
            opacity:1;
            d:path("M32,103L70.0328,111.459")
          }
          95.01%,100% {
            opacity:0;
            d:path("M32,103L72,109")
          }
        }
        .edge2 {
          animation:edge2 12s linear infinite
        }
        @keyframes edge2 {
          0% {
            d:path("M72,109L113,81");
            opacity:0
          }
          0.8333% {
            d:path("M72,109L113,81");
            opacity:0
          }
          1.6667% {
            d:path("M72,109L113,81");
            opacity:0
          }
          2.5% {
            d:path("M72,109L113,81");
            opacity:0
          }
          3.3333% {
            d:path("M72,109L113,81");
            opacity:0
          }
          4.1667% {
            d:path("M72,109L113,81");
            opacity:0
          }
          5% {
            d:path("M72,109L113,81");
            opacity:0
          }
          5.8333% {
            d:path("M72,109L113,81");
            opacity:0
          }
          6.6667% {
            d:path("M72,109L113,81");
            opacity:0
          }
          7.5% {
            d:path("M72,109L113,81");
            opacity:0
          }
          8.3333% {
            d:path("M72,109L113,81");
            opacity:0
          }
          9.1667% {
            d:path("M72,109L113,81");
            opacity:0
          }
          10% {
            d:path("M72,109L113,81");
            opacity:0
          }
          10.8333% {
            d:path("M72,109L113,81");
            opacity:0
          }
          11.6667% {
            d:path("M72,109L113,81");
            opacity:0
          }
          12.5% {
            d:path("M72,109L113,81");
            opacity:0
          }
          13.3333% {
            d:path("M72,109L113,81");
            opacity:0
          }
          14.1667% {
            d:path("M72,109L113,81");
            opacity:1
          }
          15% {
            d:path("M72,109L113,81");
            opacity:1
          }
          15.8333% {
            d:path("M72,109L113,81");
            opacity:1
          }
          16.6667% {
            d:path("M72,109L113,81");
            opacity:1
          }
          17.5% {
            d:path("M72,109L113,81");
            opacity:1
          }
          18.3333% {
            d:path("M72,109L113,81");
            opacity:1
          }
          19.1667% {
            d:path("M72,109L113,81");
            opacity:1
          }
          20% {
            d:path("M72,109L113,81");
            opacity:1
          }
          20.8333% {
            d:path("M72,109L113,81");
            opacity:1
          }
          21.6667% {
            d:path("M72,109L113,81");
            opacity:1
          }
          22.5% {
            d:path("M72,109L113,81");
            opacity:1
          }
          23.3333% {
            d:path("M72,109L113,81");
            opacity:1
          }
          24.1667% {
            d:path("M72,109L113,81");
            opacity:1
          }
          25% {
            d:path("M72,109L113,81");
            opacity:1
          }
          25.8333% {
            d:path("M72,109L113,81");
            opacity:1
          }
          26.6667% {
            d:path("M72,109L113,81");
            opacity:1
          }
          27.5% {
            d:path("M72,109L113,81");
            opacity:1
          }
          28.3333% {
            d:path("M72,109L113,81");
            opacity:1
          }
          29.1667% {
            d:path("M72,109L113,81");
            opacity:1
          }
          30% {
            d:path("M72,109L113,81");
            opacity:1
          }
          30.8333% {
            d:path("M72,109L113,81");
            opacity:1
          }
          31.6667% {
            d:path("M72,109L113,81");
            opacity:1
          }
          32.5% {
            d:path("M72,109L113,81");
            opacity:1
          }
          33.3333% {
            d:path("M72,109L113,81");
            opacity:1
          }
          34.1667% {
            d:path("M72,109L113,81");
            opacity:1
          }
          35% {
            d:path("M72,109L113,81");
            opacity:1
          }
          35.8333% {
            d:path("M72,109L113,81");
            opacity:1
          }
          36.6667% {
            d:path("M72,109L113,81");
            opacity:1
          }
          37.5% {
            d:path("M72,109L113,81");
            opacity:1
          }
          38.3333% {
            d:path("M72,109L113,81");
            opacity:1
          }
          39.1667% {
            d:path("M72,109L113,81");
            opacity:1
          }
          40% {
            d:path("M72,109L113,81");
            opacity:1
          }
          40.8333% {
            d:path("M72,109L113,81");
            opacity:1
          }
          41.6667% {
            d:path("M72,109L113,81");
            opacity:1
          }
          42.5% {
            d:path("M72,109L113,81");
            opacity:1
          }
          43.3333% {
            d:path("M72,109L113,81");
            opacity:1
          }
          44.1667% {
            d:path("M72,109L113,81");
            opacity:1
          }
          45% {
            d:path("M72,109L113,81");
            opacity:1
          }
          45.8333% {
            d:path("M72,109L113,81");
            opacity:1
          }
          46.6667% {
            d:path("M72,109L113,81");
            opacity:1
          }
          47.5% {
            d:path("M72,109L113,81");
            opacity:1
          }
          48.3333% {
            d:path("M72,109L113,81");
            opacity:1
          }
          49.1667% {
            d:path("M72,109L113,81");
            opacity:1
          }
          50% {
            d:path("M72,109L113,81");
            opacity:1
          }
          50.8333% {
            d:path("M72,109L113,81");
            opacity:1
          }
          51.6667% {
            d:path("M72,109L113,81");
            opacity:1
          }
          52.5% {
            d:path("M72,109L113,81");
            opacity:1
          }
          53.3333% {
            d:path("M72,109L113,81");
            opacity:1
          }
          54.1667% {
            d:path("M72,109L113,81");
            opacity:1
          }
          55% {
            d:path("M72,109L113,81");
            opacity:1
          }
          55.8333% {
            d:path("M72,109L113,81");
            opacity:1
          }
          56.6667% {
            d:path("M72,109L113,81");
            opacity:1
          }
          57.5% {
            d:path("M72,109L113,81");
            opacity:1
          }
          58.3333% {
            d:path("M72,109L113,81");
            opacity:1
          }
          59.1667% {
            d:path("M71.9857,109.0178L112.9715,81.0357");
            opacity:1
          }
          60% {
            d:path("M71.9449,109.0689L112.8898,81.1377");
            opacity:1
          }
          60.8333% {
            d:path("M71.8805,109.1494L112.761,81.2988");
            opacity:1
          }
          61.6667% {
            d:path("M71.7954,109.2557L112.5908,81.5115");
            opacity:1
          }
          62.5% {
            d:path("M71.6926,109.3842L112.3852,81.7684");
            opacity:1
          }
          63.3333% {
            d:path("M71.5751,109.5311L112.1502,82.0623");
            opacity:1
          }
          64.1667% {
            d:path("M71.4457,109.6928L111.8915,82.3857");
            opacity:1
          }
          65% {
            d:path("M71.3075,109.8656L111.6151,82.7311");
            opacity:1
          }
          65.8333% {
            d:path("M71.1634,110.0457L111.3269,83.0914");
            opacity:1
          }
          66.6667% {
            d:path("M71.0164,110.2295L111.0328,83.459");
            opacity:1
          }
          67.5% {
            d:path("M70.8693,110.4133L110.7387,83.8266");
            opacity:1
          }
          68.3333% {
            d:path("M70.7252,110.5934L110.4505,84.1869");
            opacity:1
          }
          69.1667% {
            d:path("M70.587,110.7662L110.1741,84.5324");
            opacity:1
          }
          70% {
            d:path("M70.4577,110.9279L109.9154,84.8557");
            opacity:1
          }
          70.8333% {
            d:path("M70.3402,111.0748L109.6803,85.1496");
            opacity:1
          }
          71.6667% {
            d:path("M70.2374,111.2033L109.4748,85.4066");
            opacity:1
          }
          72.5% {
            d:path("M70.1523,111.3096L109.3046,85.6193");
            opacity:1
          }
          73.3333% {
            d:path("M70.0879,111.3902L109.1757,85.7803");
            opacity:1
          }
          74.1667% {
            d:path("M70.047,111.4412L109.0941,85.8824");
            opacity:1
          }
          75% {
            d:path("M70.0328,111.459L109.0656,85.918");
            opacity:1
          }
          75.8333% {
            d:path("M70.0328,111.459L109.0656,85.918");
            opacity:1
          }
          76.6667% {
            d:path("M70.0328,111.459L109.0656,85.918");
            opacity:1
          }
          77.5% {
            d:path("M70.0328,111.459L109.0656,85.918");
            opacity:1
          }
          78.3333% {
            d:path("M70.0328,111.459L109.0656,85.918");
            opacity:1
          }
          79.1667% {
            d:path("M70.0328,111.459L109.0656,85.918");
            opacity:1
          }
          80% {
            d:path("M70.0328,111.459L109.0656,85.918");
            opacity:1
          }
          80.8333% {
            d:path("M70.0328,111.459L109.0656,85.918");
            opacity:1
          }
          81.6667% {
            d:path("M70.0328,111.459L109.0656,85.918");
            opacity:1
          }
          82.5% {
            d:path("M70.0328,111.459L109.0656,85.918");
            opacity:1
          }
          83.3333% {
            d:path("M70.0328,111.459L109.0656,85.918");
            opacity:1
          }
          84.1667% {
            d:path("M70.0328,111.459L109.0656,85.918");
            opacity:1
          }
          85% {
            d:path("M70.0328,111.459L109.0656,85.918");
            opacity:1
          }
          85.8333% {
            d:path("M70.0328,111.459L109.0656,85.918");
            opacity:1
          }
          86.6667% {
            d:path("M70.0328,111.459L109.0656,85.918");
            opacity:1
          }
          87.5% {
            d:path("M70.0328,111.459L109.0656,85.918");
            opacity:1
          }
          88.3333% {
            d:path("M70.0328,111.459L109.0656,85.918");
            opacity:1
          }
          89.1667% {
            d:path("M70.0328,111.459L109.0656,85.918");
            opacity:1
          }
          90% {
            d:path("M70.0328,111.459L109.0656,85.918");
            opacity:1
          }
          90.8333% {
            d:path("M70.0328,111.459L109.0656,85.918");
            opacity:1
          }
          91.6667% {
            d:path("M70.0328,111.459L109.0656,85.918");
            opacity:1
          }
          95% {
            opacity:1;
            d:path("M70.0328,111.459L109.0656,85.918")
          }
          95.01%,100% {
            opacity:0;
            d:path("M72,109L113,81")
          }
        }
        .edge3 {
          animation:edge3 12s linear infinite
        }
        @keyframes edge3 {
          0% {
            d:path("M113,81L106,37");
            opacity:0
          }
          0.8333% {
            d:path("M113,81L106,37");
            opacity:0
          }
          1.6667% {
            d:path("M113,81L106,37");
            opacity:0
          }
          2.5% {
            d:path("M113,81L106,37");
            opacity:0
          }
          3.3333% {
            d:path("M113,81L106,37");
            opacity:0
          }
          4.1667% {
            d:path("M113,81L106,37");
            opacity:0
          }
          5% {
            d:path("M113,81L106,37");
            opacity:0
          }
          5.8333% {
            d:path("M113,81L106,37");
            opacity:0
          }
          6.6667% {
            d:path("M113,81L106,37");
            opacity:0
          }
          7.5% {
            d:path("M113,81L106,37");
            opacity:0
          }
          8.3333% {
            d:path("M113,81L106,37");
            opacity:0
          }
          9.1667% {
            d:path("M113,81L106,37");
            opacity:0
          }
          10% {
            d:path("M113,81L106,37");
            opacity:0
          }
          10.8333% {
            d:path("M113,81L106,37");
            opacity:0
          }
          11.6667% {
            d:path("M113,81L106,37");
            opacity:0
          }
          12.5% {
            d:path("M113,81L106,37");
            opacity:0
          }
          13.3333% {
            d:path("M113,81L106,37");
            opacity:0
          }
          14.1667% {
            d:path("M113,81L106,37");
            opacity:0
          }
          15% {
            d:path("M113,81L106,37");
            opacity:0
          }
          15.8333% {
            d:path("M113,81L106,37");
            opacity:0
          }
          16.6667% {
            d:path("M113,81L106,37");
            opacity:0
          }
          17.5% {
            d:path("M113,81L106,37");
            opacity:0
          }
          18.3333% {
            d:path("M113,81L106,37");
            opacity:0
          }
          19.1667% {
            d:path("M113,81L106,37");
            opacity:0
          }
          20% {
            d:path("M113,81L106,37");
            opacity:0
          }
          20.8333% {
            d:path("M113,81L106,37");
            opacity:1
          }
          21.6667% {
            d:path("M113,81L106,37");
            opacity:1
          }
          22.5% {
            d:path("M113,81L106,37");
            opacity:1
          }
          23.3333% {
            d:path("M113,81L106,37");
            opacity:1
          }
          24.1667% {
            d:path("M113,81L106,37");
            opacity:1
          }
          25% {
            d:path("M113,81L106,37");
            opacity:1
          }
          25.8333% {
            d:path("M113,81L106,37");
            opacity:1
          }
          26.6667% {
            d:path("M113,81L106,37");
            opacity:1
          }
          27.5% {
            d:path("M113,81L106,37");
            opacity:1
          }
          28.3333% {
            d:path("M113,81L106,37");
            opacity:1
          }
          29.1667% {
            d:path("M113,81L106,37");
            opacity:1
          }
          30% {
            d:path("M113,81L106,37");
            opacity:1
          }
          30.8333% {
            d:path("M113,81L106,37");
            opacity:1
          }
          31.6667% {
            d:path("M113,81L106,37");
            opacity:1
          }
          32.5% {
            d:path("M113,81L106,37");
            opacity:1
          }
          33.3333% {
            d:path("M113,81L106,37");
            opacity:1
          }
          34.1667% {
            d:path("M113,81L106,37");
            opacity:1
          }
          35% {
            d:path("M113,81L106,37");
            opacity:1
          }
          35.8333% {
            d:path("M113,81L106,37");
            opacity:1
          }
          36.6667% {
            d:path("M113,81L106,37");
            opacity:1
          }
          37.5% {
            d:path("M113,81L106,37");
            opacity:1
          }
          38.3333% {
            d:path("M113,81L106,37");
            opacity:1
          }
          39.1667% {
            d:path("M113,81L106,37");
            opacity:1
          }
          40% {
            d:path("M113,81L106,37");
            opacity:1
          }
          40.8333% {
            d:path("M113,81L106,37");
            opacity:1
          }
          41.6667% {
            d:path("M113,81L106,37");
            opacity:1
          }
          42.5% {
            d:path("M113,81L106,37");
            opacity:1
          }
          43.3333% {
            d:path("M113,81L106,37");
            opacity:1
          }
          44.1667% {
            d:path("M113,81L106,37");
            opacity:1
          }
          45% {
            d:path("M113,81L106,37");
            opacity:1
          }
          45.8333% {
            d:path("M113,81L106,37");
            opacity:1
          }
          46.6667% {
            d:path("M113,81L106,37");
            opacity:1
          }
          47.5% {
            d:path("M113,81L106,37");
            opacity:1
          }
          48.3333% {
            d:path("M113,81L106,37");
            opacity:1
          }
          49.1667% {
            d:path("M113,81L106,37");
            opacity:1
          }
          50% {
            d:path("M113,81L106,37");
            opacity:1
          }
          50.8333% {
            d:path("M113,81L106,37");
            opacity:1
          }
          51.6667% {
            d:path("M113,81L106,37");
            opacity:1
          }
          52.5% {
            d:path("M113,81L106,37");
            opacity:1
          }
          53.3333% {
            d:path("M113,81L106,37");
            opacity:1
          }
          54.1667% {
            d:path("M113,81L106,37");
            opacity:1
          }
          55% {
            d:path("M113,81L106,37");
            opacity:1
          }
          55.8333% {
            d:path("M113,81L106,37");
            opacity:1
          }
          56.6667% {
            d:path("M113,81L106,37");
            opacity:1
          }
          57.5% {
            d:path("M113,81L106,37");
            opacity:1
          }
          58.3333% {
            d:path("M113,81L106,37");
            opacity:1
          }
          59.1667% {
            d:path("M112.9715,81.0357L105.9572,37.0535");
            opacity:1
          }
          60% {
            d:path("M112.8898,81.1377L105.8348,37.2066");
            opacity:1
          }
          60.8333% {
            d:path("M112.761,81.2988L105.6415,37.4482");
            opacity:1
          }
          61.6667% {
            d:path("M112.5908,81.5115L105.3862,37.7672");
            opacity:1
          }
          62.5% {
            d:path("M112.3852,81.7684L105.0779,38.1527");
            opacity:1
          }
          63.3333% {
            d:path("M112.1502,82.0623L104.7252,38.5934");
            opacity:1
          }
          64.1667% {
            d:path("M111.8915,82.3857L104.3372,39.0785");
            opacity:1
          }
          65% {
            d:path("M111.6151,82.7311L103.9226,39.5967");
            opacity:1
          }
          65.8333% {
            d:path("M111.3269,83.0914L103.4903,40.1371");
            opacity:1
          }
          66.6667% {
            d:path("M111.0328,83.459L103.0492,40.6885");
            opacity:1
          }
          67.5% {
            d:path("M110.7387,83.8266L102.608,41.24");
            opacity:1
          }
          68.3333% {
            d:path("M110.4505,84.1869L102.1757,41.7803");
            opacity:1
          }
          69.1667% {
            d:path("M110.1741,84.5324L101.7611,42.2986");
            opacity:1
          }
          70% {
            d:path("M109.9154,84.8557L101.3731,42.7836");
            opacity:1
          }
          70.8333% {
            d:path("M109.6803,85.1496L101.0205,43.2244");
            opacity:1
          }
          71.6667% {
            d:path("M109.4748,85.4066L100.7121,43.6098");
            opacity:1
          }
          72.5% {
            d:path("M109.3046,85.6193L100.4569,43.9289");
            opacity:1
          }
          73.3333% {
            d:path("M109.1757,85.7803L100.2636,44.1705");
            opacity:1
          }
          74.1667% {
            d:path("M109.0941,85.8824L100.1411,44.3236");
            opacity:1
          }
          75% {
            d:path("M109.0656,85.918L100.0984,44.377");
            opacity:1
          }
          75.8333% {
            d:path("M109.0656,85.918L100.0984,44.377");
            opacity:1
          }
          76.6667% {
            d:path("M109.0656,85.918L100.0984,44.377");
            opacity:1
          }
          77.5% {
            d:path("M109.0656,85.918L100.0984,44.377");
            opacity:1
          }
          78.3333% {
            d:path("M109.0656,85.918L100.0984,44.377");
            opacity:1
          }
          79.1667% {
            d:path("M109.0656,85.918L100.0984,44.377");
            opacity:1
          }
          80% {
            d:path("M109.0656,85.918L100.0984,44.377");
            opacity:1
          }
          80.8333% {
            d:path("M109.0656,85.918L100.0984,44.377");
            opacity:1
          }
          81.6667% {
            d:path("M109.0656,85.918L100.0984,44.377");
            opacity:1
          }
          82.5% {
            d:path("M109.0656,85.918L100.0984,44.377");
            opacity:1
          }
          83.3333% {
            d:path("M109.0656,85.918L100.0984,44.377");
            opacity:1
          }
          84.1667% {
            d:path("M109.0656,85.918L100.0984,44.377");
            opacity:1
          }
          85% {
            d:path("M109.0656,85.918L100.0984,44.377");
            opacity:1
          }
          85.8333% {
            d:path("M109.0656,85.918L100.0984,44.377");
            opacity:1
          }
          86.6667% {
            d:path("M109.0656,85.918L100.0984,44.377");
            opacity:1
          }
          87.5% {
            d:path("M109.0656,85.918L100.0984,44.377");
            opacity:1
          }
          88.3333% {
            d:path("M109.0656,85.918L100.0984,44.377");
            opacity:1
          }
          89.1667% {
            d:path("M109.0656,85.918L100.0984,44.377");
            opacity:1
          }
          90% {
            d:path("M109.0656,85.918L100.0984,44.377");
            opacity:1
          }
          90.8333% {
            d:path("M109.0656,85.918L100.0984,44.377");
            opacity:1
          }
          91.6667% {
            d:path("M109.0656,85.918L100.0984,44.377");
            opacity:1
          }
          95% {
            opacity:1;
            d:path("M109.0656,85.918L100.0984,44.377")
          }
          95.01%,100% {
            opacity:0;
            d:path("M113,81L106,37")
          }
        }
        .edge4 {
          animation:edge4 12s linear infinite
        }
        @keyframes edge4 {
          0% {
            d:path("M106,37L62,22");
            opacity:0
          }
          0.8333% {
            d:path("M106,37L62,22");
            opacity:0
          }
          1.6667% {
            d:path("M106,37L62,22");
            opacity:0
          }
          2.5% {
            d:path("M106,37L62,22");
            opacity:0
          }
          3.3333% {
            d:path("M106,37L62,22");
            opacity:0
          }
          4.1667% {
            d:path("M106,37L62,22");
            opacity:0
          }
          5% {
            d:path("M106,37L62,22");
            opacity:0
          }
          5.8333% {
            d:path("M106,37L62,22");
            opacity:0
          }
          6.6667% {
            d:path("M106,37L62,22");
            opacity:0
          }
          7.5% {
            d:path("M106,37L62,22");
            opacity:0
          }
          8.3333% {
            d:path("M106,37L62,22");
            opacity:0
          }
          9.1667% {
            d:path("M106,37L62,22");
            opacity:0
          }
          10% {
            d:path("M106,37L62,22");
            opacity:0
          }
          10.8333% {
            d:path("M106,37L62,22");
            opacity:0
          }
          11.6667% {
            d:path("M106,37L62,22");
            opacity:0
          }
          12.5% {
            d:path("M106,37L62,22");
            opacity:0
          }
          13.3333% {
            d:path("M106,37L62,22");
            opacity:0
          }
          14.1667% {
            d:path("M106,37L62,22");
            opacity:0
          }
          15% {
            d:path("M106,37L62,22");
            opacity:0
          }
          15.8333% {
            d:path("M106,37L62,22");
            opacity:0
          }
          16.6667% {
            d:path("M106,37L62,22");
            opacity:0
          }
          17.5% {
            d:path("M106,37L62,22");
            opacity:0
          }
          18.3333% {
            d:path("M106,37L62,22");
            opacity:0
          }
          19.1667% {
            d:path("M106,37L62,22");
            opacity:0
          }
          20% {
            d:path("M106,37L62,22");
            opacity:0
          }
          20.8333% {
            d:path("M106,37L62,22");
            opacity:0
          }
          21.6667% {
            d:path("M106,37L62,22");
            opacity:0
          }
          22.5% {
            d:path("M106,37L62,22");
            opacity:0
          }
          23.3333% {
            d:path("M106,37L62,22");
            opacity:0
          }
          24.1667% {
            d:path("M106,37L62,22");
            opacity:0
          }
          25% {
            d:path("M106,37L62,22");
            opacity:0
          }
          25.8333% {
            d:path("M106,37L62,22");
            opacity:0
          }
          26.6667% {
            d:path("M106,37L62,22");
            opacity:0
          }
          27.5% {
            d:path("M106,37L62,22");
            opacity:0
          }
          28.3333% {
            d:path("M106,37L62,22");
            opacity:1
          }
          29.1667% {
            d:path("M106,37L62,22");
            opacity:1
          }
          30% {
            d:path("M106,37L62,22");
            opacity:1
          }
          30.8333% {
            d:path("M106,37L62,22");
            opacity:1
          }
          31.6667% {
            d:path("M106,37L62,22");
            opacity:1
          }
          32.5% {
            d:path("M106,37L62,22");
            opacity:1
          }
          33.3333% {
            d:path("M106,37L62,22");
            opacity:1
          }
          34.1667% {
            d:path("M106,37L62,22");
            opacity:1
          }
          35% {
            d:path("M106,37L62,22");
            opacity:1
          }
          35.8333% {
            d:path("M106,37L62,22");
            opacity:1
          }
          36.6667% {
            d:path("M106,37L62,22");
            opacity:1
          }
          37.5% {
            d:path("M106,37L62,22");
            opacity:1
          }
          38.3333% {
            d:path("M106,37L62,22");
            opacity:1
          }
          39.1667% {
            d:path("M106,37L62,22");
            opacity:1
          }
          40% {
            d:path("M106,37L62,22");
            opacity:1
          }
          40.8333% {
            d:path("M106,37L62,22");
            opacity:1
          }
          41.6667% {
            d:path("M106,37L62,22");
            opacity:1
          }
          42.5% {
            d:path("M106,37L62,22");
            opacity:1
          }
          43.3333% {
            d:path("M106,37L62,22");
            opacity:1
          }
          44.1667% {
            d:path("M106,37L62,22");
            opacity:1
          }
          45% {
            d:path("M106,37L62,22");
            opacity:1
          }
          45.8333% {
            d:path("M106,37L62,22");
            opacity:1
          }
          46.6667% {
            d:path("M106,37L62,22");
            opacity:1
          }
          47.5% {
            d:path("M106,37L62,22");
            opacity:1
          }
          48.3333% {
            d:path("M106,37L62,22");
            opacity:1
          }
          49.1667% {
            d:path("M106,37L62,22");
            opacity:1
          }
          50% {
            d:path("M106,37L62,22");
            opacity:1
          }
          50.8333% {
            d:path("M106,37L62,22");
            opacity:1
          }
          51.6667% {
            d:path("M106,37L62,22");
            opacity:1
          }
          52.5% {
            d:path("M106,37L62,22");
            opacity:1
          }
          53.3333% {
            d:path("M106,37L62,22");
            opacity:1
          }
          54.1667% {
            d:path("M106,37L62,22");
            opacity:1
          }
          55% {
            d:path("M106,37L62,22");
            opacity:1
          }
          55.8333% {
            d:path("M106,37L62,22");
            opacity:1
          }
          56.6667% {
            d:path("M106,37L62,22");
            opacity:1
          }
          57.5% {
            d:path("M106,37L62,22");
            opacity:1
          }
          58.3333% {
            d:path("M106,37L62,22");
            opacity:1
          }
          59.1667% {
            d:path("M105.9572,37.0535L61.943,22.0713");
            opacity:1
          }
          60% {
            d:path("M105.8348,37.2066L61.7797,22.2754");
            opacity:1
          }
          60.8333% {
            d:path("M105.6415,37.4482L61.522,22.5975");
            opacity:1
          }
          61.6667% {
            d:path("M105.3862,37.7672L61.1816,23.023");
            opacity:1
          }
          62.5% {
            d:path("M105.0779,38.1527L60.7705,23.5369");
            opacity:1
          }
          63.3333% {
            d:path("M104.7252,38.5934L60.3003,24.1246");
            opacity:1
          }
          64.1667% {
            d:path("M104.3372,39.0785L59.783,24.7713");
            opacity:1
          }
          65% {
            d:path("M103.9226,39.5967L59.2302,25.4623");
            opacity:1
          }
          65.8333% {
            d:path("M103.4903,40.1371L58.6538,26.1828");
            opacity:1
          }
          66.6667% {
            d:path("M103.0492,40.6885L58.0656,26.918");
            opacity:1
          }
          67.5% {
            d:path("M102.608,41.24L57.4774,27.6533");
            opacity:1
          }
          68.3333% {
            d:path("M102.1757,41.7803L56.901,28.3738");
            opacity:1
          }
          69.1667% {
            d:path("M101.7611,42.2986L56.3482,29.0648");
            opacity:1
          }
          70% {
            d:path("M101.3731,42.7836L55.8308,29.7115");
            opacity:1
          }
          70.8333% {
            d:path("M101.0205,43.2244L55.3607,30.2992");
            opacity:1
          }
          71.6667% {
            d:path("M100.7121,43.6098L54.9495,30.8131");
            opacity:1
          }
          72.5% {
            d:path("M100.4569,43.9289L54.6092,31.2385");
            opacity:1
          }
          73.3333% {
            d:path("M100.2636,44.1705L54.3515,31.5607");
            opacity:1
          }
          74.1667% {
            d:path("M100.1411,44.3236L54.1882,31.7648");
            opacity:1
          }
          75% {
            d:path("M100.0984,44.377L54.1311,31.8361");
            opacity:1
          }
          75.8333% {
            d:path("M100.0984,44.377L54.1311,31.8361");
            opacity:1
          }
          76.6667% {
            d:path("M100.0984,44.377L54.1311,31.8361");
            opacity:1
          }
          77.5% {
            d:path("M100.0984,44.377L54.1311,31.8361");
            opacity:1
          }
          78.3333% {
            d:path("M100.0984,44.377L54.1311,31.8361");
            opacity:1
          }
          79.1667% {
            d:path("M100.0984,44.377L54.1311,31.8361");
            opacity:1
          }
          80% {
            d:path("M100.0984,44.377L54.1311,31.8361");
            opacity:1
          }
          80.8333% {
            d:path("M100.0984,44.377L54.1311,31.8361");
            opacity:1
          }
          81.6667% {
            d:path("M100.0984,44.377L54.1311,31.8361");
            opacity:1
          }
          82.5% {
            d:path("M100.0984,44.377L54.1311,31.8361");
            opacity:1
          }
          83.3333% {
            d:path("M100.0984,44.377L54.1311,31.8361");
            opacity:1
          }
          84.1667% {
            d:path("M100.0984,44.377L54.1311,31.8361");
            opacity:1
          }
          85% {
            d:path("M100.0984,44.377L54.1311,31.8361");
            opacity:1
          }
          85.8333% {
            d:path("M100.0984,44.377L54.1311,31.8361");
            opacity:1
          }
          86.6667% {
            d:path("M100.0984,44.377L54.1311,31.8361");
            opacity:1
          }
          87.5% {
            d:path("M100.0984,44.377L54.1311,31.8361");
            opacity:1
          }
          88.3333% {
            d:path("M100.0984,44.377L54.1311,31.8361");
            opacity:1
          }
          89.1667% {
            d:path("M100.0984,44.377L54.1311,31.8361");
            opacity:1
          }
          90% {
            d:path("M100.0984,44.377L54.1311,31.8361");
            opacity:1
          }
          90.8333% {
            d:path("M100.0984,44.377L54.1311,31.8361");
            opacity:1
          }
          91.6667% {
            d:path("M100.0984,44.377L54.1311,31.8361");
            opacity:1
          }
          95% {
            opacity:1;
            d:path("M100.0984,44.377L54.1311,31.8361")
          }
          95.01%,100% {
            opacity:0;
            d:path("M106,37L62,22")
          }
        }
        .edge5 {
          animation:edge5 12s linear infinite
        }
        @keyframes edge5 {
          0% {
            d:path("M62,22L25,54");
            opacity:0
          }
          0.8333% {
            d:path("M62,22L25,54");
            opacity:0
          }
          1.6667% {
            d:path("M62,22L25,54");
            opacity:0
          }
          2.5% {
            d:path("M62,22L25,54");
            opacity:0
          }
          3.3333% {
            d:path("M62,22L25,54");
            opacity:0
          }
          4.1667% {
            d:path("M62,22L25,54");
            opacity:0
          }
          5% {
            d:path("M62,22L25,54");
            opacity:0
          }
          5.8333% {
            d:path("M62,22L25,54");
            opacity:0
          }
          6.6667% {
            d:path("M62,22L25,54");
            opacity:0
          }
          7.5% {
            d:path("M62,22L25,54");
            opacity:0
          }
          8.3333% {
            d:path("M62,22L25,54");
            opacity:0
          }
          9.1667% {
            d:path("M62,22L25,54");
            opacity:0
          }
          10% {
            d:path("M62,22L25,54");
            opacity:0
          }
          10.8333% {
            d:path("M62,22L25,54");
            opacity:0
          }
          11.6667% {
            d:path("M62,22L25,54");
            opacity:0
          }
          12.5% {
            d:path("M62,22L25,54");
            opacity:0
          }
          13.3333% {
            d:path("M62,22L25,54");
            opacity:0
          }
          14.1667% {
            d:path("M62,22L25,54");
            opacity:0
          }
          15% {
            d:path("M62,22L25,54");
            opacity:0
          }
          15.8333% {
            d:path("M62,22L25,54");
            opacity:0
          }
          16.6667% {
            d:path("M62,22L25,54");
            opacity:0
          }
          17.5% {
            d:path("M62,22L25,54");
            opacity:0
          }
          18.3333% {
            d:path("M62,22L25,54");
            opacity:0
          }
          19.1667% {
            d:path("M62,22L25,54");
            opacity:0
          }
          20% {
            d:path("M62,22L25,54");
            opacity:0
          }
          20.8333% {
            d:path("M62,22L25,54");
            opacity:0
          }
          21.6667% {
            d:path("M62,22L25,54");
            opacity:0
          }
          22.5% {
            d:path("M62,22L25,54");
            opacity:0
          }
          23.3333% {
            d:path("M62,22L25,54");
            opacity:0
          }
          24.1667% {
            d:path("M62,22L25,54");
            opacity:0
          }
          25% {
            d:path("M62,22L25,54");
            opacity:0
          }
          25.8333% {
            d:path("M62,22L25,54");
            opacity:0
          }
          26.6667% {
            d:path("M62,22L25,54");
            opacity:0
          }
          27.5% {
            d:path("M62,22L25,54");
            opacity:0
          }
          28.3333% {
            d:path("M62,22L25,54");
            opacity:0
          }
          29.1667% {
            d:path("M62,22L25,54");
            opacity:0
          }
          30% {
            d:path("M62,22L25,54");
            opacity:0
          }
          30.8333% {
            d:path("M62,22L25,54");
            opacity:0
          }
          31.6667% {
            d:path("M62,22L25,54");
            opacity:0
          }
          32.5% {
            d:path("M62,22L25,54");
            opacity:0
          }
          33.3333% {
            d:path("M62,22L25,54");
            opacity:0
          }
          34.1667% {
            d:path("M62,22L25,54");
            opacity:0
          }
          35% {
            d:path("M62,22L25,54");
            opacity:1
          }
          35.8333% {
            d:path("M62,22L25,54");
            opacity:1
          }
          36.6667% {
            d:path("M62,22L25,54");
            opacity:1
          }
          37.5% {
            d:path("M62,22L25,54");
            opacity:1
          }
          38.3333% {
            d:path("M62,22L25,54");
            opacity:1
          }
          39.1667% {
            d:path("M62,22L25,54");
            opacity:1
          }
          40% {
            d:path("M62,22L25,54");
            opacity:1
          }
          40.8333% {
            d:path("M62,22L25,54");
            opacity:1
          }
          41.6667% {
            d:path("M62,22L25,54");
            opacity:1
          }
          42.5% {
            d:path("M62,22L25,54");
            opacity:1
          }
          43.3333% {
            d:path("M62,22L25,54");
            opacity:1
          }
          44.1667% {
            d:path("M62,22L25,54");
            opacity:1
          }
          45% {
            d:path("M62,22L25,54");
            opacity:1
          }
          45.8333% {
            d:path("M62,22L25,54");
            opacity:1
          }
          46.6667% {
            d:path("M62,22L25,54");
            opacity:1
          }
          47.5% {
            d:path("M62,22L25,54");
            opacity:1
          }
          48.3333% {
            d:path("M62,22L25,54");
            opacity:1
          }
          49.1667% {
            d:path("M62,22L25,54");
            opacity:1
          }
          50% {
            d:path("M62,22L25,54");
            opacity:1
          }
          50.8333% {
            d:path("M62,22L25,54");
            opacity:1
          }
          51.6667% {
            d:path("M62,22L25,54");
            opacity:1
          }
          52.5% {
            d:path("M62,22L25,54");
            opacity:1
          }
          53.3333% {
            d:path("M62,22L25,54");
            opacity:1
          }
          54.1667% {
            d:path("M62,22L25,54");
            opacity:1
          }
          55% {
            d:path("M62,22L25,54");
            opacity:1
          }
          55.8333% {
            d:path("M62,22L25,54");
            opacity:1
          }
          56.6667% {
            d:path("M62,22L25,54");
            opacity:1
          }
          57.5% {
            d:path("M62,22L25,54");
            opacity:1
          }
          58.3333% {
            d:path("M62,22L25,54");
            opacity:1
          }
          59.1667% {
            d:path("M61.943,22.0713L24.9287,54.0891");
            opacity:1
          }
          60% {
            d:path("M61.7797,22.2754L24.7246,54.3443");
            opacity:1
          }
          60.8333% {
            d:path("M61.522,22.5975L24.4025,54.7469");
            opacity:1
          }
          61.6667% {
            d:path("M61.1816,23.023L23.977,55.2787");
            opacity:1
          }
          62.5% {
            d:path("M60.7705,23.5369L23.4631,55.9211");
            opacity:1
          }
          63.3333% {
            d:path("M60.3003,24.1246L22.8754,56.6557");
            opacity:1
          }
          64.1667% {
            d:path("M59.783,24.7713L22.2287,57.4641");
            opacity:1
          }
          65% {
            d:path("M59.2302,25.4623L21.5377,58.3279");
            opacity:1
          }
          65.8333% {
            d:path("M58.6538,26.1828L20.8172,59.2285");
            opacity:1
          }
          66.6667% {
            d:path("M58.0656,26.918L20.082,60.1475");
            opacity:1
          }
          67.5% {
            d:path("M57.4774,27.6533L19.3467,61.0666");
            opacity:1
          }
          68.3333% {
            d:path("M56.901,28.3738L18.6262,61.9672");
            opacity:1
          }
          69.1667% {
            d:path("M56.3482,29.0648L17.9352,62.8309");
            opacity:1
          }
          70% {
            d:path("M55.8308,29.7115L17.2885,63.6393");
            opacity:1
          }
          70.8333% {
            d:path("M55.3607,30.2992L16.7008,64.374");
            opacity:1
          }
          71.6667% {
            d:path("M54.9495,30.8131L16.1869,65.0164");
            opacity:1
          }
          72.5% {
            d:path("M54.6092,31.2385L15.7615,65.5482");
            opacity:1
          }
          73.3333% {
            d:path("M54.3515,31.5607L15.4393,65.9508");
            opacity:1
          }
          74.1667% {
            d:path("M54.1882,31.7648L15.2352,66.2059");
            opacity:1
          }
          75% {
            d:path("M54.1311,31.8361L15.1639,66.2951");
            opacity:1
          }
          75.8333% {
            d:path("M54.1311,31.8361L15.1639,66.2951");
            opacity:1
          }
          76.6667% {
            d:path("M54.1311,31.8361L15.1639,66.2951");
            opacity:1
          }
          77.5% {
            d:path("M54.1311,31.8361L15.1639,66.2951");
            opacity:1
          }
          78.3333% {
            d:path("M54.1311,31.8361L15.1639,66.2951");
            opacity:1
          }
          79.1667% {
            d:path("M54.1311,31.8361L15.1639,66.2951");
            opacity:1
          }
          80% {
            d:path("M54.1311,31.8361L15.1639,66.2951");
            opacity:1
          }
          80.8333% {
            d:path("M54.1311,31.8361L15.1639,66.2951");
            opacity:1
          }
          81.6667% {
            d:path("M54.1311,31.8361L15.1639,66.2951");
            opacity:1
          }
          82.5% {
            d:path("M54.1311,31.8361L15.1639,66.2951");
            opacity:1
          }
          83.3333% {
            d:path("M54.1311,31.8361L15.1639,66.2951");
            opacity:1
          }
          84.1667% {
            d:path("M54.1311,31.8361L15.1639,66.2951");
            opacity:1
          }
          85% {
            d:path("M54.1311,31.8361L15.1639,66.2951");
            opacity:1
          }
          85.8333% {
            d:path("M54.1311,31.8361L15.1639,66.2951");
            opacity:1
          }
          86.6667% {
            d:path("M54.1311,31.8361L15.1639,66.2951");
            opacity:1
          }
          87.5% {
            d:path("M54.1311,31.8361L15.1639,66.2951");
            opacity:1
          }
          88.3333% {
            d:path("M54.1311,31.8361L15.1639,66.2951");
            opacity:1
          }
          89.1667% {
            d:path("M54.1311,31.8361L15.1639,66.2951");
            opacity:1
          }
          90% {
            d:path("M54.1311,31.8361L15.1639,66.2951");
            opacity:1
          }
          90.8333% {
            d:path("M54.1311,31.8361L15.1639,66.2951");
            opacity:1
          }
          91.6667% {
            d:path("M54.1311,31.8361L15.1639,66.2951");
            opacity:1
          }
          95% {
            opacity:1;
            d:path("M54.1311,31.8361L15.1639,66.2951")
          }
          95.01%,100% {
            opacity:0;
            d:path("M62,22L25,54")
          }
        }
        .edge6 {
          animation:edge6 12s linear infinite
        }
        @keyframes edge6 {
          0% {
            d:path("M25,54L44,88");
            opacity:0
          }
          0.8333% {
            d:path("M25,54L44,88");
            opacity:0
          }
          1.6667% {
            d:path("M25,54L44,88");
            opacity:0
          }
          2.5% {
            d:path("M25,54L44,88");
            opacity:0
          }
          3.3333% {
            d:path("M25,54L44,88");
            opacity:0
          }
          4.1667% {
            d:path("M25,54L44,88");
            opacity:0
          }
          5% {
            d:path("M25,54L44,88");
            opacity:0
          }
          5.8333% {
            d:path("M25,54L44,88");
            opacity:0
          }
          6.6667% {
            d:path("M25,54L44,88");
            opacity:0
          }
          7.5% {
            d:path("M25,54L44,88");
            opacity:0
          }
          8.3333% {
            d:path("M25,54L44,88");
            opacity:0
          }
          9.1667% {
            d:path("M25,54L44,88");
            opacity:0
          }
          10% {
            d:path("M25,54L44,88");
            opacity:0
          }
          10.8333% {
            d:path("M25,54L44,88");
            opacity:0
          }
          11.6667% {
            d:path("M25,54L44,88");
            opacity:0
          }
          12.5% {
            d:path("M25,54L44,88");
            opacity:0
          }
          13.3333% {
            d:path("M25,54L44,88");
            opacity:0
          }
          14.1667% {
            d:path("M25,54L44,88");
            opacity:0
          }
          15% {
            d:path("M25,54L44,88");
            opacity:0
          }
          15.8333% {
            d:path("M25,54L44,88");
            opacity:0
          }
          16.6667% {
            d:path("M25,54L44,88");
            opacity:0
          }
          17.5% {
            d:path("M25,54L44,88");
            opacity:0
          }
          18.3333% {
            d:path("M25,54L44,88");
            opacity:0
          }
          19.1667% {
            d:path("M25,54L44,88");
            opacity:0
          }
          20% {
            d:path("M25,54L44,88");
            opacity:0
          }
          20.8333% {
            d:path("M25,54L44,88");
            opacity:0
          }
          21.6667% {
            d:path("M25,54L44,88");
            opacity:0
          }
          22.5% {
            d:path("M25,54L44,88");
            opacity:0
          }
          23.3333% {
            d:path("M25,54L44,88");
            opacity:0
          }
          24.1667% {
            d:path("M25,54L44,88");
            opacity:0
          }
          25% {
            d:path("M25,54L44,88");
            opacity:0
          }
          25.8333% {
            d:path("M25,54L44,88");
            opacity:0
          }
          26.6667% {
            d:path("M25,54L44,88");
            opacity:0
          }
          27.5% {
            d:path("M25,54L44,88");
            opacity:0
          }
          28.3333% {
            d:path("M25,54L44,88");
            opacity:0
          }
          29.1667% {
            d:path("M25,54L44,88");
            opacity:0
          }
          30% {
            d:path("M25,54L44,88");
            opacity:0
          }
          30.8333% {
            d:path("M25,54L44,88");
            opacity:0
          }
          31.6667% {
            d:path("M25,54L44,88");
            opacity:0
          }
          32.5% {
            d:path("M25,54L44,88");
            opacity:0
          }
          33.3333% {
            d:path("M25,54L44,88");
            opacity:0
          }
          34.1667% {
            d:path("M25,54L44,88");
            opacity:0
          }
          35% {
            d:path("M25,54L44,88");
            opacity:0
          }
          35.8333% {
            d:path("M25,54L44,88");
            opacity:0
          }
          36.6667% {
            d:path("M25,54L44,88");
            opacity:0
          }
          37.5% {
            d:path("M25,54L44,88");
            opacity:0
          }
          38.3333% {
            d:path("M25,54L44,88");
            opacity:0
          }
          39.1667% {
            d:path("M25,54L44,88");
            opacity:0
          }
          40% {
            d:path("M25,54L44,88");
            opacity:0
          }
          40.8333% {
            d:path("M25,54L44,88");
            opacity:0
          }
          41.6667% {
            d:path("M25,54L44,88");
            opacity:1
          }
          42.5% {
            d:path("M25,54L44,88");
            opacity:1
          }
          43.3333% {
            d:path("M25,54L44,88");
            opacity:1
          }
          44.1667% {
            d:path("M25,54L44,88");
            opacity:1
          }
          45% {
            d:path("M25,54L44,88");
            opacity:1
          }
          45.8333% {
            d:path("M25,54L44,88");
            opacity:1
          }
          46.6667% {
            d:path("M25,54L44,88");
            opacity:1
          }
          47.5% {
            d:path("M25,54L44,88");
            opacity:1
          }
          48.3333% {
            d:path("M25,54L44,88");
            opacity:1
          }
          49.1667% {
            d:path("M25,54L44,88");
            opacity:1
          }
          50% {
            d:path("M25,54L44,88");
            opacity:1
          }
          50.8333% {
            d:path("M25,54L44,88");
            opacity:1
          }
          51.6667% {
            d:path("M25,54L44,88");
            opacity:1
          }
          52.5% {
            d:path("M25,54L44,88");
            opacity:1
          }
          53.3333% {
            d:path("M25,54L44,88");
            opacity:1
          }
          54.1667% {
            d:path("M25,54L44,88");
            opacity:1
          }
          55% {
            d:path("M25,54L44,88");
            opacity:1
          }
          55.8333% {
            d:path("M25,54L44,88");
            opacity:1
          }
          56.6667% {
            d:path("M25,54L44,88");
            opacity:1
          }
          57.5% {
            d:path("M25,54L44,88");
            opacity:1
          }
          58.3333% {
            d:path("M25,54L44,88");
            opacity:1
          }
          59.1667% {
            d:path("M24.9287,54.0891L43.9144,88.107");
            opacity:1
          }
          60% {
            d:path("M24.7246,54.3443L43.6695,88.4131");
            opacity:1
          }
          60.8333% {
            d:path("M24.4025,54.7469L43.283,88.8963");
            opacity:1
          }
          61.6667% {
            d:path("M23.977,55.2787L42.7725,89.5344");
            opacity:1
          }
          62.5% {
            d:path("M23.4631,55.9211L42.1557,90.3053");
            opacity:1
          }
          63.3333% {
            d:path("M22.8754,56.6557L41.4505,91.1869");
            opacity:1
          }
          64.1667% {
            d:path("M22.2287,57.4641L40.6744,92.157");
            opacity:1
          }
          65% {
            d:path("M21.5377,58.3279L39.8452,93.1934");
            opacity:1
          }
          65.8333% {
            d:path("M20.8172,59.2285L38.9807,94.2742");
            opacity:1
          }
          66.6667% {
            d:path("M20.082,60.1475L38.0984,95.377");
            opacity:1
          }
          67.5% {
            d:path("M19.3467,61.0666L37.2161,96.4799");
            opacity:1
          }
          68.3333% {
            d:path("M18.6262,61.9672L36.3515,97.5607");
            opacity:1
          }
          69.1667% {
            d:path("M17.9352,62.8309L35.5223,98.5971");
            opacity:1
          }
          70% {
            d:path("M17.2885,63.6393L34.7462,99.5672");
            opacity:1
          }
          70.8333% {
            d:path("M16.7008,64.374L34.041,100.4488");
            opacity:1
          }
          71.6667% {
            d:path("M16.1869,65.0164L33.4243,101.2197");
            opacity:1
          }
          72.5% {
            d:path("M15.7615,65.5482L32.9138,101.8578");
            opacity:1
          }
          73.3333% {
            d:path("M15.4393,65.9508L32.5272,102.341");
            opacity:1
          }
          74.1667% {
            d:path("M15.2352,66.2059L32.2823,102.6471");
            opacity:1
          }
          75% {
            d:path("M15.1639,66.2951L32.1967,102.7541");
            opacity:1
          }
          75.8333% {
            d:path("M15.1639,66.2951L32.1967,102.7541");
            opacity:1
          }
          76.6667% {
            d:path("M15.1639,66.2951L32.1967,102.7541");
            opacity:1
          }
          77.5% {
            d:path("M15.1639,66.2951L32.1967,102.7541");
            opacity:1
          }
          78.3333% {
            d:path("M15.1639,66.2951L32.1967,102.7541");
            opacity:1
          }
          79.1667% {
            d:path("M15.1639,66.2951L32.1967,102.7541");
            opacity:1
          }
          80% {
            d:path("M15.1639,66.2951L32.1967,102.7541");
            opacity:1
          }
          80.8333% {
            d:path("M15.1639,66.2951L32.1967,102.7541");
            opacity:1
          }
          81.6667% {
            d:path("M15.1639,66.2951L32.1967,102.7541");
            opacity:1
          }
          82.5% {
            d:path("M15.1639,66.2951L32.1967,102.7541");
            opacity:1
          }
          83.3333% {
            d:path("M15.1639,66.2951L32.1967,102.7541");
            opacity:1
          }
          84.1667% {
            d:path("M15.1639,66.2951L32.1967,102.7541");
            opacity:1
          }
          85% {
            d:path("M15.1639,66.2951L32.1967,102.7541");
            opacity:1
          }
          85.8333% {
            d:path("M15.1639,66.2951L32.1967,102.7541");
            opacity:1
          }
          86.6667% {
            d:path("M15.1639,66.2951L32.1967,102.7541");
            opacity:1
          }
          87.5% {
            d:path("M15.1639,66.2951L32.1967,102.7541");
            opacity:1
          }
          88.3333% {
            d:path("M15.1639,66.2951L32.1967,102.7541");
            opacity:1
          }
          89.1667% {
            d:path("M15.1639,66.2951L32.1967,102.7541");
            opacity:1
          }
          90% {
            d:path("M15.1639,66.2951L32.1967,102.7541");
            opacity:1
          }
          90.8333% {
            d:path("M15.1639,66.2951L32.1967,102.7541");
            opacity:1
          }
          91.6667% {
            d:path("M15.1639,66.2951L32.1967,102.7541");
            opacity:1
          }
          95% {
            opacity:1;
            d:path("M15.1639,66.2951L32.1967,102.7541")
          }
          95.01%,100% {
            opacity:0;
            d:path("M25,54L44,88")
          }
        }
        .pose0 {
          animation:pose0 12s linear infinite
        }
        @keyframes pose0 {
          0% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          0.8333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          1.6667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          2.5% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          3.3333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          4.1667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          5% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          5.8333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          6.6667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          7.5% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          8.3333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          9.1667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          10% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          10.8333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          11.6667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          12.5% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          13.3333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          14.1667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          15% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          15.8333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          16.6667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          17.5% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          18.3333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          19.1667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          20% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          20.8333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          21.6667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          22.5% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          23.3333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          24.1667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          25% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          25.8333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          26.6667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          27.5% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          28.3333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          29.1667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          30% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          30.8333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          31.6667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          32.5% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          33.3333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          34.1667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          35% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          35.8333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          36.6667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          37.5% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          38.3333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          39.1667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          40% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          40.8333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          41.6667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          42.5% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          43.3333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          44.1667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          45% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          45.8333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          46.6667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          47.5% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          48.3333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          49.1667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          50% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          50.8333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          51.6667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          52.5% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          53.3333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          54.1667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          55% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          55.8333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          56.6667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          57.5% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          58.3333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          59.1667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          60% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          60.8333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          61.6667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          62.5% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          63.3333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          64.1667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          65% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          65.8333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          66.6667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          67.5% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          68.3333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          69.1667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          70% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          70.8333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          71.6667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          72.5% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          73.3333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          74.1667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          75% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          75.8333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          76.6667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          77.5% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          78.3333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          79.1667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          80% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          80.8333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          81.6667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          82.5% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          83.3333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          84.1667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          85% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          85.8333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          86.6667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          87.5% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          88.3333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          89.1667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          90% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          90.8333% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          91.6667% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          95% {
            cx:32px;
            cy:103px;
            opacity:1
          }
          95.01%,100% {
            cx:32px;
            cy:103px;
            opacity:1
          }
        }
        .pose1 {
          animation:pose1 12s linear infinite
        }
        @keyframes pose1 {
          0% {
            cx:72px;
            cy:109px;
            opacity:0
          }
          0.8333% {
            cx:72px;
            cy:109px;
            opacity:0
          }
          1.6667% {
            cx:72px;
            cy:109px;
            opacity:0
          }
          2.5% {
            cx:72px;
            cy:109px;
            opacity:0
          }
          3.3333% {
            cx:72px;
            cy:109px;
            opacity:0
          }
          4.1667% {
            cx:72px;
            cy:109px;
            opacity:0
          }
          5% {
            cx:72px;
            cy:109px;
            opacity:0
          }
          5.8333% {
            cx:72px;
            cy:109px;
            opacity:0
          }
          6.6667% {
            cx:72px;
            cy:109px;
            opacity:0
          }
          7.5% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          8.3333% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          9.1667% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          10% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          10.8333% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          11.6667% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          12.5% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          13.3333% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          14.1667% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          15% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          15.8333% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          16.6667% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          17.5% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          18.3333% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          19.1667% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          20% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          20.8333% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          21.6667% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          22.5% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          23.3333% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          24.1667% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          25% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          25.8333% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          26.6667% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          27.5% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          28.3333% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          29.1667% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          30% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          30.8333% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          31.6667% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          32.5% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          33.3333% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          34.1667% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          35% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          35.8333% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          36.6667% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          37.5% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          38.3333% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          39.1667% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          40% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          40.8333% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          41.6667% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          42.5% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          43.3333% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          44.1667% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          45% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          45.8333% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          46.6667% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          47.5% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          48.3333% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          49.1667% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          50% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          50.8333% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          51.6667% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          52.5% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          53.3333% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          54.1667% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          55% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          55.8333% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          56.6667% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          57.5% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          58.3333% {
            cx:72px;
            cy:109px;
            opacity:1
          }
          59.1667% {
            cx:71.9857px;
            cy:109.0178px;
            opacity:1
          }
          60% {
            cx:71.9449px;
            cy:109.0689px;
            opacity:1
          }
          60.8333% {
            cx:71.8805px;
            cy:109.1494px;
            opacity:1
          }
          61.6667% {
            cx:71.7954px;
            cy:109.2557px;
            opacity:1
          }
          62.5% {
            cx:71.6926px;
            cy:109.3842px;
            opacity:1
          }
          63.3333% {
            cx:71.5751px;
            cy:109.5311px;
            opacity:1
          }
          64.1667% {
            cx:71.4457px;
            cy:109.6928px;
            opacity:1
          }
          65% {
            cx:71.3075px;
            cy:109.8656px;
            opacity:1
          }
          65.8333% {
            cx:71.1634px;
            cy:110.0457px;
            opacity:1
          }
          66.6667% {
            cx:71.0164px;
            cy:110.2295px;
            opacity:1
          }
          67.5% {
            cx:70.8693px;
            cy:110.4133px;
            opacity:1
          }
          68.3333% {
            cx:70.7252px;
            cy:110.5934px;
            opacity:1
          }
          69.1667% {
            cx:70.587px;
            cy:110.7662px;
            opacity:1
          }
          70% {
            cx:70.4577px;
            cy:110.9279px;
            opacity:1
          }
          70.8333% {
            cx:70.3402px;
            cy:111.0748px;
            opacity:1
          }
          71.6667% {
            cx:70.2374px;
            cy:111.2033px;
            opacity:1
          }
          72.5% {
            cx:70.1523px;
            cy:111.3096px;
            opacity:1
          }
          73.3333% {
            cx:70.0879px;
            cy:111.3902px;
            opacity:1
          }
          74.1667% {
            cx:70.047px;
            cy:111.4412px;
            opacity:1
          }
          75% {
            cx:70.0328px;
            cy:111.459px;
            opacity:1
          }
          75.8333% {
            cx:70.0328px;
            cy:111.459px;
            opacity:1
          }
          76.6667% {
            cx:70.0328px;
            cy:111.459px;
            opacity:1
          }
          77.5% {
            cx:70.0328px;
            cy:111.459px;
            opacity:1
          }
          78.3333% {
            cx:70.0328px;
            cy:111.459px;
            opacity:1
          }
          79.1667% {
            cx:70.0328px;
            cy:111.459px;
            opacity:1
          }
          80% {
            cx:70.0328px;
            cy:111.459px;
            opacity:1
          }
          80.8333% {
            cx:70.0328px;
            cy:111.459px;
            opacity:1
          }
          81.6667% {
            cx:70.0328px;
            cy:111.459px;
            opacity:1
          }
          82.5% {
            cx:70.0328px;
            cy:111.459px;
            opacity:1
          }
          83.3333% {
            cx:70.0328px;
            cy:111.459px;
            opacity:1
          }
          84.1667% {
            cx:70.0328px;
            cy:111.459px;
            opacity:1
          }
          85% {
            cx:70.0328px;
            cy:111.459px;
            opacity:1
          }
          85.8333% {
            cx:70.0328px;
            cy:111.459px;
            opacity:1
          }
          86.6667% {
            cx:70.0328px;
            cy:111.459px;
            opacity:1
          }
          87.5% {
            cx:70.0328px;
            cy:111.459px;
            opacity:1
          }
          88.3333% {
            cx:70.0328px;
            cy:111.459px;
            opacity:1
          }
          89.1667% {
            cx:70.0328px;
            cy:111.459px;
            opacity:1
          }
          90% {
            cx:70.0328px;
            cy:111.459px;
            opacity:1
          }
          90.8333% {
            cx:70.0328px;
            cy:111.459px;
            opacity:1
          }
          91.6667% {
            cx:70.0328px;
            cy:111.459px;
            opacity:1
          }
          95% {
            cx:70.0328px;
            cy:111.459px;
            opacity:1
          }
          95.01%,100% {
            cx:72px;
            cy:109px;
            opacity:0
          }
        }
        .pose2 {
          animation:pose2 12s linear infinite
        }
        @keyframes pose2 {
          0% {
            cx:113px;
            cy:81px;
            opacity:0
          }
          0.8333% {
            cx:113px;
            cy:81px;
            opacity:0
          }
          1.6667% {
            cx:113px;
            cy:81px;
            opacity:0
          }
          2.5% {
            cx:113px;
            cy:81px;
            opacity:0
          }
          3.3333% {
            cx:113px;
            cy:81px;
            opacity:0
          }
          4.1667% {
            cx:113px;
            cy:81px;
            opacity:0
          }
          5% {
            cx:113px;
            cy:81px;
            opacity:0
          }
          5.8333% {
            cx:113px;
            cy:81px;
            opacity:0
          }
          6.6667% {
            cx:113px;
            cy:81px;
            opacity:0
          }
          7.5% {
            cx:113px;
            cy:81px;
            opacity:0
          }
          8.3333% {
            cx:113px;
            cy:81px;
            opacity:0
          }
          9.1667% {
            cx:113px;
            cy:81px;
            opacity:0
          }
          10% {
            cx:113px;
            cy:81px;
            opacity:0
          }
          10.8333% {
            cx:113px;
            cy:81px;
            opacity:0
          }
          11.6667% {
            cx:113px;
            cy:81px;
            opacity:0
          }
          12.5% {
            cx:113px;
            cy:81px;
            opacity:0
          }
          13.3333% {
            cx:113px;
            cy:81px;
            opacity:0
          }
          14.1667% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          15% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          15.8333% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          16.6667% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          17.5% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          18.3333% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          19.1667% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          20% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          20.8333% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          21.6667% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          22.5% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          23.3333% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          24.1667% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          25% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          25.8333% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          26.6667% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          27.5% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          28.3333% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          29.1667% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          30% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          30.8333% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          31.6667% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          32.5% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          33.3333% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          34.1667% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          35% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          35.8333% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          36.6667% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          37.5% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          38.3333% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          39.1667% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          40% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          40.8333% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          41.6667% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          42.5% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          43.3333% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          44.1667% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          45% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          45.8333% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          46.6667% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          47.5% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          48.3333% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          49.1667% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          50% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          50.8333% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          51.6667% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          52.5% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          53.3333% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          54.1667% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          55% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          55.8333% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          56.6667% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          57.5% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          58.3333% {
            cx:113px;
            cy:81px;
            opacity:1
          }
          59.1667% {
            cx:112.9715px;
            cy:81.0357px;
            opacity:1
          }
          60% {
            cx:112.8898px;
            cy:81.1377px;
            opacity:1
          }
          60.8333% {
            cx:112.761px;
            cy:81.2988px;
            opacity:1
          }
          61.6667% {
            cx:112.5908px;
            cy:81.5115px;
            opacity:1
          }
          62.5% {
            cx:112.3852px;
            cy:81.7684px;
            opacity:1
          }
          63.3333% {
            cx:112.1502px;
            cy:82.0623px;
            opacity:1
          }
          64.1667% {
            cx:111.8915px;
            cy:82.3857px;
            opacity:1
          }
          65% {
            cx:111.6151px;
            cy:82.7311px;
            opacity:1
          }
          65.8333% {
            cx:111.3269px;
            cy:83.0914px;
            opacity:1
          }
          66.6667% {
            cx:111.0328px;
            cy:83.459px;
            opacity:1
          }
          67.5% {
            cx:110.7387px;
            cy:83.8266px;
            opacity:1
          }
          68.3333% {
            cx:110.4505px;
            cy:84.1869px;
            opacity:1
          }
          69.1667% {
            cx:110.1741px;
            cy:84.5324px;
            opacity:1
          }
          70% {
            cx:109.9154px;
            cy:84.8557px;
            opacity:1
          }
          70.8333% {
            cx:109.6803px;
            cy:85.1496px;
            opacity:1
          }
          71.6667% {
            cx:109.4748px;
            cy:85.4066px;
            opacity:1
          }
          72.5% {
            cx:109.3046px;
            cy:85.6193px;
            opacity:1
          }
          73.3333% {
            cx:109.1757px;
            cy:85.7803px;
            opacity:1
          }
          74.1667% {
            cx:109.0941px;
            cy:85.8824px;
            opacity:1
          }
          75% {
            cx:109.0656px;
            cy:85.918px;
            opacity:1
          }
          75.8333% {
            cx:109.0656px;
            cy:85.918px;
            opacity:1
          }
          76.6667% {
            cx:109.0656px;
            cy:85.918px;
            opacity:1
          }
          77.5% {
            cx:109.0656px;
            cy:85.918px;
            opacity:1
          }
          78.3333% {
            cx:109.0656px;
            cy:85.918px;
            opacity:1
          }
          79.1667% {
            cx:109.0656px;
            cy:85.918px;
            opacity:1
          }
          80% {
            cx:109.0656px;
            cy:85.918px;
            opacity:1
          }
          80.8333% {
            cx:109.0656px;
            cy:85.918px;
            opacity:1
          }
          81.6667% {
            cx:109.0656px;
            cy:85.918px;
            opacity:1
          }
          82.5% {
            cx:109.0656px;
            cy:85.918px;
            opacity:1
          }
          83.3333% {
            cx:109.0656px;
            cy:85.918px;
            opacity:1
          }
          84.1667% {
            cx:109.0656px;
            cy:85.918px;
            opacity:1
          }
          85% {
            cx:109.0656px;
            cy:85.918px;
            opacity:1
          }
          85.8333% {
            cx:109.0656px;
            cy:85.918px;
            opacity:1
          }
          86.6667% {
            cx:109.0656px;
            cy:85.918px;
            opacity:1
          }
          87.5% {
            cx:109.0656px;
            cy:85.918px;
            opacity:1
          }
          88.3333% {
            cx:109.0656px;
            cy:85.918px;
            opacity:1
          }
          89.1667% {
            cx:109.0656px;
            cy:85.918px;
            opacity:1
          }
          90% {
            cx:109.0656px;
            cy:85.918px;
            opacity:1
          }
          90.8333% {
            cx:109.0656px;
            cy:85.918px;
            opacity:1
          }
          91.6667% {
            cx:109.0656px;
            cy:85.918px;
            opacity:1
          }
          95% {
            cx:109.0656px;
            cy:85.918px;
            opacity:1
          }
          95.01%,100% {
            cx:113px;
            cy:81px;
            opacity:0
          }
        }
        .pose3 {
          animation:pose3 12s linear infinite
        }
        @keyframes pose3 {
          0% {
            cx:106px;
            cy:37px;
            opacity:0
          }
          0.8333% {
            cx:106px;
            cy:37px;
            opacity:0
          }
          1.6667% {
            cx:106px;
            cy:37px;
            opacity:0
          }
          2.5% {
            cx:106px;
            cy:37px;
            opacity:0
          }
          3.3333% {
            cx:106px;
            cy:37px;
            opacity:0
          }
          4.1667% {
            cx:106px;
            cy:37px;
            opacity:0
          }
          5% {
            cx:106px;
            cy:37px;
            opacity:0
          }
          5.8333% {
            cx:106px;
            cy:37px;
            opacity:0
          }
          6.6667% {
            cx:106px;
            cy:37px;
            opacity:0
          }
          7.5% {
            cx:106px;
            cy:37px;
            opacity:0
          }
          8.3333% {
            cx:106px;
            cy:37px;
            opacity:0
          }
          9.1667% {
            cx:106px;
            cy:37px;
            opacity:0
          }
          10% {
            cx:106px;
            cy:37px;
            opacity:0
          }
          10.8333% {
            cx:106px;
            cy:37px;
            opacity:0
          }
          11.6667% {
            cx:106px;
            cy:37px;
            opacity:0
          }
          12.5% {
            cx:106px;
            cy:37px;
            opacity:0
          }
          13.3333% {
            cx:106px;
            cy:37px;
            opacity:0
          }
          14.1667% {
            cx:106px;
            cy:37px;
            opacity:0
          }
          15% {
            cx:106px;
            cy:37px;
            opacity:0
          }
          15.8333% {
            cx:106px;
            cy:37px;
            opacity:0
          }
          16.6667% {
            cx:106px;
            cy:37px;
            opacity:0
          }
          17.5% {
            cx:106px;
            cy:37px;
            opacity:0
          }
          18.3333% {
            cx:106px;
            cy:37px;
            opacity:0
          }
          19.1667% {
            cx:106px;
            cy:37px;
            opacity:0
          }
          20% {
            cx:106px;
            cy:37px;
            opacity:0
          }
          20.8333% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          21.6667% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          22.5% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          23.3333% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          24.1667% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          25% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          25.8333% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          26.6667% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          27.5% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          28.3333% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          29.1667% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          30% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          30.8333% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          31.6667% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          32.5% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          33.3333% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          34.1667% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          35% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          35.8333% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          36.6667% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          37.5% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          38.3333% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          39.1667% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          40% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          40.8333% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          41.6667% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          42.5% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          43.3333% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          44.1667% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          45% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          45.8333% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          46.6667% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          47.5% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          48.3333% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          49.1667% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          50% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          50.8333% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          51.6667% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          52.5% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          53.3333% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          54.1667% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          55% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          55.8333% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          56.6667% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          57.5% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          58.3333% {
            cx:106px;
            cy:37px;
            opacity:1
          }
          59.1667% {
            cx:105.9572px;
            cy:37.0535px;
            opacity:1
          }
          60% {
            cx:105.8348px;
            cy:37.2066px;
            opacity:1
          }
          60.8333% {
            cx:105.6415px;
            cy:37.4482px;
            opacity:1
          }
          61.6667% {
            cx:105.3862px;
            cy:37.7672px;
            opacity:1
          }
          62.5% {
            cx:105.0779px;
            cy:38.1527px;
            opacity:1
          }
          63.3333% {
            cx:104.7252px;
            cy:38.5934px;
            opacity:1
          }
          64.1667% {
            cx:104.3372px;
            cy:39.0785px;
            opacity:1
          }
          65% {
            cx:103.9226px;
            cy:39.5967px;
            opacity:1
          }
          65.8333% {
            cx:103.4903px;
            cy:40.1371px;
            opacity:1
          }
          66.6667% {
            cx:103.0492px;
            cy:40.6885px;
            opacity:1
          }
          67.5% {
            cx:102.608px;
            cy:41.24px;
            opacity:1
          }
          68.3333% {
            cx:102.1757px;
            cy:41.7803px;
            opacity:1
          }
          69.1667% {
            cx:101.7611px;
            cy:42.2986px;
            opacity:1
          }
          70% {
            cx:101.3731px;
            cy:42.7836px;
            opacity:1
          }
          70.8333% {
            cx:101.0205px;
            cy:43.2244px;
            opacity:1
          }
          71.6667% {
            cx:100.7121px;
            cy:43.6098px;
            opacity:1
          }
          72.5% {
            cx:100.4569px;
            cy:43.9289px;
            opacity:1
          }
          73.3333% {
            cx:100.2636px;
            cy:44.1705px;
            opacity:1
          }
          74.1667% {
            cx:100.1411px;
            cy:44.3236px;
            opacity:1
          }
          75% {
            cx:100.0984px;
            cy:44.377px;
            opacity:1
          }
          75.8333% {
            cx:100.0984px;
            cy:44.377px;
            opacity:1
          }
          76.6667% {
            cx:100.0984px;
            cy:44.377px;
            opacity:1
          }
          77.5% {
            cx:100.0984px;
            cy:44.377px;
            opacity:1
          }
          78.3333% {
            cx:100.0984px;
            cy:44.377px;
            opacity:1
          }
          79.1667% {
            cx:100.0984px;
            cy:44.377px;
            opacity:1
          }
          80% {
            cx:100.0984px;
            cy:44.377px;
            opacity:1
          }
          80.8333% {
            cx:100.0984px;
            cy:44.377px;
            opacity:1
          }
          81.6667% {
            cx:100.0984px;
            cy:44.377px;
            opacity:1
          }
          82.5% {
            cx:100.0984px;
            cy:44.377px;
            opacity:1
          }
          83.3333% {
            cx:100.0984px;
            cy:44.377px;
            opacity:1
          }
          84.1667% {
            cx:100.0984px;
            cy:44.377px;
            opacity:1
          }
          85% {
            cx:100.0984px;
            cy:44.377px;
            opacity:1
          }
          85.8333% {
            cx:100.0984px;
            cy:44.377px;
            opacity:1
          }
          86.6667% {
            cx:100.0984px;
            cy:44.377px;
            opacity:1
          }
          87.5% {
            cx:100.0984px;
            cy:44.377px;
            opacity:1
          }
          88.3333% {
            cx:100.0984px;
            cy:44.377px;
            opacity:1
          }
          89.1667% {
            cx:100.0984px;
            cy:44.377px;
            opacity:1
          }
          90% {
            cx:100.0984px;
            cy:44.377px;
            opacity:1
          }
          90.8333% {
            cx:100.0984px;
            cy:44.377px;
            opacity:1
          }
          91.6667% {
            cx:100.0984px;
            cy:44.377px;
            opacity:1
          }
          95% {
            cx:100.0984px;
            cy:44.377px;
            opacity:1
          }
          95.01%,100% {
            cx:106px;
            cy:37px;
            opacity:0
          }
        }
        .pose4 {
          animation:pose4 12s linear infinite
        }
        @keyframes pose4 {
          0% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          0.8333% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          1.6667% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          2.5% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          3.3333% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          4.1667% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          5% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          5.8333% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          6.6667% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          7.5% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          8.3333% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          9.1667% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          10% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          10.8333% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          11.6667% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          12.5% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          13.3333% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          14.1667% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          15% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          15.8333% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          16.6667% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          17.5% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          18.3333% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          19.1667% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          20% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          20.8333% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          21.6667% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          22.5% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          23.3333% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          24.1667% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          25% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          25.8333% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          26.6667% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          27.5% {
            cx:62px;
            cy:22px;
            opacity:0
          }
          28.3333% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          29.1667% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          30% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          30.8333% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          31.6667% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          32.5% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          33.3333% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          34.1667% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          35% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          35.8333% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          36.6667% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          37.5% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          38.3333% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          39.1667% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          40% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          40.8333% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          41.6667% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          42.5% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          43.3333% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          44.1667% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          45% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          45.8333% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          46.6667% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          47.5% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          48.3333% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          49.1667% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          50% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          50.8333% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          51.6667% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          52.5% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          53.3333% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          54.1667% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          55% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          55.8333% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          56.6667% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          57.5% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          58.3333% {
            cx:62px;
            cy:22px;
            opacity:1
          }
          59.1667% {
            cx:61.943px;
            cy:22.0713px;
            opacity:1
          }
          60% {
            cx:61.7797px;
            cy:22.2754px;
            opacity:1
          }
          60.8333% {
            cx:61.522px;
            cy:22.5975px;
            opacity:1
          }
          61.6667% {
            cx:61.1816px;
            cy:23.023px;
            opacity:1
          }
          62.5% {
            cx:60.7705px;
            cy:23.5369px;
            opacity:1
          }
          63.3333% {
            cx:60.3003px;
            cy:24.1246px;
            opacity:1
          }
          64.1667% {
            cx:59.783px;
            cy:24.7713px;
            opacity:1
          }
          65% {
            cx:59.2302px;
            cy:25.4623px;
            opacity:1
          }
          65.8333% {
            cx:58.6538px;
            cy:26.1828px;
            opacity:1
          }
          66.6667% {
            cx:58.0656px;
            cy:26.918px;
            opacity:1
          }
          67.5% {
            cx:57.4774px;
            cy:27.6533px;
            opacity:1
          }
          68.3333% {
            cx:56.901px;
            cy:28.3738px;
            opacity:1
          }
          69.1667% {
            cx:56.3482px;
            cy:29.0648px;
            opacity:1
          }
          70% {
            cx:55.8308px;
            cy:29.7115px;
            opacity:1
          }
          70.8333% {
            cx:55.3607px;
            cy:30.2992px;
            opacity:1
          }
          71.6667% {
            cx:54.9495px;
            cy:30.8131px;
            opacity:1
          }
          72.5% {
            cx:54.6092px;
            cy:31.2385px;
            opacity:1
          }
          73.3333% {
            cx:54.3515px;
            cy:31.5607px;
            opacity:1
          }
          74.1667% {
            cx:54.1882px;
            cy:31.7648px;
            opacity:1
          }
          75% {
            cx:54.1311px;
            cy:31.8361px;
            opacity:1
          }
          75.8333% {
            cx:54.1311px;
            cy:31.8361px;
            opacity:1
          }
          76.6667% {
            cx:54.1311px;
            cy:31.8361px;
            opacity:1
          }
          77.5% {
            cx:54.1311px;
            cy:31.8361px;
            opacity:1
          }
          78.3333% {
            cx:54.1311px;
            cy:31.8361px;
            opacity:1
          }
          79.1667% {
            cx:54.1311px;
            cy:31.8361px;
            opacity:1
          }
          80% {
            cx:54.1311px;
            cy:31.8361px;
            opacity:1
          }
          80.8333% {
            cx:54.1311px;
            cy:31.8361px;
            opacity:1
          }
          81.6667% {
            cx:54.1311px;
            cy:31.8361px;
            opacity:1
          }
          82.5% {
            cx:54.1311px;
            cy:31.8361px;
            opacity:1
          }
          83.3333% {
            cx:54.1311px;
            cy:31.8361px;
            opacity:1
          }
          84.1667% {
            cx:54.1311px;
            cy:31.8361px;
            opacity:1
          }
          85% {
            cx:54.1311px;
            cy:31.8361px;
            opacity:1
          }
          85.8333% {
            cx:54.1311px;
            cy:31.8361px;
            opacity:1
          }
          86.6667% {
            cx:54.1311px;
            cy:31.8361px;
            opacity:1
          }
          87.5% {
            cx:54.1311px;
            cy:31.8361px;
            opacity:1
          }
          88.3333% {
            cx:54.1311px;
            cy:31.8361px;
            opacity:1
          }
          89.1667% {
            cx:54.1311px;
            cy:31.8361px;
            opacity:1
          }
          90% {
            cx:54.1311px;
            cy:31.8361px;
            opacity:1
          }
          90.8333% {
            cx:54.1311px;
            cy:31.8361px;
            opacity:1
          }
          91.6667% {
            cx:54.1311px;
            cy:31.8361px;
            opacity:1
          }
          95% {
            cx:54.1311px;
            cy:31.8361px;
            opacity:1
          }
          95.01%,100% {
            cx:62px;
            cy:22px;
            opacity:0
          }
        }
        .pose5 {
          animation:pose5 12s linear infinite
        }
        @keyframes pose5 {
          0% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          0.8333% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          1.6667% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          2.5% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          3.3333% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          4.1667% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          5% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          5.8333% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          6.6667% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          7.5% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          8.3333% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          9.1667% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          10% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          10.8333% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          11.6667% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          12.5% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          13.3333% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          14.1667% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          15% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          15.8333% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          16.6667% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          17.5% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          18.3333% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          19.1667% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          20% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          20.8333% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          21.6667% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          22.5% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          23.3333% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          24.1667% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          25% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          25.8333% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          26.6667% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          27.5% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          28.3333% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          29.1667% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          30% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          30.8333% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          31.6667% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          32.5% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          33.3333% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          34.1667% {
            cx:25px;
            cy:54px;
            opacity:0
          }
          35% {
            cx:25px;
            cy:54px;
            opacity:1
          }
          35.8333% {
            cx:25px;
            cy:54px;
            opacity:1
          }
          36.6667% {
            cx:25px;
            cy:54px;
            opacity:1
          }
          37.5% {
            cx:25px;
            cy:54px;
            opacity:1
          }
          38.3333% {
            cx:25px;
            cy:54px;
            opacity:1
          }
          39.1667% {
            cx:25px;
            cy:54px;
            opacity:1
          }
          40% {
            cx:25px;
            cy:54px;
            opacity:1
          }
          40.8333% {
            cx:25px;
            cy:54px;
            opacity:1
          }
          41.6667% {
            cx:25px;
            cy:54px;
            opacity:1
          }
          42.5% {
            cx:25px;
            cy:54px;
            opacity:1
          }
          43.3333% {
            cx:25px;
            cy:54px;
            opacity:1
          }
          44.1667% {
            cx:25px;
            cy:54px;
            opacity:1
          }
          45% {
            cx:25px;
            cy:54px;
            opacity:1
          }
          45.8333% {
            cx:25px;
            cy:54px;
            opacity:1
          }
          46.6667% {
            cx:25px;
            cy:54px;
            opacity:1
          }
          47.5% {
            cx:25px;
            cy:54px;
            opacity:1
          }
          48.3333% {
            cx:25px;
            cy:54px;
            opacity:1
          }
          49.1667% {
            cx:25px;
            cy:54px;
            opacity:1
          }
          50% {
            cx:25px;
            cy:54px;
            opacity:1
          }
          50.8333% {
            cx:25px;
            cy:54px;
            opacity:1
          }
          51.6667% {
            cx:25px;
            cy:54px;
            opacity:1
          }
          52.5% {
            cx:25px;
            cy:54px;
            opacity:1
          }
          53.3333% {
            cx:25px;
            cy:54px;
            opacity:1
          }
          54.1667% {
            cx:25px;
            cy:54px;
            opacity:1
          }
          55% {
            cx:25px;
            cy:54px;
            opacity:1
          }
          55.8333% {
            cx:25px;
            cy:54px;
            opacity:1
          }
          56.6667% {
            cx:25px;
            cy:54px;
            opacity:1
          }
          57.5% {
            cx:25px;
            cy:54px;
            opacity:1
          }
          58.3333% {
            cx:25px;
            cy:54px;
            opacity:1
          }
          59.1667% {
            cx:24.9287px;
            cy:54.0891px;
            opacity:1
          }
          60% {
            cx:24.7246px;
            cy:54.3443px;
            opacity:1
          }
          60.8333% {
            cx:24.4025px;
            cy:54.7469px;
            opacity:1
          }
          61.6667% {
            cx:23.977px;
            cy:55.2787px;
            opacity:1
          }
          62.5% {
            cx:23.4631px;
            cy:55.9211px;
            opacity:1
          }
          63.3333% {
            cx:22.8754px;
            cy:56.6557px;
            opacity:1
          }
          64.1667% {
            cx:22.2287px;
            cy:57.4641px;
            opacity:1
          }
          65% {
            cx:21.5377px;
            cy:58.3279px;
            opacity:1
          }
          65.8333% {
            cx:20.8172px;
            cy:59.2285px;
            opacity:1
          }
          66.6667% {
            cx:20.082px;
            cy:60.1475px;
            opacity:1
          }
          67.5% {
            cx:19.3467px;
            cy:61.0666px;
            opacity:1
          }
          68.3333% {
            cx:18.6262px;
            cy:61.9672px;
            opacity:1
          }
          69.1667% {
            cx:17.9352px;
            cy:62.8309px;
            opacity:1
          }
          70% {
            cx:17.2885px;
            cy:63.6393px;
            opacity:1
          }
          70.8333% {
            cx:16.7008px;
            cy:64.374px;
            opacity:1
          }
          71.6667% {
            cx:16.1869px;
            cy:65.0164px;
            opacity:1
          }
          72.5% {
            cx:15.7615px;
            cy:65.5482px;
            opacity:1
          }
          73.3333% {
            cx:15.4393px;
            cy:65.9508px;
            opacity:1
          }
          74.1667% {
            cx:15.2352px;
            cy:66.2059px;
            opacity:1
          }
          75% {
            cx:15.1639px;
            cy:66.2951px;
            opacity:1
          }
          75.8333% {
            cx:15.1639px;
            cy:66.2951px;
            opacity:1
          }
          76.6667% {
            cx:15.1639px;
            cy:66.2951px;
            opacity:1
          }
          77.5% {
            cx:15.1639px;
            cy:66.2951px;
            opacity:1
          }
          78.3333% {
            cx:15.1639px;
            cy:66.2951px;
            opacity:1
          }
          79.1667% {
            cx:15.1639px;
            cy:66.2951px;
            opacity:1
          }
          80% {
            cx:15.1639px;
            cy:66.2951px;
            opacity:1
          }
          80.8333% {
            cx:15.1639px;
            cy:66.2951px;
            opacity:1
          }
          81.6667% {
            cx:15.1639px;
            cy:66.2951px;
            opacity:1
          }
          82.5% {
            cx:15.1639px;
            cy:66.2951px;
            opacity:1
          }
          83.3333% {
            cx:15.1639px;
            cy:66.2951px;
            opacity:1
          }
          84.1667% {
            cx:15.1639px;
            cy:66.2951px;
            opacity:1
          }
          85% {
            cx:15.1639px;
            cy:66.2951px;
            opacity:1
          }
          85.8333% {
            cx:15.1639px;
            cy:66.2951px;
            opacity:1
          }
          86.6667% {
            cx:15.1639px;
            cy:66.2951px;
            opacity:1
          }
          87.5% {
            cx:15.1639px;
            cy:66.2951px;
            opacity:1
          }
          88.3333% {
            cx:15.1639px;
            cy:66.2951px;
            opacity:1
          }
          89.1667% {
            cx:15.1639px;
            cy:66.2951px;
            opacity:1
          }
          90% {
            cx:15.1639px;
            cy:66.2951px;
            opacity:1
          }
          90.8333% {
            cx:15.1639px;
            cy:66.2951px;
            opacity:1
          }
          91.6667% {
            cx:15.1639px;
            cy:66.2951px;
            opacity:1
          }
          95% {
            cx:15.1639px;
            cy:66.2951px;
            opacity:1
          }
          95.01%,100% {
            cx:25px;
            cy:54px;
            opacity:0
          }
        }
        .pose6 {
          animation:pose6 12s linear infinite
        }
        @keyframes pose6 {
          0% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          0.8333% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          1.6667% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          2.5% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          3.3333% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          4.1667% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          5% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          5.8333% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          6.6667% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          7.5% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          8.3333% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          9.1667% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          10% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          10.8333% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          11.6667% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          12.5% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          13.3333% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          14.1667% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          15% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          15.8333% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          16.6667% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          17.5% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          18.3333% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          19.1667% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          20% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          20.8333% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          21.6667% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          22.5% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          23.3333% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          24.1667% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          25% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          25.8333% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          26.6667% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          27.5% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          28.3333% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          29.1667% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          30% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          30.8333% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          31.6667% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          32.5% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          33.3333% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          34.1667% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          35% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          35.8333% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          36.6667% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          37.5% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          38.3333% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          39.1667% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          40% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          40.8333% {
            cx:44px;
            cy:88px;
            opacity:0
          }
          41.6667% {
            cx:44px;
            cy:88px;
            opacity:1
          }
          42.5% {
            cx:44px;
            cy:88px;
            opacity:1
          }
          43.3333% {
            cx:44px;
            cy:88px;
            opacity:1
          }
          44.1667% {
            cx:44px;
            cy:88px;
            opacity:1
          }
          45% {
            cx:44px;
            cy:88px;
            opacity:1
          }
          45.8333% {
            cx:44px;
            cy:88px;
            opacity:1
          }
          46.6667% {
            cx:44px;
            cy:88px;
            opacity:1
          }
          47.5% {
            cx:44px;
            cy:88px;
            opacity:1
          }
          48.3333% {
            cx:44px;
            cy:88px;
            opacity:1
          }
          49.1667% {
            cx:44px;
            cy:88px;
            opacity:1
          }
          50% {
            cx:44px;
            cy:88px;
            opacity:1
          }
          50.8333% {
            cx:44px;
            cy:88px;
            opacity:1
          }
          51.6667% {
            cx:44px;
            cy:88px;
            opacity:1
          }
          52.5% {
            cx:44px;
            cy:88px;
            opacity:1
          }
          53.3333% {
            cx:44px;
            cy:88px;
            opacity:1
          }
          54.1667% {
            cx:44px;
            cy:88px;
            opacity:1
          }
          55% {
            cx:44px;
            cy:88px;
            opacity:1
          }
          55.8333% {
            cx:44px;
            cy:88px;
            opacity:1
          }
          56.6667% {
            cx:44px;
            cy:88px;
            opacity:1
          }
          57.5% {
            cx:44px;
            cy:88px;
            opacity:1
          }
          58.3333% {
            cx:44px;
            cy:88px;
            opacity:1
          }
          59.1667% {
            cx:43.9144px;
            cy:88.107px;
            opacity:1
          }
          60% {
            cx:43.6695px;
            cy:88.4131px;
            opacity:1
          }
          60.8333% {
            cx:43.283px;
            cy:88.8963px;
            opacity:1
          }
          61.6667% {
            cx:42.7725px;
            cy:89.5344px;
            opacity:1
          }
          62.5% {
            cx:42.1557px;
            cy:90.3053px;
            opacity:1
          }
          63.3333% {
            cx:41.4505px;
            cy:91.1869px;
            opacity:1
          }
          64.1667% {
            cx:40.6744px;
            cy:92.157px;
            opacity:1
          }
          65% {
            cx:39.8452px;
            cy:93.1934px;
            opacity:1
          }
          65.8333% {
            cx:38.9807px;
            cy:94.2742px;
            opacity:1
          }
          66.6667% {
            cx:38.0984px;
            cy:95.377px;
            opacity:1
          }
          67.5% {
            cx:37.2161px;
            cy:96.4799px;
            opacity:1
          }
          68.3333% {
            cx:36.3515px;
            cy:97.5607px;
            opacity:1
          }
          69.1667% {
            cx:35.5223px;
            cy:98.5971px;
            opacity:1
          }
          70% {
            cx:34.7462px;
            cy:99.5672px;
            opacity:1
          }
          70.8333% {
            cx:34.041px;
            cy:100.4488px;
            opacity:1
          }
          71.6667% {
            cx:33.4243px;
            cy:101.2197px;
            opacity:1
          }
          72.5% {
            cx:32.9138px;
            cy:101.8578px;
            opacity:1
          }
          73.3333% {
            cx:32.5272px;
            cy:102.341px;
            opacity:1
          }
          74.1667% {
            cx:32.2823px;
            cy:102.6471px;
            opacity:1
          }
          75% {
            cx:32.1967px;
            cy:102.7541px;
            opacity:1
          }
          75.8333% {
            cx:32.1967px;
            cy:102.7541px;
            opacity:1
          }
          76.6667% {
            cx:32.1967px;
            cy:102.7541px;
            opacity:1
          }
          77.5% {
            cx:32.1967px;
            cy:102.7541px;
            opacity:1
          }
          78.3333% {
            cx:32.1967px;
            cy:102.7541px;
            opacity:1
          }
          79.1667% {
            cx:32.1967px;
            cy:102.7541px;
            opacity:1
          }
          80% {
            cx:32.1967px;
            cy:102.7541px;
            opacity:1
          }
          80.8333% {
            cx:32.1967px;
            cy:102.7541px;
            opacity:1
          }
          81.6667% {
            cx:32.1967px;
            cy:102.7541px;
            opacity:1
          }
          82.5% {
            cx:32.1967px;
            cy:102.7541px;
            opacity:1
          }
          83.3333% {
            cx:32.1967px;
            cy:102.7541px;
            opacity:1
          }
          84.1667% {
            cx:32.1967px;
            cy:102.7541px;
            opacity:1
          }
          85% {
            cx:32.1967px;
            cy:102.7541px;
            opacity:1
          }
          85.8333% {
            cx:32.1967px;
            cy:102.7541px;
            opacity:1
          }
          86.6667% {
            cx:32.1967px;
            cy:102.7541px;
            opacity:1
          }
          87.5% {
            cx:32.1967px;
            cy:102.7541px;
            opacity:1
          }
          88.3333% {
            cx:32.1967px;
            cy:102.7541px;
            opacity:1
          }
          89.1667% {
            cx:32.1967px;
            cy:102.7541px;
            opacity:1
          }
          90% {
            cx:32.1967px;
            cy:102.7541px;
            opacity:1
          }
          90.8333% {
            cx:32.1967px;
            cy:102.7541px;
            opacity:1
          }
          91.6667% {
            cx:32.1967px;
            cy:102.7541px;
            opacity:1
          }
          95% {
            cx:32.1967px;
            cy:102.7541px;
            opacity:1
          }
          95.01%,100% {
            cx:44px;
            cy:88px;
            opacity:0
          }
        }
        .recognition {
          opacity:0;
          animation:recognition 12s steps(1,end) infinite
        }
        @keyframes recognition {
          0% {
            opacity:0
          }
          41.6667% {
            opacity:1
          }
          58.3333%,100% {
            opacity:0
          }
        }
        .closure {
          animation:closure 12s linear infinite
        }
        @keyframes closure {
          0% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          0.8333% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          1.6667% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          2.5% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          3.3333% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          4.1667% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          5% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          5.8333% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          6.6667% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          7.5% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          8.3333% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          9.1667% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          10% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          10.8333% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          11.6667% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          12.5% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          13.3333% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          14.1667% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          15% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          15.8333% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          16.6667% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          17.5% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          18.3333% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          19.1667% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          20% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          20.8333% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          21.6667% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          22.5% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          23.3333% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          24.1667% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          25% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          25.8333% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          26.6667% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          27.5% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          28.3333% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          29.1667% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          30% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          30.8333% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          31.6667% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          32.5% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          33.3333% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          34.1667% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          35% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          35.8333% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          36.6667% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          37.5% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          38.3333% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          39.1667% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          40% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          40.8333% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          41.6667% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          42.5% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          43.3333% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          44.1667% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          45% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          45.8333% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          46.6667% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          47.5% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          48.3333% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          49.1667% {
            opacity:0;
            d:path("M44 88L32 103")
          }
          50% {
            opacity:1;
            d:path("M44 88L32 103")
          }
          50.8333% {
            opacity:1;
            d:path("M44 88L32 103")
          }
          51.6667% {
            opacity:1;
            d:path("M44 88L32 103")
          }
          52.5% {
            opacity:1;
            d:path("M44 88L32 103")
          }
          53.3333% {
            opacity:1;
            d:path("M44 88L32 103")
          }
          54.1667% {
            opacity:1;
            d:path("M44 88L32 103")
          }
          55% {
            opacity:1;
            d:path("M44 88L32 103")
          }
          55.8333% {
            opacity:1;
            d:path("M44 88L32 103")
          }
          56.6667% {
            opacity:1;
            d:path("M44 88L32 103")
          }
          57.5% {
            opacity:1;
            d:path("M44 88L32 103")
          }
          58.3333% {
            opacity:1;
            d:path("M44 88L32 103")
          }
          59.1667% {
            opacity:1;
            d:path("M43.9144 88.107L32 103")
          }
          60% {
            opacity:1;
            d:path("M43.6695 88.4131L32 103")
          }
          60.8333% {
            opacity:1;
            d:path("M43.283 88.8963L32 103")
          }
          61.6667% {
            opacity:1;
            d:path("M42.7725 89.5344L32 103")
          }
          62.5% {
            opacity:1;
            d:path("M42.1557 90.3053L32 103")
          }
          63.3333% {
            opacity:1;
            d:path("M41.4505 91.1869L32 103")
          }
          64.1667% {
            opacity:1;
            d:path("M40.6744 92.157L32 103")
          }
          65% {
            opacity:1;
            d:path("M39.8452 93.1934L32 103")
          }
          65.8333% {
            opacity:1;
            d:path("M38.9807 94.2742L32 103")
          }
          66.6667% {
            opacity:1;
            d:path("M38.0984 95.377L32 103")
          }
          67.5% {
            opacity:1;
            d:path("M37.2161 96.4799L32 103")
          }
          68.3333% {
            opacity:1;
            d:path("M36.3515 97.5607L32 103")
          }
          69.1667% {
            opacity:1;
            d:path("M35.5223 98.5971L32 103")
          }
          70% {
            opacity:1;
            d:path("M34.7462 99.5672L32 103")
          }
          70.8333% {
            opacity:1;
            d:path("M34.041 100.4488L32 103")
          }
          71.6667% {
            opacity:1;
            d:path("M33.4243 101.2197L32 103")
          }
          72.5% {
            opacity:1;
            d:path("M32.9138 101.8578L32 103")
          }
          73.3333% {
            opacity:1;
            d:path("M32.5272 102.341L32 103")
          }
          74.1667% {
            opacity:1;
            d:path("M32.2823 102.6471L32 103")
          }
          75% {
            opacity:1;
            d:path("M32.1967 102.7541L32 103")
          }
          75.8333% {
            opacity:1;
            d:path("M32.1967 102.7541L32 103")
          }
          76.6667% {
            opacity:1;
            d:path("M32.1967 102.7541L32 103")
          }
          77.5% {
            opacity:1;
            d:path("M32.1967 102.7541L32 103")
          }
          78.3333% {
            opacity:1;
            d:path("M32.1967 102.7541L32 103")
          }
          79.1667% {
            opacity:1;
            d:path("M32.1967 102.7541L32 103")
          }
          80% {
            opacity:1;
            d:path("M32.1967 102.7541L32 103")
          }
          80.8333% {
            opacity:1;
            d:path("M32.1967 102.7541L32 103")
          }
          81.6667% {
            opacity:1;
            d:path("M32.1967 102.7541L32 103")
          }
          82.5% {
            opacity:1;
            d:path("M32.1967 102.7541L32 103")
          }
          83.3333% {
            opacity:1;
            d:path("M32.1967 102.7541L32 103")
          }
          84.1667% {
            opacity:1;
            d:path("M32.1967 102.7541L32 103")
          }
          85% {
            opacity:1;
            d:path("M32.1967 102.7541L32 103")
          }
          85.8333% {
            opacity:1;
            d:path("M32.1967 102.7541L32 103")
          }
          86.6667% {
            opacity:1;
            d:path("M32.1967 102.7541L32 103")
          }
          87.5% {
            opacity:1;
            d:path("M32.1967 102.7541L32 103")
          }
          88.3333% {
            opacity:1;
            d:path("M32.1967 102.7541L32 103")
          }
          89.1667% {
            opacity:1;
            d:path("M32.1967 102.7541L32 103")
          }
          90% {
            opacity:1;
            d:path("M32.1967 102.7541L32 103")
          }
          90.8333% {
            opacity:1;
            d:path("M32.1967 102.7541L32 103")
          }
          91.6667% {
            opacity:1;
            d:path("M32.1967 102.7541L32 103")
          }
          95% {
            opacity:1;
            d:path("M32.1967 102.7541L32 103")
          }
          95.01%,100% {
            opacity:0;
            d:path("M44 88L32 103")
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
      <svg viewBox="0 0 140 140" role="img" aria-label="SLAM Loop Closure">
        <g class="ink muted">
          <path d="M16 22H28V34H16ZM111 108H124V120H111ZM67 53H78V63H67Z"/>
        </g>
        <text fill="#92aaa1" font-size="9" font-family="monospace" x="70" y="134" text-anchor="middle">pose estimates</text>
        <g class="cycle">
          <path class="ink edge1" d="M32,103L71.016,110.23"/>
          <path class="ink edge2" d="M71.016,110.23L111.033,83.459"/>
          <path class="ink edge3" d="M111.033,83.459L103.049,40.689"/>
          <path class="ink edge4" d="M103.049,40.689L58.066,26.918"/>
          <path class="ink edge5" d="M58.066,26.918L20.082,60.148"/>
          <path class="ink edge6" d="M20.082,60.148L38.098,95.377"/>
          <circle class="solid pose0" cx="32" cy="103" r="3"/>
          <circle class="solid pose1" cx="71.016" cy="110.23" r="3"/>
          <circle class="solid pose2" cx="111.033" cy="83.459" r="3"/>
          <circle class="solid pose3" cx="103.049" cy="40.689" r="3"/>
          <circle class="solid pose4" cx="58.066" cy="26.918" r="3"/>
          <circle class="solid pose5" cx="20.082" cy="60.148" r="3"/>
          <circle class="solid pose6" cx="38.098" cy="95.377" r="3"/>
          <path class="ink warm closure" style="fill:none" stroke-dasharray="2 3" d="M38.098,95.377L32 103"/>
          <path class="ink cool anchor" style="fill:none" d="M26 109 32 119 38 109Z"/>
          <path class="ink cool recognition" style="fill:none" d="M38 74 44 84 50 74Z"/>
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

if (!customElements.get("concept-slam-loop-closure")) {
  customElements.define("concept-slam-loop-closure", ConceptSlamLoopClosure);
}
