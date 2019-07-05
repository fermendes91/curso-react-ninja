'use strict'

import React, { Component } from 'react'
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repositories from './components/repositories'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Search />
        <UserInfo />
        <Actions />
        <Repositories className='repos' title='Repositorios' repos={[{
          name: 'Nome Repositorio',
          link: 'Link Repo'
        }]} />
        <Repositories className='starred' title='Favoritos' repos={[{
          name: 'Nome Repositorio',
          link: 'Link Repo'
        }]}/>
      </div>
    )
  }
}

export default App
