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
            <div className="my-projects">
                <div className="outer" id="project1" onClick={()=>window.open("https://github.com/Akhileshpm/ResumeBuilder")}>
                    <h2>Resume Builder</h2>
                    <div className="work-skills">
                        <div id="tag">MongoDB</div>
                        <div id="tag">ExpressJs</div>
                        <div id="tag">ReactJs</div>
                        <div id="tag">NodeJs</div>
                    </div>
                    <p className="project-description">A resume-building web app with a simple and intuitive UI for early professionals.
                    The pdf file of the resume is created using the HTML2Canvas package from npm.</p>
                    <img src={resumeThumbnail} alt="404"/>
                    <img id="link-to-github" src={github} alt="404" onClick={()=>window.open("https://github.com/Akhileshpm/ResumeBuilder")}/>
                    <a  className="project-link-btn" href="https://github.com/Akhileshpm/ResumeBuilder">view</a>
                </div>
                <div className="outer" id="project2" >
                    <h2>Emaily</h2>
                    <div className="work-skills">
                        <div id="tag">PERN</div>
                        <div id="tag">SendGrid</div>
                        <div id="tag">OAuth 2.0</div>
                    </div>
                    <p className="project-description">
                    Developed a full-stack web application for creating and monitoring surveys sent by the user.
    Used ReactJS for frontend and created REST APIs using ExpressJS.
                    </p>
                <img src={emaily} alt="404"/>
                <a className="project-link-btn" href="https://github.com/Akhileshpm/EmailSurvey">view</a>
                </div>
                <div className="outer" id="project3" >
                    <h2>Dice thrower</h2>
                    <div className="work-skills">
                        <div id="tag">HTML5</div>
                        <div id="tag">JavaScript</div>
                        <div id="tag">CSS</div>
                    </div>  
                    <p className="project-description">
                    A simple dice thrower game with two virtual dice.
                    </p>    
                    <img src={dice} alt="404"/>
                    <img id="link-to-github" src={github} alt="404" onClick={()=>window.open("https://github.com/Akhileshpm/DICE-project")}/>
                <a className="project-link-btn" href="https://github.com/Akhileshpm/DICE-project">view</a>
                </div>   
                <div className="outer" id="project4">
                <h2>FreeChat</h2>
                    <div className="work-skills">
                        <div id="tag">Socket.io</div>
                        <div id="tag">NodeJs</div>
                        <div id="tag">HTML/CSS</div>
                    </div>
                    <p className="project-description">
                    A free chatting application built using socket.io. It has the option for joining chat rooms.
                    </p>
                <img id="link-to-github" src={github} alt="404"onClick={()=>window.open("https://github.com/Akhileshpm/EmailSurvey")}/>
                <a className="project-link-btn" href="https://freechatapp101.herokuapp.com">view</a>
                </div>             
            </div>
        </div>
        </>
    )
}