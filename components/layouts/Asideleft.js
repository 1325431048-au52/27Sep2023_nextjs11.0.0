import Link from 'next/link'
import React from 'react'

export default function Asideleft() {
  return (
    <React.Fragment>
    <aside className='col-3 s_tbdr'>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" href="/flight">The Flight</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/city">The City</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/Food">The Food</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/Island">The Island</Link>
      </li>
    </ul>

    </aside>
    </React.Fragment>
  )
}
