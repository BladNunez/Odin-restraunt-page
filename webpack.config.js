
const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',  
    entry: './src/index.js',
    devServer: {
    static: './dist',
  },
    devtool: 'inline-source-map',
      output: {
    filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      },
    module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp|svg|ico)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
