import dp from "../img/dp.png";
import "../styles/dpHolder.css";
import { useTypewriter } from "react-simple-typewriter";

export function DpHolder(){
    const {text} = useTypewriter({
        words: ['MERN stack developer', 'Works at Qburst', 'Interested in Web development, ML, & AI'],
        loop: true
    })

    return (
        <div className="boundary">
            <div className="dpHolder">
                <img src={dp} alt="ffff"/>  
            </div>
            <span id="title">{' '}</span>
            <div className="typeWriter">
                <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                <p style={{color: 'white'}}>Hi there, I'm Akhilesh</p>
                {/* <span>{' '}</span>  */}
                <span style={{ color: 'red', fontWeight: 'bold' }}>{text}</span>
                </h1>
            </div>
        </div>
    );
};
