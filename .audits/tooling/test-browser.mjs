import { runBrowserChecks } from "./gallery-browser.mjs";
import { testGallerySearch } from "./test-gallery-search.mjs";
import { testLoadMore, testMobileLoadMore } from "./test-load-more.mjs";
import { testViewportPlayback } from "./test-viewport-playback.mjs";
import { testMatrixMotion, testRetroControls } from "./test-demo-controls.mjs";

await runBrowserChecks([testViewportPlayback, testGallerySearch, testLoadMore, testMobileLoadMore, testMatrixMotion, testRetroControls]);
