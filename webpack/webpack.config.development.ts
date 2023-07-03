import type webpack from "webpack";
import path from "path";
import type webpackdev from "webpack-dev-server";

const configuration: webpack.Configuration | webpackdev.Configuration = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "../assets"),
      publicPath: '/assets'
    },
    client: {
      //  Prints compilation progress in percentage in the browser.
      progress: true,
    },
    compress: true,
    port: 9000,
  },
};

export default configuration;
