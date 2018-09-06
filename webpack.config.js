'use strict';
const path = require('path');

const serveConfig = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    minimize: false
  },
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.node.js',
    library: 'HavvenJs',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  }
};

const clientConfig = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    minimize: false
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    library: 'HavvenJs',
    libraryTarget: 'umd'
  }
};

module.exports = [clientConfig, serveConfig];