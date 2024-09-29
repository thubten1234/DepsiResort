import React from "react";
import "./App.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div
        className="collapse"
        id="navbarToggleExternalContent"
        data-bs-theme="dark"
      >
        <div className="bg-dark p-4">
          <div className="sidenav">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Library</a>
            <a href="#">Rooms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-transparent">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
