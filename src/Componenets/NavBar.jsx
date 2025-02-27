import React from "react";
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <Link className="navbar-brand">Calculator</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <div className="navbar-actions">
          <Link to="/log-in" className="nav-link">
            Login
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
