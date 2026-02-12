import { test, expect } from '@playwright/test';

test('Login form: locators + asserts', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');

    // CSS locator
    await page.locator('#username').fill('tomsmith');

    // XPath locator (демо)
    await page.locator('xpath=//input[@id="password"]').fill('wrong-password');

    // Role locator (рекомендовано)
    await page.getByRole('button', { name: /login/i }).click();

    // Text locator + expect API (авто-очікування)
    const flash = page.locator('#flash');
    await expect(flash).toBeVisible();
    await expect(flash).toContainText('Your password is invalid!');

    // Locator chaining (ланцюжки)
    const closeBtn = flash.locator('a.close');
    await expect(closeBtn).toBeVisible();
});