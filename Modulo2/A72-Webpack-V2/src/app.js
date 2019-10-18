'use strict'

import React, { Component } from 'react'
import Title from './components/title'

import './css/style.css'

class App extends Component {
  constructor () {
    super()

    this.state = {
      title: '...'
    }
  }

  async componentDidMount () {
    let result = this.state.title

    try {
      result = await this.getTitle()
    } catch (error) {
      console.log('Failed to fetch Title')
    }

    this.setState({
      title: result
    })
  }

  componentWillUnmount () {
    clearTimeout(this.timer)
  }

  getTitle () {
    return new Promise((resolve, reject) => {
      this.timer = setTimeout(() => {
        resolve('My app with Async Await')
      }, 2000)
    })
  }

  render () {
    return (
      <div>
        <Title>{this.state.title}</Title>
      </div>
    )
  }
}

export default App
