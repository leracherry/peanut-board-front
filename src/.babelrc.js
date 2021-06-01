module.exports = api => {
  const env = api.env();

  api.cache.using(() => env === 'development');

  const plugins = [
    ['@babel/plugin-proposal-decorators', {
      legacy: true
    }],
    ['@babel/plugin-proposal-class-properties', {
      loose: true
    }],
    // Included until Node v.10 release (async generators)
    '@babel/plugin-syntax-dynamic-import',
  ];

  if (env === 'development') {
    plugins.push('react-hot-loader/babel');
  }

  return {
    presets: ["airbnb"],
    plugins,
  };
};