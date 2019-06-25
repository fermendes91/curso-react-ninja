'use strict'

import React from 'react'
import Title from './title'

// App no caso será a nossa aplicação, para o hot-loader funcionar corretamente os componentes devem ser centralizados dentro de 1 pagina responsavel por toda a aplicação.
// esta pagina no caso é este .js chamado app.js 
const App = React.createClass({
    render: function () {
        return (
            // prop -> propriedade name no componente Title
            <div  data-id='1' className='container'>
                <Title lastname='Mendes' age={28} isMasculino={true} carro={{marca: 'Chevrolet', modelo: 'Celta'}}/>
                <label htmlFor='input'>Input</label>
                <input type='text' id='input' disabled={true}/>
            </div>
            // class e for são palavras registradas do javascript, por esse motivo usamos className e htmlFor para identifcarmos estes atributos para html.
        )
    }
})

export default App // esta importando o APP, utilizando codigo do ES2015