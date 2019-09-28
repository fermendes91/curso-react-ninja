'use strict'

import React, { Component } from 'react'

// this.state -> Manipulador do estado da aplicação. Componente Stateful manipula o estado. Stateless não manipula o estado.
// o state não funciona em componentes de funções puras.
class App extends Component {
  constructor (props) {
    super() // sempre que criamos uma classe constructor devemos chamar o metodo super para inicilizar o componente pai.
    
    // estado inicial 
    this.state = {
      text: 'Fernando'
    }
  }

  render () {
    return (
      <div className='container' onClick={() => (
        this.setState({
          text: 'Mendes'
        })
      )}>
          {this.state.text}
      </div>
    )
    // this.setState => é usado para mudar o estado da nossa aplicação, é somente com ele que podemos mudar o valor das variaveis existentes do componente
    // quando utilizamos o setStates o componente será renderizado novamente, atualizando o valor de Fernando para Mendes.
  }
}


export default App
