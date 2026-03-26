import React from "react";
import { FaCalendarAlt, FaClock, FaCertificate, FaUserTie, FaUsers, FaHandshake, FaAward, FaChalkboardTeacher, FaBed  } from "react-icons/fa";
import "./Info.css";

const data = [
  { icon: <FaCalendarAlt />, title: "Next Batch", subtitle: "April 2026" },
  { icon: <FaClock />, title: "Duration", subtitle: "Avg. 2 Months" },
  { icon: <FaCertificate />, title: "Digilocker Certificate", subtitle: "NSQF Certificate (Verified)" },
  { icon: <FaUserTie />, title: "Placement", subtitle: "100% Support" },
  { icon: <FaUsers />, title: "55,000+", subtitle: "Students Passed" },
  { icon: <FaHandshake />, title: "250+", subtitle: "Placement Partners" },
  { icon: <FaBed  />, title: "Free", subtitle: "Accomodation & Food" },
  { icon: <FaChalkboardTeacher />, title: "50+", subtitle: "Expert Mentors" },
];

const Info = () => {
  return (
    <div className="info-section">
      {data.map((item, index) => (
        <div className="info-card" key={index}>
          <div className="icon">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default Info;
