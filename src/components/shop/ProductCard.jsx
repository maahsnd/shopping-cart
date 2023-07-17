import React from 'react';

const ProductCard = (props) => {
  const preventMinus = (e) => {
    if (e.code === 'Minus') {
      e.preventDefault();
    }
  };

  return (
    <div className="productCard">
      <div className="quantityField">
        <input type="number" min="0" onKeyPress={preventMinus} />
      </div>
    </div>
  );
};

export default ProductCard;
