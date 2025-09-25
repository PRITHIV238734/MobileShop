import { Link, } from "react-router-dom";
import React from "react";

function ProductCard({ product, addToCart }) {
 // const navigate = useNavigate();

  // const handleAdd = () => {
    // addToCart(product);
    // navigate("/cart");
  

  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img src={product.image} className="card-img-top" alt={product.name} style={{ width: "100%", height: "300px", objectFit: "cover" }}/>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">₹{product.price}</p>
          <Link to={`/product/${product.id}`} className="btn btn-sm btn-primary me-4">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
