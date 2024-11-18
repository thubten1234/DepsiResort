import "../components/App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer-fluid";
function Activities_main() {
  return (
    <>
      <div className="banner-container">
        <Navbar />
      </div>

      <div
        className="hero-section text-center mb-5"
        style={{ backgroundImage: 'url("/activities.png")', height: "600px" }}
      >
        <div className="hero-overlay">
          <h1 className="hero-title">Activities</h1>
          <h4 className="hero-subtitle">
            {" "}
            Relax, Explore, and Create Unforgettable Memories
          </h4>
        </div>
      </div>

      {/* Activities Content */}
      <div className="row mb-5">
        {/* Image Column */}
        <div className="column col-12 col-md-6">
          <img
            src="/activities.png"
            className="img-fluid rounded"
            alt="Activities"
          />
        </div>

        {/* Description Column */}
        <div className="column col-12 col-md-6">
          <h3 className="card-title">Discover Our Activities</h3>
          <p className="card-text fs-6 fs-md-5 mt-3">
            At Depsi Resort, every moment is an opportunity for connection,
            relaxation, and adventure. From cozy evenings around the Bonfire to
            capturing picturesque memories at our Photo Spot, we offer a range
            of activities designed to enhance your stay. Whether you're enjoying
            a break in our Outdoor Extravaganza or seeking serene moments in our
            lounge, there's something for everyone.
          </p>
        </div>
      </div>

      {/* Highlighted Activities Section */}
      <div className="highlighted-activities">
        <h3 className="section-title text-center mb-4">
          Highlighted Activities
        </h3>
        <div className="row">
          {/* Bonfire Section */}
          <div className="col-12 col-md-4 mb-4">
            <div className="activity-card text-center">
              <img src="/bonfire.png" alt="Bonfire" className="activity-img" />
              <h5 className="activity-title mt-3">Bonfire</h5>
              <p className="activity-description">
                Gather under the stars and enjoy the warm glow of a crackling
                bonfire, perfect for sharing stories and laughter with loved
                ones.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <div className="activity-card text-center">
              <img
                src="/outdoor-extravaganza.png"
                alt="Outdoor Extravaganza"
                className="activity-img"
              />
              <h5 className="activity-title mt-3">Outdoor Extravaganza</h5>
              <p className="activity-description">
                Immerse yourself in nature with a refreshing outdoor space,
                perfect for breaks, networking, or celebrations.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <div className="activity-card text-center">
              <img
                src="/photo-spot.png"
                alt="Photo Spot"
                className="activity-img"
              />
              <h5 className="activity-title mt-3">Photo Spot</h5>
              <p className="activity-description">
                Capture your special moments at our picturesque photo spot, with
                stunning backdrops of the cottages and cityscape.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Activities_main;
