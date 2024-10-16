import React, { useState } from "react";
import "./App.css";

function Banner() {
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  // Function to toggle the visibility of the details box
  const toggleBox = () => {
    setIsBoxOpen(!isBoxOpen);
  };

  return (
    <div className="video-banner">
      <video className="banner-video" autoPlay loop muted playsInline>
        <source src="DepsiResort.mp4" type="video/mp4" />
      </video>
      <div className="tinted-overlay"></div>
      <div className="video-overlay">
        <h1 className="large-header">Depsi Resort</h1>
        <h2>A Tranquil Fusion of Tradition and Modernity</h2>
        <button className="booking-btn" onClick={toggleBox}>
          Book Now
        </button>
      </div>

      {/* Conditionally render the details box */}
      {isBoxOpen && (
        <div className="details-box">
          <h3>Enter Booking Details</h3>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <br />
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <br />
            <label>
              Check-in Date:
              <input type="date" name="checkin" />
            </label>
            <br />
            <label>
              Check-out Date:
              <input type="date" name="checkout" />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
          <button className="close-btn" onClick={toggleBox}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Banner;
