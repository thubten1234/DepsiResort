import React from "react";
import Banner from "./components/Banner";
import BookingForm from "./components/BookingForm";
import StoryLine from "./components/StoryLine";
import Explore from "./components/Rooms";
import Activities from "./components/Activities";
import Facilities from "./components/facilities";
import Footer from "./components/Footer-fluid";
import Map from "./components/Map";
import Navbar from "./components/Navbar";

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
        <div className="container text-center">
          <div className="row align-items-stretch">
            <div className="col-md-4 d-flex">
              <Facilities />
            </div>
            <div className="col-md-4 d-flex">
              <Activities />
            </div>
            <div className="col-md-4 d-flex">
              <Explore />
            </div>
          </div>
        </div>
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
