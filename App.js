import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navbar component
import HomePage from './components/HomePage'; // Home Page component
import MenuPage from './components/MenuPage'; // Menu Page component
import OrderCustomizationPage from './components/OrderCustomizationPage'; // Order Customization
import ShoppingCartPage from './components/ShoppingCartPage'; // Cart Page
import ContactPage from './components/ContactPage'; // Contact Page
import AboutUsPage from './components/AboutUsPage'; // About Us Page
import FeedbackPage from './components/FeedbackPage'; // Feedback Page

import './App.css'; // Global styles

function App() {
  const [cartItems, setCartItems] = useState([]); // Store cart items

  // Add item to cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Remove item from cart by index
  const removeFromCart = (indexToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <Router>
      <Navbar cartItemCount={cartItems.length} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/menu"
            element={<MenuPage addToCart={addToCart} />}
          />
          <Route
            path="/customize-order"
            element={<OrderCustomizationPage addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <ShoppingCartPage
                cartItems={cartItems}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
