import React, { useState } from "react";
import Button from "../../components/Button/Button";
import "./BookingForm.css";

const BookingForm = ({
  onFormSubmit,
  isFormSubmitted,
  availableTimes,
  dispatchOnDateChange
}) => {
  const defaultTime = availableTimes[0];
  
  const [formValues, setFormValues] = useState({
    date: "",
    time: defaultTime,
    people: "",
    preference: "", // Updated key
  });

  const handleInputChange = (e) => {
    if (e.target.name === 'date') {
      dispatchOnDateChange(e.target.value);
    }
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const minGuest = 1;
  const maxGuest = 10;

  return (
    <form onSubmit={(e) => onFormSubmit(e, formValues)}>
      <div className="reservation-container">
        <label htmlFor="date" className="containter-item-title">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          onChange={handleInputChange}
          className={isFormSubmitted && !formValues.date ? "error" : ""}
        />
      </div>
      <div className="reservation-container">
        <label htmlFor="time" className="containter-item-title">
          Time
        </label>
        <select
          id="time"
          name="time"
          value={formValues.time}
          onChange={handleInputChange}
          className={isFormSubmitted && !formValues.time ? "error" : ""}
        >
          {availableTimes.map(time => 
            <option key={time} value={time}>
              {time}
            </option>
          )}
        </select>
      </div>
      <div className="reservation-container">
        <label htmlFor="people" className="containter-item-title">
          Number of people
        </label>
        <input
          type="number"
          id="people"
          name="people"
          min={minGuest}
          max={maxGuest}
          onChange={handleInputChange}
          className={isFormSubmitted && !formValues.people ? "error" : ""}
        />
      </div>
      <div className="reservation-container">
        <label htmlFor="preference" className="containter-item-title"> {/* Updated label */}
          Preference
        </label>
        <select
          id="preference" // Updated id
          name="preference" // Updated name
          onChange={handleInputChange}
          className={isFormSubmitted && !formValues.preference ? "error" : ""} // Updated className
        >
          <option value="choose">Choose Preference</option>
          <option value="window">Window Seat</option>
          <option value="outdoor">Outdoor Seating</option>
          <option value="quiet">Quiet Area</option>
          <option value="private">Private Room</option>
          <option value="highchair">Highchair Needed</option>
          <option value="wheelchair">Wheelchair Accessible</option>
          <option value="romantic">Romantic Setup</option>
          <option value="large_group">Large Group Table</option>
          <option value="vip">VIP Section</option>
          <option value="birthday">Birthday Setup</option>
          <option value="anniversary">Anniversary Setup</option>
          <option value="standard">Standard Table</option>
        </select>
      </div>
      <div className="reservation-button">
        <Button title="Book a table" type="submit" />
      </div>
    </form>
  );
};

export default BookingForm;