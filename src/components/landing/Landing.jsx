import React from 'react'
import LandingIntro from './LandingIntro'
import CTA from './CTA'
import LandingSocials from './LandingSocials'
import './landing.css'

const Landing = () => {
  return (
    <header>
      <div className="container header-container">
        <LandingIntro/>
        <CTA/>
        <LandingSocials/>
      </div>
    </header>
  )
}

export default Landing