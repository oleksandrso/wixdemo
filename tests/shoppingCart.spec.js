const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');

test('Add product to cart', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigateTo('/');
    await homePage.selectProduct();
    await homePage.addToCart();

    await page.click('text=Cart');

    const cartItem = await page.locator('tr:has-text("Samsung galaxy s6")');
    await expect(cartItem).toBeVisible();
});
