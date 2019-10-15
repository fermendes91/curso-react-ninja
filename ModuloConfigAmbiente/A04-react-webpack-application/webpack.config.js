'use strict'

const path = require('path');

// __dirname é uma variavel global do node, o path.join vai fazer a junção desses 3 itens para funcionar em qualquer SO
// precisa de uma entrada e uma saida, o webpack esta configurado para ler da entry e jogar no output com o nome 'bundle.js'

// PublicPath: é o local onde o webpack dev server vai ficar assistindo nosso arquivo de desenvolvimento, gerando um arquivo virtual em memoria.
module.exports = {
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    }
}