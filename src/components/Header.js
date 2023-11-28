import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";



const Header = (props) => {
    const { title, currentPage, backgroundImage } = props;

    return (
        <section className="page-header" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="container">
                    <h2>{title}</h2>
                    <div className="links">
                        <p><NavLink to="/">Home</NavLink></p>
                        <FontAwesomeIcon icon={faAngleDoubleRight} className="pt-1 px-3" />
                        <p><NavLink to={`/${currentPage}`}>{currentPage}</NavLink></p>
                    </div>
                </div>
        </section>
    );
}

export default Header;



