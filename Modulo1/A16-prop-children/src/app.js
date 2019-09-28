'use strict'

import React, { Component } from 'react'
import Button from './button'

class App extends Component {
  render () {
    return (
      <div data-id='1' className='container'>
        <Button >
          <span>SPAN</span> Teste
        </Button>
      </div>
    )
  }
}
App.defaultProprs = {
  name: 'Desconhecido'
}

export default App
