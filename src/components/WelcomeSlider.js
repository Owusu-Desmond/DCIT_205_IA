import AwesomeSlider from 'react-awesome-slider';
import ReactWOW from 'react-wow'
import { useEffect } from 'react';
import WOW from 'wowjs';

// import slider images

import ugcsStuImage1 from '../assets/images/ugcs_destee_image1.jpeg';
import ugcsStuImage2 from '../assets/images/ugcs_students_image2.jpeg';
import ugcsStuImage3 from '../assets/images/ugcs_students_image1.jpeg';
import ugcsLaboratory from '../assets/images/ugcs_laboratory1.jpg'

// import slider styles
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/src/styled/cube-animation/cube-animation.scss';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

const AutoplaySlider = withAutoplay(AwesomeSlider);
// const CaptionedSlider = withCaption(AwesomeSlider);
 
const WelcomeSlider = () => {

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, []);

  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={6000}
      animation='cubeAnimation'
      cssModule={AwesomeSliderStyles}
    >
      <div className="sliderCaption-container" data-src={ugcsStuImage1}>
        <h2>YOUR GATEWAY TO WORLD CLASS COMPUTER SCIENCE EDUCATION</h2>
        <p className='slider-text wow slideInRight' data-wow-duration="4s" data-wow-iteration="1">
          The Department of Computer Science (DCS) University of Chana 
          Is holding an intensive Bight-week (8) professional certificates courses. 
          This is open to Senior High School Graduates, Tertiary Students, 
          Graduates, Workers and the General Public.
        </p>
        <button className="slider-button">Read More</button>
      </div>
      <div className="sliderCaption-container" data-src={ugcsStuImage3}>
        <h2>ABOUT COMPUTER SCIENCE AN INTRODUCTION</h2>
        <p className="slider-text wow slideInLeft" data-wow-duration="4s" data-wow-iteration="1">
          Computer Science is a very broad field with many sub-disciplines and applications.
          It is a discipline that spans theory and practice.
          It requires thinking both in abstract terms and in concrete terms.
        </p>
        <button className="slider-button">Read More</button>
      </div>
      <div className="sliderCaption-container" data-src={ugcsLaboratory}>
        <h2>OUR COMPUTER SCIENCE LABORATORY</h2>
        <p className='slider-text wow slideInTop' data-wow-duration="4s" data-wow-iteration="1">
          The computer labs provides a central computing facility to 
          the students, teachers and staffs of the University for their 
          assignments, projects, dissertation and research related works. 
          In computer lab, printing and scanning facilities are provided.
        </p>
        <button className="slider-button">Read More</button>
      </div>
      <div className="sliderCaption-container" data-src={ugcsStuImage2}>
        <h2>COMPUTER SCIENCE UNDERGRADUATE PROGRAMMES</h2>
        <p className='slider-text wow slideInBottom' data-wow-duration="4s" data-wow-iteration="1">
          Open the door to sought-after technology careers with a world-class 
          Bachelor of Science in Computer Science degree.
        </p>
        <button className="slider-button">Read More</button>
      </div>
    </AutoplaySlider>
  );
}

export default WelcomeSlider;
