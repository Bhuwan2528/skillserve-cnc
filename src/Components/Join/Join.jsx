import React, { useEffect } from 'react'
import './Join.css'
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";


const Join = () => {

    useEffect(() => {
    AOS.init({
        duration: 1000,
        once: false, // optional
    });
}, []);


  return (
    <div className='join'>

        <svg width="0" height="0">
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ff00b7ff" />
            <stop offset="100%" stop-color="#00a2ffff" />
            </linearGradient>
        </defs>
        </svg>
        

        <h4 data-aos="slide-right" 
          
        data-aos-anchor-placement="top-bottom"
        ><MdStarRate />Join Us</h4>

        <h2 data-aos="slide-left" 
          
        data-aos-anchor-placement="top-bottom"
        >Become Part Of Our Students Community</h2>

        <div data-aos="fade-up" 
          
        data-aos-anchor-placement="top-bottom"
        className="cards">

            <a href='https://www.instagram.com/skill.serve/ '>
            <div className="card">
                <span><AiFillInstagram /></span> 
                <h3>Instagram</h3>
            </div></a>

            <a href='https://www.facebook.com/p/SkillServe-61575759530831/'>
            <div className="card">
                <span><FaFacebookF /></span> 
                <h3>Facebook</h3>
            </div></a>

            <a href='https://www.youtube.com/@skillserve23/featured'><div className="card">
                <span><FaYoutube /></span>
                <h3>Youtube</h3>
            </div></a>

            <a href='https://www.linkedin.com/company/skillserve-in/'><div className="card">
                <span><FaLinkedinIn /></span> 
                <h3>LinkedIn</h3>
            </div></a>

        </div>

    </div>
  )
}

export default Join