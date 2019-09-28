'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()

    this.state = {
      value: 'Valor inicial',
      checked: false,
      selectValue: '3',
      textAreaValue: 'Text \n Area'
    }
  }

  // qualquer componente de react vai ser renderizado da forma que eu escrevi, ao usar no input um value com string normal
  // não será possivel alterar quando o browser renderizar o componente.
  render () {
    return (
      <div>
        My form
        <form 
          onSubmit={(e) => {
            console.log('event: ', e)
          }}
          
          onChange={(e) => {
            console.log('name: ', e.target.name)
            console.log('value: ', e.target.value)
          }}>
          <input type='text' name='firstName' value={this.state.value} onChange={(event) => {
            console.log(event) // não tem propriedades do evento padrão, este tipo de evento no React é chamado de evento sintetico
            console.log(event.nativeEvent)
            this.setState({
              value: event.target.value
            })
          }}/>  
          <input type='text' name='surname' defaultValue='Valor Inicial de Modo Uncontrolled' />  <br /> <br />
          
          <label> 
            <input type='checkbox' value='my-checkbox' checked={this.state.checked} onChange={(e) => {
              this.setState({checked: e.target.checked })
            }} />
            Checkbox
          </label> <br />

          <input type='radio' name='rb' value='1' defaultChecked onClick={(e) => {
            console.log('clicou no checkbox') // preferencialmente é melhor usar o onChange do que o onClick em React
          }} /> Radio 1
          <input type='radio' name='rb' value='2' /> Radio 2 <br /> <br /> <br />

          <select multiple value={[this.state.selectValue]} onChange={(e) => {
            this.setState({selectValue: e.target.value})
          }}>
            <option value='1'>Opcao 1</option>
            <option value='2'>Opcao 2</option>
            <option value='3'>Opcao 3</option>
          </select> <br /> <br />

          <textarea value={this.state.textAreaValue} onChange={(event) => {
            this.setState({textAreaValue: event.target.value})
          }} /> <br /> <br />

          <button type="submit">Enviar</button>

        </form>
      </div>
    )
  }
}

// O TIPO DE ABORDAGEM PARA ATUALIZAR O CAMPO INPUT É CHAMADO DE COMPONENTES COMPONENTES (CONTROLLED COMPONENTS). São componentes stateless não mantem estado proprio
// uncontrolled components -> quando não colocamos o "value" dentro do input.

export default App
