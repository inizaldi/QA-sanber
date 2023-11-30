const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com/",
    env: {
      Valid_email: "buattest@gmail.com",
      Valid_password: "test123*",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 6000,
    screenshotOnRunFailure: false,
  },
});
