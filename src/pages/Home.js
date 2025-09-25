import products from "../data";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

function Home() {
  const [sort, setSort] = useState("default");

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "lowToHigh") return a.price - b.price;
    if (sort === "highToLow") return b.price - a.price;
    return 0;
  });

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-3">
        <h3>Products</h3>
        <select
          className="form-select w-25"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Sort by</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>
      <div className="row">
        {sortedProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
        
      </div>
    </div>
  );
}
export default Home;
