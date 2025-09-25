import { useLocation } from "react-router-dom";
import products from "../data";
import ProductCard from "../components/ProductCard";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery();
  const searchTerm = query.get("q") || "";

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      
      <h3>
        Search Results for: <span className="text-primary">{searchTerm}</span>
      </h3>
      <div className="row mt-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => <ProductCard key={p.id} product={p} />)
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}
export default SearchResults;
