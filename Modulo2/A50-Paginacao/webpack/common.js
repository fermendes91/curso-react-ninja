'use strict'

const path = require('path')

/* configuração base do nosso projeto, tudo o que os webpacks de prod e dev tinham em comum
   foram jogados para este arquivo, com algumas mudanças... que serão definidas e ajustas
   nos webpacks dos respectivos ambientes. */

module.exports = {
  entry: path.join(__dirname, '..', 'src', 'index'),

  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name]-[hash].js'
  },

  htmlPluginConfig: (template) => ({
    title: 'GitHub app',
    template: path.join(__dirname, '..', 'src', 'html', 'template.html')
  }),

  standardPreLoader: {
    test: /\.js$/,
    exclude: /node_modules/,
    include: /src/,
    loader: 'standard'
  },

  jsLoader: {
    test: /\.js$/,
    exclude: /node_modules/,
    include: /src/,
    loader: 'babel'
  },

  cssLoader: {
    test: /\.css$/,
    exclude: /node_modules/,
    include: /src/,
    loaders: ['style', 'css']
  },

  resolve: {
    alias: {
      src: path.join(__dirname, '..', 'src'),
      components: path.join(__dirname, '..', 'src', 'components'),
      utils: path.join(__dirname, '..', 'src', 'utils')
    }
  }
}
