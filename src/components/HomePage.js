import React from 'react';
import './HomePage.css';
import teamImage1 from './img/about.png'
import './AboutUddeshAI.css';
import './AboutUs.css';
import member1 from './img/nam.jpg'; 
import member2 from './img/nish.jpg'; 
import member3 from './img/may.jpg'; 
import member4 from './img/nit.jpg'; 
import './ContactUs.css';
import backgroundImage from './img/cta2-background.jpg';
// import { useHistory } from 'react-router-dom';



const HomePage = () => {
    const members = [
        {
          name: "Naman Chawla",
          role: "ML and Backend Developer",
          image: member1,
        },
        {
          name: "Nishant kr jha",
          role: "Backend Developer",
          image: member2,
        },
        {
          name: "Mayank Bajaj",
          role: "Frontend and UI Developer",
          image: member3,
        },
        {
          name: "Nitish Kumar",
          role: "Frontend Developer",
          image: member4,
        },
      ];
        // const history = useHistory(); 
        
      
        // const handleClick = () => {
        //   history.push('/contact');
          
        // };
    
  return (
    <>
    <div className="homepage">
      
      <main className="main-content">
        <h1>AI TO NAVIGATE YOUR DESTINATION</h1>
        <p>Hi, amit!<br />Discover yourself,<br />Take the test to find the perfect role for you after Engineering</p>
        <button className="get-started">Get Started!</button>
      </main>
    </div>
    <div className="about-container">
    <h1>About Uddesh AI</h1>
    <p>
      Education seekers get a personalised experience on our site,
      based on educational background and career interest,
      enabling them to make well informed course and career decisions.
      The decision making is empowered with easy access to detailed
      information on career choices, courses, exams, colleges, admission
      criteria, eligibility, placement statistics, rankings, reviews,
      scholarships, latest updates etc as well as by interacting with other
      career.ly users, experts, current students in colleges and alumni groups.
      We have introduced several student oriented products and tools like
      Career Prediction, Knowledge Network, Daily Bytes, Blogs, Community
      discussion forum, and various Courses.
    </p>
    <div className="images-container">
      <img src={teamImage1} alt="Team working" className="team-image"/>
      {/* <img src={teamImage2} alt="Discussion" className="team-image"/> */}
    </div>
  </div>
  <div className="about-us-container">
      <h1>About Us</h1>
      <div className="members-container">
        {members.map((member, index) => (
          <div className="member-card" key={index}>
            <img src={member.image} alt={member.name} className="member-image" />
            <h2>{member.name}</h2>
            <p>{member.role}</p>
            <button className="details-button">View details &raquo;</button>
          </div>
        ))}
      </div>
    </div>
    <div className="contact-us-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="contact-us-content">
        <h1>Contact Us</h1>
        <p>Help us to get to know you.</p>
        <button className="contact-us-button" ><a href="/contact">Contact Us Now</a></button>
      </div>
    </div>
   
  </>
  );
};

export default HomePage;
