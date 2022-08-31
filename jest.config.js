// <<<<<<< HEAD
// =======
// <<<<<<< HEAD
// >>>>>>> 94e1fa078107b26d264c3ce8d5d4687e025fe4ab
// module.exports = {
//   clearMocks: true,
//   coverageDirectory: "coverage",
//   testEnvironment: "jsdom",
//   transform: {
//     '^.+\\.jsx?$': 'babel-jest',
//   },
//   moduleNameMapper: {
//     "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
//     "\\.(scss|sass|css)$": "<rootDir>/__mocks__/styleMock.js"
//   }
// <<<<<<< HEAD
// };
// =======
// };
// =======
const config = {
  verbose: true,
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
  },
  setupFilesAfterEnv: ["./spec/setup.js"],
  testEnvironment: 'jsdom',
};

module.exports = config;
// >>>>>>> 3e9593437f4cb57411b38b219a6cb7f592662d49
// >>>>>>> 94e1fa078107b26d264c3ce8d5d4687e025fe4ab
