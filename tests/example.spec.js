const { test, expect } = require('@playwright/test');

test('open example site', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});