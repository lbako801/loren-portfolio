import React from 'react'
import Landing from './components/landing/Landing'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Work from './components/work/Work'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
      <Nav />
      <Landing />
      <About />
      {/* <Work /> */}
      <Contact />
    </>
  )
}

export default App