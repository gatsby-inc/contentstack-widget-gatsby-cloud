const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  mode: process.env.NODE_ENV,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './',
    disableHostCheck: true,
    public: 'https://datocms-plugin-gatsby-cloud.localtunnel.me'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {}
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Contentstack Gatsby Cloud Widget',
      minify: isProduction
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      append: false,
      publicPath: '',
      assets: [
        'https://unpkg.com/@contentstack/ui-extensions-sdk@2.0.1/dist/ui-extension-sdk.js'
        /*
         * unsure if needed
         */
        // 'https://unpkg.com/@contentstack/ui-extensions-sdk@2.0.1/dist/ui-extension-sdk.css'
      ]
    })
  ]
};
