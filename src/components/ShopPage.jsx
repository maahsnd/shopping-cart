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
  const resetCart = () => {
    setCartAmount(0);
  };

  return (
    <div className="container">
      <ShoppingCart items={cartAmount} checkout={resetCart} className="cart" />
      <div className="nav">
        <Navbar />
      </div>
      <div className="products">
        <ProductCard addToCart={updateCart} title="title" />
        <ProductCard addToCart={updateCart} title="title" />
        <ProductCard addToCart={updateCart} title="title" />
        <ProductCard addToCart={updateCart} title="title" />
        <ProductCard addToCart={updateCart} title="title" />
      </div>
      <div itemID="output"></div>
    </div>
  );
};

export default ShopPage;
