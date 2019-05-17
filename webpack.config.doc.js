const base = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = Object.assign({}, base, {
  mode: 'production',
  entry: {
    example: './site/example.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'docs')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './site/index.html',
      filename: 'index.html'
    })
  ],
});