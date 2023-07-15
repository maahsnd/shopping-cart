import React from 'react';
import { Link } from 'react-router-dom';
import '../style/nav.css';

const Navbar = () => {
  return (
    <div className="sidebar">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </div>
    </div>
  );
};

export default Navbar;
