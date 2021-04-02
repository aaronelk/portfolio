import InstagramImg from "./images/instagram.svg";
import DribbleImg from "./images/dribble.svg";
import LinkedInImg from "./images/linkedin.svg";

export const contactContent = {
  en: {
    sectionTitle: "Contact Me",
    sectionFooter: "Like me on LinkedIn, Instagram, Dribble",
    images: [
      { img: LinkedInImg, url: "http://linkedin.com" },
      { img: InstagramImg, url: "https://instagram.com" },
      { img: DribbleImg, url: "https://dribbble.com/" },
    ],
  },
  fr: {
    sectionTitle: "Contactez moi",
    sectionFooter: "Aimez-moi sur LinkedIn, Instagram, Dribble",
    images: [
      { img: LinkedInImg, url: "http://linkedin.com" },
      { img: InstagramImg, url: "https://instagram.com" },
      { img: DribbleImg, url: "https://dribbble.com/" },
    ],
  },
};
