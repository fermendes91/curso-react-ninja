'use strict'

import React, { PropTypes } from 'react'
import Pagination from 'components/pagination'
import './repositories.css'

const Repositories = ({ className, title, repos, handlePagination }) => (
  <div className={`repos-list-container ${className}`}>
    <h2>{title}</h2>
    <ul className='repos-list'>
      {repos.repos.map((repo, index) => (
        <li key={index}>
          <a href={repo.link}>{repo.name}</a>
        </li>
      ))}
    </ul>
    <Pagination
      total={repos.pagination.total}
      activePage={repos.pagination.activePage}
      onClick={handlePagination} />
  </div >
)

Repositories.defaultProps = {
  className: ''
}

Repositories.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  handlePagination: PropTypes.func.isRequired,
  repos: PropTypes.shape({
    repos: PropTypes.arrayOf(PropTypes.shape({ // um array de objetos que tenham um determinado shape
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })).isRequired,
    pagination: PropTypes.shape({
      total: PropTypes.number,
      activePage: PropTypes.number
    }).isRequired
  }).isRequired
}

export default Repositories
