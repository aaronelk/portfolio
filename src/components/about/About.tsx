import "./about.css";
import { aboutMeContent } from "../../content/about";
import { useEffect, useState } from "react";

interface AboutProps {
  language: 'en' | 'fr'
}

export default function About(props: AboutProps) {

  const [content, setContent] = useState(aboutMeContent[props.language])

  useEffect(() => {
    setContent(aboutMeContent[props.language])
  }, [props.language])

  return (
    <div className="aboutContainer">
      <div className="aboutInner">
        <div className="title">{content.sectionTitle}</div>
        <div className="content">
          {content.sectionContent.map(content => {
            return (
              <div>
                {content} <br />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
