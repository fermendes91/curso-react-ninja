'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'

class App extends Component{
    render() {
        return (
            <div  data-id='1' className='container'>
                <Title name='Thaysa' lastname='Macieeel' age={25} isMasculino={false} carro={{marca: 'Chevrolet', modelo: 'Celta'}}/>
                <label htmlFor='input'>Input</label>
                
                <br/><br/>
                <Square color='violet' />

                <br/><br/>
                <Square />
                
                <br/><br/>
                {['orange', 'gray', 'pink'].map((square) => (
                    <Square key={square} color={square} />
                ))}
                <br/><br/>

                <h2>Square com chaves duplicadas, React junta todos os duplicados em 1 unico componente, por isso os 3 viraram somente 1 square</h2>
                {['orange', 'gray', 'pink'].map((square) => (
                    <Square key='key' color={square} />
                ))}

                <h2>Utilizando o index do array para definir a key faz com que os 3 squares por mais que tenham cores iguais sejam renderizados sem sobreposição.</h2>
                {['blue', 'red', 'blue'].map((square, index) => (
                    <Square key={index} color={square} />
                ))}

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