import { useState } from 'react';

function ScannedProducts() {
  const [scannedProducts, setScannedProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const scanProduct = (product) => {
    if (product.stock > 0) {
      const updatedProduct = { ...product, stock: product.stock - 1 };
      setScannedProducts([...scannedProducts, updatedProduct]);
      setTotal(total + updatedProduct.price);
    }
  };

  return { scannedProducts, total, scanProduct };
}

export default ScannedProducts;