import { test, expect } from '@playwright/test';

test('Stable locators + download', async ({ browser }) => {
    // Новий контекст = “чистий браузер” (cookies/storage ізольовані)
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.setContent(`
    <button data-testid="save-btn">Save</button>

    <a data-testid="download-link" download="hello.txt"
       href="data:text/plain,Hello%20Playwright!">Download</a>
  `);

    // ✅ Data-* як стабільний локатор
    await expect(page.getByTestId('save-btn')).toBeVisible();
    await expect(page.getByTestId('save-btn')).toHaveText('Save');

    // ✅ Download + saveAs
    const downloadPromise = page.waitForEvent('download');
    await page.getByTestId('download-link').click();
    const download = await downloadPromise;

    const filePath = test.info().outputPath('hello.txt');
    await download.saveAs(filePath);
    await expect(download.suggestedFilename()).toBe('hello.txt');

    await context.close();
});