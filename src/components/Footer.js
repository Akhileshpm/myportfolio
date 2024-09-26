import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-links'>
        <a
          href='https://github.com/akhileshpm'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub
        </a>
        <a
          href='https://www.linkedin.com/in/akhileshpm333'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn
        </a>
        <a
          href='https://dev.to/akhileshpm'
          target='_blank'
          rel='noopener noreferrer'
        >
          Dev.to
        </a>
        <a
          href='https://www.instagram.com/akhileshpm3'
          target='_blank'
          rel='noopener noreferrer'
        >
          Instagram
        </a>
        <a
          href='https://leetcode.com/u/AkhileshPM/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Leetcode
        </a>
        <a href='mailto:akhileshpm333@gmail.com'>akhileshpm333@gmail.com</a>
        <a href='tel:+919746863388'>+91 9746863388</a>
        {/* Add more social media links as needed */}
      </div>
    </footer>
  );
};

export default Footer;
