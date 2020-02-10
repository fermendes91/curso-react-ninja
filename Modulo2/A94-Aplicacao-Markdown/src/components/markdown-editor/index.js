'use strict'

import React, { PropTypes } from 'react'
import Header from './header'

const MarkdownEditor = ({value, handleChange, getMarkup, textareaRef, ...props}) => (
  <section className='editor'>
    <Header {...props} />

    <textarea name='textarea' value={value} onChange={handleChange} autoFocus ref={textareaRef} />
    <div className='view' dangerouslySetInnerHTML={getMarkup()} />

  </section>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  isSaving: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  textareaRef: PropTypes.func.isRequired
}

export default MarkdownEditor
