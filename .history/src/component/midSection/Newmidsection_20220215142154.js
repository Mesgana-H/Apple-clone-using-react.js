import React, { Component } from 'react'


class Trysection extends Component {
    render() {
        return (
            <section class={this.props.ClassN}>
      <div class="row">
        <div class="col-12 text-center">
          <div class="model ">
            <div class="new-p small red pl-4">New</div>
            <h4 class="font-weight-bold pl-5">iPad Pro</h4>
          </div>
          <div class="links-wrapper ">
            <ul>
              <li class="list-inline-item"><a href="">Learn more</a></li>
              <li class="list-inline-item"><a href="">Order</a></li>
            </ul>
          </div>
          <div class="under_ipad-text ">
            <p>Ipad pro available starting 3.25 &nbsp </p>
            <p> &nbsp Magic Keyboard coming in May </p>

          </div>
        </div>
      </div>
    </section>  

        )
    }
}

class Newmidsection extends Component{
    render() {
        return (

            <div>
                <Trysection classN=" container-fluid main-highlight-wrapper mt-3" />
                <Trysection classN=" " />
                
            </div>
            
        )
    }
}