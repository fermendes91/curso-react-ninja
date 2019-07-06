'use strict'

import React, {PropTypes} from 'react'

const Actions = ( {handleRepos, handleStarred} ) => (
  <div className='actions'>
    <button onClick={handleRepos}>Ver repositorios</button>
    <button onClick={handleStarred}>Ver favoritos</button>
  </div>
)

Actions.propTypes = {
  handleRepos: PropTypes.func.isRequired,
  handleStarred: PropTypes.func.isRequired
}

export default Actions