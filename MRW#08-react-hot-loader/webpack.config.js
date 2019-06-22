'use strict'

const path = require('path')
const webpack = require('webpack')

// __dirname é uma variavel global do node, o path.join vai fazer a junção desses 3 itens para funcionar em qualquer SO
// precisa de uma entrada e uma saida, o webpack esta configurado para ler da entry e jogar no output com o nome 'bundle.js'

// PublicPath: é o local onde o webpack dev server vai ficar assistindo nosso arquivo de desenvolvimento, gerando um arquivo virtual em memoria.

/* module: modulos do webpack que será utilizado, 
        loaders -> cada objeto do loader dirá pro webpack o que terá que ser feito com cada arquivo.
            test -> todo arquivo terminado com js.
            exclude -> exceto o que esta na pasta node_modules
            include -> incluindo o questa na pasta /src/
            loader -> informara qual loader iremos utilizar.
*/

//devtool: 'source-map' --> Cria um mapa do arquivo principal, para facilitar o debug, pois o codigo gerado pelo babel é inviavel de se analisar.

// react-hot-loader --> responsavel por auto-carregar o arquivo da arvore em questa sendo alterado, o react não renderiza a pagina inteira, somente aquilo que foi alterado.

module.exports = {
    devtool: 'source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src', 'index'),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin() // com isto a magica do hot-load consegue ser executada
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'babel' // babel dependencia que foi instalada via npm
        }]
    }
}