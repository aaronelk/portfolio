import { Project } from "../components/projects/types";

import FloridaNaturalImg from "./images/florida-natural.svg";
import JazztownImg from "./images/jazztown.svg";
import TeatimeImg from "./images/teatime.svg";
import FloridaNaturalGif from "./images/florida.gif";
import JazzTownGif from "./images/jazztown.gif";

export const projects: Project[] = [
  { name: "Florida's Natural", image: FloridaNaturalImg, size: "full", gifUrl: FloridaNaturalGif },
  { name: "Jazztown", image: JazztownImg, size: "half", gifUrl: JazzTownGif },
  { name: "TeaTime", image: TeatimeImg, size: "half" },
];
