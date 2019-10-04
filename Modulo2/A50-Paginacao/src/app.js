'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

const initialReposState = {
  repos: [],
  pagination: {
    total: 1,
    activePage: 1
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      userInfo: null,
      repos: initialReposState,
      starred: initialReposState,
      isFetching: false
    }

    this.perPage = 3;
    this.handleSearch = this.handleSearch.bind(this) // forma recomendada pelo react para fazer o bind do THIS na aplicação.
  }

  getGitHubApiUrl(username, type, page = 1) {
    const internalUsername = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUsername}${internalType}?per_page=${this.perPage}&page=${page}`
  }

  handleSearch(e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    const target = e.target

    if (keyCode === ENTER) {
      target.disabled = true
      this.setState({
        isFetching: true
      })

      // ao utilizar uma requisição assincrona no caso abaixo (ajax), o react anula todo o evento, se tentarmos desabilitar o botao utilizando
      // e.target.disabled no callback não irá funcionar então foi por isso que o target foi atribuido a uma variavel, assim não perdemos o escopo do evento
      ajax().get(this.getGitHubApiUrl(value)).then(result => {
        target.disabled = false
        this.setState({
          userInfo: {
            username: result.name,
            photo: result.avatar_url,
            login: result.login,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following
          },
          repos: initialReposState,
          starred: initialReposState,
          isFetching: false
          // limpamos os repositorios a cada chamada de busca.
        })
      })
    }
  }

  getRepos(type, page) {
    return (e) => {
      const login = this.state.userInfo.login

      ajax().get(this.getGitHubApiUrl(login, type, page)).then( (result, xhr) => {
        const linkHeader = xhr.getResponseHeader('Link') || ''
        const totalPagesMatch = linkHeader.match(/&page=(\d+)>; rel="last/)

        this.setState({
          [type]: {
            repos: result.map((repo) => ({
              name: repo.name,
              link: repo.html_url
            })),
            pagination: {
              total: totalPagesMatch ? +totalPagesMatch[1] : this.state[type].pagination.total,
              activePage: page
            }
          }
        }, () => { // como o setState é assincrono, ao terminar de popular o novo array, fiz um console do novo array criado
          console.log("State assincrono.")
        })
      })
        .always(() => this.setState({ isFetching: false }))
    }
  }

  render() {
    function sum(x, y, z) {
      return x + y + z
    }

    return (
      <AppContent
        {...this.state} // spread-operator separa as propriedades do objeto, no caso estamos utilizando o spread operator dentro de um objeto para clonar um objeto.
        handleSearch={this.handleSearch}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
        handlePagination={(type, page) => this.getRepos(type, page)()}
      />
    )
  }
}

export default App
