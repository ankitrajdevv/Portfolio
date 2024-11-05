import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen, AiFillGithub } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { CgFileDocument } from "react-icons/cg";
import './css/Navbar.css';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    updateNavbar(window.scrollY >= 20);
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <nav className={`navbar ${navColour ? "sticky" : ""}`}>
      <div className="container">
        <div className="brand">
          <ScrollLink to="home" smooth={true} duration={0} onClick={() => updateExpanded(false)}>
            <AiOutlineHome className="logo" />
          </ScrollLink>
        </div>
        <button
          className="navbar-toggle"
          onClick={() => updateExpanded(!expand)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`navbar-collapse ${expand ? "expanded" : ""}`}>
          <div className="navbar-items">
            <ScrollLink to="about" smooth={true} duration={0} onClick={() => updateExpanded(false)}>
              <AiOutlineUser style={{ marginRight: "4px" }} /> About
            </ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={0} onClick={() => updateExpanded(false)}>
              <GiSkills style={{  marginRight: "6px" }} /> Skills
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={0} onClick={() => updateExpanded(false)}>
              <AiOutlineFundProjectionScreen style={{  marginRight: "6px" }} /> Projects
            </ScrollLink>
            <ScrollLink to="resume" smooth={true} duration={0} onClick={() => updateExpanded(false)}>
              <CgFileDocument style={{  marginRight: "6px" }} /> Resume
            </ScrollLink>
            <a href="https://github.com/ankitrajdevv" className="github-icon"  target="_blank" rel="noopener noreferrer" onClick={() => updateExpanded(false)}>
              <AiFillGithub style={{ fontSize: "2em"}} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
