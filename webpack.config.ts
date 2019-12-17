import path from "path";
import webpack from "webpack";
// @ts-ignore
import { BundleStatsWebpackPlugin } from "bundle-stats";

const config: webpack.Configuration = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js"
  },
  plugins: [new BundleStatsWebpackPlugin()]
};

export default config;
