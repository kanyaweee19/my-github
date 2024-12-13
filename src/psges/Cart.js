// File: Cart.js
import React from 'react';
import './App.css';

function Cart() {
  return (
    <div className="cart-container">
      <header className="navbar">
        <div className="logo">food<span>wagon</span></div>
        <div className="actions">
          <button className="menu-btn">Menu</button>
          <button className="login-btn">Login</button>
        </div>
      </header>

      <main className="cart-section">
        <h1>Your Cart</h1>
        <div className="cart-items">
          <div className="cart-item">
            <img src="/path-to-cart-item1.jpg" alt="Cart Item 1" />
            <div className="item-details">
              <h3>Cart Item 1</h3>
              <p>$10.00</p>
              <button className="remove-btn">Remove</button>
            </div>
          </div>
          <div className="cart-item">
            <img src="/path-to-cart-item2.jpg" alt="Cart Item 2" />
            <div className="item-details">
              <h3>Cart Item 2</h3>
              <p>$12.00</p>
              <button className="remove-btn">Remove</button>
            </div>
          </div>
        </div>

        <div className="cart-summary">
          <h2>Total: $22.00</h2>
          <button className="checkout-btn">Checkout</button>
        </div>
      </main>
    </div>
  );
}

export default Cart;
