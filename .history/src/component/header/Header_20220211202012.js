import React from 'react'


import { data } from './data'


function Newhead(props) {

  const { href, link } = props;
  return 
    
      <div className="nav-wrapper fixed-top">
		<div className="container">
			<nav className="navbar navbar-toggleable-sm navbar-expand-md">
			    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
			        ☰
			    </button>
			    {/* <a className="navbar-brand mx-auto" href="#"><img src={logo}/></a> */}

			    <div className="navbar-collapse collapse">
			         <ul className="navbar-nav nav-justified w-100 nav-fill">
                <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href={href}>{ link}</a>
                </li>
            </ul>
			    </div>
			</nav>
		</div>
	</div>
  
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