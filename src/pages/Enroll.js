import { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import '../css/Enroll.css'
import Footer from "../components/Footer"
import WOW from "wowjs"

import bg from '../assets/images/header_images/about_header_image.jpg';

const   Enroll = () => {

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])

    return (
        <>
            <section className="registration-container" style={{ background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bg})` }}>
                <div className="registration-content wow fadeInLeft">
                    <div className="registration-info">
                        <h3>Need Any Courses</h3>
                        <h1>30% Off For New Students</h1>
                        <p>
                            We provide world class technologies for 
                            Mobile Application Development using the mobile-first worklight by IBM.
                        </p>
                        <ul className="registration-list">
                            <li><FontAwesomeIcon icon={faCheck} />Collaboratively administrate empowered markets via plug-and-play networks.</li>
                            <li><FontAwesomeIcon icon={faCheck} />Dynamically procrastinate B2C users after installed base benefits.</li>
                            <li><FontAwesomeIcon icon={faCheck} />Dramatically visualize customer directed convergence without revolutionary ROI.</li>
                        </ul>
                    </div>
                    <div className="registration-form wow fadeInRight">
                        <div className="registration-card">
                            <div className="registration-card-header">
                                <h1>Sign Up Now</h1>
                            </div>
                            <div className="registration-card-body">
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your name" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Your email" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <select className="custom-select" style={{ height: "47px" }}>
                                            <option selected>Select a course</option>
                                            <option value="1">Course 1</option>
                                            <option value="2">Course 1</option>
                                            <option value="3">Course 1</option>
                                        </select>
                                    </div>
                                    <div>
                                        <button type="submit">Sign Up Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Enroll

