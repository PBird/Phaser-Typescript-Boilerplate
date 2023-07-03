import { merge } from "webpack-merge";
import baseConfig from "./webpack/webpack.config.base";
import devConfig from "./webpack/webpack.config.development";
import prodConfig from "./webpack/webpack.config.production";


const createWebpackConfiguration= (env: any, args: any) => {
  console.log("env : " ,env.NODE_ENV);
  switch (env.NODE_ENV) {
    case "development":
      return merge(baseConfig, devConfig);
    case "production":
      return merge(baseConfig, prodConfig);
    default:
      throw new Error("No matching configuration was found!");
  }
};

export default createWebpackConfiguration;
