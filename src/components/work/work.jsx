import React from 'react'
import './work.css'
import TDBSS from '../../assets/tdb-img.jpg'

const Work = () => {
  return (
    <section id='work'>
      <h5>Wanna see some of my work?</h5>
      <h2>projects</h2>

      <div className="container work-container">
        <article className='work-card'>
          <div className='work-img'>
            <img src={ TDBSS} alt='Screenshot of the Date a Base website.'/>
          </div>
          <h3>PROJECT NAME</h3>
          <a href='https://github.com/' className='btn'>GITHUB</a>
          <a href='https://github.com/' className='btn' target='_blank' rel='noreferrer'>DEMO</a>
        </article>
        <article className='work-card'>
          <div className='work-img'>
            <img src={ TDBSS} alt='Screenshot of the Date a Base website.'/>
          </div>
          <h3>PROJECT NAME</h3>
          <a href='https://github.com/' className='btn'>GITHUB</a>
          <a href='https://github.com/' className='btn' target='_blank' rel='noreferrer'>DEMO</a>
        </article>
        <article className='work-card'>
          <div className='work-img'>
            <img src={ TDBSS} alt='Screenshot of the Date a Base website.'/>
          </div>
          <h3>PROJECT NAME</h3>
          <a href='https://github.com/' className='btn'>GITHUB</a>
          <a href='https://github.com/' className='btn' target='_blank' rel='noreferrer'>DEMO</a>
        </article>
        <article className='work-card'>
          <div className='work-img'>
            <img src={ TDBSS} alt='Screenshot of the Date a Base website.'/>
          </div>
          <h3>PROJECT NAME</h3>
          <a href='https://github.com/' className='btn'>GITHUB</a>
          <a href='https://github.com/' className='btn' target='_blank' rel='noreferrer'>DEMO</a>
        </article>
        <article className='work-card'>
          <div className='work-img'>
            <img src={ TDBSS} alt='Screenshot of the Date a Base website.'/>
          </div>
          <h3>PROJECT NAME</h3>
          <a href='https://github.com/' className='btn'>GITHUB</a>
          <a href='https://github.com/' className='btn' target='_blank' rel='noreferrer'>DEMO</a>
        </article>
        <article className='work-card'>
          <div className='work-img'>
            <img src={ TDBSS} alt='Screenshot of the Date a Base website.'/>
          </div>
          <h3>PROJECT NAME</h3>
          <a href='https://github.com/' className='btn'>GITHUB</a>
          <a href='https://github.com/' className='btn' target='_blank' rel='noreferrer'>DEMO</a>
        </article>
      </div>
    </section>
  )
}

export default Work