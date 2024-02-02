import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="img-box">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="product-details">
        <p>{product.title}</p>
        <p>Brand: {product.brand}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
