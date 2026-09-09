// Touch-and-Go Asteroid Sampling. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptTouchAndGoAsteroidSampling extends HTMLElement {
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
        .sampler {
          animation:sampler 16s linear infinite;
        }
        .gasPulse {
          animation:gasPulse 16s linear infinite;
        }
        .grain0 {
          animation:grain0 16s linear infinite;
        }
        .grain1 {
          animation:grain1 16s linear infinite;
        }
        .grain2 {
          animation:grain2 16s linear infinite;
        }
        .grain3 {
          animation:grain3 16s linear infinite;
        }
        .grain4 {
          animation:grain4 16s linear infinite;
        }
        .tagEpisode {
          animation:tagEpisode 16s linear infinite;
        }
        @keyframes sampler {
          0% {
            transform:translate(0px,0px);
          }
          2.083% {
            transform:translate(0px,0.204px);
          }
          4.167% {
            transform:translate(0px,0.783px);
          }
          6.25% {
            transform:translate(0px,1.685px);
          }
          8.333% {
            transform:translate(0px,2.861px);
          }
          10.417% {
            transform:translate(0px,4.26px);
          }
          12.5% {
            transform:translate(0px,5.831px);
          }
          14.583% {
            transform:translate(0px,7.523px);
          }
          16.667% {
            transform:translate(0px,9.286px);
          }
          18.75% {
            transform:translate(0px,11.07px);
          }
          20.833% {
            transform:translate(0px,12.823px);
          }
          22.917% {
            transform:translate(0px,14.495px);
          }
          25% {
            transform:translate(0px,16.035px);
          }
          27.083% {
            transform:translate(0px,17.393px);
          }
          29.167% {
            transform:translate(0px,18.519px);
          }
          31.25% {
            transform:translate(0px,19.36px);
          }
          33.333% {
            transform:translate(0px,19.868px);
          }
          35.417% {
            transform:translate(0px,20px);
          }
          37.5% {
            transform:translate(0px,20px);
          }
          39.583% {
            transform:translate(0px,20px);
          }
          41.667% {
            transform:translate(0px,20px);
          }
          43.75% {
            transform:translate(0px,20px);
          }
          45.833% {
            transform:translate(0px,20px);
          }
          47.917% {
            transform:translate(0px,20px);
          }
          50% {
            transform:translate(0px,20px);
          }
          52.083% {
            transform:translate(0px,20px);
          }
          54.167% {
            transform:translate(0px,20px);
          }
          56.25% {
            transform:translate(0px,20px);
          }
          58.333% {
            transform:translate(0px,20px);
          }
          60.417% {
            transform:translate(0px,20px);
          }
          62.5% {
            transform:translate(0px,20px);
          }
          64.583% {
            transform:translate(0px,20px);
          }
          66.667% {
            transform:translate(0px,19.745px);
          }
          68.75% {
            transform:translate(0px,18.785px);
          }
          70.833% {
            transform:translate(0px,17.241px);
          }
          72.917% {
            transform:translate(0px,15.254px);
          }
          75% {
            transform:translate(0px,12.96px);
          }
          77.083% {
            transform:translate(0px,10.5px);
          }
          79.167% {
            transform:translate(0px,8.012px);
          }
          81.25% {
            transform:translate(0px,5.635px);
          }
          83.333% {
            transform:translate(0px,3.508px);
          }
          85.417% {
            transform:translate(0px,1.77px);
          }
          87.5% {
            transform:translate(0px,0.56px);
          }
          89.583% {
            transform:translate(0px,0.016px);
          }
          91.667% {
            transform:translate(0px,0px);
          }
          93.75% {
            transform:translate(0px,0px);
          }
          95.833% {
            transform:translate(0px,0px);
          }
          97.917% {
            transform:translate(0px,0px);
          }
          100% {
            transform:translate(0px,0px);
          }
        }
        @keyframes gasPulse {
          0% {
            opacity:0;
          }
          2.083% {
            opacity:0;
          }
          4.167% {
            opacity:0;
          }
          6.25% {
            opacity:0;
          }
          8.333% {
            opacity:0;
          }
          10.417% {
            opacity:0;
          }
          12.5% {
            opacity:0;
          }
          14.583% {
            opacity:0;
          }
          16.667% {
            opacity:0;
          }
          18.75% {
            opacity:0;
          }
          20.833% {
            opacity:0;
          }
          22.917% {
            opacity:0;
          }
          25% {
            opacity:0;
          }
          27.083% {
            opacity:0;
          }
          29.167% {
            opacity:0;
          }
          31.25% {
            opacity:0;
          }
          33.333% {
            opacity:0;
          }
          35.417% {
            opacity:0;
          }
          37.5% {
            opacity:0;
          }
          39.583% {
            opacity:0.695;
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
            opacity:0.777;
          }
          50% {
            opacity:0;
          }
          52.083% {
            opacity:0;
          }
          54.167% {
            opacity:0;
          }
          56.25% {
            opacity:0;
          }
          58.333% {
            opacity:0;
          }
          60.417% {
            opacity:0;
          }
          62.5% {
            opacity:0;
          }
          64.583% {
            opacity:0;
          }
          66.667% {
            opacity:0;
          }
          68.75% {
            opacity:0;
          }
          70.833% {
            opacity:0;
          }
          72.917% {
            opacity:0;
          }
          75% {
            opacity:0;
          }
          77.083% {
            opacity:0;
          }
          79.167% {
            opacity:0;
          }
          81.25% {
            opacity:0;
          }
          83.333% {
            opacity:0;
          }
          85.417% {
            opacity:0;
          }
          87.5% {
            opacity:0;
          }
          89.583% {
            opacity:0;
          }
          91.667% {
            opacity:0;
          }
          93.75% {
            opacity:0;
          }
          95.833% {
            opacity:0;
          }
          97.917% {
            opacity:0;
          }
          100% {
            opacity:0;
          }
        }
        @keyframes grain0 {
          0% {
            transform:translate(61px,116px);
          }
          2.083% {
            transform:translate(61px,116px);
          }
          4.167% {
            transform:translate(61px,116px);
          }
          6.25% {
            transform:translate(61px,116px);
          }
          8.333% {
            transform:translate(61px,116px);
          }
          10.417% {
            transform:translate(61px,116px);
          }
          12.5% {
            transform:translate(61px,116px);
          }
          14.583% {
            transform:translate(61px,116px);
          }
          16.667% {
            transform:translate(61px,116px);
          }
          18.75% {
            transform:translate(61px,116px);
          }
          20.833% {
            transform:translate(61px,116px);
          }
          22.917% {
            transform:translate(61px,116px);
          }
          25% {
            transform:translate(61px,116px);
          }
          27.083% {
            transform:translate(61px,116px);
          }
          29.167% {
            transform:translate(61px,116px);
          }
          31.25% {
            transform:translate(61px,116px);
          }
          33.333% {
            transform:translate(61px,116px);
          }
          35.417% {
            transform:translate(61px,116px);
          }
          37.5% {
            transform:translate(61px,116px);
          }
          39.583% {
            transform:translate(61px,116px);
          }
          41.667% {
            transform:translate(61px,116px);
          }
          43.75% {
            transform:translate(61.129px,114.94px);
          }
          45.833% {
            transform:translate(61.552px,111.615px);
          }
          47.917% {
            transform:translate(62.155px,107.86px);
          }
          50% {
            transform:translate(62.819px,105.819px);
          }
          52.083% {
            transform:translate(63.427px,105.896px);
          }
          54.167% {
            transform:translate(63.859px,106.688px);
          }
          56.25% {
            transform:translate(64px,107px);
          }
          58.333% {
            transform:translate(64px,107px);
          }
          60.417% {
            transform:translate(64px,107px);
          }
          62.5% {
            transform:translate(64px,107px);
          }
          64.583% {
            transform:translate(64px,107px);
          }
          66.667% {
            transform:translate(64px,106.745px);
          }
          68.75% {
            transform:translate(64px,105.785px);
          }
          70.833% {
            transform:translate(64px,104.241px);
          }
          72.917% {
            transform:translate(64px,102.254px);
          }
          75% {
            transform:translate(64px,99.96px);
          }
          77.083% {
            transform:translate(64px,97.5px);
          }
          79.167% {
            transform:translate(64px,95.012px);
          }
          81.25% {
            transform:translate(64px,92.635px);
          }
          83.333% {
            transform:translate(64px,90.508px);
          }
          85.417% {
            transform:translate(64px,88.77px);
          }
          87.5% {
            transform:translate(64px,87.56px);
          }
          89.583% {
            transform:translate(64px,87.016px);
          }
          91.667% {
            transform:translate(64px,87px);
          }
          93.75% {
            transform:translate(64px,87px);
          }
          95.833% {
            transform:translate(64px,87px);
          }
          97.917% {
            transform:translate(64px,87px);
          }
          100% {
            transform:translate(64px,87px);
          }
        }
        @keyframes grain1 {
          0% {
            transform:translate(65px,116px);
          }
          2.083% {
            transform:translate(65px,116px);
          }
          4.167% {
            transform:translate(65px,116px);
          }
          6.25% {
            transform:translate(65px,116px);
          }
          8.333% {
            transform:translate(65px,116px);
          }
          10.417% {
            transform:translate(65px,116px);
          }
          12.5% {
            transform:translate(65px,116px);
          }
          14.583% {
            transform:translate(65px,116px);
          }
          16.667% {
            transform:translate(65px,116px);
          }
          18.75% {
            transform:translate(65px,116px);
          }
          20.833% {
            transform:translate(65px,116px);
          }
          22.917% {
            transform:translate(65px,116px);
          }
          25% {
            transform:translate(65px,116px);
          }
          27.083% {
            transform:translate(65px,116px);
          }
          29.167% {
            transform:translate(65px,116px);
          }
          31.25% {
            transform:translate(65px,116px);
          }
          33.333% {
            transform:translate(65px,116px);
          }
          35.417% {
            transform:translate(65px,116px);
          }
          37.5% {
            transform:translate(65px,116px);
          }
          39.583% {
            transform:translate(65px,116px);
          }
          41.667% {
            transform:translate(65px,116px);
          }
          43.75% {
            transform:translate(65.009px,115.889px);
          }
          45.833% {
            transform:translate(65.186px,113.727px);
          }
          47.917% {
            transform:translate(65.528px,109.936px);
          }
          50% {
            transform:translate(65.957px,106.704px);
          }
          52.083% {
            transform:translate(66.394px,105.654px);
          }
          54.167% {
            transform:translate(66.759px,106.237px);
          }
          56.25% {
            transform:translate(66.974px,106.912px);
          }
          58.333% {
            transform:translate(67px,107px);
          }
          60.417% {
            transform:translate(67px,107px);
          }
          62.5% {
            transform:translate(67px,107px);
          }
          64.583% {
            transform:translate(67px,107px);
          }
          66.667% {
            transform:translate(67px,106.745px);
          }
          68.75% {
            transform:translate(67px,105.785px);
          }
          70.833% {
            transform:translate(67px,104.241px);
          }
          72.917% {
            transform:translate(67px,102.254px);
          }
          75% {
            transform:translate(67px,99.96px);
          }
          77.083% {
            transform:translate(67px,97.5px);
          }
          79.167% {
            transform:translate(67px,95.012px);
          }
          81.25% {
            transform:translate(67px,92.635px);
          }
          83.333% {
            transform:translate(67px,90.508px);
          }
          85.417% {
            transform:translate(67px,88.77px);
          }
          87.5% {
            transform:translate(67px,87.56px);
          }
          89.583% {
            transform:translate(67px,87.016px);
          }
          91.667% {
            transform:translate(67px,87px);
          }
          93.75% {
            transform:translate(67px,87px);
          }
          95.833% {
            transform:translate(67px,87px);
          }
          97.917% {
            transform:translate(67px,87px);
          }
          100% {
            transform:translate(67px,87px);
          }
        }
        @keyframes grain2 {
          0% {
            transform:translate(69px,116px);
          }
          2.083% {
            transform:translate(69px,116px);
          }
          4.167% {
            transform:translate(69px,116px);
          }
          6.25% {
            transform:translate(69px,116px);
          }
          8.333% {
            transform:translate(69px,116px);
          }
          10.417% {
            transform:translate(69px,116px);
          }
          12.5% {
            transform:translate(69px,116px);
          }
          14.583% {
            transform:translate(69px,116px);
          }
          16.667% {
            transform:translate(69px,116px);
          }
          18.75% {
            transform:translate(69px,116px);
          }
          20.833% {
            transform:translate(69px,116px);
          }
          22.917% {
            transform:translate(69px,116px);
          }
          25% {
            transform:translate(69px,116px);
          }
          27.083% {
            transform:translate(69px,116px);
          }
          29.167% {
            transform:translate(69px,116px);
          }
          31.25% {
            transform:translate(69px,116px);
          }
          33.333% {
            transform:translate(69px,116px);
          }
          35.417% {
            transform:translate(69px,116px);
          }
          37.5% {
            transform:translate(69px,116px);
          }
          39.583% {
            transform:translate(69px,116px);
          }
          41.667% {
            transform:translate(69px,116px);
          }
          43.75% {
            transform:translate(69px,116px);
          }
          45.833% {
            transform:translate(69.029px,115.277px);
          }
          47.917% {
            transform:translate(69.158px,112.206px);
          }
          50% {
            transform:translate(69.352px,108.363px);
          }
          52.083% {
            transform:translate(69.573px,105.974px);
          }
          54.167% {
            transform:translate(69.781px,105.796px);
          }
          56.25% {
            transform:translate(69.936px,106.581px);
          }
          58.333% {
            transform:translate(70px,107px);
          }
          60.417% {
            transform:translate(70px,107px);
          }
          62.5% {
            transform:translate(70px,107px);
          }
          64.583% {
            transform:translate(70px,107px);
          }
          66.667% {
            transform:translate(70px,106.745px);
          }
          68.75% {
            transform:translate(70px,105.785px);
          }
          70.833% {
            transform:translate(70px,104.241px);
          }
          72.917% {
            transform:translate(70px,102.254px);
          }
          75% {
            transform:translate(70px,99.96px);
          }
          77.083% {
            transform:translate(70px,97.5px);
          }
          79.167% {
            transform:translate(70px,95.012px);
          }
          81.25% {
            transform:translate(70px,92.635px);
          }
          83.333% {
            transform:translate(70px,90.508px);
          }
          85.417% {
            transform:translate(70px,88.77px);
          }
          87.5% {
            transform:translate(70px,87.56px);
          }
          89.583% {
            transform:translate(70px,87.016px);
          }
          91.667% {
            transform:translate(70px,87px);
          }
          93.75% {
            transform:translate(70px,87px);
          }
          95.833% {
            transform:translate(70px,87px);
          }
          97.917% {
            transform:translate(70px,87px);
          }
          100% {
            transform:translate(70px,87px);
          }
        }
        @keyframes grain3 {
          0% {
            transform:translate(73px,116px);
          }
          2.083% {
            transform:translate(73px,116px);
          }
          4.167% {
            transform:translate(73px,116px);
          }
          6.25% {
            transform:translate(73px,116px);
          }
          8.333% {
            transform:translate(73px,116px);
          }
          10.417% {
            transform:translate(73px,116px);
          }
          12.5% {
            transform:translate(73px,116px);
          }
          14.583% {
            transform:translate(73px,116px);
          }
          16.667% {
            transform:translate(73px,116px);
          }
          18.75% {
            transform:translate(73px,116px);
          }
          20.833% {
            transform:translate(73px,116px);
          }
          22.917% {
            transform:translate(73px,116px);
          }
          25% {
            transform:translate(73px,116px);
          }
          27.083% {
            transform:translate(73px,116px);
          }
          29.167% {
            transform:translate(73px,116px);
          }
          31.25% {
            transform:translate(73px,116px);
          }
          33.333% {
            transform:translate(73px,116px);
          }
          35.417% {
            transform:translate(73px,116px);
          }
          37.5% {
            transform:translate(73px,116px);
          }
          39.583% {
            transform:translate(73px,116px);
          }
          41.667% {
            transform:translate(73px,116px);
          }
          43.75% {
            transform:translate(73px,116px);
          }
          45.833% {
            transform:translate(73px,115.98px);
          }
          47.917% {
            transform:translate(73px,114.204px);
          }
          50% {
            transform:translate(73px,110.536px);
          }
          52.083% {
            transform:translate(73px,107.072px);
          }
          54.167% {
            transform:translate(73px,105.672px);
          }
          56.25% {
            transform:translate(73px,106.109px);
          }
          58.333% {
            transform:translate(73px,106.846px);
          }
          60.417% {
            transform:translate(73px,107px);
          }
          62.5% {
            transform:translate(73px,107px);
          }
          64.583% {
            transform:translate(73px,107px);
          }
          66.667% {
            transform:translate(73px,106.745px);
          }
          68.75% {
            transform:translate(73px,105.785px);
          }
          70.833% {
            transform:translate(73px,104.241px);
          }
          72.917% {
            transform:translate(73px,102.254px);
          }
          75% {
            transform:translate(73px,99.96px);
          }
          77.083% {
            transform:translate(73px,97.5px);
          }
          79.167% {
            transform:translate(73px,95.012px);
          }
          81.25% {
            transform:translate(73px,92.635px);
          }
          83.333% {
            transform:translate(73px,90.508px);
          }
          85.417% {
            transform:translate(73px,88.77px);
          }
          87.5% {
            transform:translate(73px,87.56px);
          }
          89.583% {
            transform:translate(73px,87.016px);
          }
          91.667% {
            transform:translate(73px,87px);
          }
          93.75% {
            transform:translate(73px,87px);
          }
          95.833% {
            transform:translate(73px,87px);
          }
          97.917% {
            transform:translate(73px,87px);
          }
          100% {
            transform:translate(73px,87px);
          }
        }
        @keyframes grain4 {
          0% {
            transform:translate(77px,116px);
          }
          2.083% {
            transform:translate(77px,116px);
          }
          4.167% {
            transform:translate(77px,116px);
          }
          6.25% {
            transform:translate(77px,116px);
          }
          8.333% {
            transform:translate(77px,116px);
          }
          10.417% {
            transform:translate(77px,116px);
          }
          12.5% {
            transform:translate(77px,116px);
          }
          14.583% {
            transform:translate(77px,116px);
          }
          16.667% {
            transform:translate(77px,116px);
          }
          18.75% {
            transform:translate(77px,116px);
          }
          20.833% {
            transform:translate(77px,116px);
          }
          22.917% {
            transform:translate(77px,116px);
          }
          25% {
            transform:translate(77px,116px);
          }
          27.083% {
            transform:translate(77px,116px);
          }
          29.167% {
            transform:translate(77px,116px);
          }
          31.25% {
            transform:translate(77px,116px);
          }
          33.333% {
            transform:translate(77px,116px);
          }
          35.417% {
            transform:translate(77px,116px);
          }
          37.5% {
            transform:translate(77px,116px);
          }
          39.583% {
            transform:translate(77px,116px);
          }
          41.667% {
            transform:translate(77px,116px);
          }
          43.75% {
            transform:translate(77px,116px);
          }
          45.833% {
            transform:translate(77px,116px);
          }
          47.917% {
            transform:translate(76.982px,115.554px);
          }
          50% {
            transform:translate(76.867px,112.778px);
          }
          52.083% {
            transform:translate(76.68px,108.903px);
          }
          54.167% {
            transform:translate(76.461px,106.185px);
          }
          56.25% {
            transform:translate(76.248px,105.718px);
          }
          58.333% {
            transform:translate(76.082px,106.463px);
          }
          60.417% {
            transform:translate(76.002px,106.985px);
          }
          62.5% {
            transform:translate(76px,107px);
          }
          64.583% {
            transform:translate(76px,107px);
          }
          66.667% {
            transform:translate(76px,106.745px);
          }
          68.75% {
            transform:translate(76px,105.785px);
          }
          70.833% {
            transform:translate(76px,104.241px);
          }
          72.917% {
            transform:translate(76px,102.254px);
          }
          75% {
            transform:translate(76px,99.96px);
          }
          77.083% {
            transform:translate(76px,97.5px);
          }
          79.167% {
            transform:translate(76px,95.012px);
          }
          81.25% {
            transform:translate(76px,92.635px);
          }
          83.333% {
            transform:translate(76px,90.508px);
          }
          85.417% {
            transform:translate(76px,88.77px);
          }
          87.5% {
            transform:translate(76px,87.56px);
          }
          89.583% {
            transform:translate(76px,87.016px);
          }
          91.667% {
            transform:translate(76px,87px);
          }
          93.75% {
            transform:translate(76px,87px);
          }
          95.833% {
            transform:translate(76px,87px);
          }
          97.917% {
            transform:translate(76px,87px);
          }
          100% {
            transform:translate(76px,87px);
          }
        }
        @keyframes tagEpisode {
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
            opacity:1;
          }
          95.833% {
            opacity:0.926;
          }
          97.917% {
            opacity:0.376;
          }
          100% {
            opacity:0;
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .sampler {
            transform:translate(0px,12.96px);
          }
          .gasPulse {
            opacity:0;
          }
          .grain0 {
            transform:translate(64px,99.96px);
          }
          .grain1 {
            transform:translate(67px,99.96px);
          }
          .grain2 {
            transform:translate(70px,99.96px);
          }
          .grain3 {
            transform:translate(73px,99.96px);
          }
          .grain4 {
            transform:translate(76px,99.96px);
          }
          .tagEpisode {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Touch-and-Go Asteroid Sampling">
        <g class="tagEpisode">
          <circle cx="9" cy="8" r="1" fill="#789697" opacity=".5"/>
          <circle cx="56" cy="75" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="103" cy="19" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="29" cy="86" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="76" cy="30" r="1" fill="#789697" opacity=".5"/>
          <circle cx="123" cy="97" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="49" cy="41" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="96" cy="108" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="22" cy="52" r="1" fill="#789697" opacity=".5"/>
          <circle cx="69" cy="119" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="116" cy="63" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="42" cy="130" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="89" cy="74" r="1" fill="#789697" opacity=".5"/>
          <circle cx="15" cy="18" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="62" cy="85" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="109" cy="29" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="35" cy="96" r="1" fill="#789697" opacity=".5"/>
          <circle cx="82" cy="40" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="129" cy="107" r="0.55" fill="#789697" opacity=".5"/>
          <path d="M8 117L25 112 35 117 51 114 64 112 81 112 99 116 119 110 132 115V132H8Z" fill="#6c6450"/>
          <circle cx="12" cy="120" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="54.495" cy="125.66" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="96.99" cy="122.32" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="23.485" cy="127.979" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="65.98" cy="124.639" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="108.475" cy="121.299" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="34.97" cy="126.959" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="77.465" cy="123.619" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="119.96" cy="120.278" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="46.455" cy="125.938" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="88.95" cy="122.598" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="15.446" cy="128.258" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="57.941" cy="124.918" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="100.436" cy="121.577" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="26.931" cy="127.237" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="69.426" cy="123.897" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="111.921" cy="120.557" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="38.416" cy="126.216" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="80.911" cy="122.876" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="123.406" cy="128.536" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="49.901" cy="125.196" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="92.396" cy="121.856" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="18.891" cy="127.515" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="61.386" cy="124.175" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="103.881" cy="120.835" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="30.376" cy="126.495" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="72.871" cy="123.155" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="115.366" cy="128.814" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="41.861" cy="125.474" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="84.356" cy="122.134" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="126.851" cy="127.794" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="53.347" cy="124.454" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="95.842" cy="121.113" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="22.337" cy="126.773" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="64.832" cy="123.433" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="107.327" cy="120.093" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="33.822" cy="125.753" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="76.317" cy="122.412" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="118.812" cy="128.072" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="45.307" cy="124.732" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="87.802" cy="121.392" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="14.297" cy="127.052" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="56.792" cy="123.711" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="99.287" cy="120.371" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="25.782" cy="126.031" r="0.6" fill="#bba37a" opacity=".25"/>
          <g class="sampler">
            <rect x="56" y="19" width="28" height="19" fill="#adab7d" stroke="#ddcf9c"/>
            <rect x="25" y="21" width="28" height="15" fill="#284f65" stroke="#79a7b5"/>
            <rect x="87" y="21" width="28" height="15" fill="#284f65" stroke="#79a7b5"/>
            <path d="M70 38L85 59 70 83" fill="none" stroke="#c5c5a4" stroke-width="3"/>
            <circle cx="85" cy="59" r="3" fill="#647f71" stroke="#d4c9a1"/>
            <path d="M60 84H80V92H60Z" fill="#769488" stroke="#c7cfb0"/>
            <path d="M63 88H77" stroke="#193b36" stroke-width="3"/>
          </g>
          <path d="M68 112L59 119M73 112L82 119" class="gasPulse" stroke="#99d5d5" stroke-width="1.5" opacity="0"/>
          <circle cx="0" cy="0" r="1.1" class="grain0" fill="#dfc48d"/>
          <circle cx="0" cy="0" r="1.1" class="grain1" fill="#dfc48d"/>
          <circle cx="0" cy="0" r="1.1" class="grain2" fill="#dfc48d"/>
          <circle cx="0" cy="0" r="1.1" class="grain3" fill="#dfc48d"/>
          <circle cx="0" cy="0" r="1.1" class="grain4" fill="#dfc48d"/>
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

if (!customElements.get("concept-touch-and-go-asteroid-sampling")) {
  customElements.define("concept-touch-and-go-asteroid-sampling", ConceptTouchAndGoAsteroidSampling);
}
