const merge = require('webpack-merge');
const commonConfig = require('./common');

module.exports = merge.smart(commonConfig, {
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      options: {
        presets: ['es2015', 'react'],
        plugins: [['lodash', { id: 'reactstrap' }]]
      }
    }]
  },
});
