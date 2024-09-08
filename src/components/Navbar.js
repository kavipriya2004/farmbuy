// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Contract Farming System</h1>
      </div>
      <div className="navbar-right">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/farmer-dashboard">Farmer Dashboard</Link></li>
          <li><Link to="/buyer-dashboard">Buyer Dashboard</Link></li>
          <li><Link to="/contracts">Contracts</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
