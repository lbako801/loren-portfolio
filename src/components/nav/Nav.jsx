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

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setActiveNav(target);
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id='nav'>
      <nav>
        <a href='#home' onClick={(e) => handleNavClick(e, '#home')} className={activeNav === '#home' ? 'active': ''}>HOME</a>
        <a href='#about' onClick={(e) => handleNavClick(e, '#about')} className={activeNav === '#about' ? 'active': ''}>ABOUT</a>
        <a href='#experience' onClick={(e) => handleNavClick(e, '#experience')} className={activeNav === '#experience' ? 'active': ''}>EXPERIENCE</a>
        {/* <a href='#work' onClick={(e) => handleNavClick(e, '#work')} className={activeNav === '#work' ? 'active': ''}>WORK(under const)</a> */}
        <a href='#contact' onClick={(e) => handleNavClick(e, '#contact')} className={activeNav === '#contact' ? 'active': ''}>CONTACT</a>
      </nav>
    </div>
  )
}

export default Nav