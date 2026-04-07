import React, { useState } from 'react';
import './Form.css';

const FormSection = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `New Enquiry:%0A
Name: ${formData.name}%0A
Email: ${formData.email}%0A
Phone: ${formData.phone}%0A
City: ${formData.city}`;

    const whatsappURL = `https://wa.me/919484794843?text=${message}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="form">
      <div className="form-container">

        <h2>Submit Your Details For A Callback</h2>

        <form className="custom-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <input 
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input 
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input 
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input 
              type="text"
              name="city"
              placeholder="Enter your city"
              onChange={handleChange}
              required
            />
          </div>

          <button className="submit-btn">Submit</button>

        </form>

      </div>
    </div>
  );
};

export default FormSection;