import React, {useState, useEffect} from 'react'
import './pages.css'

import Accomplishments from '../components/Accomplishments'
import Projects from '../components/Projects'
import ScrollingWords from '../components/ScrollingWords'
import About from './About'
import NavBar from '../components/NavBar'


import { BsArrowUpCircle } from 'react-icons/bs'

const Home = () => {
  const [showScroll, setShowScroll] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const showScrollBtn = () => {
      if (window.scrollY >= 400) {
        setShowScroll(true)
      } else {
        setShowScroll(false)
      }
    }

    window.addEventListener('scroll', showScrollBtn)

    return () => {
      window.removeEventListener('scroll', showScrollBtn)
    }
  }, [])

  return (
    <>
    <NavBar showItems={true} />
    <div className='container'>
      <div className='grid-container' id='home'>
        <div className='main-header'>
          <h1 className='name'>Taylie Whitworth</h1>
          <span className='title'>Front-end<br/> developer</span>
          <div className='accent-box'></div>
        </div>
        <div className='personal-intro'>
          <p className='specialized'>Specializing in React, JavaScript and Python</p>
          <p className='main-intro'>I have helped companies create a brand for themselves by developing websites for them. I focus on responsiveness, user interaction and unique designs.</p>
          <a className='contact-me' href='mailto:taylie.carlson@gmail.com'>Contact me</a>
        </div>
      </div>
      <div className='card-section-scroll'>
        <ScrollingWords />
      </div>
      <div className='card-section'>
        <h3 className='specialized' id='projects'>Projects</h3>
        <Projects />
      </div>
      <div className='card-section' id='about'>
        <About />
        <h3 className='specialized'>Certifications</h3>
        <Accomplishments />
      </div>
      <button onClick={scrollToTop} className={showScroll ? 'scroll-to-topBtn show-scroll-btn' : 'scroll-to-topBtn'}>
        <BsArrowUpCircle aria-hidden='true'/>
      </button>
    </div>
  </>
  )
}

export default Home