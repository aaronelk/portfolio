import "./projects.css";
import { projects } from "../../content/projects";
import { Project } from "./types";
import { Fragment, useState } from "react";
import { Modal } from "@material-ui/core";

export default function Projects() {

  const [modalState, setModalState] = useState({active: false, gifUrl: ''});


  const runGifInModal = (project: Project) => {
    if (project.gifUrl) {
      setModalState({active: true, gifUrl: project.gifUrl})
    }
  }

  return (
    <Fragment>
    <div className="projectsContainer">
      <div className="projectsInner">
        <div className="projectsTitle">My Projects</div>
        <div className="projectContent">
          {projects.map(project => {
            return (
              <div className={`projectContainer ${project.size} ${project.gifUrl ? 'clickable' : ''}`} onClick={() => runGifInModal(project)}>
                <img className="projectImage" src={project.image}/>
                <div className="projectTitle">{project.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    <Modal
      open={modalState.active}
      onClose={() => setModalState({active: false, gifUrl: ''})}
      onClick={() => setModalState({active: false, gifUrl: ''})}
      >
        <div className="modalContainer">
          <img  className="modalGif" src={modalState.gifUrl}/>
        </div>
      </Modal>
    </Fragment>
  );
}
