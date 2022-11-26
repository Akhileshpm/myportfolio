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

function reveal() {
    var reveals = document.querySelectorAll("#skillset-heading");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
    const buttonLeft = document.getElementById("left-btn");
    const buttonRight = document.getElementById("right-btn");

    buttonRight.onclick = function () {
      document.getElementById('skillset-box').scrollLeft += 350;
    };
    buttonLeft.onclick = function () {
      document.getElementById('skillset-box').scrollLeft -= 350;
    };
}

const Skillset = () => {

    window.addEventListener("scroll", reveal);
    return (
        <div className='skillSet'>
            <div id="skillset-heading"> Professional Skillset</div>
            <div id='left-btn'>🢀</div>            
            <div id="skillset-box">
                <SkillTag imgName={mongoDB}/>
                <SkillTag imgName={postgres}/>
                <SkillTag imgName={nodejs}/>
                <SkillTag imgName={git}/>
                <SkillTag imgName={cpp}/>
                <SkillTag imgName={react}/>            
                <SkillTag imgName={python}/>
            </div>
            <div id='right-btn'>🢂</div>            
        </div>
    );
};



export default Skillset;