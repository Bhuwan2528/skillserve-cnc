import React, { useState } from 'react'
import './Video.css'
import { FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Video = ({ data }) => {

const [popupVideo,setPopupVideo] = useState(null)
const navigate = useNavigate();

const openVideo = (video)=>{
setPopupVideo(video)
}

const closeVideo = ()=>{
setPopupVideo(null)
}


/* fallback content (agar server band ho) */

const defaultVideo = {

heading:"They Started Like You. Now They Are Expert of Shop-Floor!.",

description:`These are real success stories of learners who mastered CNC/VMC, worked on live machines, and stepped confidently into the industry.`,

videoUrls:[
"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",

]

}


const videoData = data || defaultVideo


  return (
    <div className='videoes'>

        <h2>{videoData.heading}</h2>

        <p
        dangerouslySetInnerHTML={{__html:videoData.description}}
        />

        <div className="videoes-container">

{/* DYNAMIC VIDEOS */}

{videoData.videoUrls.slice(0,4).map((video,index)=>(

<div
key={index}
className="video"
onClick={()=>openVideo(video)}
>

<video
src={video}
preload="metadata"
muted
playsInline
/>

<FaPlay className="play-icon"/>

</div>

))}


    <div className="cta-buttons">
      {/* <button onClick={()=>{navigate('/testimonials')}} className="width-auto sq-btn">View All Testimonials</button> */}

      <button 
        onClick={() => window.location.href = "tel:+91 9484794843"} 
        className="width-auto sq-btn"
      >
        Call Now
      </button>

      <button 
        onClick={() => window.open("https://wa.me/91 9484794843", "_blank")} 
        className="width-auto sq-btn"
      >
        Enquire Now
      </button>

    </div>


        

        </div>

{/* VIDEO POPUP */}

{popupVideo && (

<div className="video-popup" onClick={closeVideo}>

<div 
className="video-popup-box"
onClick={(e)=>e.stopPropagation()}
>

<IoClose
className="close-video"
onClick={closeVideo}
/>

<video
src={popupVideo}
controls
autoPlay
/>

</div>

</div>

)}

    </div>
  )
}

export default Video