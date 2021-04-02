import './index.css'
import About from "../about/About";
import Hero from "../hero/Hero";
import Nav from "../nav/Nav";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import Contact from "../contact/contact"
import { useState } from 'react';

export default function App() {

  const [language, setLanguage] = useState<'en' | 'fr'>('en')

  return (
    <div className="mainContainer">
      <Nav language={language} />
      <Hero changeLanguage={setLanguage} language={language}/>
      <About language={language} />
      <Skills language={language} />
      <Projects language={language} />
      <Contact language={language} />
    </div>
  )
}
