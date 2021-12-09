const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const devConfig = require(`./webpack.dev.js`);
const prodConfig = require(`./webpack.prod.js`);

module.exports = (envVars) => {
  const { env } = envVars;
  let config;
  if (env === "dev") {
    config = merge(commonConfig, devConfig);
  } else if (env === "prod") {
    config = merge(commonConfig, prodConfig);
  }
  return config;
};
