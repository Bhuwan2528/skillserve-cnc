import React from 'react';
import './Placement.css';

// Importing 24 partner logos
import p1 from '../../assets/p1.png';
import p2 from '../../assets/p2.webp';
import p3 from '../../assets/p3.png';
import p4 from '../../assets/p4.png';
import p5 from '../../assets/p5.png';
import p6 from '../../assets/p6.png';
const slider1 = [p1, p2, p3, p4, p5, p6];

export default function Placement() {
  return (
    <div className="placement-partners">

        <h2>Our Placement Partners</h2> 

      {/* First Slider */}
      <div className="slider slider-left-to-right">
        <div className="slide-track">
          {slider1.concat(slider1).map((img, index) => (
            <div className="slide" key={index}>
              <div className="img-box">
                <img src={img} alt={`partner-${index}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
