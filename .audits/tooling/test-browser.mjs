import { runBrowserChecks } from "./gallery-browser.mjs";
import { testGallerySearch } from "./test-gallery-search.mjs";
import { testLoadMore, testMobileLoadMore } from "./test-load-more.mjs";
import { testViewportPlayback } from "./test-viewport-playback.mjs";

await runBrowserChecks([testViewportPlayback, testGallerySearch, testLoadMore, testMobileLoadMore]);
