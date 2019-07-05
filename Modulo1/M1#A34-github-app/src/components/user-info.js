'use strict'

import React from 'react'

const UserInfo = () => (
  <div className='user-info'>
    <img src='https://avatars0.githubusercontent.com/u/44029309?v=4' />
    <h1 className='username'>
      <a href='https://github.com/fermendes91'>Fernando Mendes</a>
    </h1>

    <ul className='repos-info'>
      <li>Repositorios - 5</li>
      <li>Seguidores: 2</li>
      <li> Seguindo: 1</li>
    </ul>
  </div>
)

export default UserInfo