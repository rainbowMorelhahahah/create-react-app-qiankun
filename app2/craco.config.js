const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const name = require('./package.json').name

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.output.library = `${name}-[name]`;
      webpackConfig.output.libraryTarget = 'umd';
      webpackConfig.output.uniqueName = `webpackJsonp_${name}`;
      webpackConfig.output.globalObject = 'window';
      return webpackConfig;
    },
    plugins: [
      // 查看打包的进度
      new SimpleProgressWebpackPlugin(),
    ]
  }
}