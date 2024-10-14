import Banner from "../components/Banner";
import StoryLine from "../components/StoryLine";
import Activities from "../components/Activities";
import Facilities from "../components/facilities";
import Footer from "../components/Footer-fluid";
import Map from "../components/Map";
import Room from "../components/Rooms";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <div className="banner-container">
        <Navbar />
        <Banner />
      </div>
      <div className="main">
        <div>
          <StoryLine />
        </div>
        <div className="informationsec d-flex flex-column align-items-center">
          <div className="container">
            <Room />
            <br />
            <Activities />
            <Facilities />
          </div>
        </div>
        <div>
          <Map />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
