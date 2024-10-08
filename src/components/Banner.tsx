import React from "react";
import "./Component.css";
import "./App.css";

function Banner() {
  return (
    <div className="video-banner">
      <video className="banner-video" autoPlay loop muted playsInline>
        <source src="DepsiResort.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay">
        <h1>Depsi Resort</h1>
        <p>A Tranquil Fusion of Tradition and Modernity</p>
        <div>
          <div className="tinted-overlay"></div>
          <button className="booking-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
