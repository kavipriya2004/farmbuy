// src/components/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="welcome-section">
        <h2>Welcome to the Assured Contract Farming System</h2>
        <p>
          Connecting farmers with buyers for stable market access and assured
          income through secure contracts.
        </p>
      </section>

      <section className="about-farmers">
        <h3>About Our Farmers</h3>
        <p>
          Our farmers are the backbone of the Assured Contract Farming System.
          By using this platform, farmers can secure long-term contracts with
          reliable buyers, ensuring a stable income and access to new markets.
        </p>
        <div className="farmer-images">
          <img src="https://via.placeholder.com/400" alt="Farmer 1" />
          <img src="https://via.placeholder.com/400" alt="Farmer 2" />
          <img src="https://via.placeholder.com/400" alt="Farmer 3" />
        </div>
      </section>
    </div>
  );
};

export default Home;
