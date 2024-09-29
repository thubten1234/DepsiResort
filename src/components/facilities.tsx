import "./App.css";
function Facilities() {
  return (
    <div className="card" style={{ width: "24rem" }}>
      <img
        src="/facilities.png"
        className="card-img-top d-none d-md-block"
        alt="..."
      />
      <div className="card-body h-100">
        <h3 className="card-title">Facilities</h3>
        <p className="card-text fs-4 fs-md-3 fs-lg-2">
          At Depsi Resort, we prioritize your comfort and convenience with
          round-the-clock services. Our 24-hour front desk is always ready to
          assist you with transportation and local insights. Enjoy hassle-free
          airport transfers, efficient laundry services, and optional guide
          services to explore the area. Guests receive complimentary lodging and
          a warm welcome treat, ensuring a memorable stay.
        </p>
        <a href="#" className="explore-btn mt-auto">
          Explore More
        </a>
      </div>
    </div>
  );
}

export default Facilities;
