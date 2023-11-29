import React from 'react';
import Header from '../components/Header';
import bg from '../assets/images/header_images/events_header_image.jpeg';
import ourLecturers from '../assets/images/ugcs_staffs_image1.jpg';
import eventImg1 from '../assets/images/events_images/events_image1.jpeg';
import eventImg2 from '../assets/images/events_images/events_image2.jpeg';
import eventImg3 from '../assets/images/events_images/events_image3.jpeg';
import eventImg4 from '../assets/images/events_images/events_image4.jpeg';
import eventImg5 from '../assets/images/ugcs_students_image1.jpeg';
import eventImg6 from '../assets/images/get_to_know_us_images/getToKnowUsImage2.jpg';
import '../css/Events.css'; // Import the CSS file
import Footer from '../components/Footer';

const Events = () => {
  const pastEventsData = [
    {
      eventName: 'DevFest 2023 Accra',
      description: 'DevFest is a community-led, developer event hosted by Google Developer Groups around the globe. GDGs are focused on community building and learning about Google’s technologies.',
      eventDate: 'Jan 15, 2023',
      images: [eventImg1, eventImg2, eventImg3, eventImg4],
    },
    {
      eventName: 'UGCS Hackathon 2023',
      description: 'UGCS Hackaton 2023 is an annual event organized by the HOD of computer science department to test students\' learning status',
      eventDate: 'Feb 02, 2023',
      images: [eventImg5, eventImg6],
    },
  ];

  return (
    <>
      <Header title="Events" currentPage="Events" backgroundImage={bg} />
      <section className="events">
        <div className="container">
          <div className="events-content">
            <h3>Our Events</h3>
            <p>
              University of Ghana Computer Science Department has a team of highly qualified and experienced lecturers who are always ready to help students achieve their goals.
            </p>
          </div>
          <img src={ourLecturers} alt="our lecturers" />
          <h4>Upcoming Events</h4>
          <div className="events-container">
            <p>There is no event at the moment. Please check back later.</p>
          </div>

          <h5>Past Events</h5>
          <div className="past-events-container">
            {pastEventsData.map((event, index) => (
              <div className="past-event" key={index}>
                <img src={event.images[0]} alt={`Event ${index + 1}`} />
                <div className="event-details">
                  <h6>{event.eventName}</h6>
                  <p>{event.description}</p>
                  <p>Date: {event.eventDate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Events;
