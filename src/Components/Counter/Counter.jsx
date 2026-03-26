import React, { useState, useEffect } from "react";
import "./Counter.css";

const Countdown = ({ openPopup }) => {

  // ✅ FIXED TARGET DATE (2 April, current year)
  const targetDate = new Date("April 2, 2026 00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">

      <div className="countdown-text">
        <h2>New Batch Starting Soon</h2>
        <p>
          Get a chance to learn from us and become an expert in CNC & VMC Programming
        </p>
      </div>

      <div className="countdown-timer">

        <div className="time-box">
          <span>{timeLeft.days}</span>
          <p>Days</p>
        </div>

        <div className="time-box">
          <span>{timeLeft.hours}</span>
          <p>Hours</p>
        </div>

        <div className="time-box">
          <span>{timeLeft.minutes}</span>
          <p>Minutes</p>
        </div>

        <div className="time-box">
          <span>{timeLeft.seconds}</span>
          <p>Seconds</p>
        </div>

      </div>

      <button className="sq-btn" onClick={openPopup}>
        Register Now
      </button>

    </div>
  );
};

export default Countdown;