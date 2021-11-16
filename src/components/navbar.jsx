import React, { Component } from "react";

// Stateless Functional Component
const NavBar = ({ totalCounter }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge rounded-pill bg-light text-dark">
          {totalCounter}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
