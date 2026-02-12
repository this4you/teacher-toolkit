import { test, expect } from '@playwright/test';

test('Dynamic loading: avoid flaky waits', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/2');

    // Налаштування таймаутів
    page.setDefaultTimeout(10_000);

    await page.getByRole('button', { name: 'Start' }).click();

    // 1) Явне очікування елемента (коли треба)
    await page.waitForSelector('#finish', { state: 'visible' });
    // await page.waitForTimeout(100); // флікер, повільно, нестабільно ❌

    // 2) Перевірка стану DOM через Expect API (краще, ніж sleep)
    await expect(page.locator('#finish')).toHaveText('Hello World!');
});