import React from 'react';
import './ShoppingCartPage.css'; // Cart page styles

const ShoppingCartPage = ({ cartItems, removeFromCart }) => {
  return (
    <div className="shopping-cart-page">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <div className="item-price">Rs. {item.price}</div>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))
      )}
      <div className="cart-summary">
        <h3>Order Summary</h3>
        <p>Total: Rs. {cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
