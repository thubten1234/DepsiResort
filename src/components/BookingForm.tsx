import React from "react";
import "./BookingForm.css"; // Assuming you have some CSS styles here

function BookingForm() {
  return (
    <div className="Booking-form-parent">
      <h1>Request Booking</h1>

      <form action="submit_booking.php" method="post">
        <input
          type="text"
          placeholder="Check-In Date"
          className="Booking-form"
          id="start_datepicker"
          style={{ marginBottom: "10px" }}
        />
        <input
          type="text"
          placeholder="Check-Out Date"
          className="Booking-form"
          id="end_datepicker"
          style={{ marginBottom: "10px" }}
        />
        <input
          type="number"
          min="1"
          placeholder="Adults"
          className="Booking-form"
          style={{ marginBottom: "10px" }}
        />
        <input
          type="number"
          placeholder="Children"
          className="Booking-form"
          style={{ marginBottom: "10px" }}
        />
        <input type="submit" value="Submit" className="submit-button" />
      </form>
    </div>
  );
}

export default BookingForm;
