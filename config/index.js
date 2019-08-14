const path = require('path');
const { getIp } = require('../build/util')

const distPath = path.resolve(__dirname, '../dist')
let config = {
  build: {
    main: ['@babel/polyfill', path.resolve(__dirname, '../src/index.tsx')],
    assetsRoot: distPath,
    devtool: 'source-map'
  },
  dev: {
    main: path.resolve(__dirname, '../example/src/index.tsx'),
    devtool: 'eval-source-map',
    assetsRoot: distPath,
    host: getIp(),
    port: 8092,
    assetsPublicPath: '/',
    assetsSubDirectory: '' // 静态资源存放处
  }
}

module.exports = config;