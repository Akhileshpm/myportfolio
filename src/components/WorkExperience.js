import Chronology from './Chronology';
import '../styles/work-experience-info.css';

const workExperience = [
  { year: '2021', details: "Software Engineer at Qburst" }
];

export default function WorkExperience() {
  return (
    <div className='work-experience'>
      <h1>Work Experience</h1>
      <Chronology events={workExperience} showButton={true}/>
    </div>
  );
}
