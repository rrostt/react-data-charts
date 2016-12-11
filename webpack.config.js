var path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist/',
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'react-data-charts',
  },
  module: {
    loaders: [
      {
        include: [
          path.resolve(__dirname, 'src'),
        ],
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.json'],
  },
  externals: {
    react: 'react',
  },
  plugins: [],
};
