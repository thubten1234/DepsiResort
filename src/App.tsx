import Banner from "./components/Banner";
import BookingForm from "./components/BookingForm";
import StoryLine from "./components/StoryLine";
import Explore from "./components/Rooms";
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
        <BookingForm />
      </div>
      <div>
        <StoryLine />
      </div>
      <div>
        <Room />
        <br />
        <Activities />
        <br />
        <Facilities />
        <hr />
      </div>

      <div>
        <br />
      </div>
      <div></div>
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
