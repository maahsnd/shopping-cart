import React from 'react';
import '../style/home.css';
import Navbar from './Navbar';

const HomePage = () => {
  return (
    <div className="homecontainer">
      <div className="homenav">
        <Navbar />
      </div>

      <div className="homecontent">
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
