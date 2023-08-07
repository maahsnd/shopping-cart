import React from 'react';
import { Link } from 'react-router-dom';
import '../style/nav.css';

const Navbar = () => {
  return (
    <div className="sidebar">
      <div className="links">
        <Link to="/shopping-cart">Home</Link>
        <Link to="/shopping-cart/shop">Shop</Link>
      </div>
    </div>
  );
};

export default Navbar;
