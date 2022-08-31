module.exports = function (api) {
  api.cache(false);
  return {
    plugins: ['macros'],
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      ['@babel/preset-react', { runtime: 'automatic' }],
    ],
  };
};
