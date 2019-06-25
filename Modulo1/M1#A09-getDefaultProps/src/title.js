'use strict'

import React from 'react'

// props -> são basicamente o que são os atributos HTML
const Title = React.createClass({
    // é possivel passar as propriedades padrões caso alguma propriedade não seja passada para o componente.
    getDefaultProps: function() {
        return {
            name: 'Desconhecido - getDefaultProps',
            lastname: 'Sem Sobrenome - getDefaultProps'
        }
    },
    render: function() {
        return (
            <h1>
               Olá {this.props.name} {this.props.lastname}! 
            </h1>
        )
    }
})

export default Title