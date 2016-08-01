var path = require('path');
var webpack = require('webpack');

module.exports = {
  watch: true,
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    path.resolve(__dirname, 'src/scripts/app.js')
  ],

  output: {
    path: path.join(__dirname, 'public/assets/scripts/'),
    publicPath: '/public/assets/scripts/',
    filename: '[name].bundle.js',
  },

  module: {
    loaders: [
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.styl'],
    modulesDirectories: [
      'node_modules',
      path.join(__dirname, 'src')
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
