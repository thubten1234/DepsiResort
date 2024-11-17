import "./App.css";
import { Link } from "react-router-dom";

function Facilities() {
  return (
    <div className="row" style={{ marginBottom: "60px" }}>
      <div className="column col-12 col-md-6">
        <img src="/facilities.png" className="img-fluid" alt="Facilities" />
      </div>

      <div className="column col-12 col-md-6">
        <h3 className="card-title" onClick={() => window.scrollTo(0, 0)}>
          Facilities
        </h3>
        <br />
        <p className="card-text fs-6 fs-md-4 fs-lg-3">
          At Depsi Resort, we prioritize your comfort and convenience with
          round-the-clock services. Our 24-hour front desk is always ready to
          assist you with transportation and local insights. Enjoy hassle-free
          airport transfers, efficient laundry services, and optional guide
          services to explore the area. Guests receive complimentary lodging and
          a warm welcome treat, ensuring a memorable stay.
        </p>
        <br />
        <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
          <button className="explore-btn mt-auto">Explore More</button>
        </Link>
      </div>
    </div>
  );
}

export default Facilities;
