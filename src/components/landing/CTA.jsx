import React from 'react'
import Resume from '../../assets/loren-bako-resume.pdf'

const CTA = () => {
  return (
      <div className='cta'>
          <a href={Resume} target="_blank" rel="noreferrer" className='btn'>RESUME</a>
          <a href='#contact' className='btn'>CONTACT</a>
      </div>
  )
}

export default CTA