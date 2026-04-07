import React, { useState, useEffect } from "react";
import "./Counter.css";

const Countdown = ({ openPopup, data }) => {

  const isActive = data?.isActive ?? false;
  const heading = data?.heading || "New Batch Starting Soon";
  const description =
    data?.description ||
    "Get a chance to learn CNC & VMC from industry experts";

  const fallbackDate = new Date();
  fallbackDate.setDate(fallbackDate.getDate() + 7);

  const targetDate = data?.targetDate
    ? new Date(data.targetDate).getTime()
    : fallbackDate.getTime();

  if (!isActive) return null;

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
      setAnimate(true);

      setTimeout(() => setAnimate(false), 300);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return (
      <div className="countdown-expired">
        <h2>Offer Expired</h2>
      </div>
    );
  }

  return (
    <div className="countdown-container glass">

      <div className="countdown-text">
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>

      <div className="countdown-timer">

        {["days", "hours", "minutes", "seconds"].map((unit) => (
          <div key={unit} className={`time-box ${animate ? "tick" : ""}`}>
            <span>{timeLeft[unit]}</span>
            <p>{unit}</p>
          </div>
        ))}

      </div>

      <button className="sq-btn glow-btn" onClick={openPopup}>
        Register Now
      </button>

    </div>
  );
};

export default Countdown;