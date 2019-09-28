'use strict'

import React, { Component } from 'react'
import Title from './title'

// Renderizando componente a partir de class extendendo de um React.Componente.
class App extends Component{
    render() {
        return (
            // prop -> propriedade name no componente Title
            <div  data-id='1' className='container'>
                <Title name='Thaysa' lastname='Maciel' age={25} isMasculino={false} carro={{marca: 'Chevrolet', modelo: 'Celta'}}/>
                <label htmlFor='input'>Input</label>
            </div>
            // class e for são palavras registradas do javascript, por esse motivo usamos className e htmlFor para identifcarmos estes atributos para html.
        )
    }
}

// forma de utilizar valores default para variavei que não foram passadas ao componente
App.defaultProprs = {
    name: 'Desconhecido'
}

/*
    // App no caso será a nossa aplicação, para o hot-loader funcionar corretamente os componentes devem ser centralizados dentro de 1 pagina responsavel por toda a aplicação.
    // esta pagina no caso é este .js chamado app.js 

    const App = React.createClass({
    render: function () {
        return (
            // prop -> propriedade name no componente Title
            <div  data-id='1' className='container'>
                <Title name='Thaysa' lastname='Maciel' age={25} isMasculino={false} carro={{marca: 'Chevrolet', modelo: 'Celta'}}/>
                <label htmlFor='input'>Input</label>
            </div>
            // class e for são palavras registradas do javascript, por esse motivo usamos className e htmlFor para identifcarmos estes atributos para html.
        )
    }
})*/

export default App // esta importando o APP, utilizando codigo do ES2015