import "./App.css";
function Facilities() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="/facilities.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Facilities</h5>
        <p className="card-text">
          At Depsi Resort, we prioritize your comfort and convenience with
          round-the-clock services. Our 24-hour front desk is always ready to
          assist you with transportation and local insights. Enjoy hassle-free
          airport transfers, efficient laundry services, and optional guide
          services to explore the area. Guests receive complimentary lodging and
          a warm welcome treat, ensuring a memorable stay.
        </p>
        <a href="#" className="explore-btn">
          Explore More
        </a>
      </div>
    </div>
  );
}

export default Facilities;
