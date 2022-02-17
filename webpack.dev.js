'use strict';
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    'userChrome': [ './src/_build.scss' ]
  },
  output: {
    path: path.resolve('./test/'),
    clean: true
  },
  mode: 'development',
  devtool: 'source-map',
});