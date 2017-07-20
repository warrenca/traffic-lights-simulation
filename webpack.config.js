var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/Config',
    './src/Flow',
    './src/Lights',
    './src/index',
    // 'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
			path: path.join(__dirname, 'build'),
      publicPath: '/assets/',
      filename: 'main.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
  }
};
