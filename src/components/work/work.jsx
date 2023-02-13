import React from 'react'
import './work.css'
import TDBSS from '../../assets/images/Date-A-Base.png'

const Work = () => {
  return (
    <section id='work' className='work-section'>
      <h2>Here is some recent work</h2>

      <div className='work-card-container'>

        <div className='work-card'>
          <h3>THE DATE-A-BASE</h3>
          <img src={TDBSS} />
          <p>Web app using HTML, CSS, and JavaScript to provide couples with meal, drink, and movie
            recommendations, complete with detailed information and pictures
          </p>
          <div className='work-btns'>
            <a href='https://github.com/lbako801/The-Date-a-base/tree/develop' target='_blank' rel='noreferrer' className='btn'>CODE</a>
            <a href='https://lbako801.github.io/The-Date-a-base/' target='_blank' rel='noreferrer' className='btn'>DEMO</a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Work