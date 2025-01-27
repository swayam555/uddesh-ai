import React from 'react';
import './Abou.css';
import member1 from './img/nam.jpg'; // Replace with actual path
import member2 from './img/nish.jpg'; // Replace with actual path
import member3 from './img/may.jpg'; // Replace with actual path
import member4 from './img/nit.jpg'; // Replace with actual path
import { FaLinkedin } from 'react-icons/fa';

const members = [
  {
    name: "Naman Chawla",
    role: "ML and Backend Developer",
    image: member1,
    description: "Naman is an experienced ML and Backend Developer with a passion for creating intelligent systems.",
    linkedin: "https://www.linkedin.com/in/naman-chawla/"
  },
  {
    name: "Nishant kr jha",
    role: "Backend Developer",
    image: member2,
    description: "Nishant specializes in backend development and has a knack for building robust server-side applications.",
    linkedin: "https://www.linkedin.com/in/nishant-kr-jha/"
  },
  {
    name: "Mayank Bajaj",
    role: "Frontend and UI Developer",
    image: member3,
    description: "Mayank is a talented Frontend and UI Developer who brings designs to life with his coding skills.",
    linkedin: "https://www.linkedin.com/in/mayank-bajaj/"
  },
  {
    name: "Nitish Kumar",
    role: "Frontend Developer",
    image: member4,
    description: "Nitish is a skilled Frontend Developer with a focus on creating seamless user experiences.",
    linkedin: "https://www.linkedin.com/in/nitish-kumar/"
  },
];

const AboutUs = () => {
  return (
    <div className="about-us">
      {members.map((member, index) => (
        <div className={`card ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
          <div className="card-image">
            <img src={member.image} alt={member.name} />
          </div>
          <div className="card-content">
            <h3>{member.name}</h3>
            <h4>{member.role}</h4>
            <p>{member.description}</p>
            <p>
              You can connect with me here: 
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="linkedin-icon" />
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;