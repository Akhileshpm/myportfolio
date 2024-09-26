import Chronology  from './Chronology';
import '../styles/education.css';

const educationData = [
  { year: '2021', details: "Completed Bachelor's degree in Computer Science" },
  { year: '2017', details: "Completed Higher Secondary in Computer Science" },
  { year: '2015', details: "Completed High School" },
];

export function Education() {
    return  <div className='education'>
        <h1>Education</h1>
        <Chronology events={educationData} />
        </div>;
}
