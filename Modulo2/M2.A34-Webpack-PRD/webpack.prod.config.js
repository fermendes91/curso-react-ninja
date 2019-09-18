'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = validate ({
    entry: path.join(__dirname, 'src', 'index'),

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]-[hash].js'
    },

    plugins: [
        new ExtractTextPlugin('[name]-[hash].css'),

        new webpack.DefinePlugin({ // pega uma entrada da aplicação
            'process.env': { // variavel que define se o ambiente esta rodando em dev ou prd
                'NODE_ENV': '"production"'
            }
        }),

        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false } // não gera warnings ao comprimir o codigo.
        }),

        new webpack.optimize.DedupePlugin(), // diz ao webpack para que não exista duplicação de arquivos

        // Ordena os Chunk's para que os arquivos sejam carregados primeiros
        // Chunk são arquivos separados .js, para não ficar todos dentro de um bundle.js
        new webpack.optimize.OccurrenceOrderPlugin(), 

        new HtmlPlugin({
            title: 'GitHub App',
            template: path.join(__dirname, 'src', 'html', 'template.html')
        })
    ],
    module: {
        preLoaders: [{
            test: /\.js$/, //testa todos os arquivos javascript
            exclude: /node_modules/,
            include: /src/,
            loader: 'standard'
        }],
        loaders: [{
            test: /\.js$/, 
            exclude: /node_modules/,
            include: /src/,
            loader: 'babel', 

        }, {   
            test: /\.css$/, 
            exclude: /node_modules/,
            include: /src/,
            loader: ExtractTextPlugin.extract('style', 'css')
        }]
    }
})