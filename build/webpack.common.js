const path = require('path');

const srcPath = path.resolve(__dirname, '../src/');

module.exports = {
  context: path.resolve(__dirname, '../'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': srcPath
    },
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: [srcPath, path.resolve(__dirname, '../example')],
      loader: 'babel-loader'
    }, {
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }]
  }
}