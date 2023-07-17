import React, { useState } from 'react';

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
      <h1>{props.title}</h1>
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
        <input className="addToCart" type="submit" value="Add to cart"></input>
      </form>
      <div className="image">
        <img src="" alt="Product image absent" />
      </div>
    </div>
  );
};

export default ProductCard;
