import React from "react";
import "./Component.css";
import "./App.css";

function Banner() {
  return (
    <div className="banner">
      <img src="Banner.jpg" className="banner-image img-fluid" alt="Banner" />
      <div className="banner-text">
        <h1 className="title-header">Debsi Resort</h1>
        <p className="title-p">A Tranquil Fusion of Tradition and Modernity</p>
      </div>
    </div>
  );
}

export default Banner;
