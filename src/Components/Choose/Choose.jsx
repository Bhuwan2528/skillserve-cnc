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
    title: "Industry-Focused Learning",
    description:
      "Our courses are built around real industry needs, blending core concepts with practical implementation. Designed by experts, the curriculum ensures you stay updated with modern tools, technologies, and best practices. <br> <br> Through hands-on sessions, live projects, and real-world scenarios, we help you develop the skills and confidence required to succeed and grow in a competitive professional environment.",
  },
  {
    image: "https://media.istockphoto.com/id/1909556003/photo/power-soft-skills-multi-skills-responsibility-hr-human-resources-concept-personal-attribute.jpg?s=612x612&w=0&k=20&c=rDlEMiMFgF61U87D0KY1lylkebfA6F1kbYX6ZPUpmaY=",
    title: "Practical Skill Development",
    description:
      "Develop industry-relevant skills through live projects, case studies, and guided practical sessions. <br> <br> Our approach focuses on applying knowledge in real situations, helping you build confidence, enhance problem-solving abilities, and gain the experience needed to succeed in a professional environment."
  },
  {
    image: "https://img.freepik.com/free-photo/medium-shot-people-learning_23-2149300715.jpg?semt=ais_hybrid&w=740&q=80",
    title: "Personalized Mentorship",
    description:
      "Receive dedicated one-on-one guidance tailored to your learning needs and career goals. Our mentors work closely with you, providing continuous support, feedback, and direction at every stage of your journey. <br> <br> From clearing doubts to offering career insights, we ensure you always have the right guidance. This personalized approach helps build confidence, strengthen your skills, and prepare you for real academic and professional challenges."
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