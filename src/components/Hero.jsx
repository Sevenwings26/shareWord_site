import React from 'react'
import Header from './Header'

import './css/header.css'

function Hero() {
  return (
    <div>
        <Header/>
        <div className='hero'>
            <h1>Hero section</h1>
        </div>
    </div>
  )
}

export default Hero