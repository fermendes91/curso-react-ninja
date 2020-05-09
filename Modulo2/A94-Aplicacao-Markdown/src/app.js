'use strict'

import React, { Component } from 'react'
import marked from 'marked'
import { v4 } from 'node-uuid'

import MarkdownEditor from 'views/markdown-editor'

import 'normalize.css'
import 'highlight.js/styles/dracula.css'
import './css/style.css'

// importando de forma assincrona deixa a renderização da aplicação mais rapida.
import('highlight.js').then((hljs) => {
  marked.setOptions({
    highlight: (code, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(lang, code).value
      }
      return hljs.highlightAuto(code).value
    }
  })
})

class App extends Component {
  constructor () {
    super()

    this.clearState = () => ({
      id: v4(),
      value: ''
    })

    this.state = {
      ...this.clearState(),
      isSaving: null,
      title: '',
      files: {}
    }

    this.handleChange = (field) => (e) => {
      this.setState({
        [field]: e.target.value,
        isSaving: true
      })
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }

    this.handleSave = () => {
      if (this.state.isSaving) {

        const files = {
          ...this.state.files,
          [this.state.id]: {
            title: this.state.title || 'Sem titulo',
            content: this.state.value
          }
        }

        localStorage.setItem('markdown-editor', JSON.stringify(files))
        this.setState({ 
          files,
          isSaving: false 
        })
      }
    }

    this.createNew = () => {
      this.setState(this.clearState())
      this.textarea.focus()
    }

    this.handleRemove = () => {

      // removendo utilizando ES6
      const { [this.state.id]: id, ...files } = this.state.files
     
      localStorage.setItem('markdown-editor', JSON.stringify(files))
      this.setState({files})
      this.createNew()
    }

    this.handleCreate = () => {
      this.createNew()
    }

    this.textareaRef = (node) => {
      this.textarea = node
    }

    this.handleOpenFile = (fileId) => () => {
      this.setState({
        title: this.state.files[fileId].title,
        id: fileId,
        value: this.state.files[fileId].content
      })
    }
  }

  componentDidMount () {
    const files = JSON.parse(localStorage.getItem('markdown-editor'))
    this.setState({ files })
  }

  componentDidUpdate () {
    clearInterval(this.timer)
    this.timer = setTimeout(this.handleSave, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    
    return (
      <MarkdownEditor
        value={this.state.value}
        isSaving={this.state.isSaving}
        handleChange={this.handleChange}
        handleRemove={this.handleRemove}
        handleCreate={this.handleCreate}
        getMarkup={this.getMarkup}
        textareaRef={this.textareaRef}
        files={this.state.files}
        handleOpenFile={this.handleOpenFile}
        title={this.state.title}
      />
    )
  }
}
export default App