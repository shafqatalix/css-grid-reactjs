module.exports = {
  rootDir: "./",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$":
      "identity-obj-proxy",
    "\\.(css|less)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "<rootDir>/jtsp.js",
  },
  moduleFileExtensions: ["js", "ts", "tsx"],
  testMatch: ["**/*.test.(ts|tsx|js)"],
  testURL: "https://npmjs.com/",
};
