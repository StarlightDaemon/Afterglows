// Force-Closure Grasp. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptForceClosureGrasp extends HTMLElement {
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
        .gravity {
          opacity:0
        }
        .left-finger {
          animation:left-finger 12s linear infinite
        }
        @keyframes left-finger {
          0% {
            cx:30px
          }
          0.4167% {
            cx:30.0258px
          }
          0.8333% {
            cx:30.1015px
          }
          1.25% {
            cx:30.2244px
          }
          1.6667% {
            cx:30.392px
          }
          2.0833% {
            cx:30.6016px
          }
          2.5% {
            cx:30.8505px
          }
          2.9167% {
            cx:31.1362px
          }
          3.3333% {
            cx:31.456px
          }
          3.75% {
            cx:31.8073px
          }
          4.1667% {
            cx:32.1875px
          }
          4.5833% {
            cx:32.5939px
          }
          5% {
            cx:33.024px
          }
          5.4167% {
            cx:33.4751px
          }
          5.8333% {
            cx:33.9445px
          }
          6.25% {
            cx:34.4297px
          }
          6.6667% {
            cx:34.928px
          }
          7.0833% {
            cx:35.4368px
          }
          7.5% {
            cx:35.9535px
          }
          7.9167% {
            cx:36.4754px
          }
          8.3333% {
            cx:37px
          }
          8.75% {
            cx:37.5246px
          }
          9.1667% {
            cx:38.0465px
          }
          9.5833% {
            cx:38.5632px
          }
          10% {
            cx:39.072px
          }
          10.4167% {
            cx:39.5703px
          }
          10.8333% {
            cx:40.0555px
          }
          11.25% {
            cx:40.5249px
          }
          11.6667% {
            cx:40.976px
          }
          12.0833% {
            cx:41.4061px
          }
          12.5% {
            cx:41.8125px
          }
          12.9167% {
            cx:42.1927px
          }
          13.3333% {
            cx:42.544px
          }
          13.75% {
            cx:42.8638px
          }
          14.1667% {
            cx:43.1495px
          }
          14.5833% {
            cx:43.3984px
          }
          15% {
            cx:43.608px
          }
          15.4167% {
            cx:43.7756px
          }
          15.8333% {
            cx:43.8985px
          }
          16.25% {
            cx:43.9742px
          }
          16.6667% {
            cx:44px
          }
          17.0833% {
            cx:44px
          }
          17.5% {
            cx:44px
          }
          17.9167% {
            cx:44px
          }
          18.3333% {
            cx:44px
          }
          18.75% {
            cx:44px
          }
          19.1667% {
            cx:44px
          }
          19.5833% {
            cx:44px
          }
          20% {
            cx:44px
          }
          20.4167% {
            cx:44px
          }
          20.8333% {
            cx:44px
          }
          21.25% {
            cx:44px
          }
          21.6667% {
            cx:44px
          }
          22.0833% {
            cx:44px
          }
          22.5% {
            cx:44px
          }
          22.9167% {
            cx:44px
          }
          23.3333% {
            cx:44px
          }
          23.75% {
            cx:44px
          }
          24.1667% {
            cx:44px
          }
          24.5833% {
            cx:44px
          }
          25% {
            cx:44px
          }
          25.4167% {
            cx:44px
          }
          25.8333% {
            cx:44px
          }
          26.25% {
            cx:44px
          }
          26.6667% {
            cx:44px
          }
          27.0833% {
            cx:44px
          }
          27.5% {
            cx:44px
          }
          27.9167% {
            cx:44px
          }
          28.3333% {
            cx:44px
          }
          28.75% {
            cx:44px
          }
          29.1667% {
            cx:44px
          }
          29.5833% {
            cx:44px
          }
          30% {
            cx:44px
          }
          30.4167% {
            cx:44px
          }
          30.8333% {
            cx:44px
          }
          31.25% {
            cx:44px
          }
          31.6667% {
            cx:44px
          }
          32.0833% {
            cx:44px
          }
          32.5% {
            cx:44px
          }
          32.9167% {
            cx:44px
          }
          33.3333% {
            cx:44px
          }
          33.75% {
            cx:44px
          }
          34.1667% {
            cx:44px
          }
          34.5833% {
            cx:44px
          }
          35% {
            cx:44px
          }
          35.4167% {
            cx:44px
          }
          35.8333% {
            cx:44px
          }
          36.25% {
            cx:44px
          }
          36.6667% {
            cx:44px
          }
          37.0833% {
            cx:44px
          }
          37.5% {
            cx:44px
          }
          37.9167% {
            cx:44px
          }
          38.3333% {
            cx:44px
          }
          38.75% {
            cx:44px
          }
          39.1667% {
            cx:44px
          }
          39.5833% {
            cx:44px
          }
          40% {
            cx:44px
          }
          40.4167% {
            cx:44px
          }
          40.8333% {
            cx:44px
          }
          41.25% {
            cx:44px
          }
          41.6667% {
            cx:44px
          }
          42.0833% {
            cx:44px
          }
          42.5% {
            cx:44px
          }
          42.9167% {
            cx:44px
          }
          43.3333% {
            cx:44px
          }
          43.75% {
            cx:44px
          }
          44.1667% {
            cx:44px
          }
          44.5833% {
            cx:44px
          }
          45% {
            cx:44px
          }
          45.4167% {
            cx:44px
          }
          45.8333% {
            cx:44px
          }
          46.25% {
            cx:44px
          }
          46.6667% {
            cx:44px
          }
          47.0833% {
            cx:44px
          }
          47.5% {
            cx:44px
          }
          47.9167% {
            cx:44px
          }
          48.3333% {
            cx:44px
          }
          48.75% {
            cx:44px
          }
          49.1667% {
            cx:44px
          }
          49.5833% {
            cx:44px
          }
          50% {
            cx:44px
          }
          50.4167% {
            cx:44px
          }
          50.8333% {
            cx:44px
          }
          51.25% {
            cx:44px
          }
          51.6667% {
            cx:44px
          }
          52.0833% {
            cx:44px
          }
          52.5% {
            cx:44px
          }
          52.9167% {
            cx:44px
          }
          53.3333% {
            cx:44px
          }
          53.75% {
            cx:44px
          }
          54.1667% {
            cx:44px
          }
          54.5833% {
            cx:44px
          }
          55% {
            cx:44px
          }
          55.4167% {
            cx:44px
          }
          55.8333% {
            cx:44px
          }
          56.25% {
            cx:44px
          }
          56.6667% {
            cx:44px
          }
          57.0833% {
            cx:44px
          }
          57.5% {
            cx:44px
          }
          57.9167% {
            cx:44px
          }
          58.3333% {
            cx:44px
          }
          58.75% {
            cx:44px
          }
          59.1667% {
            cx:44px
          }
          59.5833% {
            cx:44px
          }
          60% {
            cx:44px
          }
          60.4167% {
            cx:44px
          }
          60.8333% {
            cx:44px
          }
          61.25% {
            cx:44px
          }
          61.6667% {
            cx:44px
          }
          62.0833% {
            cx:44px
          }
          62.5% {
            cx:44px
          }
          62.9167% {
            cx:44px
          }
          63.3333% {
            cx:44px
          }
          63.75% {
            cx:44px
          }
          64.1667% {
            cx:44px
          }
          64.5833% {
            cx:44px
          }
          65% {
            cx:44px
          }
          65.4167% {
            cx:44px
          }
          65.8333% {
            cx:44px
          }
          66.25% {
            cx:44px
          }
          66.6667% {
            cx:44px
          }
          67.0833% {
            cx:44px
          }
          67.5% {
            cx:44px
          }
          67.9167% {
            cx:44px
          }
          68.3333% {
            cx:44px
          }
          68.75% {
            cx:44px
          }
          69.1667% {
            cx:44px
          }
          69.5833% {
            cx:44px
          }
          70% {
            cx:44px
          }
          70.4167% {
            cx:44px
          }
          70.8333% {
            cx:44px
          }
          71.25% {
            cx:44px
          }
          71.6667% {
            cx:44px
          }
          72.0833% {
            cx:44px
          }
          72.5% {
            cx:44px
          }
          72.9167% {
            cx:44px
          }
          73.3333% {
            cx:44px
          }
          73.75% {
            cx:44px
          }
          74.1667% {
            cx:44px
          }
          74.5833% {
            cx:44px
          }
          75% {
            cx:44px
          }
          75.4167% {
            cx:44px
          }
          75.8333% {
            cx:44px
          }
          76.25% {
            cx:44px
          }
          76.6667% {
            cx:44px
          }
          77.0833% {
            cx:44px
          }
          77.5% {
            cx:44px
          }
          77.9167% {
            cx:44px
          }
          78.3333% {
            cx:44px
          }
          78.75% {
            cx:44px
          }
          79.1667% {
            cx:44px
          }
          79.5833% {
            cx:44px
          }
          80% {
            cx:44px
          }
          80.4167% {
            cx:44px
          }
          80.8333% {
            cx:44px
          }
          81.25% {
            cx:44px
          }
          81.6667% {
            cx:44px
          }
          82.0833% {
            cx:44px
          }
          82.5% {
            cx:44px
          }
          82.9167% {
            cx:44px
          }
          83.3333% {
            cx:44px
          }
          83.75% {
            cx:43.9742px
          }
          84.1667% {
            cx:43.8985px
          }
          84.5833% {
            cx:43.7756px
          }
          85% {
            cx:43.608px
          }
          85.4167% {
            cx:43.3984px
          }
          85.8333% {
            cx:43.1495px
          }
          86.25% {
            cx:42.8638px
          }
          86.6667% {
            cx:42.544px
          }
          87.0833% {
            cx:42.1927px
          }
          87.5% {
            cx:41.8125px
          }
          87.9167% {
            cx:41.4061px
          }
          88.3333% {
            cx:40.976px
          }
          88.75% {
            cx:40.5249px
          }
          89.1667% {
            cx:40.0555px
          }
          89.5833% {
            cx:39.5703px
          }
          90% {
            cx:39.072px
          }
          90.4167% {
            cx:38.5632px
          }
          90.8333% {
            cx:38.0465px
          }
          91.25% {
            cx:37.5246px
          }
          91.6667% {
            cx:37px
          }
          92.0833% {
            cx:36.4754px
          }
          92.5% {
            cx:35.9535px
          }
          92.9167% {
            cx:35.4368px
          }
          93.3333% {
            cx:34.928px
          }
          93.75% {
            cx:34.4297px
          }
          94.1667% {
            cx:33.9445px
          }
          94.5833% {
            cx:33.4751px
          }
          95% {
            cx:33.024px
          }
          95.4167% {
            cx:32.5939px
          }
          95.8333% {
            cx:32.1875px
          }
          96.25% {
            cx:31.8073px
          }
          96.6667% {
            cx:31.456px
          }
          97.0833% {
            cx:31.1362px
          }
          97.5% {
            cx:30.8505px
          }
          97.9167% {
            cx:30.6016px
          }
          98.3333% {
            cx:30.392px
          }
          98.75% {
            cx:30.2244px
          }
          99.1667% {
            cx:30.1015px
          }
          99.5833% {
            cx:30.0258px
          }
          100% {
            cx:30px
          }
        }
        .right-finger {
          animation:right-finger 12s linear infinite
        }
        @keyframes right-finger {
          0% {
            cx:110px
          }
          0.4167% {
            cx:109.9742px
          }
          0.8333% {
            cx:109.8985px
          }
          1.25% {
            cx:109.7756px
          }
          1.6667% {
            cx:109.608px
          }
          2.0833% {
            cx:109.3984px
          }
          2.5% {
            cx:109.1495px
          }
          2.9167% {
            cx:108.8638px
          }
          3.3333% {
            cx:108.544px
          }
          3.75% {
            cx:108.1927px
          }
          4.1667% {
            cx:107.8125px
          }
          4.5833% {
            cx:107.4061px
          }
          5% {
            cx:106.976px
          }
          5.4167% {
            cx:106.5249px
          }
          5.8333% {
            cx:106.0555px
          }
          6.25% {
            cx:105.5703px
          }
          6.6667% {
            cx:105.072px
          }
          7.0833% {
            cx:104.5632px
          }
          7.5% {
            cx:104.0465px
          }
          7.9167% {
            cx:103.5246px
          }
          8.3333% {
            cx:103px
          }
          8.75% {
            cx:102.4754px
          }
          9.1667% {
            cx:101.9535px
          }
          9.5833% {
            cx:101.4368px
          }
          10% {
            cx:100.928px
          }
          10.4167% {
            cx:100.4297px
          }
          10.8333% {
            cx:99.9445px
          }
          11.25% {
            cx:99.4751px
          }
          11.6667% {
            cx:99.024px
          }
          12.0833% {
            cx:98.5939px
          }
          12.5% {
            cx:98.1875px
          }
          12.9167% {
            cx:97.8073px
          }
          13.3333% {
            cx:97.456px
          }
          13.75% {
            cx:97.1362px
          }
          14.1667% {
            cx:96.8505px
          }
          14.5833% {
            cx:96.6016px
          }
          15% {
            cx:96.392px
          }
          15.4167% {
            cx:96.2244px
          }
          15.8333% {
            cx:96.1015px
          }
          16.25% {
            cx:96.0258px
          }
          16.6667% {
            cx:96px
          }
          17.0833% {
            cx:96px
          }
          17.5% {
            cx:96px
          }
          17.9167% {
            cx:96px
          }
          18.3333% {
            cx:96px
          }
          18.75% {
            cx:96px
          }
          19.1667% {
            cx:96px
          }
          19.5833% {
            cx:96px
          }
          20% {
            cx:96px
          }
          20.4167% {
            cx:96px
          }
          20.8333% {
            cx:96px
          }
          21.25% {
            cx:96px
          }
          21.6667% {
            cx:96px
          }
          22.0833% {
            cx:96px
          }
          22.5% {
            cx:96px
          }
          22.9167% {
            cx:96px
          }
          23.3333% {
            cx:96px
          }
          23.75% {
            cx:96px
          }
          24.1667% {
            cx:96px
          }
          24.5833% {
            cx:96px
          }
          25% {
            cx:96px
          }
          25.4167% {
            cx:96px
          }
          25.8333% {
            cx:96px
          }
          26.25% {
            cx:96px
          }
          26.6667% {
            cx:96px
          }
          27.0833% {
            cx:96px
          }
          27.5% {
            cx:96px
          }
          27.9167% {
            cx:96px
          }
          28.3333% {
            cx:96px
          }
          28.75% {
            cx:96px
          }
          29.1667% {
            cx:96px
          }
          29.5833% {
            cx:96px
          }
          30% {
            cx:96px
          }
          30.4167% {
            cx:96px
          }
          30.8333% {
            cx:96px
          }
          31.25% {
            cx:96px
          }
          31.6667% {
            cx:96px
          }
          32.0833% {
            cx:96px
          }
          32.5% {
            cx:96px
          }
          32.9167% {
            cx:96px
          }
          33.3333% {
            cx:96px
          }
          33.75% {
            cx:96px
          }
          34.1667% {
            cx:96px
          }
          34.5833% {
            cx:96px
          }
          35% {
            cx:96px
          }
          35.4167% {
            cx:96px
          }
          35.8333% {
            cx:96px
          }
          36.25% {
            cx:96px
          }
          36.6667% {
            cx:96px
          }
          37.0833% {
            cx:96px
          }
          37.5% {
            cx:96px
          }
          37.9167% {
            cx:96px
          }
          38.3333% {
            cx:96px
          }
          38.75% {
            cx:96px
          }
          39.1667% {
            cx:96px
          }
          39.5833% {
            cx:96px
          }
          40% {
            cx:96px
          }
          40.4167% {
            cx:96px
          }
          40.8333% {
            cx:96px
          }
          41.25% {
            cx:96px
          }
          41.6667% {
            cx:96px
          }
          42.0833% {
            cx:96px
          }
          42.5% {
            cx:96px
          }
          42.9167% {
            cx:96px
          }
          43.3333% {
            cx:96px
          }
          43.75% {
            cx:96px
          }
          44.1667% {
            cx:96px
          }
          44.5833% {
            cx:96px
          }
          45% {
            cx:96px
          }
          45.4167% {
            cx:96px
          }
          45.8333% {
            cx:96px
          }
          46.25% {
            cx:96px
          }
          46.6667% {
            cx:96px
          }
          47.0833% {
            cx:96px
          }
          47.5% {
            cx:96px
          }
          47.9167% {
            cx:96px
          }
          48.3333% {
            cx:96px
          }
          48.75% {
            cx:96px
          }
          49.1667% {
            cx:96px
          }
          49.5833% {
            cx:96px
          }
          50% {
            cx:96px
          }
          50.4167% {
            cx:96px
          }
          50.8333% {
            cx:96px
          }
          51.25% {
            cx:96px
          }
          51.6667% {
            cx:96px
          }
          52.0833% {
            cx:96px
          }
          52.5% {
            cx:96px
          }
          52.9167% {
            cx:96px
          }
          53.3333% {
            cx:96px
          }
          53.75% {
            cx:96px
          }
          54.1667% {
            cx:96px
          }
          54.5833% {
            cx:96px
          }
          55% {
            cx:96px
          }
          55.4167% {
            cx:96px
          }
          55.8333% {
            cx:96px
          }
          56.25% {
            cx:96px
          }
          56.6667% {
            cx:96px
          }
          57.0833% {
            cx:96px
          }
          57.5% {
            cx:96px
          }
          57.9167% {
            cx:96px
          }
          58.3333% {
            cx:96px
          }
          58.75% {
            cx:96px
          }
          59.1667% {
            cx:96px
          }
          59.5833% {
            cx:96px
          }
          60% {
            cx:96px
          }
          60.4167% {
            cx:96px
          }
          60.8333% {
            cx:96px
          }
          61.25% {
            cx:96px
          }
          61.6667% {
            cx:96px
          }
          62.0833% {
            cx:96px
          }
          62.5% {
            cx:96px
          }
          62.9167% {
            cx:96px
          }
          63.3333% {
            cx:96px
          }
          63.75% {
            cx:96px
          }
          64.1667% {
            cx:96px
          }
          64.5833% {
            cx:96px
          }
          65% {
            cx:96px
          }
          65.4167% {
            cx:96px
          }
          65.8333% {
            cx:96px
          }
          66.25% {
            cx:96px
          }
          66.6667% {
            cx:96px
          }
          67.0833% {
            cx:96px
          }
          67.5% {
            cx:96px
          }
          67.9167% {
            cx:96px
          }
          68.3333% {
            cx:96px
          }
          68.75% {
            cx:96px
          }
          69.1667% {
            cx:96px
          }
          69.5833% {
            cx:96px
          }
          70% {
            cx:96px
          }
          70.4167% {
            cx:96px
          }
          70.8333% {
            cx:96px
          }
          71.25% {
            cx:96px
          }
          71.6667% {
            cx:96px
          }
          72.0833% {
            cx:96px
          }
          72.5% {
            cx:96px
          }
          72.9167% {
            cx:96px
          }
          73.3333% {
            cx:96px
          }
          73.75% {
            cx:96px
          }
          74.1667% {
            cx:96px
          }
          74.5833% {
            cx:96px
          }
          75% {
            cx:96px
          }
          75.4167% {
            cx:96px
          }
          75.8333% {
            cx:96px
          }
          76.25% {
            cx:96px
          }
          76.6667% {
            cx:96px
          }
          77.0833% {
            cx:96px
          }
          77.5% {
            cx:96px
          }
          77.9167% {
            cx:96px
          }
          78.3333% {
            cx:96px
          }
          78.75% {
            cx:96px
          }
          79.1667% {
            cx:96px
          }
          79.5833% {
            cx:96px
          }
          80% {
            cx:96px
          }
          80.4167% {
            cx:96px
          }
          80.8333% {
            cx:96px
          }
          81.25% {
            cx:96px
          }
          81.6667% {
            cx:96px
          }
          82.0833% {
            cx:96px
          }
          82.5% {
            cx:96px
          }
          82.9167% {
            cx:96px
          }
          83.3333% {
            cx:96px
          }
          83.75% {
            cx:96.0258px
          }
          84.1667% {
            cx:96.1015px
          }
          84.5833% {
            cx:96.2244px
          }
          85% {
            cx:96.392px
          }
          85.4167% {
            cx:96.6016px
          }
          85.8333% {
            cx:96.8505px
          }
          86.25% {
            cx:97.1362px
          }
          86.6667% {
            cx:97.456px
          }
          87.0833% {
            cx:97.8073px
          }
          87.5% {
            cx:98.1875px
          }
          87.9167% {
            cx:98.5939px
          }
          88.3333% {
            cx:99.024px
          }
          88.75% {
            cx:99.4751px
          }
          89.1667% {
            cx:99.9445px
          }
          89.5833% {
            cx:100.4297px
          }
          90% {
            cx:100.928px
          }
          90.4167% {
            cx:101.4368px
          }
          90.8333% {
            cx:101.9535px
          }
          91.25% {
            cx:102.4754px
          }
          91.6667% {
            cx:103px
          }
          92.0833% {
            cx:103.5246px
          }
          92.5% {
            cx:104.0465px
          }
          92.9167% {
            cx:104.5632px
          }
          93.3333% {
            cx:105.072px
          }
          93.75% {
            cx:105.5703px
          }
          94.1667% {
            cx:106.0555px
          }
          94.5833% {
            cx:106.5249px
          }
          95% {
            cx:106.976px
          }
          95.4167% {
            cx:107.4061px
          }
          95.8333% {
            cx:107.8125px
          }
          96.25% {
            cx:108.1927px
          }
          96.6667% {
            cx:108.544px
          }
          97.0833% {
            cx:108.8638px
          }
          97.5% {
            cx:109.1495px
          }
          97.9167% {
            cx:109.3984px
          }
          98.3333% {
            cx:109.608px
          }
          98.75% {
            cx:109.7756px
          }
          99.1667% {
            cx:109.8985px
          }
          99.5833% {
            cx:109.9742px
          }
          100% {
            cx:110px
          }
        }
        .cones {
          animation:cones 12s linear infinite
        }
        @keyframes cones {
          0% {
            opacity:0
          }
          0.4167% {
            opacity:0
          }
          0.8333% {
            opacity:0
          }
          1.25% {
            opacity:0
          }
          1.6667% {
            opacity:0
          }
          2.0833% {
            opacity:0
          }
          2.5% {
            opacity:0
          }
          2.9167% {
            opacity:0
          }
          3.3333% {
            opacity:0
          }
          3.75% {
            opacity:0
          }
          4.1667% {
            opacity:0
          }
          4.5833% {
            opacity:0
          }
          5% {
            opacity:0
          }
          5.4167% {
            opacity:0
          }
          5.8333% {
            opacity:0
          }
          6.25% {
            opacity:0
          }
          6.6667% {
            opacity:0
          }
          7.0833% {
            opacity:0
          }
          7.5% {
            opacity:0
          }
          7.9167% {
            opacity:0
          }
          8.3333% {
            opacity:0
          }
          8.75% {
            opacity:0
          }
          9.1667% {
            opacity:0
          }
          9.5833% {
            opacity:0
          }
          10% {
            opacity:0
          }
          10.4167% {
            opacity:0
          }
          10.8333% {
            opacity:0
          }
          11.25% {
            opacity:0
          }
          11.6667% {
            opacity:0
          }
          12.0833% {
            opacity:0
          }
          12.5% {
            opacity:0
          }
          12.9167% {
            opacity:0
          }
          13.3333% {
            opacity:0
          }
          13.75% {
            opacity:0
          }
          14.1667% {
            opacity:0
          }
          14.5833% {
            opacity:0
          }
          15% {
            opacity:0
          }
          15.4167% {
            opacity:0
          }
          15.8333% {
            opacity:0
          }
          16.25% {
            opacity:0
          }
          16.6667% {
            opacity:0
          }
          17.0833% {
            opacity:0.0073
          }
          17.5% {
            opacity:0.028
          }
          17.9167% {
            opacity:0.0607
          }
          18.3333% {
            opacity:0.104
          }
          18.75% {
            opacity:0.1563
          }
          19.1667% {
            opacity:0.216
          }
          19.5833% {
            opacity:0.2818
          }
          20% {
            opacity:0.352
          }
          20.4167% {
            opacity:0.4253
          }
          20.8333% {
            opacity:0.5
          }
          21.25% {
            opacity:0.5748
          }
          21.6667% {
            opacity:0.648
          }
          22.0833% {
            opacity:0.7183
          }
          22.5% {
            opacity:0.784
          }
          22.9167% {
            opacity:0.8438
          }
          23.3333% {
            opacity:0.896
          }
          23.75% {
            opacity:0.9393
          }
          24.1667% {
            opacity:0.972
          }
          24.5833% {
            opacity:0.9928
          }
          25% {
            opacity:1
          }
          25.4167% {
            opacity:1
          }
          25.8333% {
            opacity:1
          }
          26.25% {
            opacity:1
          }
          26.6667% {
            opacity:1
          }
          27.0833% {
            opacity:1
          }
          27.5% {
            opacity:1
          }
          27.9167% {
            opacity:1
          }
          28.3333% {
            opacity:1
          }
          28.75% {
            opacity:1
          }
          29.1667% {
            opacity:1
          }
          29.5833% {
            opacity:1
          }
          30% {
            opacity:1
          }
          30.4167% {
            opacity:1
          }
          30.8333% {
            opacity:1
          }
          31.25% {
            opacity:1
          }
          31.6667% {
            opacity:1
          }
          32.0833% {
            opacity:1
          }
          32.5% {
            opacity:1
          }
          32.9167% {
            opacity:1
          }
          33.3333% {
            opacity:1
          }
          33.75% {
            opacity:1
          }
          34.1667% {
            opacity:1
          }
          34.5833% {
            opacity:1
          }
          35% {
            opacity:1
          }
          35.4167% {
            opacity:1
          }
          35.8333% {
            opacity:1
          }
          36.25% {
            opacity:1
          }
          36.6667% {
            opacity:1
          }
          37.0833% {
            opacity:1
          }
          37.5% {
            opacity:1
          }
          37.9167% {
            opacity:1
          }
          38.3333% {
            opacity:1
          }
          38.75% {
            opacity:1
          }
          39.1667% {
            opacity:1
          }
          39.5833% {
            opacity:1
          }
          40% {
            opacity:1
          }
          40.4167% {
            opacity:1
          }
          40.8333% {
            opacity:1
          }
          41.25% {
            opacity:1
          }
          41.6667% {
            opacity:1
          }
          42.0833% {
            opacity:1
          }
          42.5% {
            opacity:1
          }
          42.9167% {
            opacity:1
          }
          43.3333% {
            opacity:1
          }
          43.75% {
            opacity:1
          }
          44.1667% {
            opacity:1
          }
          44.5833% {
            opacity:1
          }
          45% {
            opacity:1
          }
          45.4167% {
            opacity:1
          }
          45.8333% {
            opacity:1
          }
          46.25% {
            opacity:1
          }
          46.6667% {
            opacity:1
          }
          47.0833% {
            opacity:1
          }
          47.5% {
            opacity:1
          }
          47.9167% {
            opacity:1
          }
          48.3333% {
            opacity:1
          }
          48.75% {
            opacity:1
          }
          49.1667% {
            opacity:1
          }
          49.5833% {
            opacity:1
          }
          50% {
            opacity:1
          }
          50.4167% {
            opacity:1
          }
          50.8333% {
            opacity:1
          }
          51.25% {
            opacity:1
          }
          51.6667% {
            opacity:1
          }
          52.0833% {
            opacity:1
          }
          52.5% {
            opacity:1
          }
          52.9167% {
            opacity:1
          }
          53.3333% {
            opacity:1
          }
          53.75% {
            opacity:1
          }
          54.1667% {
            opacity:1
          }
          54.5833% {
            opacity:1
          }
          55% {
            opacity:1
          }
          55.4167% {
            opacity:1
          }
          55.8333% {
            opacity:1
          }
          56.25% {
            opacity:1
          }
          56.6667% {
            opacity:1
          }
          57.0833% {
            opacity:1
          }
          57.5% {
            opacity:1
          }
          57.9167% {
            opacity:1
          }
          58.3333% {
            opacity:1
          }
          58.75% {
            opacity:1
          }
          59.1667% {
            opacity:1
          }
          59.5833% {
            opacity:1
          }
          60% {
            opacity:1
          }
          60.4167% {
            opacity:1
          }
          60.8333% {
            opacity:1
          }
          61.25% {
            opacity:1
          }
          61.6667% {
            opacity:1
          }
          62.0833% {
            opacity:1
          }
          62.5% {
            opacity:1
          }
          62.9167% {
            opacity:1
          }
          63.3333% {
            opacity:1
          }
          63.75% {
            opacity:1
          }
          64.1667% {
            opacity:1
          }
          64.5833% {
            opacity:1
          }
          65% {
            opacity:1
          }
          65.4167% {
            opacity:1
          }
          65.8333% {
            opacity:1
          }
          66.25% {
            opacity:1
          }
          66.6667% {
            opacity:1
          }
          67.0833% {
            opacity:1
          }
          67.5% {
            opacity:1
          }
          67.9167% {
            opacity:1
          }
          68.3333% {
            opacity:1
          }
          68.75% {
            opacity:1
          }
          69.1667% {
            opacity:1
          }
          69.5833% {
            opacity:1
          }
          70% {
            opacity:1
          }
          70.4167% {
            opacity:1
          }
          70.8333% {
            opacity:1
          }
          71.25% {
            opacity:1
          }
          71.6667% {
            opacity:1
          }
          72.0833% {
            opacity:1
          }
          72.5% {
            opacity:1
          }
          72.9167% {
            opacity:1
          }
          73.3333% {
            opacity:1
          }
          73.75% {
            opacity:1
          }
          74.1667% {
            opacity:1
          }
          74.5833% {
            opacity:1
          }
          75% {
            opacity:1
          }
          75.4167% {
            opacity:1
          }
          75.8333% {
            opacity:1
          }
          76.25% {
            opacity:1
          }
          76.6667% {
            opacity:1
          }
          77.0833% {
            opacity:1
          }
          77.5% {
            opacity:1
          }
          77.9167% {
            opacity:1
          }
          78.3333% {
            opacity:1
          }
          78.75% {
            opacity:1
          }
          79.1667% {
            opacity:1
          }
          79.5833% {
            opacity:1
          }
          80% {
            opacity:1
          }
          80.4167% {
            opacity:1
          }
          80.8333% {
            opacity:1
          }
          81.25% {
            opacity:1
          }
          81.6667% {
            opacity:1
          }
          82.0833% {
            opacity:1
          }
          82.5% {
            opacity:1
          }
          82.9167% {
            opacity:1
          }
          83.3333% {
            opacity:1
          }
          83.75% {
            opacity:0.972
          }
          84.1667% {
            opacity:0.896
          }
          84.5833% {
            opacity:0.784
          }
          85% {
            opacity:0.648
          }
          85.4167% {
            opacity:0.5
          }
          85.8333% {
            opacity:0.352
          }
          86.25% {
            opacity:0.216
          }
          86.6667% {
            opacity:0.104
          }
          87.0833% {
            opacity:0.028
          }
          87.5% {
            opacity:0
          }
          87.9167% {
            opacity:0
          }
          88.3333% {
            opacity:0
          }
          88.75% {
            opacity:0
          }
          89.1667% {
            opacity:0
          }
          89.5833% {
            opacity:0
          }
          90% {
            opacity:0
          }
          90.4167% {
            opacity:0
          }
          90.8333% {
            opacity:0
          }
          91.25% {
            opacity:0
          }
          91.6667% {
            opacity:0
          }
          92.0833% {
            opacity:0
          }
          92.5% {
            opacity:0
          }
          92.9167% {
            opacity:0
          }
          93.3333% {
            opacity:0
          }
          93.75% {
            opacity:0
          }
          94.1667% {
            opacity:0
          }
          94.5833% {
            opacity:0
          }
          95% {
            opacity:0
          }
          95.4167% {
            opacity:0
          }
          95.8333% {
            opacity:0
          }
          96.25% {
            opacity:0
          }
          96.6667% {
            opacity:0
          }
          97.0833% {
            opacity:0
          }
          97.5% {
            opacity:0
          }
          97.9167% {
            opacity:0
          }
          98.3333% {
            opacity:0
          }
          98.75% {
            opacity:0
          }
          99.1667% {
            opacity:0
          }
          99.5833% {
            opacity:0
          }
          100% {
            opacity:0
          }
        }
        .left-force {
          animation:left-force 12s linear infinite
        }
        @keyframes left-force {
          0% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          0.4167% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          0.8333% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          1.25% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          1.6667% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          2.0833% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          2.5% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          2.9167% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          3.3333% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          3.75% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          4.1667% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          4.5833% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          5% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          5.4167% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          5.8333% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          6.25% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          6.6667% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          7.0833% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          7.5% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          7.9167% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          8.3333% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          8.75% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          9.1667% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          9.5833% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          10% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          10.4167% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          10.8333% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          11.25% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          11.6667% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          12.0833% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          12.5% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          12.9167% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          13.3333% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          13.75% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          14.1667% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          14.5833% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          15% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          15.4167% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          15.8333% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          16.25% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          16.6667% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          17.0833% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          17.5% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          17.9167% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          18.3333% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          18.75% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          19.1667% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          19.5833% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          20% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          20.4167% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          20.8333% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          21.25% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          21.6667% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          22.0833% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          22.5% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          22.9167% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          23.3333% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          23.75% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          24.1667% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          24.5833% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          25% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          25.4167% {
            opacity:1;
            d:path("M51 70l0.504 -0.1512m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          25.8333% {
            opacity:1;
            d:path("M51 70l1.872 -0.5616m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          26.25% {
            opacity:1;
            d:path("M51 70l3.888 -1.1664m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          26.6667% {
            opacity:1;
            d:path("M51 70l6.336 -1.9008m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          27.0833% {
            opacity:1;
            d:path("M51 70l9 -2.7m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          27.5% {
            opacity:1;
            d:path("M51 70l11.664 -3.4992m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          27.9167% {
            opacity:1;
            d:path("M51 70l14.112 -4.2336m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          28.3333% {
            opacity:1;
            d:path("M51 70l16.128 -4.8384m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          28.75% {
            opacity:1;
            d:path("M51 70l17.496 -5.2488m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          29.1667% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          29.5833% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          30% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          30.4167% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          30.8333% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          31.25% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          31.6667% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          32.0833% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          32.5% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          32.9167% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          33.3333% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          33.75% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          34.1667% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          34.5833% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          35% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          35.4167% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          35.8333% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          36.25% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          36.6667% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          37.0833% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          37.5% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          37.9167% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          38.3333% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          38.75% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          39.1667% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          39.5833% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          40% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          40.4167% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          40.8333% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          41.25% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          41.6667% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          42.0833% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          42.5% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          42.9167% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          43.3333% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          43.75% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          44.1667% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          44.5833% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          45% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          45.4167% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          45.8333% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          46.25% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          46.6667% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          47.0833% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          47.5% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          47.9167% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          48.3333% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          48.75% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          49.1667% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          49.5833% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          50% {
            opacity:1;
            d:path("M51 70l18 -5.4m-2.2988 2.7777l2.2988 -2.7777 -3.4482 -1.0536")
          }
          50.4167% {
            opacity:1;
            d:path("M51 70l18 -5.0724m-2.3451 2.7387l2.3451 -2.7387 -3.43 -1.1113")
          }
          50.8333% {
            opacity:1;
            d:path("M51 70l18 -4.1832m-2.4694 2.6272l2.4694 -2.6272 -3.3749 -1.269")
          }
          51.25% {
            opacity:1;
            d:path("M51 70l18 -2.8728m-2.6473 2.4478l2.6473 -2.4478 -3.2777 -1.5022")
          }
          51.6667% {
            opacity:1;
            d:path("M51 70l18 -1.2816m-2.8504 2.208l2.8504 -2.208 -3.1345 -1.7819")
          }
          52.0833% {
            opacity:1;
            d:path("M51 70l18 0.45m-3.049 1.9244l3.049 -1.9244 -2.9491 -2.0744")
          }
          52.5% {
            opacity:1;
            d:path("M51 70l18 2.1816m-3.2188 1.6245l3.2188 -1.6245 -2.7376 -2.3464")
          }
          52.9167% {
            opacity:1;
            d:path("M51 70l18 3.7728m-3.3465 1.342l3.3465 -1.342 -2.5259 -2.5729")
          }
          53.3333% {
            opacity:1;
            d:path("M51 70l18 5.0832m-3.4306 1.1094l3.4306 -1.1094 -2.3435 -2.74")
          }
          53.75% {
            opacity:1;
            d:path("M51 70l18 5.9724m-3.4772 0.9535l3.4772 -0.9535 -2.2175 -2.843")
          }
          54.1667% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          54.5833% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          55% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          55.4167% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          55.8333% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          56.25% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          56.6667% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          57.0833% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          57.5% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          57.9167% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          58.3333% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          58.75% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          59.1667% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          59.5833% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          60% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          60.4167% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          60.8333% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          61.25% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          61.6667% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          62.0833% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          62.5% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          62.9167% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          63.3333% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          63.75% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          64.1667% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          64.5833% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          65% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          65.4167% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          65.8333% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          66.25% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          66.6667% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          67.0833% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          67.5% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          67.9167% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          68.3333% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          68.75% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          69.1667% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          69.5833% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          70% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          70.4167% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          70.8333% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          71.25% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          71.6667% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          72.0833% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          72.5% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          72.9167% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          73.3333% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          73.75% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          74.1667% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          74.5833% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          75% {
            opacity:1;
            d:path("M51 70l18 6.3m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          75.4167% {
            opacity:1;
            d:path("M51 70l17.8695 6.2543m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          75.8333% {
            opacity:1;
            d:path("M51 70l17.496 6.1236m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          76.25% {
            opacity:1;
            d:path("M51 70l16.9065 5.9173m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          76.6667% {
            opacity:1;
            d:path("M51 70l16.128 5.6448m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          77.0833% {
            opacity:1;
            d:path("M51 70l15.1875 5.3156m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          77.5% {
            opacity:1;
            d:path("M51 70l14.112 4.9392m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          77.9167% {
            opacity:1;
            d:path("M51 70l12.9285 4.525m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          78.3333% {
            opacity:1;
            d:path("M51 70l11.664 4.0824m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          78.75% {
            opacity:1;
            d:path("M51 70l10.3455 3.6209m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          79.1667% {
            opacity:1;
            d:path("M51 70l9 3.15m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          79.5833% {
            opacity:1;
            d:path("M51 70l7.6545 2.6791m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          80% {
            opacity:1;
            d:path("M51 70l6.336 2.2176m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          80.4167% {
            opacity:1;
            d:path("M51 70l5.0715 1.775m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          80.8333% {
            opacity:1;
            d:path("M51 70l3.888 1.3608m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          81.25% {
            opacity:1;
            d:path("M51 70l2.8125 0.9844m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          81.6667% {
            opacity:1;
            d:path("M51 70l1.872 0.6552m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          82.0833% {
            opacity:1;
            d:path("M51 70l1.0935 0.3827m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          82.5% {
            opacity:1;
            d:path("M51 70l0.504 0.1764m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          82.9167% {
            opacity:1;
            d:path("M51 70l0.1305 0.0457m-3.4923 0.8967l3.4923 -0.8967 -2.1709 -2.8788")
          }
          83.3333% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          83.75% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          84.1667% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          84.5833% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          85% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          85.4167% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          85.8333% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          86.25% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          86.6667% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          87.0833% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          87.5% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          87.9167% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          88.3333% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          88.75% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          89.1667% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          89.5833% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          90% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          90.4167% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          90.8333% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          91.25% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          91.6667% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          92.0833% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          92.5% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          92.9167% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          93.3333% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          93.75% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          94.1667% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          94.5833% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          95% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          95.4167% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          95.8333% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          96.25% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          96.6667% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          97.0833% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          97.5% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          97.9167% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          98.3333% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          98.75% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          99.1667% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          99.5833% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
          100% {
            opacity:0;
            d:path("M51 70l0 0m-3 2l3 -2 -3 -2")
          }
        }
        .right-force {
          animation:right-force 12s linear infinite
        }
        @keyframes right-force {
          0% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          0.4167% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          0.8333% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          1.25% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          1.6667% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          2.0833% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          2.5% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          2.9167% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          3.3333% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          3.75% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          4.1667% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          4.5833% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          5% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          5.4167% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          5.8333% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          6.25% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          6.6667% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          7.0833% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          7.5% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          7.9167% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          8.3333% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          8.75% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          9.1667% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          9.5833% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          10% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          10.4167% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          10.8333% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          11.25% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          11.6667% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          12.0833% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          12.5% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          12.9167% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          13.3333% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          13.75% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          14.1667% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          14.5833% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          15% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          15.4167% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          15.8333% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          16.25% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          16.6667% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          17.0833% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          17.5% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          17.9167% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          18.3333% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          18.75% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          19.1667% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          19.5833% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          20% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          20.4167% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          20.8333% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          21.25% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          21.6667% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          22.0833% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          22.5% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          22.9167% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          23.3333% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          23.75% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          24.1667% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          24.5833% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          25% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          25.4167% {
            opacity:1;
            d:path("M89 70l-0.504 -0.1512m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          25.8333% {
            opacity:1;
            d:path("M89 70l-1.872 -0.5616m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          26.25% {
            opacity:1;
            d:path("M89 70l-3.888 -1.1664m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          26.6667% {
            opacity:1;
            d:path("M89 70l-6.336 -1.9008m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          27.0833% {
            opacity:1;
            d:path("M89 70l-9 -2.7m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          27.5% {
            opacity:1;
            d:path("M89 70l-11.664 -3.4992m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          27.9167% {
            opacity:1;
            d:path("M89 70l-14.112 -4.2336m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          28.3333% {
            opacity:1;
            d:path("M89 70l-16.128 -4.8384m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          28.75% {
            opacity:1;
            d:path("M89 70l-17.496 -5.2488m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          29.1667% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          29.5833% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          30% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          30.4167% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          30.8333% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          31.25% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          31.6667% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          32.0833% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          32.5% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          32.9167% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          33.3333% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          33.75% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          34.1667% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          34.5833% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          35% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          35.4167% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          35.8333% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          36.25% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          36.6667% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          37.0833% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          37.5% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          37.9167% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          38.3333% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          38.75% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          39.1667% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          39.5833% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          40% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          40.4167% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          40.8333% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          41.25% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          41.6667% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          42.0833% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          42.5% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          42.9167% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          43.3333% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          43.75% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          44.1667% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          44.5833% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          45% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          45.4167% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          45.8333% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          46.25% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          46.6667% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          47.0833% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          47.5% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          47.9167% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          48.3333% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          48.75% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          49.1667% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          49.5833% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          50% {
            opacity:1;
            d:path("M89 70l-18 -5.4m3.4482 -1.0536l-3.4482 1.0536 2.2988 2.7777")
          }
          50.4167% {
            opacity:1;
            d:path("M89 70l-18 -5.4252m3.4495 -1.0492l-3.4495 1.0492 2.2952 2.7806")
          }
          50.8333% {
            opacity:1;
            d:path("M89 70l-18 -5.4936m3.4532 -1.0372l-3.4532 1.0372 2.2855 2.7886")
          }
          51.25% {
            opacity:1;
            d:path("M89 70l-18 -5.5944m3.4584 -1.0195l-3.4584 1.0195 2.2712 2.8003")
          }
          51.6667% {
            opacity:1;
            d:path("M89 70l-18 -5.7168m3.4647 -0.9981l-3.4647 0.9981 2.2539 2.8143")
          }
          52.0833% {
            opacity:1;
            d:path("M89 70l-18 -5.85m3.4713 -0.9748l-3.4713 0.9748 2.2349 2.8293")
          }
          52.5% {
            opacity:1;
            d:path("M89 70l-18 -5.9832m3.4777 -0.9516l-3.4777 0.9516 2.216 2.8442")
          }
          52.9167% {
            opacity:1;
            d:path("M89 70l-18 -6.1056m3.4835 -0.9303l-3.4835 0.9303 2.1986 2.8577")
          }
          53.3333% {
            opacity:1;
            d:path("M89 70l-18 -6.2064m3.4881 -0.9129l-3.4881 0.9129 2.1842 2.8687")
          }
          53.75% {
            opacity:1;
            d:path("M89 70l-18 -6.2748m3.4912 -0.901l-3.4912 0.901 2.1745 2.8761")
          }
          54.1667% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          54.5833% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          55% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          55.4167% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          55.8333% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          56.25% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          56.6667% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          57.0833% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          57.5% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          57.9167% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          58.3333% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          58.75% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          59.1667% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          59.5833% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          60% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          60.4167% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          60.8333% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          61.25% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          61.6667% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          62.0833% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          62.5% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          62.9167% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          63.3333% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          63.75% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          64.1667% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          64.5833% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          65% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          65.4167% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          65.8333% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          66.25% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          66.6667% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          67.0833% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          67.5% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          67.9167% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          68.3333% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          68.75% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          69.1667% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          69.5833% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          70% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          70.4167% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          70.8333% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          71.25% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          71.6667% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          72.0833% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          72.5% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          72.9167% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          73.3333% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          73.75% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          74.1667% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          74.5833% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          75% {
            opacity:1;
            d:path("M89 70l-18 -6.3m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          75.4167% {
            opacity:1;
            d:path("M89 70l-17.8695 -6.2543m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          75.8333% {
            opacity:1;
            d:path("M89 70l-17.496 -6.1236m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          76.25% {
            opacity:1;
            d:path("M89 70l-16.9065 -5.9173m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          76.6667% {
            opacity:1;
            d:path("M89 70l-16.128 -5.6448m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          77.0833% {
            opacity:1;
            d:path("M89 70l-15.1875 -5.3156m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          77.5% {
            opacity:1;
            d:path("M89 70l-14.112 -4.9392m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          77.9167% {
            opacity:1;
            d:path("M89 70l-12.9285 -4.525m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          78.3333% {
            opacity:1;
            d:path("M89 70l-11.664 -4.0824m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          78.75% {
            opacity:1;
            d:path("M89 70l-10.3455 -3.6209m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          79.1667% {
            opacity:1;
            d:path("M89 70l-9 -3.15m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          79.5833% {
            opacity:1;
            d:path("M89 70l-7.6545 -2.6791m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          80% {
            opacity:1;
            d:path("M89 70l-6.336 -2.2176m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          80.4167% {
            opacity:1;
            d:path("M89 70l-5.0715 -1.775m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          80.8333% {
            opacity:1;
            d:path("M89 70l-3.888 -1.3608m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          81.25% {
            opacity:1;
            d:path("M89 70l-2.8125 -0.9844m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          81.6667% {
            opacity:1;
            d:path("M89 70l-1.872 -0.6552m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          82.0833% {
            opacity:1;
            d:path("M89 70l-1.0935 -0.3827m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          82.5% {
            opacity:1;
            d:path("M89 70l-0.504 -0.1764m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          82.9167% {
            opacity:1;
            d:path("M89 70l-0.1305 -0.0457m3.4923 -0.8967l-3.4923 0.8967 2.1709 2.8788")
          }
          83.3333% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          83.75% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          84.1667% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          84.5833% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          85% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          85.4167% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          85.8333% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          86.25% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          86.6667% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          87.0833% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          87.5% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          87.9167% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          88.3333% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          88.75% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          89.1667% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          89.5833% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          90% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          90.4167% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          90.8333% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          91.25% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          91.6667% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          92.0833% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          92.5% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          92.9167% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          93.3333% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          93.75% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          94.1667% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          94.5833% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          95% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          95.4167% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          95.8333% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          96.25% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          96.6667% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          97.0833% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          97.5% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          97.9167% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          98.3333% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          98.75% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          99.1667% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          99.5833% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
          100% {
            opacity:0;
            d:path("M89 70l0 0m-3 2l3 -2 -3 -2")
          }
        }
        .gravity {
          animation:gravity 12s linear infinite
        }
        @keyframes gravity {
          0% {
            opacity:0
          }
          0.4167% {
            opacity:0
          }
          0.8333% {
            opacity:0
          }
          1.25% {
            opacity:0
          }
          1.6667% {
            opacity:0
          }
          2.0833% {
            opacity:0
          }
          2.5% {
            opacity:0
          }
          2.9167% {
            opacity:0
          }
          3.3333% {
            opacity:0
          }
          3.75% {
            opacity:0
          }
          4.1667% {
            opacity:0
          }
          4.5833% {
            opacity:0
          }
          5% {
            opacity:0
          }
          5.4167% {
            opacity:0
          }
          5.8333% {
            opacity:0
          }
          6.25% {
            opacity:0
          }
          6.6667% {
            opacity:0
          }
          7.0833% {
            opacity:0
          }
          7.5% {
            opacity:0
          }
          7.9167% {
            opacity:0
          }
          8.3333% {
            opacity:0
          }
          8.75% {
            opacity:0
          }
          9.1667% {
            opacity:0
          }
          9.5833% {
            opacity:0
          }
          10% {
            opacity:0
          }
          10.4167% {
            opacity:0
          }
          10.8333% {
            opacity:0
          }
          11.25% {
            opacity:0
          }
          11.6667% {
            opacity:0
          }
          12.0833% {
            opacity:0
          }
          12.5% {
            opacity:0
          }
          12.9167% {
            opacity:0
          }
          13.3333% {
            opacity:0
          }
          13.75% {
            opacity:0
          }
          14.1667% {
            opacity:0
          }
          14.5833% {
            opacity:0
          }
          15% {
            opacity:0
          }
          15.4167% {
            opacity:0
          }
          15.8333% {
            opacity:0
          }
          16.25% {
            opacity:0
          }
          16.6667% {
            opacity:0
          }
          17.0833% {
            opacity:0
          }
          17.5% {
            opacity:0
          }
          17.9167% {
            opacity:0
          }
          18.3333% {
            opacity:0
          }
          18.75% {
            opacity:0
          }
          19.1667% {
            opacity:0
          }
          19.5833% {
            opacity:0
          }
          20% {
            opacity:0
          }
          20.4167% {
            opacity:0
          }
          20.8333% {
            opacity:0
          }
          21.25% {
            opacity:0
          }
          21.6667% {
            opacity:0
          }
          22.0833% {
            opacity:0
          }
          22.5% {
            opacity:0
          }
          22.9167% {
            opacity:0
          }
          23.3333% {
            opacity:0
          }
          23.75% {
            opacity:0
          }
          24.1667% {
            opacity:0
          }
          24.5833% {
            opacity:0
          }
          25% {
            opacity:0
          }
          25.4167% {
            opacity:0.028
          }
          25.8333% {
            opacity:0.104
          }
          26.25% {
            opacity:0.216
          }
          26.6667% {
            opacity:0.352
          }
          27.0833% {
            opacity:0.5
          }
          27.5% {
            opacity:0.648
          }
          27.9167% {
            opacity:0.784
          }
          28.3333% {
            opacity:0.896
          }
          28.75% {
            opacity:0.972
          }
          29.1667% {
            opacity:1
          }
          29.5833% {
            opacity:1
          }
          30% {
            opacity:1
          }
          30.4167% {
            opacity:1
          }
          30.8333% {
            opacity:1
          }
          31.25% {
            opacity:1
          }
          31.6667% {
            opacity:1
          }
          32.0833% {
            opacity:1
          }
          32.5% {
            opacity:1
          }
          32.9167% {
            opacity:1
          }
          33.3333% {
            opacity:1
          }
          33.75% {
            opacity:1
          }
          34.1667% {
            opacity:1
          }
          34.5833% {
            opacity:1
          }
          35% {
            opacity:1
          }
          35.4167% {
            opacity:1
          }
          35.8333% {
            opacity:1
          }
          36.25% {
            opacity:1
          }
          36.6667% {
            opacity:1
          }
          37.0833% {
            opacity:1
          }
          37.5% {
            opacity:1
          }
          37.9167% {
            opacity:1
          }
          38.3333% {
            opacity:1
          }
          38.75% {
            opacity:1
          }
          39.1667% {
            opacity:1
          }
          39.5833% {
            opacity:1
          }
          40% {
            opacity:1
          }
          40.4167% {
            opacity:1
          }
          40.8333% {
            opacity:1
          }
          41.25% {
            opacity:1
          }
          41.6667% {
            opacity:1
          }
          42.0833% {
            opacity:1
          }
          42.5% {
            opacity:1
          }
          42.9167% {
            opacity:1
          }
          43.3333% {
            opacity:1
          }
          43.75% {
            opacity:1
          }
          44.1667% {
            opacity:1
          }
          44.5833% {
            opacity:1
          }
          45% {
            opacity:1
          }
          45.4167% {
            opacity:1
          }
          45.8333% {
            opacity:1
          }
          46.25% {
            opacity:1
          }
          46.6667% {
            opacity:1
          }
          47.0833% {
            opacity:1
          }
          47.5% {
            opacity:1
          }
          47.9167% {
            opacity:1
          }
          48.3333% {
            opacity:1
          }
          48.75% {
            opacity:1
          }
          49.1667% {
            opacity:1
          }
          49.5833% {
            opacity:1
          }
          50% {
            opacity:1
          }
          50.4167% {
            opacity:0.972
          }
          50.8333% {
            opacity:0.896
          }
          51.25% {
            opacity:0.784
          }
          51.6667% {
            opacity:0.648
          }
          52.0833% {
            opacity:0.5
          }
          52.5% {
            opacity:0.352
          }
          52.9167% {
            opacity:0.216
          }
          53.3333% {
            opacity:0.104
          }
          53.75% {
            opacity:0.028
          }
          54.1667% {
            opacity:0
          }
          54.5833% {
            opacity:0
          }
          55% {
            opacity:0
          }
          55.4167% {
            opacity:0
          }
          55.8333% {
            opacity:0
          }
          56.25% {
            opacity:0
          }
          56.6667% {
            opacity:0
          }
          57.0833% {
            opacity:0
          }
          57.5% {
            opacity:0
          }
          57.9167% {
            opacity:0
          }
          58.3333% {
            opacity:0
          }
          58.75% {
            opacity:0
          }
          59.1667% {
            opacity:0
          }
          59.5833% {
            opacity:0
          }
          60% {
            opacity:0
          }
          60.4167% {
            opacity:0
          }
          60.8333% {
            opacity:0
          }
          61.25% {
            opacity:0
          }
          61.6667% {
            opacity:0
          }
          62.0833% {
            opacity:0
          }
          62.5% {
            opacity:0
          }
          62.9167% {
            opacity:0
          }
          63.3333% {
            opacity:0
          }
          63.75% {
            opacity:0
          }
          64.1667% {
            opacity:0
          }
          64.5833% {
            opacity:0
          }
          65% {
            opacity:0
          }
          65.4167% {
            opacity:0
          }
          65.8333% {
            opacity:0
          }
          66.25% {
            opacity:0
          }
          66.6667% {
            opacity:0
          }
          67.0833% {
            opacity:0
          }
          67.5% {
            opacity:0
          }
          67.9167% {
            opacity:0
          }
          68.3333% {
            opacity:0
          }
          68.75% {
            opacity:0
          }
          69.1667% {
            opacity:0
          }
          69.5833% {
            opacity:0
          }
          70% {
            opacity:0
          }
          70.4167% {
            opacity:0
          }
          70.8333% {
            opacity:0
          }
          71.25% {
            opacity:0
          }
          71.6667% {
            opacity:0
          }
          72.0833% {
            opacity:0
          }
          72.5% {
            opacity:0
          }
          72.9167% {
            opacity:0
          }
          73.3333% {
            opacity:0
          }
          73.75% {
            opacity:0
          }
          74.1667% {
            opacity:0
          }
          74.5833% {
            opacity:0
          }
          75% {
            opacity:0
          }
          75.4167% {
            opacity:0
          }
          75.8333% {
            opacity:0
          }
          76.25% {
            opacity:0
          }
          76.6667% {
            opacity:0
          }
          77.0833% {
            opacity:0
          }
          77.5% {
            opacity:0
          }
          77.9167% {
            opacity:0
          }
          78.3333% {
            opacity:0
          }
          78.75% {
            opacity:0
          }
          79.1667% {
            opacity:0
          }
          79.5833% {
            opacity:0
          }
          80% {
            opacity:0
          }
          80.4167% {
            opacity:0
          }
          80.8333% {
            opacity:0
          }
          81.25% {
            opacity:0
          }
          81.6667% {
            opacity:0
          }
          82.0833% {
            opacity:0
          }
          82.5% {
            opacity:0
          }
          82.9167% {
            opacity:0
          }
          83.3333% {
            opacity:0
          }
          83.75% {
            opacity:0
          }
          84.1667% {
            opacity:0
          }
          84.5833% {
            opacity:0
          }
          85% {
            opacity:0
          }
          85.4167% {
            opacity:0
          }
          85.8333% {
            opacity:0
          }
          86.25% {
            opacity:0
          }
          86.6667% {
            opacity:0
          }
          87.0833% {
            opacity:0
          }
          87.5% {
            opacity:0
          }
          87.9167% {
            opacity:0
          }
          88.3333% {
            opacity:0
          }
          88.75% {
            opacity:0
          }
          89.1667% {
            opacity:0
          }
          89.5833% {
            opacity:0
          }
          90% {
            opacity:0
          }
          90.4167% {
            opacity:0
          }
          90.8333% {
            opacity:0
          }
          91.25% {
            opacity:0
          }
          91.6667% {
            opacity:0
          }
          92.0833% {
            opacity:0
          }
          92.5% {
            opacity:0
          }
          92.9167% {
            opacity:0
          }
          93.3333% {
            opacity:0
          }
          93.75% {
            opacity:0
          }
          94.1667% {
            opacity:0
          }
          94.5833% {
            opacity:0
          }
          95% {
            opacity:0
          }
          95.4167% {
            opacity:0
          }
          95.8333% {
            opacity:0
          }
          96.25% {
            opacity:0
          }
          96.6667% {
            opacity:0
          }
          97.0833% {
            opacity:0
          }
          97.5% {
            opacity:0
          }
          97.9167% {
            opacity:0
          }
          98.3333% {
            opacity:0
          }
          98.75% {
            opacity:0
          }
          99.1667% {
            opacity:0
          }
          99.5833% {
            opacity:0
          }
          100% {
            opacity:0
          }
        }
        .torque {
          animation:torque 12s linear infinite
        }
        @keyframes torque {
          0% {
            opacity:0
          }
          0.4167% {
            opacity:0
          }
          0.8333% {
            opacity:0
          }
          1.25% {
            opacity:0
          }
          1.6667% {
            opacity:0
          }
          2.0833% {
            opacity:0
          }
          2.5% {
            opacity:0
          }
          2.9167% {
            opacity:0
          }
          3.3333% {
            opacity:0
          }
          3.75% {
            opacity:0
          }
          4.1667% {
            opacity:0
          }
          4.5833% {
            opacity:0
          }
          5% {
            opacity:0
          }
          5.4167% {
            opacity:0
          }
          5.8333% {
            opacity:0
          }
          6.25% {
            opacity:0
          }
          6.6667% {
            opacity:0
          }
          7.0833% {
            opacity:0
          }
          7.5% {
            opacity:0
          }
          7.9167% {
            opacity:0
          }
          8.3333% {
            opacity:0
          }
          8.75% {
            opacity:0
          }
          9.1667% {
            opacity:0
          }
          9.5833% {
            opacity:0
          }
          10% {
            opacity:0
          }
          10.4167% {
            opacity:0
          }
          10.8333% {
            opacity:0
          }
          11.25% {
            opacity:0
          }
          11.6667% {
            opacity:0
          }
          12.0833% {
            opacity:0
          }
          12.5% {
            opacity:0
          }
          12.9167% {
            opacity:0
          }
          13.3333% {
            opacity:0
          }
          13.75% {
            opacity:0
          }
          14.1667% {
            opacity:0
          }
          14.5833% {
            opacity:0
          }
          15% {
            opacity:0
          }
          15.4167% {
            opacity:0
          }
          15.8333% {
            opacity:0
          }
          16.25% {
            opacity:0
          }
          16.6667% {
            opacity:0
          }
          17.0833% {
            opacity:0
          }
          17.5% {
            opacity:0
          }
          17.9167% {
            opacity:0
          }
          18.3333% {
            opacity:0
          }
          18.75% {
            opacity:0
          }
          19.1667% {
            opacity:0
          }
          19.5833% {
            opacity:0
          }
          20% {
            opacity:0
          }
          20.4167% {
            opacity:0
          }
          20.8333% {
            opacity:0
          }
          21.25% {
            opacity:0
          }
          21.6667% {
            opacity:0
          }
          22.0833% {
            opacity:0
          }
          22.5% {
            opacity:0
          }
          22.9167% {
            opacity:0
          }
          23.3333% {
            opacity:0
          }
          23.75% {
            opacity:0
          }
          24.1667% {
            opacity:0
          }
          24.5833% {
            opacity:0
          }
          25% {
            opacity:0
          }
          25.4167% {
            opacity:0
          }
          25.8333% {
            opacity:0
          }
          26.25% {
            opacity:0
          }
          26.6667% {
            opacity:0
          }
          27.0833% {
            opacity:0
          }
          27.5% {
            opacity:0
          }
          27.9167% {
            opacity:0
          }
          28.3333% {
            opacity:0
          }
          28.75% {
            opacity:0
          }
          29.1667% {
            opacity:0
          }
          29.5833% {
            opacity:0
          }
          30% {
            opacity:0
          }
          30.4167% {
            opacity:0
          }
          30.8333% {
            opacity:0
          }
          31.25% {
            opacity:0
          }
          31.6667% {
            opacity:0
          }
          32.0833% {
            opacity:0
          }
          32.5% {
            opacity:0
          }
          32.9167% {
            opacity:0
          }
          33.3333% {
            opacity:0
          }
          33.75% {
            opacity:0
          }
          34.1667% {
            opacity:0
          }
          34.5833% {
            opacity:0
          }
          35% {
            opacity:0
          }
          35.4167% {
            opacity:0
          }
          35.8333% {
            opacity:0
          }
          36.25% {
            opacity:0
          }
          36.6667% {
            opacity:0
          }
          37.0833% {
            opacity:0
          }
          37.5% {
            opacity:0
          }
          37.9167% {
            opacity:0
          }
          38.3333% {
            opacity:0
          }
          38.75% {
            opacity:0
          }
          39.1667% {
            opacity:0
          }
          39.5833% {
            opacity:0
          }
          40% {
            opacity:0
          }
          40.4167% {
            opacity:0
          }
          40.8333% {
            opacity:0
          }
          41.25% {
            opacity:0
          }
          41.6667% {
            opacity:0
          }
          42.0833% {
            opacity:0
          }
          42.5% {
            opacity:0
          }
          42.9167% {
            opacity:0
          }
          43.3333% {
            opacity:0
          }
          43.75% {
            opacity:0
          }
          44.1667% {
            opacity:0
          }
          44.5833% {
            opacity:0
          }
          45% {
            opacity:0
          }
          45.4167% {
            opacity:0
          }
          45.8333% {
            opacity:0
          }
          46.25% {
            opacity:0
          }
          46.6667% {
            opacity:0
          }
          47.0833% {
            opacity:0
          }
          47.5% {
            opacity:0
          }
          47.9167% {
            opacity:0
          }
          48.3333% {
            opacity:0
          }
          48.75% {
            opacity:0
          }
          49.1667% {
            opacity:0
          }
          49.5833% {
            opacity:0
          }
          50% {
            opacity:0
          }
          50.4167% {
            opacity:0.028
          }
          50.8333% {
            opacity:0.104
          }
          51.25% {
            opacity:0.216
          }
          51.6667% {
            opacity:0.352
          }
          52.0833% {
            opacity:0.5
          }
          52.5% {
            opacity:0.648
          }
          52.9167% {
            opacity:0.784
          }
          53.3333% {
            opacity:0.896
          }
          53.75% {
            opacity:0.972
          }
          54.1667% {
            opacity:1
          }
          54.5833% {
            opacity:1
          }
          55% {
            opacity:1
          }
          55.4167% {
            opacity:1
          }
          55.8333% {
            opacity:1
          }
          56.25% {
            opacity:1
          }
          56.6667% {
            opacity:1
          }
          57.0833% {
            opacity:1
          }
          57.5% {
            opacity:1
          }
          57.9167% {
            opacity:1
          }
          58.3333% {
            opacity:1
          }
          58.75% {
            opacity:1
          }
          59.1667% {
            opacity:1
          }
          59.5833% {
            opacity:1
          }
          60% {
            opacity:1
          }
          60.4167% {
            opacity:1
          }
          60.8333% {
            opacity:1
          }
          61.25% {
            opacity:1
          }
          61.6667% {
            opacity:1
          }
          62.0833% {
            opacity:1
          }
          62.5% {
            opacity:1
          }
          62.9167% {
            opacity:1
          }
          63.3333% {
            opacity:1
          }
          63.75% {
            opacity:1
          }
          64.1667% {
            opacity:1
          }
          64.5833% {
            opacity:1
          }
          65% {
            opacity:1
          }
          65.4167% {
            opacity:1
          }
          65.8333% {
            opacity:1
          }
          66.25% {
            opacity:1
          }
          66.6667% {
            opacity:1
          }
          67.0833% {
            opacity:1
          }
          67.5% {
            opacity:1
          }
          67.9167% {
            opacity:1
          }
          68.3333% {
            opacity:1
          }
          68.75% {
            opacity:1
          }
          69.1667% {
            opacity:1
          }
          69.5833% {
            opacity:1
          }
          70% {
            opacity:1
          }
          70.4167% {
            opacity:1
          }
          70.8333% {
            opacity:1
          }
          71.25% {
            opacity:1
          }
          71.6667% {
            opacity:1
          }
          72.0833% {
            opacity:1
          }
          72.5% {
            opacity:1
          }
          72.9167% {
            opacity:1
          }
          73.3333% {
            opacity:1
          }
          73.75% {
            opacity:1
          }
          74.1667% {
            opacity:1
          }
          74.5833% {
            opacity:1
          }
          75% {
            opacity:1
          }
          75.4167% {
            opacity:0.9927
          }
          75.8333% {
            opacity:0.972
          }
          76.25% {
            opacity:0.9392
          }
          76.6667% {
            opacity:0.896
          }
          77.0833% {
            opacity:0.8438
          }
          77.5% {
            opacity:0.784
          }
          77.9167% {
            opacity:0.7183
          }
          78.3333% {
            opacity:0.648
          }
          78.75% {
            opacity:0.5747
          }
          79.1667% {
            opacity:0.5
          }
          79.5833% {
            opacity:0.4252
          }
          80% {
            opacity:0.352
          }
          80.4167% {
            opacity:0.2817
          }
          80.8333% {
            opacity:0.216
          }
          81.25% {
            opacity:0.1563
          }
          81.6667% {
            opacity:0.104
          }
          82.0833% {
            opacity:0.0607
          }
          82.5% {
            opacity:0.028
          }
          82.9167% {
            opacity:0.0072
          }
          83.3333% {
            opacity:0
          }
          83.75% {
            opacity:0
          }
          84.1667% {
            opacity:0
          }
          84.5833% {
            opacity:0
          }
          85% {
            opacity:0
          }
          85.4167% {
            opacity:0
          }
          85.8333% {
            opacity:0
          }
          86.25% {
            opacity:0
          }
          86.6667% {
            opacity:0
          }
          87.0833% {
            opacity:0
          }
          87.5% {
            opacity:0
          }
          87.9167% {
            opacity:0
          }
          88.3333% {
            opacity:0
          }
          88.75% {
            opacity:0
          }
          89.1667% {
            opacity:0
          }
          89.5833% {
            opacity:0
          }
          90% {
            opacity:0
          }
          90.4167% {
            opacity:0
          }
          90.8333% {
            opacity:0
          }
          91.25% {
            opacity:0
          }
          91.6667% {
            opacity:0
          }
          92.0833% {
            opacity:0
          }
          92.5% {
            opacity:0
          }
          92.9167% {
            opacity:0
          }
          93.3333% {
            opacity:0
          }
          93.75% {
            opacity:0
          }
          94.1667% {
            opacity:0
          }
          94.5833% {
            opacity:0
          }
          95% {
            opacity:0
          }
          95.4167% {
            opacity:0
          }
          95.8333% {
            opacity:0
          }
          96.25% {
            opacity:0
          }
          96.6667% {
            opacity:0
          }
          97.0833% {
            opacity:0
          }
          97.5% {
            opacity:0
          }
          97.9167% {
            opacity:0
          }
          98.3333% {
            opacity:0
          }
          98.75% {
            opacity:0
          }
          99.1667% {
            opacity:0
          }
          99.5833% {
            opacity:0
          }
          100% {
            opacity:0
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Force-Closure Grasp">
        <rect class="ink paper" x="51" y="49" width="38" height="42"/>
        <g class="cycle">
          <circle class="ink paper left-finger" cx="44" cy="70" r="7"/>
          <circle class="ink paper right-finger" cx="96" cy="70" r="7"/>
          <g class="cones">
            <path d="M51 70 69 59.608V80.392Z M89 70 71 59.608V80.392Z" fill="#77c9ef" fill-opacity=".15" stroke="#77c9ef" stroke-width="1"/>
          </g>
          <path class="ink left-force" d="M51 70l18 6.3m-4-3 4 3-5 0"/>
          <path class="ink right-force" d="M89 70l-18-6.3m4 3-4-3 5 0"/>
          <path class="ink rose gravity" style="fill:none" d="M70 27V37.8m-3-4 3 4 3-4"/>
          <path class="ink rose torque" style="fill:none" d="M64 27A12 12 0 0 1 82 36m-5-2 5 2-1-5"/>
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

if (!customElements.get("concept-force-closure-grasp")) {
  customElements.define("concept-force-closure-grasp", ConceptForceClosureGrasp);
}
