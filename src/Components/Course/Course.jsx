import React, { useEffect, useRef, useState } from "react";
import "./Course.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa6";
import DownloadBrochure from "../DownloadBrochure/DownloadBrochure";

const Course = ({ data, openPopup }) => {

  const containerRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
    AOS.refresh();
  }, []);

  const defaultCourses = [
    {
      image: "https://bfwindia.com/wp-content/uploads/2024/08/process-smoothing-interior-cylinder-scaled.jpg",
      title: "CNC/VMC Operations & Programming",
      points: [
        "CNC Machine Operation",
        "VMC Programming (G-Code / M-Code)",
        "Tool Setup & Calibration",
        "Precision Machining Skills",
        "Shop-floor Safety Practices"
      ]
    },
    {
      image: "https://truckcdn.cardekho.com/in/mahindra/udo/mahindra-udo-32200.jpg",
      title: "Electric Vehicle; 02, 03 & 04 Wheeler",
      points: [
        "EV System Fundamentals",
        "Battery & Charging Systems",
        "EV Maintenance & Repair",
        "Controller & Motor Basics",
        "Diagnostics & Troubleshooting"
      ]
    },
    {
      image: "https://etimg.etb2bimg.com/photo/116799139.cms",
      title: "Industrial Automation (PLC, Robotics & IIOT)",
      points: [
        "PLC Programming Basics",
        "Industrial Robotics Handling",
        "Sensors & Control Systems",
        "IIOT Integration Concepts",
        "Automation Troubleshooting"
      ]
    },
    {
      image: "https://caddcentre.com/blog/wp-content/uploads/2024/07/The-Impact-of-3D-Printing-on-Manufacturing-and-Design-Industries-1920x1080.jpg",
      title: "Design and Development (CAD, CAM & 3D Printing)",
      points: [
        "AutoCAD & NX Software",
        "3D Modeling & Drafting",
        "CAM Programming Basics",
        "Product Design Fundamentals",
        "3D Printing Techniques"
      ]
    },
    {
      image: "https://img.freepik.com/free-photo/robotic-arm-placing-chip-circuit-board_23-2152011751.jpg?semt=ais_hybrid&w=740&q=80",
      title: "Electronics Systems Design and Robotronics",
      points: [
        "Circuit Design & Analysis",
        "Embedded Systems Basics",
        "Robotics Fundamentals",
        "PCB Design Introduction",
        "Semiconductor Basics"
      ]
    },
    {
      image: "https://dm-2.vercel.app/assets/digital-COzj8Waf.webp",
      title: "Digital Marketing with Artificial Intelligence",
      points: [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing",
        "Pay Per Click (PPC) Ads",
        "Content Marketing Strategy",
        "AI Marketing Tools"
      ]
    },
  ];

  const courseData = data?.courses || defaultCourses;

  return (
    <div className="courses">

      <h2 data-aos="">Our Courses</h2>

      <div className="course-container" ref={containerRef}>

        {courseData.map((course, index) => (

          <div className="course" key={index}>

            <span><p>{index + 1}</p></span>

            <img src={course.image} alt="" />

            <h3>{course.title}</h3>

            <ul>
              {course.points.map((point, i) => (
                <li key={i}>
                  <FaArrowRight /> {point}
                </li>
              ))}
            </ul>

            <div className="button-container">

              <button className="btn course-btn" onClick={openPopup}>
                Apply Now
              </button>

              <button
                className="btn course-btn"
                onClick={() => setShowPopup(true)}
              >
                Download Brochure
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* POPUP COMPONENT */}
      {showPopup && (
        <DownloadBrochure onClose={() => setShowPopup(false)} />
      )}

    </div>
  );
};

export default Course;