const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app/main.jsx'),
  output: {
    path: path.resolve(__dirname, 'app'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'app'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader'],
      },
    ],
  },
};
