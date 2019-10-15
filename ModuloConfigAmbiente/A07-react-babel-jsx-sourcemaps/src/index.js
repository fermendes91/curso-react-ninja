'use strict'

// NO ES2015 (ES6) as linhas de exportação devem ser as primeiras linhas do codigo
import Title from './app'
import React from 'react'
import {render} from 'react-dom';
// Short-hand anotation, quando queremos importar um metodo de uma biblioteca, por exemplo o React.render ficou somente render

render(
  <Titles />,
  document.querySelector('[data-js="app"]')
)