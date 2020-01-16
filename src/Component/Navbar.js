import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <h1 className="name">Medium || Ak Production</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/detail">Detail</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
