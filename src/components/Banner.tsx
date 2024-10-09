import "./App.css";

function Banner() {
  return (
    <div className="video-banner">
      <video className="banner-video" autoPlay loop muted playsInline>
        <source src="DepsiResort.mp4" type="video/mp4" />
      </video>
      <div className="tinted-overlay"></div> {/* Moved this div outside */}
      <div className="video-overlay">
        <h1 className="large-header">Depsi Resort</h1>
        <h2>A Tranquil Fusion of Tradition and Modernity</h2>
        <button className="booking-btn">Book Now</button>
      </div>
    </div>
  );
}

export default Banner;
