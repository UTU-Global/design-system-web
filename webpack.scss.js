
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = {
	mode: 'production',
	entry: {
    main: './src/visual/index.scss'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "visual.css",
    }),
  ],
	// output: {
	// 	path: path.resolve(__dirname, '/'),
	// 	filename: 'visual.scss',
	// },
	module: {
		rules: [
			{
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader']
      }
		]
	}
};