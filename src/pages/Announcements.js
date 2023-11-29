import Footer from "../components/Footer";
import Header from "../components/Header";
import bg from "../assets/images/header_images/announcement_header.png";

import '../css/Announcements.css';

const Announcements = () => {
    
    return (
        <>
            <Header title="Announcements" currentPage="Announcements" backgroundImage={bg} />
                <section className="announcements">
                    <div className="container">
                        <div className="announcements-content">
                            <h3>Announcements</h3>

                            <div className="announcements-cards">
                                <p>There are no announcements at the moment.</p>
                            </div>
                        </div>
                    
                    </div>

                </section>

            <Footer />
        
        </>
    );
    }


export default Announcements;