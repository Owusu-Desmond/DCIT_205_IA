
import React from 'react';
import Header from '../components/Hearder'
import headerImage from '../assets/images/header_images/about_header_image.jpg';
import '../css/About.css';
import ReactCardCarousel from 'react-card-carousel';
import Footer from '../components/Footer';

// import get to know us images

import getToKnowUsImage1 from '../assets/images/get_to_know_us_images/getToKnowUsImage1.jpg';
import getToKnowUsImage2 from '../assets/images/get_to_know_us_images/getToKnowUsImage2.jpg';
import getToKnowUsImage3 from '../assets/images/get_to_know_us_images/getToKnowUsImage3.jpg';

const About = () => {

  const getToKnowUsData = [
    {
      imgSrc: getToKnowUsImage1,
      title: 'Our Organization',
      description: 'The University of Ghana is one of the Africa\'s most preeminent public universities. Our impact on individuals, our region and the world is profound. whether we are launching young people into a boundless future or confronting the grand challenges of our time through dauntless research. UG educates more than 38,000students annually, with approximately 2.64% being computer science students. We turn ideas into impact and transform the world around us. For more about our impact, visit our news site, UG News.',
    },
    {
      imgSrc: getToKnowUsImage2,
      title: 'Our Community',
      description: 'If you are inspired by a big challenge, you\'ve come to the right place! The computer science community at the univrersity of Ghana encourages it\'s people to be vibrant and brave in taking on new challenges that push boundries beyond imagination.',
    },
    {
      imgSrc: getToKnowUsImage3,
      title: 'Distance Learning',
      description: 'Experience a UG-CDCD classroom from wherever you are. Take advantage of real-time lectures and personal interaction with professors through a suite of online delivery options, customizing your degree to fit your schedule. Our online classroom maintains the same level of academic rigor, while providing students with more ways of learning.',
    }
  ]

  return (
    <>
      <section className='about-section'>
        <Header title="About Us" currentPage="About" backgroundImage={headerImage} />
        <div className="welcome-section">
          <h3>The Department of Computer Science (DCS) University of Chana</h3>
          <p>
              This is the Information Technology age and at its core is Computer Science. 
              The study of computer science is therefore critical if society is to take full 
              advantage of the benefits Information Technology has to offer and make rapid 
              economic advances. Computer science involves the study and development of applications 
              that allow for our everyday use of computers, the software systems that support 
              these applications, and the means and methods used to produce both applications 
              and systems that behave reliably, correctly and ethically. At the heart of Computer 
              Science lies the skill of computer programming and employers who hire Computer 
              Scientists expect adept programmers with knowledge of current techniques and tools 
              and the ability to apply sound engineering principles to the development, construction 
              and maintenance of computer programs.
          </p>
          <p>
              The range of courses available in the department and the skills acquired by 
              students enable them to find employment in many diverse fields of the economy and 
              prepare our graduates for the computing industry, working in a project team 
              (or research and development team), and to enable the graduate to bring specialist 
              skills to that team. The course also provides the platform for further study or 
              research through exposure to established and emerging technologies and methods, 
              and to active fields of research in Computer Science.
          </p>
        
          <p>
              The Department offers two undergraduate degree programmes, Bachelor of Science 
              in Computer Science Single-Major (3:2:1:1) and Major-Minor (3:2:2:1) as well as 
              Bachelor of Science in Information Technology.
          </p>

          <div className="get-to-knowUs-section">
              <h3>Get to know us</h3>
              <div className='line'/>
              <p>
                Things get interesting because you are eager to know more , 
                or you become eager to know more because it is interesting?
              </p>
              <div className="carousel-container">
                <ReactCardCarousel autoplay={ true } autoplay_speed={ 3000 }>
                    {getToKnowUsData.map((getToKnowUs, index) => (
                      <div className="carousel-card" key={index}>
                        <div className="carousel-card-img">
                            <img src={getToKnowUs.imgSrc} alt="carousel" />
                        </div>
                        <div className="carousel-card-content">
                          <h4>{getToKnowUs.title}</h4>
                          <p>
                              {getToKnowUs.description}
                          </p>
                        </div>
                      </div>
                    ))}
                </ReactCardCarousel>
                </div>
              </div>
        </div>
      </section>
    <Footer />
    </>
  );
};

export default About;
