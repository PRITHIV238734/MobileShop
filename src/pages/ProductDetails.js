import { useParams } from "react-router-dom";
import products from "../data";
import { useNavigate } from "react-router-dom";


function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;
  
  
  const handleAddToCart = () => {
    addToCart(product);   
    navigate("/cart");
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Product Image */}
        <div className="col-md-8">
          <img src={product.image} alt={product.name} className="img-fluid rounded" />
        </div>

        {/* Product Info */}
        <div className="col-md-7">
          <h2>{product.name}</h2>
          <h4 className="text-success">₹{product.price}</h4>
          <p>{product.description}</p>

          {/* Detailed Specs */}
          <h5 className="mt-4">Specifications</h5>
          <ul className="list-group">
            <li className="list-group-item"><strong>Brand:</strong> {product.details.brand}</li>
            <li className="list-group-item"><strong>Model:</strong> {product.details.model}</li>
            <li className="list-group-item"><strong>Display:</strong> {product.details.display}</li>
            <li className="list-group-item"><strong>Processor:</strong> {product.details.processor}</li>
            <li className="list-group-item"><strong>Camera:</strong> {product.details.camera}</li>
            <li className="list-group-item"><strong>Battery:</strong> {product.details.battery}</li>
            <li className="list-group-item"><strong>OS:</strong> {product.details.os}</li>
            <li className="list-group-item"><strong>Warranty:</strong> {product.details.warranty}</li>
          </ul>
             <button onClick={handleAddToCart} className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
