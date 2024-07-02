import React, { useState } from "react";
import axios from "axios"; // Pastikan Anda mengimpor Axios dengan benar
import "../../sass/reservation.scss";

export const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/reservations", formData)
      .then((res) => {
        setMessage(res.data.message);
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          date: "",
          time: "",
        });
      })
      .catch((err) => {
        console.error("Error posting data:", err);
        // Handle error state or display a user-friendly message
      });
  };

  return (
    <div id="form__reservation">
      <form onSubmit={handleSubmit}>
        <div className="first__form">
          <div>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder=" " />
            <label>Name</label>
          </div>
          <div>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder=" " />
            <label>Phone</label>
          </div>
        </div>

        <div className="sec__form">
          <div>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder=" " />
            <label>Email</label>
          </div>
          <div>
            <select name="service" value={formData.service} onChange={handleChange} required>
              <option value="" disabled>
                Select a service
              </option>
              <option value="haircut">Haircut and Styling</option>
              <option value="manicure">Manicure and Pedicure</option>
              <option value="facial">Facial Treatment</option>
            </select>
            <label>Service</label>
          </div>
        </div>

        <div className="third__form">
          <div>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required placeholder=" " />
            <label>Date</label>
          </div>
          <div>
            <input type="time" name="time" value={formData.time} onChange={handleChange} required placeholder=" " />
            <label>Time</label>
          </div>
        </div>
        <button type="submit">Submit</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};
