import FloridaNaturalImg from "./images/florida-natural.svg";
import JazztownImg from "./images/jazztown.svg";
import TeatimeImg from "./images/teatime.svg";
import GardenImg from "./images/garden.png";
import SpaceImg from "./images/SpaceX.svg";

import FloridaVideo from "./images/florida.mp4";
import JazzVideo from "./images/jazz.mp4";
import SpaceVideo from "./images/space.mp4";
import GardenVideo from "./images/GardenVideo.mp4";
import TeaTimeVideo from "./images/TeaTimeFinal.mp4";



export const projectContent = {
  en: {
    sectionTitle: "My Projects",
    projects: [
      { name: "TeaTime", image: TeatimeImg, size: "half", video: TeaTimeVideo},
      { name: "Jazztown", image: JazztownImg, size: "half", video: JazzVideo },
      { name: "SpaceX", image: SpaceImg, size: "full", video: SpaceVideo },
      { name: "Florida's Natural", image: FloridaNaturalImg, size: "full", video: FloridaVideo },
      { name: "Auto-Garden", image: GardenImg, size: "full", video: GardenVideo},
    ],
  },
  fr: {
    sectionTitle: "Projets",
    projects: [
      { name: "TeaTime", image: TeatimeImg, size: "half", video: TeaTimeVideo},
      { name: "Jazztown", image: JazztownImg, size: "half", video: JazzVideo },
      { name: "SpaceX", image: SpaceImg, size: "full", video: SpaceVideo },
      { name: "Florida's Natural", image: FloridaNaturalImg, size: "full", video: FloridaVideo},
      { name: "Auto-Garden", image: GardenImg, size: "full", video: GardenVideo},/**/
    ],
  },
};
