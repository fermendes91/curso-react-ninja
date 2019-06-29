'use strict'

import React, { Component } from 'react'

class Timer extends Component {
    constructor () {
        super()
        this.state = {
            time: 0
        }

        this.timer;
    }

    // depois que o componente for criado, vai executar este metodo para que nosso timer seja incrementado de 1 em 1 segundo
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({time: this.state.time + 1})
        }, 1000)
    }

    // METODO QUE SERÁ EXECUTADO ANTES DO COMPONENTE SER DESTRUIDO
    // tirando esse metodo é possivel identificar um problema que ficara exibindo no console, devindo o interval tentar atualizar um valor que nao esta mais em tela.
    componentWillUnmount () {
        clearInterval(this.timer)
    }

    render() {
        return (
            <div>Timer: {this.state.time}</div>
        )
    }
}

export default Timer