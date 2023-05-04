import React, { useContext, useState } from "react";
import "./projectDetails.css";
import NavBar from "../components/NavBar";

import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

import { ProjectContext } from "../context/ProjectProvider";

import { IoIosHome } from 'react-icons/io'
import { FiPlus } from 'react-icons/fi'
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi'
import { BsGithub, BsArrowUpRightSquareFill } from 'react-icons/bs'

const ProjectDetails = () => {
  const [isBlurred, setIsBlurred] = useState(false)
  const [counter, setCounter] = useState(0);
  const { projects } = useContext(ProjectContext);

  const handleNext = () => {
    setIsBlurred(true)
    setTimeout(() => setIsBlurred(false), 300);

    if (counter === projects.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  const handlePrev = () => {
    setIsBlurred(true)
    setTimeout(() => setIsBlurred(false), 300);

    if (counter === 0) {
      setCounter(projects.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  const { id } = useParams();

  const project = projects.find((project) => {
    return project.id === Number(id);
  });

  const { name, description, bigImg, githubLink, link, tags, challenges, improvements, howBuilt } = project;

  return (
    <>
      <NavBar showItems={false}/>
      <div className={ isBlurred ? "project-details-container blur-filter" : 'project-details-container'}>
        <nav>
          <IoIosHome />
          <Link to='/' style={{ textDecoration: 'none', color: 'inherit'}}>
          <h3>Back To Home </h3>
          </Link>
        </nav>
        <main>
          <article>
            <div className="article-image-section article-section" style={{backgroundImage: `url(${bigImg})`}}></div>

            <div className="article-description-section article-section">
              {/* <p>{description}</p> */}
              <h3>How I built this:</h3>
              <p>{howBuilt}</p>
              <h3>Challenges:</h3>
              <p>{challenges}</p>
              <h3>Improvements:</h3>
              <p>{improvements}</p>
              <div className="sources">
                  <a href={githubLink} target='_blank'>Github <BsGithub /></a>
                  {link && ( <a href={link} target='_blank'>Live Source <BsArrowUpRightSquareFill /></a>)}
                </div>
              <div className="article-tags">
              {tags.map((tag, i) => (
                <div key={i}>
                  <div className="article-tag">{tag}</div>
                </div>
              ))}
              </div>
            </div>

            <div className="article-title-section article-section">
              {link ? (
                <Link to={link} target='_blank' style={{textDecoration: 'none', color: 'inherit'}}>
                  <h2>{name}</h2>
                </Link>
              ) : (
              <h2>{name}</h2>
              )}
              <FiPlus/>
            </div>

            <div className="article-nav-section article-section">
              <Link className="prev-link" to={`/project/${projects[counter].id}`} onClick={handlePrev}>
                <HiOutlineArrowSmLeft />
              </Link>
              <Link className="next-link" to={`/project/${projects[counter].id}`} onClick={handleNext}>
                <HiOutlineArrowSmRight />
              </Link>
            </div>
          </article>
        </main>



        {/* arrow testing */}
        {/* <div id="projects" className="test">
          <Link
            className="prev"
            onClick={handlePrev}
            to={`/project/${projects[counter].id}`}
          >
            previous
          </Link>
          <Link
            className="next"
            onClick={handleNext}
            to={`/project/${projects[counter].id}`}
          >
            next
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default ProjectDetails;
