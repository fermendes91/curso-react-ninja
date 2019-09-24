'use strict'

import React from 'react'

import './actions.css'

const Actions = ({ handleRepos, handleStarred }) => (
  <div className='actions'>
    <button onClick={handleRepos}>Ver repositorios</button>
    <button onClick={handleStarred}>Ver favoritos</button>
  </div>
)

export default Actions
