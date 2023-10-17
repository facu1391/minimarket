import React, { useState } from 'react';
import './Scanner.css';

function Scanner({ onScan, products }) {
  const [manualCode, setManualCode] = useState('');

  const handleScan = (code) => {
    const product = getProductByCode(code);
    if (product) {
      onScan(product);
    }
  };

  const getProductByCode = (code) => {
    return products.find((product) => product.code === code);
  };

  const handleManualEntry = () => {
    if (manualCode.trim() !== '') {
      const product = getProductByCode(manualCode);
      if (product) {
        onScan(product);
        setManualCode('');
      } else {
        alert('Producto no encontrado');
      }
    }
  };

  return (
    <div className="scanner-parent-container">
      <div className="scanner-container">
        <h2 className="scanner-title">Scanner</h2>
        <button className="scanner-button" onClick={() => handleScan('123456')}>
          Scan Product
        </button>
        <input
          className="scanner-input"
          type="text"
          placeholder="Código del producto"
          value={manualCode}
          onChange={(e) => setManualCode(e.target.value)}
        />
        <button className="scanner-button" onClick={handleManualEntry}>
          Ingresar Manualmente
        </button>
      </div>
    </div>
  );
}

export default Scanner;