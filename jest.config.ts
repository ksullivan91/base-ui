module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // This line ensures jest-dom matchers are available globally
};
