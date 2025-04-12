import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Sidebar from './Sidebar';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar modern-navbar">
        <div className="navbar-logo">
          <img src="/images/random0.jpg" alt="School Logo" className="school-logo" />
          {/* <span className="school-name">West Berry School</span> */}
        </div>
        <div className="navbar-toggle" onClick={toggleSidebar}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/admissions" className="nav-link">Admissions</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li>
            <a href="https://www.bing.com/images/search?view=detailV2&mediaurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D5445209458873726&expw=520&exph=1156&cbid=OLC.SqVWjFYD%2FZVWdQ480x360&cbn=local&idpp=local&thid=OLC.SqVWjFYD%2FZVWdQ480x360&ypid=YN4070x4407024626883652154&usebfpr=0&eeptype=PhotoGroups&datagroup=local:datagroup.photos&photogroupname=AllPhotos&pagetag=AllPhotos&selectedindex=3&id=OLC.SqVWjFYD%2FZVWdQ480x360&q=westberry%20school%20bhimavaram&pseg=Education&noidpclose=0&form=LOCIMG&ajaxhist=0&ajaxserp=0&vt=0&sim=11" className="nav-link" target="_blank" rel="noopener noreferrer">
              Gallery
            </a>
          </li>
        </ul>
      </nav>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}

export default Navbar;
