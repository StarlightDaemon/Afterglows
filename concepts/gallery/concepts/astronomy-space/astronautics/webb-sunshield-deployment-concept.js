// Webb Sunshield Deployment. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptWebbSunshieldDeployment extends HTMLElement {
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
        .layer4 {
          animation:layer4 16s linear infinite;
        }
        .layer3 {
          animation:layer3 16s linear infinite;
        }
        .layer2 {
          animation:layer2 16s linear infinite;
        }
        .layer1 {
          animation:layer1 16s linear infinite;
        }
        .layer0 {
          animation:layer0 16s linear infinite;
        }
        .booms {
          animation:booms 16s linear infinite;
        }
        .pallets {
          animation:pallets 16s linear infinite;
        }
        .deployEpisode {
          animation:deployEpisode 16s linear infinite;
        }
        @keyframes layer4 {
          0% {
            d:path('M70 61L82 81L70 102L58 81Z');
          }
          2.083% {
            d:path('M70 61L82 81L70 102L58 81Z');
          }
          4.167% {
            d:path('M70 61L82 81L70 102L58 81Z');
          }
          6.25% {
            d:path('M70 61L82 81L70 102L58 81Z');
          }
          8.333% {
            d:path('M70 61L82 81L70 102L58 81Z');
          }
          10.417% {
            d:path('M70 61L82 81L70 102L58 81Z');
          }
          12.5% {
            d:path('M70 61L82 81L70 102L58 81Z');
          }
          14.583% {
            d:path('M70 61L82 81L70 102L58 81Z');
          }
          16.667% {
            d:path('M70 61L82 81L70 102L58 81Z');
          }
          18.75% {
            d:path('M70 61L82 81L70 102L58 81Z');
          }
          20.833% {
            d:path('M70 61L82 81L70 102L58 81Z');
          }
          22.917% {
            d:path('M70 61L82 81L70 102L58 81Z');
          }
          25% {
            d:path('M70 61L82 81L70 102L58 81Z');
          }
          27.083% {
            d:path('M70 61L82 81L70 102L58 81Z');
          }
          29.167% {
            d:path('M70 61L82 81L70 102L58 81Z');
          }
          31.25% {
            d:path('M70 61L82.223 81L70 102L57.777 81Z');
          }
          33.333% {
            d:path('M70 61L83.509 81L70 102L56.491 81Z');
          }
          35.417% {
            d:path('M70 61L85.785 81L70 102L54.215 81Z');
          }
          37.5% {
            d:path('M70 61L88.875 81L70 102L51.125 81Z');
          }
          39.583% {
            d:path('M70 61L92.601 81L70 102L47.399 81Z');
          }
          41.667% {
            d:path('M70 61L96.787 81L70 102L43.213 81Z');
          }
          43.75% {
            d:path('M70 61L101.256 81L70 102L38.744 81Z');
          }
          45.833% {
            d:path('M70 61L105.831 81L70 102L34.169 81Z');
          }
          47.917% {
            d:path('M70 61L110.336 81L70 102L29.664 81Z');
          }
          50% {
            d:path('M70 61L114.593 81L70 102L25.407 81Z');
          }
          52.083% {
            d:path('M70 61L118.425 81L70 102L21.575 81Z');
          }
          54.167% {
            d:path('M70 61L121.656 81L70 102L18.344 81Z');
          }
          56.25% {
            d:path('M70 61L124.109 81L70 102L15.891 81Z');
          }
          58.333% {
            d:path('M70 61L125.608 81L70 102L14.392 81Z');
          }
          60.417% {
            d:path('M70 61L126 81L70 102L14 81Z');
          }
          62.5% {
            d:path('M70 61L126 81L70 102L14 81Z');
          }
          64.583% {
            d:path('M70 61L126 81L70 102L14 81Z');
          }
          66.667% {
            d:path('M70 61.29L126 81.29L70 102.29L14 81.29Z');
          }
          68.75% {
            d:path('M70 62.345L126 82.345L70 103.345L14 82.345Z');
          }
          70.833% {
            d:path('M70 63.964L126 83.964L70 104.964L14 83.964Z');
          }
          72.917% {
            d:path('M70 65.922L126 85.922L70 106.922L14 85.922Z');
          }
          75% {
            d:path('M70 67.996L126 87.996L70 108.996L14 87.996Z');
          }
          77.083% {
            d:path('M70 69.963L126 89.963L70 110.963L14 89.963Z');
          }
          79.167% {
            d:path('M70 71.599L126 91.599L70 112.599L14 91.599Z');
          }
          81.25% {
            d:path('M70 72.682L126 92.682L70 113.682L14 92.682Z');
          }
          83.333% {
            d:path('M70 73L126 93L70 114L14 93Z');
          }
          85.417% {
            d:path('M70 73L126 93L70 114L14 93Z');
          }
          87.5% {
            d:path('M70 73L126 93L70 114L14 93Z');
          }
          89.583% {
            d:path('M70 73L126 93L70 114L14 93Z');
          }
          91.667% {
            d:path('M70 73L126 93L70 114L14 93Z');
          }
          93.75% {
            d:path('M70 73L126 93L70 114L14 93Z');
          }
          95.833% {
            d:path('M70 73L126 93L70 114L14 93Z');
          }
          97.917% {
            d:path('M70 73L126 93L70 114L14 93Z');
          }
          100% {
            d:path('M70 73L126 93L70 114L14 93Z');
          }
        }
        @keyframes layer3 {
          0% {
            d:path('M70 60L82 80L70 101L58 80Z');
          }
          2.083% {
            d:path('M70 60L82 80L70 101L58 80Z');
          }
          4.167% {
            d:path('M70 60L82 80L70 101L58 80Z');
          }
          6.25% {
            d:path('M70 60L82 80L70 101L58 80Z');
          }
          8.333% {
            d:path('M70 60L82 80L70 101L58 80Z');
          }
          10.417% {
            d:path('M70 60L82 80L70 101L58 80Z');
          }
          12.5% {
            d:path('M70 60L82 80L70 101L58 80Z');
          }
          14.583% {
            d:path('M70 60L82 80L70 101L58 80Z');
          }
          16.667% {
            d:path('M70 60L82 80L70 101L58 80Z');
          }
          18.75% {
            d:path('M70 60L82 80L70 101L58 80Z');
          }
          20.833% {
            d:path('M70 60L82 80L70 101L58 80Z');
          }
          22.917% {
            d:path('M70 60L82 80L70 101L58 80Z');
          }
          25% {
            d:path('M70 60L82 80L70 101L58 80Z');
          }
          27.083% {
            d:path('M70 60L82 80L70 101L58 80Z');
          }
          29.167% {
            d:path('M70 60L82 80L70 101L58 80Z');
          }
          31.25% {
            d:path('M70 60L82.223 80L70 101L57.777 80Z');
          }
          33.333% {
            d:path('M70 60L83.509 80L70 101L56.491 80Z');
          }
          35.417% {
            d:path('M70 60L85.785 80L70 101L54.215 80Z');
          }
          37.5% {
            d:path('M70 60L88.875 80L70 101L51.125 80Z');
          }
          39.583% {
            d:path('M70 60L92.601 80L70 101L47.399 80Z');
          }
          41.667% {
            d:path('M70 60L96.787 80L70 101L43.213 80Z');
          }
          43.75% {
            d:path('M70 60L101.256 80L70 101L38.744 80Z');
          }
          45.833% {
            d:path('M70 60L105.831 80L70 101L34.169 80Z');
          }
          47.917% {
            d:path('M70 60L110.336 80L70 101L29.664 80Z');
          }
          50% {
            d:path('M70 60L114.593 80L70 101L25.407 80Z');
          }
          52.083% {
            d:path('M70 60L118.425 80L70 101L21.575 80Z');
          }
          54.167% {
            d:path('M70 60L121.656 80L70 101L18.344 80Z');
          }
          56.25% {
            d:path('M70 60L124.109 80L70 101L15.891 80Z');
          }
          58.333% {
            d:path('M70 60L125.608 80L70 101L14.392 80Z');
          }
          60.417% {
            d:path('M70 60L126 80L70 101L14 80Z');
          }
          62.5% {
            d:path('M70 60L126 80L70 101L14 80Z');
          }
          64.583% {
            d:path('M70 60L126 80L70 101L14 80Z');
          }
          66.667% {
            d:path('M70 60.217L126 80.217L70 101.217L14 80.217Z');
          }
          68.75% {
            d:path('M70 61.009L126 81.009L70 102.009L14 81.009Z');
          }
          70.833% {
            d:path('M70 62.223L126 82.223L70 103.223L14 82.223Z');
          }
          72.917% {
            d:path('M70 63.691L126 83.691L70 104.691L14 83.691Z');
          }
          75% {
            d:path('M70 65.247L126 85.247L70 106.247L14 85.247Z');
          }
          77.083% {
            d:path('M70 66.722L126 86.722L70 107.722L14 86.722Z');
          }
          79.167% {
            d:path('M70 67.949L126 87.949L70 108.949L14 87.949Z');
          }
          81.25% {
            d:path('M70 68.761L126 88.761L70 109.761L14 88.761Z');
          }
          83.333% {
            d:path('M70 69L126 89L70 110L14 89Z');
          }
          85.417% {
            d:path('M70 69L126 89L70 110L14 89Z');
          }
          87.5% {
            d:path('M70 69L126 89L70 110L14 89Z');
          }
          89.583% {
            d:path('M70 69L126 89L70 110L14 89Z');
          }
          91.667% {
            d:path('M70 69L126 89L70 110L14 89Z');
          }
          93.75% {
            d:path('M70 69L126 89L70 110L14 89Z');
          }
          95.833% {
            d:path('M70 69L126 89L70 110L14 89Z');
          }
          97.917% {
            d:path('M70 69L126 89L70 110L14 89Z');
          }
          100% {
            d:path('M70 69L126 89L70 110L14 89Z');
          }
        }
        @keyframes layer2 {
          0% {
            d:path('M70 59L82 79L70 100L58 79Z');
          }
          2.083% {
            d:path('M70 59L82 79L70 100L58 79Z');
          }
          4.167% {
            d:path('M70 59L82 79L70 100L58 79Z');
          }
          6.25% {
            d:path('M70 59L82 79L70 100L58 79Z');
          }
          8.333% {
            d:path('M70 59L82 79L70 100L58 79Z');
          }
          10.417% {
            d:path('M70 59L82 79L70 100L58 79Z');
          }
          12.5% {
            d:path('M70 59L82 79L70 100L58 79Z');
          }
          14.583% {
            d:path('M70 59L82 79L70 100L58 79Z');
          }
          16.667% {
            d:path('M70 59L82 79L70 100L58 79Z');
          }
          18.75% {
            d:path('M70 59L82 79L70 100L58 79Z');
          }
          20.833% {
            d:path('M70 59L82 79L70 100L58 79Z');
          }
          22.917% {
            d:path('M70 59L82 79L70 100L58 79Z');
          }
          25% {
            d:path('M70 59L82 79L70 100L58 79Z');
          }
          27.083% {
            d:path('M70 59L82 79L70 100L58 79Z');
          }
          29.167% {
            d:path('M70 59L82 79L70 100L58 79Z');
          }
          31.25% {
            d:path('M70 59L82.223 79L70 100L57.777 79Z');
          }
          33.333% {
            d:path('M70 59L83.509 79L70 100L56.491 79Z');
          }
          35.417% {
            d:path('M70 59L85.785 79L70 100L54.215 79Z');
          }
          37.5% {
            d:path('M70 59L88.875 79L70 100L51.125 79Z');
          }
          39.583% {
            d:path('M70 59L92.601 79L70 100L47.399 79Z');
          }
          41.667% {
            d:path('M70 59L96.787 79L70 100L43.213 79Z');
          }
          43.75% {
            d:path('M70 59L101.256 79L70 100L38.744 79Z');
          }
          45.833% {
            d:path('M70 59L105.831 79L70 100L34.169 79Z');
          }
          47.917% {
            d:path('M70 59L110.336 79L70 100L29.664 79Z');
          }
          50% {
            d:path('M70 59L114.593 79L70 100L25.407 79Z');
          }
          52.083% {
            d:path('M70 59L118.425 79L70 100L21.575 79Z');
          }
          54.167% {
            d:path('M70 59L121.656 79L70 100L18.344 79Z');
          }
          56.25% {
            d:path('M70 59L124.109 79L70 100L15.891 79Z');
          }
          58.333% {
            d:path('M70 59L125.608 79L70 100L14.392 79Z');
          }
          60.417% {
            d:path('M70 59L126 79L70 100L14 79Z');
          }
          62.5% {
            d:path('M70 59L126 79L70 100L14 79Z');
          }
          64.583% {
            d:path('M70 59L126 79L70 100L14 79Z');
          }
          66.667% {
            d:path('M70 59.145L126 79.145L70 100.145L14 79.145Z');
          }
          68.75% {
            d:path('M70 59.673L126 79.673L70 100.673L14 79.673Z');
          }
          70.833% {
            d:path('M70 60.482L126 80.482L70 101.482L14 80.482Z');
          }
          72.917% {
            d:path('M70 61.461L126 81.461L70 102.461L14 81.461Z');
          }
          75% {
            d:path('M70 62.498L126 82.498L70 103.498L14 82.498Z');
          }
          77.083% {
            d:path('M70 63.481L126 83.481L70 104.481L14 83.481Z');
          }
          79.167% {
            d:path('M70 64.3L126 84.3L70 105.3L14 84.3Z');
          }
          81.25% {
            d:path('M70 64.841L126 84.841L70 105.841L14 84.841Z');
          }
          83.333% {
            d:path('M70 65L126 85L70 106L14 85Z');
          }
          85.417% {
            d:path('M70 65L126 85L70 106L14 85Z');
          }
          87.5% {
            d:path('M70 65L126 85L70 106L14 85Z');
          }
          89.583% {
            d:path('M70 65L126 85L70 106L14 85Z');
          }
          91.667% {
            d:path('M70 65L126 85L70 106L14 85Z');
          }
          93.75% {
            d:path('M70 65L126 85L70 106L14 85Z');
          }
          95.833% {
            d:path('M70 65L126 85L70 106L14 85Z');
          }
          97.917% {
            d:path('M70 65L126 85L70 106L14 85Z');
          }
          100% {
            d:path('M70 65L126 85L70 106L14 85Z');
          }
        }
        @keyframes layer1 {
          0% {
            d:path('M70 58L82 78L70 99L58 78Z');
          }
          2.083% {
            d:path('M70 58L82 78L70 99L58 78Z');
          }
          4.167% {
            d:path('M70 58L82 78L70 99L58 78Z');
          }
          6.25% {
            d:path('M70 58L82 78L70 99L58 78Z');
          }
          8.333% {
            d:path('M70 58L82 78L70 99L58 78Z');
          }
          10.417% {
            d:path('M70 58L82 78L70 99L58 78Z');
          }
          12.5% {
            d:path('M70 58L82 78L70 99L58 78Z');
          }
          14.583% {
            d:path('M70 58L82 78L70 99L58 78Z');
          }
          16.667% {
            d:path('M70 58L82 78L70 99L58 78Z');
          }
          18.75% {
            d:path('M70 58L82 78L70 99L58 78Z');
          }
          20.833% {
            d:path('M70 58L82 78L70 99L58 78Z');
          }
          22.917% {
            d:path('M70 58L82 78L70 99L58 78Z');
          }
          25% {
            d:path('M70 58L82 78L70 99L58 78Z');
          }
          27.083% {
            d:path('M70 58L82 78L70 99L58 78Z');
          }
          29.167% {
            d:path('M70 58L82 78L70 99L58 78Z');
          }
          31.25% {
            d:path('M70 58L82.223 78L70 99L57.777 78Z');
          }
          33.333% {
            d:path('M70 58L83.509 78L70 99L56.491 78Z');
          }
          35.417% {
            d:path('M70 58L85.785 78L70 99L54.215 78Z');
          }
          37.5% {
            d:path('M70 58L88.875 78L70 99L51.125 78Z');
          }
          39.583% {
            d:path('M70 58L92.601 78L70 99L47.399 78Z');
          }
          41.667% {
            d:path('M70 58L96.787 78L70 99L43.213 78Z');
          }
          43.75% {
            d:path('M70 58L101.256 78L70 99L38.744 78Z');
          }
          45.833% {
            d:path('M70 58L105.831 78L70 99L34.169 78Z');
          }
          47.917% {
            d:path('M70 58L110.336 78L70 99L29.664 78Z');
          }
          50% {
            d:path('M70 58L114.593 78L70 99L25.407 78Z');
          }
          52.083% {
            d:path('M70 58L118.425 78L70 99L21.575 78Z');
          }
          54.167% {
            d:path('M70 58L121.656 78L70 99L18.344 78Z');
          }
          56.25% {
            d:path('M70 58L124.109 78L70 99L15.891 78Z');
          }
          58.333% {
            d:path('M70 58L125.608 78L70 99L14.392 78Z');
          }
          60.417% {
            d:path('M70 58L126 78L70 99L14 78Z');
          }
          62.5% {
            d:path('M70 58L126 78L70 99L14 78Z');
          }
          64.583% {
            d:path('M70 58L126 78L70 99L14 78Z');
          }
          66.667% {
            d:path('M70 58.072L126 78.072L70 99.072L14 78.072Z');
          }
          68.75% {
            d:path('M70 58.336L126 78.336L70 99.336L14 78.336Z');
          }
          70.833% {
            d:path('M70 58.741L126 78.741L70 99.741L14 78.741Z');
          }
          72.917% {
            d:path('M70 59.23L126 79.23L70 100.23L14 79.23Z');
          }
          75% {
            d:path('M70 59.749L126 79.749L70 100.749L14 79.749Z');
          }
          77.083% {
            d:path('M70 60.241L126 80.241L70 101.241L14 80.241Z');
          }
          79.167% {
            d:path('M70 60.65L126 80.65L70 101.65L14 80.65Z');
          }
          81.25% {
            d:path('M70 60.92L126 80.92L70 101.92L14 80.92Z');
          }
          83.333% {
            d:path('M70 61L126 81L70 102L14 81Z');
          }
          85.417% {
            d:path('M70 61L126 81L70 102L14 81Z');
          }
          87.5% {
            d:path('M70 61L126 81L70 102L14 81Z');
          }
          89.583% {
            d:path('M70 61L126 81L70 102L14 81Z');
          }
          91.667% {
            d:path('M70 61L126 81L70 102L14 81Z');
          }
          93.75% {
            d:path('M70 61L126 81L70 102L14 81Z');
          }
          95.833% {
            d:path('M70 61L126 81L70 102L14 81Z');
          }
          97.917% {
            d:path('M70 61L126 81L70 102L14 81Z');
          }
          100% {
            d:path('M70 61L126 81L70 102L14 81Z');
          }
        }
        @keyframes layer0 {
          0% {
            d:path('M70 57L82 77L70 98L58 77Z');
          }
          2.083% {
            d:path('M70 57L82 77L70 98L58 77Z');
          }
          4.167% {
            d:path('M70 57L82 77L70 98L58 77Z');
          }
          6.25% {
            d:path('M70 57L82 77L70 98L58 77Z');
          }
          8.333% {
            d:path('M70 57L82 77L70 98L58 77Z');
          }
          10.417% {
            d:path('M70 57L82 77L70 98L58 77Z');
          }
          12.5% {
            d:path('M70 57L82 77L70 98L58 77Z');
          }
          14.583% {
            d:path('M70 57L82 77L70 98L58 77Z');
          }
          16.667% {
            d:path('M70 57L82 77L70 98L58 77Z');
          }
          18.75% {
            d:path('M70 57L82 77L70 98L58 77Z');
          }
          20.833% {
            d:path('M70 57L82 77L70 98L58 77Z');
          }
          22.917% {
            d:path('M70 57L82 77L70 98L58 77Z');
          }
          25% {
            d:path('M70 57L82 77L70 98L58 77Z');
          }
          27.083% {
            d:path('M70 57L82 77L70 98L58 77Z');
          }
          29.167% {
            d:path('M70 57L82 77L70 98L58 77Z');
          }
          31.25% {
            d:path('M70 57L82.223 77L70 98L57.777 77Z');
          }
          33.333% {
            d:path('M70 57L83.509 77L70 98L56.491 77Z');
          }
          35.417% {
            d:path('M70 57L85.785 77L70 98L54.215 77Z');
          }
          37.5% {
            d:path('M70 57L88.875 77L70 98L51.125 77Z');
          }
          39.583% {
            d:path('M70 57L92.601 77L70 98L47.399 77Z');
          }
          41.667% {
            d:path('M70 57L96.787 77L70 98L43.213 77Z');
          }
          43.75% {
            d:path('M70 57L101.256 77L70 98L38.744 77Z');
          }
          45.833% {
            d:path('M70 57L105.831 77L70 98L34.169 77Z');
          }
          47.917% {
            d:path('M70 57L110.336 77L70 98L29.664 77Z');
          }
          50% {
            d:path('M70 57L114.593 77L70 98L25.407 77Z');
          }
          52.083% {
            d:path('M70 57L118.425 77L70 98L21.575 77Z');
          }
          54.167% {
            d:path('M70 57L121.656 77L70 98L18.344 77Z');
          }
          56.25% {
            d:path('M70 57L124.109 77L70 98L15.891 77Z');
          }
          58.333% {
            d:path('M70 57L125.608 77L70 98L14.392 77Z');
          }
          60.417% {
            d:path('M70 57L126 77L70 98L14 77Z');
          }
          62.5% {
            d:path('M70 57L126 77L70 98L14 77Z');
          }
          64.583% {
            d:path('M70 57L126 77L70 98L14 77Z');
          }
          66.667% {
            d:path('M70 57L126 77L70 98L14 77Z');
          }
          68.75% {
            d:path('M70 57L126 77L70 98L14 77Z');
          }
          70.833% {
            d:path('M70 57L126 77L70 98L14 77Z');
          }
          72.917% {
            d:path('M70 57L126 77L70 98L14 77Z');
          }
          75% {
            d:path('M70 57L126 77L70 98L14 77Z');
          }
          77.083% {
            d:path('M70 57L126 77L70 98L14 77Z');
          }
          79.167% {
            d:path('M70 57L126 77L70 98L14 77Z');
          }
          81.25% {
            d:path('M70 57L126 77L70 98L14 77Z');
          }
          83.333% {
            d:path('M70 57L126 77L70 98L14 77Z');
          }
          85.417% {
            d:path('M70 57L126 77L70 98L14 77Z');
          }
          87.5% {
            d:path('M70 57L126 77L70 98L14 77Z');
          }
          89.583% {
            d:path('M70 57L126 77L70 98L14 77Z');
          }
          91.667% {
            d:path('M70 57L126 77L70 98L14 77Z');
          }
          93.75% {
            d:path('M70 57L126 77L70 98L14 77Z');
          }
          95.833% {
            d:path('M70 57L126 77L70 98L14 77Z');
          }
          97.917% {
            d:path('M70 57L126 77L70 98L14 77Z');
          }
          100% {
            d:path('M70 57L126 77L70 98L14 77Z');
          }
        }
        @keyframes booms {
          0% {
            d:path('M58 77H82');
          }
          2.083% {
            d:path('M58 77H82');
          }
          4.167% {
            d:path('M58 77H82');
          }
          6.25% {
            d:path('M58 77H82');
          }
          8.333% {
            d:path('M58 77H82');
          }
          10.417% {
            d:path('M58 77H82');
          }
          12.5% {
            d:path('M58 77H82');
          }
          14.583% {
            d:path('M58 77H82');
          }
          16.667% {
            d:path('M58 77H82');
          }
          18.75% {
            d:path('M58 77H82');
          }
          20.833% {
            d:path('M58 77H82');
          }
          22.917% {
            d:path('M58 77H82');
          }
          25% {
            d:path('M58 77H82');
          }
          27.083% {
            d:path('M58 77H82');
          }
          29.167% {
            d:path('M58 77H82');
          }
          31.25% {
            d:path('M57.777 77H82.223');
          }
          33.333% {
            d:path('M56.491 77H83.509');
          }
          35.417% {
            d:path('M54.215 77H85.785');
          }
          37.5% {
            d:path('M51.125 77H88.875');
          }
          39.583% {
            d:path('M47.399 77H92.601');
          }
          41.667% {
            d:path('M43.213 77H96.787');
          }
          43.75% {
            d:path('M38.744 77H101.256');
          }
          45.833% {
            d:path('M34.169 77H105.831');
          }
          47.917% {
            d:path('M29.664 77H110.336');
          }
          50% {
            d:path('M25.407 77H114.593');
          }
          52.083% {
            d:path('M21.575 77H118.425');
          }
          54.167% {
            d:path('M18.344 77H121.656');
          }
          56.25% {
            d:path('M15.891 77H124.109');
          }
          58.333% {
            d:path('M14.392 77H125.608');
          }
          60.417% {
            d:path('M14 77H126');
          }
          62.5% {
            d:path('M14 77H126');
          }
          64.583% {
            d:path('M14 77H126');
          }
          66.667% {
            d:path('M14 77H126');
          }
          68.75% {
            d:path('M14 77H126');
          }
          70.833% {
            d:path('M14 77H126');
          }
          72.917% {
            d:path('M14 77H126');
          }
          75% {
            d:path('M14 77H126');
          }
          77.083% {
            d:path('M14 77H126');
          }
          79.167% {
            d:path('M14 77H126');
          }
          81.25% {
            d:path('M14 77H126');
          }
          83.333% {
            d:path('M14 77H126');
          }
          85.417% {
            d:path('M14 77H126');
          }
          87.5% {
            d:path('M14 77H126');
          }
          89.583% {
            d:path('M14 77H126');
          }
          91.667% {
            d:path('M14 77H126');
          }
          93.75% {
            d:path('M14 77H126');
          }
          95.833% {
            d:path('M14 77H126');
          }
          97.917% {
            d:path('M14 77H126');
          }
          100% {
            d:path('M14 77H126');
          }
        }
        @keyframes pallets {
          0% {
            d:path('M62 83L60 67M78 83L80 67');
          }
          2.083% {
            d:path('M62 83L59.546 67.063M78 83L80.454 67.063');
          }
          4.167% {
            d:path('M62 83L58.3 67.306M78 83L81.7 67.306');
          }
          6.25% {
            d:path('M62 83L56.465 67.855M78 83L83.535 67.855');
          }
          8.333% {
            d:path('M62 83L54.279 68.844M78 83L85.721 68.844');
          }
          10.417% {
            d:path('M62 83L52.007 70.346M78 83L87.993 70.346');
          }
          12.5% {
            d:path('M62 83L49.912 72.329M78 83L90.088 72.329');
          }
          14.583% {
            d:path('M62 83L48.204 74.653M78 83L91.796 74.653');
          }
          16.667% {
            d:path('M62 83L46.996 77.094M78 83L93.004 77.094');
          }
          18.75% {
            d:path('M62 83L46.286 79.387M78 83L93.714 79.387');
          }
          20.833% {
            d:path('M62 83L45.968 81.276M78 83L94.032 81.276');
          }
          22.917% {
            d:path('M62 83L45.882 82.541M78 83L94.118 82.541');
          }
          25% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          27.083% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          29.167% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          31.25% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          33.333% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          35.417% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          37.5% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          39.583% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          41.667% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          43.75% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          45.833% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          47.917% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          50% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          52.083% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          54.167% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          56.25% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          58.333% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          60.417% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          62.5% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          64.583% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          66.667% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          68.75% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          70.833% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          72.917% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          75% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          77.083% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          79.167% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          81.25% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          83.333% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          85.417% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          87.5% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          89.583% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          91.667% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          93.75% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          95.833% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          97.917% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          100% {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
        }
        @keyframes deployEpisode {
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
            opacity:1;
          }
          97.917% {
            opacity:0.531;
          }
          100% {
            opacity:0;
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .layer4 {
            d:path('M70 67.996L126 87.996L70 108.996L14 87.996Z');
          }
          .layer3 {
            d:path('M70 65.247L126 85.247L70 106.247L14 85.247Z');
          }
          .layer2 {
            d:path('M70 62.498L126 82.498L70 103.498L14 82.498Z');
          }
          .layer1 {
            d:path('M70 59.749L126 79.749L70 100.749L14 79.749Z');
          }
          .layer0 {
            d:path('M70 57L126 77L70 98L14 77Z');
          }
          .booms {
            d:path('M14 77H126');
          }
          .pallets {
            d:path('M62 83L45.875 83M78 83L94.125 83');
          }
          .deployEpisode {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Webb Sunshield Deployment">
        <g class="deployEpisode">
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
          <path d="M70 25V61" stroke="#b7bba3" stroke-width="3"/>
          <path d="M70 16L85 25V43L70 52 55 43V25Z" fill="#c5a761" stroke="#edd298"/>
          <path d="M55 25L85 43M55 43L85 25M70 16V52" stroke="#8f783f"/>
          <rect x="63" y="83" width="14" height="20" fill="#7f978b"/>
          <path d="M70 67.996L126 87.996L70 108.996L14 87.996Z" class="layer4" fill="#5b7575" stroke="#e1debd" stroke-width=".8"/>
          <path d="M70 65.247L126 85.247L70 106.247L14 85.247Z" class="layer3" fill="#748f8d" stroke="#e1debd" stroke-width=".8"/>
          <path d="M70 62.498L126 82.498L70 103.498L14 82.498Z" class="layer2" fill="#93adaa" stroke="#e1debd" stroke-width=".8"/>
          <path d="M70 59.749L126 79.749L70 100.749L14 79.749Z" class="layer1" fill="#b6c8c6" stroke="#e1debd" stroke-width=".8"/>
          <path d="M70 57L126 77L70 98L14 77Z" class="layer0" fill="#d3dfd5" stroke="#e1debd" stroke-width=".8"/>
          <path d="M58 77H82" class="booms" stroke="#9eb9b0" stroke-width="1.4"/>
          <path d="M62 83L60 67M78 83L80 67" class="pallets" stroke="#d5c79f" stroke-width="3"/>
          <g transform="translate(26 125) rotate(-65)" fill="#e0bc7c">
            <path d="M-7 -1H2V-4L8 0 2 4V1H-7Z"/>
          </g>
          <g transform="translate(49 129) rotate(-65)" fill="#e0bc7c">
            <path d="M-7 -1H2V-4L8 0 2 4V1H-7Z"/>
          </g>
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

if (!customElements.get("concept-webb-sunshield-deployment")) {
  customElements.define("concept-webb-sunshield-deployment", ConceptWebbSunshieldDeployment);
}
