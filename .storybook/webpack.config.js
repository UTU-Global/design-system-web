module.exports = async ({ config, mode }) => {
  config.module.rules.push(
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
  );

  config.resolve.extensions.push('.ts', '.tsx', '.js');
  return config;
};