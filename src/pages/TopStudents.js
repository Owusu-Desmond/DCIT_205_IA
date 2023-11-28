import Header from "../components/Header";
import bg from "../assets/images/header_images/top-students-header.jpg";
import StudentCard from "../components/Student_card";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../css/TopStudents.css";

// student images
import studentImage1 from "../assets/images/top_students/Abigirl Agyemang.jpg";
import studentImage2 from "../assets/images/top_students/Cindy Akwabeng.jpg";
import studentImage3 from "../assets/images/top_students/Kumi Francis.jpeg";
import studentImage4 from "../assets/images/top_students/Maxwel Sarpong.jpg";
import studentImage5 from "../assets/images/top_students/Yakubu Frank.jpg";
import studentImage6 from "../assets/images/top_students/Tracy Yeboah.webp";
import Footer from "../components/Footer";

const TopStudents = () => {

    const TopStudentsData = [
        {
            imgSrc: studentImage1,
            name: 'Abigirl Agyemang',
            role: 'Software Engineer',
            testimonial: "I'm a level 400 student at the University of Ghana studying Computer Science. I'm a software engineer and a web developer. I'm also a graphic designer and a UI/UX designer. I'm a very hardworking person and I'm always ready to learn new things.",
        },
        {
            imgSrc: studentImage2,
            name: 'Cindy Akwabeng',
            role: 'Web Developer',
            testimonial: 'I am a level 300 student at the University of Ghana studying Computer Science. I am a web developer and a software engineer. I am also a graphic designer and a UI/UX designer. I am a very hardworking person and I am always ready to learn new things.',
        },
        {
            imgSrc: studentImage3,
            name: 'Kumi Francis',
            role: 'Mobile Developer',
            testimonial: 'I am a level 200 student at the University of Ghana studying Computer Science. I am a mobile developer and a software engineer. I am also a graphic designer and a UI/UX designer. I am a very hardworking person and I am always ready to learn new things.',
        },
        {
            imgSrc: studentImage4,
            name: 'Maxwel Sarpong',
            role: 'Web Developer',
            testimonial: 'I am a level 400 student at the University of Ghana studying Computer Science. I am a web developer and a software engineer. I am also a graphic designer and a UI/UX designer. I am a very hardworking person and I am always ready to learn new things.',
        },
        {
            imgSrc: studentImage5,
            name: 'Yakubu Frank',
            role: 'Software Engineer',
            testimonial: 'I am a level 400 student at the University of Ghana studying Computer Science. I am a software engineer and a web developer. I am also a graphic designer and a UI/UX designer. I am a very hardworking person and I am always ready to learn new things.',
        },
        {
            imgSrc: studentImage6,
            name: 'Tracy Yeboah',
            role: 'Web Developer',
            testimonial: 'I am a level 400 student at the University of Ghana studying Computer Science. I am a web developer and a software engineer. I am also a graphic designer and a UI/UX designer. I am a very hardworking person and I am always ready to learn new things.',
        }
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
        <>
            <Header title="Top Students" currentPage="Top Students" backgroundImage={bg} />
            <section className="top-students">
                <div className="container">
                    <div className="top-students-content">
                        <h3>Our Top Students</h3>
                        <p>
                            Students who have excelled in their academic work and have been awarded for their hard work.
                        </p>
                    </div>
                    <OwlCarousel 
                        className="owl-theme" 
                        loop 
                        margin={10} 
                        navText={["", ""]}
                        nav
                        autoplay={true}
                    >
                        {TopStudentsData.map((student, index) => (
                            <StudentCard student={student} key={index} />
                        ))}
                    </OwlCarousel>
                </div>
            </section>
            <Footer />
        </>
    );
    }

export default TopStudents;