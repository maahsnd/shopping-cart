import React from 'react';

const ProductCard = (props) => {
  return (
    <div>
      <button type="button" onClick={props.increment}>
        +
      </button>
      <button type="button" onClick={props.decrement}>
        -
      </button>
    </div>
  );
};

export default ProductCard;
