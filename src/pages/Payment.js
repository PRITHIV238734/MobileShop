import { useState } from "react";
import { Link } from "react-router-dom";

function Payment({ cart }) {
  const [paid, setPaid] = useState(false);
  const total = (cart || []).reduce((sum, p) => sum + p.price, 0);

  const handlePayment = (e) => {
    e.preventDefault();
    setPaid(true);
  };

  if (paid) {
    return (
      <div className="container mt-4 text-center">
        <h2 className="text-success">🎉 Payment Successful!</h2>
        <p>Your order has been placed successfully.</p>
        <h4>Total Paid: ₹{total}</h4>
        <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h3>Payment</h3>
      <p>Total Amount: <strong>₹{total}</strong></p>
      <form onSubmit={handlePayment} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Card Number</label>
          <input type="text" className="form-control" placeholder="XXXX-XXXX-XXXX-XXXX" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Expiry Date</label>
          <input type="text" className="form-control" placeholder="MM/YY" required />
        </div>
        <div className="mb-3">
          <label className="form-label">CVV</label>
          <input type="password" className="form-control" placeholder="***" required />
        </div>
        <button type="submit" className="btn btn-success">Pay Now</button>
      </form>
    </div>
  );
}

export default Payment;
