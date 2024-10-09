import "./App.css";

function Activities() {
  return (
    <div className="row" style={{ maxWidth: "130%", marginBottom: "40px" }}>
      <div className="column">
        <h3 className="card-title">Activities </h3>
        <br />
        <p className="card-text fs-6 fs-md-4 fs-lg-3">
          Depsi Resort offers an Outdoor Extravaganza ideal for networking,
          breaks, or celebrations. Enjoy cozy evenings around the Bonfire,
          perfect for sharing stories and creating lasting memories. Capture the
          beauty of your stay at our Photo Spot by the cottages, ideal for
          immortalizing moments with a picturesque backdrop. Relax and enjoy our
          serene setting.
        </p>
        <br />
        <a href="#" className="explore-btn mt-auto">
          Explore More
        </a>
      </div>
      <div className="column">
        <img src="/activities.png" className="img-fluid d-none d-md-block" />
      </div>
    </div>
  );
}

export default Activities;
