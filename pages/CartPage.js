const BasePage = require('./BasePage');
const { cartPage } = require('../selectors');

class CartPage extends BasePage {
    async placeOrder(details) {
        await this.click(cartPage.placeOrderButton);
        await this.type(cartPage.nameField, details.name);
        await this.type(cartPage.countryField, details.country);
        await this.type(cartPage.cityField, details.city);
        await this.type(cartPage.cardField, details.card);
        await this.type(cartPage.monthField, details.month);
        await this.type(cartPage.yearField, details.year);
        await this.click(cartPage.purchaseButton);
    }
}

module.exports = CartPage;