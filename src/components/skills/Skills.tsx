import "./skills.css";
import { skillsContent } from '../../content/skills'
import { useEffect, useState } from "react";

interface SkillsProps {
  language: 'en' | 'fr'
}


export default function Skills(props: SkillsProps) {

  const [content, setContent] = useState(skillsContent[props.language])

  useEffect(() => {
    setContent(skillsContent[props.language])
  }, [props.language])

  return (
    <div className="skillsContainer">
      <div className="skillsInner">
        <div className="titleSkills">{content.sectionTitle}</div>
        <div className="contentSkills">{content.sectionContent}</div>
        <div className="skillItems">
          {content.skills.map(skill => {
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
