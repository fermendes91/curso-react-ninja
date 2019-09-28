'use strict'

import React, { PropTypes } from 'react'
import Search from 'components/search'
import UserInfo from 'components/user-info'
import Actions from 'components/actions'
import Repositories from 'components/repositories'

// responsavel por gerenciar todos os recursos da nossa aplicação
const AppContent = ({
  userInfo,
  repos,
  starred,
  isFetching,
  handleSearch,
  getRepos,
  getStarred,
  handlePagination
}) => (
  <div className='app'>
    <Search handleSearch={handleSearch} isDisabled={isFetching} />
    {isFetching && <div>Carregando...</div>}
    {!!userInfo && <UserInfo userInfo={userInfo} />}
    {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    <div className='repos-container'>
      {!!repos.repos.length && // converte para um booleano, porque 0 é considerado conteudo valido então caso for 0 então será renderizado do mesmo jeito.
      <Repositories 
        className='repos' 
        title='Repositorios' 
        repos={repos} 
        handlePagination={(clicked) => handlePagination('repos', clicked) } />
      }

      {!!starred.repos.length &&
      <Repositories 
        className='starred' 
        title='Favoritos' 
        repos={starred} 
        handlePagination = {(clicked) => handlePagination('starred', clicked)} />
      }
    </div>

  </div>
)

AppContent.propTypes = {
  userInfo: PropTypes.object,
  repos: PropTypes.object.isRequired,
  starred: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired,
  handlePagination: PropTypes.func.isRequired
}

export default AppContent
