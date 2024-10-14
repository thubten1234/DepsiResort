import "./App.css";

function Room() {
  return (
    <div className="row" style={{ maxWidth: "130%", marginBottom: "60px" }}>
      <div className="column  d-none d-md-block">
        <img
          src="/rooms.png"
          className="img-fluid d-none d-md-block"
          alt="Rooms"
        />
      </div>
      <div className="column">
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
        <a href="#" className="explore-btn mt-auto">
          Explore More
        </a>
      </div>
    </div>
  );
}

export default Room;
