import "./App.css";

function Activities() {
  return (
    <div className="card mb-3" style={{ maxWidth: "80%" }}>
      <div className="row g-0">
        <div className="col-md-6">
          <div className="card-body h-100">
            <h3 className="card-title">Activities</h3>
            <p className="card-text fs-5 fs-md-4 fs-lg-3">
              Depsi Resort offers an Outdoor Extravaganza ideal for networking,
              breaks, or celebrations. Enjoy cozy evenings around the Bonfire,
              perfect for sharing stories and creating lasting memories. Capture
              the beauty of your stay at our Photo Spot by the cottages, ideal
              for immortalizing moments with a picturesque backdrop. Relax and
              enjoy our serene setting.
            </p>

            <a href="#" className="explore-btn justify-content-center mt-auto">
              Explore More
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src="/activities.png"
            className="img-fluid rounded-start d-none d-md-block"
            alt="Activities"
            style={{ height: "500px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Activities;
