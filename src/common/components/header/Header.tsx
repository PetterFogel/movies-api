/** @format */

import { FC, useState } from "react";
import { Link } from "react-router-dom";
import "../../../styles/navigation.css";

export const Header: FC = () => {
  const [toggle, setToggle] = useState(false);

  function navToggleHandler() {
    setToggle(!toggle);
  }

  const navCloseHandler = () => {
    setToggle(false);
  };

  return (
    <header>
      <h2 className="logo">Moviebox</h2>
      <nav>
        <ul
          className="nav-links"
          style={{
            right: toggle ? "0%" : "-100%",
          }}
        >
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            onClick={navCloseHandler}
          >
            <li>Movies</li>
          </Link>
          <Link
            to="/favorites"
            style={{ textDecoration: "none" }}
            onClick={navCloseHandler}
          >
            <li>Favorites</li>
          </Link>
          <Link
            to="/search-movie"
            style={{ textDecoration: "none" }}
            onClick={navCloseHandler}
          >
            <li>Search</li>
          </Link>
        </ul>
      </nav>
      <div className="burger-menu" onClick={navToggleHandler}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};
