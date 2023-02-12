import React from 'react'
import PIC from '../../assets/images/about-me-pic.png'
import {ImLocation2} from 'react-icons/im'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      
      <div className='about-container container'>
<h2>A little about me...</h2>
        <div className="about-me">
          <div className="about-me-img">
            <img className='image-1'src={PIC} alt='Loren Bako in ASCII'/> 
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className='about-card'>
              <ImLocation2 className='about-card-icon'/>
              <h5>Based in...</h5>
              <p>Salt Lake City, Utah!</p>
            </article>
            <article className='about-card'>
              <ImLocation2 className='about-card-icon'/>
              <h5>Based in...</h5>
              <p>Salt Lake City, Utah!</p>
            </article>
            <article className='about-card'>
              <ImLocation2 className='about-card-icon'/>
              <h5>Based in...</h5>
              <p>Salt Lake City, Utah!</p>
            </article>
          </div>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam aperiam alias eligendi, tenetur consequatur incidunt ipsum provident totam ex ratione porro dolores delectus cum vel amet. Minus unde officia at.</p>
         
          <a href='#contact' className='btn'>Hit me up</a>
        </div>

      </div>
    </section>
  )
}

export default About