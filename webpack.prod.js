'use strict';
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    'userChrome': [ './src/_build.scss' ]
  },
  output: {
    path: path.resolve('./dist/'),
    clean: true
  },
  mode: 'production',
  devtool: 'source-map',
});