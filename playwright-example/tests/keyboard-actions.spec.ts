import { test, expect } from '@playwright/test';

test('Keyboard: Shift + A => "A"', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/key_presses');

    await page.click('#target'); // фокус на полі

    await page.keyboard.press('Shift+KeyA');

    await expect(page.locator('#result')).toContainText('You entered: A');
});