import React from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
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
      <h5>Want to get in touch?</h5>

      <h2>email me</h2>

      <div className='container contact-container'>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required></input>

          <input type='email' name='email' placeholder='Your Email' required></input>

          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>

          <button type='submit' className='contact-btn'>SUBMIT</button>

        </form>

      </div>
    </section>
  )
}

export default Contact