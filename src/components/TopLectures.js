import WOW from 'wowjs';
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import teachers images

import soliMicheal from '../assets/images/teachers_images/soli_micheal.jpeg';
import markAttah from '../assets/images/teachers_images/mark-attah.jpeg';
import kofiSarpong from '../assets/images/teachers_images/kofi-sarpong.jpeg';
import aziz from '../assets/images/teachers_images/aziz.jpeg';

const TopLectures = () => {

    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
    }, []);

    const teamData = [
        {
          imgSrc: soliMicheal,
          name: 'Soli Micheal',
          role: 'Software Engineer',
          socialLinks: [
            { platform: 'Twitter', link: '#', icon: faTwitter },
            { platform: 'Facebook', link: '#', icon: faFacebookF },
            { platform: 'LinkedIn', link: '#', icon: faLinkedin }
          ]
        },
        {
          imgSrc: markAttah,
          name: 'Mark Attah',
          role: 'Software Developer',
          socialLinks: [
            { platform: 'Twitter', link: '#', icon: faTwitter },
            { platform: 'Facebook', link: '#', icon: faFacebookF },
            { platform: 'LinkedIn', link: '#', icon: faLinkedin }
          ]
        },
        {
          imgSrc: kofiSarpong,
          name: 'Kofi Sarpong',
          role: 'UX Designer',
          socialLinks: [
            { platform: 'Twitter', link: '#', icon: faTwitter },
            { platform: 'Facebook', link: '#', icon: faFacebookF },
            { platform: 'LinkedIn', link: '#', icon: faLinkedin }
          ]
        },
        {
          imgSrc: aziz,
          name: 'Abdul Aziz',
          role: 'Marketing Specialist',
          socialLinks: [
            { platform: 'Twitter', link: '#', icon: faTwitter },
            { platform: 'Facebook', link: '#', icon: faFacebookF },
            { platform: 'LinkedIn', link: '#', icon: faLinkedin }
          ]
        }
      ];

    return (
        <section className='teachers-section'>
            <div className="teachers-header">
                <div className="line"></div>
                <h1>Our Top Lecturers</h1>
                <div className="line"></div>
            </div>
            <h4>Meet Our Top Lecturers</h4>
            <div className="teachers-container">
                {teamData.map((teacher, index) => (
                    <div className="teacher-card wow zoomIn" data-wow-duration="1s" data-wow-delay={`${index / 10}s`} key={index}>
                        <div className="teacher-card-img-container">
                            <img src={teacher.imgSrc} alt={teacher.name} />
                            <div className="teacher-social">
                                {teacher.socialLinks.map((socialLink, index) => (
                                    <a 
                                        className="btn btn-outline-light btn-square mx-1" 
                                        href={socialLink.link} 
                                        key={index}
                                    >
                                        <FontAwesomeIcon icon={socialLink.icon} />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="teacher-card-content">
                            <h3>{teacher.name}</h3>
                            <p>{teacher.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TopLectures;