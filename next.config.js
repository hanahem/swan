module.exports = {
  env: {
    API_PASS: process.env.API_PASS,
  },
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  }
};
