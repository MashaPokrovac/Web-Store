import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-wrapper">
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className="dropdown-main">
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
