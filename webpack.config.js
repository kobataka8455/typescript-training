const path = require('path');

module.exports = {
  // モジュールバンドルを行う起点となるファイルの指定
  // 指定できる値としては、ファイル名の文字列や、それを並べた配列やオブジェクト
  // 下記はオブジェクトとして指定した例
  entry: {
    bundle: './src/index.ts'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts','.js']
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true,
  },
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.ts$/
      }
    ]
  }
}