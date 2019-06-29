'use strict'

import React, { Component } from 'react'
import Timer from './timer'

// componente stateful -> Aquele que manipula o estado.
class App extends Component {
  constructor () {
    console.log('CONSTRUCTOR')
    super()
    this.state = {
      showTimer: true
    }
  }

  // METODO QUE SERÁ EXECUTADO ANTES DO COMPONENTE SER CRIADO.
  // O componentWillMount() SERA EXECUTADO POSTERIORMENTE AO CONSTRUCTOR. E O ANTERIORMENTE AO RENDER
  componentWillMount () {
    console.log('COMPONENT WILL MOUNT')
  }

  // METODO QUE SERÁ EXECUTADO POSTERIOR AO COMPONENTE SER CRIADO.
  // O componentDidMount() SERA EXECUTADO POSTERIORMENTE AO CONSTRUCTOR. E O POSTERIORMENTE AO RENDER
  componentDidMount () {
    console.log('COMPONENT DID MOUNT')
  }

  render () {
    console.log('RENDER');
    // na linha 35 temos um "curto-circuito" javascript que verificar se a variavel showTimer é true e se o <Timer /> também e true., caso sim o componente é renderizado.
    return (
      <div>
        {this.state.showTimer && <Timer />}
        <button onClick={() => {
          this.setState({showTimer: !this.state.showTimer})
        }}>Show / hide timer</button>
      </div>
    )
  }
}

export default App
