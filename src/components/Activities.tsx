import { Link } from "react-router-dom";
import "./App.css";

function Activities() {
  return (
    <div className="row" style={{ marginBottom: "60px" }}>
      <div className="column col-12 col-md-6 order-1 order-md-2">
        <img src="/activities.png" className="img-fluid" alt="Activities" />
      </div>

      <div className="column col-12 col-md-6 order-2 order-md-1">
        <h3 className="card-title">Activities</h3>
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
        <button className="explore-btn mt-auto">Explore More</button>
      </div>
    </div>
  );
}

export default Activities;
