'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/button'
import SaveMessage from 'components/save-message'

const MarkdownEditorHeader = ({ title, isSaving, handleRemove, handleCreate, handleChange }) => (
  <header className='editor-header'>
    
    <SaveMessage isSaving={isSaving} />

    <input type='text' value={title} onChange={handleChange('title')} placeholder='Insira um Titulo' />

    <Button onClick={handleCreate} kind='success'>
      Criar Novo
    </Button>

    <Button onClick={handleRemove} kind='danger' >
      Remover
    </Button>
  </header>
)

MarkdownEditorHeader.propTypes = {
  title: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}

export default MarkdownEditorHeader
