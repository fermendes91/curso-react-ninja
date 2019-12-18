'use strict'

import React, { PropTypes } from 'react'

const MarkdownEditorHeader = ({ isSaving, handleRemove }) => (
  <header className='editor-header'>
    <p className="save-message">
      { isSaving ? 'Salvando...' : 'Salvo!' }
    </p>

    <button className='button-remove' onClick={handleRemove}>Remover</button>
  </header>
)

MarkdownEditorHeader.propTypes = {
  isSaving: PropTypes.bool.isRequired,
  handleRemove: PropTypes.func.isRequired
}

export default MarkdownEditorHeader