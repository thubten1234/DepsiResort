import React, { useEffect, useState, useRef } from "react";
import Banner from "../components/Banner";
import StoryLine from "../components/StoryLine";
import Activities from "../components/Activities";
import Facilities from "../components/facilities";
import Footer from "../components/Footer-fluid";
import Map from "../components/Map";
import Room from "../components/Rooms";
import Navbar from "../components/Navbar";

function Home() {
  const roomRef = useRef(null);
  const activitiesRef = useRef(null);
  const facilitiesRef = useRef(null);
  const mapRef = useRef(null);

  // State to track visibility of each component
  const [isVisible, setIsVisible] = useState({
    room: false,
    activities: false,
    facilities: false,
    map: false,
  });

  // Function to check if an element is in the viewport
  const isInViewport = (
    element: { getBoundingClientRect: () => any } | null
  ) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.innerWidth <= 768) {
      setIsVisible((prevVisibility) => ({
        room: prevVisibility.room || isInViewport(roomRef.current),
        activities:
          prevVisibility.activities || isInViewport(activitiesRef.current),
        facilities:
          prevVisibility.facilities || isInViewport(facilitiesRef.current),
        map: prevVisibility.facilities || isInViewport(mapRef.current),
      }));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <div
              ref={roomRef}
              className={`slide-in ${isVisible.room ? "visible" : ""}`}
            >
              <Room />
            </div>
            <br />
            <div
              ref={activitiesRef}
              className={`slide-in ${isVisible.activities ? "visible" : ""}`}
            >
              <Activities />
            </div>
            <div
              ref={facilitiesRef}
              className={`slide-in ${isVisible.facilities ? "visible" : ""}`}
            >
              <Facilities />
            </div>
          </div>
        </div>
        <div
          ref={mapRef}
          className={`slide-in ${isVisible.map ? "visible" : ""}`}
        >
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
