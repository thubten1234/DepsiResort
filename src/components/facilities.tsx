import "./App.css";

function Facilities() {
  return (
    <div className="card mb-3" style={{ maxWidth: "80%", margin: "auto" }}>
      <div className="row g-0">
        <div className="col-md-7">
          <img
            src="/facilities.png"
            className="img-fluid rounded-start d-none d-md-block"
            alt="Facilities"
            style={{ height: "600px" }} // Adjust height as necessary
          />
        </div>
        <div className="col-md-4">
          <div className="card-body h-100">
            <h3 className="card-title">Facilities</h3>
            <p className="card-text fs-6 fs-md-4 fs-lg-3">
              At Depsi Resort, we prioritize your comfort and convenience with
              round-the-clock services. Our 24-hour front desk is always ready
              to assist you with transportation and local insights. Enjoy
              hassle-free airport transfers, efficient laundry services, and
              optional guide services to explore the area. Guests receive
              complimentary lodging and a warm welcome treat, ensuring a
              memorable stay.
            </p>
            <br />
    
            <a href="#" className="explore-btn mt-auto">
              Explore More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facilities;
