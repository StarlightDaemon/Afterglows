// DNA Transcription. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptDnaTranscription extends HTMLElement {
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
        .dna {
          fill:none;
          stroke:#7dabbc;
          stroke-width:2.5
        }
        .top {
          animation:top 10s linear infinite
        }
        .bottom {
          animation:bottom 10s linear infinite
        }
        .rna {
          fill:none;
          stroke:#e2be72;
          stroke-width:2.5;
          animation:rna 10s linear infinite
        }
        .polymerase {
          fill:#64887899;
          stroke:#b4caa3;
          stroke-width:1.5;
          opacity:0;
          animation:polymerase 10s linear infinite
        }
        .active {
          fill:none;
          stroke:#ebce88;
          stroke-width:3
        }
        .direction {
          stroke:#8eaa98
        }
        text {
          fill:#b9c8b2;
          font:8px serif
        }
        @keyframes top {
          0% {
            d:path("M12 66H15C21 66 21 54 30 54C39 54 39 66 45 66H128")
          }
          2% {
            d:path("M12 66H15C21 66 21 54 30 54C39 54 39 66 45 66H128")
          }
          4% {
            d:path("M12 66H15C21 66 21 54 30 54C39 54 39 66 45 66H128")
          }
          6% {
            d:path("M12 66H15C21 66 21 54 30 54C39 54 39 66 45 66H128")
          }
          8% {
            d:path("M12 66H15C21 66 21 54 30 54C39 54 39 66 45 66H128")
          }
          10% {
            d:path("M12 66H15C21 66 21 54 30 54C39 54 39 66 45 66H128")
          }
          12% {
            d:path("M12 66H17.4C23.4 66 23.4 54 32.4 54C41.4 54 41.4 66 47.4 66H128")
          }
          14% {
            d:path("M12 66H19.8C25.8 66 25.8 54 34.8 54C43.8 54 43.8 66 49.8 66H128")
          }
          16% {
            d:path("M12 66H22.2C28.2 66 28.2 54 37.2 54C46.2 54 46.2 66 52.2 66H128")
          }
          18% {
            d:path("M12 66H24.6C30.6 66 30.6 54 39.6 54C48.6 54 48.6 66 54.6 66H128")
          }
          20% {
            d:path("M12 66H27C33 66 33 54 42 54C51 54 51 66 57 66H128")
          }
          22% {
            d:path("M12 66H29.4C35.4 66 35.4 54 44.4 54C53.4 54 53.4 66 59.4 66H128")
          }
          24% {
            d:path("M12 66H31.8C37.8 66 37.8 54 46.8 54C55.8 54 55.8 66 61.8 66H128")
          }
          26% {
            d:path("M12 66H34.2C40.2 66 40.2 54 49.2 54C58.2 54 58.2 66 64.2 66H128")
          }
          28% {
            d:path("M12 66H36.6C42.6 66 42.6 54 51.6 54C60.6 54 60.6 66 66.6 66H128")
          }
          30% {
            d:path("M12 66H39C45 66 45 54 54 54C63 54 63 66 69 66H128")
          }
          32% {
            d:path("M12 66H41.4C47.4 66 47.4 54 56.4 54C65.4 54 65.4 66 71.4 66H128")
          }
          34% {
            d:path("M12 66H43.8C49.8 66 49.8 54 58.8 54C67.8 54 67.8 66 73.8 66H128")
          }
          36% {
            d:path("M12 66H46.2C52.2 66 52.2 54 61.2 54C70.2 54 70.2 66 76.2 66H128")
          }
          38% {
            d:path("M12 66H48.6C54.6 66 54.6 54 63.6 54C72.6 54 72.6 66 78.6 66H128")
          }
          40% {
            d:path("M12 66H51C57 66 57 54 66 54C75 54 75 66 81 66H128")
          }
          42% {
            d:path("M12 66H53.4C59.4 66 59.4 54 68.4 54C77.4 54 77.4 66 83.4 66H128")
          }
          44% {
            d:path("M12 66H55.8C61.8 66 61.8 54 70.8 54C79.8 54 79.8 66 85.8 66H128")
          }
          46% {
            d:path("M12 66H58.2C64.2 66 64.2 54 73.2 54C82.2 54 82.2 66 88.2 66H128")
          }
          48% {
            d:path("M12 66H60.6C66.6 66 66.6 54 75.6 54C84.6 54 84.6 66 90.6 66H128")
          }
          50% {
            d:path("M12 66H63C69 66 69 54 78 54C87 54 87 66 93 66H128")
          }
          52% {
            d:path("M12 66H65.4C71.4 66 71.4 54 80.4 54C89.4 54 89.4 66 95.4 66H128")
          }
          54% {
            d:path("M12 66H67.8C73.8 66 73.8 54 82.8 54C91.8 54 91.8 66 97.8 66H128")
          }
          56% {
            d:path("M12 66H70.2C76.2 66 76.2 54 85.2 54C94.2 54 94.2 66 100.2 66H128")
          }
          58% {
            d:path("M12 66H72.6C78.6 66 78.6 54 87.6 54C96.6 54 96.6 66 102.6 66H128")
          }
          60% {
            d:path("M12 66H75C81 66 81 54 90 54C99 54 99 66 105 66H128")
          }
          62% {
            d:path("M12 66H77.4C83.4 66 83.4 54 92.4 54C101.4 54 101.4 66 107.4 66H128")
          }
          64% {
            d:path("M12 66H79.8C85.8 66 85.8 54 94.8 54C103.8 54 103.8 66 109.8 66H128")
          }
          66% {
            d:path("M12 66H82.2C88.2 66 88.2 54 97.2 54C106.2 54 106.2 66 112.2 66H128")
          }
          68% {
            d:path("M12 66H84.6C90.6 66 90.6 54 99.6 54C108.6 54 108.6 66 114.6 66H128")
          }
          70% {
            d:path("M12 66H87C93 66 93 54 102 54C111 54 111 66 117 66H128")
          }
          72% {
            d:path("M12 66H89.4C95.4 66 95.4 54 104.4 54C113.4 54 113.4 66 119.4 66H128")
          }
          74% {
            d:path("M12 66H91.8C97.8 66 97.8 54 106.8 54C115.8 54 115.8 66 121.8 66H128")
          }
          76% {
            d:path("M12 66H93C99 66 99 54.8 108 54.8C117 54.8 117 66 123 66H128")
          }
          78% {
            d:path("M12 66H93C99 66 99 56.4 108 56.4C117 56.4 117 66 123 66H128")
          }
          80% {
            d:path("M12 66H93C99 66 99 58 108 58C117 58 117 66 123 66H128")
          }
          82% {
            d:path("M12 66H93C99 66 99 59.6 108 59.6C117 59.6 117 66 123 66H128")
          }
          84% {
            d:path("M12 66H93C99 66 99 61.2 108 61.2C117 61.2 117 66 123 66H128")
          }
          86% {
            d:path("M12 66H93C99 66 99 62.8 108 62.8C117 62.8 117 66 123 66H128")
          }
          88% {
            d:path("M12 66H93C99 66 99 64.4 108 64.4C117 64.4 117 66 123 66H128")
          }
          90% {
            d:path("M12 66H93C99 66 99 66 108 66C117 66 117 66 123 66H128")
          }
          92% {
            d:path("M12 66H93C99 66 99 66 108 66C117 66 117 66 123 66H128")
          }
          94% {
            d:path("M12 66H93C99 66 99 66 108 66C117 66 117 66 123 66H128")
          }
          96% {
            d:path("M12 66H93C99 66 99 66 108 66C117 66 117 66 123 66H128")
          }
          98% {
            d:path("M12 66H93C99 66 99 66 108 66C117 66 117 66 123 66H128")
          }
          100% {
            d:path("M12 66H93C99 66 99 66 108 66C117 66 117 66 123 66H128")
          }
        }
        @keyframes bottom {
          0% {
            d:path("M12 76H15C21 76 21 88 30 88C39 88 39 76 45 76H128")
          }
          2% {
            d:path("M12 76H15C21 76 21 88 30 88C39 88 39 76 45 76H128")
          }
          4% {
            d:path("M12 76H15C21 76 21 88 30 88C39 88 39 76 45 76H128")
          }
          6% {
            d:path("M12 76H15C21 76 21 88 30 88C39 88 39 76 45 76H128")
          }
          8% {
            d:path("M12 76H15C21 76 21 88 30 88C39 88 39 76 45 76H128")
          }
          10% {
            d:path("M12 76H15C21 76 21 88 30 88C39 88 39 76 45 76H128")
          }
          12% {
            d:path("M12 76H17.4C23.4 76 23.4 88 32.4 88C41.4 88 41.4 76 47.4 76H128")
          }
          14% {
            d:path("M12 76H19.8C25.8 76 25.8 88 34.8 88C43.8 88 43.8 76 49.8 76H128")
          }
          16% {
            d:path("M12 76H22.2C28.2 76 28.2 88 37.2 88C46.2 88 46.2 76 52.2 76H128")
          }
          18% {
            d:path("M12 76H24.6C30.6 76 30.6 88 39.6 88C48.6 88 48.6 76 54.6 76H128")
          }
          20% {
            d:path("M12 76H27C33 76 33 88 42 88C51 88 51 76 57 76H128")
          }
          22% {
            d:path("M12 76H29.4C35.4 76 35.4 88 44.4 88C53.4 88 53.4 76 59.4 76H128")
          }
          24% {
            d:path("M12 76H31.8C37.8 76 37.8 88 46.8 88C55.8 88 55.8 76 61.8 76H128")
          }
          26% {
            d:path("M12 76H34.2C40.2 76 40.2 88 49.2 88C58.2 88 58.2 76 64.2 76H128")
          }
          28% {
            d:path("M12 76H36.6C42.6 76 42.6 88 51.6 88C60.6 88 60.6 76 66.6 76H128")
          }
          30% {
            d:path("M12 76H39C45 76 45 88 54 88C63 88 63 76 69 76H128")
          }
          32% {
            d:path("M12 76H41.4C47.4 76 47.4 88 56.4 88C65.4 88 65.4 76 71.4 76H128")
          }
          34% {
            d:path("M12 76H43.8C49.8 76 49.8 88 58.8 88C67.8 88 67.8 76 73.8 76H128")
          }
          36% {
            d:path("M12 76H46.2C52.2 76 52.2 88 61.2 88C70.2 88 70.2 76 76.2 76H128")
          }
          38% {
            d:path("M12 76H48.6C54.6 76 54.6 88 63.6 88C72.6 88 72.6 76 78.6 76H128")
          }
          40% {
            d:path("M12 76H51C57 76 57 88 66 88C75 88 75 76 81 76H128")
          }
          42% {
            d:path("M12 76H53.4C59.4 76 59.4 88 68.4 88C77.4 88 77.4 76 83.4 76H128")
          }
          44% {
            d:path("M12 76H55.8C61.8 76 61.8 88 70.8 88C79.8 88 79.8 76 85.8 76H128")
          }
          46% {
            d:path("M12 76H58.2C64.2 76 64.2 88 73.2 88C82.2 88 82.2 76 88.2 76H128")
          }
          48% {
            d:path("M12 76H60.6C66.6 76 66.6 88 75.6 88C84.6 88 84.6 76 90.6 76H128")
          }
          50% {
            d:path("M12 76H63C69 76 69 88 78 88C87 88 87 76 93 76H128")
          }
          52% {
            d:path("M12 76H65.4C71.4 76 71.4 88 80.4 88C89.4 88 89.4 76 95.4 76H128")
          }
          54% {
            d:path("M12 76H67.8C73.8 76 73.8 88 82.8 88C91.8 88 91.8 76 97.8 76H128")
          }
          56% {
            d:path("M12 76H70.2C76.2 76 76.2 88 85.2 88C94.2 88 94.2 76 100.2 76H128")
          }
          58% {
            d:path("M12 76H72.6C78.6 76 78.6 88 87.6 88C96.6 88 96.6 76 102.6 76H128")
          }
          60% {
            d:path("M12 76H75C81 76 81 88 90 88C99 88 99 76 105 76H128")
          }
          62% {
            d:path("M12 76H77.4C83.4 76 83.4 88 92.4 88C101.4 88 101.4 76 107.4 76H128")
          }
          64% {
            d:path("M12 76H79.8C85.8 76 85.8 88 94.8 88C103.8 88 103.8 76 109.8 76H128")
          }
          66% {
            d:path("M12 76H82.2C88.2 76 88.2 88 97.2 88C106.2 88 106.2 76 112.2 76H128")
          }
          68% {
            d:path("M12 76H84.6C90.6 76 90.6 88 99.6 88C108.6 88 108.6 76 114.6 76H128")
          }
          70% {
            d:path("M12 76H87C93 76 93 88 102 88C111 88 111 76 117 76H128")
          }
          72% {
            d:path("M12 76H89.4C95.4 76 95.4 88 104.4 88C113.4 88 113.4 76 119.4 76H128")
          }
          74% {
            d:path("M12 76H91.8C97.8 76 97.8 88 106.8 88C115.8 88 115.8 76 121.8 76H128")
          }
          76% {
            d:path("M12 76H93C99 76 99 87.2 108 87.2C117 87.2 117 76 123 76H128")
          }
          78% {
            d:path("M12 76H93C99 76 99 85.6 108 85.6C117 85.6 117 76 123 76H128")
          }
          80% {
            d:path("M12 76H93C99 76 99 84 108 84C117 84 117 76 123 76H128")
          }
          82% {
            d:path("M12 76H93C99 76 99 82.4 108 82.4C117 82.4 117 76 123 76H128")
          }
          84% {
            d:path("M12 76H93C99 76 99 80.8 108 80.8C117 80.8 117 76 123 76H128")
          }
          86% {
            d:path("M12 76H93C99 76 99 79.2 108 79.2C117 79.2 117 76 123 76H128")
          }
          88% {
            d:path("M12 76H93C99 76 99 77.6 108 77.6C117 77.6 117 76 123 76H128")
          }
          90% {
            d:path("M12 76H93C99 76 99 76 108 76C117 76 117 76 123 76H128")
          }
          92% {
            d:path("M12 76H93C99 76 99 76 108 76C117 76 117 76 123 76H128")
          }
          94% {
            d:path("M12 76H93C99 76 99 76 108 76C117 76 117 76 123 76H128")
          }
          96% {
            d:path("M12 76H93C99 76 99 76 108 76C117 76 117 76 123 76H128")
          }
          98% {
            d:path("M12 76H93C99 76 99 76 108 76C117 76 117 76 123 76H128")
          }
          100% {
            d:path("M12 76H93C99 76 99 76 108 76C117 76 117 76 123 76H128")
          }
        }
        @keyframes rna {
          0% {
            d:path("M17 92Q17.5 105 18 97L30 85")
          }
          2% {
            d:path("M17 92Q17.5 105 18 97L30 85")
          }
          4% {
            d:path("M17 92Q17.5 105 18 97L30 85")
          }
          6% {
            d:path("M17 92Q17.5 105 18 97L30 85")
          }
          8% {
            d:path("M17 92Q17.5 105 18 97L30 85")
          }
          10% {
            d:path("M17 92Q17.5 105 18 97L30 85")
          }
          12% {
            d:path("M17 92.8Q18.7 105.554 20.4 97.154L32.4 85")
          }
          14% {
            d:path("M17 93.6Q19.9 106.108 22.8 97.308L34.8 85")
          }
          16% {
            d:path("M17 94.4Q21.1 106.662 25.2 97.462L37.2 85")
          }
          18% {
            d:path("M17 95.2Q22.3 107.215 27.6 97.615L39.6 85")
          }
          20% {
            d:path("M17 96Q23.5 107.769 30 97.769L42 85")
          }
          22% {
            d:path("M17 96.8Q24.7 108.323 32.4 97.923L44.4 85")
          }
          24% {
            d:path("M17 97.6Q25.9 108.877 34.8 98.077L46.8 85")
          }
          26% {
            d:path("M17 98.4Q27.1 109.431 37.2 98.231L49.2 85")
          }
          28% {
            d:path("M17 99.2Q28.3 109.985 39.6 98.385L51.6 85")
          }
          30% {
            d:path("M17 100Q29.5 110.538 42 98.538L54 85")
          }
          32% {
            d:path("M17 100.8Q30.7 111.092 44.4 98.692L56.4 85")
          }
          34% {
            d:path("M17 101.6Q31.9 111.646 46.8 98.846L58.8 85")
          }
          36% {
            d:path("M17 102.4Q33.1 112.2 49.2 99L61.2 85")
          }
          38% {
            d:path("M17 103.2Q34.3 112.754 51.6 99.154L63.6 85")
          }
          40% {
            d:path("M17 104Q35.5 113.308 54 99.308L66 85")
          }
          42% {
            d:path("M17 104.8Q36.7 113.862 56.4 99.462L68.4 85")
          }
          44% {
            d:path("M17 105.6Q37.9 114.415 58.8 99.615L70.8 85")
          }
          46% {
            d:path("M17 106.4Q39.1 114.969 61.2 99.769L73.2 85")
          }
          48% {
            d:path("M17 107.2Q40.3 115.523 63.6 99.923L75.6 85")
          }
          50% {
            d:path("M17 108Q41.5 116.077 66 100.077L78 85")
          }
          52% {
            d:path("M17 108.8Q42.7 116.631 68.4 100.231L80.4 85")
          }
          54% {
            d:path("M17 109.6Q43.9 117.185 70.8 100.385L82.8 85")
          }
          56% {
            d:path("M17 110.4Q45.1 117.738 73.2 100.538L85.2 85")
          }
          58% {
            d:path("M17 111.2Q46.3 118.292 75.6 100.692L87.6 85")
          }
          60% {
            d:path("M17 112Q47.5 118.846 78 100.846L90 85")
          }
          62% {
            d:path("M17 112.8Q48.7 119.4 80.4 101L92.4 85")
          }
          64% {
            d:path("M17 113.6Q49.9 119.954 82.8 101.154L94.8 85")
          }
          66% {
            d:path("M17 114.4Q51.1 120.508 85.2 101.308L97.2 85")
          }
          68% {
            d:path("M17 115.2Q52.3 121.062 87.6 101.462L99.6 85")
          }
          70% {
            d:path("M17 116Q53.5 121.615 90 101.615L102 85")
          }
          72% {
            d:path("M17 116.8Q54.7 122.169 92.4 101.769L104.4 85")
          }
          74% {
            d:path("M17 117.6Q55.9 122.723 94.8 101.923L106.8 85")
          }
          76% {
            d:path("M17 118Q56.5 123 96 102L108 85")
          }
          78% {
            d:path("M17 118Q56.5 123 96 102L108 85")
          }
          80% {
            d:path("M17 118Q56.5 123 96 102L108 85")
          }
          82% {
            d:path("M17 118Q56.5 123 96 102L108 85")
          }
          84% {
            d:path("M17 118Q56.5 123 96 102L108 85")
          }
          86% {
            d:path("M17 118Q56.5 123 96 102L108 85")
          }
          88% {
            d:path("M17 118Q56.5 123 96 102L108 85")
          }
          90% {
            d:path("M17 118Q56.5 123 96 102L108 85")
          }
          92% {
            d:path("M17 118Q56.5 123 96 102L108 85")
          }
          94% {
            d:path("M17 118Q56.5 123 96 102L108 85")
          }
          96% {
            d:path("M17 118Q56.5 123 96 102L108 85")
          }
          98% {
            d:path("M17 118Q56.5 123 96 102L108 85")
          }
          100% {
            d:path("M17 118Q56.5 123 96 102L108 85")
          }
        }
        @keyframes polymerase {
          0% {
            transform:translateX(0px);
            opacity:1
          }
          2% {
            transform:translateX(0px);
            opacity:1
          }
          4% {
            transform:translateX(0px);
            opacity:1
          }
          6% {
            transform:translateX(0px);
            opacity:1
          }
          8% {
            transform:translateX(0px);
            opacity:1
          }
          10% {
            transform:translateX(0px);
            opacity:1
          }
          12% {
            transform:translateX(2.4px);
            opacity:1
          }
          14% {
            transform:translateX(4.8px);
            opacity:1
          }
          16% {
            transform:translateX(7.2px);
            opacity:1
          }
          18% {
            transform:translateX(9.6px);
            opacity:1
          }
          20% {
            transform:translateX(12px);
            opacity:1
          }
          22% {
            transform:translateX(14.4px);
            opacity:1
          }
          24% {
            transform:translateX(16.8px);
            opacity:1
          }
          26% {
            transform:translateX(19.2px);
            opacity:1
          }
          28% {
            transform:translateX(21.6px);
            opacity:1
          }
          30% {
            transform:translateX(24px);
            opacity:1
          }
          32% {
            transform:translateX(26.4px);
            opacity:1
          }
          34% {
            transform:translateX(28.8px);
            opacity:1
          }
          36% {
            transform:translateX(31.2px);
            opacity:1
          }
          38% {
            transform:translateX(33.6px);
            opacity:1
          }
          40% {
            transform:translateX(36px);
            opacity:1
          }
          42% {
            transform:translateX(38.4px);
            opacity:1
          }
          44% {
            transform:translateX(40.8px);
            opacity:1
          }
          46% {
            transform:translateX(43.2px);
            opacity:1
          }
          48% {
            transform:translateX(45.6px);
            opacity:1
          }
          50% {
            transform:translateX(48px);
            opacity:1
          }
          52% {
            transform:translateX(50.4px);
            opacity:1
          }
          54% {
            transform:translateX(52.8px);
            opacity:1
          }
          56% {
            transform:translateX(55.2px);
            opacity:1
          }
          58% {
            transform:translateX(57.6px);
            opacity:1
          }
          60% {
            transform:translateX(60px);
            opacity:1
          }
          62% {
            transform:translateX(62.4px);
            opacity:1
          }
          64% {
            transform:translateX(64.8px);
            opacity:1
          }
          66% {
            transform:translateX(67.2px);
            opacity:1
          }
          68% {
            transform:translateX(69.6px);
            opacity:1
          }
          70% {
            transform:translateX(72px);
            opacity:1
          }
          72% {
            transform:translateX(74.4px);
            opacity:1
          }
          74% {
            transform:translateX(76.8px);
            opacity:1
          }
          76% {
            transform:translateX(78px);
            opacity:0.933
          }
          78% {
            transform:translateX(78px);
            opacity:0.8
          }
          80% {
            transform:translateX(78px);
            opacity:0.667
          }
          82% {
            transform:translateX(78px);
            opacity:0.533
          }
          84% {
            transform:translateX(78px);
            opacity:0.4
          }
          86% {
            transform:translateX(78px);
            opacity:0.267
          }
          88% {
            transform:translateX(78px);
            opacity:0.133
          }
          90% {
            transform:translateX(78px);
            opacity:0
          }
          92% {
            transform:translateX(78px);
            opacity:0
          }
          94% {
            transform:translateX(78px);
            opacity:0
          }
          96% {
            transform:translateX(78px);
            opacity:0
          }
          98% {
            transform:translateX(78px);
            opacity:0
          }
          100% {
            transform:translateX(78px);
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
      <svg viewBox="0 0 140 140" role="img" aria-label="DNA Transcription">
        <path class="dna top" d="M12 66H128"/>
        <path class="dna bottom" d="M12 76H128"/>
        <path class="rna" d="M17 118Q56.5 123 96 102L108 85"/>
        <g class="polymerase">
          <ellipse cx="30" cy="71" rx="13" ry="21"/>
          <path class="active" d="M23 83H37"/>
        </g>
        <path class="ink direction" d="M18 29H115M110 25L115 29L110 33"/>
        <text x="13" y="89">3′</text>
        <text x="118" y="89">5′</text>
        <text x="11" y="129">5′ RNA</text>
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

if (!customElements.get("concept-dna-transcription")) {
  customElements.define("concept-dna-transcription", ConceptDnaTranscription);
}
