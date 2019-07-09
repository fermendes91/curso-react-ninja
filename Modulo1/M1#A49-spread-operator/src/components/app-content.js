'use strict'

import React, {PropTypes} from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repositories from './repositories'

// responsavel por gerenciar todos os recursos da nossa aplicação
const AppContent = ({ 
  userInfo, 
  repos, 
  starred,
  isFetching,
  handleSearch, 
  handleRepos, 
  handleStarred
}) => (
  <div className='app'>
    <Search handleSearch={handleSearch} isDisabled={isFetching} />
    {isFetching && <div>Carregando...</div>}
    {!!userInfo && <UserInfo userInfo={userInfo}/>}
    {!!userInfo && <Actions handleRepos={handleRepos} handleStarred={handleStarred} />}

    {!!repos.length && // converte para um booleano, porque 0 é considerado conteudo valido então caso for 0 então será renderizado do mesmo jeito.
      <Repositories className='repos' title='Repositorios' repos={repos} />
    }

    {!!starred.length &&
      <Repositories className='starred' title='Favoritos' repos={starred} />
    }
  </div>
)

AppContent.propTypes = {
  userInfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleRepos: PropTypes.func.isRequired,
  handleStarred: PropTypes.func.isRequired,
}

export default AppContent