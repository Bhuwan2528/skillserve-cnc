import React from 'react'
import './Hero.css'
import hero from '../../assets/cnc-banner.png'
import { Typewriter } from 'react-simple-typewriter'
import { FaShieldAlt } from "react-icons/fa"

const Hero = ({ data }) => {

  function decodeHTML(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

  const startingPackage = data?.startingPackage || "India’s First Industry-Integrated Practical Academy"

  const heroText =
    data?.heroText ||
    "2 Months CNC/VMC Operations & Programming Course to make you an Expert"

  const typewriterWords =
    data?.typewriterWords || [
      "CNC Programmer"
    ]

  const placementText =
    data?.placementText ||
    'कोर्स पूरा होने के बाद <span>15 दिनों</span> के अंदर कंपनी द्वारा <span> प्लेसमेंट</span> – वरना <span class="fees">100% फीस वापसी!</span>'

  const heroImg =
    data?.heroImg || hero

  return (
    <div className="hero">

      <div className="btn">
        <h4 dangerouslySetInnerHTML={{ __html: startingPackage }} />
      </div>

      <h2 className='hero-text'>
        {heroText}{" "}
        <span>
          <Typewriter
            words={typewriterWords}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={80}
            deleteSpeed={80}
            delaySpeed={1500}
          />
        </span>
      </h2>

      {/* <div className="placement-box">
        <FaShieldAlt className="shield-icon"/>
        <p dangerouslySetInnerHTML={{ __html: placementText }} />
      </div> */}

      <img src={heroImg || hero} alt="hero"/>

    </div>
  )
}

export default Hero