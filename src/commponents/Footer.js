// File: Footer.js
import React from 'react';
import './App.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>foodwagon is your go-to platform for delicious meals delivered to your doorstep. We aim to make your food experience seamless and enjoyable.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@foodwagon.com</p>
          <p>Phone: +880123456789</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 foodwagon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
