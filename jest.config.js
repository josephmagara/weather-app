module.exports = {
  preset: "react-native",
  verbose: true,
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
  setupFiles: ["./tests/setup.tsx"],
  setupFilesAfterEnv: [
    "<rootDir>/tests/setup.tsx"
  ],
  transformIgnorePatterns: [
    "!node_modules/react-runtime"
  ]
};
