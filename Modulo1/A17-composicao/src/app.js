'use strict'

import React, { Component } from 'react'
import LikeButton from './like-button'
import SearchButton from './search-button'

class App extends Component {
  render () {
    return (
      <div data-id='1' className='container'>
        <LikeButton /> <SearchButton />
      </div>
    )
  }
}
App.defaultProprs = {
  name: 'Desconhecido'
}

export default App
