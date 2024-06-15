// KnowledgeNetworkPage.js
import React from 'react';
import './KnowledgeNetworkPage.css';

const KnowledgeNetworkPage = () => {
  const jobRoles = [
    'AI ML Specialist',
    'API Integration Specialist',
    'Penetration Tester',
    'Application Support Engineer',
    'Business Analyst',
    'Customer Service Executive',
    'Cyber Security Specialist',
    'Database Administrator',
    'Data Scientist',
    'Hardware Engineer',
    'Helpdesk Engineer',
    'Information Security Specialist',
    'Networking Engineer',
    'Project Manager',
    'Software Developer',
    'Software Tester',
    'Technical Writer',
    'Graphic Designer'
  ];

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
          <button key={index} className="kn-job-role-button">
            {role.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeNetworkPage;
