module.exports = {
  extends: "airbnb",
  rules: {
    "no-param-reassign": ["warn"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "space-infix-ops": ["error"],
  },
};
