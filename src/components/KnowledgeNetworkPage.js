// import React, { useState } from 'react';
// import './KnowledgeNetworkPage.css';

// const KnowledgeNetworkPage = () => {
//   // State to control the currently selected job role and modal visibility
//   const [selectedRole, setSelectedRole] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   // Job roles data with additional information
//   const jobRoles = [
//     {
//       title: 'AI ML Specialist',
//       description: 'AI ML Specialists work on developing and implementing machine learning algorithms and AI systems.',
//       opportunities: 'High demand in tech companies, AI startups, and research organizations.'
//     },
//     {
//       title: 'API Integration Specialist',
//       description: 'API Integration Specialists are responsible for connecting different systems and platforms via APIs.',
//       opportunities: 'Strong demand in SaaS companies, cloud services, and large enterprises.'
//     },
//     {
//       title: 'Penetration Tester',
//       description: 'Penetration Testers assess the security of systems by simulating cyberattacks.',
//       opportunities: 'Opportunities in cyber security firms, financial institutions, and tech companies.'
//     },
//     {
//       title: 'Application Support Engineer',
//       description: 'Application Support Engineers provide technical support for software applications, troubleshooting issues and maintaining functionality.',
//       opportunities: 'Opportunities in IT service companies, software vendors, and enterprise IT departments.'
//     },
//     {
//       title: 'Business Analyst',
//       description: 'Business Analysts analyze business processes and requirements, identifying solutions to help achieve business goals.',
//       opportunities: 'High demand across various industries such as finance, healthcare, and IT.'
//     },
//     {
//       title: 'Customer Service Executive',
//       description: 'Customer Service Executives handle client interactions, resolve complaints, and ensure customer satisfaction.',
//       opportunities: 'Opportunities in BPOs, tech support services, retail, and e-commerce.'
//     },
//     {
//       title: 'Cyber Security Specialist',
//       description: 'Cyber Security Specialists protect organizational data from security threats through system monitoring and incident response.',
//       opportunities: 'Growing demand in every industry, especially in finance, healthcare, and IT.'
//     },
//     {
//       title: 'Database Administrator',
//       description: 'Database Administrators manage and maintain database systems, ensuring optimal performance and data integrity.',
//       opportunities: 'High demand in large enterprises, government agencies, and cloud service providers.'
//     },
//     {
//       title: 'Data Scientist',
//       description: 'Data Scientists analyze and interpret complex data sets to help organizations make informed business decisions.',
//       opportunities: 'Top opportunities in AI, machine learning, healthcare, finance, and big tech companies.'
//     },
//     {
//       title: 'Hardware Engineer',
//       description: 'Hardware Engineers design, develop, and test computer hardware components such as circuit boards and processors.',
//       opportunities: 'Demand in semiconductor companies, hardware manufacturers, and research labs.'
//     },
//     {
//       title: 'Helpdesk Engineer',
//       description: 'Helpdesk Engineers provide technical assistance to users, diagnosing and resolving issues related to hardware and software.',
//       opportunities: 'Opportunities in IT service providers, corporate IT departments, and government organizations.'
//     },
//     {
//       title: 'Information Security Specialist',
//       description: 'Information Security Specialists focus on safeguarding an organization’s information systems from threats and vulnerabilities.',
//       opportunities: 'Demand across all industries, particularly in finance, government, and healthcare.'
//     },
//     {
//       title: 'Networking Engineer',
//       description: 'Networking Engineers are responsible for setting up, managing, and maintaining computer networks.',
//       opportunities: 'High demand in telecommunications, enterprise IT, and cloud service providers.'
//     },
//     {
//       title: 'Project Manager',
//       description: 'Project Managers oversee the planning, execution, and closing of projects, ensuring they are delivered on time and within budget.',
//       opportunities: 'In demand across various industries, especially IT, construction, and healthcare.'
//     },
//     {
//       title: 'Software Developer',
//       description: 'Software Developers design, develop, and maintain software applications to meet user needs.',
//       opportunities: 'Strong demand across tech companies, startups, and large enterprises.'
//     },
//     {
//       title: 'Software Tester',
//       description: 'Software Testers ensure that applications work as expected by identifying bugs and issues before deployment.',
//       opportunities: 'Opportunities in IT service companies, software development firms, and enterprise IT.'
//     },
//     {
//       title: 'Technical Writer',
//       description: 'Technical Writers create manuals, documentation, and other materials to explain complex technical information in an easy-to-understand manner.',
//       opportunities: 'Opportunities in IT, engineering, healthcare, and manufacturing sectors.'
//     },
//     {
//       title: 'Graphic Designer',
//       description: 'Graphic Designers create visual content to communicate messages through digital media, print, and branding.',
//       opportunities: 'High demand in marketing agencies, startups, and media companies.'
//     }
//   ];

//   // Function to handle button click to show modal
//   const handleRoleClick = (role) => {
//     setSelectedRole(role);
//     setShowModal(true);
//   };

//   // Function to close modal
//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedRole(null);
//   };

//   return (
//     <div className="kn-knowledge-network-page">
//       <div className="kn-hero-section">
//         <div className="kn-hero-content">
//           <p>Home / Knowledge Network</p>
//           <h2>Knowledge Network Page</h2>
//         </div>
//       </div>

//       <div className="kn-job-roles">
//         {jobRoles.map((role, index) => (
//           <button
//             key={index}
//             className="kn-job-role-button"
//             onClick={() => handleRoleClick(role)} // Set the selected role on click
//           >
//             {role.title.toUpperCase()}
//           </button>
//         ))}
//       </div>

//       {/* Modal for showing job details */}
//       {showModal && (
//         <div className="kn-modal-overlay" onClick={closeModal}>
//           <div className="kn-modal-content" onClick={(e) => e.stopPropagation()}>
//             <h2>{selectedRole.title}</h2>
//             <p><strong>Description:</strong> {selectedRole.description}</p>
//             <p><strong>Market Opportunities:</strong> {selectedRole.opportunities}</p>
//             <button className="kn-close-button" onClick={closeModal}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default KnowledgeNetworkPage;
import React, { useState } from 'react';
import './KnowledgeNetworkPage.css';

const KnowledgeNetworkPage = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const jobRoles = [
    {
      title: 'Software Tester',
      description: 'Software Testers ensure that applications work as expected by identifying bugs and issues before deployment.',
      opportunities: 'Opportunities in IT service companies, software development firms, and enterprise IT.',
      image: require('./img/Knowledge_Network_Page/softwaretest.jpg'),
    },
    {
      title: 'Technical Writer',
      description: 'Technical Writers create manuals, documentation, and other materials to explain complex technical information in an easy-to-understand manner.',
      opportunities: 'Opportunities in IT, engineering, healthcare, and manufacturing sectors.',
      image: require('./img/Knowledge_Network_Page/technicalwriter.jpg'),
    },
    {
      title: 'Graphic Designer',
      description: 'Graphic Designers create visual content to communicate messages through digital media, print, and branding.',
      opportunities: 'High demand in marketing agencies, startups, and media companies.',
      image: require('./img/Knowledge_Network_Page/graphic.jpg'),
    },
    {

      title: 'AI ML Specialist',
      description: 'AI ML Specialists work on developing and implementing machine learning algorithms and AI systems.',
      opportunities: 'High demand in tech companies, AI startups, and research organizations.',
      image: require('./img/Knowledge_Network_Page/aiml.jpg'),
    },
    {
      title: 'API Integration Specialist',
      description: 'API Integration Specialists are responsible for connecting different systems and platforms via APIs.',
      opportunities: 'Strong demand in SaaS companies, cloud services, and large enterprises.',
      image: require('./img/Knowledge_Network_Page/api.jpg'),
    },
    {
      title: 'Penetration Tester',
      description: 'Penetration Testers assess the security of systems by simulating cyberattacks.',
      opportunities: 'Opportunities in cyber security firms, financial institutions, and tech companies.',
      image: require('./img/Knowledge_Network_Page/penitrationtester.jpg'),
    },
    {
      title: 'Application Support Engineer',
      description: 'Application Support Engineers provide technical support for software applications, troubleshooting issues and maintaining functionality.',
      opportunities: 'Opportunities in IT service companies, software vendors, and enterprise IT departments.',
      image: require('./img/Knowledge_Network_Page/applicationsupport.jpg'),
    },
    {
      title: 'Business Analyst',
      description: 'Business Analysts analyze business processes and requirements, identifying solutions to help achieve business goals.',
      opportunities: 'High demand across various industries such as finance, healthcare, and IT.',
      image: require('./img/Knowledge_Network_Page/businessanalyst.jpg'),
    },
    {
      title: 'Customer Service Executive',
      description: 'Customer Service Executives handle client interactions, resolve complaints, and ensure customer satisfaction.',
      opportunities: 'Opportunities in BPOs, tech support services, retail, and e-commerce.',
      image: require('./img/Knowledge_Network_Page/customersupport.jpg'),
    },
    {
      title: 'Cyber Security Specialist',
      description: 'Cyber Security Specialists protect organizational data from security threats through system monitoring and incident response.',
      opportunities: 'Growing demand in every industry, especially in finance, healthcare, and IT.',
      image: require('./img/Knowledge_Network_Page/cybersecurity.jpg'),
    },
    {
      title: 'Database Administrator',
      description: 'Database Administrators manage and maintain database systems, ensuring optimal performance and data integrity.',
      opportunities: 'High demand in large enterprises, government agencies, and cloud service providers.',
      image: require('./img/Knowledge_Network_Page/databaseadministrator.jpg'),
    },
    {
      title: 'Data Scientist',
      description: 'Data Scientists analyze and interpret complex data sets to help organizations make informed business decisions.',
      opportunities: 'Top opportunities in AI, machine learning, healthcare, finance, and big tech companies.',
      image: require('./img/Knowledge_Network_Page/datasci.jpg'),
    },
    {
      title: 'Hardware Engineer',
      description: 'Hardware Engineers design, develop, and test computer hardware components such as circuit boards and processors.',
      opportunities: 'Demand in semiconductor companies, hardware manufacturers, and research labs.',
      image: require('./img/Knowledge_Network_Page/hardware.jpg'),
    },
    {
      title: 'Helpdesk Engineer',
      description: 'Helpdesk Engineers provide technical assistance to users, diagnosing and resolving issues related to hardware and software.',
      opportunities: 'Opportunities in IT service providers, corporate IT departments, and government organizations.',
      image: require('./img/Knowledge_Network_Page/helpdesk.jpg'),
    },
    {
      title: 'Information Security Specialist',
      description: 'Information Security Specialists focus on safeguarding an organization’s information systems from threats and vulnerabilities.',
      opportunities: 'Demand across all industries, particularly in finance, government, and healthcare.',
      image: require('./img/Knowledge_Network_Page/informationsecurity.jpg'),
    },
    {
      title: 'Networking Engineer',
      description: 'Networking Engineers are responsible for setting up, managing, and maintaining computer networks.',
      opportunities: 'High demand in telecommunications, enterprise IT, and cloud service providers.',
      image: require('./img/Knowledge_Network_Page/networkengg.jpg'),
    },
    {
      title: 'Project Manager',
      description: 'Project Managers oversee the planning, execution, and closing of projects, ensuring they are delivered on time and within budget.',
      opportunities: 'In demand across various industries, especially IT, construction, and healthcare.',
      image: require('./img/Knowledge_Network_Page/projectmanager.jpg'),
    },
    {
      title: 'Software Developer',
      description: 'Software Developers design, develop, and maintain software applications to meet user needs.',
      opportunities: 'Strong demand across tech companies, startups, and large enterprises.',
      image: require('./img/Knowledge_Network_Page/softwaredevloper.jpg'),
    },
   
  ];

  const handleRoleClick = (role) => {
    setSelectedRole(role);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedRole(null);
  };

  return (
    <div className="kn-knowledge-network-page">
      <div className="kn-hero-section">
        <div className="kn-hero-content">
          <p>Home / Knowledge Network</p>
          <h2>Knowledge Network Page</h2>
        </div>
      </div>

      <div className="kn-job-roles">
        {jobRoles.map((role, index) => (
          <div key={index} className="kn-job-role-card">
            <div className="kn-card-inner">
              <div className="kn-card-front">
                <div className="kn-card-title">{role.title}</div>
                <img src={role.image} alt={role.title} className="kn-card-image" />
              </div>
              <div className="kn-card-back">
                <h3>{role.title}</h3>
                <p><strong>Description:</strong> {role.description}</p>
                <p><strong>Market Opportunities:</strong> {role.opportunities}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="kn-modal-overlay" onClick={closeModal}>
          <div className="kn-modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedRole.title}</h2>
            <p><strong>Description:</strong> {selectedRole.description}</p>
            <p><strong>Market Opportunities:</strong> {selectedRole.opportunities}</p>
            <button className="kn-close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default KnowledgeNetworkPage;