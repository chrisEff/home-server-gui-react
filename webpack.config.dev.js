const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')

module.exports = merge(baseConfig, {
	devtool: 'cheap-module-eval-source-map',
})
