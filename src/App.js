import React, { useState } from 'react';
import { FaMotorcycle, FaStoreAlt, FaUserCircle } from 'react-icons/fa';  // นำเข้าไอคอนจาก React Icons
import './App.css';

function App() {
  const [address, setAddress] = useState('');
  const [deliveryType, setDeliveryType] = useState('delivery');

  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="logo">foodwagon</div>
          <div className="delivery-location">
            <span>Deliver to: </span><span>Current Location Mohammadpur Bus Stand, Dhaka</span>
          </div>
          <div className="login-btn">
            <button><FaUserCircle /> Login</button>
          </div>
        </div>
      </header>

      <main>
        <div className="hero-section">
          <div className="hero-text">
            <h1>Are you starving?</h1>
            <p>Within a few clicks, find meals that are accessible near you</p>
            <div className="search-box">
              <div className="buttons">
                <button
                  className={`delivery ${deliveryType === 'delivery' ? 'active' : ''}`}
                  onClick={() => setDeliveryType('delivery')}
                >
                  <FaMotorcycle /> Delivery
                </button>
                <button
                  className={`pickup ${deliveryType === 'pickup' ? 'active' : ''}`}
                  onClick={() => setDeliveryType('pickup')}
                >
                  <FaStoreAlt /> Pickup
                </button>
              </div>
              <input
                type="text"
                placeholder="Enter Your Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <button className="find-food-btn">Find Food</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://i.pinimg.com/736x/e7/3f/cf/e73fcfbda7e28fa5eee965d1994c0650.jpg" alt="Noodles" />
          </div>
        </div>
      </main>

      <footer>
        <div className="footer-content">
          <p>Search Food</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
