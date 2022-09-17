module.exports = {
  roots: ["<rootDir>/src"],

  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx}",
    // "!<rootDir>/src/**/test/**/*",
    // "!<rootDir>/src/**/factories/**/*",
    // "!<rootDir>/src/**/pages/**/*",
    // "!<rootDir>/src/**/singleton/**/*",
    // "!<rootDir>/src/**/index.ts",
    // "!<rootDir>/src/**/icons.tsx",
    // "!<rootDir>/src/**/bootstrap.tsx",
    // "!<rootDir>/src/bootstrap.tsx",
    // "!<rootDir>/src/microfrontend.tsx",
    // "!<rootDir>/src/**/app.tsx",
    "!**/*.d.ts"
  ],

  coverageDirectory: "coverage",

  // setupFilesAfterEnv: ["<rootDir>/src/main/config/jest-setup.ts"],

  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/coverage/"
  ],

  testEnvironment: "jsdom",

  transform: {
    ".+\\.(ts|tsx)$": "ts-jest",
    ".+\\.(js|jsx)$": "babel-jest"
  },

  moduleNameMapper: {
    // module must come first
    "\\.module\\.css$": "identity-obj-proxy",
    "\\.css$": require.resolve("./__mocks__/style-mock.js"),
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": require.resolve(
      "./__mocks__/fileMock.js"
    ),
    "\\.svg$": require.resolve("./__mocks__/svgrMock.jsx"),
    "@/(.*)": "<rootDir>/src/$1"
  }
};
