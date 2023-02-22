import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

export default function NavBar() {
  return (
    <div className="nav-bar">
      <a className="nav-logo" href="/">
        Math Magician
      </a>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quote">Quotes</Link>
        </li>
      </ul>
    </div>
  );
}
