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
import Video from '../Video/Video';

import PopupForm from "../../Components/PopupForm/PopupForm";
import CNCModules from '../Modules/CNCModules';


const Header = ({ pageData }) => {

    const [sticky, setSticky] = useState(false);
    const [showPopup,setShowPopup] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    const openPopup = () => setShowPopup(true);
    const closePopup = () => setShowPopup(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
            setShowScrollTop(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className='header'>

            {showPopup && <PopupForm closePopup={closePopup} />}

            <div className={`navbar ${sticky ? 'sticky-nav' : 'sticky-nav'}`}>
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
            <a href="https://wa.me/919484794843" target="_blank" rel="noopener noreferrer">
                <span className="bottom-left-element bottom-element">
                    <SiWhatsapp />
                </span>
            </a>

            <a href="tel:+919484794843">
                <span className="bottom-right-element bottom-element">
                    <MdCall />
                </span>
            </a>

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
            <Stats />
            {pageData?.countdown?.isActive && (
                <Counter 
                    openPopup={openPopup} 
                    data={pageData?.countdown}
                />
            )}
            <Placement/>
            <Video data={pageData?.video}/>
            <Join/>
            <Choose data={pageData?.choose}/>
            <Footer data={pageData?.footer}/>

        </div>
    )
}

export default Header;