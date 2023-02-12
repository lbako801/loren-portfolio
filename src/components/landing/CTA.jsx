import React from 'react'
import './cta.css'
import Resume from '../../assets/loren-bako-resume.pdf'

const CTA = () => {
  return (
      <div id='cta-btns'>
          <a href={Resume} target="_blank" rel="noreferrer" className='btn'>RESUME</a>
          <a href='#contact' className='btn'>CONTACT</a>
      </div>
  )
}

export default CTA