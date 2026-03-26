import React, { useEffect } from 'react'
import './Choose.css'
import advance from '../../assets/Advanced.png'
import hands from '../../assets/blog.png'
import individual from '../../assets/indvidual.png'
import AOS from "aos";
import "aos/dist/aos.css";

/* fallback content */

const fallbackChoose = [
  {
    image: "https://media.istockphoto.com/id/1919863292/photo/e-learning-education-internet-lessons-and-online-learning-with-webinars-video-tutorials.jpg?s=612x612&w=0&k=20&c=zWAqp6FGH-zm6b0Os_CssxubtrgKh1MyFeMgelFZbOg=",
    title: "Learn What Companies Actually Hire For",
    description:
      "At SkillServe, every course is designed around real industry requirements, not outdated theory. You learn CNC/VMC operations, programming, machine setup, quality checks, and process control exactly the way companies expect on the shop floor. The focus is simple: build skills that make you employable from day one, not just qualified on paper.",
  },
  {
    image: "https://media.istockphoto.com/id/1294339664/photo/on-the-desk-personal-computer-showing-infrastructure-system-control-on-its-display-in.jpg?s=612x612&w=0&k=20&c=s9ZiRPmFKxRBdRu2EAeh-HI_m7YSVd8TxLzXyJpMoU0=",
    title: "Train on Real Machines, Not Just Theory",
    description:
      "SkillServe is built as an industry-integrated practical academy where learning happens through doing. You work on real CNC/VMC machines, tools, and live projects in fully equipped labs. This hands-on exposure builds confidence, improves problem-solving, and prepares you for real workplace challenges—not just classroom understanding."
  },
  {
    image: "https://t3.ftcdn.net/jpg/02/76/26/88/360_F_276268861_Y4ZHLZuZoXVkrXsjaHkaJn7xbE57dz81.jpg",
    title: "Get Certified, Skilled & Job-Ready Faster",
    description:
      "With NSQF/NCrF-aligned programs, you don’t just gain skills, you earn nationally recognized certifications that add real career value. Combined with strong industry connections, 95% placement track record, and structured career growth support, SkillServe helps you move faster from learning to earning."
  }
];

const Choose = ({ data }) => {

  useEffect(() => {

    const isMobile = window.innerWidth <= 768;

    AOS.init({
      offset: isMobile ? 50 : 300,
      duration: 1000,
      once: false
    });

  }, []);

  /* agar server data nahi hai to fallback use hoga */

  const chooseData = data && data.length ? data : fallbackChoose;

  return (

    <div className='choose'>

      <h4>Why Choose Us</h4>

{chooseData.map((item, index) => (

  <div
    className="choose-card"
    key={index}
    data-aos="fade-up"
    data-aos-delay="200"
    data-aos-anchor-placement="top-bottom"
  >

    <div className="card-left">
      <img src={item.image || individual} alt={item.title || "choose"} />
    </div>

    <div className="card-right">
      <h3>{item.title || "Default Title"}</h3>

      <p
        dangerouslySetInnerHTML={{
          __html: item?.description || "Default description"
        }}
      ></p>

    </div>

  </div>

))}

    </div>
  )
}

export default Choose