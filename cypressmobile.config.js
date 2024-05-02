const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    retries: 2,
    viewportWidth: 375,
    viewportHeight: 812,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
