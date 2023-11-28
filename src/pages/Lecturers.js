
import React from 'react';
import Header from '../components/Hearder';
import '../css/Lecturers.css';
import bg from '../assets/images/header_images/lectures_header_image.jpg';
import TopLectures from '../components/TopLectures';
import ourLecturers from '../assets/images/ugcs_staffs_image1.jpg';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
const Lecturers = () => {
  return (
    <>
      <section className="lecturers">
        <Header title="Lecturers" currentPage="Lecturers" backgroundImage={bg} />
        <div className="lecturers-container">
          <div className="lecturers-content">
            <h3>Our Lecturers</h3>
            <p>
              University of Ghana Computer Science Department 
              has a team of highly qualified and experienced 
              lecturers who are always ready to help students 
              achieve their goals.
            </p>
          </div>
          <img src={ourLecturers} alt="our lecturers" />
        </div>
        <TopLectures />
        <Testimonial />
      </section>
      <Footer />
    </>
  );
};

export default Lecturers;
