const path = require("path");

module.exports = {
  src: path.resolve(__dirname, "../src"), // source files
  assets: path.resolve(__dirname, "../src/assets"), // assets files
  build: path.resolve(__dirname, "../build"), // production build files
  static: path.resolve(__dirname, "../public"), // static files to copy to build folder
};
