import { Link } from "react-router-dom";
import "./App.css";

function Room() {
  return (
    <div className="row" style={{ marginBottom: "60px" }}>
      <div className="column col-12 col-md-6">
        <img src="/rooms.png" className="img-fluid" alt="Rooms" />
      </div>

      <div className="column col-12 col-md-6">
        <h3 className="card-title">Rooms</h3>
        <br />
        <p className="card-text fs-6 fs-md-4 fs-lg-3">
          Depsi Resort features a variety of rooms designed for comfort and
          luxury. With 16 accommodations, including standard and deluxe options,
          we cater to all preferences. Enjoy modern amenities, stunning views,
          and a peaceful environment, perfect for a tranquil getaway. Experience
          unmatched service and hospitality during your stay.
        </p>
        <br />
        <Link to="/rooms" onClick={() => window.scrollTo(0, 0)}>
          <button className="explore-btn mt-auto">Explore More</button>
        </Link>
      </div>
    </div>
  );
}

export default Room;
