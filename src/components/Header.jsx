import React, { Component } from 'react'
import "./css/header.css";


class Header extends Component {
  render() {
    return (
      <div>
        <header className='header'>
            <div style={{fontSize:"2rem"}}>AAA</div>
            <ul className='nav--bar'>
                <li><a href="">Home</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </header>
      </div>
    )
  }
}

export default Header