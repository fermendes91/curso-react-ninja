'use strict'

import React, {PropTypes} from 'react'

const UserInfo = ( {userInfo} ) => (
  <div className='user-info'>
    <img src={userInfo.photo} />
    <h1 className='username'>
      {/* Abaixo estamos usando interpolação de strings */}
      <a href={`https://github.com/${userInfo.login}`}>
        {userInfo.username}
      </a>
    </h1>

    <ul className='repos-info'>
      <li>Repositorios: {userInfo.repos}</li>
      <li>Seguidores: {userInfo.followers}</li>
      <li> Seguindo: {userInfo.following}</li>
    </ul>
  </div>
)

UserInfo.propTypes = {
  // o PropTypes.shape defini um corpo para o objeto que sera recebido. O objeto tem que conter os parametros definidos no shape
  userInfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}

export default UserInfo