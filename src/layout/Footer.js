import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src="/therecipelogo.png" alt="TheRecipe logo" />

          <p className="newsletter-text">Signup for our Newsletter</p>

          <div className="newsletter-input">
            <input type="email" placeholder="Enter your email" />
            <button aria-label="Subscribe">
              →
            </button>
          </div>
        </div>

        <div className="footer-links">
          <div className="link-column">
            <h4>Product</h4>
            <a href="#">What's New?</a>
            <a href="#">Delivery Locations</a>
            <a href="#">Meal Categories</a>
            <a href="#">Gift Cards</a>
          </div>

          <div className="link-column">
            <h4>Support</h4>
            <a href="#">Help Centre</a>
            <a href="#">Delivery FAQs</a>
            <a href="#">Contact Us</a>
            <a href="#">Refund Policy</a>
          </div>

          <div className="link-column">
            <h4>Legal</h4>
            <a href="#">Terms of Services</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Delivery Agreement</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 TheRecipe. Deliciousness Delivered. All rights reserved.</p>

        <div className="social-icons">
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="Instagram">◎</a>
          <a href="#" aria-label="X">✕</a>
        </div>
      </div>
    </footer>
  );
}
