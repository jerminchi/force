module.exports = {
  projects: [
    {
      cacheDirectory: ".cache/jest",
      collectCoverage: true,
      coverageDirectory: "./coverage/",
      coverageReporters: ["lcov", "text-summary"],
      displayName: "legacy",
      moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx"],
      reporters: ["default", "jest-junit"],
      roots: ["<rootDir>/src"],
      setupFiles: ["<rootDir>/jest.legacySetup.js"],
      testPathIgnorePatterns: ["<rootDir>/src/v2"],
      testRegex: ".*\\.jest\\.(ts|tsx|js|jsx)$",
      testEnvironment: "jest-environment-jsdom",
      testURL: "https://artsy.net",
      transform: {
        "\\.(gql|graphql)$": "jest-transform-graphql",
        ".(ts|tsx|js|jsx)": "babel-jest",
      },
    },
  ],
}
