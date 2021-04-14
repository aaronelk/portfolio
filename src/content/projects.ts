import FloridaNaturalImg from "./images/florida-natural.svg";
import JazztownImg from "./images/jazztown.svg";
import TeatimeImg from "./images/teatime.svg";
import GardenImg from "./images/garden.png";
import SpaceImg from "./images/SpaceX.svg";

import FloridaVideo from "./images/florida.mp4";
import JazzVideo from "./images/jazz.mp4";
import SpaceVideo from "./images/space.mp4";

export const projectContent = {
  en: {
    sectionTitle: "My Projects",
    projects: [
      { name: "Spacetown", image: SpaceImg, size: "full", video: SpaceVideo },
      { name: "Jazztown", image: JazztownImg, size: "half", video: JazzVideo },
      { name: "TeaTime", image: TeatimeImg, size: "half" },
      { name: "Florida's Natural", image: FloridaNaturalImg, size: "full", video: FloridaVideo },
      { name: "Auto-Garden", image: GardenImg, size: "full" },
    ],
  },
  fr: {
    sectionTitle: "Projets",
    projects: [
      { name: "Spacetown", image: SpaceImg, size: "full", video: SpaceVideo },
      { name: "Jazztown", image: JazztownImg, size: "half", video: JazzVideo },
      { name: "TeaTime", image: TeatimeImg, size: "half" },
      { name: "Florida's Natural", image: FloridaNaturalImg, size: "full", video: FloridaVideo },
      { name: "Auto-Garden", image: GardenImg, size: "full" },
    ],
  },
};
