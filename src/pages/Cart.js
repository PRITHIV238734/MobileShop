import { Link, useNavigate } from "react-router-dom";

function Cart({ cart, removeFromCart }) {
  const navigate = useNavigate();
  const total = (cart || []).reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="container mt-4">
      <h3>My Cart</h3>

      {cart && cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((p, i) => (
              <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                {p.name} - ₹{p.price}
                <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(i)}>Remove</button>
              </li>
            ))}
          </ul>

          <h5>Total: ₹{total}</h5>

          <button className="btn btn-primary mt-3" onClick={() => navigate("/checkout")}>
            Proceed to Checkout
          </button>
        </>
      )}

      <Link to="/" className="btn btn-link mt-3">← Continue Shopping</Link>
    </div>
  );
}

export default Cart;
