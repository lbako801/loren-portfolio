import React, { useState, useEffect } from 'react'
import './nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveNav(`#${entry.target.id}`)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach(section => {
      observer.observe(section)
    })

    return () => {
      sections.forEach(section => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <div id='nav'>
      <nav>
        <a href='#home' onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active': ''} id='home'>HOME</a>
        <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}>ABOUT</a>
        <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}>EXPERIENCE</a>
        {/* <a href='#work' onClick={()=> setActiveNav('#work')} className={activeNav === '#work' ? 'active': ''}>WORK(under const)</a> */}
        <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}>CONTACT</a>
      </nav>
    </div>
  )
}

export default Nav