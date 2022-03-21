import React from 'react'
import { data } from './data'

function Newhead(props) {

  const {href,link}
  return (
   <div className="navbar-collapse collapse">
          <ul className="navbar-nav nav-justified w-100 nav-fill">
                <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href={href}>{ link}</a>
                </li>
            </ul>
        </div>
  )
}