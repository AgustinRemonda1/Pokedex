module.exports = {
  testPathIgnorePatterns: ["/node_modules/"],
  setupFiles: ["<rootDir>/src/App/Config/Enzyme/Setup.enzyme.js"],
  setupFilesAfterEnv: ["<rootDir>/src/App/Config/Enzyme/Setup.enzyme.js"],
  moduleNameMapper: {
    "^(components|HOC)/(.*)": "<rootDir>/$1/$2",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "identity-obj-proxy",
    "\\.(css|less)$": "identity-obj-proxy",
  },
};
