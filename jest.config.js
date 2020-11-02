module.exports = {
  preset: "react-native",
  verbose: true,
  testURL: "http://localhost/",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      diagnostics: false,
      tsConfigFile: "tsconfig.jest.json",
    },
  },
  transform: {
    "^.+\\.js?$": "babel-jest",
    "^.+\\.tsx?$": "babel-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  modulePaths: ["<rootDir>"],
  setupFiles: ["./tests/setup-tests.js"],
  setupFilesAfterEnv: [
    "<rootDir>/tests/setup-tests.js"
  ],
  transformIgnorePatterns: [
    "!node_modules/react-runtime"
  ]
};
