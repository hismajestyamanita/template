import { test, expect } from '@playwright/test';

test('content width is ~1200 and no overflow', async ({ page }) => {
  await page.goto('/');
  const width = await page.evaluate(() => {
    const el = document.querySelector('.max-w-content') as HTMLElement | null;
    return el ? Math.round(el.getBoundingClientRect().width) : 0;
  });
  expect(width).toBeGreaterThan(1180);
  expect(width).toBeLessThan(1220);

  const overflowX = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth + 2;
  });
  expect(overflowX).toBeFalsy();
});

