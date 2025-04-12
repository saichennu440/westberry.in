import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        &times;
      </button>
      <ul onClick={toggleSidebar}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/admissions">Admissions</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
