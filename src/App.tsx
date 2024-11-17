import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import Room_main from "./Pages/Room_main";
import Library from "./Pages/Library";
import Activities_main from "./Pages/Activities_main";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/rooms" element={<Room_main />} />
          <Route path="/library" element={<Library />} />
          <Route path="/activities" element={<Activities_main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
