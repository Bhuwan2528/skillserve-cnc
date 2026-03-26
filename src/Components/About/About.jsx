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
      "We prepare you with practical skills to succeed and get <span>hired by leading companies</span>",

    description:
      "Our training programs are designed to transform you into a job-ready professional with real-world skills and hands-on experience. You don’t just learn concepts—you apply them through practical sessions, live projects, and industry-relevant scenarios. The training focuses on core technical skills, problem-solving abilities, and understanding real workplace environments. You will gain confidence by working on tasks that simulate actual industry challenges, making you prepared from day one. <br><br> We also integrate modern industry practices such as efficiency techniques, quality standards, and structured workflows to ensure you develop a professional mindset. This approach helps you not only learn faster but also perform better in real job roles. <br><br> If you are looking for practical exposure, strong fundamentals, and real career growth, this is the perfect place to start your journey.",

    buttonText: "Read More"
  };

  const aboutData = data || defaultAbout;

  const shortText = aboutData.description.slice(0, 700);

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

          <img src={cncImg} alt="CNC Machine" className="about-img" />

        </div>

        {/* RIGHT */}
        <div className="about-right">

          <h2
            dangerouslySetInnerHTML={{ __html: aboutData.heading }}
          />

          <p
            dangerouslySetInnerHTML={{
              __html: isExpanded
                ? aboutData.description
                : shortText + "..."
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