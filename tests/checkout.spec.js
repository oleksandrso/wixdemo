const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const CartPage = require('../pages/CartPage');

test('Checkout product', async ({ page }) => {
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);

    await homePage.navigateTo('/');
    await homePage.selectProduct();
    await homePage.addToCart();

    await page.click('text=Cart');
    await cartPage.placeOrder({
        name: 'John Doe',
        country: 'USA',
        city: 'New York',
        card: '1234 5678 9012 3456',
        month: '12',
        year: '2025',
    });

    const confirmationText = await page.locator('.sweet-alert h2').textContent();
    expect(confirmationText).toContain('Thank you for your purchase!');
});
