import { useNavigate, Link } from "react-router-dom";

function Checkout({ cart }) {
  const navigate = useNavigate();
  const total = (cart || []).reduce((sum, p) => sum + p.price, 0);

  if (!cart || cart.length === 0) {
    return (
      <div className="container mt-4">
        <h3>Your cart is empty</h3>
        <Link to="/" className="btn btn-primary mt-3">← Back to Home</Link>
      </div>
    );
  }

  const handleProceed = (e) => {
    e.preventDefault();
    navigate("/payment");
  };

  return (
    <div className="container mt-4">
      <h3>Checkout</h3>
      <form onSubmit={handleProceed} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea className="form-control" rows="3" required></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input type="text" className="form-control" required />
        </div>

        <h5 className="mt-4">Order Summary</h5>
        <ul className="list-group mb-3">
          {cart.map((p, i) => (
            <li key={i} className="list-group-item d-flex justify-content-between">
              {p.name} <span>₹{p.price}</span>
            </li>
          ))}
        </ul>
        <h5>Total: ₹{total}</h5>

        <button type="submit" className="btn btn-primary mt-3">Proceed to Payment</button>
      </form>
    </div>
  );
}

export default Checkout;
