module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
};
