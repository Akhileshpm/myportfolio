import "../styles/project.css";
import resumeThumbnail from "../img/Resume_thumbnail.jpg";
import emaily from "../img/emaily.jpg";
import dice from "../img/dice.jpg";
import github from "../img/github.png";


export function Project(){
    return(
        <>
        <div className="box">
            <div id="projects-heading">My Works</div>
            <div className="outer" id="project1" onClick={()=>window.open("https://github.com/Akhileshpm/ResumeBuilder")}>
                <h2>Resume Buider</h2>
                <div className="work-skills">
                    <div id="tag">MongoDB</div>
                    <div id="tag">ExpressJS</div>
                    <div id="tag">ReactJs</div>
                    <div id="tag">Nodejs</div>
                </div>
                <p>A resume-building web app with a simple and intuitive UI for early professionals.
The pdf file of the resume is created using the HTML2Canvas package from npm.</p>
            <img src={resumeThumbnail} alt="404"/>
            <img id="link-to-github" src={github} alt="404" onClick={()=>window.open("https://github.com/Akhileshpm/ResumeBuilder")}/>
            </div>
            <div className="outer" id="project2" >
                <h2>Emaily</h2>
                <div className="work-skills">
                    <div id="tag">PERN</div>
                    <div id="tag">SendGrid</div>
                    <div id="tag">OAuth 2.0</div>
                </div>
                <p>
                Developed a full-stack web application for creating and monitoring surveys sent by the user.
Used ReactJS for frontend and created REST APIs using ExpressJS.
                </p>
            <img src={emaily} alt="404"/>
            <img id="link-to-github" src={github} alt="404"onClick={()=>window.open("https://github.com/Akhileshpm/EmailSurvey")}/>
            </div>
            <div className="outer" id="project3" >
                <h2>Dice thrower</h2>
                <div className="work-skills">
                    <div id="tag">HTML5</div>
                    <div id="tag">JavaScript</div>
                    <div id="tag">CSS</div>
                </div>  
                <p>
                A simple dice thrower game with two virtual dice.
                </p>    
                <img src={dice} alt="404"/>
                <img id="link-to-github" src={github} alt="404" onClick={()=>window.open("https://github.com/Akhileshpm/DICE-project")}/>
            </div>
        </div>
        </>
    )
}