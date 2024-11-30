// src/components/OrderCustomizationPage.js

import React from 'react';
import OrderCustomization from './OrderCustomization'; // Correct path to import the OrderCustomization component
import './OrderCustomizationPage.css';  // Ensure the corresponding CSS file is imported

// The OrderCustomizationPage component takes in an item and the addToCart function as props
const OrderCustomizationPage = ({ item, addToCart }) => {
  return (
    <div className="order-customization-page">
      <h1>Order Customization</h1>
      <div className="order-details">
        <h2>{item.name}</h2>
        <img src={item.image} alt={item.name} className="order-image" />
        <p>{item.description}</p>
      </div>

      <OrderCustomization item={item} addToCart={addToCart} /> {/* Passes item and addToCart function to the OrderCustomization component */}
    </div>
  );
};

export default OrderCustomizationPage;
