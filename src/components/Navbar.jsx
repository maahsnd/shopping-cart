import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Nav.css';

const Navbar = () => {
  return (
    <div className="sidebar">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
    </div>
  );
};

export default Navbar;
