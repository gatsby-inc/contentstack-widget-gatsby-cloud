const HtmlWebPackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          },
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      inlineSource: '.(js)$',
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new HtmlWebpackInlineSourcePlugin()
  ]
};