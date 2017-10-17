let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  //入口文件
  entry: './src/main.js',
  //输出配置
  output:{
    path:path.resolve('./build'),//打包后存放的目录
    filename:'bundle.js',//打包后存放的文件名
  },
  //配置调试工具，报错的话会提示源码的位置
  devtool:'cheap-module-source-map',
  module:{
    rules:[
      {
        test:/\.js$/,
        use:'babel-loader',
        exclude:/node_modules/
      },
      {
        test:/\.less$/,
        use:["style-loader","css-loader","less-loader"]
      },
      {
        test:/\.(png|jpg|gif|bmp)$/,
        use:'url-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ]
}