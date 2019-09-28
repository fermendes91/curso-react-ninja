'use strict'

import React from 'react'

// a propriedade children pegará todo o conteudo dentro do Componente (app.js).
const Button = ({children}) => (
  <button>{children}</button>
)

export default Button
