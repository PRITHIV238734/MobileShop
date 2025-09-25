import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data";
import { useState } from "react";

function Category({ addToCart }) {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [sort, setSort] = useState("");

  let filtered = products.filter(
    (p) => p.category.toLowerCase() === categoryName.toLowerCase()
  );

  if (sort === "low-high") filtered = [...filtered].sort((a,b)=> a.price - b.price);
  if (sort === "high-low") filtered = [...filtered].sort((a,b)=> b.price - a.price);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <button className="btn btn-secondary" onClick={() => navigate("/")}>
          &larr; Back to Home
        </button>
        <div>
          <label className="me-2 fw-bold">Sort By:</label>
          <select
            className="form-select d-inline w-auto"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Default</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      <h3 className="text-capitalize">{categoryName} Category</h3>
      <div className="row">
        {filtered.length > 0 ? (
          filtered.map((p) => <ProductCard key={p.id} product={p} addToCart={addToCart} />)
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default Category;
