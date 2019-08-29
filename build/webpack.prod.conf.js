const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path")
const ora = require("ora");
const chalk = require('chalk')
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require("copy-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const webpackCommon = require('./webpack.common')
const config = require("../config").build;
const env = require("../config/prod.env");
process.env.NODE_ENV = env.NODE_ENV


let webpackProd = merge(webpackCommon, {
  mode: "production",
  entry: config.main,
  output: {
    path: config.assetsRoot,
    filename: '[name].js'
  },
  devtool: config.devtool,
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.html'),
      inject: true
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new copyWebpackPlugin([{
      from: path.resolve(__dirname, '../src/public/'),
      to: path.resolve(__dirname, '../dist/')
    }]),
    new webpack.optimize.ModuleConcatenationPlugin() //作用域提升 (scope hoisting)
  ],
  optimization: {
    splitChunks: {
      chunks: 'all' // 分割公共代码
    }
  }
})

const spinner = ora('项目构建当中...').start()
spinner.color = 'green'

webpack(webpackProd, (err, stats) => {
  spinner.stop();
  if (err) throw err;
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')
  if (stats.hasErrors()) {
    console.log(chalk.red('  构建失败,出现错误.\n'))
    process.exit(1)
  }
  console.log(chalk.green('构建完成.\n'))
  console.log(chalk.yellow(
    'Tip: 生产文件存放在dist目录下.\n'
  ))
})

module.exports = webpackProd
