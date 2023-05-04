import React from 'react'
import './Footer.css'

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <p className='footer-title'>Follow me and checkout my projects! If you want to work together<br/> send me an email.</p>
      <div className='flex-box'>
        <div className='box'>
          <a href='https://github.com/tayliewhitworth' target='_blank'>Github</a>
          <Link to='https://github.com/tayliewhitworth' target='_blank'>
            <div className='item-hover'>
              <p>Github</p>
              <p className='get-in-touch'>Check out my code</p>
              <p className='arrow'>→</p>
            </div>
          </Link>
        </div>
        <div className='box'>
          <a href='https://www.linkedin.com/in/taylie-whitworth-662b6516a/' target='_blank'>LinkedIn</a>
          <Link to='https://www.linkedin.com/in/taylie-whitworth-662b6516a/' target='_blank'>
            <div className='item-hover'>
              <p>LinkedIn</p>
              <p className='get-in-touch'>Follow me</p>
              <p className='arrow'>→</p>
            </div>
          </Link>
        </div>
        <div className='box'>
          <a href='mailto:taylie.carlson@gmail.com'>Email</a>
          <Link to='mailto:taylie.carlson@gmail.com'>
          <div className='item-hover'>
              <p>Email</p>
              <p className='get-in-touch'>Get in Touch</p>
              <p className='arrow'>→</p>
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer