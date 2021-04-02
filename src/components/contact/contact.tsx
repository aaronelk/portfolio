import "./contact.css";
import { contactInfo } from "../../content/contact";

export default function Contact() {
  return (
    <div className="contactContainer">
      <div className="contactInner">
        <div className="contactIcons">
          {contactInfo.map(contact => {
            return (
              <a className="contactIcon" href={contact.url} target="_blank" rel="noreferrer">
                <img src={contact.img} />
              </a>
            );
          })}
        </div>
        <div className="contactFooter">
          Like me on LinkedIn, Instagram, Dribble
        </div>
      </div>
    </div>
  );
}
