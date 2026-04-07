import React, { useState, useEffect } from "react";
import "./AdminForm.css";

const EVCountDown = () => {

  const [formData, setFormData] = useState({
    isActive: true,
    heading: "",
    description: "",
    targetDate: ""
  });

  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  // ✅ FETCH EXISTING DATA
  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/ev");
        const data = await res.json();

        if (data?.countdown) {
          setFormData({
            isActive: data.countdown.isActive || false,
            heading: data.countdown.heading || "",
            description: data.countdown.description || "",
            targetDate: data.countdown.targetDate
              ? data.countdown.targetDate.split("T")[0] // date input format fix
              : ""
          });
        }

      } catch (err) {
        console.log(err);
      }
    };

    fetchData();

  }, []);


  // ✅ HANDLE INPUT CHANGE
  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });

  };


  // ✅ SUBMIT
  const handleSubmit = async (e) => {

    e.preventDefault();
    setLoading(true);

    try {

      const bodyData = {
        countdown: {
          isActive: formData.isActive,
          heading: formData.heading,
          description: formData.description,
          targetDate: formData.targetDate
        }
      };

      const res = await fetch("http://localhost:5000/api/ev", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(bodyData)
      });

      const data = await res.json();

      if (res.ok) {
        alert("Countdown Saved Successfully");
      } else {
        alert(data.message || "Failed to save");
      }

    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };


  return (
    <div className="admin-container">

      <form className="admin-card" onSubmit={handleSubmit}>

        <h1 className="main-title">
          Countdown Section
        </h1>

        <br /><br />

        {/* ACTIVE TOGGLE */}
        <div className="input-group">
          <label>
            <input
              type="checkbox"
              name="isActive"
              checked={formData.isActive}
              onChange={handleChange}
            />
            &nbsp; Enable Countdown
          </label>
        </div>

        {/* HEADING */}
        <div className="input-group">
          <label>Heading</label>
          <input
            type="text"
            name="heading"
            value={formData.heading}
            placeholder="Limited Time Offer"
            onChange={handleChange}
          />
        </div>

        {/* DESCRIPTION */}
        <div className="input-group">
          <label>Description</label>
          <textarea
            rows="4"
            name="description"
            value={formData.description}
            placeholder="Offer ends soon, enroll now!"
            onChange={handleChange}
          />
        </div>

        {/* DATE */}
        <div className="input-group">
          <label>Target Date</label>
          <input
            type="date"
            name="targetDate"
            value={formData.targetDate}
            onChange={handleChange}
          />
        </div>

        <button className="submit-btn" disabled={loading}>
          {loading ? "Saving..." : "Save Countdown"}
        </button>

      </form>

    </div>
  );
};

export default EVCountDown;