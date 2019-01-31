const path = require('path')

module.exports = {
	mode: 'development',
	entry: ['@babel/polyfill', './src/app.jsx'],
	output: {
		path: __dirname,
		filename: './docs/bundle.js',
	},
	resolve: {
		alias: {
			// This is only for webpack. Separate alias for jest in jest.config.js.
			'@': path.resolve(__dirname, 'src/'),
		},
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				use: [
					{loader: 'babel-loader'},
				],
			},
		],
	},
	devtool: 'cheap-module-eval-source-map',
}
