import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


function Navbar({ cartCount }) {
  //  State for search text
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  //  Handle form submit
  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/search?q=${search}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <Link className="navbar-brand fw-bold" to="/">
        <img
          src="/images/logo.png"
          alt=" "
          width="120"
        />
      </Link>

      <ul className="navbar-nav ms-4">
     <li className="nav-item">
       <Link className="nav-link" to="/">Home</Link>
       </li>
      <li className="nav-item">
      <Link className="nav-link" to="/category/mobiles">Mobiles</Link>
          </li>
      <li className="nav-item">
       <Link className="nav-link" to="/category/laptops">Laptops</Link>
        </li>
      </ul>


      {/*Wrap input inside a form */}
      <form onSubmit={handleSearch} className="mx-auto w-50 d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="Search for products, brands and more"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="btn btn-light ms-2">Search</button>
      </form>

      <div>
        <Link to="/cart" className="btn btn-light ms-3">
          My Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
