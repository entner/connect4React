var path = require('path');
var webpack = require('webpack');
ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    entry: './assets/js/index.js',
    output: {
      path: __dirname,
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /.jsx?$/,
          loader: 'babel',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    },
    stats: {
      colors: true
    },
    devtool: 'source-map'
  },
  {
    entry: './assets/less/connect4.less',
    output: {
      path: __dirname,
      filename: 'style.css'
    },
    module: {
      loaders: [
        {
          test: /.less$/,
          loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!less'),
          exclude: /node_modules/
        }
      ]
    },
    plugins: ([
      new ExtractTextPlugin('style.css', { allChunks: true })
    ])
  }
];