import React from 'react';
import "../styles/about.css";

export const About = () => {
    return (
      <div className='about-me'>
        <p id='paragraph'>
          Passionate product developer. Loves building products which makes our
          lives better.
          <br /> Experienced in building applications using Node.js.
          <br /> I value writing clean and maintainable code that is easy to
          understand and scalable. Having worked with projects comprising plenty
          of developers, my collaborative skills has taken a step ahead. As a
          software developer I never stopped learning new ways to improve my
          application's performance, making faster SQL queries, and building
          faster APIs. Not only does I am fond of learning I love to contribute
          to the community too. [
          <a
            href='https://dev.to/akhileshpm'
            target='_blank'
            rel='noopener noreferrer'
          >
            Dev.to
          </a>
          ,{' '}
          <a
            href='https://stackoverflow.com/users/13310709/akhilesh-pm'
            target='_blank' 
            rel='noopener noreferrer'
          >
            StackOverflow
          </a>
          ]
          <br />
          Understanding basic data structures and implementing it in our
          softwares whenever needed is one thing that I don't miss. My constant
          learning involves practicing coding problems as well. [
          <a href='https://leetcode.com/u/AkhileshPM/'>Leetcode</a>].
        </p>
      </div>
    );
};
