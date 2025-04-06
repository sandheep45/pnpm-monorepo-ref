const customLint = require("@bb/shared-eslint/react.js");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: customLint.extends,
};
