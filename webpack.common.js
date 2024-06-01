const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PugPlugin = require('pug-plugin');

const pages = [
  'fpa',
  'fpa/result'
]
module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './[name]/app.js',
  },
  plugins: [
    new PugPlugin({
      // - OR - define many pages manually (key is output filename w/o `.html`)
      entry: {
        index: './index.pug',
        ...pages.reduce((acc, page) => {
          acc[`${page}/index`] = `${page}/index.pug`;
          return acc;
        }, {}),
      },
      js: {
        // JS output filename, used if `inline` option is false (defaults)
        filename: '[path]/js/[name].[contenthash:8].js',
        //inline: true, // inlines JS into HTML
      },
      css: {
        // CSS output filename, used if `inline` option is false (defaults)
        filename: '[path]/css/[name].[contenthash:8].css',
        inline: true, // inlines CSS into HTML
      },
    })
  ],
  module: {
    rules: [
      {
        test: /\.(s?css|sass)$/,
        use: ['css-loader', 'sass-loader']
      },
      {
        test: /\.(ico|png|jp?g|webp|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: '[path]/[name].[hash:8][ext][query]',
        },
      },
    ],
  },

};
