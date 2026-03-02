import Chronology from './Chronology';
import '../styles/work-experience-info.css';

const workExperience = [
  { year: '2025', details: "Software Engineer at Keyvalue Software Systems", company: 'company2' },
  { year: '2021', details: "Software Engineer at Qburst", company: 'company1' }
];

export default function WorkExperience() {
  return (
    <div className='work-experience'>
      <h1>Work Experience</h1>
      <Chronology events={workExperience} showButton={true}/>
    </div>
  );
}
