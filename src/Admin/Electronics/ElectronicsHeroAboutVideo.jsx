import React, { useState, useEffect } from "react";
import "./AdminForm.css";

const ElectronicsHeroAboutVideo = () => {

const [formData,setFormData]=useState({

  // HERO
  startingPackage:"",
  heroText:"",
  typewriterWords:"",
  heroImg:"",

  // ABOUT
  aboutImg:"",
  aboutHeading:"",
  aboutDescription:"",

  // VIDEO
  videoHeading:"",
  videoDescription:"",
  videoUrls:""

})

  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");


  // ✅ FETCH (FIXED)
  useEffect(() => {

    const fetchData = async () => {

      try {

        const res = await fetch("http://localhost:5000/api/electronics");
        const data = await res.json();

        if (data?.hero) {
          setFormData(prev => ({
            ...prev,
            startingPackage: data.hero.startingPackage || "",
            heroText: data.hero.heroText || "",
            typewriterWords: data.hero.typewriterWords?.join(", ") || "",
            heroImg: data.hero.heroImg || "",
          }));
        }

        if (data?.about) {
          setFormData(prev => ({
            ...prev,
            aboutImg: data.about.aboutImg || "",
            aboutHeading: data.about.heading || "",
            aboutDescription: data.about.description || "",
          }));
        }

        if(data?.video){
          setFormData(prev=>({
            ...prev,
            videoHeading:data.video.heading || "",
            videoDescription:data.video.description || "",
            videoUrls:data.video.videoUrls?.join(", ") || ""
          }))
        }

      } catch (err) {
        console.log(err);
      }

    };

    fetchData();

  }, []);


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


const handleSubmit = async (e) => {

  e.preventDefault();
  setLoading(true);

  try {

    const bodyData = {
      hero: {
        startingPackage: formData.startingPackage,
        heroText: formData.heroText,
        typewriterWords: formData.typewriterWords
          ? formData.typewriterWords.split(",").map(word => word.trim()).filter(Boolean)
          : [],
        heroImg: formData.heroImg,
      },

      about: {
        aboutImg: formData.aboutImg,
        heading: formData.aboutHeading,
        description: formData.aboutDescription,
      },

      video:{
        heading:formData.videoHeading,
        description:formData.videoDescription,
        videoUrls:formData.videoUrls
          ? formData.videoUrls.split(",").map(url=>url.trim()).filter(Boolean)
          : []
      }
    };

    const res = await fetch("http://localhost:5000/api/ev", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(bodyData)
    });

    const data = await res.json();

    if(res.ok){
      alert("Content Saved Successfully");
    }else{
      alert(data.message || "Failed to save content");
    }

    console.log(data);

  } catch (error) {

    console.log(error);

  }

  setLoading(false);
};


  return (
    <div className="admin-container">

      <form className="admin-card" onSubmit={handleSubmit}>

        <h1 className="main-title">
          Fill the Form to Submit Website Content
        </h1>
        <br /><br />

        <h2 className="section-title">Hero Section</h2>

        <div className="input-group">
          <label>First String</label>
          <input
            type="text"
            name="startingPackage"
            value={formData.startingPackage}
            placeholder="India’s First Industry-Integrated Practical Academy"
            onChange={handleChange}
          />
        </div>

        <div className="row">

          <div className="input-group">
            <label>Hero Text</label>
            <input
              type="text"
              name="heroText"
              value={formData.heroText}
              placeholder="Main hero heading text"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Typewriter Words</label>
            <input
              type="text"
              name="typewriterWords"
              value={formData.typewriterWords}
              placeholder="ev Programmer, ev Operator"
              onChange={handleChange}
            />
          </div>

        </div>

        <div className="input-group">
          <label>Hero Image</label>
          <input
            type="text"
            name="heroImg"
            value={formData.heroImg}
            placeholder="Hero Image URL"
            onChange={handleChange}
          />
        </div>

        <br /><br />

        <div className="form-about">
          <h2 className="section-title">About Section</h2>

          {/* ✅ NEW FIELD (model ke according) */}
          <div className="input-group">
            <label>About Image</label>
            <input
              type="text"
              name="aboutImg"
              value={formData.aboutImg}
              placeholder="About Image URL"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Main Heading</label>
            <input
              type="text"
              name="aboutHeading"
              value={formData.aboutHeading}
              placeholder='Learn ev/VMC the Right Way'
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>About Description</label>
            <textarea
              rows="4"
              name="aboutDescription"
              value={formData.aboutDescription}
              placeholder="About Description (HTML Allowed)"
              onChange={handleChange}
            />
          </div>
          
        </div>

        <br /><br />

        <div className="form-video">
          <h2 className="section-title">Video Section</h2>

          <div className="input-group">
            <label>Main Heading</label>
            <input
              type="text"
              name="videoHeading"
              value={formData.videoHeading}
              placeholder="Video Section Heading"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Description</label>
            <textarea
              rows="4"
              name="videoDescription"
              value={formData.videoDescription}
              placeholder="Video Description (HTML Allowed)"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Video URLs</label>
            <textarea
              rows="3"
              name="videoUrls"
              value={formData.videoUrls}
              placeholder="https://site.com/video1.mp4, https://site.com/video2.mp4"
              onChange={handleChange}
            />
          </div>
        </div>

        <button className="submit-btn" disabled={loading}>
          {loading ? "Saving..." : "Save Content"}
        </button>

      </form>

    </div>
  );
};

export default ElectronicsHeroAboutVideo;