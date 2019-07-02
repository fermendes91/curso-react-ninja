'use strict'

import React, { Component } from 'react'
import Timer from './timer'

// componente stateful -> Aquele que manipula o estado.
class App extends Component {
  constructor () {
    console.log('constructor APP')
    super()
    this.state = {
      time: 0,
      showTimer: true
    }
  }

  // METODO QUE SERÁ EXECUTADO POSTERIOR AO COMPONENTE SER CRIADO.
  // O componentDidMount() SERA EXECUTADO POSTERIORMENTE AO CONSTRUCTOR. E O POSTERIORMENTE AO RENDER
  componentDidMount () {
    console.log('componentDidMount APP')
  }

  // METODO QUE SERÁ EXECUTADO ANTES DO COMPONENTE SER CRIADO.
  // O componentWillMount() SERA EXECUTADO POSTERIORMENTE AO CONSTRUCTOR. E O ANTERIORMENTE AO RENDER
  componentWillMount () {
    console.log('componentWillMount APP')
  }

  render () {
    console.log('render APP');
    // na linha 35 temos um "curto-circuito" javascript que verificar se a variavel showTimer é true e se o <Timer /> também e true., caso sim o componente é renderizado.
    return (
      <div>
        {this.state.showTimer && <Timer time={this.state.time} />}
        <button onClick={() => {
          this.setState({showTimer: !this.state.showTimer})
        }}>Show / hide timer</button>
        <button onClick={() => {
          this.setState({time: this.state.time + 5 })
        }}>Change Props.</button>
        <button onClick={() => {
          this.setState({time: 20})
        }}>Not Render</button>
      </div>
    )
  }
}

export default App
