'use strict'

import React from 'react'

// FUNÇÕES PURAS PARA RENDERIZAR COMPONENTE (createClass esta deprecated, utilizar esta forma ES2016)
// --> São funções que dados parametros de entrada, a saida SEMPRE será a mesma e a função não irá alterar VARIAVEIS EXTERNAS a ela.

const Title = (props) => ( // Não precisamos do return usando arrow function.
  <div>
    <h1>Olá Fernando Mendes</h1>
    <br /><h2>Sua convidada {props.name + ' ' + props.lastname} </h2>
    <br /><h2>Idade: {props.age}, Sexo: {props.isMasculino ? 'Masculino' : 'Feminino'}</h2>
    <br /><h2>Proprietaria do Veiculo: {`${props.carro.marca} ${props.carro.modelo}`}</h2>
    <br /><h2>Chegou !</h2>
  </div>
)

// forma de usar o getDefaultProps utilizando função pura.
Title.defaultProprs = {
  name: 'Desconhecido',
  lastName: 'Sem sobrenome'
}
export default Title
