'use strict'

import React, { Component } from 'react'
import Button from './button'

class App extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        My app
        <Button handleClick={ () => {
          console.log('clicou')
        }}>
        Clique aqui
        </Button>
      </div>
    )
  }
}

export default App
