// File: MenuItem.js
import React from 'react';
import './App.css';

function MenuItem({ image, title, price, onAddToCart }) {
  return (
    <div className="menu-item">
      <img src={image} alt={title} className="menu-item-image" />
      <h3 className="menu-item-title">{title}</h3>
      <p className="menu-item-price">${price}</p>
      <button className="menu-item-button" onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

export default MenuItem;
