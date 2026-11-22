import assert from "node:assert/strict";
import { runBrowserChecks } from "./gallery-browser.mjs";

export async function testMatrixMotion(context, gallery) {
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.evaluateOnNewDocument(() => {
    const drawNames = new Set(["draw", "drawFilm", "drawDraft", "drawTrace"]);
    const schedule = window.requestAnimationFrame.bind(window);
    const cancel = window.cancelAnimationFrame.bind(window);
    const pending = new Set();
    window.rainFrames = { count: 0, maxPending: 0, pending };
    window.requestAnimationFrame = callback => {
      if (!drawNames.has(callback.name)) return schedule(callback);
      const id = schedule(time => {
        pending.delete(id);
        window.rainFrames.count++;
        callback(time);
      });
      pending.add(id);
      window.rainFrames.maxPending = Math.max(window.rainFrames.maxPending, pending.size);
      return id;
    };
    window.cancelAnimationFrame = id => { pending.delete(id); cancel(id); };
  });
  const preference = value => page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value }]);
  await page.goto(new URL("/matrix_code/#film", gallery).href);
  for (const mode of ["film", "rain", "binary", "draft", "trace"]) {
    await page.click(`[data-mode="${mode}"]`);
    const initial = await page.evaluate(() => window.rainFrames.count);
    await page.waitForFunction(n => window.rainFrames.count >= n + 2, {}, initial);
    await preference("reduce");
    await page.waitForFunction(() => window.rainFrames.pending.size === 0);
    const snapshot = () => page.evaluate(() => [window.rainFrames.count, document.querySelector("#matrix").toDataURL()]);
    const frozen = await snapshot();
    await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    assert.deepEqual(await snapshot(), frozen, mode + " should hold its reduced-motion frame");
    await preference("no-preference");
    await page.waitForFunction(n => window.rainFrames.count >= n + 2, {}, frozen[0]);
  }
  const background = await context.newPage();
  await background.bringToFront();
  await page.waitForFunction(() => document.hidden && !window.rainFrames.pending.size, { polling: 100 });
  await preference("reduce");
  await page.bringToFront();
  await page.waitForFunction(() => !document.hidden && matchMedia("(prefers-reduced-motion: reduce)").matches && !window.rainFrames.pending.size);
  await preference("no-preference");
  await page.waitForFunction(() => window.rainFrames.pending.size === 1);
  await page.click('[data-mode="classic"]');
  await preference("reduce");
  await preference("no-preference");
  assert.deepEqual(await page.evaluate(() => [window.rainFrames.pending.size, window.rainFrames.maxPending]), [0, 1]);
  assert.deepEqual(errors, []);
  console.log("PASS: five Matrix canvas modes freeze and resume once; background and Classic remain idle.");
}

export async function testRetroControls(context, gallery) {
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto(new URL("/retro/crt_demo.html", gallery).href);
  await page.focus('#archetypeRow [data-archetype="default"]');
  await page.keyboard.press("Tab");
  assert.equal(await page.evaluate(() => document.activeElement.dataset.archetype), "studio");
  await page.keyboard.press("Enter");
  assert.equal(await page.$eval("body", body => body.dataset.crtArchetype), "studio");
  const color = await page.$eval("#colorRow [data-crt-color]:not([aria-pressed=true])", button => {
    button.focus();
    return button.dataset.crtColor;
  });
  await page.keyboard.press("Space");
  await page.reload();
  assert.equal(await page.$eval("body", body => body.dataset.crtArchetype), "studio");
  assert.equal(await page.$eval("#archetypeRow [aria-pressed=true]", button => button.dataset.archetype), "studio");
  assert.equal(await page.$eval("#colorRow [aria-pressed=true]", button => button.dataset.crtColor), color);
  assert.deepEqual(errors, []);
  console.log("PASS: keyboard selection and reload persistence for CRT hardware and color.");
}

if (import.meta.main) await runBrowserChecks([testMatrixMotion, testRetroControls]);
