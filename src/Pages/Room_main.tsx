import React from "react";
import Navbar from "../components/Navbar";

function Room_main() {
  return (
    <div className="room-page">
      <div className="banner-container">
        <Navbar />
      </div>
      <br />
      <br />
      <br />
      <br />
      <h1 className="room-title">Our Rooms</h1>

      <div className="room-card">
        <h2 className="room-type">Standard Room</h2>
        <p>
          Experience a unique stay in our standard rooms, located in two cozy
          cottages above the main building, each housing four rooms. Each room
          features comfortable twin beds and essential amenities, making it the
          perfect retreat after a day of exploration. The cottages offer
          stunning views of the resort, and the private garden in front adds to
          the charm, providing a relaxing space to connect with nature.
        </p>
      </div>

      <div className="room-card">
        <h2 className="room-type">Deluxe Room</h2>
        <p>
          Our deluxe twin rooms provide a premium stay with stylish furnishings.
          Each room includes twin beds, essential amenities, and an attached
          bathroom, all while offering a stunning view of the city.
        </p>
      </div>

      <div className="room-card">
        <h2 className="room-type">Deluxe Room with Balcony</h2>
        <p>
          The deluxe twin room with a balcony is a spacious and comfortable
          retreat designed for your enjoyment. Furnished with cozy twin beds,
          it’s perfect for friends or families traveling together who prefer
          separate sleeping arrangements. Enjoy serene views of the landscape,
          city, and river from your private balcony, along with exceptional
          amenities to ensure a comfortable stay.
        </p>
      </div>
    </div>
  );
}

export default Room_main;
