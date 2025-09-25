import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* About Section */}
        <div style={styles.section}>
          <h3 style={styles.heading}>About MyShop</h3>
          <p style={styles.text}>
            MyShop is your one-stop online store for electronics, fashion, and lifestyle products. Quality and affordability guaranteed.
          </p>
          <div style={styles.socialIcons}>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Quick Links</h3>
          <ul style={styles.list}>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/deals">Deals</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Customer Service</h3>
          <ul style={styles.list}>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/returns">Returns</a></li>
            <li><a href="/shipping">Shipping</a></li>
            <li><a href="/support">Support</a></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Newsletter</h3>
          <p style={styles.text}>Subscribe to get latest updates and offers.</p>
          <div style={styles.newsletter}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={styles.input} 
            />
            <button style={styles.button}>Subscribe</button>
          </div>
        </div>
      </div>

      <div style={styles.bottom}>
        <p>© {new Date().getFullYear()} MyShop. All rights reserved.</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    padding: "50px 20px 20px",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
    gap: "20px",
  },
  section: {
    flex: "1",
    minWidth: "220px",
    marginBottom: "20px",
  },
  heading: {
    fontSize: "18px",
    marginBottom: "15px",
    color: "#ffd700",
  },
  text: {
    fontSize: "14px",
    lineHeight: "1.6",
  },
  list: {
    listStyle: "none",
    padding: 0,
    fontSize: "14px",
  },
  socialIcons: {
    marginTop: "10px",
    display: "flex",
    gap: "10px",
  },
  newsletter: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "4px",
    border: "none",
  },
  button: {
    padding: "8px 12px",
    backgroundColor: "#ffd700",
    color: "#000",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  bottom: {
    textAlign: "center",
    borderTop: "1px solid #444",
    paddingTop: "15px",
    marginTop: "30px",
    fontSize: "13px",
    color: "#bbb",
  },
};

export default Footer;
