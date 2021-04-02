import "./about.css";
import { aboutMeContent } from "../../content/about";

export default function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutInner">
        <div className="title"> About Me</div>
        <div className="content">
          {aboutMeContent.map(content => {
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
