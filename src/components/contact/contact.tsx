import "./contact.css";
import { contactContent } from "../../content/contact";
import { useEffect, useState } from "react";

interface ContactProps {
  language: 'en' | 'fr'
}

export default function Contact(props: ContactProps) {

  const [content, setContent] = useState(contactContent[props.language])

  useEffect(() => {
    setContent(contactContent[props.language])
  }, [props.language])

  return (
    <div className="contactContainer">
      <div className="contactInner">
        <div className="contactTitle">{content.sectionTitle}</div>
        <div className="contactIcons">
          {content.images.map(contact => {
            return (
              <a className="contactIcon" href={contact.url} target="_blank" rel="noreferrer">
                <img src={contact.img} />
              </a>
            );
          })}
        </div>
        <div className="contactFooter">
          {content.sectionFooter}
          <p><b>aaron.elkeslassy@gmail.com</b></p>
        </div>
      </div>
    </div>
  );
}
