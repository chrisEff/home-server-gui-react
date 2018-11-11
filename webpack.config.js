module.exports = {
	mode: 'development',
	entry: ['@babel/polyfill', './src/app.jsx'],
	output: {
		path: __dirname,
		filename: './docs/bundle.js',
	},
	resolve: {
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
