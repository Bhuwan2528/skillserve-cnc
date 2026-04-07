import React, { useEffect, useState } from 'react'
import './About.css'
import cncImg from '../../assets/cnc.jpg'
import { TiStar } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRightLong } from "react-icons/fa6";

const About = ({ data }) => {

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);

  // fallback content
  const defaultAbout = {
    heading:
      "Learn CNC/VMC the Right Way: <span> Live Machines, Real Projects, Real Jobs </span>",

    description:
      "Our CNC/VMC Operations & Programming course is designed to transform you into a truly job-ready professional. You don’t just learn—you earn a recognized NSQF Level certification (Digilocker Verified) while working on live machines and executing real industry projects. The training covers everything that actually matters on the shop floor, including machine operation, job setting & tooling, basic program reading, and essential safety & quality checks. As you progress, you gain hands-on expertise in machine setup, CNC/VMC operations, program editing, and process control—skills that industries actively look for. What makes this course stand out is its strong integration of best manufacturing practices like Lean, 5S, and Kaizen, helping you think beyond machines and work with efficiency, precision, and continuous improvement mindset. If you want real skills, real exposure, and real career growth—this is the place to start.",
  };

  const aboutData = data || defaultAbout;

  console.log(aboutData.aboutImg)

  return (
    <>

      <svg width="0" height="0">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(255, 187, 0)" />
            <stop offset="100%" stopColor="rgb(255, 60, 0)" />
          </linearGradient>
        </defs>
      </svg>

      <div className='about'>

        {/* LEFT */}
        <div className="about-left">

          <span className='about-container'>
            <span className='icon'><TiStar /></span> About Us
          </span>

          <img src={aboutData.aboutImg || cncImg} alt="CNC Machine" className="about-img" />

        </div>

        {/* RIGHT */}
        <div className="about-right">

          <h2
            dangerouslySetInnerHTML={{ __html: aboutData.heading }}
          />

          <p
            dangerouslySetInnerHTML={{
              __html:aboutData.description
            }}
          />

          {/* <button
            className='btn'
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span>{isExpanded ? "Show Less" : aboutData.buttonText}</span>
            <FaArrowRightLong className='btn-icon' />
          </button> */}

        </div>

      </div>
    </>
  )
}

export default About