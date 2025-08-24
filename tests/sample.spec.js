// tests/example.spec.js
const { test, expect } = require('@playwright/test');

test('open playwright.dev and check title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
