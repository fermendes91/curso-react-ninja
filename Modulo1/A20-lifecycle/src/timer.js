'use strict'

import React, { Component } from 'react'

class Timer extends Component {
  constructor() {
    console.log('constructor TIMER')
    super()
    this.state = {
      time: 0
    }

    this.timer;
  }

  // depois que o componente for criado, vai executar este metodo para que nosso timer seja incrementado de 1 em 1 segundo
  componentDidMount () {
    console.log('componentDidMount TIMER')
    this.timer = setInterval(() => {
      this.setState({ time: this.state.time + 1 })
    }, 1000)
  }

  // METODO QUE SERÁ EXECUTADO ANTES DO COMPONENTE SER DESTRUIDO
  // tirando esse metodo é possivel identificar um problema que ficara exibindo no console, devindo o interval tentar atualizar um valor que nao esta mais em tela.
  componentWillUnmount () {
    console.log('componentWillReceiveProps TIMER')
    clearInterval(this.timer)
  }

  // Quando o componente vai receber uma propriedade antes de receber ele cai neste metodo, o this.props são as propriedades atuais e o nextProps será as propriedades que estão vindo.
  // na primeira renderizacao do componente ele não é executado, somente quando recebe alguma propriedade nova.
  // é neste momento que poderemos utilizar o this.setState().
  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps TIMER', this.props, nextProps)

  }

  // metodo que verifica se o nosso componente necessita ser atualizado ou não. Ele é executado antes do render
  shouldComponentUpdate (nextProps, nextState) {
    return this.props.time !== nextProps.time
  }

  // sera executado no momento em que o componente será atualizado. Ultimo ponto antes do componente atualizar.
  // neste ponto não é aconselhavel usar o this.setState()
  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate TIMER', this.props, nextProps)
  }

  // sera executado apos a renderizacao do componente. Recebe por parametros recebe as propriedades anteriores e o estado anterior da aplicação.
  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate TIMER', this.props, prevProps)
  }
  
  render() {
    console.log('render TIMER')
    return (
      <div>Timer: {this.state.time}</div>
    )
  }
}

export default Timer