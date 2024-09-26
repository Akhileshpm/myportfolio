import React, {useState} from 'react';
import '../styles/chronology.css';

const sentences = [`Managed the successful migration of a NodeJs and ExpressJs
              project to NestJs, enhancing code organization, scalability, and
              maintainability. `,`• Achieved client-centric features by
              meeting and exceeding project requirements. `,`•
              Strengthened system security through the successful implementation
              of two-factor authentication using Twilio’s SMS integration.`
              ,`• Established and managed a robust mailing service using
              Gmail’s SMTP server. `,`• Conducted and managed load testing
              on performance-intensive APIs using Vegeta, ensuring optimal
              system responsiveness. `,`• Implemented and managed the
              Winston logging library, elevating debugging and error-tracking
              capabilities.` ,`• Optimized and managed database queries,
              resulting in improved data retrieval and application performance.`
              ,`• Orchestrated and managed the implementation of RabbitMQ
              for efficient message queueing, facilitating an asynchronous
              workflow.` ,`• Led and managed a microservices initiative,
              optimizing system architecture and functionality.` ,`•
              Utilized and managed AWS S3 for consistent and scalable file
              storage.` ,`• Implemented and managed Docker for
              containerization, streamlining deployment processes.` ,`•
              Engineered and exposed RESTful APIs, aligning with industry
              standards, ensuring seamless client-server communication.`, `•
              Implemented and managed state-of-the-art security measures with
              stateless JSON Web Tokens (JWTs), ensuring data privacy and user
              security.` ,`• Pioneered and managed the development of a
              full-stack resource management application, achieving a 50 percent
              reduction in scheduling errors and saving 20 plus hours per week.`]


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
              {sentences.map((sentence, index) => (
                <li key={index}>{sentence}</li>
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

