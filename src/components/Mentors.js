import React from 'react';
import './Mentors.css'; // Import the CSS file for styling

// Importing images directly
import image1 from './img/man.jpg';
import image2 from './img/pus.jpg';
import image3 from './img/sud.jpg';

// Importing Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faDribbble } from '@fortawesome/free-brands-svg-icons';

const mentors = [
  {
    name: 'Dr. Manjunath T N',
    gender: 'Male',
    experience: '11Yrs 7Mnths 14Days',
    activityLevel: 95,
    specialization: 'Database and Data warehouse Systems Data Mining Applications Big Data & Analytics Cloud computing.',
    socialLinks: [
      { url: 'https://www.facebook.com', icon: faFacebookF },
      { url: 'https://www.twitter.com', icon: faTwitter },
      { url: 'https://www.dribbble.com', icon: faDribbble }
    ],
    image: image1
  },
  {
    name: 'Dr. Pushpa S K',
    gender: 'Female',
    experience: '22Yrs 9Mnths 2Days',
    activityLevel: 87,
    specialization: 'Wireless Sensor Networks, Big Data, Data Analytics.',
    socialLinks: [
      { url: 'https://www.facebook.com', icon: faFacebookF },
      { url: 'https://www.twitter.com', icon: faTwitter },
      { url: 'https://www.dribbble.com', icon: faDribbble }
    ],
    image: image2
  },
  {
    name: 'Dr. M V Sudhamani',
    gender: 'Female',
    experience: '31Yrs 3Mnths 24Days',
    activityLevel: 87,
    specialization: 'Image Processing, CBIR, Networks, AI&ML.',
    socialLinks: [
      { url: 'https://www.facebook.com', icon: faFacebookF },
      { url: 'https://www.twitter.com', icon: faTwitter },
      { url: 'https://www.dribbble.com', icon: faDribbble }
    ],
    image: image3
  }
];

const MentorCard = ({ mentor }) => {
  return (
    <div className="mentor-card">
      <div className="profile">
        <img src={mentor.image} alt={`${mentor.name}`} className="profile-image" />
        <h3>{mentor.name}</h3>
        <p>Active | {mentor.gender} | Exp {mentor.experience}</p>
        <p>Activity Level: {mentor.activityLevel}%</p>
        <div className="activity-bar">
          <div className="activity-fill" style={{ width: `${mentor.activityLevel}%` }}></div>
        </div>
        <button className="message-button"><a href ="https://bmsit.ac.in/faculty/information-science-and-engineering">Message</a></button>
        <p className="specialization">Specialization: {mentor.specialization}</p>
        <div className="social-links">
          {mentor.socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Mentors = () => {
  return (
    <div className="Mentors">
      <h1>Welcome to One to One Mentors Session</h1>
      <h2>Meet our team of experts</h2>
      <div className="mentor-container">
        {mentors.map((mentor, index) => (
          <MentorCard key={index} mentor={mentor} />
        ))}
      </div>
    </div>
  );
};

export default Mentors;
