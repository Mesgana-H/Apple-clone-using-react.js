import React from 'react'
import { data } from './topSectionData'


const Sections = (props) => {
    const { classN,head, description, learn,order } = props
    return (
        <section className={`container-fluid ${classN}  wrapper-color mt-2 pt-5`}>

      <div className="col-12 text-center">
        <div className="model ">
          <div className="new-p small red pl-4"></div>
          <h4 className="font-weight-bold large p-t-5 pl-2">{head}</h4>
        </div>
        <h5>{description}</h5>
        <p className="small">From $999.</p>
        <div className="links-wrapper second-lists ">
          <ul>
            <li className="list-inline-item "><a href="#">{learn}</a></li>
            <li className="list-inline-item"><a href="#">{order}</a></li>
          </ul>
        </div>

      </div>

    </section>
    )
}

function Topsection() { 
  return (
      <section>
          
          {data.map((prop) => {

                  return <Sections key={prop.id} {...prop}></Sections> 
                  })}
    </section>
      )
}



export default Topsection