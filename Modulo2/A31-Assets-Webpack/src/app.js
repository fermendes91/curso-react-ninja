'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userInfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }

    this.handleSearch = this.handleSearch.bind(this); // forma recomendada pelo react para fazer o bind do THIS na aplicação.
  }

  getGitHubApiUrl(username, type) {
    const internalUsername = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUsername}${internalType}`
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
      ajax().get(this.getGitHubApiUrl(value)).then((result => {
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
          repos: [],
          starred: [],
          isFetching: false
          // limpamos os repositorios a cada chamada de busca.
        })
      }))
    }
  }

  handleRepos(type) {
    return (e) => {
      const login = this.state.userInfo.login

      ajax().get(this.getGitHubApiUrl(login, type)).then((result => {
        this.setState({
          [type]: result.map((repo) => ({
            name: repo.name,
            link: repo.html_url
          }))
        }, () => { // como o setState é assincrono, ao terminar de popular o novo array, fiz um console do novo array criado
          console.log(this.state.repos)
        })
      }))
    }
  }

  render() {

    // spread-operator com array --> lembrando que o spread-operator separa os objetos, ou itens do array.
    const arr = [1, 2, 3]

    function sum(x, y, z) {
      return x + y + z
    }

    let soma = sum(...arr)
    console.log('TEST USING SPREAD OPERATOR: ' + soma);

    return (
      <AppContent
        {...this.state} // spread-operator separa as propriedades do objeto, no caso estamos utilizando o spread operator dentro de um objeto para clonar um objeto.
        handleSearch={this.handleSearch}
        handleRepos={this.handleRepos('repos')}
        handleStarred={this.handleRepos('starred')}
      />
    )
  }
}

export default App
