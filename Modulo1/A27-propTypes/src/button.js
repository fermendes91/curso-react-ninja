'use strict'

import React from 'react'

// a propriedade children pegará todo o conteudo dentro da Tag Button no componente pai.
const Button = ({ children, handleClick }) => (
  <button className='main-button' onClick={handleClick}>
    {children}
  </button>
)

// definindo propriedades para o nosso componente. o handleClick deve ser passado como uma função para o componente.
// e alem de ser passada para o componente ela será obrigatorio com o uso do isRequired
Button.propTypes = {
  handleClick: React.PropTypes.func.isRequired
  // React.PropTypes.array
  // React.PropTypes.bool
  // React.PropTypes.func
  // React.PropTypes.number
  // React.PropTypes.object
  // React.PropTypes.string
  // React.PropTypes.symbol
  // React.PropTypes.element >> Elemento do proprio React
  // React.PropTypes.instanceOf(message) >> Verifica se é alguma instancia de algum metodo ou classe
  // React.PropTypes.oneOf(['One', 'Two']) >> Se o tipo for um ENUM verifica o conteudo esta dentro do esperado.
  // React.PropTypes.arrayOf(React.PropTypes.number)
  // React.PropTypes.objectOf(React.PropTypes.element)
  // React.PropTypes.shape({color: React.PropTypes.string, age: React.PropTypes.number}) >> Verifica o corpo de um objeto se as propriedades são as esperadas.
  // React.PropTypes.any.isRequired >> Faz somente com que a propriedade seja obrigatoria sem especificar o tipo.
}

export default Button
