import React from 'react'
import { data } from './topSectionData'


const Sections = (props) => {
    const { classN,head, description, learn,order }
    return (
        <section class="container-fluid  second-highlight-wrapper wrapper-color mt-2 pt-5">

      <div class="col-12 text-center">
        <div class="model ">
          <div class="new-p small red pl-4">New</div>
          <h4 class="font-weight-bold p-t-5 pl-5">MacBook Air</h4>
        </div>
        <h5>Twice the speed. Twice the storage.</h5>
        <p class="small">From $999.</p>
        <div class="links-wrapper second-lists ">
          <ul>
            <li class="list-inline-item "><a href="#">Learn more</a></li>
            <li class="list-inline-item"><a href="#">Buy</a></li>
          </ul>
        </div>

      </div>

    </section>
    )
}