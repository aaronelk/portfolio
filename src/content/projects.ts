import { Project } from "../components/projects/types";

import FloridaNaturalImg from "./images/florida-natural.svg";
import JazztownImg from "./images/jazztown.svg";
import TeatimeImg from "./images/teatime.svg";

const floridaNaturalGif = "https://imgur.com/SpMeABR.gif";
const jazzTownGif = "https://imgur.com/xAzPSbh.gif";

export const projects: Project[] = [
  { name: "Florida's Natural", image: FloridaNaturalImg, size: "full", gifUrl: floridaNaturalGif },
  { name: "Jazztown", image: JazztownImg, size: "half", gifUrl: jazzTownGif },
  { name: "TeaTime", image: TeatimeImg, size: "half" },
];
