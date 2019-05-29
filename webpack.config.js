const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/html/index.html'),
      filename: 'index.html',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 8080,
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/index.html' },
        { from: /^\/account\.html$/, to: '/index.html' },
        { from: /./, to: '/index.html' }
      ]
    }
  },
  module: {
    rules: [{
      test: /\.html$/,
      use: ['html-loader'],
    }, {
      test: /\.png$/,
      use: ['file-loader'],
    }, {
      test: /\.scss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
          options: {
            includePaths: [path.resolve(__dirname, 'src/scss')],
          }
        }
      ]
    }],
  },
};
