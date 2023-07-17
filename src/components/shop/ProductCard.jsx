import React, { useState } from 'react';
import FormData from 'form-data';

const ProductCard = (props) => {
  const [quantity, setQuantity] = useState(0);

  const preventMinus = (e) => {
    if (e.code === 'Minus') {
      e.preventDefault();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addToCart(Number(quantity));
    setQuantity(0);
  };

  return (
    <div className="productCard">
      <form className="quantityForm" onSubmit={handleSubmit}>
        <label htmlFor="quantity">Quantity</label>
        <input
          id="quantity"
          type="number"
          min="0"
          onKeyPress={preventMinus}
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
        />
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default ProductCard;
