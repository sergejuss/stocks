const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/public',
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, '/app'),
        loader: 'babel-loader',
        query: {
					presets: ['es2015', 'react']
				}
      }
    ]
  },

  plugins: [HtmlWebpackPluginConfig],

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true
}
