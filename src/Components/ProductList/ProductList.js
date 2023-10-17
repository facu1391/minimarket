import React from 'react';
import Product from '../Product/Product';
import './ProductList.css';

function ProductList({ products, onScan }) {
  return (
    <div className="product-list">
      <h2 className="product-list-title">Product List</h2>
      {products.map((product) => (
        <Product key={product.id} product={product} onScan={onScan} />
      ))}
    </div>
  );
}

export default ProductList;