import React, { useState } from 'react';
import '../style/shop.css';
import Navbar from './Navbar';
import ProductCard from './shop/ProductCard';
import ShoppingCart from './shop/ShoppingCart';

const ShopPage = () => {
  const [cartAmount, setCartAmount] = useState(0);
  const updateCart = (items) => {
    setCartAmount(items + cartAmount);
  };

  return (
    <div className="container">
      <ShoppingCart items={cartAmount} className="cart" />
      <div className="nav">
        <Navbar />
      </div>
      <div className="products">
        <ProductCard addToCart={updateCart} />
      </div>
    </div>
  );
};

export default ShopPage;
