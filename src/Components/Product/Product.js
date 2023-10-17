import React from 'react';
import './Product.css';

function Product({ product, onScan }) {
  return (
    <div className="product-card">
      <h3 className="product-name">
        {product.name} - ${product.price.toFixed(2)} {/* Muestra el precio con 2 decimales */}
      </h3>
      <p className="product-stock">Stock: {product.stock}</p>
      <button className="scan-button" onClick={() => onScan(product)}>Scan</button>
    </div>
  );
}

export default Product;