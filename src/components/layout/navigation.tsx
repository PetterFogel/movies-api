import { Link } from "react-router-dom";
import "../../styles/navigation.css";

function Navigation() {
  return (
    <header>
      <h2 className="logo">MovieBox</h2>
      <nav>
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Movies</li>
          </Link>
          <Link to="/favorites" style={{ textDecoration: "none" }}>
            <li>Favorites</li>
          </Link>
          <Link to="/search-movie" style={{ textDecoration: "none" }}>
            <li>Search</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
