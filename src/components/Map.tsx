import "./App.css";

function Map() {
  return (
    <div className="map-container">
      <div className="address-section">
        <h2>Our Address</h2>
        <p> Depsi Babesa Above Desi School,</p>
        <p>Thimphu, Bhutan</p>
        <p>Phone: +975 12345678</p>
        <p>Email: Depsiresort@resort.com</p>
      </div>
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1770.5862205602123!2d89.63887633460902!3d27.4327361308582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e193002ef641d1%3A0x2b9532a1f9b90fdb!2sDEPSI%20RESORT!5e0!3m2!1sen!2sau!4v1727365882319!5m2!1sen!2sau"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
