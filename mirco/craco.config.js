const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      return webpackConfig;
    },
    plugins: [
      // 查看打包的进度
      new SimpleProgressWebpackPlugin(),
      new ModuleFederationPlugin({
        name: 'app_one_remote',
        remotes: {
          "app2": "app2@http://localhost:3002/remoteEntry.js"
        },
        shared: [
          "react",
          "react-dom",
        ]
      })
    ]
  }
}