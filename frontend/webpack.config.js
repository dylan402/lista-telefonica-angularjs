const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV == 'production' ? 'production' : 'development',
  entry: [path.resolve(__dirname, 'app.js')],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      filename: path.join(__dirname, 'dist', 'index.html'),
    }),
    new MiniCssExtractPlugin({ filename: 'styles.[contenthash].css' }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        include: [path.join(__dirname, 'views')],
        exclude: [/node_modules/, path.join(__dirname, 'index.html')],
        loader: 'html-loader',
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  output: {
    filename: 'app.bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist',
  },
};
