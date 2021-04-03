import { Project } from "../components/projects/types";

import FloridaNaturalImg from "./images/florida-natural.svg";
import JazztownImg from "./images/jazztown.svg";
import TeatimeImg from "./images/teatime.svg";

import FloridaNaturalGif from "./images/ORANGESGIFFINAL.gif";
import JazztownGif from "./images/JAZZGIFFINAL.gif";

export const projectContent = {
  en: {
    sectionTitle: "My Projects",
    projects: [
      { name: "Florida's Natural", image: FloridaNaturalImg, size: "full", gifUrl: FloridaNaturalGif },
      { name: "Jazztown", image: JazztownImg, size: "half", gifUrl: JazztownGif },
      { name: "TeaTime", image: TeatimeImg, size: "half" },
    ],
  },
  fr: {
    sectionTitle: "Projets",
    projects: [
      { name: "Florida's Natural", image: FloridaNaturalImg, size: "full", gifUrl: FloridaNaturalGif },
      { name: "Jazztown", image: JazztownImg, size: "half", gifUrl: JazztownGif },
      { name: "TeaTime", image: TeatimeImg, size: "half" },
    ],
  },
};
