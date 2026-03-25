import React, { useEffect } from 'react'
import './About.css'
import round from '../../assets/rounded-obj.png'
import { TiStar } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRightLong } from "react-icons/fa6";
import rahish from '../../assets/rahish.jpg'


const About = ({ data, openPopup }) => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);

  // fallback content (agar server band ho)
  const defaultAbout = {
    heading:
      "Our comprehensive and advanced curriculum helps you to get <span>Placed in Big Companies</span>",

    description:
      "Our comprehensive and advanced curriculum is designed to help you secure placements in top companies. SkillServe Academy focuses on practical, job-ready training through a blended learning approach that combines classroom sessions, digital tools, and hands-on experience in industry-simulated environments. </br> </br>   Aligned with Industry 4.0, LEAN, QMS, and the National Credit Framework (NCrF), our programs ensure real-world readiness while offering recognized, transferable credits—bridging the gap between learning and employment.",

    buttonText: "Read More",
    buttonLink: "#"
  };

  const aboutData = data || defaultAbout;


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

        <div className="about-left">

          <span className='about-container'>
            <span className='icon'><TiStar /></span> About Us
          </span>

          <img src={round} alt="" />
        </div>


        <div className="about-right">

          <h2
            data-aos="fade-up"
            dangerouslySetInnerHTML={{ __html: aboutData.heading }}
          />

          <p
            dangerouslySetInnerHTML={{ __html: aboutData.description }}
          />

            <button
              data-aos=""
              className='btn'
              onClick={openPopup}
            >

              <span>{aboutData.buttonText}</span>

              <FaArrowRightLong className='btn-icon' />

            </button>

          

        </div>

      </div>
    </>
  )
}

export default About