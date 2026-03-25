import { useEffect, useState } from 'react';
import './Header.css'
import logo from '../../assets/logo.png';
import { SiWhatsapp } from "react-icons/si";
import { MdCall } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";

import Hero from '../../Components/Hero/Hero'
import About from '../../Components/About/About'
import Course from '../../Components/Course/Course'
import Stats from '../../Components/Stats/Stats'
import Join from '../../Components/Join/Join'
import Footer from '../../Components/Footer/Footer'
import Choose from '../../Components/Choose/Choose'
import Placement from '../Placement/Placement';
import Counter from '../Counter/Counter';
import Bottom from '../Bottom/Bottom';
import Trainners from '../Trainners/Trainners';
import Video from '../Video/Video';

import PopupForm from "../../Components/PopupForm/PopupForm";
import CNCModules from '../Modules/CNCModules';


const Header = () => {

    const [sticky, setSticky] = useState(false);
    const [pageData, setPageData] = useState(null);
    const [showPopup,setShowPopup] = useState(false);

    // 🔥 NEW STATE
    const [showScrollTop, setShowScrollTop] = useState(false);

    const openPopup = () => setShowPopup(true);
    const closePopup = () => setShowPopup(false);

    // 🔥 SCROLL HANDLER (MERGED)
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
            setShowScrollTop(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 🔥 SCROLL TO TOP FUNCTION
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    // 🔥 API FETCH
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/entries");

                if (!res.ok) throw new Error("API failed");

                const data = await res.json();
                console.log("API DATA 👉", data);

                setPageData(data);

            } catch (err) {
                console.log("FETCH ERROR 👉", err);
            }
        };

        fetchData();
    }, []);


  return (
    <div className='header'>

        {/* POPUP */}
        {showPopup && <PopupForm closePopup={closePopup} />}

        {/* NAVBAR */}
        <div className={`navbar ${sticky ? 'sticky-nav' : ''}`}>
            <img src={logo} alt="logo" />

            <div className="side-elements">
                <button className='btn' onClick={openPopup}>
                    Apply Now
                    <span className='btn-icon'>
                        <FaArrowRightLong />
                    </span>
                </button>
            </div>
        </div>

        {/* FLOATING BUTTONS */}
        <a
            href="https://wa.me/918684031003" 
            target="_blank"
            rel="noopener noreferrer"
        >
            <span className="bottom-left-element bottom-element">
                <SiWhatsapp />
            </span>
        </a>

        <a href="tel:+918684031003" >
            <span className="bottom-right-element bottom-element">
                <MdCall />
            </span>
        </a>

        {/* 🔥 SCROLL TO TOP BUTTON */}
        {showScrollTop && (
            <span className="scroll-top-btn" onClick={scrollToTop}>
                <FaArrowUp />
            </span>
        )}

        {/* CHILD COMPONENTS */}
        <Hero data={pageData?.hero} openPopup={openPopup} />
        <About openPopup={openPopup} data={pageData?.about}/>
        <Bottom/>
        <CNCModules/>
        {/* <Course openPopup={openPopup} data={pageData}/> */}
        <Stats />
        <Counter openPopup={openPopup}/>
        <Placement/>
        {/* <Trainners data={pageData?.trainers} openPopup={openPopup} /> */}
        <Video data={pageData?.video}/>
        <Join/>
        <Choose data={pageData?.choose}/>
        <Footer data={pageData?.footer}/>

    </div>
  )
}

export default Header;