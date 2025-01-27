// import React, { useState } from 'react';
// // import { GoogleMap, LoadScript } from '@react-google-maps/api';

// const ContactPage = () => {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic
//     console.log('Form submitted:', form);
//   };

//   return (
//     <div className="contact-page">
      
//       <div className="background-image">
//       <div className="contact-header">
      
//         <h1>Get In Touch</h1>
//       </div>
//       </div>
      
//       <div className="contact-container">
//         <form onSubmit={handleSubmit} className="contact-form">
//           <div>
//             <label htmlFor="name">Name</label>
//             <input 
//               type="text" 
//               id="name" 
//               name="name" 
//               value={form.name} 
//               onChange={handleChange} 
//             />
//           </div>
//           <div>
//             <label htmlFor="email">Email</label>
//             <input 
//               type="email" 
//               id="email" 
//               name="email" 
//               value={form.email} 
//               onChange={handleChange} 
//             />
//           </div>
//           <div>
//             <label htmlFor="subject">Subject</label>
//             <input 
//               type="text" 
//               id="subject" 
//               name="subject" 
//               value={form.subject} 
//               onChange={handleChange} 
//             />
//           </div>
//           <div>
//             <label htmlFor="message">Message</label>
//             <textarea 
//               id="message" 
//               name="message" 
//               value={form.message} 
//               onChange={handleChange} 
//             />
//           </div>
//           <button type="submit">Send Message</button>
//         </form>
//         <div className="contact-info">
//           <p>Email: uddeshai@gmail.com</p>
//           <p>Phone: 7779988219</p>
//           <p>Location: Bmsit College</p>
//           {/* <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
//             <GoogleMap
//               mapContainerStyle={{ height: "400px", width: "100%" }}
//               center={{ lat: 12.9716, lng: 77.5946 }}
//               zoom={10}
//             >
//             </GoogleMap>
//           </LoadScript> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;
import React, { useState } from 'react';

const ContactPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', form);
  };

  return (
    <div className="contact-page">
      <div className="background-image">
        <div className="contact-header">
          <h2>Contact Us</h2>
        </div>
      </div>
      
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Your Name" 
              value={form.name} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Your Email" 
              value={form.email} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              placeholder="Subject" 
              value={form.subject} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              placeholder="Your Message" 
              value={form.message} 
              onChange={handleChange} 
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <p>Email: uddeshai@gmail.com</p>
          <p>Phone: 7779988219</p>
          <p>Location: Bmsit College</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;