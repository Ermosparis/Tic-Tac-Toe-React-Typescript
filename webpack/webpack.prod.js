const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserJSPlugin(), new CssMinimizerPlugin()],
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      name: false,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          priority: 0,
          chunks: "all",
          name: "vendor",
        },
        default: {
          minChunks: 2,
          priority: -1,
          reuseExistingChunk: true,
        },
      },
    },
  },
};
