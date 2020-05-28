
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = {
	mode: 'production',
	entry: {
    index: './src/components/index.ts',
    button: './src/components/button/index.ts',
    card: './src/components/card/index.ts',
    datepicker: './src/components/datepicker/index.ts',
    switch: './src/components/switch/index.ts',
    tabs: './src/components/tabs/index.ts',
    tag: './src/components/tag/index.ts',
  },
	output: {
    path: path.join(__dirname, './components'),
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.mjs', '.ts', '.js']
  },
	module: {
		rules: [
			{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'to-string-loader',
          'css-loader',
          'sass-loader']
      }, {
        test: /\.ts?$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
          },
        ],
        exclude: /node_modules/
      }
		]
	}
};