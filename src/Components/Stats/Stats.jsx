import React, { useEffect } from 'react'
import './Stats.css'
import CountUp from 'react-countup'
import { GiLaurelsTrophy } from "react-icons/gi";
import { FaRegSmile, FaStar  } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { IoPeopleSharp } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";


const Stats = () => {

    useEffect(() => {
        const isMobile = window.innerWidth <= 768;
    AOS.init({
        offset: isMobile ? 50 : 300,
        duration: 1000,
        once: false, // optional
    });
}, []);


  return (
    <div className='stats'>

        <div data-aos="slide-up" 
        data-aos-delay="100" 
        data-aos-anchor-placement="top-bottom"
        className="stats-card">

            <div className="card-top">
                <div className="card-left">
                    <span><IoPeopleSharp /></span>
                </div>
                <div className="card-right">
                    <h3><CountUp start={0} end={55000} duration={3} enableScrollSpy scrollSpyDelay={200}  />+</h3>
                </div>
            </div>
                    <p>Students Placed</p>

        </div>

        <div data-aos="slide-up" 
        data-aos-delay="200" 
        data-aos-anchor-placement="top-bottom"
        className="stats-card">

            <div className="card-top">
                <div className="card-left">
                    <span><SiGoogleanalytics /></span>
                </div>
                <div className="card-right">
                    <h3>3-6 LPA</h3>
                </div>
            </div>
            <p>Highest Package</p>

        </div>

        <div data-aos="slide-up" 
        data-aos-delay="300" 
        data-aos-anchor-placement="top-bottom"
        className="stats-card">

            <div className="card-top">
                <div className="card-left">
                    <span><GiLaurelsTrophy/></span>
                </div>
                <div className="card-right">
                    <h3><CountUp start={0} end={250} duration={2} enableScrollSpy scrollSpyDelay={200}  />+</h3>
                </div>
            </div>
            <p>Placement Partner</p>

        </div>

        <div data-aos="fade-up" 
        data-aos-delay="400" 
        data-aos-anchor-placement="top-bottom"
        className="stats-card">
            <div className="card-top">
                <div className="card-left">
                    <span><FaStar /></span>
                </div>
                <div className="card-right">
                    <h3>4.8/5</h3>
                </div>
            </div>
                    <p>Customer Rating</p>
        </div>

    </div>
  )
}

export default Stats