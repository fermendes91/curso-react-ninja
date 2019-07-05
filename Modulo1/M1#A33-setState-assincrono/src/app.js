'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()

    this.state = {
      checked: false,
      showContent: false
    }
  }

  render () {
    return (
      <div>
        <label>
          <input type="checkbox" checked={this.state.checked} onChange={() => {
            this.setState({
              checked: !this.state.checked
            }, () => { // função de callback para o setState, como é assincrono podemos colocar o tratamento pos alteração na função de callback
              this.setState({showContent: this.state.checked})
            })
            // se utilizar sem a função de callback, ao clicar na checkbox o valor não será atualizado na hora, devido ser assincrono.
          }} /> Mostrar Conteudo
        </label>

        {this.state.showContent && <div>Olha eu aqui! </div>}
      </div>
    )
  }
}

export default App
