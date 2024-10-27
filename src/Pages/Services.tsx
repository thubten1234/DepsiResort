import "../components/App.css"; // Import your CSS file
import Navbar from "../components/Navbar";
import Footer from "../components/Footer-fluid";
import { useEffect, useState } from "react";

function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="banner-container">
        <Navbar />
      </div>
      <div
        className="hero-section text-center"
        style={{ backgroundImage: 'url("/facilities.png")' }}
      >
        <div className="hero-overlay">
          <h1 className="hero-title">Services & Hospitality</h1>
          <p className="hero-subtitle">
            Discover a world of comfort and convenience at Depsi Resort
          </p>
        </div>
      </div>
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">
          Experience top-notch facilities designed for your comfort
        </p>
        <div className="services-grid">
          <div
            className={`service-card slide-in ${isVisible ? "visible" : ""}`}
          >
            <img
              src="/frontdesk.png"
              alt="Front Desk"
              className="service-icon"
            />
            <h3>Round-the-Clock Front Desk</h3>
            <p>
              Our 24-hour front desk is dedicated to providing seamless
              assistance, ensuring that your queries and concerns are addressed
              at any time of the day or night.
            </p>
          </div>

          <div
            className={`service-card slide-in ${isVisible ? "visible" : ""}`}
          >
            <img
              src="/airportpickup.png"
              alt="Airport Pick & Drop"
              className="service-icon"
            />
            <h3>Airport Pick & Drop</h3>
            <p>
              We offer hassle-free airport pick and drop services, ensuring a
              smooth transition from your journey to the comfort of our resort.
            </p>
          </div>

          <div
            className={`service-card slide-in ${isVisible ? "visible" : ""}`}
          >
            <img
              src="/concierge.png"
              alt="Concierge"
              className="service-icon"
            />
            <h3>Concierge Services</h3>
            <p>
              Our concierge team is dedicated to enhancing your stay with
              personalized assistance, from restaurant reservations to special
              requests.
            </p>
          </div>

          <div
            className={`service-card slide-in ${isVisible ? "visible" : ""}`}
          >
            <img
              src="/guide.png"
              alt="Guide Services"
              className="service-icon"
            />
            <h3>Optional Guide Services</h3>
            <p>
              Explore the surrounding areas with ease by opting for our guide
              services. Our knowledgeable guides will enrich your experience
              with local insights.
            </p>
          </div>

          <div
            className={`service-card slide-in ${isVisible ? "visible" : ""}`}
          >
            <img
              src="/complimentary.png"
              alt="Complimentary"
              className="service-icon"
            />
            <h3>Complimentary Stay & Dining</h3>
            <p>
              For those accompanying our esteemed guests, we offer complimentary
              fooding and lodging, ensuring everyone enjoys the warmth of Depsi
              Resort hospitality.
            </p>
          </div>

          <div
            className={`service-card slide-in ${isVisible ? "visible" : ""}`}
          >
            <img
              src="/welcometreat.png"
              alt="Welcome Treats"
              className="service-icon"
            />
            <h3>Welcome Treats</h3>
            <p>
              A warm welcome sets the tone for a memorable stay, starting with a
              welcome tea/treat upon arrival.
            </p>
          </div>

          <div
            className={`service-card slide-in ${isVisible ? "visible" : ""}`}
          >
            <img
              src="/security.png"
              alt="Camera Surveillance"
              className="service-icon"
            />
            <h3>24-Hour Camera Surveillance</h3>
            <p>
              Safety is paramount, and our 24-hour camera surveillance system
              ensures a secure and tranquil stay.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Services;
