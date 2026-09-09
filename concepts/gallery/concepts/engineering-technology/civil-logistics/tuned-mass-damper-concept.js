// Tuned Mass Damper. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptTunedMassDamper extends HTMLElement {
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
        .sway {
          animation:sway 16s linear infinite;
        }
        .mass {
          animation:mass 16s linear infinite;
        }
        .spring {
          animation:spring 16s linear infinite;
        }
        .dashpot {
          animation:dashpot 16s linear infinite;
        }
        @keyframes sway {
          0% {
            transform:translate(-0.328px,0px);
          }
          2.083% {
            transform:translate(0.601px,0px);
          }
          4.167% {
            transform:translate(1.369px,0px);
          }
          6.25% {
            transform:translate(1.77px,0px);
          }
          8.333% {
            transform:translate(1.697px,0px);
          }
          10.417% {
            transform:translate(1.169px,0px);
          }
          12.5% {
            transform:translate(0.328px,0px);
          }
          14.583% {
            transform:translate(-0.601px,0px);
          }
          16.667% {
            transform:translate(-1.369px,0px);
          }
          18.75% {
            transform:translate(-1.77px,0px);
          }
          20.833% {
            transform:translate(-1.697px,0px);
          }
          22.917% {
            transform:translate(-1.169px,0px);
          }
          25% {
            transform:translate(-0.328px,0px);
          }
          27.083% {
            transform:translate(0.601px,0px);
          }
          29.167% {
            transform:translate(1.369px,0px);
          }
          31.25% {
            transform:translate(1.77px,0px);
          }
          33.333% {
            transform:translate(1.697px,0px);
          }
          35.417% {
            transform:translate(1.169px,0px);
          }
          37.5% {
            transform:translate(0.328px,0px);
          }
          39.583% {
            transform:translate(-0.601px,0px);
          }
          41.667% {
            transform:translate(-1.369px,0px);
          }
          43.75% {
            transform:translate(-1.77px,0px);
          }
          45.833% {
            transform:translate(-1.697px,0px);
          }
          47.917% {
            transform:translate(-1.169px,0px);
          }
          50% {
            transform:translate(-0.328px,0px);
          }
          52.083% {
            transform:translate(0.601px,0px);
          }
          54.167% {
            transform:translate(1.369px,0px);
          }
          56.25% {
            transform:translate(1.77px,0px);
          }
          58.333% {
            transform:translate(1.697px,0px);
          }
          60.417% {
            transform:translate(1.169px,0px);
          }
          62.5% {
            transform:translate(0.328px,0px);
          }
          64.583% {
            transform:translate(-0.601px,0px);
          }
          66.667% {
            transform:translate(-1.369px,0px);
          }
          68.75% {
            transform:translate(-1.77px,0px);
          }
          70.833% {
            transform:translate(-1.697px,0px);
          }
          72.917% {
            transform:translate(-1.169px,0px);
          }
          75% {
            transform:translate(-0.328px,0px);
          }
          77.083% {
            transform:translate(0.601px,0px);
          }
          79.167% {
            transform:translate(1.369px,0px);
          }
          81.25% {
            transform:translate(1.77px,0px);
          }
          83.333% {
            transform:translate(1.697px,0px);
          }
          85.417% {
            transform:translate(1.169px,0px);
          }
          87.5% {
            transform:translate(0.328px,0px);
          }
          89.583% {
            transform:translate(-0.601px,0px);
          }
          91.667% {
            transform:translate(-1.369px,0px);
          }
          93.75% {
            transform:translate(-1.77px,0px);
          }
          95.833% {
            transform:translate(-1.697px,0px);
          }
          97.917% {
            transform:translate(-1.169px,0px);
          }
          100% {
            transform:translate(-0.328px,0px);
          }
        }
        @keyframes mass {
          0% {
            transform:translate(52.823px,32px);
          }
          2.083% {
            transform:translate(54.118px,32px);
          }
          4.167% {
            transform:translate(57.525px,32px);
          }
          6.25% {
            transform:translate(62.131px,32px);
          }
          8.333% {
            transform:translate(66.702px,32px);
          }
          10.417% {
            transform:translate(70.013px,32px);
          }
          12.5% {
            transform:translate(71.177px,32px);
          }
          14.583% {
            transform:translate(69.882px,32px);
          }
          16.667% {
            transform:translate(66.475px,32px);
          }
          18.75% {
            transform:translate(61.869px,32px);
          }
          20.833% {
            transform:translate(57.298px,32px);
          }
          22.917% {
            transform:translate(53.987px,32px);
          }
          25% {
            transform:translate(52.823px,32px);
          }
          27.083% {
            transform:translate(54.118px,32px);
          }
          29.167% {
            transform:translate(57.525px,32px);
          }
          31.25% {
            transform:translate(62.131px,32px);
          }
          33.333% {
            transform:translate(66.702px,32px);
          }
          35.417% {
            transform:translate(70.013px,32px);
          }
          37.5% {
            transform:translate(71.177px,32px);
          }
          39.583% {
            transform:translate(69.882px,32px);
          }
          41.667% {
            transform:translate(66.475px,32px);
          }
          43.75% {
            transform:translate(61.869px,32px);
          }
          45.833% {
            transform:translate(57.298px,32px);
          }
          47.917% {
            transform:translate(53.987px,32px);
          }
          50% {
            transform:translate(52.823px,32px);
          }
          52.083% {
            transform:translate(54.118px,32px);
          }
          54.167% {
            transform:translate(57.525px,32px);
          }
          56.25% {
            transform:translate(62.131px,32px);
          }
          58.333% {
            transform:translate(66.702px,32px);
          }
          60.417% {
            transform:translate(70.013px,32px);
          }
          62.5% {
            transform:translate(71.177px,32px);
          }
          64.583% {
            transform:translate(69.882px,32px);
          }
          66.667% {
            transform:translate(66.475px,32px);
          }
          68.75% {
            transform:translate(61.869px,32px);
          }
          70.833% {
            transform:translate(57.298px,32px);
          }
          72.917% {
            transform:translate(53.987px,32px);
          }
          75% {
            transform:translate(52.823px,32px);
          }
          77.083% {
            transform:translate(54.118px,32px);
          }
          79.167% {
            transform:translate(57.525px,32px);
          }
          81.25% {
            transform:translate(62.131px,32px);
          }
          83.333% {
            transform:translate(66.702px,32px);
          }
          85.417% {
            transform:translate(70.013px,32px);
          }
          87.5% {
            transform:translate(71.177px,32px);
          }
          89.583% {
            transform:translate(69.882px,32px);
          }
          91.667% {
            transform:translate(66.475px,32px);
          }
          93.75% {
            transform:translate(61.869px,32px);
          }
          95.833% {
            transform:translate(57.298px,32px);
          }
          97.917% {
            transform:translate(53.987px,32px);
          }
          100% {
            transform:translate(52.823px,32px);
          }
        }
        @keyframes spring {
          0% {
            d:path('M35.672 37L37.816 40L39.96 34L42.104 40L44.247 34L46.391 40L48.535 34L50.679 40L52.823 37');
          }
          2.083% {
            d:path('M36.601 37L38.791 40L40.98 34L43.17 40L45.359 34L47.549 40L49.739 34L51.928 40L54.118 37');
          }
          4.167% {
            d:path('M37.369 37L39.888 40L42.408 34L44.927 40L47.447 34L49.966 40L52.486 34L55.005 40L57.525 37');
          }
          6.25% {
            d:path('M37.77 37L40.815 40L43.86 34L46.905 40L49.951 34L52.996 40L56.041 34L59.086 40L62.131 37');
          }
          8.333% {
            d:path('M37.697 37L41.322 40L44.948 34L48.574 40L52.199 34L55.825 40L59.451 34L63.076 40L66.702 37');
          }
          10.417% {
            d:path('M37.169 37L41.274 40L45.38 34L49.485 40L53.591 34L57.697 40L61.802 34L65.908 40L70.013 37');
          }
          12.5% {
            d:path('M36.328 37L40.684 40L45.04 34L49.396 40L53.753 34L58.109 40L62.465 34L66.821 40L71.177 37');
          }
          14.583% {
            d:path('M35.399 37L39.709 40L44.02 34L48.33 40L52.641 34L56.951 40L61.261 34L65.572 40L69.882 37');
          }
          16.667% {
            d:path('M34.631 37L38.612 40L42.592 34L46.573 40L50.553 34L54.534 40L58.514 34L62.495 40L66.475 37');
          }
          18.75% {
            d:path('M34.23 37L37.685 40L41.14 34L44.595 40L48.049 34L51.504 40L54.959 34L58.414 40L61.869 37');
          }
          20.833% {
            d:path('M34.303 37L37.178 40L40.052 34L42.926 40L45.801 34L48.675 40L51.549 34L54.424 40L57.298 37');
          }
          22.917% {
            d:path('M34.831 37L37.226 40L39.62 34L42.015 40L44.409 34L46.803 40L49.198 34L51.592 40L53.987 37');
          }
          25% {
            d:path('M35.672 37L37.816 40L39.96 34L42.104 40L44.247 34L46.391 40L48.535 34L50.679 40L52.823 37');
          }
          27.083% {
            d:path('M36.601 37L38.791 40L40.98 34L43.17 40L45.359 34L47.549 40L49.739 34L51.928 40L54.118 37');
          }
          29.167% {
            d:path('M37.369 37L39.888 40L42.408 34L44.927 40L47.447 34L49.966 40L52.486 34L55.005 40L57.525 37');
          }
          31.25% {
            d:path('M37.77 37L40.815 40L43.86 34L46.905 40L49.951 34L52.996 40L56.041 34L59.086 40L62.131 37');
          }
          33.333% {
            d:path('M37.697 37L41.322 40L44.948 34L48.574 40L52.199 34L55.825 40L59.451 34L63.076 40L66.702 37');
          }
          35.417% {
            d:path('M37.169 37L41.274 40L45.38 34L49.485 40L53.591 34L57.697 40L61.802 34L65.908 40L70.013 37');
          }
          37.5% {
            d:path('M36.328 37L40.684 40L45.04 34L49.396 40L53.753 34L58.109 40L62.465 34L66.821 40L71.177 37');
          }
          39.583% {
            d:path('M35.399 37L39.709 40L44.02 34L48.33 40L52.641 34L56.951 40L61.261 34L65.572 40L69.882 37');
          }
          41.667% {
            d:path('M34.631 37L38.612 40L42.592 34L46.573 40L50.553 34L54.534 40L58.514 34L62.495 40L66.475 37');
          }
          43.75% {
            d:path('M34.23 37L37.685 40L41.14 34L44.595 40L48.049 34L51.504 40L54.959 34L58.414 40L61.869 37');
          }
          45.833% {
            d:path('M34.303 37L37.178 40L40.052 34L42.926 40L45.801 34L48.675 40L51.549 34L54.424 40L57.298 37');
          }
          47.917% {
            d:path('M34.831 37L37.226 40L39.62 34L42.015 40L44.409 34L46.803 40L49.198 34L51.592 40L53.987 37');
          }
          50% {
            d:path('M35.672 37L37.816 40L39.96 34L42.104 40L44.247 34L46.391 40L48.535 34L50.679 40L52.823 37');
          }
          52.083% {
            d:path('M36.601 37L38.791 40L40.98 34L43.17 40L45.359 34L47.549 40L49.739 34L51.928 40L54.118 37');
          }
          54.167% {
            d:path('M37.369 37L39.888 40L42.408 34L44.927 40L47.447 34L49.966 40L52.486 34L55.005 40L57.525 37');
          }
          56.25% {
            d:path('M37.77 37L40.815 40L43.86 34L46.905 40L49.951 34L52.996 40L56.041 34L59.086 40L62.131 37');
          }
          58.333% {
            d:path('M37.697 37L41.322 40L44.948 34L48.574 40L52.199 34L55.825 40L59.451 34L63.076 40L66.702 37');
          }
          60.417% {
            d:path('M37.169 37L41.274 40L45.38 34L49.485 40L53.591 34L57.697 40L61.802 34L65.908 40L70.013 37');
          }
          62.5% {
            d:path('M36.328 37L40.684 40L45.04 34L49.396 40L53.753 34L58.109 40L62.465 34L66.821 40L71.177 37');
          }
          64.583% {
            d:path('M35.399 37L39.709 40L44.02 34L48.33 40L52.641 34L56.951 40L61.261 34L65.572 40L69.882 37');
          }
          66.667% {
            d:path('M34.631 37L38.612 40L42.592 34L46.573 40L50.553 34L54.534 40L58.514 34L62.495 40L66.475 37');
          }
          68.75% {
            d:path('M34.23 37L37.685 40L41.14 34L44.595 40L48.049 34L51.504 40L54.959 34L58.414 40L61.869 37');
          }
          70.833% {
            d:path('M34.303 37L37.178 40L40.052 34L42.926 40L45.801 34L48.675 40L51.549 34L54.424 40L57.298 37');
          }
          72.917% {
            d:path('M34.831 37L37.226 40L39.62 34L42.015 40L44.409 34L46.803 40L49.198 34L51.592 40L53.987 37');
          }
          75% {
            d:path('M35.672 37L37.816 40L39.96 34L42.104 40L44.247 34L46.391 40L48.535 34L50.679 40L52.823 37');
          }
          77.083% {
            d:path('M36.601 37L38.791 40L40.98 34L43.17 40L45.359 34L47.549 40L49.739 34L51.928 40L54.118 37');
          }
          79.167% {
            d:path('M37.369 37L39.888 40L42.408 34L44.927 40L47.447 34L49.966 40L52.486 34L55.005 40L57.525 37');
          }
          81.25% {
            d:path('M37.77 37L40.815 40L43.86 34L46.905 40L49.951 34L52.996 40L56.041 34L59.086 40L62.131 37');
          }
          83.333% {
            d:path('M37.697 37L41.322 40L44.948 34L48.574 40L52.199 34L55.825 40L59.451 34L63.076 40L66.702 37');
          }
          85.417% {
            d:path('M37.169 37L41.274 40L45.38 34L49.485 40L53.591 34L57.697 40L61.802 34L65.908 40L70.013 37');
          }
          87.5% {
            d:path('M36.328 37L40.684 40L45.04 34L49.396 40L53.753 34L58.109 40L62.465 34L66.821 40L71.177 37');
          }
          89.583% {
            d:path('M35.399 37L39.709 40L44.02 34L48.33 40L52.641 34L56.951 40L61.261 34L65.572 40L69.882 37');
          }
          91.667% {
            d:path('M34.631 37L38.612 40L42.592 34L46.573 40L50.553 34L54.534 40L58.514 34L62.495 40L66.475 37');
          }
          93.75% {
            d:path('M34.23 37L37.685 40L41.14 34L44.595 40L48.049 34L51.504 40L54.959 34L58.414 40L61.869 37');
          }
          95.833% {
            d:path('M34.303 37L37.178 40L40.052 34L42.926 40L45.801 34L48.675 40L51.549 34L54.424 40L57.298 37');
          }
          97.917% {
            d:path('M34.831 37L37.226 40L39.62 34L42.015 40L44.409 34L46.803 40L49.198 34L51.592 40L53.987 37');
          }
          100% {
            d:path('M35.672 37L37.816 40L39.96 34L42.104 40L44.247 34L46.391 40L48.535 34L50.679 40L52.823 37');
          }
        }
        @keyframes dashpot {
          0% {
            d:path('M32.672 58H36.672m0 -5h28v10h-28zM41.823 54v8m0 -4H60.823V49');
          }
          2.083% {
            d:path('M33.601 58H37.601m0 -5h28v10h-28zM43.118 54v8m0 -4H62.118V49');
          }
          4.167% {
            d:path('M34.369 58H38.369m0 -5h28v10h-28zM46.525 54v8m0 -4H65.525V49');
          }
          6.25% {
            d:path('M34.77 58H38.77m0 -5h28v10h-28zM51.131 54v8m0 -4H70.131V49');
          }
          8.333% {
            d:path('M34.697 58H38.697m0 -5h28v10h-28zM55.702 54v8m0 -4H74.702V49');
          }
          10.417% {
            d:path('M34.169 58H38.169m0 -5h28v10h-28zM59.013 54v8m0 -4H78.013V49');
          }
          12.5% {
            d:path('M33.328 58H37.328m0 -5h28v10h-28zM60.177 54v8m0 -4H79.177V49');
          }
          14.583% {
            d:path('M32.399 58H36.399m0 -5h28v10h-28zM58.882 54v8m0 -4H77.882V49');
          }
          16.667% {
            d:path('M31.631 58H35.631m0 -5h28v10h-28zM55.475 54v8m0 -4H74.475V49');
          }
          18.75% {
            d:path('M31.23 58H35.23m0 -5h28v10h-28zM50.869 54v8m0 -4H69.869V49');
          }
          20.833% {
            d:path('M31.303 58H35.303m0 -5h28v10h-28zM46.298 54v8m0 -4H65.298V49');
          }
          22.917% {
            d:path('M31.831 58H35.831m0 -5h28v10h-28zM42.987 54v8m0 -4H61.987V49');
          }
          25% {
            d:path('M32.672 58H36.672m0 -5h28v10h-28zM41.823 54v8m0 -4H60.823V49');
          }
          27.083% {
            d:path('M33.601 58H37.601m0 -5h28v10h-28zM43.118 54v8m0 -4H62.118V49');
          }
          29.167% {
            d:path('M34.369 58H38.369m0 -5h28v10h-28zM46.525 54v8m0 -4H65.525V49');
          }
          31.25% {
            d:path('M34.77 58H38.77m0 -5h28v10h-28zM51.131 54v8m0 -4H70.131V49');
          }
          33.333% {
            d:path('M34.697 58H38.697m0 -5h28v10h-28zM55.702 54v8m0 -4H74.702V49');
          }
          35.417% {
            d:path('M34.169 58H38.169m0 -5h28v10h-28zM59.013 54v8m0 -4H78.013V49');
          }
          37.5% {
            d:path('M33.328 58H37.328m0 -5h28v10h-28zM60.177 54v8m0 -4H79.177V49');
          }
          39.583% {
            d:path('M32.399 58H36.399m0 -5h28v10h-28zM58.882 54v8m0 -4H77.882V49');
          }
          41.667% {
            d:path('M31.631 58H35.631m0 -5h28v10h-28zM55.475 54v8m0 -4H74.475V49');
          }
          43.75% {
            d:path('M31.23 58H35.23m0 -5h28v10h-28zM50.869 54v8m0 -4H69.869V49');
          }
          45.833% {
            d:path('M31.303 58H35.303m0 -5h28v10h-28zM46.298 54v8m0 -4H65.298V49');
          }
          47.917% {
            d:path('M31.831 58H35.831m0 -5h28v10h-28zM42.987 54v8m0 -4H61.987V49');
          }
          50% {
            d:path('M32.672 58H36.672m0 -5h28v10h-28zM41.823 54v8m0 -4H60.823V49');
          }
          52.083% {
            d:path('M33.601 58H37.601m0 -5h28v10h-28zM43.118 54v8m0 -4H62.118V49');
          }
          54.167% {
            d:path('M34.369 58H38.369m0 -5h28v10h-28zM46.525 54v8m0 -4H65.525V49');
          }
          56.25% {
            d:path('M34.77 58H38.77m0 -5h28v10h-28zM51.131 54v8m0 -4H70.131V49');
          }
          58.333% {
            d:path('M34.697 58H38.697m0 -5h28v10h-28zM55.702 54v8m0 -4H74.702V49');
          }
          60.417% {
            d:path('M34.169 58H38.169m0 -5h28v10h-28zM59.013 54v8m0 -4H78.013V49');
          }
          62.5% {
            d:path('M33.328 58H37.328m0 -5h28v10h-28zM60.177 54v8m0 -4H79.177V49');
          }
          64.583% {
            d:path('M32.399 58H36.399m0 -5h28v10h-28zM58.882 54v8m0 -4H77.882V49');
          }
          66.667% {
            d:path('M31.631 58H35.631m0 -5h28v10h-28zM55.475 54v8m0 -4H74.475V49');
          }
          68.75% {
            d:path('M31.23 58H35.23m0 -5h28v10h-28zM50.869 54v8m0 -4H69.869V49');
          }
          70.833% {
            d:path('M31.303 58H35.303m0 -5h28v10h-28zM46.298 54v8m0 -4H65.298V49');
          }
          72.917% {
            d:path('M31.831 58H35.831m0 -5h28v10h-28zM42.987 54v8m0 -4H61.987V49');
          }
          75% {
            d:path('M32.672 58H36.672m0 -5h28v10h-28zM41.823 54v8m0 -4H60.823V49');
          }
          77.083% {
            d:path('M33.601 58H37.601m0 -5h28v10h-28zM43.118 54v8m0 -4H62.118V49');
          }
          79.167% {
            d:path('M34.369 58H38.369m0 -5h28v10h-28zM46.525 54v8m0 -4H65.525V49');
          }
          81.25% {
            d:path('M34.77 58H38.77m0 -5h28v10h-28zM51.131 54v8m0 -4H70.131V49');
          }
          83.333% {
            d:path('M34.697 58H38.697m0 -5h28v10h-28zM55.702 54v8m0 -4H74.702V49');
          }
          85.417% {
            d:path('M34.169 58H38.169m0 -5h28v10h-28zM59.013 54v8m0 -4H78.013V49');
          }
          87.5% {
            d:path('M33.328 58H37.328m0 -5h28v10h-28zM60.177 54v8m0 -4H79.177V49');
          }
          89.583% {
            d:path('M32.399 58H36.399m0 -5h28v10h-28zM58.882 54v8m0 -4H77.882V49');
          }
          91.667% {
            d:path('M31.631 58H35.631m0 -5h28v10h-28zM55.475 54v8m0 -4H74.475V49');
          }
          93.75% {
            d:path('M31.23 58H35.23m0 -5h28v10h-28zM50.869 54v8m0 -4H69.869V49');
          }
          95.833% {
            d:path('M31.303 58H35.303m0 -5h28v10h-28zM46.298 54v8m0 -4H65.298V49');
          }
          97.917% {
            d:path('M31.831 58H35.831m0 -5h28v10h-28zM42.987 54v8m0 -4H61.987V49');
          }
          100% {
            d:path('M32.672 58H36.672m0 -5h28v10h-28zM41.823 54v8m0 -4H60.823V49');
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .sway {
            transform:translate(-0.328px,0px);
          }
          .mass {
            transform:translate(52.823px,32px);
          }
          .spring {
            d:path('M35.672 37L37.816 40L39.96 34L42.104 40L44.247 34L46.391 40L48.535 34L50.679 40L52.823 37');
          }
          .dashpot {
            d:path('M32.672 58H36.672m0 -5h28v10h-28zM41.823 54v8m0 -4H60.823V49');
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Tuned Mass Damper">
        <rect x="15" y="121" width="110" height="6" fill="#687767"/>
        <g class="sway">
          <rect x="43" y="55" width="54" height="65" fill="#203f3e" stroke="#a2c6bb"/>
          <rect x="48" y="63" width="4" height="5" fill="#6f9991"/>
          <rect x="62.667" y="63" width="4" height="5" fill="#6f9991"/>
          <rect x="77.333" y="63" width="4" height="5" fill="#6f9991"/>
          <rect x="48" y="76.75" width="4" height="5" fill="#6f9991"/>
          <rect x="62.667" y="76.75" width="4" height="5" fill="#6f9991"/>
          <rect x="77.333" y="76.75" width="4" height="5" fill="#6f9991"/>
          <rect x="48" y="90.5" width="4" height="5" fill="#6f9991"/>
          <rect x="62.667" y="90.5" width="4" height="5" fill="#6f9991"/>
          <rect x="77.333" y="90.5" width="4" height="5" fill="#6f9991"/>
          <rect x="48" y="104.25" width="4" height="5" fill="#6f9991"/>
          <rect x="62.667" y="104.25" width="4" height="5" fill="#6f9991"/>
          <rect x="77.333" y="104.25" width="4" height="5" fill="#6f9991"/>
          <rect x="33" y="26" width="74" height="29" fill="#162d2a" stroke="#82aa9a"/>
          <path d="M37 50L103 50" stroke="#c2cfc0"/>
        </g>
        <rect x="0" y="0" width="16" height="17" class="mass" rx="2" fill="#dbbd7c" stroke="#ffdda0"/>
        <path d="M37.305 37L41.33 40L45.355 34L49.379 40L53.404 34L57.428 40L61.453 34L65.477 40L69.502 37" class="spring" fill="none" stroke="#b3d3b3" stroke-width="1.2"/>
        <path d="M34.305 58H38.305m0 -5h28v10h-28zM58.502 54v8m0 -4H77.502V49" class="dashpot" fill="none" stroke="#aec3b2" stroke-width="1.3"/>
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

if (!customElements.get("concept-tuned-mass-damper")) {
  customElements.define("concept-tuned-mass-damper", ConceptTunedMassDamper);
}
