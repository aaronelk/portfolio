import "./projects.css";
import { projects } from "../../content/projects";

export default function Projects() {
  return (
    <div className="projectsContainer">
      <div className="projectsInner">
        <div className="projectsTitle">My Projects</div>
        <div className="projectContent">
          {projects.map(project => {
            return (
              <div className={`projectContainer ${project.size}`}>
                <img className="projectImage" src={project.image}/>
                <div className="projectTitle">{project.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
