import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import './footer.css'

const Footer = () => {
  return (
    <div>

      <div className='footer-socials'>
        <a href='https://www.linkedin.com/in/loren-bako-5383b1245/' target='_blank' rel='noreferrer' className='social-icons'><BsLinkedin size={42} /></a>
        
        <a href='https://github.com/lbako801' className='social-icons' target='_blank' rel='noreferrer'><BsGithub size={42} /></a>
      </div>

      <a href='https://github.com/lbako801' target='blank' rel='noreferrer' className='footer-link'>&copy; LOREN BAKO</a>

    </div>
   
  )
}

export default Footer