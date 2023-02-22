import React from 'react'
import { useState } from 'react'
import './nav.css'

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <div id='nav'>
      <nav>
        <a href='#' onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active': ''} id='home'>HOME</a>
        <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}>ABOUT</a>
        <a href='#work' onClick={()=> setActiveNav('#work')} className={activeNav === '#work' ? 'active': ''}>WORK(under const)</a>
        <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}>CONTACT</a>
      </nav>
    </div>
  )
}

export default Nav