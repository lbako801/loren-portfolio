import React from 'react'
import PIC from '../../assets/images/about-me-img.png'
import './about.css'

const About = () => {
  return (
    <section id='about' className='about-section'>

      <h2>Who am I?</h2>
      
      <div className='about-content'>
        <img src={PIC} className='image-1' />
        
        <div className='about-info-container'>
        <p className='about-info'><span className='line-break'>>></span> I'm a full-stack engineer who combines tech skills with UI/UX design. I'm based in SLC and have worked on web dev projects and helped local businesses boost their online presence.<br></br><br></br><span className='line-break'>>></span> My front-end expertise includes HTML, CSS, JS, and React. I'm also skilled in backend and database programming with Node.js, MySQL, MongoDB, and PostgreSQL.<br></br><br></br><span className='line-break'>>></span> In my free time, I'm a vintage tech fan, motorcycle lover, and a dungeon master for D&D. I bring a fun and personable approach to work and love connecting with the tech community.</p>
        </div>
 
      </div>
 
    </section>
  )
}

export default About

