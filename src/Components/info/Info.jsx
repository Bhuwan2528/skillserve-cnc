import React from "react";
import { FaCalendarAlt, FaClock, FaCertificate, FaUserTie, FaUsers, FaHandshake, FaAward, FaChalkboardTeacher } from "react-icons/fa";
import "./Info.css";

const data = [
  { icon: <FaCalendarAlt />, title: "Next Batch", subtitle: "Starting soon..." },
  { icon: <FaClock />, title: "Duration", subtitle: "3-11 Months" },
  { icon: <FaCertificate />, title: "Certificates", subtitle: "20+ Certificates" },
  { icon: <FaUserTie />, title: "Placement", subtitle: "100% Support" },
  { icon: <FaUsers />, title: "52,000+", subtitle: "Students Passed" },
  { icon: <FaHandshake />, title: "700+", subtitle: "Placement Partners" },
  { icon: <FaAward />, title: "10+", subtitle: "Years of Trust" },
  { icon: <FaChalkboardTeacher />, title: "100+", subtitle: "Expert Mentors" },
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
