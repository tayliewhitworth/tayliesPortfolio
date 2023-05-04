import React from 'react'
import './projects.css'

import { Link } from 'react-router-dom'

import { BsGithub, BsArrowUpRightSquareFill } from 'react-icons/bs'

const Project = ({ project }) => {
    const {id, name, description, tags, img, link, githubLink} = project


    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

  return (
    <div className='projects-card'>
      <div className='description-section'>
        <div>
          <Link onClick={scrollToTop} to={`/project/${id}`} className='project-name-link'>
            <h2 className='project-name'>{name}</h2>
          </Link>
          <p className='desc'>{description}</p>
        </div>
        {link ? (
        <div className='links'>
          <a href={link} target='_blank'>Live Source <BsArrowUpRightSquareFill /></a>
          <a href={githubLink} target='_blank'>GitHub <BsGithub /></a>
        </div>
        ) : (
          <div className='links'>
          <a href={githubLink} target='_blank'>GitHub <BsGithub /></a>
        </div>
        )}
        <div className='tags'>
          {tags.map((tag, i) => {
            const colors = ['var(--purple-4)','var(--pink-7)', 'var(--indigo-4)', 'var(--blue-4)', 'var(--green-4)']
            return <div key={i} className='tag' style={{backgroundColor: colors[i % colors.length]}}>{tag}</div>
          })}
        </div>

      </div>
      <div className='img-section'>
        <Link onClick={scrollToTop} to={`/project/${id}`} className='project-name-link'>
          <img src={img} alt='' style={{ outlineColor: `var(--pink-${id})`}}/>
        </Link>
      </div>
    </div>
  )
}

export default Project