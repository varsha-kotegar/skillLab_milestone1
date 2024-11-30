// src/components/OrderCustomization.js

import React, { useState } from 'react';

const OrderCustomization = ({ item, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('Medium');  // Default size

  const handleAddToCart = () => {
    addToCart({
      ...item,
      quantity,
      size,
    });
  };

  return (
    <div className="order-customization">
      <h2>Customize Your Order</h2>
      
      <div>
        <label>Size:</label>
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      
      <div>
        <label>Quantity:</label>
        <input 
          type="number" 
          value={quantity} 
          min="1" 
          onChange={(e) => setQuantity(e.target.value)} 
        />
      </div>
      
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default OrderCustomization;
