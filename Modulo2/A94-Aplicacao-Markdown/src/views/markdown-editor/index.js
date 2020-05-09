'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Files from './files'

const MarkdownEditor = ({ value, handleChange, getMarkup, textareaRef, files, handleOpenFile, ...props }) => (
  <section className='editor'>
    <Header {...props} handleChange={handleChange}/>
    <Files files={files} handleOpenFile={handleOpenFile} />
    <textarea name='textarea' value={value} onChange={handleChange('value')} autoFocus ref={textareaRef} />
    <div className='view' dangerouslySetInnerHTML={getMarkup()} />

  </section>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  isSaving: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  textareaRef: PropTypes.func.isRequired
}

export default MarkdownEditor
