'use strict'

const path = require('path')
const webpackConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js')

module.exports = function (config, env) {
  const newConfig = webpackConfig(config, env)

  // verifica se já existe preloader, caso não exista cria um array vazio e cria
  // porque se for undefined vai dar problema para fazer a concacetenção.
  newConfig.module.preLoaders = (newConfig.module.preLoaders || []).concat({
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'standard'
  })

  newConfig.resolve = {
    alias: {
      utils: path.join(__dirname, '..', 'src', 'utils')
    }
  }

  return newConfig
}
