// File: Home.js
import React from 'react';
import './App.css';

function Home() {
  return (
    <div className="home-container">
      <header className="navbar">
        <div className="logo">food<span>wagon</span></div>
        <div className="location">Deliver to: <span>Mohammadpur Bus Stand, Dhaka</span></div>
        <div className="actions">
          <button className="search-btn">Search Food</button>
          <button className="login-btn">Login</button>
        </div>
      </header>

      <main className="hero-section">
        <h1>Are you starving?</h1>
        <p>Within a few clicks, find meals that are accessible near you</p>
        <div className="search-bar">
          <div className="delivery-options">
            <button className="delivery active">Delivery</button>
            <button className="pickup">Pickup</button>
          </div>
          <input type="text" placeholder="Enter Your Address" className="address-input" />
          <button className="find-food">Find Food</button>
        </div>
      </main>

      <section className="food-gallery">
        <div className="food-item"> 
          <img src="/path-to-image1.jpg" alt="Food Item 1" />
        </div>
        <div className="food-item"> 
          <img src="/path-to-image2.jpg" alt="Food Item 2" />
        </div>
        <div className="food-item"> 
          <img src="/path-to-image3.jpg" alt="Food Item 3" />
        </div>
        <div className="food-item"> 
          <img src="/path-to-image4.jpg" alt="Food Item 4" />
        </div>
      </section>
    </div>
  );
}

export default Home;
