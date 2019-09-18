'use strict'

import React, {PropTypes} from 'react'

import style from'./actions.css'

const Actions = ( {handleRepos, handleStarred} ) => (
  <div className={style.actions}>
    <button onClick={handleRepos}>Ver repositorios</button>
    <button onClick={handleStarred}>Ver favoritos</button>
  </div>
)

Actions.propTypes = {
  handleRepos: PropTypes.func.isRequired,
  handleStarred: PropTypes.func.isRequired
}

export default Actions