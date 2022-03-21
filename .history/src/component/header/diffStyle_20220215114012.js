import React, { Component } from 'react'


class HeaderLink extends Component{
    render() {
        return (
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href={this.props.LinkUrl}>{this.props.LinkName}</a>
            </li>
        )
    }
}







class DiffStyle extends Component {

    render() {
        return (
            <div class="nav-wrapper fixed-top">
    <div class="container">
      <nav class="navbar navbar-toggleable-sm navbar-expand-md">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
          data-target=".navbar-collapse">
          ☰
        </button>
        <a class="navbar-brand mx-auto" href="#"><img src="images/icons/logo-sm.png" /></a>

        <div class="navbar-collapse collapse">
          <ul class="navbar-nav nav-justified w-100 nav-fill">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/mac/">Mac</a>
                                </li>
                                <HeaderLink LinkName="mac" LinkUrl="/mac" />
                                 <HeaderLink LinkName="mac" LinkUrl="/"/>
                                <HeaderLink LinkName="mac" LinkUrl="/mac"/>
                                <HeaderLink LinkName="mac" LinkUrl="/mac"/>
                                <HeaderLink LinkName="mac" LinkUrl="/mac"/>
                                                                          
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/search/"><img src="images/icons/search-icon-sm.png" /></a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/cart/"><img src="images/icons/cart-sm.png" /></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
        )
    }}
 export default DiffStyle