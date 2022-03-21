import React, { Component } from 'react'


class Trysection extends Component {
    render() {
        return (
            <section className={this.props.classNameN}>
      <div className="row">
        <div className="col-12 text-center">
          <div className="model ">
            <div className="new-p small red pl-4">New</div>
            <h4 className="font-weight-bold pl-5">iPad Pro</h4>
          </div>
          <div className="links-wrapper ">
            <ul>
              <li className="list-inline-item"><a href="">Learn more</a></li>
              <li className="list-inline-item"><a href="">Order</a></li>
            </ul>
          </div>
          <div className="under_ipad-text ">
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
                <Trysection classNameN = "container-fluid main-highlight-wrapper mt-3" />
                <Trysection classNameN = "container-fluid  second-highlight-wrapper wrapper-color mt-2 pt-5" />
                
            </div>
            
        )
    }
}

export default Newmidsection