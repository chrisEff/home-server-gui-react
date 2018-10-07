module.exports = {
  mode: 'development',
  entry: './src/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                'react',
                'es2015'
              ],
              plugins: [
                'transform-class-properties'
              ]
            }
          }
        ]
      }
    ]
  }
};
