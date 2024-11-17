import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer-fluid";

function Room_main() {
  // Define a type for room keys
  type RoomType = "Standard" | "Deluxe" | "Deluxe with Balcony";

  const [selectedRoom, setSelectedRoom] = useState<RoomType>("Standard");

  const roomData: Record<
    RoomType,
    { title: string; description: string; image: string }
  > = {
    Standard: {
      title: "Standard Room",
      description:
        "Experience a unique stay in our standard rooms, located in two cozy cottages above the main building, each housing four rooms. Each room features comfortable twin beds and essential amenities, making it the perfect retreat after a day of exploration. The cottages offer stunning views of the resort, and the private garden in front adds to the charm, providing a relaxing space to connect with nature.",
      image: "./standard.png",
    },
    Deluxe: {
      title: "Deluxe Room",
      description:
        "Our deluxe twin rooms provide a premium stay with stylish furnishings. Each room includes twin beds, essential amenities, and an attached bathroom, all while offering a stunning view of the city.",
      image: "./deluxe.png",
    },
    "Deluxe with Balcony": {
      title: "Deluxe Room with Balcony",
      description:
        "The deluxe twin room with a balcony is a spacious and comfortable retreat designed for your enjoyment. Furnished with cozy twin beds, it’s perfect for friends or families traveling together who prefer separate sleeping arrangements. Enjoy serene views of the landscape, city, and river from your private balcony, along with exceptional amenities to ensure a comfortable stay.",
      image: "./deluxebalcony.png",
    },
  };

  // Amenities with corresponding image paths
  const amenities = [
    { name: "Extra Bed", icon: "/bed-alt.png" },
    { name: "In-room Service", icon: "/room-service.png" },
    { name: "Cable TV", icon: "/screen.png" },
    { name: "Bottled Water", icon: "/water-bottle.png" },
    { name: "Free Wi-Fi", icon: "/wifi.png" },
    { name: "Hair Dryer", icon: "/dryer.png" },
    { name: "Organic Soap", icon: "/soap-alt.png" },
    { name: "Mini-Bar", icon: "/minibar.png" },
    { name: "Extra Pillow", icon: "/mattress-pillow.png" },
    { name: "Coffee/Tea Sets", icon: "/mug-alt.png" },
    { name: "Safe", icon: "/shield-check.png" },
  ];

  return (
    <div>
      <div className="banner-container">
        <Navbar />
      </div>
      <div
        className="hero-section text-center"
        style={{ backgroundImage: 'url("/rooms.png") ' }}
      >
        <div className="hero-overlay">
          <h1 className="hero-title">Your Rooms</h1>
          <h4 className="hero-subtitle">Comfort and Elegance Combined</h4>
        </div>
      </div>
      <div className="unique-room-page container">
        <div className="room-buttons-container">
          <div className="col-auto">
            <button
              className={`filter-btn btn ${
                selectedRoom === "Standard" ? "active" : ""
              }`}
              onClick={() => setSelectedRoom("Standard")}
            >
              Standard Room
            </button>
          </div>
          <div className="col-auto">
            <button
              className={`filter-btn btn ${
                selectedRoom === "Deluxe" ? "active" : ""
              }`}
              onClick={() => setSelectedRoom("Deluxe")}
            >
              Deluxe Room
            </button>
          </div>
          <div className="col-auto">
            <button
              className={`filter-btn btn ${
                selectedRoom === "Deluxe with Balcony" ? "active" : ""
              }`}
              onClick={() => setSelectedRoom("Deluxe with Balcony")}
            >
              Deluxe Room with Balcony
            </button>
          </div>
        </div>

        {/* Unique Room Card */}
        <div className="row mb-4" style={{ marginTop: "30px" }}>
          <div className="col-md-6">
            <div className="room-image-container">
              <img
                src={roomData[selectedRoom].image}
                alt={roomData[selectedRoom].title}
                className="room-image img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6 room-content" style={{ marginTop: "30px" }}>
            <h2 className="unique-room-type">{roomData[selectedRoom].title}</h2>
            <p className="room-description">
              {roomData[selectedRoom].description}
            </p>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="amenities-section">
          <h3 className="amenities-title">Room Amenities</h3>
          <ul className="amenities-list list-unstyled row">
            {amenities.map((amenity, index) => (
              <li
                key={index}
                className="amenity-item col-6 col-md-4 d-flex align-items-center"
              >
                <img
                  src={amenity.icon}
                  alt={amenity.name}
                  className="amenity-icon me-2"
                />
                <span>{amenity.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Room_main;
