import WOW from 'wowjs';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// import subjects images
import cat1 from '../assets/images/subjects_images/cat-1.jpg';
import cat2 from '../assets/images/subjects_images/cat-2.jpg';
import cat3 from '../assets/images/subjects_images/cat-3.jpg';
import cat4 from '../assets/images/subjects_images/cat-4.jpg';
import cat5 from '../assets/images/subjects_images/cat-5.jpg';
import cat6 from '../assets/images/subjects_images/cat-6.jpg';
import cat7 from '../assets/images/subjects_images/cat-7.jpg';
import cat8 from '../assets/images/subjects_images/cat-8.jpg';


const Subjects = () => {

    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
    }, []);
    

    const subjectsData = [
        {
          imgSrc: cat1,
          title: 'Web Design',
          courses: 7,
          link: '/courses/'
        },
        {
          imgSrc: cat2,
          title: 'Development',
          courses: 6,
          link: '/courses/'
        },
        {
          imgSrc: cat3,
          title: 'Game Design',
          courses: 8,
          link: '/courses/'
        },
        {
          imgSrc: cat4,
          title: 'Apps Design',
          courses: 10,
          link: '/courses/'
        },
        {
          imgSrc: cat5,
          title: 'Marketing',
          courses: 3,
          link: '/courses/'
        },
        {
          imgSrc: cat6,
          title: 'Research',
          courses: 4,
          link: '/courses/'
        },
        {
          imgSrc: cat7,
          title: 'Content Writing',
          courses: 2,
          link: '/courses/'
        },
        {
          imgSrc: cat8,
          title: 'SEO',
          courses: 3,
          link: '/courses/'
        }
      ];

      
    return (
        <div>
            <div className="subjects-header">
                <h3>Subjects</h3>
                <h4>Explore Top Subjects</h4>
            </div>
            <div className="subjects-container">
                {subjectsData.map((subject, index) => (
                    <div className="subject-card wow fadeInUp" data-wow-duration="1s" data-wow-delay={`${index / 10}s`} key={index}>
                        <div className="subject-img-container">
                            <img src={subject.imgSrc} alt={subject.title} />
                        </div>
                        <div className="subject-card-content">
                            <h3>{subject.title}</h3>
                            <p>{subject.courses} Courses</p>
                            <NavLink to={subject.link} className="subject-card-btn">View Courses</NavLink>
                        </div>
                    </div>
                ))}
            </div>
            <NavLink to="/courses" className="view-all-courses-btn wow zoomIn" data-wow-duration="1s" data-wow-delay="0.5s">View All Courses</NavLink>
        </div>
    )

}

export default Subjects;