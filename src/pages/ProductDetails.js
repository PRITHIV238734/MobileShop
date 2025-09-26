import { useParams, useNavigate } from "react-router-dom";
import products from "../data";

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  // If product not found
  if (!product) {
    return (
      <div className="container text-center mt-5">
        <h2>Product not found</h2>
        <button onClick={() => navigate(-1)} className="btn btn-primary mt-3">
           Back
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Column - Product Image/Description + Buttons */}
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid mb-3" />
          <h2>{product.name}</h2>
          <h4 className="text-success">₹{product.price}</h4>
          <p>{product.description}</p>

          {/* Buttons */}
          <div className="d-flex gap-3 mt-3">
            <button className="btn btn-primary" onClick={() => navigate(-1)}>
              &larr; Back
            </button>
            <button onClick={handleAddToCart} className="btn btn-primary">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Right Column - Specifications */}
        <div className="col-md-6">
          <h3 className="text-center mb-3">Specifications</h3>
          <ul className="list-unstyled text-start">
            <li><strong>Brand:</strong> {product.details.brand}</li>
            <li><strong>Model:</strong> {product.details.model}</li>
            <li><strong>Display:</strong> {product.details.display}</li>
            <li><strong>Processor:</strong> {product.details.processor}</li>
            <li><strong>Camera:</strong> {product.details.camera}</li>
            <li><strong>Battery:</strong> {product.details.battery}</li>
            <li><strong>OS:</strong> {product.details.os}</li>
            <li><strong>Warranty:</strong> {product.details.warranty}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
