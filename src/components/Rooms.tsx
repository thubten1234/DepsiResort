import "./App.css";

function Room() {
  return (
    <div className="card mb-3" style={{ maxWidth: "80%" }}>
      <div className="row g-0">
        <div className="col-md-6">
          <img
            src="/rooms.png"
            className="img-fluid rounded-start d-none d-md-block"
            alt="Rooms"
            style={{ height: "250px" }} // Adjust height as necessary
          />
        </div>
        <div className="col-md-6">
          <div className="card-body h-100">
            <h3 className="card-title">Rooms</h3>
            <p className="card-text fs-5 fs-md-4 fs-lg-3">
              Depsi Resort features a variety of rooms designed for comfort and
              luxury. With 16 accommodations, including standard and deluxe
              options, we cater to all preferences. Enjoy modern amenities,
              stunning views, and a peaceful environment, perfect for a tranquil
              getaway. Experience unmatched service and hospitality during your
              stay.
            </p>

            <a href="#" className="explore-btn justify-content-center mt-auto">
              Explore More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;
