import React, { useRef } from 'react';

const ShoppingCart = (props) => {
  const handleClick = () => {
    props.checkout();
  };

  return (
    <div className="sticky-bar" role="cart">
      Items in cart:
      {props.items}
      <button className="checkout" onClick={handleClick}>
        Check Out and Pay
      </button>
    </div>
  );
};

export default ShoppingCart;
