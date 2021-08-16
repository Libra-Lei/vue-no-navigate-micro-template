/**
 * @Description: 
 * @Author: Libra
 * @GitHub: https://github.com/Libra-Lei
 * @Date: 2021-08-13 10:59:29
 * @LastEditors: Libra
 * @LastEditTime: 2021-08-13 17:19:56
 */

const { name } = require('./package');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  productionSourceMap: false, // 关闭map文件输出
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  configureWebpack: () => {
    console.log('打包环境：', process.env.NODE_ENV);
    console.log('配置了--------------------');
    return {
      output: {
        // 把子应用打包成 umd 库格式
        library: `${name}-[name]`,
        libraryTarget: 'umd',
        jsonpFunction: `webpackJsonp_${name}`,
        filename: '[name].[id].[hash].js' // 输出文件加指纹，防止浏览器的缓存
      },
      optimization: {
        splitChunks: {
          chunks: 'all'
        }
      },
      plugins: [
        new CompressionPlugin({
          algorithm: 'gzip',
          test: new RegExp('\\.(js|css)$'),
          // 只处理大于1M的文件，默认：0
          threshold: 10240,
          // 示例：一个1024b大小的文件，压缩后大小为768b，minRatio : 0.75
          minRatio: 0.8, // 默认: 0.8
          // 是否删除源文件，默认: false
          deleteOriginalAssets: false
        })
      ]
    }
  },
  devServer: {
    port: 9107,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
    // proxy: {
    // }
  }
}
