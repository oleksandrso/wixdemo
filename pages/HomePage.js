const BasePage = require('./BasePage');
const { homePage } = require('../selectors');

class HomePage extends BasePage {
    async selectProduct() {
        await this.click(homePage.productLink);
    }

    async addToCart() {
        this.page.on('dialog', async (dialog) => {
            expect(dialog.message()).toContain('Product added');
            await dialog.accept();
        });

        await this.click(homePage.addToCartButton);
    }

}

module.exports = HomePage;