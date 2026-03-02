import React from 'react';
import '../styles/skills-galore.css';

const skills = [
  'NestJS',
  'Node.js',
  'Express',
  'PostgreSQL',
  'NoSQL',
  'AWS',
  'Redis',
  'RabbitMQ',
  'React.js',
  'HTML/CSS',
  'REST APIs',
  'System Design',
  'Debugging',
  'Git',
  'GraphQL',
  'Typescript',
  'Docker',
  'Grafana',
  'CI/CD',
  'Google Cloud Platform',
  'SpannerDB',
  'Kafka',
  
];

export default function SkillsGalore() {
  return (
    <div>
      <h1>Skills Galore</h1>
      <div className='skills-galore'>
        {skills.map((skill, index) => (
          <div key={index} className={`skill ${index}`}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
