import React from 'react';
import '../style/home.css';
import Navbar from './Navbar';

const HomePage = () => {
  return (
    <div className="container">
      <div className="nav">
        <Navbar />
      </div>

      <div className="content">
        <div>
          <h1>Unnamed retail site title</h1>
          <h2>Welcome to my site</h2>
          <p>Start adding items to your cart and enjoy shopping!</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
