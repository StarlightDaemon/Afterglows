// Impervious Runoff. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptImperviousRunoff extends HTMLElement {
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
        .rain00 {
          animation:rain00 16s linear infinite;
        }
        .rain00 {
          animation:rain00 16s linear infinite;
        }
        .rain01 {
          animation:rain01 16s linear infinite;
        }
        .rain01 {
          animation:rain01 16s linear infinite;
        }
        .rain02 {
          animation:rain02 16s linear infinite;
        }
        .rain02 {
          animation:rain02 16s linear infinite;
        }
        .rain03 {
          animation:rain03 16s linear infinite;
        }
        .rain03 {
          animation:rain03 16s linear infinite;
        }
        .rain04 {
          animation:rain04 16s linear infinite;
        }
        .rain04 {
          animation:rain04 16s linear infinite;
        }
        .rain05 {
          animation:rain05 16s linear infinite;
        }
        .rain05 {
          animation:rain05 16s linear infinite;
        }
        .rain06 {
          animation:rain06 16s linear infinite;
        }
        .rain06 {
          animation:rain06 16s linear infinite;
        }
        .rain07 {
          animation:rain07 16s linear infinite;
        }
        .rain07 {
          animation:rain07 16s linear infinite;
        }
        .rain10 {
          animation:rain10 16s linear infinite;
        }
        .rain10 {
          animation:rain10 16s linear infinite;
        }
        .rain11 {
          animation:rain11 16s linear infinite;
        }
        .rain11 {
          animation:rain11 16s linear infinite;
        }
        .rain12 {
          animation:rain12 16s linear infinite;
        }
        .rain12 {
          animation:rain12 16s linear infinite;
        }
        .rain13 {
          animation:rain13 16s linear infinite;
        }
        .rain13 {
          animation:rain13 16s linear infinite;
        }
        .rain14 {
          animation:rain14 16s linear infinite;
        }
        .rain14 {
          animation:rain14 16s linear infinite;
        }
        .rain15 {
          animation:rain15 16s linear infinite;
        }
        .rain15 {
          animation:rain15 16s linear infinite;
        }
        .rain16 {
          animation:rain16 16s linear infinite;
        }
        .rain16 {
          animation:rain16 16s linear infinite;
        }
        .rain17 {
          animation:rain17 16s linear infinite;
        }
        .rain17 {
          animation:rain17 16s linear infinite;
        }
        @keyframes rain00 {
          0% {
            transform:translate(13px,25px);
            opacity:0;
          }
          2.083% {
            transform:translate(13px,29.303px);
            opacity:0.278;
          }
          4.167% {
            transform:translate(13px,33.606px);
            opacity:0.777;
          }
          6.25% {
            transform:translate(13px,37.909px);
            opacity:1;
          }
          8.333% {
            transform:translate(13px,42.212px);
            opacity:1;
          }
          10.417% {
            transform:translate(13px,46.514px);
            opacity:1;
          }
          12.5% {
            transform:translate(13px,50.817px);
            opacity:1;
          }
          14.583% {
            transform:translate(13px,55.12px);
            opacity:1;
          }
          16.667% {
            transform:translate(13px,59.423px);
            opacity:1;
          }
          18.75% {
            transform:translate(13px,63.726px);
            opacity:1;
          }
          20.833% {
            transform:translate(13px,68.029px);
            opacity:1;
          }
          22.917% {
            transform:translate(13px,68.924px);
            opacity:1;
          }
          25% {
            transform:translate(13px,70.175px);
            opacity:1;
          }
          27.083% {
            transform:translate(13px,72.096px);
            opacity:1;
          }
          29.167% {
            transform:translate(13px,74.488px);
            opacity:1;
          }
          31.25% {
            transform:translate(13px,77.147px);
            opacity:1;
          }
          33.333% {
            transform:translate(13px,79.871px);
            opacity:1;
          }
          35.417% {
            transform:translate(13px,82.46px);
            opacity:1;
          }
          37.5% {
            transform:translate(13px,84.711px);
            opacity:1;
          }
          39.583% {
            transform:translate(13px,86.423px);
            opacity:1;
          }
          41.667% {
            transform:translate(13px,87.394px);
            opacity:1;
          }
          43.75% {
            transform:translate(13px,87.538px);
            opacity:1;
          }
          45.833% {
            transform:translate(13px,87.538px);
            opacity:1;
          }
          47.917% {
            transform:translate(13px,87.538px);
            opacity:1;
          }
          50% {
            transform:translate(13px,87.538px);
            opacity:1;
          }
          52.083% {
            transform:translate(13px,87.538px);
            opacity:1;
          }
          54.167% {
            transform:translate(13px,87.538px);
            opacity:1;
          }
          56.25% {
            transform:translate(13px,87.538px);
            opacity:1;
          }
          58.333% {
            transform:translate(13px,87.538px);
            opacity:1;
          }
          60.417% {
            transform:translate(13px,87.538px);
            opacity:1;
          }
          62.5% {
            transform:translate(13px,87.538px);
            opacity:1;
          }
          64.583% {
            transform:translate(13px,87.538px);
            opacity:1;
          }
          66.667% {
            transform:translate(13px,87.538px);
            opacity:1;
          }
          68.75% {
            transform:translate(13px,87.538px);
            opacity:1;
          }
          70.833% {
            transform:translate(13px,87.538px);
            opacity:1;
          }
          72.917% {
            transform:translate(13px,87.538px);
            opacity:1;
          }
          75% {
            transform:translate(13px,87.538px);
            opacity:1;
          }
          77.083% {
            transform:translate(13px,87.538px);
            opacity:1;
          }
          79.167% {
            transform:translate(13px,87.538px);
            opacity:1;
          }
          81.25% {
            transform:translate(13px,87.538px);
            opacity:1;
          }
          83.333% {
            transform:translate(13px,87.538px);
            opacity:1;
          }
          85.417% {
            transform:translate(13px,87.538px);
            opacity:1;
          }
          87.5% {
            transform:translate(13px,87.538px);
            opacity:1;
          }
          89.583% {
            transform:translate(13px,87.538px);
            opacity:1;
          }
          91.667% {
            transform:translate(13px,87.538px);
            opacity:0.926;
          }
          93.75% {
            transform:translate(13px,87.538px);
            opacity:0.684;
          }
          95.833% {
            transform:translate(13px,87.538px);
            opacity:0.376;
          }
          97.917% {
            transform:translate(13px,87.538px);
            opacity:0.112;
          }
          100% {
            transform:translate(13px,87.538px);
            opacity:0;
          }
        }
        @keyframes rain01 {
          0% {
            transform:translate(18.5px,25px);
            opacity:0;
          }
          2.083% {
            transform:translate(18.5px,25.608px);
            opacity:0.278;
          }
          4.167% {
            transform:translate(18.5px,30.078px);
            opacity:0.777;
          }
          6.25% {
            transform:translate(18.5px,34.548px);
            opacity:1;
          }
          8.333% {
            transform:translate(18.5px,39.018px);
            opacity:1;
          }
          10.417% {
            transform:translate(18.5px,43.489px);
            opacity:1;
          }
          12.5% {
            transform:translate(18.5px,47.959px);
            opacity:1;
          }
          14.583% {
            transform:translate(18.5px,52.429px);
            opacity:1;
          }
          16.667% {
            transform:translate(18.5px,56.899px);
            opacity:1;
          }
          18.75% {
            transform:translate(18.5px,61.369px);
            opacity:1;
          }
          20.833% {
            transform:translate(18.5px,65.839px);
            opacity:1;
          }
          22.917% {
            transform:translate(18.5px,70.231px);
            opacity:1;
          }
          25% {
            transform:translate(18.5px,70.873px);
            opacity:1;
          }
          27.083% {
            transform:translate(18.5px,72.583px);
            opacity:1;
          }
          29.167% {
            transform:translate(18.5px,75.107px);
            opacity:1;
          }
          31.25% {
            transform:translate(18.5px,78.188px);
            opacity:1;
          }
          33.333% {
            transform:translate(18.5px,81.573px);
            opacity:1;
          }
          35.417% {
            transform:translate(18.5px,85.006px);
            opacity:1;
          }
          37.5% {
            transform:translate(18.5px,88.233px);
            opacity:1;
          }
          39.583% {
            transform:translate(18.5px,90.999px);
            opacity:1;
          }
          41.667% {
            transform:translate(18.5px,93.049px);
            opacity:1;
          }
          43.75% {
            transform:translate(18.5px,94.128px);
            opacity:1;
          }
          45.833% {
            transform:translate(18.5px,94.231px);
            opacity:1;
          }
          47.917% {
            transform:translate(18.5px,94.231px);
            opacity:1;
          }
          50% {
            transform:translate(18.5px,94.231px);
            opacity:1;
          }
          52.083% {
            transform:translate(18.5px,94.231px);
            opacity:1;
          }
          54.167% {
            transform:translate(18.5px,94.231px);
            opacity:1;
          }
          56.25% {
            transform:translate(18.5px,94.231px);
            opacity:1;
          }
          58.333% {
            transform:translate(18.5px,94.231px);
            opacity:1;
          }
          60.417% {
            transform:translate(18.5px,94.231px);
            opacity:1;
          }
          62.5% {
            transform:translate(18.5px,94.231px);
            opacity:1;
          }
          64.583% {
            transform:translate(18.5px,94.231px);
            opacity:1;
          }
          66.667% {
            transform:translate(18.5px,94.231px);
            opacity:1;
          }
          68.75% {
            transform:translate(18.5px,94.231px);
            opacity:1;
          }
          70.833% {
            transform:translate(18.5px,94.231px);
            opacity:1;
          }
          72.917% {
            transform:translate(18.5px,94.231px);
            opacity:1;
          }
          75% {
            transform:translate(18.5px,94.231px);
            opacity:1;
          }
          77.083% {
            transform:translate(18.5px,94.231px);
            opacity:1;
          }
          79.167% {
            transform:translate(18.5px,94.231px);
            opacity:1;
          }
          81.25% {
            transform:translate(18.5px,94.231px);
            opacity:1;
          }
          83.333% {
            transform:translate(18.5px,94.231px);
            opacity:1;
          }
          85.417% {
            transform:translate(18.5px,94.231px);
            opacity:1;
          }
          87.5% {
            transform:translate(18.5px,94.231px);
            opacity:1;
          }
          89.583% {
            transform:translate(18.5px,94.231px);
            opacity:1;
          }
          91.667% {
            transform:translate(18.5px,94.231px);
            opacity:0.926;
          }
          93.75% {
            transform:translate(18.5px,94.231px);
            opacity:0.684;
          }
          95.833% {
            transform:translate(18.5px,94.231px);
            opacity:0.376;
          }
          97.917% {
            transform:translate(18.5px,94.231px);
            opacity:0.112;
          }
          100% {
            transform:translate(18.5px,94.231px);
            opacity:0;
          }
        }
        @keyframes rain02 {
          0% {
            transform:translate(24px,25px);
            opacity:0;
          }
          2.083% {
            transform:translate(24px,25px);
            opacity:0.278;
          }
          4.167% {
            transform:translate(24px,26.261px);
            opacity:0.777;
          }
          6.25% {
            transform:translate(24px,30.899px);
            opacity:1;
          }
          8.333% {
            transform:translate(24px,35.536px);
            opacity:1;
          }
          10.417% {
            transform:translate(24px,40.174px);
            opacity:1;
          }
          12.5% {
            transform:translate(24px,44.811px);
            opacity:1;
          }
          14.583% {
            transform:translate(24px,49.448px);
            opacity:1;
          }
          16.667% {
            transform:translate(24px,54.086px);
            opacity:1;
          }
          18.75% {
            transform:translate(24px,58.723px);
            opacity:1;
          }
          20.833% {
            transform:translate(24px,63.361px);
            opacity:1;
          }
          22.917% {
            transform:translate(24px,67.998px);
            opacity:1;
          }
          25% {
            transform:translate(24px,71.942px);
            opacity:1;
          }
          27.083% {
            transform:translate(24px,72.911px);
            opacity:1;
          }
          29.167% {
            transform:translate(24px,75.13px);
            opacity:1;
          }
          31.25% {
            transform:translate(24px,78.288px);
            opacity:1;
          }
          33.333% {
            transform:translate(24px,82.08px);
            opacity:1;
          }
          35.417% {
            transform:translate(24px,86.196px);
            opacity:1;
          }
          37.5% {
            transform:translate(24px,90.329px);
            opacity:1;
          }
          39.583% {
            transform:translate(24px,94.17px);
            opacity:1;
          }
          41.667% {
            transform:translate(24px,97.413px);
            opacity:1;
          }
          43.75% {
            transform:translate(24px,99.748px);
            opacity:1;
          }
          45.833% {
            transform:translate(24px,100.869px);
            opacity:1;
          }
          47.917% {
            transform:translate(24px,100.923px);
            opacity:1;
          }
          50% {
            transform:translate(24px,100.923px);
            opacity:1;
          }
          52.083% {
            transform:translate(24px,100.923px);
            opacity:1;
          }
          54.167% {
            transform:translate(24px,100.923px);
            opacity:1;
          }
          56.25% {
            transform:translate(24px,100.923px);
            opacity:1;
          }
          58.333% {
            transform:translate(24px,100.923px);
            opacity:1;
          }
          60.417% {
            transform:translate(24px,100.923px);
            opacity:1;
          }
          62.5% {
            transform:translate(24px,100.923px);
            opacity:1;
          }
          64.583% {
            transform:translate(24px,100.923px);
            opacity:1;
          }
          66.667% {
            transform:translate(24px,100.923px);
            opacity:1;
          }
          68.75% {
            transform:translate(24px,100.923px);
            opacity:1;
          }
          70.833% {
            transform:translate(24px,100.923px);
            opacity:1;
          }
          72.917% {
            transform:translate(24px,100.923px);
            opacity:1;
          }
          75% {
            transform:translate(24px,100.923px);
            opacity:1;
          }
          77.083% {
            transform:translate(24px,100.923px);
            opacity:1;
          }
          79.167% {
            transform:translate(24px,100.923px);
            opacity:1;
          }
          81.25% {
            transform:translate(24px,100.923px);
            opacity:1;
          }
          83.333% {
            transform:translate(24px,100.923px);
            opacity:1;
          }
          85.417% {
            transform:translate(24px,100.923px);
            opacity:1;
          }
          87.5% {
            transform:translate(24px,100.923px);
            opacity:1;
          }
          89.583% {
            transform:translate(24px,100.923px);
            opacity:1;
          }
          91.667% {
            transform:translate(24px,100.923px);
            opacity:0.926;
          }
          93.75% {
            transform:translate(24px,100.923px);
            opacity:0.684;
          }
          95.833% {
            transform:translate(24px,100.923px);
            opacity:0.376;
          }
          97.917% {
            transform:translate(24px,100.923px);
            opacity:0.112;
          }
          100% {
            transform:translate(24px,100.923px);
            opacity:0;
          }
        }
        @keyframes rain03 {
          0% {
            transform:translate(29.5px,25px);
            opacity:0;
          }
          2.083% {
            transform:translate(29.5px,25px);
            opacity:0.278;
          }
          4.167% {
            transform:translate(29.5px,25px);
            opacity:0.777;
          }
          6.25% {
            transform:translate(29.5px,26.96px);
            opacity:1;
          }
          8.333% {
            transform:translate(29.5px,31.765px);
            opacity:1;
          }
          10.417% {
            transform:translate(29.5px,36.57px);
            opacity:1;
          }
          12.5% {
            transform:translate(29.5px,41.374px);
            opacity:1;
          }
          14.583% {
            transform:translate(29.5px,46.179px);
            opacity:1;
          }
          16.667% {
            transform:translate(29.5px,50.984px);
            opacity:1;
          }
          18.75% {
            transform:translate(29.5px,55.788px);
            opacity:1;
          }
          20.833% {
            transform:translate(29.5px,60.593px);
            opacity:1;
          }
          22.917% {
            transform:translate(29.5px,65.398px);
            opacity:1;
          }
          25% {
            transform:translate(29.5px,70.202px);
            opacity:1;
          }
          27.083% {
            transform:translate(29.5px,73.659px);
            opacity:1;
          }
          29.167% {
            transform:translate(29.5px,74.417px);
            opacity:1;
          }
          31.25% {
            transform:translate(29.5px,75.966px);
            opacity:1;
          }
          33.333% {
            transform:translate(29.5px,78.104px);
            opacity:1;
          }
          35.417% {
            transform:translate(29.5px,80.629px);
            opacity:1;
          }
          37.5% {
            transform:translate(29.5px,83.339px);
            opacity:1;
          }
          39.583% {
            transform:translate(29.5px,86.032px);
            opacity:1;
          }
          41.667% {
            transform:translate(29.5px,88.508px);
            opacity:1;
          }
          43.75% {
            transform:translate(29.5px,90.563px);
            opacity:1;
          }
          45.833% {
            transform:translate(29.5px,91.997px);
            opacity:1;
          }
          47.917% {
            transform:translate(29.5px,92.607px);
            opacity:1;
          }
          50% {
            transform:translate(29.5px,92.615px);
            opacity:1;
          }
          52.083% {
            transform:translate(29.5px,92.615px);
            opacity:1;
          }
          54.167% {
            transform:translate(29.5px,92.615px);
            opacity:1;
          }
          56.25% {
            transform:translate(29.5px,92.615px);
            opacity:1;
          }
          58.333% {
            transform:translate(29.5px,92.615px);
            opacity:1;
          }
          60.417% {
            transform:translate(29.5px,92.615px);
            opacity:1;
          }
          62.5% {
            transform:translate(29.5px,92.615px);
            opacity:1;
          }
          64.583% {
            transform:translate(29.5px,92.615px);
            opacity:1;
          }
          66.667% {
            transform:translate(29.5px,92.615px);
            opacity:1;
          }
          68.75% {
            transform:translate(29.5px,92.615px);
            opacity:1;
          }
          70.833% {
            transform:translate(29.5px,92.615px);
            opacity:1;
          }
          72.917% {
            transform:translate(29.5px,92.615px);
            opacity:1;
          }
          75% {
            transform:translate(29.5px,92.615px);
            opacity:1;
          }
          77.083% {
            transform:translate(29.5px,92.615px);
            opacity:1;
          }
          79.167% {
            transform:translate(29.5px,92.615px);
            opacity:1;
          }
          81.25% {
            transform:translate(29.5px,92.615px);
            opacity:1;
          }
          83.333% {
            transform:translate(29.5px,92.615px);
            opacity:1;
          }
          85.417% {
            transform:translate(29.5px,92.615px);
            opacity:1;
          }
          87.5% {
            transform:translate(29.5px,92.615px);
            opacity:1;
          }
          89.583% {
            transform:translate(29.5px,92.615px);
            opacity:1;
          }
          91.667% {
            transform:translate(29.5px,92.615px);
            opacity:0.926;
          }
          93.75% {
            transform:translate(29.5px,92.615px);
            opacity:0.684;
          }
          95.833% {
            transform:translate(29.5px,92.615px);
            opacity:0.376;
          }
          97.917% {
            transform:translate(29.5px,92.615px);
            opacity:0.112;
          }
          100% {
            transform:translate(29.5px,92.615px);
            opacity:0;
          }
        }
        @keyframes rain04 {
          0% {
            transform:translate(35px,25px);
            opacity:0;
          }
          2.083% {
            transform:translate(35px,25px);
            opacity:0.278;
          }
          4.167% {
            transform:translate(35px,25px);
            opacity:0.777;
          }
          6.25% {
            transform:translate(35px,25px);
            opacity:1;
          }
          8.333% {
            transform:translate(35px,27.705px);
            opacity:1;
          }
          10.417% {
            transform:translate(35px,32.677px);
            opacity:1;
          }
          12.5% {
            transform:translate(35px,37.649px);
            opacity:1;
          }
          14.583% {
            transform:translate(35px,42.62px);
            opacity:1;
          }
          16.667% {
            transform:translate(35px,47.592px);
            opacity:1;
          }
          18.75% {
            transform:translate(35px,52.564px);
            opacity:1;
          }
          20.833% {
            transform:translate(35px,57.536px);
            opacity:1;
          }
          22.917% {
            transform:translate(35px,62.508px);
            opacity:1;
          }
          25% {
            transform:translate(35px,67.48px);
            opacity:1;
          }
          27.083% {
            transform:translate(35px,72.452px);
            opacity:1;
          }
          29.167% {
            transform:translate(35px,75.425px);
            opacity:1;
          }
          31.25% {
            transform:translate(35px,76.533px);
            opacity:1;
          }
          33.333% {
            transform:translate(35px,78.606px);
            opacity:1;
          }
          35.417% {
            transform:translate(35px,81.388px);
            opacity:1;
          }
          37.5% {
            transform:translate(35px,84.624px);
            opacity:1;
          }
          39.583% {
            transform:translate(35px,88.059px);
            opacity:1;
          }
          41.667% {
            transform:translate(35px,91.439px);
            opacity:1;
          }
          43.75% {
            transform:translate(35px,94.509px);
            opacity:1;
          }
          45.833% {
            transform:translate(35px,97.014px);
            opacity:1;
          }
          47.917% {
            transform:translate(35px,98.698px);
            opacity:1;
          }
          50% {
            transform:translate(35px,99.308px);
            opacity:1;
          }
          52.083% {
            transform:translate(35px,99.308px);
            opacity:1;
          }
          54.167% {
            transform:translate(35px,99.308px);
            opacity:1;
          }
          56.25% {
            transform:translate(35px,99.308px);
            opacity:1;
          }
          58.333% {
            transform:translate(35px,99.308px);
            opacity:1;
          }
          60.417% {
            transform:translate(35px,99.308px);
            opacity:1;
          }
          62.5% {
            transform:translate(35px,99.308px);
            opacity:1;
          }
          64.583% {
            transform:translate(35px,99.308px);
            opacity:1;
          }
          66.667% {
            transform:translate(35px,99.308px);
            opacity:1;
          }
          68.75% {
            transform:translate(35px,99.308px);
            opacity:1;
          }
          70.833% {
            transform:translate(35px,99.308px);
            opacity:1;
          }
          72.917% {
            transform:translate(35px,99.308px);
            opacity:1;
          }
          75% {
            transform:translate(35px,99.308px);
            opacity:1;
          }
          77.083% {
            transform:translate(35px,99.308px);
            opacity:1;
          }
          79.167% {
            transform:translate(35px,99.308px);
            opacity:1;
          }
          81.25% {
            transform:translate(35px,99.308px);
            opacity:1;
          }
          83.333% {
            transform:translate(35px,99.308px);
            opacity:1;
          }
          85.417% {
            transform:translate(35px,99.308px);
            opacity:1;
          }
          87.5% {
            transform:translate(35px,99.308px);
            opacity:1;
          }
          89.583% {
            transform:translate(35px,99.308px);
            opacity:1;
          }
          91.667% {
            transform:translate(35px,99.308px);
            opacity:0.926;
          }
          93.75% {
            transform:translate(35px,99.308px);
            opacity:0.684;
          }
          95.833% {
            transform:translate(35px,99.308px);
            opacity:0.376;
          }
          97.917% {
            transform:translate(35px,99.308px);
            opacity:0.112;
          }
          100% {
            transform:translate(35px,99.308px);
            opacity:0;
          }
        }
        @keyframes rain05 {
          0% {
            transform:translate(40.5px,25px);
            opacity:0;
          }
          2.083% {
            transform:translate(40.5px,25px);
            opacity:0.278;
          }
          4.167% {
            transform:translate(40.5px,25px);
            opacity:0.777;
          }
          6.25% {
            transform:translate(40.5px,25px);
            opacity:1;
          }
          8.333% {
            transform:translate(40.5px,25px);
            opacity:1;
          }
          10.417% {
            transform:translate(40.5px,28.159px);
            opacity:1;
          }
          12.5% {
            transform:translate(40.5px,32.804px);
            opacity:1;
          }
          14.583% {
            transform:translate(40.5px,37.449px);
            opacity:1;
          }
          16.667% {
            transform:translate(40.5px,42.094px);
            opacity:1;
          }
          18.75% {
            transform:translate(40.5px,46.739px);
            opacity:1;
          }
          20.833% {
            transform:translate(40.5px,51.384px);
            opacity:1;
          }
          22.917% {
            transform:translate(40.5px,56.029px);
            opacity:1;
          }
          25% {
            transform:translate(40.5px,60.674px);
            opacity:1;
          }
          27.083% {
            transform:translate(40.5px,65.319px);
            opacity:1;
          }
          29.167% {
            transform:translate(40.5px,69.964px);
            opacity:1;
          }
          31.25% {
            transform:translate(40.654px,72.047px);
            opacity:1;
          }
          33.333% {
            transform:translate(41.617px,72.344px);
            opacity:1;
          }
          35.417% {
            transform:translate(43.31px,72.865px);
            opacity:1;
          }
          37.5% {
            transform:translate(45.554px,73.555px);
            opacity:1;
          }
          39.583% {
            transform:translate(48.172px,74.361px);
            opacity:1;
          }
          41.667% {
            transform:translate(50.985px,75.226px);
            opacity:1;
          }
          43.75% {
            transform:translate(53.815px,76.097px);
            opacity:1;
          }
          45.833% {
            transform:translate(56.483px,76.918px);
            opacity:1;
          }
          47.917% {
            transform:translate(58.81px,77.634px);
            opacity:1;
          }
          50% {
            transform:translate(60.619px,78.19px);
            opacity:1;
          }
          52.083% {
            transform:translate(61.731px,78.533px);
            opacity:1;
          }
          54.167% {
            transform:translate(62px,78.719px);
            opacity:1;
          }
          56.25% {
            transform:translate(62px,80.957px);
            opacity:1;
          }
          58.333% {
            transform:translate(62px,85.515px);
            opacity:1;
          }
          60.417% {
            transform:translate(62px,91.596px);
            opacity:1;
          }
          62.5% {
            transform:translate(62px,98.404px);
            opacity:1;
          }
          64.583% {
            transform:translate(62px,105.144px);
            opacity:1;
          }
          66.667% {
            transform:translate(62px,111.019px);
            opacity:1;
          }
          68.75% {
            transform:translate(62px,115.233px);
            opacity:1;
          }
          70.833% {
            transform:translate(62px,116.989px);
            opacity:1;
          }
          72.917% {
            transform:translate(62px,117px);
            opacity:1;
          }
          75% {
            transform:translate(62px,117px);
            opacity:1;
          }
          77.083% {
            transform:translate(62px,117px);
            opacity:1;
          }
          79.167% {
            transform:translate(62px,117px);
            opacity:1;
          }
          81.25% {
            transform:translate(62px,117px);
            opacity:1;
          }
          83.333% {
            transform:translate(62px,117px);
            opacity:1;
          }
          85.417% {
            transform:translate(62px,117px);
            opacity:1;
          }
          87.5% {
            transform:translate(62px,117px);
            opacity:1;
          }
          89.583% {
            transform:translate(62px,117px);
            opacity:1;
          }
          91.667% {
            transform:translate(62px,117px);
            opacity:0.926;
          }
          93.75% {
            transform:translate(62px,117px);
            opacity:0.684;
          }
          95.833% {
            transform:translate(62px,117px);
            opacity:0.376;
          }
          97.917% {
            transform:translate(62px,117px);
            opacity:0.112;
          }
          100% {
            transform:translate(62px,117px);
            opacity:0;
          }
        }
        @keyframes rain06 {
          0% {
            transform:translate(46px,25px);
            opacity:0;
          }
          2.083% {
            transform:translate(46px,25px);
            opacity:0.278;
          }
          4.167% {
            transform:translate(46px,25px);
            opacity:0.777;
          }
          6.25% {
            transform:translate(46px,25px);
            opacity:1;
          }
          8.333% {
            transform:translate(46px,25px);
            opacity:1;
          }
          10.417% {
            transform:translate(46px,25px);
            opacity:1;
          }
          12.5% {
            transform:translate(46px,28.927px);
            opacity:1;
          }
          14.583% {
            transform:translate(46px,33.739px);
            opacity:1;
          }
          16.667% {
            transform:translate(46px,38.551px);
            opacity:1;
          }
          18.75% {
            transform:translate(46px,43.364px);
            opacity:1;
          }
          20.833% {
            transform:translate(46px,48.176px);
            opacity:1;
          }
          22.917% {
            transform:translate(46px,52.988px);
            opacity:1;
          }
          25% {
            transform:translate(46px,57.8px);
            opacity:1;
          }
          27.083% {
            transform:translate(46px,62.613px);
            opacity:1;
          }
          29.167% {
            transform:translate(46px,67.425px);
            opacity:1;
          }
          31.25% {
            transform:translate(46px,72.237px);
            opacity:1;
          }
          33.333% {
            transform:translate(46.175px,73.746px);
            opacity:1;
          }
          35.417% {
            transform:translate(46.973px,73.992px);
            opacity:1;
          }
          37.5% {
            transform:translate(48.297px,74.399px);
            opacity:1;
          }
          39.583% {
            transform:translate(50.013px,74.927px);
            opacity:1;
          }
          41.667% {
            transform:translate(51.989px,75.535px);
            opacity:1;
          }
          43.75% {
            transform:translate(54.092px,76.182px);
            opacity:1;
          }
          45.833% {
            transform:translate(56.189px,76.827px);
            opacity:1;
          }
          47.917% {
            transform:translate(58.147px,77.43px);
            opacity:1;
          }
          50% {
            transform:translate(59.835px,77.949px);
            opacity:1;
          }
          52.083% {
            transform:translate(61.118px,78.344px);
            opacity:1;
          }
          54.167% {
            transform:translate(61.865px,78.574px);
            opacity:1;
          }
          56.25% {
            transform:translate(62px,78.833px);
            opacity:1;
          }
          58.333% {
            transform:translate(62px,81.162px);
            opacity:1;
          }
          60.417% {
            transform:translate(62px,85.472px);
            opacity:1;
          }
          62.5% {
            transform:translate(62px,91.05px);
            opacity:1;
          }
          64.583% {
            transform:translate(62px,97.183px);
            opacity:1;
          }
          66.667% {
            transform:translate(62px,103.157px);
            opacity:1;
          }
          68.75% {
            transform:translate(62px,108.259px);
            opacity:1;
          }
          70.833% {
            transform:translate(62px,111.776px);
            opacity:1;
          }
          72.917% {
            transform:translate(62px,113px);
            opacity:1;
          }
          75% {
            transform:translate(62px,113px);
            opacity:1;
          }
          77.083% {
            transform:translate(62px,113px);
            opacity:1;
          }
          79.167% {
            transform:translate(62px,113px);
            opacity:1;
          }
          81.25% {
            transform:translate(62px,113px);
            opacity:1;
          }
          83.333% {
            transform:translate(62px,113px);
            opacity:1;
          }
          85.417% {
            transform:translate(62px,113px);
            opacity:1;
          }
          87.5% {
            transform:translate(62px,113px);
            opacity:1;
          }
          89.583% {
            transform:translate(62px,113px);
            opacity:1;
          }
          91.667% {
            transform:translate(62px,113px);
            opacity:0.926;
          }
          93.75% {
            transform:translate(62px,113px);
            opacity:0.684;
          }
          95.833% {
            transform:translate(62px,113px);
            opacity:0.376;
          }
          97.917% {
            transform:translate(62px,113px);
            opacity:0.112;
          }
          100% {
            transform:translate(62px,113px);
            opacity:0;
          }
        }
        @keyframes rain07 {
          0% {
            transform:translate(51.5px,25px);
            opacity:0;
          }
          2.083% {
            transform:translate(51.5px,25px);
            opacity:0.278;
          }
          4.167% {
            transform:translate(51.5px,25px);
            opacity:0.777;
          }
          6.25% {
            transform:translate(51.5px,25px);
            opacity:1;
          }
          8.333% {
            transform:translate(51.5px,25px);
            opacity:1;
          }
          10.417% {
            transform:translate(51.5px,25px);
            opacity:1;
          }
          12.5% {
            transform:translate(51.5px,25px);
            opacity:1;
          }
          14.583% {
            transform:translate(51.5px,29.74px);
            opacity:1;
          }
          16.667% {
            transform:translate(51.5px,34.72px);
            opacity:1;
          }
          18.75% {
            transform:translate(51.5px,39.699px);
            opacity:1;
          }
          20.833% {
            transform:translate(51.5px,44.679px);
            opacity:1;
          }
          22.917% {
            transform:translate(51.5px,49.659px);
            opacity:1;
          }
          25% {
            transform:translate(51.5px,54.638px);
            opacity:1;
          }
          27.083% {
            transform:translate(51.5px,59.618px);
            opacity:1;
          }
          29.167% {
            transform:translate(51.5px,64.597px);
            opacity:1;
          }
          31.25% {
            transform:translate(51.5px,69.577px);
            opacity:1;
          }
          33.333% {
            transform:translate(51.5px,74.556px);
            opacity:1;
          }
          35.417% {
            transform:translate(51.663px,75.435px);
            opacity:1;
          }
          37.5% {
            transform:translate(52.239px,75.612px);
            opacity:1;
          }
          39.583% {
            transform:translate(53.147px,75.891px);
            opacity:1;
          }
          41.667% {
            transform:translate(54.302px,76.247px);
            opacity:1;
          }
          43.75% {
            transform:translate(55.615px,76.651px);
            opacity:1;
          }
          45.833% {
            transform:translate(56.999px,77.077px);
            opacity:1;
          }
          47.917% {
            transform:translate(58.368px,77.498px);
            opacity:1;
          }
          50% {
            transform:translate(59.635px,77.888px);
            opacity:1;
          }
          52.083% {
            transform:translate(60.711px,78.219px);
            opacity:1;
          }
          54.167% {
            transform:translate(61.511px,78.465px);
            opacity:1;
          }
          56.25% {
            transform:translate(61.946px,78.599px);
            opacity:1;
          }
          58.333% {
            transform:translate(62px,78.961px);
            opacity:1;
          }
          60.417% {
            transform:translate(62px,81.295px);
            opacity:1;
          }
          62.5% {
            transform:translate(62px,85.293px);
            opacity:1;
          }
          64.583% {
            transform:translate(62px,90.326px);
            opacity:1;
          }
          66.667% {
            transform:translate(62px,95.763px);
            opacity:1;
          }
          68.75% {
            transform:translate(62px,100.974px);
            opacity:1;
          }
          70.833% {
            transform:translate(62px,105.329px);
            opacity:1;
          }
          72.917% {
            transform:translate(62px,108.198px);
            opacity:1;
          }
          75% {
            transform:translate(62px,109px);
            opacity:1;
          }
          77.083% {
            transform:translate(62px,109px);
            opacity:1;
          }
          79.167% {
            transform:translate(62px,109px);
            opacity:1;
          }
          81.25% {
            transform:translate(62px,109px);
            opacity:1;
          }
          83.333% {
            transform:translate(62px,109px);
            opacity:1;
          }
          85.417% {
            transform:translate(62px,109px);
            opacity:1;
          }
          87.5% {
            transform:translate(62px,109px);
            opacity:1;
          }
          89.583% {
            transform:translate(62px,109px);
            opacity:1;
          }
          91.667% {
            transform:translate(62px,109px);
            opacity:0.926;
          }
          93.75% {
            transform:translate(62px,109px);
            opacity:0.684;
          }
          95.833% {
            transform:translate(62px,109px);
            opacity:0.376;
          }
          97.917% {
            transform:translate(62px,109px);
            opacity:0.112;
          }
          100% {
            transform:translate(62px,109px);
            opacity:0;
          }
        }
        @keyframes rain10 {
          0% {
            transform:translate(81px,25px);
            opacity:0;
          }
          2.083% {
            transform:translate(81px,29.303px);
            opacity:0.278;
          }
          4.167% {
            transform:translate(81px,33.606px);
            opacity:0.777;
          }
          6.25% {
            transform:translate(81px,37.909px);
            opacity:1;
          }
          8.333% {
            transform:translate(81px,42.212px);
            opacity:1;
          }
          10.417% {
            transform:translate(81px,46.514px);
            opacity:1;
          }
          12.5% {
            transform:translate(81px,50.817px);
            opacity:1;
          }
          14.583% {
            transform:translate(81px,55.12px);
            opacity:1;
          }
          16.667% {
            transform:translate(81px,59.423px);
            opacity:1;
          }
          18.75% {
            transform:translate(81px,63.726px);
            opacity:1;
          }
          20.833% {
            transform:translate(81px,68.029px);
            opacity:1;
          }
          22.917% {
            transform:translate(81px,68.924px);
            opacity:1;
          }
          25% {
            transform:translate(81px,70.175px);
            opacity:1;
          }
          27.083% {
            transform:translate(81px,72.096px);
            opacity:1;
          }
          29.167% {
            transform:translate(81px,74.488px);
            opacity:1;
          }
          31.25% {
            transform:translate(81px,77.147px);
            opacity:1;
          }
          33.333% {
            transform:translate(81px,79.871px);
            opacity:1;
          }
          35.417% {
            transform:translate(81px,82.46px);
            opacity:1;
          }
          37.5% {
            transform:translate(81px,84.711px);
            opacity:1;
          }
          39.583% {
            transform:translate(81px,86.423px);
            opacity:1;
          }
          41.667% {
            transform:translate(81px,87.394px);
            opacity:1;
          }
          43.75% {
            transform:translate(81px,87.538px);
            opacity:1;
          }
          45.833% {
            transform:translate(81px,87.538px);
            opacity:1;
          }
          47.917% {
            transform:translate(81px,87.538px);
            opacity:1;
          }
          50% {
            transform:translate(81px,87.538px);
            opacity:1;
          }
          52.083% {
            transform:translate(81px,87.538px);
            opacity:1;
          }
          54.167% {
            transform:translate(81px,87.538px);
            opacity:1;
          }
          56.25% {
            transform:translate(81px,87.538px);
            opacity:1;
          }
          58.333% {
            transform:translate(81px,87.538px);
            opacity:1;
          }
          60.417% {
            transform:translate(81px,87.538px);
            opacity:1;
          }
          62.5% {
            transform:translate(81px,87.538px);
            opacity:1;
          }
          64.583% {
            transform:translate(81px,87.538px);
            opacity:1;
          }
          66.667% {
            transform:translate(81px,87.538px);
            opacity:1;
          }
          68.75% {
            transform:translate(81px,87.538px);
            opacity:1;
          }
          70.833% {
            transform:translate(81px,87.538px);
            opacity:1;
          }
          72.917% {
            transform:translate(81px,87.538px);
            opacity:1;
          }
          75% {
            transform:translate(81px,87.538px);
            opacity:1;
          }
          77.083% {
            transform:translate(81px,87.538px);
            opacity:1;
          }
          79.167% {
            transform:translate(81px,87.538px);
            opacity:1;
          }
          81.25% {
            transform:translate(81px,87.538px);
            opacity:1;
          }
          83.333% {
            transform:translate(81px,87.538px);
            opacity:1;
          }
          85.417% {
            transform:translate(81px,87.538px);
            opacity:1;
          }
          87.5% {
            transform:translate(81px,87.538px);
            opacity:1;
          }
          89.583% {
            transform:translate(81px,87.538px);
            opacity:1;
          }
          91.667% {
            transform:translate(81px,87.538px);
            opacity:0.926;
          }
          93.75% {
            transform:translate(81px,87.538px);
            opacity:0.684;
          }
          95.833% {
            transform:translate(81px,87.538px);
            opacity:0.376;
          }
          97.917% {
            transform:translate(81px,87.538px);
            opacity:0.112;
          }
          100% {
            transform:translate(81px,87.538px);
            opacity:0;
          }
        }
        @keyframes rain11 {
          0% {
            transform:translate(86.5px,25px);
            opacity:0;
          }
          2.083% {
            transform:translate(86.5px,25.541px);
            opacity:0.278;
          }
          4.167% {
            transform:translate(86.5px,29.517px);
            opacity:0.777;
          }
          6.25% {
            transform:translate(86.5px,33.493px);
            opacity:1;
          }
          8.333% {
            transform:translate(86.5px,37.469px);
            opacity:1;
          }
          10.417% {
            transform:translate(86.5px,41.445px);
            opacity:1;
          }
          12.5% {
            transform:translate(86.5px,45.421px);
            opacity:1;
          }
          14.583% {
            transform:translate(86.5px,49.397px);
            opacity:1;
          }
          16.667% {
            transform:translate(86.5px,53.373px);
            opacity:1;
          }
          18.75% {
            transform:translate(86.5px,57.349px);
            opacity:1;
          }
          20.833% {
            transform:translate(86.5px,61.325px);
            opacity:1;
          }
          22.917% {
            transform:translate(86.5px,65.231px);
            opacity:1;
          }
          25% {
            transform:translate(87.493px,65.536px);
            opacity:1;
          }
          27.083% {
            transform:translate(90.16px,66.357px);
            opacity:1;
          }
          29.167% {
            transform:translate(94.139px,67.581px);
            opacity:1;
          }
          31.25% {
            transform:translate(99.07px,69.098px);
            opacity:1;
          }
          33.333% {
            transform:translate(104.591px,70.797px);
            opacity:1;
          }
          35.417% {
            transform:translate(110.343px,72.567px);
            opacity:1;
          }
          37.5% {
            transform:translate(115.963px,74.296px);
            opacity:1;
          }
          39.583% {
            transform:translate(121.091px,75.874px);
            opacity:1;
          }
          41.667% {
            transform:translate(125.367px,77.19px);
            opacity:1;
          }
          43.75% {
            transform:translate(128.428px,78.132px);
            opacity:1;
          }
          45.833% {
            transform:translate(129.915px,78.589px);
            opacity:1;
          }
          47.917% {
            transform:translate(130px,79.401px);
            opacity:1;
          }
          50% {
            transform:translate(130px,82.796px);
            opacity:1;
          }
          52.083% {
            transform:translate(130px,88.147px);
            opacity:1;
          }
          54.167% {
            transform:translate(130px,94.658px);
            opacity:1;
          }
          56.25% {
            transform:translate(130px,101.534px);
            opacity:1;
          }
          58.333% {
            transform:translate(130px,107.978px);
            opacity:1;
          }
          60.417% {
            transform:translate(130px,113.194px);
            opacity:1;
          }
          62.5% {
            transform:translate(130px,116.386px);
            opacity:1;
          }
          64.583% {
            transform:translate(130px,117px);
            opacity:1;
          }
          66.667% {
            transform:translate(130px,117px);
            opacity:1;
          }
          68.75% {
            transform:translate(130px,117px);
            opacity:1;
          }
          70.833% {
            transform:translate(130px,117px);
            opacity:1;
          }
          72.917% {
            transform:translate(130px,117px);
            opacity:1;
          }
          75% {
            transform:translate(130px,117px);
            opacity:1;
          }
          77.083% {
            transform:translate(130px,117px);
            opacity:1;
          }
          79.167% {
            transform:translate(130px,117px);
            opacity:1;
          }
          81.25% {
            transform:translate(130px,117px);
            opacity:1;
          }
          83.333% {
            transform:translate(130px,117px);
            opacity:1;
          }
          85.417% {
            transform:translate(130px,117px);
            opacity:1;
          }
          87.5% {
            transform:translate(130px,117px);
            opacity:1;
          }
          89.583% {
            transform:translate(130px,117px);
            opacity:1;
          }
          91.667% {
            transform:translate(130px,117px);
            opacity:0.926;
          }
          93.75% {
            transform:translate(130px,117px);
            opacity:0.684;
          }
          95.833% {
            transform:translate(130px,117px);
            opacity:0.376;
          }
          97.917% {
            transform:translate(130px,117px);
            opacity:0.112;
          }
          100% {
            transform:translate(130px,117px);
            opacity:0;
          }
        }
        @keyframes rain12 {
          0% {
            transform:translate(92px,25px);
            opacity:0;
          }
          2.083% {
            transform:translate(92px,25px);
            opacity:0.278;
          }
          4.167% {
            transform:translate(92px,26.127px);
            opacity:0.777;
          }
          6.25% {
            transform:translate(92px,30.27px);
            opacity:1;
          }
          8.333% {
            transform:translate(92px,34.413px);
            opacity:1;
          }
          10.417% {
            transform:translate(92px,38.557px);
            opacity:1;
          }
          12.5% {
            transform:translate(92px,42.7px);
            opacity:1;
          }
          14.583% {
            transform:translate(92px,46.843px);
            opacity:1;
          }
          16.667% {
            transform:translate(92px,50.986px);
            opacity:1;
          }
          18.75% {
            transform:translate(92px,55.13px);
            opacity:1;
          }
          20.833% {
            transform:translate(92px,59.273px);
            opacity:1;
          }
          22.917% {
            transform:translate(92px,63.416px);
            opacity:1;
          }
          25% {
            transform:translate(92.021px,66.929px);
            opacity:1;
          }
          27.083% {
            transform:translate(93.106px,67.263px);
            opacity:1;
          }
          29.167% {
            transform:translate(95.609px,68.034px);
            opacity:1;
          }
          31.25% {
            transform:translate(99.217px,69.144px);
            opacity:1;
          }
          33.333% {
            transform:translate(103.613px,70.496px);
            opacity:1;
          }
          35.417% {
            transform:translate(108.482px,71.995px);
            opacity:1;
          }
          37.5% {
            transform:translate(113.51px,73.541px);
            opacity:1;
          }
          39.583% {
            transform:translate(118.379px,75.04px);
            opacity:1;
          }
          41.667% {
            transform:translate(122.776px,76.393px);
            opacity:1;
          }
          43.75% {
            transform:translate(126.386px,77.503px);
            opacity:1;
          }
          45.833% {
            transform:translate(128.891px,78.274px);
            opacity:1;
          }
          47.917% {
            transform:translate(129.979px,78.609px);
            opacity:1;
          }
          50% {
            transform:translate(130px,79.604px);
            opacity:1;
          }
          52.083% {
            transform:translate(130px,82.925px);
            opacity:1;
          }
          54.167% {
            transform:translate(130px,87.902px);
            opacity:1;
          }
          56.25% {
            transform:translate(130px,93.821px);
            opacity:1;
          }
          58.333% {
            transform:translate(130px,99.969px);
            opacity:1;
          }
          60.417% {
            transform:translate(130px,105.634px);
            opacity:1;
          }
          62.5% {
            transform:translate(130px,110.102px);
            opacity:1;
          }
          64.583% {
            transform:translate(130px,112.66px);
            opacity:1;
          }
          66.667% {
            transform:translate(130px,113px);
            opacity:1;
          }
          68.75% {
            transform:translate(130px,113px);
            opacity:1;
          }
          70.833% {
            transform:translate(130px,113px);
            opacity:1;
          }
          72.917% {
            transform:translate(130px,113px);
            opacity:1;
          }
          75% {
            transform:translate(130px,113px);
            opacity:1;
          }
          77.083% {
            transform:translate(130px,113px);
            opacity:1;
          }
          79.167% {
            transform:translate(130px,113px);
            opacity:1;
          }
          81.25% {
            transform:translate(130px,113px);
            opacity:1;
          }
          83.333% {
            transform:translate(130px,113px);
            opacity:1;
          }
          85.417% {
            transform:translate(130px,113px);
            opacity:1;
          }
          87.5% {
            transform:translate(130px,113px);
            opacity:1;
          }
          89.583% {
            transform:translate(130px,113px);
            opacity:1;
          }
          91.667% {
            transform:translate(130px,113px);
            opacity:0.926;
          }
          93.75% {
            transform:translate(130px,113px);
            opacity:0.684;
          }
          95.833% {
            transform:translate(130px,113px);
            opacity:0.376;
          }
          97.917% {
            transform:translate(130px,113px);
            opacity:0.112;
          }
          100% {
            transform:translate(130px,113px);
            opacity:0;
          }
        }
        @keyframes rain13 {
          0% {
            transform:translate(97.5px,25px);
            opacity:0;
          }
          2.083% {
            transform:translate(97.5px,25px);
            opacity:0.278;
          }
          4.167% {
            transform:translate(97.5px,25px);
            opacity:0.777;
          }
          6.25% {
            transform:translate(97.5px,26.759px);
            opacity:1;
          }
          8.333% {
            transform:translate(97.5px,31.069px);
            opacity:1;
          }
          10.417% {
            transform:translate(97.5px,35.38px);
            opacity:1;
          }
          12.5% {
            transform:translate(97.5px,39.69px);
            opacity:1;
          }
          14.583% {
            transform:translate(97.5px,44.001px);
            opacity:1;
          }
          16.667% {
            transform:translate(97.5px,48.311px);
            opacity:1;
          }
          18.75% {
            transform:translate(97.5px,52.622px);
            opacity:1;
          }
          20.833% {
            transform:translate(97.5px,56.932px);
            opacity:1;
          }
          22.917% {
            transform:translate(97.5px,61.243px);
            opacity:1;
          }
          25% {
            transform:translate(97.5px,65.553px);
            opacity:1;
          }
          27.083% {
            transform:translate(97.563px,68.635px);
            opacity:1;
          }
          29.167% {
            transform:translate(98.672px,68.976px);
            opacity:1;
          }
          31.25% {
            transform:translate(100.957px,69.679px);
            opacity:1;
          }
          33.333% {
            transform:translate(104.15px,70.662px);
            opacity:1;
          }
          35.417% {
            transform:translate(107.981px,71.84px);
            opacity:1;
          }
          37.5% {
            transform:translate(112.18px,73.132px);
            opacity:1;
          }
          39.583% {
            transform:translate(116.477px,74.454px);
            opacity:1;
          }
          41.667% {
            transform:translate(120.603px,75.724px);
            opacity:1;
          }
          43.75% {
            transform:translate(124.287px,76.858px);
            opacity:1;
          }
          45.833% {
            transform:translate(127.262px,77.773px);
            opacity:1;
          }
          47.917% {
            transform:translate(129.256px,78.386px);
            opacity:1;
          }
          50% {
            transform:translate(130px,78.615px);
            opacity:1;
          }
          52.083% {
            transform:translate(130px,79.779px);
            opacity:1;
          }
          54.167% {
            transform:translate(130px,82.95px);
            opacity:1;
          }
          56.25% {
            transform:translate(130px,87.498px);
            opacity:1;
          }
          58.333% {
            transform:translate(130px,92.793px);
            opacity:1;
          }
          60.417% {
            transform:translate(130px,98.205px);
            opacity:1;
          }
          62.5% {
            transform:translate(130px,103.104px);
            opacity:1;
          }
          64.583% {
            transform:translate(130px,106.86px);
            opacity:1;
          }
          66.667% {
            transform:translate(130px,108.842px);
            opacity:1;
          }
          68.75% {
            transform:translate(130px,109px);
            opacity:1;
          }
          70.833% {
            transform:translate(130px,109px);
            opacity:1;
          }
          72.917% {
            transform:translate(130px,109px);
            opacity:1;
          }
          75% {
            transform:translate(130px,109px);
            opacity:1;
          }
          77.083% {
            transform:translate(130px,109px);
            opacity:1;
          }
          79.167% {
            transform:translate(130px,109px);
            opacity:1;
          }
          81.25% {
            transform:translate(130px,109px);
            opacity:1;
          }
          83.333% {
            transform:translate(130px,109px);
            opacity:1;
          }
          85.417% {
            transform:translate(130px,109px);
            opacity:1;
          }
          87.5% {
            transform:translate(130px,109px);
            opacity:1;
          }
          89.583% {
            transform:translate(130px,109px);
            opacity:1;
          }
          91.667% {
            transform:translate(130px,109px);
            opacity:0.926;
          }
          93.75% {
            transform:translate(130px,109px);
            opacity:0.684;
          }
          95.833% {
            transform:translate(130px,109px);
            opacity:0.376;
          }
          97.917% {
            transform:translate(130px,109px);
            opacity:0.112;
          }
          100% {
            transform:translate(130px,109px);
            opacity:0;
          }
        }
        @keyframes rain14 {
          0% {
            transform:translate(103px,25px);
            opacity:0;
          }
          2.083% {
            transform:translate(103px,25px);
            opacity:0.278;
          }
          4.167% {
            transform:translate(103px,25px);
            opacity:0.777;
          }
          6.25% {
            transform:translate(103px,25px);
            opacity:1;
          }
          8.333% {
            transform:translate(103px,27.436px);
            opacity:1;
          }
          10.417% {
            transform:translate(103px,31.914px);
            opacity:1;
          }
          12.5% {
            transform:translate(103px,36.391px);
            opacity:1;
          }
          14.583% {
            transform:translate(103px,40.869px);
            opacity:1;
          }
          16.667% {
            transform:translate(103px,45.347px);
            opacity:1;
          }
          18.75% {
            transform:translate(103px,49.825px);
            opacity:1;
          }
          20.833% {
            transform:translate(103px,54.302px);
            opacity:1;
          }
          22.917% {
            transform:translate(103px,58.78px);
            opacity:1;
          }
          25% {
            transform:translate(103px,63.258px);
            opacity:1;
          }
          27.083% {
            transform:translate(103px,67.736px);
            opacity:1;
          }
          29.167% {
            transform:translate(103.112px,70.342px);
            opacity:1;
          }
          31.25% {
            transform:translate(104.179px,70.67px);
            opacity:1;
          }
          33.333% {
            transform:translate(106.194px,71.29px);
            opacity:1;
          }
          35.417% {
            transform:translate(108.931px,72.133px);
            opacity:1;
          }
          37.5% {
            transform:translate(112.169px,73.129px);
            opacity:1;
          }
          39.583% {
            transform:translate(115.681px,74.21px);
            opacity:1;
          }
          41.667% {
            transform:translate(119.245px,75.306px);
            opacity:1;
          }
          43.75% {
            transform:translate(122.636px,76.349px);
            opacity:1;
          }
          45.833% {
            transform:translate(125.63px,77.271px);
            opacity:1;
          }
          47.917% {
            transform:translate(128.003px,78.001px);
            opacity:1;
          }
          50% {
            transform:translate(129.532px,78.471px);
            opacity:1;
          }
          52.083% {
            transform:translate(130px,78.63px);
            opacity:1;
          }
          54.167% {
            transform:translate(130px,79.91px);
            opacity:1;
          }
          56.25% {
            transform:translate(130px,82.858px);
            opacity:1;
          }
          58.333% {
            transform:translate(130px,86.928px);
            opacity:1;
          }
          60.417% {
            transform:translate(130px,91.572px);
            opacity:1;
          }
          62.5% {
            transform:translate(130px,96.243px);
            opacity:1;
          }
          64.583% {
            transform:translate(130px,100.394px);
            opacity:1;
          }
          66.667% {
            transform:translate(130px,103.478px);
            opacity:1;
          }
          68.75% {
            transform:translate(130px,104.948px);
            opacity:1;
          }
          70.833% {
            transform:translate(130px,105px);
            opacity:1;
          }
          72.917% {
            transform:translate(130px,105px);
            opacity:1;
          }
          75% {
            transform:translate(130px,105px);
            opacity:1;
          }
          77.083% {
            transform:translate(130px,105px);
            opacity:1;
          }
          79.167% {
            transform:translate(130px,105px);
            opacity:1;
          }
          81.25% {
            transform:translate(130px,105px);
            opacity:1;
          }
          83.333% {
            transform:translate(130px,105px);
            opacity:1;
          }
          85.417% {
            transform:translate(130px,105px);
            opacity:1;
          }
          87.5% {
            transform:translate(130px,105px);
            opacity:1;
          }
          89.583% {
            transform:translate(130px,105px);
            opacity:1;
          }
          91.667% {
            transform:translate(130px,105px);
            opacity:0.926;
          }
          93.75% {
            transform:translate(130px,105px);
            opacity:0.684;
          }
          95.833% {
            transform:translate(130px,105px);
            opacity:0.376;
          }
          97.917% {
            transform:translate(130px,105px);
            opacity:0.112;
          }
          100% {
            transform:translate(130px,105px);
            opacity:0;
          }
        }
        @keyframes rain15 {
          0% {
            transform:translate(108.5px,25px);
            opacity:0;
          }
          2.083% {
            transform:translate(108.5px,25px);
            opacity:0.278;
          }
          4.167% {
            transform:translate(108.5px,25px);
            opacity:0.777;
          }
          6.25% {
            transform:translate(108.5px,25px);
            opacity:1;
          }
          8.333% {
            transform:translate(108.5px,25px);
            opacity:1;
          }
          10.417% {
            transform:translate(108.5px,28.159px);
            opacity:1;
          }
          12.5% {
            transform:translate(108.5px,32.804px);
            opacity:1;
          }
          14.583% {
            transform:translate(108.5px,37.449px);
            opacity:1;
          }
          16.667% {
            transform:translate(108.5px,42.094px);
            opacity:1;
          }
          18.75% {
            transform:translate(108.5px,46.739px);
            opacity:1;
          }
          20.833% {
            transform:translate(108.5px,51.384px);
            opacity:1;
          }
          22.917% {
            transform:translate(108.5px,56.029px);
            opacity:1;
          }
          25% {
            transform:translate(108.5px,60.674px);
            opacity:1;
          }
          27.083% {
            transform:translate(108.5px,65.319px);
            opacity:1;
          }
          29.167% {
            transform:translate(108.5px,69.964px);
            opacity:1;
          }
          31.25% {
            transform:translate(108.654px,72.047px);
            opacity:1;
          }
          33.333% {
            transform:translate(109.617px,72.344px);
            opacity:1;
          }
          35.417% {
            transform:translate(111.31px,72.865px);
            opacity:1;
          }
          37.5% {
            transform:translate(113.554px,73.555px);
            opacity:1;
          }
          39.583% {
            transform:translate(116.172px,74.361px);
            opacity:1;
          }
          41.667% {
            transform:translate(118.985px,75.226px);
            opacity:1;
          }
          43.75% {
            transform:translate(121.815px,76.097px);
            opacity:1;
          }
          45.833% {
            transform:translate(124.483px,76.918px);
            opacity:1;
          }
          47.917% {
            transform:translate(126.81px,77.634px);
            opacity:1;
          }
          50% {
            transform:translate(128.619px,78.19px);
            opacity:1;
          }
          52.083% {
            transform:translate(129.731px,78.533px);
            opacity:1;
          }
          54.167% {
            transform:translate(130px,78.676px);
            opacity:1;
          }
          56.25% {
            transform:translate(130px,79.981px);
            opacity:1;
          }
          58.333% {
            transform:translate(130px,82.639px);
            opacity:1;
          }
          60.417% {
            transform:translate(130px,86.185px);
            opacity:1;
          }
          62.5% {
            transform:translate(130px,90.156px);
            opacity:1;
          }
          64.583% {
            transform:translate(130px,94.086px);
            opacity:1;
          }
          66.667% {
            transform:translate(130px,97.512px);
            opacity:1;
          }
          68.75% {
            transform:translate(130px,99.969px);
            opacity:1;
          }
          70.833% {
            transform:translate(130px,100.994px);
            opacity:1;
          }
          72.917% {
            transform:translate(130px,101px);
            opacity:1;
          }
          75% {
            transform:translate(130px,101px);
            opacity:1;
          }
          77.083% {
            transform:translate(130px,101px);
            opacity:1;
          }
          79.167% {
            transform:translate(130px,101px);
            opacity:1;
          }
          81.25% {
            transform:translate(130px,101px);
            opacity:1;
          }
          83.333% {
            transform:translate(130px,101px);
            opacity:1;
          }
          85.417% {
            transform:translate(130px,101px);
            opacity:1;
          }
          87.5% {
            transform:translate(130px,101px);
            opacity:1;
          }
          89.583% {
            transform:translate(130px,101px);
            opacity:1;
          }
          91.667% {
            transform:translate(130px,101px);
            opacity:0.926;
          }
          93.75% {
            transform:translate(130px,101px);
            opacity:0.684;
          }
          95.833% {
            transform:translate(130px,101px);
            opacity:0.376;
          }
          97.917% {
            transform:translate(130px,101px);
            opacity:0.112;
          }
          100% {
            transform:translate(130px,101px);
            opacity:0;
          }
        }
        @keyframes rain16 {
          0% {
            transform:translate(114px,25px);
            opacity:0;
          }
          2.083% {
            transform:translate(114px,25px);
            opacity:0.278;
          }
          4.167% {
            transform:translate(114px,25px);
            opacity:0.777;
          }
          6.25% {
            transform:translate(114px,25px);
            opacity:1;
          }
          8.333% {
            transform:translate(114px,25px);
            opacity:1;
          }
          10.417% {
            transform:translate(114px,25px);
            opacity:1;
          }
          12.5% {
            transform:translate(114px,28.927px);
            opacity:1;
          }
          14.583% {
            transform:translate(114px,33.739px);
            opacity:1;
          }
          16.667% {
            transform:translate(114px,38.551px);
            opacity:1;
          }
          18.75% {
            transform:translate(114px,43.364px);
            opacity:1;
          }
          20.833% {
            transform:translate(114px,48.176px);
            opacity:1;
          }
          22.917% {
            transform:translate(114px,52.988px);
            opacity:1;
          }
          25% {
            transform:translate(114px,57.8px);
            opacity:1;
          }
          27.083% {
            transform:translate(114px,62.613px);
            opacity:1;
          }
          29.167% {
            transform:translate(114px,67.425px);
            opacity:1;
          }
          31.25% {
            transform:translate(114px,72.237px);
            opacity:1;
          }
          33.333% {
            transform:translate(114.175px,73.746px);
            opacity:1;
          }
          35.417% {
            transform:translate(114.973px,73.992px);
            opacity:1;
          }
          37.5% {
            transform:translate(116.297px,74.399px);
            opacity:1;
          }
          39.583% {
            transform:translate(118.013px,74.927px);
            opacity:1;
          }
          41.667% {
            transform:translate(119.989px,75.535px);
            opacity:1;
          }
          43.75% {
            transform:translate(122.092px,76.182px);
            opacity:1;
          }
          45.833% {
            transform:translate(124.189px,76.827px);
            opacity:1;
          }
          47.917% {
            transform:translate(126.147px,77.43px);
            opacity:1;
          }
          50% {
            transform:translate(127.835px,77.949px);
            opacity:1;
          }
          52.083% {
            transform:translate(129.118px,78.344px);
            opacity:1;
          }
          54.167% {
            transform:translate(129.865px,78.574px);
            opacity:1;
          }
          56.25% {
            transform:translate(130px,78.731px);
            opacity:1;
          }
          58.333% {
            transform:translate(130px,79.977px);
            opacity:1;
          }
          60.417% {
            transform:translate(130px,82.281px);
            opacity:1;
          }
          62.5% {
            transform:translate(130px,85.264px);
            opacity:1;
          }
          64.583% {
            transform:translate(130px,88.543px);
            opacity:1;
          }
          66.667% {
            transform:translate(130px,91.737px);
            opacity:1;
          }
          68.75% {
            transform:translate(130px,94.465px);
            opacity:1;
          }
          70.833% {
            transform:translate(130px,96.346px);
            opacity:1;
          }
          72.917% {
            transform:translate(130px,97px);
            opacity:1;
          }
          75% {
            transform:translate(130px,97px);
            opacity:1;
          }
          77.083% {
            transform:translate(130px,97px);
            opacity:1;
          }
          79.167% {
            transform:translate(130px,97px);
            opacity:1;
          }
          81.25% {
            transform:translate(130px,97px);
            opacity:1;
          }
          83.333% {
            transform:translate(130px,97px);
            opacity:1;
          }
          85.417% {
            transform:translate(130px,97px);
            opacity:1;
          }
          87.5% {
            transform:translate(130px,97px);
            opacity:1;
          }
          89.583% {
            transform:translate(130px,97px);
            opacity:1;
          }
          91.667% {
            transform:translate(130px,97px);
            opacity:0.926;
          }
          93.75% {
            transform:translate(130px,97px);
            opacity:0.684;
          }
          95.833% {
            transform:translate(130px,97px);
            opacity:0.376;
          }
          97.917% {
            transform:translate(130px,97px);
            opacity:0.112;
          }
          100% {
            transform:translate(130px,97px);
            opacity:0;
          }
        }
        @keyframes rain17 {
          0% {
            transform:translate(119.5px,25px);
            opacity:0;
          }
          2.083% {
            transform:translate(119.5px,25px);
            opacity:0.278;
          }
          4.167% {
            transform:translate(119.5px,25px);
            opacity:0.777;
          }
          6.25% {
            transform:translate(119.5px,25px);
            opacity:1;
          }
          8.333% {
            transform:translate(119.5px,25px);
            opacity:1;
          }
          10.417% {
            transform:translate(119.5px,25px);
            opacity:1;
          }
          12.5% {
            transform:translate(119.5px,25px);
            opacity:1;
          }
          14.583% {
            transform:translate(119.5px,29.74px);
            opacity:1;
          }
          16.667% {
            transform:translate(119.5px,34.72px);
            opacity:1;
          }
          18.75% {
            transform:translate(119.5px,39.699px);
            opacity:1;
          }
          20.833% {
            transform:translate(119.5px,44.679px);
            opacity:1;
          }
          22.917% {
            transform:translate(119.5px,49.659px);
            opacity:1;
          }
          25% {
            transform:translate(119.5px,54.638px);
            opacity:1;
          }
          27.083% {
            transform:translate(119.5px,59.618px);
            opacity:1;
          }
          29.167% {
            transform:translate(119.5px,64.597px);
            opacity:1;
          }
          31.25% {
            transform:translate(119.5px,69.577px);
            opacity:1;
          }
          33.333% {
            transform:translate(119.5px,74.556px);
            opacity:1;
          }
          35.417% {
            transform:translate(119.663px,75.435px);
            opacity:1;
          }
          37.5% {
            transform:translate(120.239px,75.612px);
            opacity:1;
          }
          39.583% {
            transform:translate(121.147px,75.891px);
            opacity:1;
          }
          41.667% {
            transform:translate(122.302px,76.247px);
            opacity:1;
          }
          43.75% {
            transform:translate(123.615px,76.651px);
            opacity:1;
          }
          45.833% {
            transform:translate(124.999px,77.077px);
            opacity:1;
          }
          47.917% {
            transform:translate(126.368px,77.498px);
            opacity:1;
          }
          50% {
            transform:translate(127.635px,77.888px);
            opacity:1;
          }
          52.083% {
            transform:translate(128.711px,78.219px);
            opacity:1;
          }
          54.167% {
            transform:translate(129.511px,78.465px);
            opacity:1;
          }
          56.25% {
            transform:translate(129.946px,78.599px);
            opacity:1;
          }
          58.333% {
            transform:translate(130px,78.779px);
            opacity:1;
          }
          60.417% {
            transform:translate(130px,79.884px);
            opacity:1;
          }
          62.5% {
            transform:translate(130px,81.777px);
            opacity:1;
          }
          64.583% {
            transform:translate(130px,84.159px);
            opacity:1;
          }
          66.667% {
            transform:translate(130px,86.733px);
            opacity:1;
          }
          68.75% {
            transform:translate(130px,89.2px);
            opacity:1;
          }
          70.833% {
            transform:translate(130px,91.262px);
            opacity:1;
          }
          72.917% {
            transform:translate(130px,92.62px);
            opacity:1;
          }
          75% {
            transform:translate(130px,93px);
            opacity:1;
          }
          77.083% {
            transform:translate(130px,93px);
            opacity:1;
          }
          79.167% {
            transform:translate(130px,93px);
            opacity:1;
          }
          81.25% {
            transform:translate(130px,93px);
            opacity:1;
          }
          83.333% {
            transform:translate(130px,93px);
            opacity:1;
          }
          85.417% {
            transform:translate(130px,93px);
            opacity:1;
          }
          87.5% {
            transform:translate(130px,93px);
            opacity:1;
          }
          89.583% {
            transform:translate(130px,93px);
            opacity:1;
          }
          91.667% {
            transform:translate(130px,93px);
            opacity:0.926;
          }
          93.75% {
            transform:translate(130px,93px);
            opacity:0.684;
          }
          95.833% {
            transform:translate(130px,93px);
            opacity:0.376;
          }
          97.917% {
            transform:translate(130px,93px);
            opacity:0.112;
          }
          100% {
            transform:translate(130px,93px);
            opacity:0;
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .rain00 {
            transform:translate(13px,87.538px);
            opacity:1;
          }
          .rain01 {
            transform:translate(18.5px,94.231px);
            opacity:1;
          }
          .rain02 {
            transform:translate(24px,100.923px);
            opacity:1;
          }
          .rain03 {
            transform:translate(29.5px,92.615px);
            opacity:1;
          }
          .rain04 {
            transform:translate(35px,99.308px);
            opacity:1;
          }
          .rain05 {
            transform:translate(62px,117px);
            opacity:1;
          }
          .rain06 {
            transform:translate(62px,113px);
            opacity:1;
          }
          .rain07 {
            transform:translate(62px,109px);
            opacity:1;
          }
          .rain10 {
            transform:translate(81px,87.538px);
            opacity:1;
          }
          .rain11 {
            transform:translate(130px,117px);
            opacity:1;
          }
          .rain12 {
            transform:translate(130px,113px);
            opacity:1;
          }
          .rain13 {
            transform:translate(130px,109px);
            opacity:1;
          }
          .rain14 {
            transform:translate(130px,105px);
            opacity:1;
          }
          .rain15 {
            transform:translate(130px,101px);
            opacity:1;
          }
          .rain16 {
            transform:translate(130px,97px);
            opacity:1;
          }
          .rain17 {
            transform:translate(130px,93px);
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Impervious Runoff">
        <path d="M70 12L70 129" stroke="#476b62" stroke-dasharray="2 4"/>
        <path d="M8 67L56 81.769V123H8Z" fill="#3b3528"/>
        <circle cx="10" cy="87" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="26.119" cy="107.753" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="42.238" cy="95.505" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="14.356" cy="116.258" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="30.475" cy="104.01" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="46.594" cy="91.763" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="18.713" cy="112.515" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="34.832" cy="100.268" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="50.95" cy="88.021" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="23.069" cy="108.773" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="39.188" cy="96.526" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="11.307" cy="117.278" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="27.426" cy="105.031" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="43.545" cy="92.784" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="15.663" cy="113.536" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="31.782" cy="101.289" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="47.901" cy="89.041" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="20.02" cy="109.794" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="36.139" cy="97.546" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="52.257" cy="118.299" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="24.376" cy="106.052" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="40.495" cy="93.804" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="12.614" cy="114.557" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="28.733" cy="102.309" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="44.851" cy="90.062" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="16.97" cy="110.814" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="33.089" cy="98.567" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="49.208" cy="119.32" r="0.6" fill="#bba37a" opacity=".25"/>
        <path d="M8 67L56 81.769" stroke="#91b86a" stroke-width="3"/>
        <path d="M56 84V123H68V84" fill="#183847" stroke="#75a9b9"/>
        <path d="M13 68l-2 -5m2 5 2 -6" stroke="#a6c77b" fill="none"/>
        <path d="M22 70.7l-2 -5m2 5 2 -6" stroke="#a6c77b" fill="none"/>
        <path d="M31 73.4l-2 -5m2 5 2 -6" stroke="#a6c77b" fill="none"/>
        <path d="M40 76.1l-2 -5m2 5 2 -6" stroke="#a6c77b" fill="none"/>
        <path d="M49 78.8l-2 -5m2 5 2 -6" stroke="#a6c77b" fill="none"/>
        <circle cx="0" cy="0" r="1.7" class="rain00" fill="#85d6ef" transform="translate(13 87.538)"/>
        <circle cx="0" cy="0" r="1.7" class="rain01" fill="#85d6ef" transform="translate(18.5 94.231)"/>
        <circle cx="0" cy="0" r="1.7" class="rain02" fill="#85d6ef" transform="translate(24 100.923)"/>
        <circle cx="0" cy="0" r="1.7" class="rain03" fill="#85d6ef" transform="translate(29.5 92.615)"/>
        <circle cx="0" cy="0" r="1.7" class="rain04" fill="#85d6ef" transform="translate(35 99.308)"/>
        <circle cx="0" cy="0" r="1.7" class="rain05" fill="#85d6ef" transform="translate(62 117)"/>
        <circle cx="0" cy="0" r="1.7" class="rain06" fill="#85d6ef" transform="translate(62 113)"/>
        <circle cx="0" cy="0" r="1.7" class="rain07" fill="#85d6ef" transform="translate(62 109)"/>
        <path d="M76 67L124 81.769V123H76Z" fill="#3b3528"/>
        <circle cx="78" cy="87" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="94.119" cy="107.753" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="110.238" cy="95.505" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="82.356" cy="116.258" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="98.475" cy="104.01" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="114.594" cy="91.763" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="86.713" cy="112.515" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="102.832" cy="100.268" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="118.95" cy="88.021" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="91.069" cy="108.773" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="107.188" cy="96.526" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="79.307" cy="117.278" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="95.426" cy="105.031" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="111.545" cy="92.784" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="83.663" cy="113.536" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="99.782" cy="101.289" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="115.901" cy="89.041" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="88.02" cy="109.794" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="104.139" cy="97.546" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="120.257" cy="118.299" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="92.376" cy="106.052" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="108.495" cy="93.804" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="80.614" cy="114.557" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="96.733" cy="102.309" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="112.851" cy="90.062" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="84.97" cy="110.814" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="101.089" cy="98.567" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="117.208" cy="119.32" r="0.6" fill="#bba37a" opacity=".25"/>
        <path d="M85 69.769L124 81.769" stroke="#a1a9a7" stroke-width="5"/>
        <path d="M124 84V123H136V84" fill="#183847" stroke="#75a9b9"/>
        <path d="M76 67L84 69.462" stroke="#91b86a" stroke-width="3"/>
        <circle cx="0" cy="0" r="1.7" class="rain10" fill="#85d6ef" transform="translate(81 87.538)"/>
        <circle cx="0" cy="0" r="1.7" class="rain11" fill="#85d6ef" transform="translate(130 117)"/>
        <circle cx="0" cy="0" r="1.7" class="rain12" fill="#85d6ef" transform="translate(130 113)"/>
        <circle cx="0" cy="0" r="1.7" class="rain13" fill="#85d6ef" transform="translate(130 109)"/>
        <circle cx="0" cy="0" r="1.7" class="rain14" fill="#85d6ef" transform="translate(130 105)"/>
        <circle cx="0" cy="0" r="1.7" class="rain15" fill="#85d6ef" transform="translate(130 101)"/>
        <circle cx="0" cy="0" r="1.7" class="rain16" fill="#85d6ef" transform="translate(130 97)"/>
        <circle cx="0" cy="0" r="1.7" class="rain17" fill="#85d6ef" transform="translate(130 93)"/>
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

if (!customElements.get("concept-impervious-runoff")) {
  customElements.define("concept-impervious-runoff", ConceptImperviousRunoff);
}
