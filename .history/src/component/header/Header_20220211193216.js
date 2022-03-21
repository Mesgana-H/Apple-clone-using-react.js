import React from 'react'
import '../../commonResources/css/bootstrap.css'
import '../../commonResources/css/stylesBoot.css'

import {data} from './data'


function Newhead(props) {

  const { href, link } = props;
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

function Header() {
  return (
    <section className="booklist">
      {data.map((lisOfBooks) => {
     
        return <Newhead key={lisOfBooks.id } {...lisOfBooks}></Newhead>
    })}
      </section>
      )
}

export default Header

//ReactDom.render(<BooksList/>, document.getElementById('root'))