/** @type {import('jest').Config} */
const config = {
  displayName: "Binar Challenge 8 - Unit Test",
  testEnvironment: "node",
  testMatch: ["<rootDir>/tests/**/*.test.js"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  silent: true,
  detectOpenHandles: false,
  verbose: true,
  passWithNoTests: true,
  forceExit: true,
};

module.exports = config;
