import React from 'react';
import SkillTag from './SkillTag';
import mongoDB from '../img/mongoDB.png';
import postgres from '../img/postgres.png';
import nodejs from '../img/nodejs.png';
import git from '../img/git.png';
import python from '../img/python.png';
import react from '../img/react.png';
import cpp from '../img/cpp.png';
import '../styles/skillset.css';

const Skillset = () => {
    return (
        <div className='skillSet'>
            <div id="skillset-heading"> Professional Skillset</div>
            <div id="skillset-box">
                <SkillTag imgName={mongoDB}/>
                <SkillTag imgName={postgres}/>
                <SkillTag imgName={nodejs}/>
                <SkillTag imgName={git}/>
                <SkillTag imgName={cpp}/>
                <SkillTag imgName={react}/>            
                <SkillTag imgName={python}/>
            </div>
        </div>
    );
};

export default Skillset;