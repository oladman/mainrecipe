import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-wrapper">
        {/* Brand */}
        <div className="footer-section footer-brand">
          <img src="/therecipelogo.png" alt="TheRecipe logo" />
          <p>
            We create possibilities 
            for the connected world.
          </p>
        </div>

        {/* Explore */}
        <div className="footer-section">
          <h4>Explore</h4>
          <p>Home</p>
          <p>About</p>
          <p>Careers</p>
        </div>

        {/* Follow */}
        <div className="footer-section">
          <h4>Follow</h4>
          <p>Instagram</p>
          <p>Twitter (X)</p>
          <p>LinkedIn</p>
        </div>

        {/* Legal */}
        <div className="footer-section">
          <h4>Legal</h4>
          <p>Terms</p>
          <p>Privacy</p>
        </div>

        {/* Advertise */}
        <div className="footer-section">
          <h4>Advertise With Us</h4>
          <p>Know More</p>
          <p>info@therecipe.com</p>
        </div>

        {/* CTA */}
        <div className="footer-section footer-cta">
          <h4>Add a Recipe</h4>
          <Link to="/post-recipe" className="footer-cta-button">
            ADD RECIPE
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        ©2023 TheRecipe, All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
