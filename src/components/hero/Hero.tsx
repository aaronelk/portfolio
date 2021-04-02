import './hero.css'
import HeroCircle from './heroimage.svg'

export default function Hero() {
  return (
    <div className="heroContainer">
      <div className="heroTop">
        <div className="heroTopItem name">
          Aaron 
          <br/>
          Elkeslassy
        </div>
        <div className="heroTopItem role">UX | UI designer Montreal</div>
        <div className="heroTopItem language"><div className="languageChoice"> <div className="languageFR">FR</div> | ENG </div></div>
      </div>
      <div className="heroCicleImage">
        <img src={HeroCircle} />
      </div>
    </div>
  );
}

