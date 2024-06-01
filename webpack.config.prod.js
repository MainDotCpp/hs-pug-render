const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyPlugin = require('copy-webpack-plugin');
const pages = [
  'fpa',
]
module.exports = merge(common, {
  mode: 'production',

});
