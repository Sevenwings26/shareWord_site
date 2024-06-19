import React, { Component } from 'react'
import "./css/header.css";


class Header extends Component {
  render() {
    return (
      <div>
        <header className='header'>
            <div className='logo'>AAA</div>
            <ul className='nav--bar'>
                <li>Home</li>
                <li>Blog</li>
                <li>About</li>
            </ul>
        </header>
      </div>
    )
  }
}

export default Header