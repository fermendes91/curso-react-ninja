'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'

class App extends Component {
  render () {
    return (
      <div data-id='1' className='container' onClick={ (e) => {
        alert('clicou')
      }}>
        <Square />
      </div>
    )
  }
}
// é necessario identificar "key", para cada componente dentro de um array, os tornando unicos.

// ao duplicarmos uma key o React vai nos informar que existem 2 componentes com a mesma KEY... e JUNTA os componentes em 1 só.

App.defaultProprs = {
  name: 'Desconhecido'
}

export default App
