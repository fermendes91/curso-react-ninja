'use strict'

import React, { PropTypes } from 'react'

import './repositories.css'

const Repositories = ({ className, title, repos }) => (
  <div className={`repos-list-container ${className}`}>
    <h2>{title}</h2>
    <ul>
      {repos.map((repo, index) => (
        <li key={index}>
          <a href={repo.link}>{repo.name}</a>
        </li>
      ))}
    </ul>
  </div >
)

Repositories.defaultProps = {
  className: '',
  repos: []
}

Repositories.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}

export default Repositories
