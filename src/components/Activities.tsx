function Activities() {
  return (
    <div className="card h-100" style={{ width: "24rem" }}>
      <img
        src="/activities.png"
        className="card-img-top d-none d-md-block"
        alt="..."
      />
      <div className="card-body ">
        <h3 className="card-title">Activities</h3>
        <p className="card-text fs-4 fs-md-3 fs-lg-2">
          Depsi Resort offers an Outdoor Extravaganza ideal for networking,
          breaks, or celebrations. Enjoy cozy evenings around the Bonfire,
          perfect for sharing stories and creating lasting memories. Capture the
          beauty of your stay at our Photo Spot by the cottages, ideal for
          immortalizing moments with a picturesque backdrop. Relax and enjoy our
          serene setting.
        </p>
        <br />
        <a href="#" className="explore-btn mt-auto">
          Explore More
        </a>
      </div>
    </div>
  );
}

export default Activities;
