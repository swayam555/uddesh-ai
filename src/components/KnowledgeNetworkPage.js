import React, { useState } from 'react';
import './KnowledgeNetworkPage.css';

const KnowledgeNetworkPage = () => {
  // State to control the currently selected job role and modal visibility
  const [selectedRole, setSelectedRole] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Job roles data with additional information
  const jobRoles = [
    {
      title: 'AI ML Specialist',
      description: 'AI ML Specialists work on developing and implementing machine learning algorithms and AI systems.',
      opportunities: 'High demand in tech companies, AI startups, and research organizations.'
    },
    {
      title: 'API Integration Specialist',
      description: 'API Integration Specialists are responsible for connecting different systems and platforms via APIs.',
      opportunities: 'Strong demand in SaaS companies, cloud services, and large enterprises.'
    },
    {
      title: 'Penetration Tester',
      description: 'Penetration Testers assess the security of systems by simulating cyberattacks.',
      opportunities: 'Opportunities in cyber security firms, financial institutions, and tech companies.'
    },
    {
      title: 'Application Support Engineer',
      description: 'Application Support Engineers provide technical support for software applications, troubleshooting issues and maintaining functionality.',
      opportunities: 'Opportunities in IT service companies, software vendors, and enterprise IT departments.'
    },
    {
      title: 'Business Analyst',
      description: 'Business Analysts analyze business processes and requirements, identifying solutions to help achieve business goals.',
      opportunities: 'High demand across various industries such as finance, healthcare, and IT.'
    },
    {
      title: 'Customer Service Executive',
      description: 'Customer Service Executives handle client interactions, resolve complaints, and ensure customer satisfaction.',
      opportunities: 'Opportunities in BPOs, tech support services, retail, and e-commerce.'
    },
    {
      title: 'Cyber Security Specialist',
      description: 'Cyber Security Specialists protect organizational data from security threats through system monitoring and incident response.',
      opportunities: 'Growing demand in every industry, especially in finance, healthcare, and IT.'
    },
    {
      title: 'Database Administrator',
      description: 'Database Administrators manage and maintain database systems, ensuring optimal performance and data integrity.',
      opportunities: 'High demand in large enterprises, government agencies, and cloud service providers.'
    },
    {
      title: 'Data Scientist',
      description: 'Data Scientists analyze and interpret complex data sets to help organizations make informed business decisions.',
      opportunities: 'Top opportunities in AI, machine learning, healthcare, finance, and big tech companies.'
    },
    {
      title: 'Hardware Engineer',
      description: 'Hardware Engineers design, develop, and test computer hardware components such as circuit boards and processors.',
      opportunities: 'Demand in semiconductor companies, hardware manufacturers, and research labs.'
    },
    {
      title: 'Helpdesk Engineer',
      description: 'Helpdesk Engineers provide technical assistance to users, diagnosing and resolving issues related to hardware and software.',
      opportunities: 'Opportunities in IT service providers, corporate IT departments, and government organizations.'
    },
    {
      title: 'Information Security Specialist',
      description: 'Information Security Specialists focus on safeguarding an organization’s information systems from threats and vulnerabilities.',
      opportunities: 'Demand across all industries, particularly in finance, government, and healthcare.'
    },
    {
      title: 'Networking Engineer',
      description: 'Networking Engineers are responsible for setting up, managing, and maintaining computer networks.',
      opportunities: 'High demand in telecommunications, enterprise IT, and cloud service providers.'
    },
    {
      title: 'Project Manager',
      description: 'Project Managers oversee the planning, execution, and closing of projects, ensuring they are delivered on time and within budget.',
      opportunities: 'In demand across various industries, especially IT, construction, and healthcare.'
    },
    {
      title: 'Software Developer',
      description: 'Software Developers design, develop, and maintain software applications to meet user needs.',
      opportunities: 'Strong demand across tech companies, startups, and large enterprises.'
    },
    {
      title: 'Software Tester',
      description: 'Software Testers ensure that applications work as expected by identifying bugs and issues before deployment.',
      opportunities: 'Opportunities in IT service companies, software development firms, and enterprise IT.'
    },
    {
      title: 'Technical Writer',
      description: 'Technical Writers create manuals, documentation, and other materials to explain complex technical information in an easy-to-understand manner.',
      opportunities: 'Opportunities in IT, engineering, healthcare, and manufacturing sectors.'
    },
    {
      title: 'Graphic Designer',
      description: 'Graphic Designers create visual content to communicate messages through digital media, print, and branding.',
      opportunities: 'High demand in marketing agencies, startups, and media companies.'
    }
  ];

  // Function to handle button click to show modal
  const handleRoleClick = (role) => {
    setSelectedRole(role);
    setShowModal(true);
  };

  // Function to close modal
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
          <button
            key={index}
            className="kn-job-role-button"
            onClick={() => handleRoleClick(role)} // Set the selected role on click
          >
            {role.title.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Modal for showing job details */}
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
