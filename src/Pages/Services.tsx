import "../components/App.css"; // Import your CSS file
import Navbar from "../components/Navbar";
import Footer from "../components/Footer-fluid";

function Services() {
  return (
    <div>
      <div className="banner-container">
        <Navbar />
      </div>
      <div
        className="hero-section text-center"
        style={{ backgroundImage: 'url("/facilities.png") ' }}
      >
        <div className="hero-overlay">
          <h1 className="hero-title">Services & Hospitality</h1>
          <p className="hero-subtitle">
            Discover a world of comfort and convenience at Depsi Resort
          </p>
        </div>
      </div>
      <div className="services-container">
        <div className="services-grid">
          <div className="service-card">
            <img
              src="/frontdesk.png"
              alt="Front Desk"
              className="service-icon"
            />
            <h3>Round-the-Clock Front Desk</h3>
            <p>
              Our 24-hour front desk is dedicated to providing seamless
              assistance, ensuring that your queries and concerns are addressed
              at any time of the day or night. Whether it’s arranging
              transportation, providing local insights, or addressing any
              concerns you may have.
            </p>
          </div>

          <div className="service-card">
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

          <div className="service-card">
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

          <div className="service-card">
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

          <div className="service-card">
            <img
              src="/complimentary.png"
              alt="Complimentary"
              className="service-icon"
            />
            <h3>Complimentary Fooding & Lodging</h3>
            <p>
              For those accompanying our esteemed guests, we offer complimentary
              fooding and lodging, ensuring everyone enjoys the warmth of Depsi
              Resort hospitality.
            </p>
          </div>

          <div className="service-card">
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

          <div className="service-card">
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
      <Footer />
    </div>
  );
}

export default Services;
