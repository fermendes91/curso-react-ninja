'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

const HtmlPlugin = require('html-webpack-plugin')

const ExtractTextPlugin = require('extract-text-webpack-plugin');

// separar os estilos que vamos separar, um para o CRP (Critical Rendering Path) e outro pros demais
const crp = new ExtractTextPlugin('crp.css')
const styles = new ExtractTextPlugin('[name]-[hash].css')

module.exports = validate ({
    entry: path.join(__dirname, 'src', 'index'),

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]-[hash].js'
    },

    plugins: [
        crp,
        styles,

        new webpack.DefinePlugin({ 
            'process.env': { 
                'NODE_ENV': '"production"'
            }
        }),

        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false } 
        }),

        new webpack.optimize.DedupePlugin(), 

        new webpack.optimize.OccurrenceOrderPlugin(), 

        new HtmlPlugin({
            title: 'GitHub App',
            inject: false, // não será injetado mais nada dentro da aplicação, para podermos injetar de forma manual
            template: path.join(__dirname, 'src', 'html', 'template.html')
        })
    ],
    module: {
        preLoaders: [{
            test: /\.js$/, 
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
            // Loader para o Styles
            test: /\.css$/, 
            exclude: /node_modules|(search|style)\.css/, 
            include: /src/,
            loader: styles.extract('style', 'css')
        }, {   
            // loader somente para o CRP
            test: /(search|style)\.css$/, 
            exclude: /node_modules/,
            include: /src/,
            loader: crp.extract('style', 'css')
        }]
    }
})