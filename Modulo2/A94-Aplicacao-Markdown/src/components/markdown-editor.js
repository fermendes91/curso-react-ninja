'use strict'

import React, { PropTypes } from 'react'
import Header from '../components/markdown-editor-header'

const MarkdownEditor = ({value, isSaving, handleChange, handleRemove, getMarkup}) => (
  <section className='editor'>
    <Header isSaving={isSaving} handleRemove={handleRemove} />

    <textarea name='textarea' value={value} onChange={handleChange} autoFocus />
    <div className='view' dangerouslySetInnerHTML={getMarkup()} />

  </section>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  isSaving: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired
}

export default MarkdownEditor
