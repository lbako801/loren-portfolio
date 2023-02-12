import React from 'react'
import LandingIntro from './LandingIntro'
import CTA from './CTA'
import './landing.css'

const Landing = () => {
  return (
    <div id='header-container'>
      <div>
        <LandingIntro/>
        <CTA />
        <p><span className='scroll-arrow arrow-left'>&#x2193;</span> SCROLL DOWN <span className='scroll-arrow '>&#x2193;</span></p>
      </div>
    </div>
  )
}

export default Landing