import "./projects.css";
import { projectContent } from "../../content/projects";
import { Project } from "./types";
import { Fragment, useEffect, useState } from "react";
import { Modal } from "@material-ui/core";

interface ProjectProps {
  language: 'en' | 'fr'
}

export default function Projects(props: ProjectProps) {

  const [modalState, setModalState] = useState({active: false, gifUrl: ''});

  const [content, setContent] = useState(projectContent[props.language])

  useEffect(() => {
    setContent(projectContent[props.language])
  }, [props.language])


  const runGifInModal = (project: Project) => {
    if (project.gifUrl) {
      setModalState({active: true, gifUrl: project.gifUrl})
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
