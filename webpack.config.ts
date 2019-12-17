import path from "path";
import webpack from "webpack";
// @ts-ignore
import { BundleStatsWebpackPlugin } from "bundle-stats";

const config: webpack.Configuration = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js"
  },
  module: {
    rules: [{ oneOf: [{ test: /\.js/, include: /src/, use: "babel-loader" }] }]
  },
  plugins: [new BundleStatsWebpackPlugin()]
};

export default config;
