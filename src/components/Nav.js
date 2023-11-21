import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav">
            <div className="topnav">
                <div className="logo-container">
                    <NavLink to="/" exact className="nav-link">UGCS</NavLink>
                </div>
                {/* our office */}
                <div className="site-info">
                    <div className="symbol">
                        <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="info">
                        <p>Our Office</p>
                        <p>Legon, Accra, Ghana</p>
                    </div>
                </div>

                {/* email us */}
                <div className="site-info">
                    <div className="symbol">
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div className="info">
                        <p>Email Us</p>
                        <p>info@example.com</p>
                    </div>
                </div>

                {/* call us */}

                <div className="site-info">
                    <div className="symbol">
                        <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="info">
                        <p>Call Us Now</p>
                        <p>+91 1234567890</p>
                    </div>
                </div>
            </div>

            {/* navbar */}
            <div className="navbar">
                <NavLink to="/" exact className="nav-link">Home</NavLink>
                <NavLink to="/about" className="nav-link">About</NavLink>
                <NavLink to="/courses" className="nav-link">Courses</NavLink>
                <NavLink to="/teachers" className="nav-link">Teachers</NavLink>
                <NavLink to="/blog" className="nav-link">Blog</NavLink>
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
                <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
                <NavLink to="/topstudents" className="nav-link">Top Students</NavLink>
                <NavLink to="/announcements" className="nav-link">Announcements</NavLink>
                <NavLink to="/" className="nav-link">Enroll Now</NavLink>
            </div>
        </nav>
    );
}

export default Nav;