import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import type webpack from "webpack";


const configuration: webpack.Configuration = {
  entry: {
    index: './src/index.ts',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
    },
  },
};


export default configuration;
