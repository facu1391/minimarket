import React from 'react';
import './Total.css';

function Total({ total }) {
  return (
    <div className="total-container">
      <h2 className="total-title">Total</h2>
      <p className="total-amount">Total: ${total.toFixed(2)}</p>
    </div>
  );
}

export default Total;