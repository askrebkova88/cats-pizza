import { test, expect } from '@playwright/test';

test('check header', async ({ page }) => {
  await page.goto('');
  const header = page.getByTestId('homePageHeader');
  await expect(header).toBeVisible();
});
