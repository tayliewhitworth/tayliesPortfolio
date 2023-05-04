import React, {useContext} from 'react'

import { ProjectContext } from '../context/ProjectProvider'

import { Link } from 'react-router-dom'

import Project from './Project'

const Projects = () => {
    const { projects } = useContext(ProjectContext)

    // now I can use projects.map((project) => {return <Project key={project.id} project={project} />})
  return (
    <div>
      {projects.map((project) => {
        return <Project key={project.id} project={project} />
      })}
    </div>
  )
}

export default Projects