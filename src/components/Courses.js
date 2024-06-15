// Courses.js
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
      <button>WEB</button>
      <button>PROGRAMMING LANGUAGES</button>
      <button>CSS</button>
      <button>RESPONSIVE</button>
      <button>BOOTSTRAP</button>
      <button>HTML</button>
      <button>WEBSITE</button>
      <button>BUSINESS</button>
    </div>
  );
};

const Courses = () => {
  const courseList = [
    { title: 'The Complete jQuery Course', category: 'Web Development', price: 'Free', image: 'path-to-image' },
    { title: 'Introduction to CSS', category: 'Web Design', price: 'Free', image: 'path-to-image' },
    { title: 'The Complete course on HTML', category: 'Web Development', price: 'Free', image: 'path-to-image' },
    { title: 'Introduction to Bootstrap', category: 'Web Design', price: 'Free', image: 'path-to-image' },
  ];

  return (
    <section className="courses">
      <h2>Web Development</h2>
      <div className="course-list">
        {courseList.map((course, index) => (
          <div key={index} className="course-item">
            <img src={course.image} alt={course.title} />
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
