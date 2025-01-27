import React from 'react';
import './Courses.css'; // Assuming you have a separate CSS file for this component

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>Get Started</h2>
        <p>Home / Courses</p>
      </div>
    </section>
  );
};

const Tags = () => {
  return (
    <div className="tags">
      <button className="styled-button"><a href='https://www.w3schools.com/'>WEB</a></button>
      <button className="styled-button"><a href='https://www.coursera.org/courses?query=programming%20languages'>PROGRAMMING LANGUAGES</a></button>
      <button className="styled-button"><a href='https://www.w3schools.com/css/'>CSS</a></button>
      <button className="styled-button"><a href='https://www.freecodecamp.org/learn/2022/responsive-web-design/'>RESPONSIVE</a></button>
      <button className="styled-button"><a href='https://www.codecademy.com/learn/learn-bootstrap'>BOOTSTRAP</a></button>
      <button className="styled-button"><a href='https://www.w3schools.com/html/'>HTML</a></button>
      <button className="styled-button"><a href='https://www.udemy.com/topic/web-design/'>WEBSITE</a></button>
      <button className="styled-button"><a href='https://www.coursera.org/browse/business'>BUSINESS</a></button>
    </div>
  );
};

const Courses = () => {
  const courseList = [
    { 
      title: 'The Complete jQuery Course', 
      category: 'Web Development', 
      price: 'Free', 
      image: require('./img/course01.jpg'),
      link: 'https://www.w3schools.com/jquery/' // Add course links here
    },
    { 
      title: 'Introduction to CSS', 
      category: 'Web Design', 
      price: 'Free', 
      image: require('./img/course02.jpg'),
      link: 'https://www.w3schools.com/w3css/defaulT.asp'
    },
    { 
      title: 'The Complete course on HTML', 
      category: 'Web Development', 
      price: 'Free', 
      image: require('./img/course03.jpg'),
      link: 'https://www.w3schools.com/html/'
    },
    { 
      title: 'Introduction to Bootstrap', 
      category: 'Web Design', 
      price: 'Free', 
      image: require('./img/course04.jpg'),
      link: 'https://www.w3schools.com/bootstrap/'
    }
  ];

  return (
    <section className="courses">
      <h2>Web Development</h2>
      <div className="course-list">
        {courseList.map((course, index) => (
          <div key={index} className="course-item">
            {/* Wrap the image inside the <a> tag */}
            <a href={course.link} target="_blank" rel="noopener noreferrer">
              <img src={course.image} alt={course.title} className="course-image" />
            </a>
            <h3>{course.title}</h3>
            <p>{course.category}</p>
            <p>{course.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="App">
      <HeroSection />
      <Tags />
      <Courses />
    </div>
  );
};

export default App;
