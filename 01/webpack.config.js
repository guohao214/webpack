/**
 * Created by Guohao on 2017/6/5.
 */
var webpack = require('webpack')
var extractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  devtool: 'source-map',
  entry: {
    'index': __dirname + '/app/index.js',
    'view': __dirname + '/app/view.js',
  },
  output: {
    path: __dirname + '/app/dist',
    filename: '[name].[hash].js',
    filename: '[name].js'
  },
  devServer: {

  },
  module: {
    loaders:[
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        exclude:['node_modules']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude:['node_modules'],
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new extractTextPlugin("[name]-[hash].css"),
    // new webpack.optimize.UglifyJsPlugin(),
    new webpack.BannerPlugin("Copyright Hao.Guo.")//在这个数组中new一个就可以了
  ],
}
