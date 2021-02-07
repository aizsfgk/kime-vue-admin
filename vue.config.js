'use strict'

const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title || 'Kime Vue Admin'

const port = process.env.port || process.env.npm_config_port || 9988

module.exports = {
  // 部署应用包时的基本URL
  publicPath: '/',
  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetDir: 'static',
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效
  lintOnSave: process.env.NODE_ENV === 'development',
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  productionSourceMap: false,
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: port,
    open: true,
    overlay: {
      warning: false,
      errors: true
    }
  }
}
