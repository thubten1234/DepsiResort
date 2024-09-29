function Room() {
  return (
    <div className="card h-100" style={{ width: "24rem" }}>
      <img
        src="/rooms.png"
        className="card-img-top d-none d-md-block"
        alt="..."
      />
      <div className="card-body">
        <h3 className="card-title">Rooms</h3>
        <p className="card-text fs-4 fs-md-3 fs-lg-2">
          Depsi Resort features a variety of rooms designed for comfort and
          luxury. With 16 accommodations, including standard and deluxe options,
          we cater to all preferences. Enjoy modern amenities, stunning views,
          and a peaceful environment, perfect for a tranquil getaway. Experience
          unmatched service and hospitality during your stay.
        </p>
        <br />
        <br />
        <a href="#" className="explore-btn mt-auto">
          Explore More
        </a>
      </div>
    </div>
  );
}

export default Room;
