'use strict';
const webpack = require('webpack');
const path = require('path');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    'userChrome': [ './src/userChrome.scss' ]
  },
  output: {
    path: path.resolve('./dist/'),
    clean: true
  },
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: 'sass-loader', 
            options: {
              implementation: require('sass')
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // userChrome.css
    new MiniCssExtractPlugin(),

    // clean up
    new RemoveEmptyScriptsPlugin(),
  ]
};
