/** @type {import("prettier").Config} */
export default {
  printWidth: 100,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  quoteProps: "consistent",
  tabWidth: 4,
  trailingComma: "es5",
  useTabs: true,
  endOfLine: "lf",
  arrowParens: "always",
  plugins: [],
  overrides: [
    {
      files: ["*.json", "*.md", "*.toml", "*.yml"],
      options: {
        useTabs: false,
      },
    },
  ],
};
