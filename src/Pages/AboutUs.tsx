import "../components/App.css"; // Import your CSS file
import ReactDOM from "react-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer-fluid";
function AboutUs() {
  return (
    <div className="main">
      <div className="banner-container">
        <Navbar />
      </div>
      <div className="aboutus-container">
        <div className="aboutus-quote">
          <h5>
            "Discover an immaculate and enchanting retreat at Depsi Resort,
            where families can create lasting memories and individuals can find
            a serene escape from the hustle and bustle of everyday life. We
            invite you to experience our tranquil oasis, perfectly designed for
            relaxation and rejuvenation. Book your stay today and indulge in the
            peaceful ambiance that awaits you!"
          </h5>
          <br />
        </div>
        <h1>About Us</h1>
        <div className="aboutus-content">
          <div className="aboutus-text">
            <p>
              At the helm of Depsi Resort is Dorji Tshering, a distinguished
              leader who previously held the esteemed position of Thimphu
              Dzongda, a senior administrative role within Bhutan's government.
              With a wealth of experience in public service, he brings a
              profound understanding of Bhutanese culture and hospitality to the
              resort. His vision for Depsi Resort is to offer guests a
              harmonious blend of traditional Bhutanese charm and modern
              comfort, creating an unforgettable experience. Under his guidance,
              the resort embodies the values of service and community that he
              championed during his tenure, ensuring that every guest feels
              welcomed and valued.
            </p>
            <p>
              Depsi Resort is more than just a 3-star getaway—it's a haven of
              luxury nestled in the scenic hills above Desi High School, just a
              short 10-minute drive from the main highway. The resort offers an
              ideal blend of convenience and tranquility, allowing guests to
              experience the best of both worlds. Perched on the hillside, it
              boasts sweeping panoramic views of the Thimphu valley, providing a
              stunning backdrop to your stay.
            </p>
            <p>
              Our staff are not just well-trained but genuinely dedicated to
              meeting your every need, ensuring a stay marked by professionalism
              and warmth. At Depsi, hospitality is not just a service—it's a
              craft.
            </p>
            <p>
              The resort's architecture is a seamless blend of the old and the
              new, where Bhutan's rich cultural heritage meets modern
              sophistication. The design captures the essence of traditional
              Bhutanese charm while embracing the spirit of contemporary
              progress, creating a space that feels both timeless and current.
            </p>
            <p>
              Surrounding the resort, lush gardens and vibrant greenhouses
              flourish with oranges, kiwis, apples, and an array of colorful
              flowers. These enchanting landscapes invite you to explore at your
              leisure, whether you're taking a peaceful stroll along the river
              or capturing the perfect photo. Every corner of Depsi Resort
              promises to delight and inspire.
            </p>
          </div>
          <div className="aboutus-image">
            <img
              src="public/Depsi-pres.png"
              alt="Dorji Tshering"
              style={{ border: "1px solid", borderRadius: 0 }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
