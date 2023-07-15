import React from 'react';

const ShoppingCart = (props) => {
  return (
    <div className="sticky-bar" role="cart">
      Items in cart:
      {props.items}
      <button className="checkout">Check Out and Pay</button>
    </div>
  );
};

export default ShoppingCart;
