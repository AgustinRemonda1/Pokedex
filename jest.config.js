module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "\\.(js|jsx)$": "babel-jest",
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: [
    "@testing-library/react/pure",
    "@testing-library/jest-dom/extend-expect",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^(components|HOC)/(.*)": "<rootDir>/$1/$2",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "identity-obj-proxy",
    "^.+\\.svg$": "jest-svg-transformer",
    "\\.(css|less)$": "identity-obj-proxy",
  },
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.test.json",
    },
  },
};
