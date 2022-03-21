import React, { Component } from 'react'

class HeaderLink extends Component{

    render() {
        return (
            <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href={this.props.LinkUrl}>{ this.props.LinkName}</a>
            </li>
        )
    }

}


class DiffStyle extends Component{

    render() {
        return (
            
        )
    }
}

