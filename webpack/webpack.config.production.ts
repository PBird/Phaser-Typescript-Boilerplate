import type webpack from "webpack";
import CopyPlugin from "copy-webpack-plugin";
import path from "path";

const configuration: webpack.Configuration = {
  mode: "production",
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../assets/**/*"),
          to: path.resolve(__dirname, "../dist"),
          // if assets folder is empty dont throw error
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
};

export default configuration;
