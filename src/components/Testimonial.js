import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "../css/Testimonial.css";
// import students images
import studentImage1 from "../assets/images/student_images/Christian Abrokwa.jpeg";
import studentImage2 from "../assets/images/student_images/Desmond Owusu Ansah.jpg";

// import quotes icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {

    const TestimonialData = [
        {
            imgSrc: studentImage1,
            name: 'Christian Abrokwa',
            role: 'Software Engineer',
            testimonial: 'I am truly impressed with the quality of education and the practical skills I gained from this platform. The instructors are knowledgeable and the courses are well-structured. It has greatly contributed to my success as a software engineer.',
        },
        {
            imgSrc: studentImage2,
            name: 'Desmond Owusu Ansah',
            role: 'Web Developer',
            testimonial: 'Enrolling in these courses was the best decision I made for my career. The hands-on approach to learning and the real-world projects provided a solid foundation for my skills as a web developer. Highly recommended!',
        },
    ];

    const options = {
        0: {
            items: 1,
        },
        450: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        },
    };
    return (
        <section className="testimonials">
        <div className="container">
            <div className="testimonials-content">
            <h3>Testimonials</h3>
            <h4> What Our Students Say</h4>
            </div>
            <OwlCarousel
                className="owl-theme"
                loop
                margin={20}
                items={1}
                nav
                navText={["", ""]}
                autoplay={true}
                dots={true}
                autoplayTimeout={3000}
                responsive={options}
            >
            {TestimonialData.map((testimonial, index) => (
                <div className="item" key={index}>
                    <div className="testimonial">
                        <FontAwesomeIcon
                        icon={faQuoteLeft}
                        className="quote-icon"
                        />
                        <p>{testimonial.testimonial}</p>
                        <div className="testimonial-info">
                        <img src={testimonial.imgSrc} alt={testimonial.name} />
                        <div className="testimonial-name">
                            <h5>{testimonial.name}</h5>
                            <p>{testimonial.role}</p>
                        </div>
                        </div>
                    </div>
                </div>
            ))}
            </OwlCarousel>
        </div>
        </section>
    );
}

export default Testimonial;