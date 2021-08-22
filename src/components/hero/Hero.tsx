import { useEffect, useState } from "react";
import "./hero.css";
import HeroCircle from "./RotatingProfile.mp4";
import { heroContent } from '../../content/hero'

interface HeroProps {
  changeLanguage: Function;
  language: 'en' | 'fr'
}

export default function Hero(props: HeroProps) {

  const [content, setContent] = useState(heroContent[props.language])

  const setLanguage = (language: "en" | "fr") => {
    props.changeLanguage(language);
  };

  useEffect(() => {
    setContent(heroContent[props.language])
  }, [props.language])

  return (
    <div className="heroContainer">
      <div className="heroTop">
        <div className="heroTopItem name">
          {content.myName[0]}
          <br />
          {content.myName[1]}
        </div>
        <div className="heroTopItem role">{content.role}</div>
        <div className="heroTopItem language">
          <div className="languageChoice">
            <div className={`languageFr ${props.language === 'fr' ? 'selected' : ''}`} onClick={() => setLanguage("fr")}>
              FR
            </div>
            <span className="languageDivider"> | </span>
            <span className={`languageEn ${props.language === 'en' ? 'selected' : ''}`} onClick={() => setLanguage("en")}>ENG</span>
          </div>
        </div>
      </div>
      <div className="heroCicleImage">
        <video autoPlay muted src={HeroCircle} />
      </div>
    </div>
  );
}
