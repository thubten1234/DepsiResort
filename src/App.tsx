import Banner from "./components/Banner";
import BookingForm from "./components/BookingForm";
import StoryLine from "./components/StoryLine";
import Activities from "./components/Activities";
import Facilities from "./components/facilities";
import Footer from "./components/Footer-fluid";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import Room from "./components/Rooms";

function App() {
  return (
    <div className="main">
      <div className="banner-container">
        <Navbar />
        <Banner />
      </div>

      <div>
        <StoryLine />
      </div>
      <div className="informationsec d-flex flex-column align-items-center">
        <br />
        <Room />
        <br />
        <br />
        <Activities />
        <br />
        <br />
        <Facilities />
        <hr />
      </div>

      <div>
        <br />
      </div>
      <div>
        <Map />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
