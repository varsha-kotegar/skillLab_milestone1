import React from 'react';
import './AboutUsPage.css'; // About Us page styles

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <div className="about-us-content">
        <h2>About Us</h2>
        <p className="about-us-description">
          Welcome to <span className="highlight">Foodie Restaurant</span>, where culinary excellence meets heartwarming flavors.
        </p>
        <p className="about-us-info">
          For over a decade, we have been serving delicious, high-quality meals, meticulously crafted with the finest ingredients.
        </p>
        <p className="about-us-mission">
          Our mission is to provide a memorable dining experience for every guest, combining great food with exceptional service in a warm, inviting atmosphere.
        </p>
        
        <section className="about-us-team">
          <h3>Meet Our Team</h3>
          <p>
            Our chefs, waitstaff, and managers are dedicated to delivering the best dining experience, making every visit special.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
