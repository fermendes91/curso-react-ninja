'use strict'

import React from 'react'

// componente Stateless -> não manipula estado.
const Square = ({ color }) => (
  <div style={{
    background: color,
    height: '100px',
    width: '100px'
  }} />
)

Square.defaultProps = {
  color: 'red'
}

export default Square
