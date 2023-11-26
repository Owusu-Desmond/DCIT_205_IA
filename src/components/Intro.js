import introImg from '../assets/images/about_us_intro_image.jpg';
import { NavLink } from 'react-router-dom';
import WOW from 'wowjs';
import React, { useEffect } from 'react';

const Intro = () => {

    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
    }
    , []);

    return (
        <>
        <div class="intro-header">
            <div class="line"></div>
            <h1>About Us</h1>
            <div class="line"></div>
        </div>
        <div class="intro-container">
            <div class="into-image-container">
                <img className='wow slideInLeft' src={introImg} alt="about us" />
            </div>
            <div className='wow slideInRight'>
                <div>
                    <h3>The Department of Computer Science (DCS) University of Chana</h3>
                </div>
                <p>
                    This is the Information Technology age and at its core is Computer Science. 
                    The study of computer science is therefore critical if society is to take full 
                    advantage of the benefits Information Technology has to offer and make rapid 
                    economic advances. Computer science involves the study and development of 
                    applications that allow for our everyday use of computers, the software systems 
                    that support these applications, and the means and methods used to produce both 
                    applications and systems that behave reliably, correctly and ethically
                </p>
                <NavLink to="/about" className="more-aboutUs-btn">Read More</NavLink>
            </div>
        </div>
        </>

    );
}

export default Intro;