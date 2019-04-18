const path = require('path')

module.exports = {
	mode: 'production',
	entry: ['@babel/polyfill', './src/app.jsx'],
	output: {
		path: __dirname,
		filename: './dist/bundle.js',
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
