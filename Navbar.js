import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Navbar styles

const Navbar = ({ cartItemCount }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Resto2k24</Link>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/cart">
              Cart ({cartItemCount})
            </Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/feedback">Feedback</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
