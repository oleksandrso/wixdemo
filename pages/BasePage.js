class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigateTo(path = '') {
        await this.page.goto(path);
    }

    async click(selector) {
        await this.page.locator(selector).click();
    }

    async type(selector, text) {
        await this.page.locator(selector).fill(text);
    }

    async isVisible(selector) {
        return this.page.locator(selector).isVisible();
    }

    async getText(selector) {
        return this.page.locator(selector).textContent();
    }
}

module.exports = BasePage;
