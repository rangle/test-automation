import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
  <footer className="footer">
    <span className="todo-count">
      <strong>{props.remaining}</strong>
      {props.remaining === 1 ? ' todo' : ' todos'} left
    </span>
    <ul className="filters">
      <li>
        <Link to="/" qa-id="filter-all">
          All
        </Link>
      </li>{' '}
      <li>
        <Link to="/active" qa-id="filter-active">
          Active
        </Link>
      </li>{' '}
      <li>
        <Link to="/completed" qa-id="filter-completed">
          Completed
        </Link>
      </li>
    </ul>
  </footer>
)
