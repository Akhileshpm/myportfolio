import {Education} from './Education.js';
import WorkExperience from './WorkExperience.js';
import Footer from './Footer.js';
import Header from './Header.js';
import { About } from './About.js';
import SkillsGalore from './SkillsGalore.js';

export function Home(){
    return (
        <div className="App">
          {/* <Navbar/>     */}
          <Header />
          <About/>
          <WorkExperience/>
          <Education/>
          <SkillsGalore/>
          <Footer/>
          <div>  
          </div>
        </div>
      );
}