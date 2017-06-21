const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'lib/index'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'reactLoaders',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
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
