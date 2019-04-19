const merge = require('webpack-merge')
const webpack = require('webpack')
const baseConfig = require('./webpack.config.base.js')

module.exports = merge(baseConfig, {
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
			},
		}),
	],
	devtool: 'cheap-module-eval-source-map',
})
