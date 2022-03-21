import React from 'react'
import { data } from './topSectionData'


const Sections = (props) => {
    const { classN,head, description, learn,order }
    return (
        <section className={`container-fluid ${classN}  wrapper-color mt-2 pt-5`}>

      <div className="col-12 text-center">
        <div className="model ">
          <div className="new-p small red pl-4">{head}</div>
          <h4 className="font-weight-bold p-t-5 pl-5">{description}</h4>
        </div>
        <h5>Twice the speed. Twice the storage.</h5>
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