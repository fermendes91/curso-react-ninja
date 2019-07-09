'use strict'

import React, { Component } from 'react'

class Plugin extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    console.log('Clicou no botão ! ', this.myInput)
    this.myInput.focus()
  }

  // OBS -> O ref não pode ser usado em DUMB components ( ou seja função criada de forma pura ) que não manipula estado.
  render() {
    return (
      <div>
        {/* ref é uma referencia para um objeto do DOM que o react tem, a função no ref é executada assim que o elemento é renderizado  */}
        <input type='text' ref={(node) => (this.myInput = node )}></input>
        {/* no codigo acima, o this.myInput irá receber o nó do DOM referente ao input, tendo em vista que o REF é uma referencia daquele nó. */}
        <button onClick={this.handleClick}>Focus</button>
      </div>
    )
  }
}

export default Plugin
