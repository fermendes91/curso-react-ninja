'use strict'

import React from 'react'
import Button from './button'

// composicao -> Utilizar o mesmo componente já criado, para criar novos componentes. Compor em algo novo algo que já existe.
const SearchButton = () => (
  <Button handleClick={() => alert('Pesquisou')}>Pesquisar</Button>
)

export default SearchButton
