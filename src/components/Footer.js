import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

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
                            <a href="mailto:info@example.com">
                                info@example.com
                            </a>
                        </p>
                        <div className="footer-social">
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        </div>
                    </div>
                    <div className="footer-column">
                        <h4 className="footer-header">Our Courses</h4>
                        <div className="footer-links">
                            <a className="footer-link" href="#">
                                <FontAwesomeIcon icon={faAngleRight} />
                                 Web Design
                            </a>
                            <a className="footer-link" href="#">
                                <FontAwesomeIcon icon={faAngleRight} />
                                 Web Development
                            </a>
                            <a className="footer-link" href="#">
                                <FontAwesomeIcon icon={faAngleRight} />
                                 Apps Design
                            </a>
                            <a className="footer-link" href="#">
                                <FontAwesomeIcon icon={faAngleRight} />
                                 Marketing
                            </a>
                            <a className="footer-link" href="#">
                                <FontAwesomeIcon icon={faAngleRight} />
                                 Research
                            </a>
                            <a className="footer-link" href="#">
                                <FontAwesomeIcon icon={faAngleRight} />
                                 SEO
                            </a>
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
                <p className="footer-text">&copy; <a href="#">UGCS</a>. All Rights Reserved. Designed by <a href="https://htmlcodex.com">DESMOND OWUSU ANSAH</a>
                </p>
                <ul className="footer-nav">
                    <li className="footer-nav-item">
                        <a className="footer-nav-link" href="#">Privacy</a>
                    </li>
                    <li className="footer-nav-item">
                        <a className="footer-nav-link" href="#">Terms</a>
                    </li>
                    <li className="footer-nav-item">
                        <a className="footer-nav-link" href="#">FAQs</a>
                    </li>
                    <li className="footer-nav-item">
                        <a className="footer-nav-link" href="#">Help</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;