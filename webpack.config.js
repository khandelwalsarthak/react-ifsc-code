const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    libraryTarget: "commonjs"
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: [/\.js?$/, /\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ],
  externals: {
    // Use external version of React
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
}
