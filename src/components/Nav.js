import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import comScience_logo from '../assets/images/comScience_logo.png';

const Nav = () => {
    return (
        <nav className="nav">
            <div className="topnav">
                <div className="logo-container">
                    <NavLink to="/" className="nav-link">
                        <img className="logo" src={comScience_logo} alt="logo" />
                    </NavLink>
                </div>
                {/* our office */}
                <div className="site-info">
                    <div className="symbol">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>
                    <div className="info">
                        <p>Our Office</p>
                        <p>Legon, Accra, Ghana</p>
                    </div>
                </div>

                {/* email us */}
                <div className="site-info">
                    <div className="symbol">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="info">
                        <p>Email Us</p>
                        <p>dcs@ug.edu.gh</p>
                    </div>
                </div>

                {/* call us */}

                <div className="site-info">
                    <div className="symbol">
                       <FontAwesomeIcon icon={faPhoneAlt} />
                    </div>
                    <div className="info">
                        <p>Call Us Now</p>
                        <p>+91 1234567890</p>
                    </div>
                </div>
            </div>

            {/* navbar */}
            <div className="navbar">
                <div>
                    <NavLink to="/" exact className="nav-link">Home</NavLink>
                    <NavLink to="/about" className="nav-link">About</NavLink>
                    <NavLink to="/courses" className="nav-link">Courses</NavLink>
                    <NavLink to="/lectures" className="nav-link">Lectures</NavLink>
                    <NavLink to="/blog" className="nav-link">Blog</NavLink>
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                    <NavLink to="/events" className="nav-link">Events</NavLink>
                    <NavLink to="/topstudents" className="nav-link">Top Students</NavLink>
                    <NavLink to="/announcements" className="nav-link">Announcements</NavLink>
                </div>
                <div className="enroll">
                    <NavLink to="/enroll" className="nav-link">Enroll Now</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Nav;