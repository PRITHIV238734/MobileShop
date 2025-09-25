function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">© 2025 MobileShop. All rights reserved.</p>

        <div className="d-flex justify-content-center gap-4">
          {/* Real or placeholder links */}
          <a href="/about" className="text-light text-decoration-none">
            About Us
          </a>
          <a href="/contact" className="text-light text-decoration-none">
            Contact
          </a>
          <a href="/privacy" className="text-light text-decoration-none">
            Privacy Policy
          </a>
          <a href="/terms" className="text-light text-decoration-none">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
