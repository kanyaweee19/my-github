// File: Menu.js
import React from 'react';
import { FaCartPlus, FaUserCircle } from 'react-icons/fa'; // นำเข้าไอคอนจาก React Icons
import './App.css';

function Menu() {
  return (
    <div className="menu-container">
      <header className="navbar">
        <div className="logo">food<span>wagon</span></div>
        <div className="actions">
          <button className="cart-btn">
            <FaCartPlus /> Cart
          </button>
          <button className="login-btn">
            <FaUserCircle /> Login
          </button>
        </div>
      </header>

      <main className="menu-section">
        <h1>Our Menu</h1>
        <div className="menu-items">
          <div className="menu-item">
            <img src="https://i.pinimg.com/736x/78/f0/ab/78f0aba35d29474e00f398c5e34119a1.jpg" alt="Menu Item 1" />
            <h3>Menu Item 1</h3>
            <p>$10.00</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
          <div className="menu-item">
            <img src="https://i.pinimg.com/736x/b5/82/58/b58258799ade09431b5ef49a9f1a5ffe.jpg" alt="Menu Item 2" />
            <h3>Menu Item 2</h3>
            <p>$12.00</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
          <div className="menu-item">
            <img src="https://i.pinimg.com/736x/32/b5/9c/32b59c33f2fe5d229e23dcacd181af5d.jpg" alt="Menu Item 3" />
            <h3>Menu Item 3</h3>
            <p>$8.00</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
          <div className="menu-item">
            <img src="https://i.pinimg.com/736x/15/be/e1/15bee19a9694d2c6f0bd4f03b62dab3a.jpg" alt="Menu Item 4" />
            <h3>Menu Item 4</h3>
            <p>$15.00</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Menu;
