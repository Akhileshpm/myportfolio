import React from 'react';
import '../styles/header.css';
import { useTypewriter } from 'react-simple-typewriter';
import '../styles/dpHolder.css';
import { DpHolder } from './DpHolder';

const Header = () => {
      const { text } = useTypewriter({
        words: [
          'MERN stack developer',
          'Works at Qburst',
          'Interested in Web development, ML, & AI',
        ],
        loop: true,
      });
  return (
    <header className='header'>
      <h1>Akhilesh P M</h1>
      <div className='typeWriter'>
        <h1
          style={{ margin: 'auto 0', fontWeight: 'normal' }}
        >
          {/* <span>{' '}</span>  */}
          <span style={{ color: 'red', fontWeight: 'bold' }}>{text}</span>
        </h1>
      </div>
      <DpHolder/>
    </header>
  );
};

export default Header;
