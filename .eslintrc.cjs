module.exports = {
  extends: ["../eslint.config.cjs"],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ["dist/", "node_modules/", "*.config.js"],
};
