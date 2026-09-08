// Replication Fork. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptReplicationFork extends HTMLElement {
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
        .parent {
          fill:none;
          stroke:#85a9bb;
          stroke-width:2.5
        }
        .new {
          fill:none;
          stroke:#80d4a5;
          stroke-width:2.5;
          stroke-linecap:butt
        }
        .rung {
          stroke:#657e84;
          stroke-width:1.5;
          opacity:0
        }
        .primers {
          fill:none;
          stroke:#80d4a5;
          stroke-width:3;
          animation:replace 12s infinite
        }
        .pairs {
          fill:none;
          stroke:#a1b6a6;
          stroke-width:1
        }
        .direction {
          stroke:#cdb676;
          opacity:.65
        }
        text {
          fill:#b5cbb8;
          font:8px serif
        }
        @keyframes replace {
          0%,77% {
            stroke:#e9c57f
          }
          89%,100% {
            stroke:#80d4a5
          }
        }
        .parent-top {
          animation:parent-top 12s linear infinite
        }
        @keyframes parent-top {
          0% {
            d:path("M15 36L65 65H128")
          }
          2% {
            d:path("M15 36L65 65H128")
          }
          4% {
            d:path("M15 36L65 65H128")
          }
          6% {
            d:path("M15 36L65 65H128")
          }
          8% {
            d:path("M15 36L65 65H128")
          }
          10% {
            d:path("M15 36L65 65H128")
          }
          12% {
            d:path("M15 36L66.333 65H128")
          }
          14% {
            d:path("M15 36L67.667 65H128")
          }
          16% {
            d:path("M15 36L69 65H128")
          }
          18% {
            d:path("M15 36L70.333 65H128")
          }
          20% {
            d:path("M15 36L71.667 65H128")
          }
          22% {
            d:path("M15 36L73 65H128")
          }
          24% {
            d:path("M15 36L74.333 65H128")
          }
          26% {
            d:path("M15 36L75.667 65H128")
          }
          28% {
            d:path("M15 36L77 65H128")
          }
          30% {
            d:path("M15 36L78.333 65H128")
          }
          32% {
            d:path("M15 36L79.667 65H128")
          }
          34% {
            d:path("M15 36L81 65H128")
          }
          36% {
            d:path("M15 36L82.333 65H128")
          }
          38% {
            d:path("M15 36L83.667 65H128")
          }
          40% {
            d:path("M15 36L85 65H128")
          }
          42% {
            d:path("M15 36L86.333 65H128")
          }
          44% {
            d:path("M15 36L87.667 65H128")
          }
          46% {
            d:path("M15 36L89 65H128")
          }
          48% {
            d:path("M15 36L90.333 65H128")
          }
          50% {
            d:path("M15 36L91.667 65H128")
          }
          52% {
            d:path("M15 36L93 65H128")
          }
          54% {
            d:path("M15 36L94.333 65H128")
          }
          56% {
            d:path("M15 36L95.667 65H128")
          }
          58% {
            d:path("M15 36L97 65H128")
          }
          60% {
            d:path("M15 36L98.333 65H128")
          }
          62% {
            d:path("M15 36L99.667 65H128")
          }
          64% {
            d:path("M15 36L101 65H128")
          }
          66% {
            d:path("M15 36L102.333 65H128")
          }
          68% {
            d:path("M15 36L103.667 65H128")
          }
          70% {
            d:path("M15 36L105 65H128")
          }
          72% {
            d:path("M15 36L105 65H128")
          }
          74% {
            d:path("M15 36L105 65H128")
          }
          76% {
            d:path("M15 36L105 65H128")
          }
          78% {
            d:path("M15 36L105 65H128")
          }
          80% {
            d:path("M15 36L105 65H128")
          }
          82% {
            d:path("M15 36L105 65H128")
          }
          84% {
            d:path("M15 36L105 65H128")
          }
          86% {
            d:path("M15 36L105 65H128")
          }
          88% {
            d:path("M15 36L105 65H128")
          }
          90% {
            d:path("M15 36L105 65H128")
          }
          92% {
            d:path("M15 36L105 65H128")
          }
          94% {
            d:path("M15 36L105 65H128")
          }
          96% {
            d:path("M15 36L105 65H128")
          }
          98% {
            d:path("M15 36L105 65H128")
          }
          100% {
            d:path("M15 36L105 65H128")
          }
        }
        .parent-bottom {
          animation:parent-bottom 12s linear infinite
        }
        @keyframes parent-bottom {
          0% {
            d:path("M15 104L65 75H128")
          }
          2% {
            d:path("M15 104L65 75H128")
          }
          4% {
            d:path("M15 104L65 75H128")
          }
          6% {
            d:path("M15 104L65 75H128")
          }
          8% {
            d:path("M15 104L65 75H128")
          }
          10% {
            d:path("M15 104L65 75H128")
          }
          12% {
            d:path("M15 104L66.333 75H128")
          }
          14% {
            d:path("M15 104L67.667 75H128")
          }
          16% {
            d:path("M15 104L69 75H128")
          }
          18% {
            d:path("M15 104L70.333 75H128")
          }
          20% {
            d:path("M15 104L71.667 75H128")
          }
          22% {
            d:path("M15 104L73 75H128")
          }
          24% {
            d:path("M15 104L74.333 75H128")
          }
          26% {
            d:path("M15 104L75.667 75H128")
          }
          28% {
            d:path("M15 104L77 75H128")
          }
          30% {
            d:path("M15 104L78.333 75H128")
          }
          32% {
            d:path("M15 104L79.667 75H128")
          }
          34% {
            d:path("M15 104L81 75H128")
          }
          36% {
            d:path("M15 104L82.333 75H128")
          }
          38% {
            d:path("M15 104L83.667 75H128")
          }
          40% {
            d:path("M15 104L85 75H128")
          }
          42% {
            d:path("M15 104L86.333 75H128")
          }
          44% {
            d:path("M15 104L87.667 75H128")
          }
          46% {
            d:path("M15 104L89 75H128")
          }
          48% {
            d:path("M15 104L90.333 75H128")
          }
          50% {
            d:path("M15 104L91.667 75H128")
          }
          52% {
            d:path("M15 104L93 75H128")
          }
          54% {
            d:path("M15 104L94.333 75H128")
          }
          56% {
            d:path("M15 104L95.667 75H128")
          }
          58% {
            d:path("M15 104L97 75H128")
          }
          60% {
            d:path("M15 104L98.333 75H128")
          }
          62% {
            d:path("M15 104L99.667 75H128")
          }
          64% {
            d:path("M15 104L101 75H128")
          }
          66% {
            d:path("M15 104L102.333 75H128")
          }
          68% {
            d:path("M15 104L103.667 75H128")
          }
          70% {
            d:path("M15 104L105 75H128")
          }
          72% {
            d:path("M15 104L105 75H128")
          }
          74% {
            d:path("M15 104L105 75H128")
          }
          76% {
            d:path("M15 104L105 75H128")
          }
          78% {
            d:path("M15 104L105 75H128")
          }
          80% {
            d:path("M15 104L105 75H128")
          }
          82% {
            d:path("M15 104L105 75H128")
          }
          84% {
            d:path("M15 104L105 75H128")
          }
          86% {
            d:path("M15 104L105 75H128")
          }
          88% {
            d:path("M15 104L105 75H128")
          }
          90% {
            d:path("M15 104L105 75H128")
          }
          92% {
            d:path("M15 104L105 75H128")
          }
          94% {
            d:path("M15 104L105 75H128")
          }
          96% {
            d:path("M15 104L105 75H128")
          }
          98% {
            d:path("M15 104L105 75H128")
          }
          100% {
            d:path("M15 104L105 75H128")
          }
        }
        .leading {
          animation:leading 12s linear infinite
        }
        @keyframes leading {
          0% {
            d:path("M15 42L51 62.88")
          }
          2% {
            d:path("M15 42L51 62.88")
          }
          4% {
            d:path("M15 42L51 62.88")
          }
          6% {
            d:path("M15 42L51 62.88")
          }
          8% {
            d:path("M15 42L51 62.88")
          }
          10% {
            d:path("M15 42L51 62.88")
          }
          12% {
            d:path("M15 42L52.333 63.091")
          }
          14% {
            d:path("M15 42L53.667 63.291")
          }
          16% {
            d:path("M15 42L55 63.481")
          }
          18% {
            d:path("M15 42L56.333 63.663")
          }
          20% {
            d:path("M15 42L57.667 63.835")
          }
          22% {
            d:path("M15 42L59 64")
          }
          24% {
            d:path("M15 42L60.333 64.157")
          }
          26% {
            d:path("M15 42L61.667 64.308")
          }
          28% {
            d:path("M15 42L63 64.452")
          }
          30% {
            d:path("M15 42L64.333 64.589")
          }
          32% {
            d:path("M15 42L65.667 64.722")
          }
          34% {
            d:path("M15 42L67 64.848")
          }
          36% {
            d:path("M15 42L68.333 64.97")
          }
          38% {
            d:path("M15 42L69.667 65.087")
          }
          40% {
            d:path("M15 42L71 65.2")
          }
          42% {
            d:path("M15 42L72.333 65.308")
          }
          44% {
            d:path("M15 42L73.667 65.413")
          }
          46% {
            d:path("M15 42L75 65.514")
          }
          48% {
            d:path("M15 42L76.333 65.611")
          }
          50% {
            d:path("M15 42L77.667 65.704")
          }
          52% {
            d:path("M15 42L79 65.795")
          }
          54% {
            d:path("M15 42L80.333 65.882")
          }
          56% {
            d:path("M15 42L81.667 65.967")
          }
          58% {
            d:path("M15 42L83 66.049")
          }
          60% {
            d:path("M15 42L84.333 66.128")
          }
          62% {
            d:path("M15 42L85.667 66.205")
          }
          64% {
            d:path("M15 42L87 66.279")
          }
          66% {
            d:path("M15 42L88.333 66.351")
          }
          68% {
            d:path("M15 42L89.667 66.421")
          }
          70% {
            d:path("M15 42L91 66.489")
          }
          72% {
            d:path("M15 42L91 66.489")
          }
          74% {
            d:path("M15 42L91 66.489")
          }
          76% {
            d:path("M15 42L91 66.489")
          }
          78% {
            d:path("M15 42L91 66.489")
          }
          80% {
            d:path("M15 42L91 66.489")
          }
          82% {
            d:path("M15 42L91 66.489")
          }
          84% {
            d:path("M15 42L91 66.489")
          }
          86% {
            d:path("M15 42L91 66.489")
          }
          88% {
            d:path("M15 42L91 66.489")
          }
          90% {
            d:path("M15 42L91 66.489")
          }
          92% {
            d:path("M15 42L91 66.489")
          }
          94% {
            d:path("M15 42L91 66.489")
          }
          96% {
            d:path("M15 42L91 66.489")
          }
          98% {
            d:path("M15 42L91 66.489")
          }
          100% {
            d:path("M15 42L91 66.489")
          }
        }
        .old-lag {
          animation:old-lag 12s linear infinite
        }
        @keyframes old-lag {
          0% {
            d:path("M15 98L33 87.56")
          }
          2% {
            d:path("M15 98L33 87.56")
          }
          4% {
            d:path("M15 98L33 87.56")
          }
          6% {
            d:path("M15 98L33 87.56")
          }
          8% {
            d:path("M15 98L33 87.56")
          }
          10% {
            d:path("M15 98L33 87.56")
          }
          12% {
            d:path("M15 98L33 87.831")
          }
          14% {
            d:path("M15 98L33 88.089")
          }
          16% {
            d:path("M15 98L33 88.333")
          }
          18% {
            d:path("M15 98L33 88.566")
          }
          20% {
            d:path("M15 98L33 88.788")
          }
          22% {
            d:path("M15 98L33 89")
          }
          24% {
            d:path("M15 98L33 89.202")
          }
          26% {
            d:path("M15 98L33 89.396")
          }
          28% {
            d:path("M15 98L33 89.581")
          }
          30% {
            d:path("M15 98L33 89.758")
          }
          32% {
            d:path("M15 98L33 89.928")
          }
          34% {
            d:path("M15 98L33 90.091")
          }
          36% {
            d:path("M15 98L33 90.248")
          }
          38% {
            d:path("M15 98L33 90.398")
          }
          40% {
            d:path("M15 98L33 90.543")
          }
          42% {
            d:path("M15 98L33 90.682")
          }
          44% {
            d:path("M15 98L33 90.817")
          }
          46% {
            d:path("M15 98L33 90.946")
          }
          48% {
            d:path("M15 98L33 91.071")
          }
          50% {
            d:path("M15 98L33 91.191")
          }
          52% {
            d:path("M15 98L33 91.308")
          }
          54% {
            d:path("M15 98L33 91.42")
          }
          56% {
            d:path("M15 98L33 91.529")
          }
          58% {
            d:path("M15 98L33 91.634")
          }
          60% {
            d:path("M15 98L33 91.736")
          }
          62% {
            d:path("M15 98L33 91.835")
          }
          64% {
            d:path("M15 98L33 91.93")
          }
          66% {
            d:path("M15 98L33 92.023")
          }
          68% {
            d:path("M15 98L33 92.113")
          }
          70% {
            d:path("M15 98L33 92.2")
          }
          72% {
            d:path("M15 98L33 92.2")
          }
          74% {
            d:path("M15 98L33 92.2")
          }
          76% {
            d:path("M15 98L33 92.2")
          }
          78% {
            d:path("M15 98L33 92.2")
          }
          80% {
            d:path("M15 98L33 92.2")
          }
          82% {
            d:path("M15 98L33 92.2")
          }
          84% {
            d:path("M15 98L33 92.2")
          }
          86% {
            d:path("M15 98L33 92.2")
          }
          88% {
            d:path("M15 98L33 92.2")
          }
          90% {
            d:path("M15 98L33 92.2")
          }
          92% {
            d:path("M15 98L33 92.2")
          }
          94% {
            d:path("M15 98L33 92.2")
          }
          96% {
            d:path("M15 98L33 92.2")
          }
          98% {
            d:path("M15 98L33 92.2")
          }
          100% {
            d:path("M15 98L33 92.2")
          }
        }
        .fragment1 {
          animation:fragment1 12s linear infinite
        }
        @keyframes fragment1 {
          0% {
            d:path("M57 73.64L57 73.64");
            opacity:0
          }
          2% {
            d:path("M57 73.64L57 73.64");
            opacity:0
          }
          4% {
            d:path("M57 73.64L57 73.64");
            opacity:0
          }
          6% {
            d:path("M57 73.64L57 73.64");
            opacity:0
          }
          8% {
            d:path("M57 73.64L57 73.64");
            opacity:0
          }
          10% {
            d:path("M57 73.64L57 73.64");
            opacity:0
          }
          12% {
            d:path("M57 74.273L57 74.273");
            opacity:0
          }
          14% {
            d:path("M57 74.873L57 74.873");
            opacity:0
          }
          16% {
            d:path("M57 75.444L57 75.444");
            opacity:0
          }
          18% {
            d:path("M57 75.988L57 75.988");
            opacity:0
          }
          20% {
            d:path("M57 76.506L57 76.506");
            opacity:0
          }
          22% {
            d:path("M57 77L57 77");
            opacity:0
          }
          24% {
            d:path("M57 77.472L57 77.472");
            opacity:0
          }
          26% {
            d:path("M57 77.923L57 77.923");
            opacity:0
          }
          28% {
            d:path("M57 78.355L57 78.355");
            opacity:0
          }
          30% {
            d:path("M57 78.768L57 78.768");
            opacity:1
          }
          32% {
            d:path("M57 79.165L54.8 80.152");
            opacity:1
          }
          34% {
            d:path("M57 79.545L52.6 81.479");
            opacity:1
          }
          36% {
            d:path("M57 79.911L50.4 82.753");
            opacity:1
          }
          38% {
            d:path("M57 80.262L48.2 83.979");
            opacity:1
          }
          40% {
            d:path("M57 80.6L46 85.157");
            opacity:1
          }
          42% {
            d:path("M57 80.925L43.8 86.292");
            opacity:1
          }
          44% {
            d:path("M57 81.239L41.6 87.384");
            opacity:1
          }
          46% {
            d:path("M57 81.541L39.4 88.438");
            opacity:1
          }
          48% {
            d:path("M57 81.832L37.2 89.454");
            opacity:1
          }
          50% {
            d:path("M57 82.113L35 90.435");
            opacity:1
          }
          52% {
            d:path("M57 82.385L35 90.564");
            opacity:1
          }
          54% {
            d:path("M57 82.647L35 90.689");
            opacity:1
          }
          56% {
            d:path("M57 82.901L35 90.81");
            opacity:1
          }
          58% {
            d:path("M57 83.146L35 90.927");
            opacity:1
          }
          60% {
            d:path("M57 83.384L35 91.04");
            opacity:1
          }
          62% {
            d:path("M57 83.614L35 91.15");
            opacity:1
          }
          64% {
            d:path("M57 83.837L35 91.256");
            opacity:1
          }
          66% {
            d:path("M57 84.053L35 91.359");
            opacity:1
          }
          68% {
            d:path("M57 84.263L35 91.459");
            opacity:1
          }
          70% {
            d:path("M57 84.467L35 91.556");
            opacity:1
          }
          72% {
            d:path("M57 84.467L35 91.556");
            opacity:1
          }
          74% {
            d:path("M57 84.467L35 91.556");
            opacity:1
          }
          76% {
            d:path("M57 84.467L35 91.556");
            opacity:1
          }
          78% {
            d:path("M57 84.467L35 91.556");
            opacity:1
          }
          80% {
            d:path("M57 84.467L35 91.556");
            opacity:1
          }
          82% {
            d:path("M57 84.467L35 91.556");
            opacity:1
          }
          84% {
            d:path("M57 84.467L35 91.556");
            opacity:1
          }
          86% {
            d:path("M57 84.467L35 91.556");
            opacity:1
          }
          88% {
            d:path("M57 84.467L35 91.556");
            opacity:1
          }
          90% {
            d:path("M57 84.467L35 91.556");
            opacity:1
          }
          92% {
            d:path("M57 84.467L35 91.556");
            opacity:1
          }
          94% {
            d:path("M57 84.467L35 91.556");
            opacity:1
          }
          96% {
            d:path("M57 84.467L35 91.556");
            opacity:1
          }
          98% {
            d:path("M57 84.467L35 91.556");
            opacity:1
          }
          100% {
            d:path("M57 84.467L35 91.556");
            opacity:1
          }
        }
        .fragment2 {
          animation:fragment2 12s linear infinite
        }
        @keyframes fragment2 {
          0% {
            d:path("M81 59.72L81 59.72");
            opacity:0
          }
          2% {
            d:path("M81 59.72L81 59.72");
            opacity:0
          }
          4% {
            d:path("M81 59.72L81 59.72");
            opacity:0
          }
          6% {
            d:path("M81 59.72L81 59.72");
            opacity:0
          }
          8% {
            d:path("M81 59.72L81 59.72");
            opacity:0
          }
          10% {
            d:path("M81 59.72L81 59.72");
            opacity:0
          }
          12% {
            d:path("M81 60.714L81 60.714");
            opacity:0
          }
          14% {
            d:path("M81 61.658L81 61.658");
            opacity:0
          }
          16% {
            d:path("M81 62.556L81 62.556");
            opacity:0
          }
          18% {
            d:path("M81 63.41L81 63.41");
            opacity:0
          }
          20% {
            d:path("M81 64.224L81 64.224");
            opacity:0
          }
          22% {
            d:path("M81 65L81 65");
            opacity:0
          }
          24% {
            d:path("M81 65.742L81 65.742");
            opacity:0
          }
          26% {
            d:path("M81 66.451L81 66.451");
            opacity:0
          }
          28% {
            d:path("M81 67.129L81 67.129");
            opacity:0
          }
          30% {
            d:path("M81 67.779L81 67.779");
            opacity:0
          }
          32% {
            d:path("M81 68.402L81 68.402");
            opacity:0
          }
          34% {
            d:path("M81 69L81 69");
            opacity:0
          }
          36% {
            d:path("M81 69.574L81 69.574");
            opacity:0
          }
          38% {
            d:path("M81 70.126L81 70.126");
            opacity:0
          }
          40% {
            d:path("M81 70.657L81 70.657");
            opacity:0
          }
          42% {
            d:path("M81 71.168L81 71.168");
            opacity:0
          }
          44% {
            d:path("M81 71.661L81 71.661");
            opacity:0
          }
          46% {
            d:path("M81 72.135L81 72.135");
            opacity:0
          }
          48% {
            d:path("M81 72.593L81 72.593");
            opacity:0
          }
          50% {
            d:path("M81 73.035L81 73.035");
            opacity:0
          }
          52% {
            d:path("M81 73.462L81 73.462");
            opacity:0
          }
          54% {
            d:path("M81 73.874L80 74.239");
            opacity:1
          }
          56% {
            d:path("M81 74.273L78 75.351");
            opacity:1
          }
          58% {
            d:path("M81 74.659L76 76.427");
            opacity:1
          }
          60% {
            d:path("M81 75.032L74 77.468");
            opacity:1
          }
          62% {
            d:path("M81 75.394L72 78.476");
            opacity:1
          }
          64% {
            d:path("M81 75.744L70 79.453");
            opacity:1
          }
          66% {
            d:path("M81 76.084L68 80.401");
            opacity:1
          }
          68% {
            d:path("M81 76.414L66 81.32");
            opacity:1
          }
          70% {
            d:path("M81 76.733L64 82.211");
            opacity:1
          }
          72% {
            d:path("M81 76.733L62 82.856");
            opacity:1
          }
          74% {
            d:path("M81 76.733L61 83.178");
            opacity:1
          }
          76% {
            d:path("M81 76.733L61 83.178");
            opacity:1
          }
          78% {
            d:path("M81 76.733L61 83.178");
            opacity:1
          }
          80% {
            d:path("M81 76.733L61 83.178");
            opacity:1
          }
          82% {
            d:path("M81 76.733L61 83.178");
            opacity:1
          }
          84% {
            d:path("M81 76.733L61 83.178");
            opacity:1
          }
          86% {
            d:path("M81 76.733L61 83.178");
            opacity:1
          }
          88% {
            d:path("M81 76.733L61 83.178");
            opacity:1
          }
          90% {
            d:path("M81 76.733L61 83.178");
            opacity:1
          }
          92% {
            d:path("M81 76.733L61 83.178");
            opacity:1
          }
          94% {
            d:path("M81 76.733L61 83.178");
            opacity:1
          }
          96% {
            d:path("M81 76.733L61 83.178");
            opacity:1
          }
          98% {
            d:path("M81 76.733L61 83.178");
            opacity:1
          }
          100% {
            d:path("M81 76.733L61 83.178");
            opacity:1
          }
        }
        .primer1 {
          animation:primer1 12s linear infinite
        }
        @keyframes primer1 {
          0% {
            d:path("M57 73.64L61 71.32");
            opacity:0
          }
          2% {
            d:path("M57 73.64L61 71.32");
            opacity:0
          }
          4% {
            d:path("M57 73.64L61 71.32");
            opacity:0
          }
          6% {
            d:path("M57 73.64L61 71.32");
            opacity:0
          }
          8% {
            d:path("M57 73.64L61 71.32");
            opacity:0
          }
          10% {
            d:path("M57 73.64L61 71.32");
            opacity:0
          }
          12% {
            d:path("M57 74.273L61 72.013");
            opacity:0
          }
          14% {
            d:path("M57 74.873L61 72.671");
            opacity:0
          }
          16% {
            d:path("M57 75.444L61 73.296");
            opacity:0
          }
          18% {
            d:path("M57 75.988L61 73.892");
            opacity:0
          }
          20% {
            d:path("M57 76.506L61 74.459");
            opacity:0
          }
          22% {
            d:path("M57 77L61 75");
            opacity:0
          }
          24% {
            d:path("M57 77.472L61 75.517");
            opacity:0
          }
          26% {
            d:path("M57 77.923L61 76.011");
            opacity:0
          }
          28% {
            d:path("M57 78.355L61 76.484");
            opacity:1
          }
          30% {
            d:path("M57 78.768L61 76.937");
            opacity:1
          }
          32% {
            d:path("M57 79.165L61 77.371");
            opacity:1
          }
          34% {
            d:path("M57 79.545L61 77.788");
            opacity:1
          }
          36% {
            d:path("M57 79.911L61 78.188");
            opacity:1
          }
          38% {
            d:path("M57 80.262L61 78.573");
            opacity:1
          }
          40% {
            d:path("M57 80.6L61 78.943");
            opacity:1
          }
          42% {
            d:path("M57 80.925L61 79.299");
            opacity:1
          }
          44% {
            d:path("M57 81.239L61 79.642");
            opacity:1
          }
          46% {
            d:path("M57 81.541L61 79.973");
            opacity:1
          }
          48% {
            d:path("M57 81.832L61 80.292");
            opacity:1
          }
          50% {
            d:path("M57 82.113L61 80.6");
            opacity:1
          }
          52% {
            d:path("M57 82.385L61 80.897");
            opacity:1
          }
          54% {
            d:path("M57 82.647L61 81.185");
            opacity:1
          }
          56% {
            d:path("M57 82.901L61 81.463");
            opacity:1
          }
          58% {
            d:path("M57 83.146L61 81.732");
            opacity:1
          }
          60% {
            d:path("M57 83.384L61 81.992");
            opacity:1
          }
          62% {
            d:path("M57 83.614L61 82.244");
            opacity:1
          }
          64% {
            d:path("M57 83.837L61 82.488");
            opacity:1
          }
          66% {
            d:path("M57 84.053L61 82.725");
            opacity:1
          }
          68% {
            d:path("M57 84.263L61 82.955");
            opacity:1
          }
          70% {
            d:path("M57 84.467L61 83.178");
            opacity:1
          }
          72% {
            d:path("M57 84.467L61 83.178");
            opacity:1
          }
          74% {
            d:path("M57 84.467L61 83.178");
            opacity:1
          }
          76% {
            d:path("M57 84.467L61 83.178");
            opacity:1
          }
          78% {
            d:path("M57 84.467L61 83.178");
            opacity:1
          }
          80% {
            d:path("M57 84.467L61 83.178");
            opacity:1
          }
          82% {
            d:path("M57 84.467L61 83.178");
            opacity:1
          }
          84% {
            d:path("M57 84.467L61 83.178");
            opacity:1
          }
          86% {
            d:path("M57 84.467L61 83.178");
            opacity:1
          }
          88% {
            d:path("M57 84.467L61 83.178");
            opacity:1
          }
          90% {
            d:path("M57 84.467L61 83.178");
            opacity:1
          }
          92% {
            d:path("M57 84.467L61 83.178");
            opacity:1
          }
          94% {
            d:path("M57 84.467L61 83.178");
            opacity:1
          }
          96% {
            d:path("M57 84.467L61 83.178");
            opacity:1
          }
          98% {
            d:path("M57 84.467L61 83.178");
            opacity:1
          }
          100% {
            d:path("M57 84.467L61 83.178");
            opacity:1
          }
        }
        .primer2 {
          animation:primer2 12s linear infinite
        }
        @keyframes primer2 {
          0% {
            d:path("M81 59.72L85 57.4");
            opacity:0
          }
          2% {
            d:path("M81 59.72L85 57.4");
            opacity:0
          }
          4% {
            d:path("M81 59.72L85 57.4");
            opacity:0
          }
          6% {
            d:path("M81 59.72L85 57.4");
            opacity:0
          }
          8% {
            d:path("M81 59.72L85 57.4");
            opacity:0
          }
          10% {
            d:path("M81 59.72L85 57.4");
            opacity:0
          }
          12% {
            d:path("M81 60.714L85 58.455");
            opacity:0
          }
          14% {
            d:path("M81 61.658L85 59.456");
            opacity:0
          }
          16% {
            d:path("M81 62.556L85 60.407");
            opacity:0
          }
          18% {
            d:path("M81 63.41L85 61.313");
            opacity:0
          }
          20% {
            d:path("M81 64.224L85 62.176");
            opacity:0
          }
          22% {
            d:path("M81 65L85 63");
            opacity:0
          }
          24% {
            d:path("M81 65.742L85 63.787");
            opacity:0
          }
          26% {
            d:path("M81 66.451L85 64.538");
            opacity:0
          }
          28% {
            d:path("M81 67.129L85 65.258");
            opacity:0
          }
          30% {
            d:path("M81 67.779L85 65.947");
            opacity:0
          }
          32% {
            d:path("M81 68.402L85 66.608");
            opacity:0
          }
          34% {
            d:path("M81 69L85 67.242");
            opacity:0
          }
          36% {
            d:path("M81 69.574L85 67.851");
            opacity:0
          }
          38% {
            d:path("M81 70.126L85 68.437");
            opacity:0
          }
          40% {
            d:path("M81 70.657L85 69");
            opacity:0
          }
          42% {
            d:path("M81 71.168L85 69.542");
            opacity:0
          }
          44% {
            d:path("M81 71.661L85 70.064");
            opacity:0
          }
          46% {
            d:path("M81 72.135L85 70.568");
            opacity:0
          }
          48% {
            d:path("M81 72.593L85 71.053");
            opacity:0
          }
          50% {
            d:path("M81 73.035L85 71.522");
            opacity:0
          }
          52% {
            d:path("M81 73.462L85 71.974");
            opacity:1
          }
          54% {
            d:path("M81 73.874L85 72.412");
            opacity:1
          }
          56% {
            d:path("M81 74.273L85 72.835");
            opacity:1
          }
          58% {
            d:path("M81 74.659L85 73.244");
            opacity:1
          }
          60% {
            d:path("M81 75.032L85 73.64");
            opacity:1
          }
          62% {
            d:path("M81 75.394L85 74.024");
            opacity:1
          }
          64% {
            d:path("M81 75.744L85 74.395");
            opacity:1
          }
          66% {
            d:path("M81 76.084L85 74.756");
            opacity:1
          }
          68% {
            d:path("M81 76.414L85 75.105");
            opacity:1
          }
          70% {
            d:path("M81 76.733L85 75.444");
            opacity:1
          }
          72% {
            d:path("M81 76.733L85 75.444");
            opacity:1
          }
          74% {
            d:path("M81 76.733L85 75.444");
            opacity:1
          }
          76% {
            d:path("M81 76.733L85 75.444");
            opacity:1
          }
          78% {
            d:path("M81 76.733L85 75.444");
            opacity:1
          }
          80% {
            d:path("M81 76.733L85 75.444");
            opacity:1
          }
          82% {
            d:path("M81 76.733L85 75.444");
            opacity:1
          }
          84% {
            d:path("M81 76.733L85 75.444");
            opacity:1
          }
          86% {
            d:path("M81 76.733L85 75.444");
            opacity:1
          }
          88% {
            d:path("M81 76.733L85 75.444");
            opacity:1
          }
          90% {
            d:path("M81 76.733L85 75.444");
            opacity:1
          }
          92% {
            d:path("M81 76.733L85 75.444");
            opacity:1
          }
          94% {
            d:path("M81 76.733L85 75.444");
            opacity:1
          }
          96% {
            d:path("M81 76.733L85 75.444");
            opacity:1
          }
          98% {
            d:path("M81 76.733L85 75.444");
            opacity:1
          }
          100% {
            d:path("M81 76.733L85 75.444");
            opacity:1
          }
        }
        .join {
          animation:join 12s linear infinite
        }
        @keyframes join {
          0% {
            d:path("M35 86.4L35 86.4")
          }
          2% {
            d:path("M35 86.4L35 86.4")
          }
          4% {
            d:path("M35 86.4L35 86.4")
          }
          6% {
            d:path("M35 86.4L35 86.4")
          }
          8% {
            d:path("M35 86.4L35 86.4")
          }
          10% {
            d:path("M35 86.4L35 86.4")
          }
          12% {
            d:path("M35 86.701L35 86.701")
          }
          14% {
            d:path("M35 86.987L35 86.987")
          }
          16% {
            d:path("M35 87.259L35 87.259")
          }
          18% {
            d:path("M35 87.518L35 87.518")
          }
          20% {
            d:path("M35 87.765L35 87.765")
          }
          22% {
            d:path("M35 88L35 88")
          }
          24% {
            d:path("M35 88.225L35 88.225")
          }
          26% {
            d:path("M35 88.44L35 88.44")
          }
          28% {
            d:path("M35 88.645L35 88.645")
          }
          30% {
            d:path("M35 88.842L35 88.842")
          }
          32% {
            d:path("M35 89.031L35 89.031")
          }
          34% {
            d:path("M35 89.212L35 89.212")
          }
          36% {
            d:path("M35 89.386L35 89.386")
          }
          38% {
            d:path("M35 89.553L35 89.553")
          }
          40% {
            d:path("M35 89.714L35 89.714")
          }
          42% {
            d:path("M35 89.869L35 89.869")
          }
          44% {
            d:path("M35 90.018L35 90.018")
          }
          46% {
            d:path("M35 90.162L35 90.162")
          }
          48% {
            d:path("M35 90.301L35 90.301")
          }
          50% {
            d:path("M35 90.435L35 90.435")
          }
          52% {
            d:path("M35 90.564L35 90.564")
          }
          54% {
            d:path("M35 90.689L35 90.689")
          }
          56% {
            d:path("M35 90.81L35 90.81")
          }
          58% {
            d:path("M35 90.927L35 90.927")
          }
          60% {
            d:path("M35 91.04L35 91.04")
          }
          62% {
            d:path("M35 91.15L35 91.15")
          }
          64% {
            d:path("M35 91.256L35 91.256")
          }
          66% {
            d:path("M35 91.359L35 91.359")
          }
          68% {
            d:path("M35 91.459L35 91.459")
          }
          70% {
            d:path("M35 91.556L35 91.556")
          }
          72% {
            d:path("M35 91.556L35 91.556")
          }
          74% {
            d:path("M35 91.556L35 91.556")
          }
          76% {
            d:path("M35 91.556L35 91.556")
          }
          78% {
            d:path("M35 91.556L35 91.556")
          }
          80% {
            d:path("M35 91.556L35 91.556")
          }
          82% {
            d:path("M35 91.556L34.6 91.684")
          }
          84% {
            d:path("M35 91.556L34.2 91.813")
          }
          86% {
            d:path("M35 91.556L33.8 91.942")
          }
          88% {
            d:path("M35 91.556L33.4 92.071")
          }
          90% {
            d:path("M35 91.556L33 92.2")
          }
          92% {
            d:path("M35 91.556L33 92.2")
          }
          94% {
            d:path("M35 91.556L33 92.2")
          }
          96% {
            d:path("M35 91.556L33 92.2")
          }
          98% {
            d:path("M35 91.556L33 92.2")
          }
          100% {
            d:path("M35 91.556L33 92.2")
          }
        }
        .pairs {
          animation:pairs 12s linear infinite
        }
        @keyframes pairs {
          0% {
            d:path("M20 38.9v6M30 44.7v6M40 50.5v6M50 56.3v6")
          }
          2% {
            d:path("M20 38.9v6M30 44.7v6M40 50.5v6M50 56.3v6")
          }
          4% {
            d:path("M20 38.9v6M30 44.7v6M40 50.5v6M50 56.3v6")
          }
          6% {
            d:path("M20 38.9v6M30 44.7v6M40 50.5v6M50 56.3v6")
          }
          8% {
            d:path("M20 38.9v6M30 44.7v6M40 50.5v6M50 56.3v6")
          }
          10% {
            d:path("M20 38.9v6M30 44.7v6M40 50.5v6M50 56.3v6")
          }
          12% {
            d:path("M20 38.825v6M30 44.474v6M40 50.123v6M50 55.773v6")
          }
          14% {
            d:path("M20 38.753v6M30 44.259v6M40 49.766v6M50 55.272v6")
          }
          16% {
            d:path("M20 38.685v6M30 44.056v6M40 49.426v6M50 54.796v6")
          }
          18% {
            d:path("M20 38.62v6M30 43.861v6M40 49.102v6M50 54.343v6")
          }
          20% {
            d:path("M20 38.559v6M30 43.676v6M40 48.794v6M50 53.912v6")
          }
          22% {
            d:path("M20 38.5v6M30 43.5v6M40 48.5v6M50 53.5v6")
          }
          24% {
            d:path("M20 38.444v6M30 43.331v6M40 48.219v6M50 53.107v6M60 57.994v6")
          }
          26% {
            d:path("M20 38.39v6M30 43.17v6M40 47.951v6M50 52.731v6M60 57.511v6")
          }
          28% {
            d:path("M20 38.339v6M30 43.016v6M40 47.694v6M50 52.371v6M60 57.048v6")
          }
          30% {
            d:path("M20 38.289v6M30 42.868v6M40 47.447v6M50 52.026v6M60 56.605v6")
          }
          32% {
            d:path("M20 38.242v6M30 42.727v6M40 47.211v6M50 51.696v6M60 56.18v6")
          }
          34% {
            d:path("M20 38.197v6M30 42.591v6M40 46.985v6M50 51.379v6M60 55.773v6")
          }
          36% {
            d:path("M20 38.153v6M30 42.46v6M40 46.767v6M50 51.074v6M60 55.381v6")
          }
          38% {
            d:path("M20 38.112v6M30 42.335v6M40 46.558v6M50 50.782v6M60 55.005v6")
          }
          40% {
            d:path("M20 38.071v6M30 42.214v6M40 46.357v6M50 50.5v6M60 54.643v6M70 58.786v6")
          }
          42% {
            d:path("M20 38.033v6M30 42.098v6M40 46.164v6M50 50.229v6M60 54.294v6M70 58.36v6")
          }
          44% {
            d:path("M20 37.995v6M30 41.986v6M40 45.977v6M50 49.968v6M60 53.959v6M70 57.95v6")
          }
          46% {
            d:path("M20 37.959v6M30 41.878v6M40 45.797v6M50 49.716v6M60 53.635v6M70 57.554v6")
          }
          48% {
            d:path("M20 37.925v6M30 41.774v6M40 45.624v6M50 49.473v6M60 53.323v6M70 57.173v6")
          }
          50% {
            d:path("M20 37.891v6M30 41.674v6M40 45.457v6M50 49.239v6M60 53.022v6M70 56.804v6")
          }
          52% {
            d:path("M20 37.859v6M30 41.577v6M40 45.295v6M50 49.013v6M60 52.731v6M70 56.449v6")
          }
          54% {
            d:path("M20 37.828v6M30 41.483v6M40 45.139v6M50 48.794v6M60 52.45v6M70 56.105v6M80 59.761v6")
          }
          56% {
            d:path("M20 37.798v6M30 41.393v6M40 44.988v6M50 48.583v6M60 52.178v6M70 55.773v6M80 59.368v6")
          }
          58% {
            d:path("M20 37.768v6M30 41.305v6M40 44.841v6M50 48.378v6M60 51.915v6M70 55.451v6M80 58.988v6")
          }
          60% {
            d:path("M20 37.74v6M30 41.22v6M40 44.7v6M50 48.18v6M60 51.66v6M70 55.14v6M80 58.62v6")
          }
          62% {
            d:path("M20 37.713v6M30 41.138v6M40 44.563v6M50 47.988v6M60 51.413v6M70 54.839v6M80 58.264v6")
          }
          64% {
            d:path("M20 37.686v6M30 41.058v6M40 44.43v6M50 47.802v6M60 51.174v6M70 54.547v6M80 57.919v6")
          }
          66% {
            d:path("M20 37.66v6M30 40.981v6M40 44.302v6M50 47.622v6M60 50.943v6M70 54.263v6M80 57.584v6")
          }
          68% {
            d:path("M20 37.635v6M30 40.906v6M40 44.177v6M50 47.447v6M60 50.718v6M70 53.989v6M80 57.259v6")
          }
          70% {
            d:path("M20 37.611v6M30 40.833v6M40 44.056v6M50 47.278v6M60 50.5v6M70 53.722v6M80 56.944v6M90 60.167v6")
          }
          72% {
            d:path("M20 37.611v6M30 40.833v6M40 44.056v6M50 47.278v6M60 50.5v6M70 53.722v6M80 56.944v6M90 60.167v6")
          }
          74% {
            d:path("M20 37.611v6M30 40.833v6M40 44.056v6M50 47.278v6M60 50.5v6M70 53.722v6M80 56.944v6M90 60.167v6")
          }
          76% {
            d:path("M20 37.611v6M30 40.833v6M40 44.056v6M50 47.278v6M60 50.5v6M70 53.722v6M80 56.944v6M90 60.167v6")
          }
          78% {
            d:path("M20 37.611v6M30 40.833v6M40 44.056v6M50 47.278v6M60 50.5v6M70 53.722v6M80 56.944v6M90 60.167v6")
          }
          80% {
            d:path("M20 37.611v6M30 40.833v6M40 44.056v6M50 47.278v6M60 50.5v6M70 53.722v6M80 56.944v6M90 60.167v6")
          }
          82% {
            d:path("M20 37.611v6M30 40.833v6M40 44.056v6M50 47.278v6M60 50.5v6M70 53.722v6M80 56.944v6M90 60.167v6")
          }
          84% {
            d:path("M20 37.611v6M30 40.833v6M40 44.056v6M50 47.278v6M60 50.5v6M70 53.722v6M80 56.944v6M90 60.167v6")
          }
          86% {
            d:path("M20 37.611v6M30 40.833v6M40 44.056v6M50 47.278v6M60 50.5v6M70 53.722v6M80 56.944v6M90 60.167v6")
          }
          88% {
            d:path("M20 37.611v6M30 40.833v6M40 44.056v6M50 47.278v6M60 50.5v6M70 53.722v6M80 56.944v6M90 60.167v6")
          }
          90% {
            d:path("M20 37.611v6M30 40.833v6M40 44.056v6M50 47.278v6M60 50.5v6M70 53.722v6M80 56.944v6M90 60.167v6")
          }
          92% {
            d:path("M20 37.611v6M30 40.833v6M40 44.056v6M50 47.278v6M60 50.5v6M70 53.722v6M80 56.944v6M90 60.167v6")
          }
          94% {
            d:path("M20 37.611v6M30 40.833v6M40 44.056v6M50 47.278v6M60 50.5v6M70 53.722v6M80 56.944v6M90 60.167v6")
          }
          96% {
            d:path("M20 37.611v6M30 40.833v6M40 44.056v6M50 47.278v6M60 50.5v6M70 53.722v6M80 56.944v6M90 60.167v6")
          }
          98% {
            d:path("M20 37.611v6M30 40.833v6M40 44.056v6M50 47.278v6M60 50.5v6M70 53.722v6M80 56.944v6M90 60.167v6")
          }
          100% {
            d:path("M20 37.611v6M30 40.833v6M40 44.056v6M50 47.278v6M60 50.5v6M70 53.722v6M80 56.944v6M90 60.167v6")
          }
        }
        .r0 {
          animation:r0 12s steps(1) infinite
        }
        @keyframes r0 {
          0% {
            opacity:1
          }
          14.5%,100% {
            opacity:0
          }
        }
        .r1 {
          animation:r1 12s steps(1) infinite
        }
        @keyframes r1 {
          0% {
            opacity:1
          }
          23.5%,100% {
            opacity:0
          }
        }
        .r2 {
          animation:r2 12s steps(1) infinite
        }
        @keyframes r2 {
          0% {
            opacity:1
          }
          32.5%,100% {
            opacity:0
          }
        }
        .r3 {
          animation:r3 12s steps(1) infinite
        }
        @keyframes r3 {
          0% {
            opacity:1
          }
          41.5%,100% {
            opacity:0
          }
        }
        .r4 {
          animation:r4 12s steps(1) infinite
        }
        @keyframes r4 {
          0% {
            opacity:1
          }
          50.5%,100% {
            opacity:0
          }
        }
        .r5 {
          animation:r5 12s steps(1) infinite
        }
        @keyframes r5 {
          0% {
            opacity:1
          }
          59.5%,100% {
            opacity:0
          }
        }
        .r6 {
          animation:r6 12s steps(1) infinite
        }
        @keyframes r6 {
          0% {
            opacity:1
          }
          68.5%,100% {
            opacity:0
          }
        }
        .r7 {
          opacity:1;
          animation:none
        }
        @keyframes r7 {
          0% {
            opacity:1
          }
          77.5%,100% {
            opacity:0
          }
        }
        .r8 {
          opacity:1;
          animation:none
        }
        @keyframes r8 {
          0% {
            opacity:1
          }
          86.5%,100% {
            opacity:0
          }
        }
        .r9 {
          opacity:1;
          animation:none
        }
        @keyframes r9 {
          0% {
            opacity:1
          }
          95.5%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Replication Fork">
        <path class="parent parent-top" d="M15 36L105 65H128"/>
        <path class="parent parent-bottom" d="M15 104L105 75H128"/>
        <path class="rung r0" d="M68 65V75"/>
        <path class="rung r1" d="M74 65V75"/>
        <path class="rung r2" d="M80 65V75"/>
        <path class="rung r3" d="M86 65V75"/>
        <path class="rung r4" d="M92 65V75"/>
        <path class="rung r5" d="M98 65V75"/>
        <path class="rung r6" d="M104 65V75"/>
        <path class="rung r7" d="M110 65V75"/>
        <path class="rung r8" d="M116 65V75"/>
        <path class="rung r9" d="M122 65V75"/>
        <path class="new leading" d="M15 42L91 66.489"/>
        <path class="new old-lag" d="M15 98L33 92.2"/>
        <path class="new fragment1" d="M57 84.467L35 91.556"/>
        <path class="new fragment2" d="M81 76.733L61 83.178"/>
        <path class="new join" d="M35 91.556L33 92.2"/>
        <g class="primers">
          <path class="primer1" d="M57 84.467L61 83.178"/>
          <path class="primer2" d="M81 76.733L85 75.444"/>
        </g>
        <path class="pairs" d="M20 37.611v6M30 40.833v6M40 44.056v6M50 47.278v6M60 50.5v6M70 53.722v6M80 56.944v6M90 60.167v6"/>
        <path class="ink direction" d="M23 25H59M54 21L59 25L54 29M61 117H28M33 113L28 117L33 121"/>
        <text x="15" y="32">3′</text>
        <text x="15" y="54">5′</text>
        <text x="15" y="117">5′</text>
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

if (!customElements.get("concept-replication-fork")) {
  customElements.define("concept-replication-fork", ConceptReplicationFork);
}
