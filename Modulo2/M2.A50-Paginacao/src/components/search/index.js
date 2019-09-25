'use strict'

import React, { PropTypes } from 'react'

import style from './search.css'

const Search = ({ handleSearch, isDisabled }) => (
  <div className={style.search} >
    <input
      type='search'
      placeholder='Digite o nome do usuario no GitHub'
      onKeyUp={handleSearch}
      disabled={isDisabled}
      /*  No app.js foi definido uma forma de fazer o disabled pelo componente, agora com o Fetching que á uma variavel para controlar
          o loading da aplicação, o input será desabilitado enquanto o Fetching for true, a aplicação esta com 2 formas de disabled implementadas.
      */
    />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default Search
