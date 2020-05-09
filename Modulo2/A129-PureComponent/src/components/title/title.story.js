'use strict'

import { storiesOf } from '@storybook/react'
import React, { Component } from 'react'
import Title from './index'

const stories = storiesOf('Title', module)

stories.add('without props', () => (
  <Title>Main Title</Title>
))

stories.add('Title with async/await', () => {
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

    getTitle () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
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

  return <App />
})
