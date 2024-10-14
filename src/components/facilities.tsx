import "./App.css";

function Facilities() {
  return (
    <div className="row" style={{ maxWidth: "130%", marginBottom: "60px" }}>
      <div className="column  d-none d-md-block">
        <img
          src="/facilities.png"
          className="img-fluid d-none d-md-block"
          alt="Facilities"
        />
      </div>
      <div className="column ">
        <h3 className="card-title">Facilities</h3>
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
        <a href="#" className="explore-btn mt-auto">
          Explore More
        </a>
      </div>
    </div>
  );
}

export default Facilities;
