import React, { useState } from "react";
import "./App.css";

// Define the form data type
interface FormData {
  name: string;
  email: string;
  checkin: string;
  checkout: string;
  adults: number;
  children: number;
}

const Banner: React.FC = () => {
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    checkin: "",
    checkout: "",
    adults: 1, // Default value for adults
    children: 0, // Default value for children
  });

  // Function to toggle the visibility of the details box
  const toggleBox = () => {
    setIsBoxOpen(!isBoxOpen);
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle increment/decrement for adults and children
  const updateCount = (type: keyof FormData, increment: number) => {
    setFormData((prevState) => ({
      ...prevState,
      [type]: Math.max(0, (prevState[type] as number) + increment), // Cast to number
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission

    // Construct mailto link
    const { name, email, checkin, checkout, adults, children } = formData;
    const subject = encodeURIComponent("Booking Request from " + name);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCheck-in Date: ${checkin}\nCheck-out Date: ${checkout}\nAdults: ${adults}\nChildren: ${children}`
    );

    // Create the mailto link
    const mailtoLink = `mailto:thubten219@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink; // Redirect to the mailto link
  };

  return (
    <div className="video-banner">
      <video className="banner-video" autoPlay loop muted playsInline>
        <source src="DepsiResort.mp4" type="video/mp4" />
      </video>
      <div className="tinted-overlay"></div>
      <div className="video-overlay">
        <h1 className="large-header">Depsi Resort</h1>
        <h5>A Tranquil Fusion of Tradition and Modernity</h5>
        <button className="booking-btn" onClick={toggleBox}>
          Book Now
        </button>
      </div>

      {/* Conditionally render the details box */}
      {isBoxOpen && (
        <div className="details-box">
          <h3>Booking Details</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Check-in Date:&nbsp;
              <input
                type="date"
                name="checkin"
                value={formData.checkin}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Check-out Date:&nbsp;
              <input
                type="date"
                name="checkout"
                value={formData.checkout}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <div className="counter-container">
              <div className="counter">
                <label>Adults:</label>
                <button type="button" onClick={() => updateCount("adults", -1)}>
                  -
                </button>
                &nbsp;
                <span>{formData.adults}</span>&nbsp;
                <button type="button" onClick={() => updateCount("adults", 1)}>
                  +
                </button>
              </div>
              <div className="counter">
                <label>Children:</label>
                <button
                  type="button"
                  onClick={() => updateCount("children", -1)}
                >
                  -
                </button>
                &nbsp;
                <span>{formData.children}</span>&nbsp;
                <button
                  type="button"
                  onClick={() => updateCount("children", 1)}
                >
                  +
                </button>
              </div>
            </div>
            <br />
            <button type="submit" className="submit-btn">
              Submit
            </button>
            &nbsp;&nbsp;
            <button className="close-btn" onClick={toggleBox}>
              Close
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Banner;
