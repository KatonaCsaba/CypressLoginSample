const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://your-angular-app.com", // Base URL 
  },
});