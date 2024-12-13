// File: Navbar.js
import React from 'react';
import './App.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        food<span>wagon</span>
      </div>
      <nav className="nav-links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </nav>
      <div className="actions">
        <button className="login-btn">Login</button>
      </div>
    </header>
  );
}

export default Navbar;
