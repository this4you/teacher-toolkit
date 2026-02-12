import { test, expect } from '@playwright/test';

test('Hover tests', async ({ page }) => {
    // Hover
    await page.goto('https://the-internet.herokuapp.com/hovers');

    const firstFigure = page.locator('.figure').first();
    await firstFigure.hover();

    // Після hover з’являється підпис/лінк
    await expect(firstFigure.locator('.figcaption')).toBeVisible();
    await expect(firstFigure.locator('.figcaption')).toContainText('name: user1');
});