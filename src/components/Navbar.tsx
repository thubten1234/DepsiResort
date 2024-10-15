// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <a href="/Services">Services</a>
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
