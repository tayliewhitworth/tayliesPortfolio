import React, {useState} from 'react'
import './pages.css'

// what languages I know and who iam working for

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const accordionInfo = [
  {
    title: 'Specialties',
    info: ['Web Development', 'Responsiveness', 'Data Structures and Algorithms', 'Data Analytics with Python', 'State Management in React']
  },
  {
    title: 'Languages & Frameworks',
    info: ['HTML', 'CSS', 'JavaScript', 'React', 'React Native', 'REST APIS', 'Python', 'Node.Js', 'Express.Js', 'MongoDB', 'JSON', 'Figma', 'TailwindCSS', 'MaterialUI', 'Framer Motion']
  },
  {
    title: 'Experience',
    info: ['Full-stack intern - Utah Floors', 'Front-end Dev - Tribaliii', 'Back-end Dev - Style.Re', 'Front-end Dev - TheCommonsXR', 'Freelance Work']
  }
]

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <div className='about-container'>
      <div className='section-one'>
        <h2>Hi!</h2>
        <p>I'm a software engineer, who specializes in front end 
          development. I'm currently working as a full stack intern for 
          Utah Floors. I'm also volunteering as a front end dev for a start 
          up company called Tribaliii. I love designing and building
           websites with all different types of frameworks. I've been 
           coding for almost 2 years now and have my degree in software 
           engineering. Want to work together?
        </p>
        <a className='contact-me' href='mailto:taylie.carlson@gmail.com'>Work with me</a>
      </div>
      <div className='accordion-container'>
        {accordionInfo.map((item, i) => {
          const active = i === activeIndex
          return (
            <div key={i} className='hover'>
              <div className='accordion-title' style={{ color: active ? 'var(--darker-pink' : 'inherit'}}>
                <p> 
                  {item.title}
                </p>
                  <button className='accordion-btn plus-btn' onClick={() => handleClick(i)}>
                    {active ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  </button>
              
              </div>
              <div className={active ? 'accordion-info showItems' : 'accordion-info'}>
              {item.info.map((item, i) => (
                  <p key={i} className="info">{item}</p>
              ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default About