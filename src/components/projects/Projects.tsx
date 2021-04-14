import "./projects.css";
import { projectContent } from "../../content/projects";
import { Project } from "./types";
import { Fragment, useEffect, useState } from "react";
import { Modal } from "@material-ui/core";

interface ProjectProps {
  language: 'en' | 'fr'
}

export default function Projects(props: ProjectProps) {

  const [modalState, setModalState] = useState({active: false, video: ''});

  const [content, setContent] = useState(projectContent[props.language])

  useEffect(() => {
    setContent(projectContent[props.language])
  }, [props.language])


  const runGifInModal = (project: Project) => {
    if (project.video) {
      setModalState({active: true, video: project.video})
    }
  }

  return (
    <Fragment>
    <div className="projectsContainer">
      <div className="projectsInner">
        <div className="projectsTitle">{content.sectionTitle}</div>
        <div className="projectContent">
          {content.projects.map(project => {
            return (
              <div className={`projectContainer ${project.size} ${project.video ? 'clickable' : ''}`} onClick={() => runGifInModal(project)}>
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
      onClose={() => setModalState({active: false, video: ''})}
      onClick={() => setModalState({active: false, video: ''})}
      >
        <div className="modalContainer">
          <video autoPlay={true}>
            <source src={modalState.video}></source>
          </video>
        </div>
      </Modal>
    </Fragment>
  );
}
