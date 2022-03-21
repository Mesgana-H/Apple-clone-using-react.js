import React from 'react'



export const data = [ {
  
    id:1,
    href: Mac,
    link: Mac
},
    
    {
    id:2,
    href: Mac,
    link: Mac
},

    {

    id:3,
    href: Mac,
    link: Mac
    },

    {
    id:4,
    href: Mac,
    link: iphone
    },

    {

    id:5,
    href: ipad,
    link: ipad
    },
    
    {
    id:6,
    href: watch,
    link: watch
    },
    
    {
    id:7,
    href: tv,
    link: tv
    },
        
    {
    id:7,
    href: tv,
    link: tv
    },
        
    {
    id:7,
    href: mus,
    link: Music
    },
        
    {
    id:7,
    href: mus,
    link: Support
    }
 ]

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

function BooksList() {
  return (
    <section className="booklist">
      {books.map((lisOfBooks) => {
     
        return <Book key={lisOfBooks.id } {...lisOfBooks}></Book>
    })}
      </section>
      )
}

const Book = (props) => {

  const { img, title, author} = props;
  return (
    <article className="book"> 
  
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author} </h4>
           
    </article>
  )
}


ReactDom.render(<BooksList/>, document.getElementById('root'))