import React, { useState } from 'react';
import '../style/shop.css';
import Navbar from './Navbar';
import ProductCard from './shop/ProductCard';
import ShoppingCart from './shop/ShoppingCart';

const ShopPage = () => {
  const [cartAmount, setCartAmount] = useState(0);

  const incrementCartAmount = () => {
    setCartAmount((cartAmount) => cartAmount + 1);
  };
  const decrementCartAmount = () => {
    if (cartAmount) {
      setCartAmount((cartAmount) => cartAmount - 1);
    }
  };
  return (
    <div className="container">
      <ShoppingCart items={cartAmount} />
      <div className="nav">
        <Navbar />
      </div>

      <div className="content">
        <p>content</p>
        <ProductCard
          increment={incrementCartAmount}
          decrement={decrementCartAmount}
        />
      </div>
    </div>
  );
};

export default ShopPage;
