import React, { useState, useEffect } from "react";
import "./NavBar.css";

import { BsSun, BsMoon } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavBar = ({showItems}) => {
  const [darkMode, setDarkMode] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 400) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.classList.toggle("dark-mode", darkMode);
    return () => {
      document.body.classList.remove("dark-mode");
    };
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={hidden ? 'nav nav-background' : 'nav'}>
      <Link to='/' style={{textDecoration: 'none', color: 'inherit'}}>
        <p className="logo">FullStackDev</p>
      </Link>
      {showItems ? (
        <div className={hidden ? "hidden-items nav-items" : "nav-items"}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
      ) : (
        <div className='hidden-items nav-items'></div>
      )}
      <div className="toggle-mode">
        <button className="toggleBtn" onClick={toggleDarkMode}>
          {!darkMode ? <BsSun /> : <BsMoon style={{ color: "white" }} />}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
