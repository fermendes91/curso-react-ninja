'use strict'

import React from 'react'

// props -> são basicamente o que são os atributos HTML
const Title = React.createClass({
    // é possivel passar as propriedades padrões caso alguma propriedade não seja passada para o componente.
    getDefaultProps: function() {
        return {
            name: 'Fernando',
            lastname: 'Sem Sobrenome - getDefaultProps'
        }
    },
    render: function() {
        return (
            <div>
                <h1>
                    Olá {this.props.name} {this.props.lastname}! 
                </h1> <br/>
                <h2>
                    Idade: {this.props.age}, é Homem: {this.props.isMasculino ? 'Masculino' : 'Feminino'} 
                </h2> <br/>
                <h2>
                    Carro: {this.props.carro.marca} {this.props.carro.modelo}
                </h2>
                
            </div>
            
        )
    }
})

export default Title