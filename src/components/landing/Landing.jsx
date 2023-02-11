import React from 'react'
import LandingIntro from './LandingIntro'
import CTA from './CTA'
import './landing.css'

const Landing = () => {
  return (
    <header>
      <div className="container header-container">
        <LandingIntro/>
        <CTA/>
      </div>
      <p><span className='scroll-arrow arrow-left'>&#x2193;</span> SCROLL DOWN <span className='scroll-arrow '>&#x2193;</span></p>
    </header>
  )
}

export default Landing