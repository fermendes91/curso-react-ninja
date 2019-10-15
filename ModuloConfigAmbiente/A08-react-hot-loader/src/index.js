'use strict'

// NO ES2015 (ES6) as linhas de exportação devem ser as primeiras linhas do codigo
import App from './app'
import React from 'react'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom';
// Short-hand anotation, quando queremos importar um metodo de uma biblioteca, por exemplo o React.render ficou somente render

// AppContainer --> é um componente do hot-loader que tudo que estiver dentro dele, possa ser feito a atualização via hot-loader
// o App que irá conter todos os nossos componentes da aplicação.
const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

// verifica se o hot-loader esta ativo, é uma ferramenta que não pode estar ativa em produção, somente ambiente de dev
if(module.hot) {
  // sempre que algum arquivo dentro do ./app for alterado, damos um require nele novamente 
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}