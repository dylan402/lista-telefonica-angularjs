const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV == 'production' ? 'production' : 'development',
  entry: [path.resolve(__dirname, 'app.js')],
  output: {
    filename: 'app.bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist',
  },
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
        exclude: [path.join(__dirname, 'node_modules'), path.join(__dirname, 'index.html')],
        use: [
          {
            loader: 'ngtemplate-loader',
            options: {
              relativeTo: path.join(__dirname, 'views'),
              prefix: 'views',
            },
          },
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/i,
        exclude: [path.join(__dirname, 'node_modules')],
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};
