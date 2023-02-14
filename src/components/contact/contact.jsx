import React from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import Resume from '../../assets/loren-bako-resume.pdf'
import './contact.css'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_j45ll7o', 'template_be3l9mp', form.current, 'ry-gxAoEt6NLgPZO9')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <div className='contact-headers'>
        <h3>Take this...</h3>
        <a href={Resume} rel="noreferrer" target='_blank' className="btn">RESUME</a>
        <h2>EMAIL ME</h2>
      </div>
      <div className='container contact-container'>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required></input>
          <input type='email' name='email' placeholder='Your Email' required></input>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn'>SUBMIT</button>
        </form>
      </div>
      <div className='contact-socials'>
        <a href='https://www.linkedin.com/in/loren-bako-5383b1245/' target='_blank' rel='noreferrer' className='social-icons'><BsLinkedin size={30} /></a>
        <a href='https://github.com/lbako801' className='social-icons' target='_blank' rel='noreferrer'><BsGithub size={30} /></a>
      </div>
    </section>
  )
}
export default Contact 