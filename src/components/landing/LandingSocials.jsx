import React from 'react'
import { BsGithub } from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
const LandingSocials = () => {
  return (
      <div className='header-socials'>
          <a href='https://www.linkedin.com/in/loren-bako-5383b1245/' target='_blank' className='social-icons'><BsLinkedin/></a>
          <a href='https://github.com/lbako801' className='social-icons'><BsGithub/></a>
    </div>
  )
}

export default LandingSocials