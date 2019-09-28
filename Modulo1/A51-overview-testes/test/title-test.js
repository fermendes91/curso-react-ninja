'use strict'

const React = require('react')
// ReactDOMServer consegue gerar uma marcação html para o nosso elemento.
const ReactDOMServer = require('react-dom/server')
// Whacko é uma biblioteca identica ao Jquery, porem para manipular o DOM do lado do servidor.
const $ = require('whacko')
const Title = require('./title')

const TitleComponent = ReactDOMServer.renderToStaticMarkup(
    React.createElement(Title)
)

console.log($(TitleComponent).get(0).tagName)
console.log(TitleComponent);
