const webpack = require('webpack');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common.config');

module.exports = merge(commonConfig, {
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    port: 9000,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
