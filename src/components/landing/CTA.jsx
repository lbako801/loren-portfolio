import React from 'react'
import Resume from '../../assets/loren-bako-resume.pdf'

const CTA = () => {
  return (
      <div>
          <a href={Resume} target="_blank" rel="noreferrer" className='btn cta'>RESUME</a>
          <a href='#contact' className='btn cta'>CONTACT</a>
    </div>
  )
}

export default CTA