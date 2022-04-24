const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      return webpackConfig;
    },
    plugins: [
      // 查看打包的进度
      new SimpleProgressWebpackPlugin(),
      new ModuleFederationPlugin({
        name: "app2",
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/App'
        },
        shared: [
          "react",
          "react-dom"
        ]
      })
    ]
  }
}