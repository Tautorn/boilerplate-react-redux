const webpack = require('webpack')
const webpackConfig = require('./webpack.config')

const processEnv = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})

webpackConfig.devtool = false
webpackConfig.plugins.push(processEnv)
webpackConfig.output.publicPath = '/'

module.exports = webpackConfig
