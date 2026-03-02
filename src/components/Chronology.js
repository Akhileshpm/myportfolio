import React, { useState } from 'react';
import '../styles/chronology.css';

const companyData = {
  company1: {
    details: [
      `Managed the successful migration of a NodeJs and ExpressJs project to NestJs, enhancing code organization, scalability, and maintainability.`,
      `• Achieved client-centric features by meeting and exceeding project requirements.`,
      `• Strengthened system security through the successful implementation of two-factor authentication using Twilio's SMS integration.`,
      `• Established and managed a robust mailing service using Gmail's SMTP server.`,
      `• Conducted and managed load testing on performance-intensive APIs using Vegeta, ensuring optimal system responsiveness.`,
      `• Implemented and managed the Winston logging library, elevating debugging and error-tracking capabilities.`,
      `• Optimized and managed database queries, resulting in improved data retrieval and application performance.`,
      `• Orchestrated and managed the implementation of RabbitMQ for efficient message queueing, facilitating an asynchronous workflow.`,
      `• Led and managed a microservices initiative, optimizing system architecture and functionality.`,
      `• Utilized and managed AWS S3 for consistent and scalable file storage.`,
      `• Implemented and managed Docker for containerization, streamlining deployment processes.`,
      `• Engineered and exposed RESTful APIs, aligning with industry standards, ensuring seamless client-server communication.`,
      `• Implemented and managed state-of-the-art security measures with stateless JSON Web Tokens (JWTs), ensuring data privacy and user security.`,
      `• Pioneered and managed the development of a full-stack resource management application, achieving a 50 percent reduction in scheduling errors and saving 20 plus hours per week.`
    ]
  },
  company2: {
    details: [
      `Involved in the development of asynchronous microservices for an AI-powered ad generation platform, including cron job orchestration and service maintenance.`,
      `• Contributed to AI-integrated monolithic systems with a focus on back-end logic, service performance, and optimization.`,
      `• Built the CM360 ad insights pipeline end-to-end — integrated Google's DFA Reporting API with async report polling, and streaming CSV-to-Parquet persistence, processing 10,000+ ad records per cycle across 20+ metrics for enterprise cross-channel analytics.`
    ]
  }
};

const Chronology = ({ events, showButton }) => {
  return (
    <div className='timeline'>
      {events.map((event, index) => (
        <TimelineItem key={index} event={event} showButton={showButton || false} />
      ))}
    </div>
  );
};

const TimelineItem = ({ event, showButton }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Get company data based on event's company key
  const getCompanyDetails = (companyKey) => {
    return companyData[companyKey]?.details || [];
  };

  const companyDetails = getCompanyDetails(event.company);

  return (
    <div className='timeline-item'>
      <div className='timeline-year'>{event.year}</div>
      <div className='timeline-content'>
        {event.details}
        {showButton ? (
          <button className='toggle-btn' onClick={toggleDropdown}>
            {isOpen ? 'Hide info' : 'Show info'}
          </button>
        ) : (
          ''
        )}
        <div className={`dropdown ${isOpen ? 'open' : ''}`}>
          {isOpen && (
            <div className='work-experience-info'>
              <ul>
                {companyDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chronology;
