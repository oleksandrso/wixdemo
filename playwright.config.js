const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
    timeout: 30000,
    expect: {
        timeout: 5000,
    },
    fullyParallel: true,
    reporter: [
        ['list'],
        ['allure-playwright'],
    ],
    use: {
        baseURL: 'https://www.demoblaze.com',
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
    projects: [
        {
            name: 'chromium',
            use: { browserName: 'chromium' },
        },
        {
            name: 'edge',
            use: {
                browserName: 'chromium',
                channel: 'msedge',
            },
        },
    ],
});
