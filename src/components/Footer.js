import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-row">
                    <div className="footer-column">
                        <h4 className="footer-header">Get In Touch</h4>
                        <p className="footer-text"><FontAwesomeIcon icon={faMapMarkerAlt} /> Leoon, Accra, Ghana</p>
                        <p className="footer-text"><FontAwesomeIcon icon={faPhoneAlt} /> +012 345 67890</p>
                        <p className="footer-text"><FontAwesomeIcon icon={faEnvelope} />
                            <a href="mailto:dcs@ug.edu.gh">
                                dcs@ug.edu.gh
                            </a>
                        </p>
                        <div className="footer-social">
                            <Link to="/#"> <FontAwesomeIcon icon={faFacebookF} /></Link>
                            <Link to="/#"><FontAwesomeIcon icon={faTwitter} /></Link>
                            <Link to="/#"><FontAwesomeIcon icon={faLinkedin} /></Link>
                            <Link to="/#"><FontAwesomeIcon icon={faInstagram} /></Link>
                        </div>
                    </div>
                    <div className="footer-column">
                        <h4 className="footer-header">Our Courses</h4>
                        <div className="footer-links">
                            <Link className="footer-link" to="/courses">
                                <FontAwesomeIcon icon={faAngleRight} />
                                 Web Design
                            </Link>
                            <Link className="footer-link" to="/courses">
                                <FontAwesomeIcon icon={faAngleRight} />
                                 Web Development
                            </Link>
                            <Link className="footer-link" to="/courses">
                                <FontAwesomeIcon icon={faAngleRight} />
                                 Apps Design
                            </Link>
                            <Link className="footer-link" to="/courses">
                                <FontAwesomeIcon icon={faAngleRight} />
                                 Marketing
                            </Link>
                            <Link className="footer-link" to="/courses">
                                <FontAwesomeIcon icon={faAngleRight} />
                                 Research
                            </Link>
                            <Link className="footer-link" to="/courses">
                                <FontAwesomeIcon icon={faAngleRight} />
                                 SEO
                            </Link>
                        </div>
                    </div>
                    <div className="footer-column">
                        <h4 className="footer-header">Newsletter</h4>
                        <p className="footer-text">Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor duo eirmod sea justo no lorem est diam</p>
                        <div className="footer-input-group">
                            <input type="text" className="footer-input" placeholder="Your Email Address" />
                            <button className="footer-btn">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="footer-text">&copy; <a href="/#">UGCS</a>. All Rights Reserved. Designed by <a href="https://github.com/Owusu-Desmond">DESMOND OWUSU ANSAH</a>
                </p>
                <ul className="footer-nav">
                    <li className="footer-nav-item">
                        <a className="footer-nav-link" href="/#">Privacy</a>
                    </li>
                    <li className="footer-nav-item">
                        <a className="footer-nav-link" href="/#">Terms</a>
                    </li>
                    <li className="footer-nav-item">
                        <a className="footer-nav-link" href="/#">FAQs</a>
                    </li>
                    <li className="footer-nav-item">
                        <a className="footer-nav-link" href="/#">Help</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;