import "./skills.css";
import { skills } from '../../content/skills'

export default function Skills() {
  

  return (
    <div className="skillsContainer">
      <div className="skillsInner">
        <div className="titleSkills">Skills</div>
        <div className="contentSkills">Programs I use</div>
        <div className="skillItems">
          {skills.map(skill => {
            return (
              <div className="skillContainer">
                <img src={skill.img} />
                <div className="skillName">{skill.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
