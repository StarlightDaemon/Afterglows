// Ice-Albedo Feedback. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptIceAlbedoFeedback extends HTMLElement {
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
        .ice {
          animation:ice 16s linear infinite;
        }
        .episode {
          animation:episode 16s linear infinite;
        }
        .reflect0 {
          animation:reflect0 16s linear infinite;
        }
        .heat0 {
          animation:heat0 16s linear infinite;
        }
        .reflect1 {
          animation:reflect1 16s linear infinite;
        }
        .heat1 {
          animation:heat1 16s linear infinite;
        }
        .reflect2 {
          animation:reflect2 16s linear infinite;
        }
        .heat2 {
          animation:heat2 16s linear infinite;
        }
        .reflect3 {
          animation:reflect3 16s linear infinite;
        }
        .heat3 {
          animation:heat3 16s linear infinite;
        }
        .reflect4 {
          animation:reflect4 16s linear infinite;
        }
        .heat4 {
          animation:heat4 16s linear infinite;
        }
        .reflect5 {
          animation:reflect5 16s linear infinite;
        }
        .heat5 {
          animation:heat5 16s linear infinite;
        }
        @keyframes ice {
          0% {
            d:path('M12 76H98L95 87H12Z');
          }
          2.083% {
            d:path('M12 76H98L95 87H12Z');
          }
          4.167% {
            d:path('M12 76H98L95 87H12Z');
          }
          6.25% {
            d:path('M12 76H98L95 87H12Z');
          }
          8.333% {
            d:path('M12 76H98L95 87H12Z');
          }
          10.417% {
            d:path('M12 76H97.994L94.994 87H12Z');
          }
          12.5% {
            d:path('M12 76H97.792L94.792 87H12Z');
          }
          14.583% {
            d:path('M12 76H97.318L94.318 87H12Z');
          }
          16.667% {
            d:path('M12 76H96.589L93.589 87H12Z');
          }
          18.75% {
            d:path('M12 76H95.625L92.625 87H12Z');
          }
          20.833% {
            d:path('M12 76H94.444L91.444 87H12Z');
          }
          22.917% {
            d:path('M12 76H93.067L90.067 87H12Z');
          }
          25% {
            d:path('M12 76H91.511L88.511 87H12Z');
          }
          27.083% {
            d:path('M12 76H89.796L86.796 87H12Z');
          }
          29.167% {
            d:path('M12 76H87.941L84.941 87H12Z');
          }
          31.25% {
            d:path('M12 76H85.964L82.964 87H12Z');
          }
          33.333% {
            d:path('M12 76H83.885L80.885 87H12Z');
          }
          35.417% {
            d:path('M12 76H81.722L78.722 87H12Z');
          }
          37.5% {
            d:path('M12 76H79.495L76.495 87H12Z');
          }
          39.583% {
            d:path('M12 76H77.222L74.222 87H12Z');
          }
          41.667% {
            d:path('M12 76H74.923L71.923 87H12Z');
          }
          43.75% {
            d:path('M12 76H72.616L69.616 87H12Z');
          }
          45.833% {
            d:path('M12 76H70.321L67.321 87H12Z');
          }
          47.917% {
            d:path('M12 76H68.056L65.056 87H12Z');
          }
          50% {
            d:path('M12 76H65.84L62.84 87H12Z');
          }
          52.083% {
            d:path('M12 76H63.692L60.692 87H12Z');
          }
          54.167% {
            d:path('M12 76H61.632L58.632 87H12Z');
          }
          56.25% {
            d:path('M12 76H59.678L56.678 87H12Z');
          }
          58.333% {
            d:path('M12 76H57.849L54.849 87H12Z');
          }
          60.417% {
            d:path('M12 76H56.164L53.164 87H12Z');
          }
          62.5% {
            d:path('M12 76H54.643L51.643 87H12Z');
          }
          64.583% {
            d:path('M12 76H53.303L50.303 87H12Z');
          }
          66.667% {
            d:path('M12 76H52.165L49.165 87H12Z');
          }
          68.75% {
            d:path('M12 76H51.246L48.246 87H12Z');
          }
          70.833% {
            d:path('M12 76H50.566L47.566 87H12Z');
          }
          72.917% {
            d:path('M12 76H50.145L47.145 87H12Z');
          }
          75% {
            d:path('M12 76H50L47 87H12Z');
          }
          77.083% {
            d:path('M12 76H50L47 87H12Z');
          }
          79.167% {
            d:path('M12 76H50L47 87H12Z');
          }
          81.25% {
            d:path('M12 76H50L47 87H12Z');
          }
          83.333% {
            d:path('M12 76H50L47 87H12Z');
          }
          85.417% {
            d:path('M12 76H50L47 87H12Z');
          }
          87.5% {
            d:path('M12 76H50L47 87H12Z');
          }
          89.583% {
            d:path('M12 76H50L47 87H12Z');
          }
          91.667% {
            d:path('M12 76H50L47 87H12Z');
          }
          93.75% {
            d:path('M12 76H50L47 87H12Z');
          }
          95.833% {
            d:path('M12 76H50L47 87H12Z');
          }
          97.917% {
            d:path('M12 76H50L47 87H12Z');
          }
          100% {
            d:path('M12 76H50L47 87H12Z');
          }
        }
        @keyframes episode {
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
        @keyframes reflect0 {
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
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        @keyframes heat0 {
          0% {
            opacity:0.06;
          }
          2.083% {
            opacity:0.06;
          }
          4.167% {
            opacity:0.06;
          }
          6.25% {
            opacity:0.06;
          }
          8.333% {
            opacity:0.06;
          }
          10.417% {
            opacity:0.06;
          }
          12.5% {
            opacity:0.06;
          }
          14.583% {
            opacity:0.06;
          }
          16.667% {
            opacity:0.06;
          }
          18.75% {
            opacity:0.06;
          }
          20.833% {
            opacity:0.06;
          }
          22.917% {
            opacity:0.06;
          }
          25% {
            opacity:0.06;
          }
          27.083% {
            opacity:0.06;
          }
          29.167% {
            opacity:0.06;
          }
          31.25% {
            opacity:0.06;
          }
          33.333% {
            opacity:0.06;
          }
          35.417% {
            opacity:0.06;
          }
          37.5% {
            opacity:0.06;
          }
          39.583% {
            opacity:0.06;
          }
          41.667% {
            opacity:0.06;
          }
          43.75% {
            opacity:0.06;
          }
          45.833% {
            opacity:0.06;
          }
          47.917% {
            opacity:0.06;
          }
          50% {
            opacity:0.06;
          }
          52.083% {
            opacity:0.06;
          }
          54.167% {
            opacity:0.06;
          }
          56.25% {
            opacity:0.06;
          }
          58.333% {
            opacity:0.06;
          }
          60.417% {
            opacity:0.06;
          }
          62.5% {
            opacity:0.06;
          }
          64.583% {
            opacity:0.06;
          }
          66.667% {
            opacity:0.06;
          }
          68.75% {
            opacity:0.06;
          }
          70.833% {
            opacity:0.06;
          }
          72.917% {
            opacity:0.06;
          }
          75% {
            opacity:0.06;
          }
          77.083% {
            opacity:0.06;
          }
          79.167% {
            opacity:0.06;
          }
          81.25% {
            opacity:0.06;
          }
          83.333% {
            opacity:0.06;
          }
          85.417% {
            opacity:0.06;
          }
          87.5% {
            opacity:0.06;
          }
          89.583% {
            opacity:0.06;
          }
          91.667% {
            opacity:0.06;
          }
          93.75% {
            opacity:0.06;
          }
          95.833% {
            opacity:0.06;
          }
          97.917% {
            opacity:0.06;
          }
          100% {
            opacity:0.06;
          }
        }
        @keyframes reflect1 {
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
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        @keyframes heat1 {
          0% {
            opacity:0.06;
          }
          2.083% {
            opacity:0.06;
          }
          4.167% {
            opacity:0.06;
          }
          6.25% {
            opacity:0.06;
          }
          8.333% {
            opacity:0.06;
          }
          10.417% {
            opacity:0.06;
          }
          12.5% {
            opacity:0.06;
          }
          14.583% {
            opacity:0.06;
          }
          16.667% {
            opacity:0.06;
          }
          18.75% {
            opacity:0.06;
          }
          20.833% {
            opacity:0.06;
          }
          22.917% {
            opacity:0.06;
          }
          25% {
            opacity:0.06;
          }
          27.083% {
            opacity:0.06;
          }
          29.167% {
            opacity:0.06;
          }
          31.25% {
            opacity:0.06;
          }
          33.333% {
            opacity:0.06;
          }
          35.417% {
            opacity:0.06;
          }
          37.5% {
            opacity:0.06;
          }
          39.583% {
            opacity:0.06;
          }
          41.667% {
            opacity:0.06;
          }
          43.75% {
            opacity:0.06;
          }
          45.833% {
            opacity:0.06;
          }
          47.917% {
            opacity:0.06;
          }
          50% {
            opacity:0.06;
          }
          52.083% {
            opacity:0.06;
          }
          54.167% {
            opacity:0.06;
          }
          56.25% {
            opacity:0.06;
          }
          58.333% {
            opacity:0.06;
          }
          60.417% {
            opacity:0.06;
          }
          62.5% {
            opacity:0.06;
          }
          64.583% {
            opacity:0.06;
          }
          66.667% {
            opacity:0.06;
          }
          68.75% {
            opacity:0.06;
          }
          70.833% {
            opacity:0.06;
          }
          72.917% {
            opacity:0.06;
          }
          75% {
            opacity:0.06;
          }
          77.083% {
            opacity:0.06;
          }
          79.167% {
            opacity:0.06;
          }
          81.25% {
            opacity:0.06;
          }
          83.333% {
            opacity:0.06;
          }
          85.417% {
            opacity:0.06;
          }
          87.5% {
            opacity:0.06;
          }
          89.583% {
            opacity:0.06;
          }
          91.667% {
            opacity:0.06;
          }
          93.75% {
            opacity:0.06;
          }
          95.833% {
            opacity:0.06;
          }
          97.917% {
            opacity:0.06;
          }
          100% {
            opacity:0.06;
          }
        }
        @keyframes reflect2 {
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
        @keyframes heat2 {
          0% {
            opacity:0.06;
          }
          2.083% {
            opacity:0.06;
          }
          4.167% {
            opacity:0.06;
          }
          6.25% {
            opacity:0.06;
          }
          8.333% {
            opacity:0.06;
          }
          10.417% {
            opacity:0.06;
          }
          12.5% {
            opacity:0.06;
          }
          14.583% {
            opacity:0.06;
          }
          16.667% {
            opacity:0.06;
          }
          18.75% {
            opacity:0.06;
          }
          20.833% {
            opacity:0.06;
          }
          22.917% {
            opacity:0.06;
          }
          25% {
            opacity:0.06;
          }
          27.083% {
            opacity:0.06;
          }
          29.167% {
            opacity:0.06;
          }
          31.25% {
            opacity:0.06;
          }
          33.333% {
            opacity:0.06;
          }
          35.417% {
            opacity:0.06;
          }
          37.5% {
            opacity:0.06;
          }
          39.583% {
            opacity:0.06;
          }
          41.667% {
            opacity:0.06;
          }
          43.75% {
            opacity:0.06;
          }
          45.833% {
            opacity:0.06;
          }
          47.917% {
            opacity:0.06;
          }
          50% {
            opacity:0.06;
          }
          52.083% {
            opacity:0.06;
          }
          54.167% {
            opacity:0.06;
          }
          56.25% {
            opacity:0.06;
          }
          58.333% {
            opacity:0.8;
          }
          60.417% {
            opacity:0.8;
          }
          62.5% {
            opacity:0.8;
          }
          64.583% {
            opacity:0.8;
          }
          66.667% {
            opacity:0.8;
          }
          68.75% {
            opacity:0.8;
          }
          70.833% {
            opacity:0.8;
          }
          72.917% {
            opacity:0.8;
          }
          75% {
            opacity:0.8;
          }
          77.083% {
            opacity:0.8;
          }
          79.167% {
            opacity:0.8;
          }
          81.25% {
            opacity:0.8;
          }
          83.333% {
            opacity:0.8;
          }
          85.417% {
            opacity:0.8;
          }
          87.5% {
            opacity:0.8;
          }
          89.583% {
            opacity:0.8;
          }
          91.667% {
            opacity:0.8;
          }
          93.75% {
            opacity:0.8;
          }
          95.833% {
            opacity:0.8;
          }
          97.917% {
            opacity:0.8;
          }
          100% {
            opacity:0.8;
          }
        }
        @keyframes reflect3 {
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
            opacity:0;
          }
          43.75% {
            opacity:0;
          }
          45.833% {
            opacity:0;
          }
          47.917% {
            opacity:0;
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
        @keyframes heat3 {
          0% {
            opacity:0.06;
          }
          2.083% {
            opacity:0.06;
          }
          4.167% {
            opacity:0.06;
          }
          6.25% {
            opacity:0.06;
          }
          8.333% {
            opacity:0.06;
          }
          10.417% {
            opacity:0.06;
          }
          12.5% {
            opacity:0.06;
          }
          14.583% {
            opacity:0.06;
          }
          16.667% {
            opacity:0.06;
          }
          18.75% {
            opacity:0.06;
          }
          20.833% {
            opacity:0.06;
          }
          22.917% {
            opacity:0.06;
          }
          25% {
            opacity:0.06;
          }
          27.083% {
            opacity:0.06;
          }
          29.167% {
            opacity:0.06;
          }
          31.25% {
            opacity:0.06;
          }
          33.333% {
            opacity:0.06;
          }
          35.417% {
            opacity:0.06;
          }
          37.5% {
            opacity:0.06;
          }
          39.583% {
            opacity:0.06;
          }
          41.667% {
            opacity:0.8;
          }
          43.75% {
            opacity:0.8;
          }
          45.833% {
            opacity:0.8;
          }
          47.917% {
            opacity:0.8;
          }
          50% {
            opacity:0.8;
          }
          52.083% {
            opacity:0.8;
          }
          54.167% {
            opacity:0.8;
          }
          56.25% {
            opacity:0.8;
          }
          58.333% {
            opacity:0.8;
          }
          60.417% {
            opacity:0.8;
          }
          62.5% {
            opacity:0.8;
          }
          64.583% {
            opacity:0.8;
          }
          66.667% {
            opacity:0.8;
          }
          68.75% {
            opacity:0.8;
          }
          70.833% {
            opacity:0.8;
          }
          72.917% {
            opacity:0.8;
          }
          75% {
            opacity:0.8;
          }
          77.083% {
            opacity:0.8;
          }
          79.167% {
            opacity:0.8;
          }
          81.25% {
            opacity:0.8;
          }
          83.333% {
            opacity:0.8;
          }
          85.417% {
            opacity:0.8;
          }
          87.5% {
            opacity:0.8;
          }
          89.583% {
            opacity:0.8;
          }
          91.667% {
            opacity:0.8;
          }
          93.75% {
            opacity:0.8;
          }
          95.833% {
            opacity:0.8;
          }
          97.917% {
            opacity:0.8;
          }
          100% {
            opacity:0.8;
          }
        }
        @keyframes reflect4 {
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
            opacity:0;
          }
          41.667% {
            opacity:0;
          }
          43.75% {
            opacity:0;
          }
          45.833% {
            opacity:0;
          }
          47.917% {
            opacity:0;
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
        @keyframes heat4 {
          0% {
            opacity:0.06;
          }
          2.083% {
            opacity:0.06;
          }
          4.167% {
            opacity:0.06;
          }
          6.25% {
            opacity:0.06;
          }
          8.333% {
            opacity:0.06;
          }
          10.417% {
            opacity:0.06;
          }
          12.5% {
            opacity:0.06;
          }
          14.583% {
            opacity:0.06;
          }
          16.667% {
            opacity:0.06;
          }
          18.75% {
            opacity:0.06;
          }
          20.833% {
            opacity:0.06;
          }
          22.917% {
            opacity:0.8;
          }
          25% {
            opacity:0.8;
          }
          27.083% {
            opacity:0.8;
          }
          29.167% {
            opacity:0.8;
          }
          31.25% {
            opacity:0.8;
          }
          33.333% {
            opacity:0.8;
          }
          35.417% {
            opacity:0.8;
          }
          37.5% {
            opacity:0.8;
          }
          39.583% {
            opacity:0.8;
          }
          41.667% {
            opacity:0.8;
          }
          43.75% {
            opacity:0.8;
          }
          45.833% {
            opacity:0.8;
          }
          47.917% {
            opacity:0.8;
          }
          50% {
            opacity:0.8;
          }
          52.083% {
            opacity:0.8;
          }
          54.167% {
            opacity:0.8;
          }
          56.25% {
            opacity:0.8;
          }
          58.333% {
            opacity:0.8;
          }
          60.417% {
            opacity:0.8;
          }
          62.5% {
            opacity:0.8;
          }
          64.583% {
            opacity:0.8;
          }
          66.667% {
            opacity:0.8;
          }
          68.75% {
            opacity:0.8;
          }
          70.833% {
            opacity:0.8;
          }
          72.917% {
            opacity:0.8;
          }
          75% {
            opacity:0.8;
          }
          77.083% {
            opacity:0.8;
          }
          79.167% {
            opacity:0.8;
          }
          81.25% {
            opacity:0.8;
          }
          83.333% {
            opacity:0.8;
          }
          85.417% {
            opacity:0.8;
          }
          87.5% {
            opacity:0.8;
          }
          89.583% {
            opacity:0.8;
          }
          91.667% {
            opacity:0.8;
          }
          93.75% {
            opacity:0.8;
          }
          95.833% {
            opacity:0.8;
          }
          97.917% {
            opacity:0.8;
          }
          100% {
            opacity:0.8;
          }
        }
        @keyframes reflect5 {
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
            opacity:0;
          }
          41.667% {
            opacity:0;
          }
          43.75% {
            opacity:0;
          }
          45.833% {
            opacity:0;
          }
          47.917% {
            opacity:0;
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
        @keyframes heat5 {
          0% {
            opacity:0.8;
          }
          2.083% {
            opacity:0.8;
          }
          4.167% {
            opacity:0.8;
          }
          6.25% {
            opacity:0.8;
          }
          8.333% {
            opacity:0.8;
          }
          10.417% {
            opacity:0.8;
          }
          12.5% {
            opacity:0.8;
          }
          14.583% {
            opacity:0.8;
          }
          16.667% {
            opacity:0.8;
          }
          18.75% {
            opacity:0.8;
          }
          20.833% {
            opacity:0.8;
          }
          22.917% {
            opacity:0.8;
          }
          25% {
            opacity:0.8;
          }
          27.083% {
            opacity:0.8;
          }
          29.167% {
            opacity:0.8;
          }
          31.25% {
            opacity:0.8;
          }
          33.333% {
            opacity:0.8;
          }
          35.417% {
            opacity:0.8;
          }
          37.5% {
            opacity:0.8;
          }
          39.583% {
            opacity:0.8;
          }
          41.667% {
            opacity:0.8;
          }
          43.75% {
            opacity:0.8;
          }
          45.833% {
            opacity:0.8;
          }
          47.917% {
            opacity:0.8;
          }
          50% {
            opacity:0.8;
          }
          52.083% {
            opacity:0.8;
          }
          54.167% {
            opacity:0.8;
          }
          56.25% {
            opacity:0.8;
          }
          58.333% {
            opacity:0.8;
          }
          60.417% {
            opacity:0.8;
          }
          62.5% {
            opacity:0.8;
          }
          64.583% {
            opacity:0.8;
          }
          66.667% {
            opacity:0.8;
          }
          68.75% {
            opacity:0.8;
          }
          70.833% {
            opacity:0.8;
          }
          72.917% {
            opacity:0.8;
          }
          75% {
            opacity:0.8;
          }
          77.083% {
            opacity:0.8;
          }
          79.167% {
            opacity:0.8;
          }
          81.25% {
            opacity:0.8;
          }
          83.333% {
            opacity:0.8;
          }
          85.417% {
            opacity:0.8;
          }
          87.5% {
            opacity:0.8;
          }
          89.583% {
            opacity:0.8;
          }
          91.667% {
            opacity:0.8;
          }
          93.75% {
            opacity:0.8;
          }
          95.833% {
            opacity:0.8;
          }
          97.917% {
            opacity:0.8;
          }
          100% {
            opacity:0.8;
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .ice {
            d:path('M12 76H50L47 87H12Z');
          }
          .episode {
            opacity:1;
          }
          .reflect0 {
            opacity:1;
          }
          .heat0 {
            opacity:0.06;
          }
          .reflect1 {
            opacity:1;
          }
          .heat1 {
            opacity:0.06;
          }
          .reflect2 {
            opacity:0;
          }
          .heat2 {
            opacity:0.8;
          }
          .reflect3 {
            opacity:0;
          }
          .heat3 {
            opacity:0.8;
          }
          .reflect4 {
            opacity:0;
          }
          .heat4 {
            opacity:0.8;
          }
          .reflect5 {
            opacity:0;
          }
          .heat5 {
            opacity:0.8;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Ice-Albedo Feedback">
        <g class="episode">
          <rect x="10" y="76" width="120" height="49" fill="#14394a"/>
          <path d="M12 76H65.84L62.84 87H12Z" class="ice" fill="#c9e7df" stroke="#f2f1d3"/>
          <path d="M10 76L130 76" stroke="#779ea7"/>
          <circle cx="118" cy="21" r="9" fill="#efd086"/>
          <path d="M130 21L134 21" stroke="#efd086"/>
          <path d="M126.485 29.485L129.314 32.314" stroke="#efd086"/>
          <path d="M118 33L118 37" stroke="#efd086"/>
          <path d="M109.515 29.485L106.686 32.314" stroke="#efd086"/>
          <path d="M106 21L102 21" stroke="#efd086"/>
          <path d="M109.515 12.515L106.686 9.686" stroke="#efd086"/>
          <path d="M118 9L118 5" stroke="#efd086"/>
          <path d="M126.485 12.515L129.314 9.686" stroke="#efd086"/>
          <path d="M22 36L22 69" stroke="#efd086" stroke-width="1.6"/>
          <g transform="translate(22 66) rotate(90)" fill="#efd086">
            <path d="M-7 -1H2V-4L8 0 2 4V1H-7Z"/>
          </g>
          <path d="M22 74L12 40" class="reflect0" fill="none" stroke="#d5f2ed" stroke-width="2" opacity="1"/>
          <circle cx="22" cy="94" r="7" class="heat0" fill="#e99760" opacity="0.06"/>
          <path d="M40 36L40 69" stroke="#efd086" stroke-width="1.6"/>
          <g transform="translate(40 66) rotate(90)" fill="#efd086">
            <path d="M-7 -1H2V-4L8 0 2 4V1H-7Z"/>
          </g>
          <path d="M40 74L30 40" class="reflect1" fill="none" stroke="#d5f2ed" stroke-width="2" opacity="1"/>
          <circle cx="40" cy="94" r="7" class="heat1" fill="#e99760" opacity="0.06"/>
          <path d="M58 36L58 69" stroke="#efd086" stroke-width="1.6"/>
          <g transform="translate(58 66) rotate(90)" fill="#efd086">
            <path d="M-7 -1H2V-4L8 0 2 4V1H-7Z"/>
          </g>
          <path d="M58 74L48 40" class="reflect2" fill="none" stroke="#d5f2ed" stroke-width="2" opacity="1"/>
          <circle cx="58" cy="94" r="7" class="heat2" fill="#e99760" opacity="0.06"/>
          <path d="M76 36L76 69" stroke="#efd086" stroke-width="1.6"/>
          <g transform="translate(76 66) rotate(90)" fill="#efd086">
            <path d="M-7 -1H2V-4L8 0 2 4V1H-7Z"/>
          </g>
          <path d="M76 74L66 40" class="reflect3" fill="none" stroke="#d5f2ed" stroke-width="2" opacity="0"/>
          <circle cx="76" cy="94" r="7" class="heat3" fill="#e99760" opacity="0.8"/>
          <path d="M94 36L94 69" stroke="#efd086" stroke-width="1.6"/>
          <g transform="translate(94 66) rotate(90)" fill="#efd086">
            <path d="M-7 -1H2V-4L8 0 2 4V1H-7Z"/>
          </g>
          <path d="M94 74L84 40" class="reflect4" fill="none" stroke="#d5f2ed" stroke-width="2" opacity="0"/>
          <circle cx="94" cy="94" r="7" class="heat4" fill="#e99760" opacity="0.8"/>
          <path d="M112 36L112 69" stroke="#efd086" stroke-width="1.6"/>
          <g transform="translate(112 66) rotate(90)" fill="#efd086">
            <path d="M-7 -1H2V-4L8 0 2 4V1H-7Z"/>
          </g>
          <path d="M112 74L102 40" class="reflect5" fill="none" stroke="#d5f2ed" stroke-width="2" opacity="0"/>
          <circle cx="112" cy="94" r="7" class="heat5" fill="#e99760" opacity="0.8"/>
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

if (!customElements.get("concept-ice-albedo-feedback")) {
  customElements.define("concept-ice-albedo-feedback", ConceptIceAlbedoFeedback);
}
