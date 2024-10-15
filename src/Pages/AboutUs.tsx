import "../components/App.css"; // Import your CSS file
import Navbar from "../components/Navbar";
import Footer from "../components/Footer-fluid";

function AboutUs() {
  return (
    <div className="main">
      <div className="banner-container">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div
        className="hero-section text-center"
        style={{ backgroundImage: 'url("/aboutusbg.png")' }}
      >
        <div className="hero-overlay">
          <h1 className="hero-title">About Us</h1>
          <p className="hero-subtitle">
            Discover an immaculate and enchanting retreat at Depsi Resort, where
            comfort meets tranquility.
          </p>
        </div>
      </div>

      {/* About Us Content */}
      <div className="aboutus-container container my-5">
        <div className="row">
          <div className="col-12 col-md-6 aboutus-text">
            <h2>Our Story</h2>
            <p>
              At the helm of Depsi Resort is Dorji Tshering, a distinguished
              leader who previously held the esteemed position of Thimphu
              Dzongda, a senior administrative role within Bhutan's government.
              With a wealth of experience in public service, he brings a
              profound understanding of Bhutanese culture and hospitality to the
              resort. His vision for Depsi Resort is to offer guests a
              harmonious blend of traditional Bhutanese charm and modern
              comfort.
            </p>
            <p>
              Depsi Resort is more than just a 3-star getaway—it's a haven of
              luxury nestled in the scenic hills above Desi High School, just a
              short 10-minute drive from the main highway.
            </p>
          </div>
          <div className="col-12 col-md-6 aboutus-image text-center">
            <img
              src="/Depsi-pres.png"
              alt="Dorji Tshering"
              className="img-fluid"
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 col-md-6 aboutus-image text-center order-2 order-md-1">
            <img
              src="/another-image.jpg"
              alt="Depsi Resort"
              className="img-fluid"
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className="col-12 col-md-6 aboutus-text order-1 order-md-2">
            <h2>Our Philosophy</h2>
            <p>
              Our staff are not just well-trained but genuinely dedicated to
              meeting your every need, ensuring a stay marked by professionalism
              and warmth. At Depsi, hospitality is not just a service—it's a
              craft. The resort's architecture blends Bhutan's rich cultural
              heritage with modern sophistication.
            </p>
            <p>
              Surrounding the resort, lush gardens and vibrant greenhouses
              flourish with fruits and flowers, inviting you to explore.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs;
