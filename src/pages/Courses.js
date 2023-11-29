
import React, { useEffect } from 'react';
import Header from '../components/Header';
import '../css/Courses.css';
import WOW from 'wowjs';
import Footer from '../components/Footer';
import Subjects from '../components/Subjects';
import Course from '../components/Course';
// import header image
import bg from '../assets/images/header_images/courses_header_image.jpeg';

// import subjects images
import CyberSecurity from '../assets/images/subjects_images/Cyber Security.jpg';
import WebProgramming from '../assets/images/subjects_images/Web Dev.png';
import MAD from '../assets/images/subjects_images/Mobile App Dev.jpg';
import CNF from '../assets/images/subjects_images/CCNA.png';

const Courses = () => {

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  const coursesData = [
    {
      imgSrc: CyberSecurity,
      title: 'Cyber Security',
      description: 'Learn the various techniques used to secure a computer system from attacks through hacking.',
      link: '/courses/'
    },
    {
      imgSrc: WebProgramming,
      title: 'Web Programming',
      description: 'Understand the fundamentals of web technologies and create web-based applications with latest technologies.',
      link: '/courses/'
    },
    {
      imgSrc: MAD,
      title: 'Mobile App Development',
      description: 'We provide world class technologies for Mobile Application Development using the mobile-first worklight by IBM.',
      link: '/courses/'
    },
    {
      imgSrc: CNF,
      title: 'Computer Network Fundamental [CCNA]',
      description: 'We provide quality training for students to become a Cisco Certified Network Associate (CCNA).',
      link: '/courses/'
    },
  ]

  return (
    <>
      <section className="courses">
      <Header title="Courses" currentPage="Courses" backgroundImage={bg} />
      <div className="courses-container">
        <div className="courses-content">
          <h3>Our Popular Courses</h3>
          <p>Learn the various techniques used to secure a computer system from attacks through hacking.</p>
        </div>
        <div className="courses-cards">
          {
            coursesData.map((course, index) => {
              return <Course key={index} imgSrc={course.imgSrc} title={course.title} description={course.description} link={course.link} />
            })
          }
        </div>
      </div>
    </section>
    <Subjects />
    <Footer />
    </> 
  );
}

export default Courses;
